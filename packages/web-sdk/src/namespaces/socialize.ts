import { GigyaRequest, GigyaResponse } from '@gigya-ts/rest-api';

import { GigyaJSFunction, GigyaJSUIDSignature } from '../types/gigya-helpers';

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4177b28a70b21014bbc5a10ce4041860.html#parameters
 */
export type SocializeRefreshUIRequestJS = GigyaRequest<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4177b28a70b21014bbc5a10ce4041860.html#response-object-data-members
 */
export type SocializeRefreshUIResponseJS = GigyaResponse<
    {
        /**
         * The user's UID.
         *
         * @note This response field is not documentated.
         */
        UID?: string;
        /**
         * The JWT for the user. Only included in the response if `include: "id_token"` is passed in the request.
         *
         * @note This response field is not documentated.
         */
        id_token?: string;
    } & GigyaJSUIDSignature
>;

export type GigyaSocializeNamespaceJS = {
    /**
     * Manually triggers a refresh of Gigya's Add-ons. The refresh in only applied for the user's details, not the Add-on content.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4177b28a70b21014bbc5a10ce4041860.html
     */
    refreshUI: GigyaJSFunction<SocializeRefreshUIRequestJS, SocializeRefreshUIResponseJS>;
};
