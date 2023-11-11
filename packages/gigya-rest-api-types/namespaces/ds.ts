import { GigyaRequest, GigyaResponse } from '../types/gigya-helpers';

/**
 * A Gigya Data Store object.
 * @TODO: This isn't officially documented anywhere, find some official documentation and link it.
 */
export type DSObject<DSObjectSchema> = {
    /**
     * The ID of the object
     */
    oid: string;
    /**
     * If the object is associate with a user, then the ID of the user.
     */
    UID?: string;
    /**
     * The data of the data store object.
     */
    data: DSObjectSchema;
    /**
     * The time of the latest change in this object, in Java time (number of milliseconds since Jan. 1st 1970).
     */
    lastUpdated: number;
    /**
     * The time of the latest change in this object, in ISO 8601 format.
     */
    lastUpdatedTime: string;
    /**
     * The time of this object's creation, in Java time (number of milliseconds since Jan. 1st 1970).
     */
    created: number;
    /**
     * The time of this object's creation, in ISO 8601 format.
     */
    createdTime: string;
};

export type DSGetSchemaRequest = GigyaRequest<{
    myParam: string;
}>;

export type DSGetSchemaResponse = GigyaResponse<{
    dsResponse: string;
}>;

/**
 * Searches and retrieves data from Gigya's Data Store (DS) using an SQL-like query. For security reasons this method is not available for client side SDKs, only for server side SDKs. SQL queries are converted into Gigya's proprietary query language. SQL injection attacks are not possible because queries are both created by the customer and then converted by Gigya.
 *
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/415206b370b21014bbc5a10ce4041860.html#parameters
 */
export type DSSearchRequest = GigyaRequest<{
    /**
     * A SQL-like query specifying the data to retrieve.
     */
    query: string;
    /**
     * When set to true, the search response will include, in addition to the first page, another field named nextCursorId, which is used to fetch the next batch of results. This parameter should only be used on the first request and later should be removed from the request. When openCursor is true, the Limit clause sets the number of results returned in the batch.
     *
     * @note You cannot use a cursor if you have a 'group by' or when using 'start'.
     */
    openCursor?: boolean;
    /**
     * The cursor ID that contains the nextCursorId value received in the first search call. Note: You cannot pass both cursorId and query on the same request - cursorId brings the next page for the search for which it was opened. Also, the time between search requests using a cursorId must not exceed 5 minutes.
     *
     * @note Each request should contain a different cursorId obtained from the response of the previous request (not the first) using the nextCursorId field. The exception to this rule is when a request fails or when a particular result set needs to be resent; in this case, resend the same cursorID (as long as it has not expired) to receive its associated result set.
     */
    cursorId?: string;
    /**
     * The timeout for the request (in milliseconds). Default value is 20000 (20 seconds). Maximum allowed value is 60000 (60 seconds).
     */
    timeout?: number;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/415206b370b21014bbc5a10ce4041860.html?#response-data
 */
export type DSSearchResponse<DSObjectSchema> = GigyaResponse<{
    /**
     * The number of objects returned in the "data" array.
     */
    objectsCount?: number;
    /**
     * 	The total number of object that satisfy the query in the DB. This is useful for knowing how many objects are in the DB, when fetching limited amount using the "limit" parameter.
     */
    totalCount?: number;
    /**
     * Used to fetch the next batch of results. This parameter is not returned on the last batch of results, its absence means that the result set is finished.
     */
    nextCursorId?: string;
    /**
     * The data returned by the search query.
     */
    results?: DSObject<DSObjectSchema>[];
}>;

/* eslint-disable no-unused-vars */
export type GigyaDSNamespace<DSObjectSchema> = {
    getSchema: (params: DSGetSchemaRequest) => DSGetSchemaResponse;
    search: (params: DSSearchRequest) => DSSearchResponse<DSObjectSchema>;
};
