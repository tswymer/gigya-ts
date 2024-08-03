import { DSObject, DSSchemaObject } from '../types/gigya-ds';
import { GigyaRequest, GigyaResponse } from '../types/gigya-requests';

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
 * https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41515b5770b21014bbc5a10ce4041860.html#response-data
 */
export type DSDeleteResponse = GigyaResponse<{}>;

/**
 * https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41516e7f70b21014bbc5a10ce4041860.html#parameters
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
 */
export type DSGetSchemaResponse = GigyaResponse<{
    /**
     * A JSON object that details the schema structure.
     */
    schema?: DSSchemaObject;
}>;

/**
 * This request is empty and not documented.
 */
export type DSGetTypesRequest = GigyaRequest<{}>;

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
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/415219aa70b21014bbc5a10ce4041860.html#parameters
 */
export type DSSetSchemaRequest = GigyaRequest<{
    /**
     * A string indicating the type of the object, equivalent to a schema name. The objective of this field is to classify objects as sharing the same schema.
     */
    type: string;
    /**
     * A JSON object defining the schema to be set.
     */
    dataSchema: DSSchemaObject;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/415219aa70b21014bbc5a10ce4041860.html#response-data
 */
export type DSSetSchemaResponse = GigyaResponse<{}>;


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

export type GigyaDSNamespace = {
    /**
     * Deletes object data or an entire object from Gigya's Data Store.
     * 
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41515b5770b21014bbc5a10ce4041860.html
     */
    delete: (params: DSDeleteRequest) => Promise<DSDeleteResponse>;

    /**
     * Deletes a field from a specified Gigya Data Store schema type.
     * 
     * Once a field is deleted:
     * - You cannot save data to that field, nor retrieve data that was saved to that field.
     * - You cannot recreate a field of the same name in the schema.
     * 
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41516e7f70b21014bbc5a10ce4041860.html 
     */
    deleteSchemaFields: (params: DSDeleteSchemaFieldsRequest) => Promise<DSDeleteSchemaFieldsResponse>;

    /**
     * Retrieves an object's or the specified datum from Gigya's Data Store.
     * 
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4151948570b21014bbc5a10ce4041860.html
     */
    get: <DSObjectSchema>(params: DSGetRequest) => Promise<DSGetResponse<DSObjectSchema>>;

    /**
     * This method retrieves the schema of a specified data type in Gigya's Data Store (DS).
     * 
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4151baad70b21014bbc5a10ce4041860.html
     */
    getSchema: (params: DSGetSchemaRequest) => Promise<DSGetSchemaResponse>;

    /**
     * This method retrieves the schema data types defined in Gigya's Data Store (DS).
     * 
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4151cda070b21014bbc5a10ce4041860.html
     */
    getTypes: (params: DSGetTypesRequest) => Promise<DSGetTypesResponse>;

    /**
     * Searches and retrieves data from Gigya's Data Store (DS) using an SQL-like query. For security reasons this method is not available for client side SDKs, only for server side SDKs. SQL queries are converted into Gigya's proprietary query language. SQL injection attacks are not possible because queries are both created by the customer and then converted by Gigya.
     * 
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/415206b370b21014bbc5a10ce4041860.html
     */
    search: <DSObjectSchema>(params: DSSearchRequest) => Promise<DSSearchResponse<DSObjectSchema>>;

    /**
     * This method allows specifying a schema for a data type in Gigya's Data Store (DS). The schema sets field names, data types, formatting and encryption as well as client side access restrictions. Data object schemas act as meta-data, guiding Gigya how to handle the data in the specified fields.
     * - Depending on schema setting, other fields can be added to the storage outside the schema, Gigya will add them as is without special treatment.
     * - Field deletion: a field in the Data object schema is eligible for deletion if no data has been saved to it. To delete a field in the schema call ds.deleteSchemaFields.
     * - Changes to schema are incremental, when setting the schema for part of the fields, the properties of the omitted fields remain unchanged.
     * - Unless specified otherwise, schema defined fields are only accessible from the server.
     * 
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/415219aa70b21014bbc5a10ce4041860.html
     */
    setSchema: (params: DSSetSchemaRequest) => Promise<DSSetSchemaResponse>;

    /**
     * Stores an object data in SAP Customer Data Cloud's Data Store (DS). The Data Store is only available for use with fully registered accounts.
     * 
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41523fa270b21014bbc5a10ce4041860.html
     */
    store: <DSObjectSchema>(params: DSStoreRequest<DSObjectSchema>) => Promise<DSStoreResponse>;
};
