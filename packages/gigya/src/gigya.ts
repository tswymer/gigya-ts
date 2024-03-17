import {
    GigyaAccountsNamespace,
    GigyaAuditNamespace,
    GigyaData,
    GigyaDataCenter,
    GigyaDSNamespace,
    GigyaPreferences,
    GigyaSocializeNamespace,
    GigyaSubscriptions,
} from '@gigya-ts/rest-api';

export type GigyaServerCredentials = {
    userKey: string;
    secret: string;
};

export type GigyaClientCredentials = {
    accessToken: string;
};

export type GigyaInitParams = {
    dataCenter: GigyaDataCenter;
    apiKey: string;
    credentials?: GigyaClientCredentials | GigyaServerCredentials;
    debug?: boolean;
};

type ParamsOf<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never;

export const Gigya = <
    DataSchema extends GigyaData,
    PreferencesSchema extends GigyaPreferences,
    SubscriptionsSchema extends GigyaSubscriptions,
>(
    initParams: GigyaInitParams,
) => {
    type PersonalAccountsNamespace = GigyaAccountsNamespace<DataSchema, PreferencesSchema, SubscriptionsSchema>;

    const accounts = <Endpoint extends keyof PersonalAccountsNamespace>(
        accountsEndpoint: Endpoint,
        endpointParams: ParamsOf<PersonalAccountsNamespace[Endpoint]>[0],
    ) =>
        gigyaRequestFactory<ReturnType<PersonalAccountsNamespace[Endpoint]>>({
            ...initParams,
            namespace: 'accounts',
            endpoint: accountsEndpoint,
            requestParams: endpointParams,
        });

    // @TODO: This isn't super elegant, because you now need to pass the name of the DS endpoint as a string, which
    // is annoying and doesn't look great. Here's an example, see how I need specify 'search' twice:
    //
    // gigya.ds<MyDSObjectSchema, 'search'>('search', {
    //     query: 'SELECT * FROM myObject',
    // }),
    const ds = <DSObjectSchema, Endpoint extends keyof GigyaDSNamespace<DSObjectSchema>>(
        dsEndpoint: Endpoint,
        endpointParams: ParamsOf<GigyaDSNamespace<DSObjectSchema>[Endpoint]>[0],
    ) =>
        gigyaRequestFactory<ReturnType<GigyaDSNamespace<DSObjectSchema>[Endpoint]>>({
            ...initParams,
            namespace: 'ds',
            endpoint: dsEndpoint,
            requestParams: endpointParams,
        });

    const socialize = <Endpoint extends keyof GigyaSocializeNamespace>(
        socializeEndpoint: Endpoint,
        endpointParams: ParamsOf<GigyaSocializeNamespace[Endpoint]>[0],
    ) =>
        gigyaRequestFactory<ReturnType<GigyaSocializeNamespace[Endpoint]>>({
            ...initParams,
            namespace: 'socialize',
            endpoint: socializeEndpoint,
            requestParams: endpointParams,
        });

    const audit = <Endpoint extends keyof GigyaAuditNamespace>(
        socializeEndpoint: Endpoint,
        endpointParams: ParamsOf<GigyaAuditNamespace[Endpoint]>[0],
    ) =>
        gigyaRequestFactory<ReturnType<GigyaAuditNamespace[Endpoint]>>({
            ...initParams,
            namespace: 'audit',
            endpoint: socializeEndpoint,
            requestParams: endpointParams,
        });

    return {
        accounts,
        ds,
        socialize,
        audit,
    };
};

type GigyaRequestHeaders = {
    'Content-Type': 'application/x-www-form-urlencoded';
    Authorization?: string;
};

type GigyaRequestFactoryParams = {
    namespace: 'accounts' | 'ds' | 'socialize' | 'audit';
    endpoint: string;
    requestParams: Record<string, unknown>;
} & GigyaInitParams;

const gigyaRequestFactory = async <T>(params: GigyaRequestFactoryParams): Promise<T> => {
    const gigyaRequestURL = `https://accounts.${params.dataCenter}/${params.namespace}.${params.endpoint}`;

    const headers: GigyaRequestHeaders = {
        'Content-Type': 'application/x-www-form-urlencoded',
        ...(params.credentials && 'accessToken' in params.credentials
            ? { Authorization: `Bearer ${params.credentials.accessToken}` }
            : {}),
    };

    const body = new URLSearchParams();

    body.append('apiKey', params.apiKey);

    if (params.credentials && 'userKey' in params.credentials && 'secret' in params.credentials) {
        body.append('userKey', params.credentials.userKey);
        body.append('secret', params.credentials.secret);
    }

    for (const name in params.requestParams) {
        const param = params.requestParams[name];

        switch (true) {
            case typeof param === 'undefined':
                break;
            case typeof param === 'object':
                body.append(name, JSON.stringify(param));
                break;
            default:
                body.append(name, String(param));
        }
    }

    if (params.debug) logGigyaRequest(gigyaRequestURL, headers, body);

    const gigyaResponse = await fetch(gigyaRequestURL, {
        method: 'POST',
        headers,
        body,
    });

    if (!gigyaResponse.ok) {
        let textResponse = 'Unanble to parse gigya response as text';

        try {
            textResponse = await gigyaResponse.text();
        } catch {
            // Do nothing
        }

        throw new Error(`Gigya request failed with status ${gigyaResponse.status}. Full response:\n${textResponse}`);
    }
    const parsedGigyaResponse = await gigyaResponse.json();

    if (params.debug) logGigyaResponse(parsedGigyaResponse);

    return parsedGigyaResponse;
};

const logGigyaRequest = (requestURL: string, requestHeaders: GigyaRequestHeaders, requestBody: URLSearchParams) => {
    console.log('Gigya Request:');

    console.log({
        requestURL,
        requestHeaders,
        requestBody,
    });
};

const logGigyaResponse = (response: unknown) => {
    console.log('Gigya Response:');

    console.log(response);
};
