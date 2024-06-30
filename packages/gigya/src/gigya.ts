import {
    GigyaAccountsNamespace,
    GigyaAuditNamespace,
    GigyaData,
    GigyaDataCenter,
    GigyaDSNamespace,
    GigyaFIdMNamespace,
    GigyaIDXNamespace,
    GigyaPreferences,
    GigyaReportsNamespace,
    GigyaSocializeNamespace,
    GigyaSubscriptions,
} from '@gigya-ts/rest-api';

/**
 * The different types of credentials that can be used to authenticate Gigya requests.
 */
type GigyaCrendentials =
    | {
        type: 'user-key-secret';
        /**
         * The application or user key to use for the request.
         */
        userKey: string;
        /**
         * The secret to use for the request.
         */
        secret: string;
    }
    | {
        type: 'bearer-token';
        /**
         * The bearer token to use for the request.
         */
        token: string;
    }
    | {
        type: 'asymmetric-key';
        /**
         * The application or user key to use for the request.
         */
        userKey: string;
        /**
         * The private key to use for the request.
         */
        privateKey: string;
    }
    | {
        type: 'none';
    };

/**
 * Helper type to extract the parameters of a function, useful for getting the input type of a gigya request.
 */
type ParamsOf<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never;

/**
 * The parameters to initialize the Gigya client.
 */
type GigyaInitParams = {
    dataCenter: GigyaDataCenter;
    apiKey: string;
    credentials: GigyaCrendentials;
    debug?: boolean;
};

/**
 * Wrapper client for the Gigya REST API.
 */
export function Gigya<
    DataSchema extends GigyaData,
    PreferencesSchema extends GigyaPreferences,
    SubscriptionsSchema extends GigyaSubscriptions,
>(initParams: GigyaInitParams) {
    type MyAccountsNamespace = GigyaAccountsNamespace<DataSchema, PreferencesSchema, SubscriptionsSchema>;

    /**
     * The "gigya.accounts" namespace.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413128b070b21014bbc5a10ce4041860.html
     */
    const accounts = <Endpoint extends keyof MyAccountsNamespace>(
        accountsEndpoint: Endpoint,
        endpointParams: ParamsOf<MyAccountsNamespace[Endpoint]>[0],
    ) =>
        sendGigyaRequest<ReturnType<MyAccountsNamespace[Endpoint]>>({
            ...initParams,
            namespace: 'accounts',
            endpoint: accountsEndpoint,
            requestParams: endpointParams,
        });

    /**
     * The "gigya.audit" namespace.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41436e2b70b21014bbc5a10ce4041860.html
     */
    const audit = <Endpoint extends keyof GigyaAuditNamespace>(
        socializeEndpoint: Endpoint,
        endpointParams: ParamsOf<GigyaAuditNamespace[Endpoint]>[0],
    ) =>
        sendGigyaRequest<ReturnType<GigyaAuditNamespace[Endpoint]>>({
            ...initParams,
            namespace: 'audit',
            endpoint: socializeEndpoint,
            requestParams: endpointParams,
        });

    // @TODO: This isn't super elegant, because you now need to pass the name of the DS endpoint as a string, which
    // is annoying and doesn't look great. Here's an example, see how I need specify 'search' twice:
    //
    // gigya.ds<MyDSObjectSchema, 'search'>('search', {
    //     query: 'SELECT * FROM myObject',
    // }),
    /**
     * The "gigya.ds" namespace.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/415026de70b21014bbc5a10ce4041860.html
     */
    const ds = <DSObjectSchema, Endpoint extends keyof GigyaDSNamespace<DSObjectSchema>>(
        dsEndpoint: Endpoint,
        endpointParams: ParamsOf<GigyaDSNamespace<DSObjectSchema>[Endpoint]>[0],
    ) =>
        sendGigyaRequest<ReturnType<GigyaDSNamespace<DSObjectSchema>[Endpoint]>>({
            ...initParams,
            namespace: 'ds',
            endpoint: dsEndpoint,
            requestParams: endpointParams,
        });

    /**
     * The "gigya.fidm" namespace.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/813ddca3a4aa45f79fc35c1c72661668.html
     */
    const fidm = <Endpoint extends keyof GigyaFIdMNamespace>(
        fidmEndpoint: Endpoint,
        endpointParams: ParamsOf<GigyaFIdMNamespace[Endpoint]>[0],
    ) =>
        sendGigyaRequest<ReturnType<GigyaFIdMNamespace[Endpoint]>>({
            ...initParams,
            namespace: 'fidm',
            endpoint: fidmEndpoint,
            requestParams: endpointParams,
        });

    /**
     * The "gigya.idx" namespace.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/813ddca3a4aa45f79fc35c1c72661668.html
     */
    const idx = <Endpoint extends keyof GigyaIDXNamespace>(
        idxEndpoint: Endpoint,
        endpointParams: ParamsOf<GigyaIDXNamespace[Endpoint]>[0],
    ) =>
        sendGigyaRequest<ReturnType<GigyaIDXNamespace[Endpoint]>>({
            ...initParams,
            namespace: 'idx',
            endpoint: idxEndpoint,
            requestParams: endpointParams,
        });

    /**
     * The "gigya.reports" namespace.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/416c2bdc70b21014bbc5a10ce4041860.html
     */
    const reports = <Endpoint extends keyof GigyaReportsNamespace>(
        reportsEndpoint: Endpoint,
        endpointParams: ParamsOf<GigyaReportsNamespace[Endpoint]>[0],
    ) =>
        sendGigyaRequest<ReturnType<GigyaReportsNamespace[Endpoint]>>({
            ...initParams,
            namespace: 'reports',
            endpoint: reportsEndpoint,
            requestParams: endpointParams,
        });

    /**
     * The "gigya.socialize" namespace.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41735f5270b21014bbc5a10ce4041860.html
     */
    const socialize = <Endpoint extends keyof GigyaSocializeNamespace>(
        socializeEndpoint: Endpoint,
        endpointParams: ParamsOf<GigyaSocializeNamespace[Endpoint]>[0],
    ) =>
        sendGigyaRequest<ReturnType<GigyaSocializeNamespace[Endpoint]>>({
            ...initParams,
            namespace: 'socialize',
            endpoint: socializeEndpoint,
            requestParams: endpointParams,
        });

    return {
        accounts,
        audit,
        ds,
        fidm,
        idx,
        reports,
        socialize,
    };
}

