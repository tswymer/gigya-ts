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

type GigyaCrendentials =
    | {
        type: 'key-secret';
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
         * The private key to use for the request.
         */
        privateKey: string;
    }
    | undefined;

/**
 * Helper type to extract the parameters of a function, useful for getting the input type of a gigya request.
 */
type ParamsOf<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never;

type GigyaInitParams = {
    dataCenter: GigyaDataCenter;
    apiKey: string;
    credentials: GigyaCrendentials;
    debug?: boolean;
};

export function Gigya<
    DataSchema extends GigyaData,
    PreferencesSchema extends GigyaPreferences,
    SubscriptionsSchema extends GigyaSubscriptions,
>(initParams: GigyaInitParams) {
    type PersonalAccountsNamespace = GigyaAccountsNamespace<DataSchema, PreferencesSchema, SubscriptionsSchema>;

    /**
     * The "gigya.accounts" namespace.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413128b070b21014bbc5a10ce4041860.html
     */
    const accounts = <Endpoint extends keyof PersonalAccountsNamespace>(
        accountsEndpoint: Endpoint,
        endpointParams: ParamsOf<PersonalAccountsNamespace[Endpoint]>[0],
    ) =>
        sendGigyaRequest<ReturnType<PersonalAccountsNamespace[Endpoint]>>({
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
    const { headers, body } = addCredentialsToGigyaRequest({
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: initialBody,
        credentials: params.credentials,
    });

    if (params.debug) logGigyaRequest(gigyaRequestURL, body);

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

type GigyaRequestHeadersAndBody = {
    headers: { 'Content-Type': string; Authorization?: string };
    body: URLSearchParams;
    credentials: GigyaInitParams['credentials'];
};

/**
 * Handles the different authentication methods for Gigya requests.
 */
function addCredentialsToGigyaRequest(request: GigyaRequestHeadersAndBody): GigyaRequestHeadersAndBody {
    // Handle different types of credentials
    switch (request.credentials?.type) {
        case 'key-secret': {
            request.body.append('userKey', request.credentials.userKey);
            request.body.append('secret', request.credentials.secret);
            break;
        }
        case 'bearer-token': {
            request.headers.Authorization = `Bearer ${request.credentials.token}`;
            break;
        }
        case 'asymmetric-key': {
            throw new Error('Asymmetric key authentication is not yet implemented.');
        }
        case undefined:
            break;
    }

    return request;
}

function logGigyaRequest(requestURL: string, requestBody: URLSearchParams) {
    console.log('Gigya Request:');

    console.log({
        requestURL,
        requestBody,
    });
}

function logGigyaResponse(response: unknown) {
    console.log('Gigya Response:');

    console.log(response);
}
