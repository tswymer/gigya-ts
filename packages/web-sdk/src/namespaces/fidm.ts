import { GigyaRequest, GigyaResponse } from '@gigya-ts/rest-api';
import { GigyaJSFunction } from '../types/gigya-helpers';

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4156c59370b21014bbc5a10ce4041860.html
 */
export type FIdMInitSSORequestJS = GigyaRequest<{
    /**
     * The name of the SP to SSO to.
     */
    spName: string;
    /**
     * A URL that the SP will redirect to at the end of the SSO process. This is usually the landing page on the SP that is requested.
     */
    redirectURL: string;
    /**
     * Determines the format of the response.
     * - `json` (default) - The response is returned as a JSON object.
     */
    format?: string;
    /**
     * A reference to a callback function. SAP Customer Data Cloud calls the specified function along with the results of the API method when the API method completes.
     * The callback function should be defined with the following signature: functionName(Response).
     */
    callback?: string;
    /**
     * The default value of this parameter is false, which means that the HTTP status code in SAP Customer Data Cloud's response is always 200 (OK), even if an error occurs.
     * The error code and message is given within the response data (see below).  If this parameter is set to true, the HTTP status code in SAP Customer Data Cloud's response would reflect an error, if one occurred.
     */
    httpStatusCodes?: boolean;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4156c59370b21014bbc5a10ce4041860.html#response-data
 */
export type FIdMInitSSOResponseJS = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4155ce8870b21014bbc5a10ce4041860.html
 */
export type FIdMContinueSSORequestJS = GigyaRequest<{
    /**
     * A reference to a callback function. SAP Customer Data Cloud calls the specified function along with the results of the API method when the API method completes.
     * The callback function should be defined with the following signature: functionName(Response).
     */
    callback?: string;
}>;

export type FIdMContinueSSOResponseJS = GigyaResponse<{}>;

export type GigyaFIdMNamespaceJS = {
    saml: {
        /**
         * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4156c59370b21014bbc5a10ce4041860.html
         */
        initSSO: GigyaJSFunction<FIdMInitSSORequestJS, FIdMInitSSOResponseJS>;
        /**
         * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4155ce8870b21014bbc5a10ce4041860.html
         */
        continueSSO: GigyaJSFunction<FIdMContinueSSORequestJS, FIdMContinueSSOResponseJS>;
    };
};
