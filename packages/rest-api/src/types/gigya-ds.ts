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
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/415219aa70b21014bbc5a10ce4041860.html#schema-object
 */
export type DSSchemaObject = {
    /**
     * This object defines properties per data fields. The object contains field names and their corresponding list of properties. The field name should be the full path name with dots, i.e. "work.address".
     */
    fields: {
        [fieldName: string]: {
            /**
             * Defines the data type of this field. The supported values are:
             * - integer
             * - float
             * - boolean
             * - string
             * - date
             * - long
             * - text
             * - binary
             *
             * When the 'type' property is not specified the type will be deduced from the field name extension or automatically according to the content of the first item. When defining a 'binary' field type, it is not inferred from the data must be declared explicitly through the 'type' parameter.
             *
             * Please note that field's type cannot be changed after it contains data.
             */
            type?: 'integer' | 'float' | 'boolean' | 'string' | 'date' | 'long' | 'text' | 'binary';
            /**
             * Specifies whether to allow unsigned requests to write into this field. The supported values are:
             * - serverOnly (default) - Only signed requests coming from the server are allowed.
             * - clientCreate - Unsigned requests coming from the client are allowed to write into this field, only if it wasn't set before.
             * - clientModify - Unsigned requests coming from the client are allowed to write into this field and modify existing values.
             */
            writeAccess?: 'serverOnly' | 'clientCreate' | 'clientModify';
            /**
             * Allows assigning a regular expression that defines the format of this data field. Gigya will verify that data set in this data field matches the format. If the data set in this field doesn't match the format, Gigya will not set the data and will return an error. The best practice is to validate the data format on your client application. The format property accepts a string of the form: "regex('')".
             */
            format?: string;
            /**
             * An array of strings containing languages with which a text field is compatible, in addition to the default languages. A maximum of four such languages are supported. The values passed in this property are added to the existing languages in the field, and if the total number exceeds four languages, the operation fails.
             *
             * @note The only language currently supported for this functionality is Japanese.
             */
            languages?: string[];
            /**
             * May be applied to string, basic-string. Passing a value of 'AES' (the encryption standard applied) sets the field to encrypted. When string fields are encrypted, you may use them in a search (e.g. using accounts.search) only by passing an exact match (such as x = "ABCDE"), and not partial matches (x CONTAINS "ABC"). String search values are case sensitive.
             *
             * - If you set the encrypt property on a field that already contains data, the existing data will remain un-encrypted. Only new data will be encrypted.
             * - Once a field is set to encrypt, it cannot be undone.
             * - To encrypt a field that is not string or basic-string, use the encryptedNonSearchable parameter instead.
             */
            encrypt?: 'AES';
        };
    };
    /**
     * Specifies whether the schema is strict or dynamic. The default value of this parameter is true i.e. dynamic schema. In a dynamic schema you may add new fields that are not defined in the schema to the DS. The new fields are automatically added to the dynamic schema. In a strict schema you can only write into fields that are already defined in the schema.
     */
    dynamicSchema?: boolean;
};
