import { AuditLogObject } from '../types/gigya-audit';
import { GigyaRequest, GigyaResponse } from '../types/gigya-requests';

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4143815a70b21014bbc5a10ce4041860.html
 */
export type AuditSearchRequest = GigyaRequest<{
    /**
     * The SQL-like query used to search the audit log. Please refer to the Query language specification above. Note that Gigya field names are case-sensitive, i.e., uid is NOT the same as UID.
     */
    query: string;
    /**
     * The cursor ID that contains the nextCursorId value received in the first search call. You cannot pass both cursorId and query on the same request - cursorId brings the next page for the search for which it was opened. In addition, the time between search requests using a cursorId must not exceed 5 minutes.
     * Each request should contain a different cursorId obtained from the response of the previous request (not the first) using the nextCursorId field. The exception to this rule is when a request fails or when a particular result set needs to be re-sent; in this case, resend the same cursorID (as long as it has not expired) to receive its associated result set.
     */
    cursorId?: string;
    /**
     * When set to true, the search response will include, in addition to the first page, another field named nextCursorId, which is used to fetch the next batch of results. This parameter should only be used on the first request and later should be removed from the request. When openCursor is true, the Limit clause sets the number of results returned in the batch.
     * You cannot use a cursor if you have a group by or when using start.
     */
    openCursor?: boolean;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4143815a70b21014bbc5a10ce4041860.html#response-data
 */
export type AuditSearchResponse = GigyaResponse<{
    /**
     * The number of objects returned in the "results" array.
     */
    objectsCount: number;
    /**
     * The total number of objects that satisfy the query in the DB. This is useful when fetching a limited amount using the " limit " parameter.
     */
    totalCount: number;
    /**
     * An array of auditLog objects.
     */
    results: AuditLogObject[];
    /**
     * Used to fetch the next batch of results. This parameter is not returned on the last batch of results, its absence means that the result set is finished.
     */
    nextCursorId: string | null;
}>;

export type GigyaAuditNamespace = {
    /**
     * The method enables you to search your site's audit log using an SQL-like query. A short delay is possible between the writing of audit log data and its availability in queries.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4143815a70b21014bbc5a10ce4041860.html
     */
    search: (params: AuditSearchRequest) => Promise<AuditSearchResponse>;
};
