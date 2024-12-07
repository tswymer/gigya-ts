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

import { GigyaFetchRequest, gigyaRequestHandler, ParamsOf } from './utils';

/**
 * The different types of credentials that can be used to authenticate Gigya requests.
 */
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
 * The parameters to initialize the Gigya client.
 */
export type GigyaInitParams = {
    dataCenter: GigyaDataCenter;
    apiKey: string;
    credentials: GigyaCrendentials;
    middleware?: {
        onBeforeRequest?: Array<(request: GigyaFetchRequest) => Promise<GigyaFetchRequest>>;
        onAfterResponse?: Array<(request: GigyaFetchRequest, response: Response) => Promise<Response>>;
    };
};

/**
 * Client for the Gigya REST API.
 */
export function Gigya<
    DataSchema extends GigyaData,
    PreferencesSchema extends GigyaPreferences,
    SubscriptionsSchema extends GigyaSubscriptions,
>(initParams: GigyaInitParams) {
    type MyAccountsNamespace = GigyaAccountsNamespace<DataSchema, PreferencesSchema, SubscriptionsSchema>;

    return {
        /**
         * The "gigya.accounts" namespace.
         *
         * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413128b070b21014bbc5a10ce4041860.html
         */
        accounts: new Proxy({} as MyAccountsNamespace, {
            get:
                (_namespace, endpoint: keyof MyAccountsNamespace) =>
                (endpointParams: ParamsOf<MyAccountsNamespace[typeof endpoint]>[0]) =>
                    gigyaRequestHandler({
                        ...initParams,
                        namespace: 'accounts',
                        endpoint,
                        endpointParams,
                    }),
        }),

        /**
         * The "gigya.audit" namespace.
         *
         * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41436e2b70b21014bbc5a10ce4041860.html
         */
        audit: new Proxy({} as GigyaAuditNamespace, {
            get:
                (_namespace, endpoint: keyof GigyaAuditNamespace) =>
                (endpointParams: ParamsOf<GigyaAuditNamespace[typeof endpoint]>[0]) =>
                    gigyaRequestHandler({
                        ...initParams,
                        namespace: 'audit',
                        endpoint,
                        endpointParams,
                    }),
        }),

        /**
         * The "gigya.ds" namespace.
         *
         * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/415026de70b21014bbc5a10ce4041860.html
         */
        ds: new Proxy({} as GigyaDSNamespace, {
            get:
                (_namespace, endpoint: keyof GigyaDSNamespace) =>
                (endpointParams: ParamsOf<GigyaDSNamespace[typeof endpoint]>[0]) =>
                    gigyaRequestHandler({
                        ...initParams,
                        namespace: 'ds',
                        endpoint,
                        endpointParams,
                    }),
        }),

        /**
         * The "gigya.fidm" namespace.
         *
         * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/813ddca3a4aa45f79fc35c1c72661668.html
         */
        fidm: new Proxy({} as GigyaFIdMNamespace, {
            get:
                (_namespace, endpoint: keyof GigyaFIdMNamespace) =>
                (endpointParams: ParamsOf<GigyaFIdMNamespace[typeof endpoint]>[0]) =>
                    gigyaRequestHandler({
                        ...initParams,
                        namespace: 'fidm',
                        endpoint,
                        endpointParams,
                    }),
        }),

        /**
         * The "gigya.idx" namespace.
         *
         * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/813ddca3a4aa45f79fc35c1c72661668.html
         */
        idx: new Proxy({} as GigyaIDXNamespace, {
            get:
                (_namespace, endpoint: keyof GigyaIDXNamespace) =>
                (endpointParams: ParamsOf<GigyaIDXNamespace[typeof endpoint]>[0]) =>
                    gigyaRequestHandler({
                        ...initParams,
                        namespace: 'idx',
                        endpoint,
                        endpointParams,
                    }),
        }),

        /**
         * The "gigya.reports" namespace.
         *
         * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/416c2bdc70b21014bbc5a10ce4041860.html
         */
        reports: new Proxy({} as GigyaReportsNamespace, {
            get:
                (_namespace, endpoint: keyof GigyaReportsNamespace) =>
                (endpointParams: ParamsOf<GigyaReportsNamespace[typeof endpoint]>[0]) =>
                    gigyaRequestHandler({
                        ...initParams,
                        namespace: 'reports',
                        endpoint,
                        endpointParams,
                    }),
        }),

        /**
         * The "gigya.socialize" namespace.
         *
         * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41735f5270b21014bbc5a10ce4041860.html
         */
        socialize: new Proxy({} as GigyaSocializeNamespace, {
            get:
                (_namespace, endpoint: keyof GigyaSocializeNamespace) =>
                (endpointParams: ParamsOf<GigyaSocializeNamespace[typeof endpoint]>[0]) =>
                    gigyaRequestHandler({
                        ...initParams,
                        namespace: 'socialize',
                        endpoint,
                        endpointParams,
                    }),
        }),
    };
}
