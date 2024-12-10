import { GigyaInitParams } from './gigya';

/**
 * Helper type to represent a fetch request made to Gigya.
 */
export type GigyaFetchRequest = {
    method: 'GET' | 'POST';
    namespace: ParamsOf<typeof gigyaRequestHandler>[0]['namespace'];
    endpoint: string;
    url: string;
    headers: { 'Content-Type': string; Authorization?: string };
    body: URLSearchParams;
};

/**
 * Helper type to extract the parameters of a function, useful for getting the input type of a Gigya request.
 */
export type ParamsOf<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never;

/**
 * Helper function to execute a Gigya request.
 *
 * This function constructs the request URL, adds the necessary headers and body, and executes the request.
 */
export async function gigyaRequestHandler(
    params: {
        namespace: 'accounts' | 'audit' | 'ds' | 'fidm' | 'idx' | 'reports' | 'socialize';
        endpoint: string;
        endpointParams: Record<string, unknown>;
    } & GigyaInitParams,
) {
    const requestBody = new URLSearchParams();
    requestBody.append('apiKey', params.apiKey);

    // Add each of the request parameters to the request body
    for (const paramName in params.endpointParams) {
        const requestParam = params.endpointParams[paramName];

        // Depending on the type of the parameter, add it to the request body in the appropriate way
        switch (typeof requestParam) {
            // Don't add undefined parameters to the request body
            case 'undefined':
                break;
            // Stringify objects
            case 'object':
                requestBody.append(paramName, JSON.stringify(requestParam));
                break;
            // Treat all other parameters as strings
            default:
                requestBody.append(paramName, String(requestParam));
        }
    }

    // Create the headers and body of the request, adding the provided credentials
    let request = await addCredentialsToRequest(
        {
            method: 'POST',
            namespace: params.namespace,
            endpoint: params.endpoint,
            url: `https://accounts.${params.dataCenter}/${params.namespace}.${params.endpoint}`,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: requestBody,
        },
        params.credentials,
    );

    // Run each onBeforeRequest middleware
    for (const onBeforeRequestHook of params.hooks?.onBeforeRequest ?? []) request = await onBeforeRequestHook(request);

    // Execute the request
    const response = await fetch(request.url, {
        method: request.method,
        headers: request.headers,
        body: request.body,
    });

    // Check we received a successful response status
    if (!response.ok) {
        if (params.hooks?.onFailedRequest) await params.hooks.onFailedRequest(request, response);
        throw new Error(`${request.namespace}.${request.endpoint} failed with status ${response.status}.`);
    }

    // Parse the initial response from Gigya
    let parsedResponse;
    try {
        parsedResponse = await response.json();
    } catch (e) {
        if (params.hooks?.onFailedRequest) await params.hooks.onFailedRequest(request, response);
        throw new Error(
            `${request.namespace}.${request.endpoint} succeded with status ${response.status}, but parsing the JSON response failed.`,
        );
    }

    // Run each onAfterResponse middleware
    for (const onAfterResponseHook of params.hooks?.onAfterResponse ?? [])
        parsedResponse = await onAfterResponseHook(request, parsedResponse);

    return parsedResponse;
}

/**
 * Handles the different authentication methods for Gigya requests.
 */
export async function addCredentialsToRequest(
    request: GigyaFetchRequest,
    credentials: GigyaInitParams['credentials'],
): Promise<GigyaFetchRequest> {
    switch (credentials.type) {
        case 'key-secret': {
            // Add the user key and secret to the request body
            request.body.append('userKey', credentials.userKey);
            request.body.append('secret', credentials.secret);
            break;
        }
        case 'bearer-token': {
            // Add the bearer token to the request headers
            request.headers.Authorization = `Bearer ${credentials.token}`;
            break;
        }
        case 'asymmetric-key': {
            // Construct the JWT header and body
            const header = toBase64URL(
                JSON.stringify({
                    alg: 'RS256',
                    typ: 'JWT',
                    kid: credentials.userKey,
                }),
            );
            const body = toBase64URL(
                JSON.stringify({
                    iat: Math.floor(Date.now() / 1000),
                    jti: crypto.randomUUID(),
                }),
            );

            // Import the private key to sign the request
            const signingKey = await importGigyaPrivateKey(credentials.privateKey);

            // Sign the JWT
            const signature = toBase64URL(
                Buffer.from(
                    await crypto.subtle.sign(signingKey.algorithm.name, signingKey, Buffer.from(`${header}.${body}`)),
                ),
            );

            // Add the JWT to the request headers
            request.headers.Authorization = `Bearer ${header}.${body}.${signature}`;
            break;
        }
        case 'none':
            break;
    }

    return request;
}

/**
 * Converts a string or buffer to a base64 URL-safe string, used in JWTs.
 */
function toBase64URL(input: string | Buffer) {
    return Buffer.from(input).toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

/**
 * Imports a private key from Gigya to use to sign requests.
 */
function importGigyaPrivateKey(privateKey: string) {
    // Gigya provides PKCS#1 keys, so we need to check that they were converted to PKCS#8 first
    // openssl pkcs8 -topk8 -inform PEM -outform PEM -nocrypt -in gigya-pkcs1.key -out gigya-pkcs8.key
    if (
        privateKey.includes('-----BEGIN RSA PRIVATE KEY-----') ||
        privateKey.includes('-----END RSA PRIVATE KEY-----')
    ) {
        throw new Error(
            'You have provided a PKCS#1 key, but this function requires a PKCS#8 key. Please convert your key to PKCS#8.',
        );
    }

    // Fetch the key from between the header and footer
    const pemContents = privateKey
        .replace('-----BEGIN PRIVATE KEY-----', '')
        .replace('-----END PRIVATE KEY-----', '')
        .replace(/\\n/g, '')
        .replace(/\n/g, '')
        .replace(/\r/g, '');

    // Base64 decode the key and convert it to a buffer
    const keyContents = Buffer.from(pemContents, 'base64');

    // Create a CryptoKey from the binary DER
    return crypto.subtle.importKey(
        'pkcs8',
        keyContents,
        {
            name: 'RSASSA-PKCS1-v1_5',
            hash: 'SHA-256',
        },
        false,
        ['sign'],
    );
}
