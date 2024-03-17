import { GigyaRequest, GigyaResponse } from '../types/gigya-helpers';
/**
 * The method enables you to search your site's audit log using an SQL-like query. A short delay is possible between the writing of audit log data and its availability in queries.
 *
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4143815a70b21014bbc5a10ce4041860.html
 */
export type AuditSearchRequest = GigyaRequest<{
    /**
     * The SQL-like query used to search the audit log. Please refer to the Query language specification above. Note that Gigya field names are case-sensitive, i.e., uid is NOT the same as UID.
     */
    query: string;
}>;

export type AuditSearchResponse = GigyaResponse<{
    dsResponse: string;
}>;

/* eslint-disable no-unused-vars */
export type GigyaAuditNamespace = {
    search: (params: AuditSearchRequest) => AuditSearchResponse;
};
