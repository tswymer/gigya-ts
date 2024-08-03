import { GigyaRequest, GigyaResponse } from '../types/gigya-requests';

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/416c3f1470b21014bbc5a10ce4041860.html#parameters
 */
export type GetAccountsStatsRequest = GigyaRequest<{
    /**
     * The first day of data to include in the report (in the format "YYYY-MM-DD").
     */
    startDate: string;
    /**
     * The last day of data to include in the report (in the format "YYYY-MM-DD").
     */
    endDate: string;
    /**
     * A comma separated list of dimensions to include in the report. The report data will be grouped by these dimensions. The currently supported dimensions are: 'date' and 'cid'.
     */
    dimensions: 'date' | 'cid' | 'date,cid' | 'cid,date';
    /**
     * A comma separated list of measures (data fields) to include in the report. The currently supported measures are:
     * - 'initRegistrations'
     * - 'registrations'
     * - 'finalizeRegistrations'
     * - 'socialLogins'
     * - 'newSocialUsers'
     * - 'siteLogins'
     * - 'emailVerifications'
     * - 'passwordResets'
     * - 'newUsers'
     */
    measures: string;
    /**
     * Determines the format of the data field of the response. The options are either 'csv' (default) or 'json'.
     */
    dataFormat?: 'csv' | 'json';
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/416c3f1470b21014bbc5a10ce4041860.html#response-data
 */
export type GetAccountsStatsResponse = GigyaResponse<{
    /**
     * The headers of the response data.
     */
    headers?: Array<
        | 'date'
        | 'cid'
        | 'initRegistrations'
        | 'registrations'
        | 'finalizeRegistrations'
        | 'socialLogins'
        | 'newSocialUsers'
        | 'siteLogins'
        | 'emailVerifications'
        | 'passwordResets'
        | 'newUsers'
    >;
    /**
     * The data of the response. The format of the data field is determined by the 'format' parameter of the request.
     */
    data?: Array<Array<string | number>> | string;
}>;

export type GigyaReportsNamespace = {
    /**
     * This API retrieves Gigya's Accounts statistics when Customer Identity is enabled.
     * 
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/416c3f1470b21014bbc5a10ce4041860.html
     */
    getAccountsStats: (params: GetAccountsStatsRequest) => Promise<GetAccountsStatsResponse>;
};