/**
 * Helper function to execute a Gigya request.
 *
 * This function constructs the request URL, adds the necessary headers and body, and executes the request.
 */
async function sendGigyaRequest<T>(
    params: {
        namespace: 'accounts' | 'audit' | 'ds' | 'fidm' | 'idx' | 'reports' | 'socialize';
        endpoint: string;
        requestParams: Record<string, unknown>;
    } & GigyaInitParams,
): Promise<T> {
    // Create the URL for the request
    const gigyaRequestURL = `https://accounts.${params.dataCenter}/${params.namespace}.${params.endpoint}`;

    // Add all attributes to the request body
    const initialBody = new URLSearchParams();

    // Append the API key to the request body
    initialBody.append('apiKey', params.apiKey);

    // Add each of the request parameters to the request body
    for (const paramName in params.requestParams) {
        const requestParam = params.requestParams[paramName];

        // Depending on the type of the parameter, add it to the request body in the appropriate way
        switch (true) {
            // Don't add undefined parameters to the request body
            case typeof requestParam === 'undefined':
                break;
            // Stringify objects
            case typeof requestParam === 'object':
                initialBody.append(paramName, JSON.stringify(requestParam));
                break;
            // Add all other parameters as strings
            default:
                initialBody.append(paramName, String(requestParam));
        }
    }

    // Create the headers and body of the request, adding the provided credentials
    const { headers, body } = await addCredentialsToGigyaRequest({
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: initialBody,
        credentials: params.credentials,
    });

    if (params.debug) logGigyaRequest(gigyaRequestURL, headers, body);

    // Execute the request
    const gigyaResponse = await fetch(gigyaRequestURL, {
        method: 'POST',
        headers,
        body,
    });

    // @TODO: Anyone using the "httpStatusCodes" param on a Gigya API will cause this to fail currently :)
    if (!gigyaResponse.ok) {
        let textResponse: string;
        try {
            textResponse = await gigyaResponse.text();
        } catch {
            textResponse = 'Unanble to parse gigya response as text.';
        }
        throw new Error(`Gigya request failed with status ${gigyaResponse.status}. Full response:\n${textResponse}`);
    }

    const parsedGigyaResponse = await gigyaResponse.json();

    if (params.debug) logGigyaResponse(parsedGigyaResponse);

    return parsedGigyaResponse;
}

/**
 * Helper type to represent the headers and body of a Gigya request.
 */
type GigyaRequestHeadersAndBody = {
    headers: { 'Content-Type': string; Authorization?: string };
    body: URLSearchParams;
    credentials: GigyaInitParams['credentials'];
};

/**
 * Handles the different authentication methods for Gigya requests.
 */
async function addCredentialsToGigyaRequest(request: GigyaRequestHeadersAndBody): Promise<GigyaRequestHeadersAndBody> {
    // Handle different types of credentials
    switch (request.credentials?.type) {
        case 'user-key-secret': {
            // Add the user key and secret to the request body
            request.body.append('userKey', request.credentials.userKey);
            request.body.append('secret', request.credentials.secret);
            break;
        }
        case 'bearer-token': {
            // Add the bearer token to the request headers
            request.headers.Authorization = `Bearer ${request.credentials.token}`;
            break;
        }
        case 'asymmetric-key': {
            // Construct the JWT header and body
            const header = toBase64URL(
                JSON.stringify({
                    alg: 'RS256',
                    typ: 'JWT',
                    kid: request.credentials.userKey,
                }),
            );
            const body = toBase64URL(
                JSON.stringify({
                    iat: Math.floor(Date.now() / 1000),
                    jti: crypto.randomUUID(),
                }),
            );

            // Import the private key to sign the request
            const signingKey = await importGigyaPrivateKey(request.credentials.privateKey);

            // Sign the JWT
            const signatureBuffer = await crypto.subtle.sign(
                signingKey.algorithm.name,
                signingKey,
                Buffer.from(`${header}.${body}`),
            );
            const signature = toBase64URL(Buffer.from(signatureBuffer));

            // Construct the JWT
            const jwt = `${header}.${body}.${signature}`;

            // Add the JWT to the request headers
            request.headers.Authorization = `Bearer ${jwt}`;
            break;
        }
        case undefined:
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
async function importGigyaPrivateKey(privateKey: string) {
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

/**
 * Helper function to log a Gigya request to the console.
 */
function logGigyaRequest(
    requestURL: string,
    headers: GigyaRequestHeadersAndBody['headers'],
    requestBody: URLSearchParams,
) {
    console.log('Gigya Request:', {
        requestURL,
        headers,
        requestBody,
    });
}

/**
 * Helper function to log a Gigya response to the console.
 */
function logGigyaResponse(response: unknown) {
    console.log('Gigya Response:', response);
}
