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

/**
 * https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41515b5770b21014bbc5a10ce4041860.html#parameters
 */
export type DSDeleteRequest = GigyaRequest<{
    /**
     * The ID of the object to delete.
     */
    oid: string;
    /**
     * A string indicating the type of the object.
     */
    type: string;
    /**
     * A comma separated list of fields to delete. Acceptable values for this parameter:
     *  - Data field names, specifying the the complete path, i.e. album.photo.photoTitle_t
     *  - Partial field names (fields that contain only a part of the path to sub-objects, i.e. album.photo) - indicate to retrieve everything below that path.
     *  - "*" - indicates to retrieve the entire stored object.
     */
    fields?: string;
    /**
     * If the object is associate with a user, then the ID of the user should be specified and forms a compound key together with the oid.
     */
    UID?: string;
}>;

/**
 * https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41515b5770b21014bbc5a10ce4041860.html?locale=en-US#response-data
 */
export type DSDeleteResponse = GigyaResponse<{}>;

/**
 * https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41516e7f70b21014bbc5a10ce4041860.html?locale=en-US#parameters
 */
export type DSDeleteSchemaFieldsRequest = GigyaRequest<{
    /**
     * The schema type defined in the Data Store from which to delete fields.
     */
    type: string;
    /**
     * The fields to delete from the specified Data Store type.
     *
     * @example ["field1","field2"]
     */
    dataSchema: string[];
}>;

export type DSDeleteSchemaFieldsResponse = GigyaResponse<{}>;

/**
 * Retrieves an object's or the specified datum from Gigya's Data Store.
 *
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4151948570b21014bbc5a10ce4041860.html#parameters
 */
export type DSGetRequest = GigyaRequest<{
    /**
     * The ID of the object to retrieve.
     */
    oid: string;
    /**
     * A string indicating the type of the object, equivalent to a name classifying objects as being of the same type; used in searches and when applying schemas.
     */
    type: string;
    /**
     * A comma separated list of fields to retrieve. Acceptable values for this parameter:
     * - Data field names, specifying the the complete path, i.e. album.photo.photoTitle_t
     * - Partial field names (fields that contain only a part of the path to sub-objects, i.e. album.photo) - indicate to retrieve everything below that path.
     * - "*" - indicates to retrieve the entire stored object.
     */
    fields?: string;
    /**
     * If the object is associate with a user, then the ID of the user should be specified and forms a compound key together with the oid.
     *
     * @note If you call this method through an external OAuth2 SDK, then the UID may be passed implicitly within the access_token.
     */
    UID?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4151948570b21014bbc5a10ce4041860.html?#response-data
 */
export type DSGetResponse<DSObjectSchema> = GigyaResponse<DSObject<DSObjectSchema>>;

/**
 * https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4151baad70b21014bbc5a10ce4041860.html#parameters
 */
export type DSGetSchemaRequest = GigyaRequest<{
    /**
     * A string indicating the type of the object, equivalent to a schema name.
     */
    type: string;
    /**
     * Specifies what parts of the schema to return, can be one of the following options:
     *  - full - (default) return the complete schema including implicit fields and dynamic fields.
     *  - explicitOnly - return only the parts of the schema that were explicitly set by the partner using a setSchema call.
     *  - clientOnly - return only the fields in the schema that allow client access. For those fields return only the type and format and required properties.
     */
    mode?: 'full' | 'explicitOnly' | 'clientOnly';
}>;

/**
 * https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4151baad70b21014bbc5a10ce4041860.html#response-data
 *
 * @todo: Implement
 */
export type DSGetSchemaResponse = GigyaResponse<{
    NOT_IMPLEMENTED: 'NOT_IMPLEMENTED';
}>;

/**
 * https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4151cda070b21014bbc5a10ce4041860.html#response-data
 */
export type DSGetTypesResponse = GigyaRequest<{
    /**
     * A list of the types which make up this DS schema.
     */
    types?: string[];
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

/**
 * https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41523fa270b21014bbc5a10ce4041860.html?#parameters
 */
export type DSStoreRequest<DSObjectSchema> = GigyaRequest<{
    /**
     * Specifies the data to store.
     */
    data: DSObjectSchema;
    /**
     * The ID of the object to delete.
     */
    oid: string;
    /**
     * A string indicating the type of the object.
     */
    type: string;
    /**
     * If the object is associate with a user, then the ID of the user should be specified and forms a compound key together with the oid.
     */
    UID?: string;
    /**
     * This parameter defines how to handle conflicting updates. The parameter may receive one of the following values:
     * - "arrayPush" (default) - will cause arrays data provided with this API call to be appended to existing arrays data in the DB.
     * - "arraySet" - will replace the content of existing arrays data in the DB with the values of arrays data provided with this API call.
     * - "replace" - will cause the entire object data in the DB to be replaced with the new data provided with this call.
     */
    updateBehavior: 'arrayPush' | 'arraySet' | 'replace';
}>;

/**
 * https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41523fa270b21014bbc5a10ce4041860.html?#response-data
 */
export type DSStoreResponse = GigyaResponse<{
    /**
     * The object's unique identifier. The value is either the oid parameter that you specified in the API call or a unique
     * string generated by SAP Customer Data Cloud (if you have set the parameter to be "auto").
     */
    oid?: string;
}>;

export type GigyaDSNamespace<DSObjectSchema> = {
    delete: (params: DSDeleteRequest) => DSDeleteResponse;
    get: (params: DSGetRequest) => DSGetResponse<DSObjectSchema>;
    getSchema: (params: DSGetSchemaRequest) => DSGetSchemaResponse;
    search: (params: DSSearchRequest) => DSSearchResponse<DSObjectSchema>;
    store: (params: DSStoreRequest<DSObjectSchema>) => DSStoreResponse;
};
