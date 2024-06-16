export type GigyaValidationError = {
    errorCode: number;
    message: string;
    fieldName: string;
};

export type GigyaProfile = {
    firstName?: string;
    lastName?: string;
    nickName?: string;
    address?: string;
    city?: string;
    country?: string;
    email?: string;
    gender?: string;
    locale?: string;
    phones?: Array<GigyaPhone>;
    zip?: string;
    photoURL?: string;
};

export type GigyaPhone = {
    /**
     * The user's phone number.
     */
    number: string;
    /**
     * The user's phone type.
     */
    type: string;
};

/**
 * @TODO: This object isn't documented very well, use with a grain of salt.
 */
export type GigyaSkill = {
    /**
     * The user's skill.
     */
    skill?: string;
    /**
     * The level of the user's skill.
     */
    level?: string;
    /**
     * The years of the user's skill.
     */
    years?: string;
};

/**
 * @TODO: This object isn't documented very well, use with a grain of salt.
 */
export type GigyaWork = {
    /**
     * The company where the user works/worked.
     */
    company?: string;
    /**
     * The company's ID.
     */
    companyID?: string;
    /**
     * The user's title in the company.
     */
    title?: string;
    /**
     * The company's size.
     */
    companySize?: string;
    /**
     * The date the user started working at the company.
     */
    startDate?: string;
    /**
     * The date the user stopped working at the company.
     */
    endDate?: string;
    /**
     * The industry of the company.
     */
    industry?: string;
    /**
     * Indicates whether the user is still working at the company.
     */
    isCurrent?: boolean;
};

/**
 * @TODO: This object isn't documented very well, use with a grain of salt.
 */
export type GigyaPublication = {
    /**
     * The user's publication title.
     */
    title?: string;
    /**
     * The user's publication summary.
     */
    summary?: string;
    /**
     * The user's publication publisher.
     */
    publisher?: string;
    /**
     * The user's publication date.
     */
    date?: string;
    /**
     * The user's publication URL.
     */
    url?: string;
};

/**
 * @TODO: This object isn't documented very well, use with a grain of salt.
 */
export type GigyaPatent = {
    /**
     * The user's patent title.
     */
    title?: string;
    /**
     * The user's patent summary.
     */
    summary?: string;
    /**
     * The user's patent number.
     */
    number?: string;
    /**
     * The user's patent office.
     */
    office?: string;
    /**
     * The user's patent status.
     */
    status?: string;
    /**
     * The user's patent date.
     */
    date?: string;
    /**
     * The user's patent URL.
     */
    url?: string;
};

/**
 * @TODO: This object isn't documented very well, use with a grain of salt.
 */
export type GigyaLike = {
    /**
     * The name of the user's like.
     */
    name?: string;
    /**
     * The category of the user's like.
     */
    category?: string;
    /**
     * The identifier of the user's like.
     */
    id?: string;
    /**
     * The time the like was created in UTC standard {@link https://en.wikipedia.org/wiki/ISO_8601 ISO 8601} Information published on non-SAP site format (i.e., yyyy.mm.dd.Thh.MM.ss.SSSZ).
     */
    time?: string;
    /**
     * The time the like was created in Unix time format (i.e., the number of seconds since Jan. 1st 1970).
     */
    timestamp?: number;
};

/**
 * @TODO: This object isn't documented very well, use with a grain of salt.
 */
export type GigyaCertification = {
    /**
     * The user's certification name.
     */
    name?: string;
    /**
     * The user's certification authority.
     */
    authority?: string;
    /**
     * The user's certification number.
     */
    number?: string;
    /**
     * The user's certification start date.
     */
    startDate?: string;
    /**
     * The user's certification end date.
     */
    endDate?: string;
};

/**
 * @TODO: This object isn't documented very well, use with a grain of salt.
 */
export type GigyaEducation = {
    /**
     * The user's school name.
     */
    school?: string;
    /**
     * The user's school type.
     */
    schoolType?: string;
    /**
     * The user's field of study.
     */
    fieldOfStudy?: string;
    /**
     * The user's degree.
     */
    degree?: string;
    /**
     * The user's education start year.
     *
     * @TODO: Check actual type of this field, guessing it's a string.
     */
    startYear?: string;
    /**
     * The user's education end year.
     *
     * @TODO: Check actual type of this field, guessing it's a string.
     */
    endYear?: string;
};

/**
 * @TODO: This object isn't documented very well, use with a grain of salt.
 */
export type GigyaFavorites = {
    interests?: Array<GigyaFavorite>;
    activities?: Array<GigyaFavorite>;
    books?: Array<GigyaFavorite>;
    music?: Array<GigyaFavorite>;
    movies?: Array<GigyaFavorite>;
    television?: Array<GigyaFavorite>;
};

/**
 * @TODO: This object isn't documented very well, use with a grain of salt.
 */
export type GigyaFavorite = {
    /**
     * The ID of the user's favorite.
     */
    id: string;
    /**
     * The name of the user's favorite.
     */
    name: string;
    /**
     * The category of the user's favorite.
     */
    category: string;
};

/**
 * This object represents a person's identity on a specific provider. A distinct Identity object is produced per each connected provider and is not editable.
 *
 * Note: Different providers supply different data. Thus, the availability of the data members of the Identity object depends on the specific provider.
 *
 * Documentation: {@link https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/415c6c1370b21014bbc5a10ce4041860.html Identity JS}
 */
export type GigyaIdentity = {
    /**
     * The name of the connected provider for this identity, in lowercase letters ("facebook", "yahoo", etc.).
     */
    provider?: string;
    /**
     * The user ID provided by the connected provider. For Facebook this is an application-scoped ID, in which case a user can have more than one providerUID. The 'mappedProviderUIDs' array contains all of the provider UIDs mapped to the user.
     *
     * Note: This field may be rather long for some providers; if you plan to store it in a DB the recommended field size is 300 characters.
     */
    providerUID?: string;
    /**
     * This field is available only if the {@link https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/415942c570b21014bbc5a10ce4041860.html signIDs} field of the {@link https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/415942c570b21014bbc5a10ce4041860.html global configuration object} was set to 'true'. The providerUIDSig field holds the HMAC-SHA1 hash of following string: "<timestamp>_<provider>_<providerUID>", where <timestamp>, <provider>, <providerUID> are substituted with the corresponding values.
     */
    providerUIDSig?: string;
    /**
     * Indicates whether this identity was the one that the user used in order to login.
     */
    isLoginIdentity?: boolean;
    /**
     * The person's nickname, this may be either the nickname provided by the connected provider or a concatenation of first and last name.
     */
    nickname?: string;
    /**
     * Indicates whether the user may use this identity for logging in to your site.
     */
    allowsLogin?: boolean;
    /**
     * Indicates whether the session has expired for this provider (or is otherwise inactive). This field is relevant and available only if when calling the {@link https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/417623f770b21014bbc5a10ce4041860.html getUserInfo} method you have set the includeAllIdentities parameter to 'true'.
     */
    isExpiredSession?: boolean;
    /**
     * The time of the user's last login in Unix time format (i.e., the number of seconds since Jan. 1st 1970).
     */
    lastLoginTime?: number;
    /**
     * The URL of the person's full size photo.
     */
    photoURL?: string;
    /**
     * The URL of the person's thumbnail photo, if available.
     */
    thumbnailURL?: string;
    /**
     * The person's first name.
     */
    firstName?: string;
    /**
     * The person's last name.
     */
    lastName?: string;
    /**
     * The person's gender. The value may be 'm', 'f', or 'u' for male, female, or unspecified.
     */
    gender?: GigyaGender;
    /**
     * The person's age.
     */
    age?: number;
    /**
     * The day of the month in which the person was born.
     */
    birthDay?: number;
    /**
     * The month in which the person was born.
     */
    birthMonth?: number;
    /**
     * The year in which the person was born.
     */
    birthYear?: number;
    /**
     * The person's email.
     */
    email?: string;
    /**
     * The person's country.
     */
    country?: string;
    /**
     * The person's state.
     */
    state?: string;
    /**
     * The person's city.
     */
    city?: string;
    /**
     * The person's zip code.
     */
    zip?: string;
    /**
     * The URL of the person's profile.
     */
    profileURL?: string;
    /**
     * A comma-separated list of languages that the person speaks.
     */
    languages?: string;
    /**
     * The person's address.
     */
    address?: string;
    /**
     * The person's phone numbers.
     */
    phones?: Array<GigyaPhone>;
    /**
     * The person's education details.
     *
     * @TODO: This is not documented in the official documentation. Check the values of the array object, currently auto-completed by Copilot :).
     */
    education?: Array<{
        school?: string;
        degree?: string;
        field?: string;
        year?: string;
    }>;
    /**
     * A comma-separated list of the person's honors.
     */
    honors?: string;
    /**
     * The person's publications' details.
     *
     * @TODO: This is not documented in the official documentation. Check the values of the array object, currently auto-completed by Copilot :).
     */
    publications?: Array<{
        title?: string;
        publisher?: string;
        date?: string;
        url?: string;
    }>;
    /**
     * The person's patents' details.
     *
     * @TODO: This is not documented in the official documentation. Check the values of the array object, currently auto-completed by Copilot :).
     */
    patents?: Array<{
        title?: string;
        number?: string;
        url?: string;
        date?: string;
    }>;
    /**
     * The person's certifications' details.
     *
     * @TODO: This is not documented in the official documentation. Check the values of the array object, currently auto-completed by Copilot :).
     */
    certifications?: Array<{
        name?: string;
        authority?: string;
        number?: string;
        url?: string;
        date?: string;
    }>;
    /**
     * The person's professional headline, often the job title at their company.
     */
    professionalHeadline?: string;
    /**
     * A description of the person's professional profile.
     */
    bio?: string;
    /**
     * The industry in which the person's company operates.
     */
    industry?: string;
    /**
     * The person's specialties.
     */
    specialties?: string;
    /**
     * A collection of the person's work experience.
     *
     * @TODO: This is not documented in the official documentation. Check the values of the array object, currently auto-completed by Copilot :).
     */
    work?: Array<{
        company?: string;
        position?: string;
        description?: string;
        startYear?: string;
        startMonth?: string;
        endYear?: string;
        endMonth?: string;
    }>;
    /**
     * A collection of the person's skills.
     *
     * @TODO: This is not documented in the official documentation. Check the values of the array object, currently auto-completed by Copilot :).
     */
    skills?: Array<{
        name?: string;
        level?: string;
        years?: string;
    }>;
    /**
     * The person's religion.
     */
    religion?: string;
    /**
     * The person's political views.
     */
    politicalView?: string;
    /**
     * The gender in which the person is interested.
     */
    interestedIn?: string;
    /**
     * The relationship status of the person.
     */
    relationshipStatus?: string;
    /**
     * The person's hometown.
     */
    hometown?: string;
    /**
     * The person's favorite things, including favorite books, movies, etc.
     *
     * @TODO: This is not documented in the official documentation. Check the values of the array object, currently auto-completed by Copilot :).
     */
    favorites?: Array<{
        name?: string;
        category?: string;
    }>;
    /**
     * Retrieves up to 500 of the person's Facebook likes.
     *
     * @TODO: This is not documented in the official documentation. Check the values of the array object, currently auto-completed by Copilot :).
     */
    likes?: Array<{
        name?: string;
        category?: string;
    }>;
    /**
     * The number of other users following this user, when applicable (Twitter).
     */
    followersCount?: number;
    /**
     * The number of users this user is following, when applicable (Twitter).
     */
    followingCount?: number;
    /**
     * The person's user name on the social network.
     */
    username?: string;
    /**
     * The person's locale.
     */
    locale?: string;
    /**
     * Indicates whether the person verified his email with Facebook.
     */
    verified?: boolean;
    /**
     * The person's timezone.
     */
    timezone?: number;
    /**
     * A comma-separated string that lists the differences between the general capabilities of Facebook and the requested capabilities. The requested capabilities are the ones checked in the console permissionsInformation published on non-SAP site, e.g., "missingPermissions": "Actions, Status, Photos".
     */
    missingPermissions?: string;
    /**
     * {@link https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4158935f70b21014bbc5a10ce4041860.html Custom SAML data}. When mapping IdP attributes to identity fields, we allow mapping to a custom identity field, not only to an existing one. An attribute can be mapped to this custom identity field by mapping it to a name like "samlData.myField".
     *
     * In cases where a SAML attribute has multiple instances and/or multiple values, all values from all instances will be collected into a JSON array.
     *
     * Here is an example of how this attribute will be stored in the identity object:
     * @example
     * "samlData": {
     *  "eduPersonScopedAffiliation": [
     *   "Member@testshib.org",
     *   "Staff@testshib.org"
     *  ]
     * }
     *
     * @TODO: Is there a nice way to type this?
     */
    samlData?: object;
    /**
     * @deprecated
     */
    proxiedEmail?: string;
};

export type GigyaData = {
    [key: string]: unknown;
};

/**
 * The preferences object is a JSON object that contains the user's preferences (consents).
 *
 * Documentation: {@link https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4169054f70b21014bbc5a10ce4041860.html Preferences Object REST}
 */
export type GigyaPreferences = {
    terms?: OptionallyNestedGigyaPreference;
    privacy?: OptionallyNestedGigyaPreference;
    [preferenceID: string]: OptionallyNestedGigyaPreference | GigyaPreference | undefined;
};

/**
 * Sub-type of GigyaPreferences to allow for nested preferences.
 */
type OptionallyNestedGigyaPreference = {
    [preferenceID: string]: OptionallyNestedGigyaPreference | GigyaPreference;
};

/**
 * Represents a single Gigya Preference.
 *
 * Documentation: {@link https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4169054f70b21014bbc5a10ce4041860.html Preference Object REST}
 */
export type GigyaPreference = {
    /**
     * Whether or not the user granted their consent to this statement.
     */
    isConsentGranted: boolean;
    /**
     * This holds the defined timestamp of an imported consent, when the date is historical.
     */
    actionTimestamp?: string;
    /**
     * The date that the isConsentGranted property was last changed/updated.
     */
    lastConsentModified?: string;
    /**
     * The language of this consent statement.
     */
    lang?: string;
    /**
     * The version number of the consent statement to which the user agreed.
     */
    docVersion?: number;
    /**
     * The version date of the consent statement to which the user agreed.
     */
    docDate?: string;
    /**
     * An array of custom data objects for this consent statement. Each data set is comprised of a key-value pair. Both of these are strings.
     *
     * The maximum number of characters for the key is 20, and 256 for the value. The maximum number of custom key-value pairs per consent statement is 50.
     */
    customData?: Array<{
        key: string;
        value: string;
    }>;
    /**
     * Additional information that relates to this consent interaction. Once set, this value can be viewed in the Consent Vault for the user.
     *
     * Note: Tags cannot be edited once set, to update the tags for a user they must consent to a new version of the agreement with the new/additional tags.s
     */
    tags?: Array<string>;
    /**
     * An array of comma-separated entitlements to which the user granted consent.
     *
     * Entitlements are a sub-set of each statement, and are used to add nuance to the general consent statement. For more information, see {@link https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/414d6d1270b21014bbc5a10ce4041860.html Consent Management Components}.
     *
     * @TODO: This is not documented in the official documentation. Check the values of the array object.
     */
    entitlements?: Array<string>;
    /**
     * An array of comma-separated list of locales that the user opted in for this consent, and the version number of each consent locale.
     *
     * @TODO: This is not documented in the official documentation. Check the values of the array object.
     */
    locales?: Array<string>;
};

/**
 * The gender of the user. Can be 'm', 'f', or 'u', for male, female, or unspecified.
 */
export type GigyaGender = 'm' | 'f' | 'u';

/**
 * The Groups object contains all the user's CIAM for B2B Organization Management settings.
 *
 * Documentation: {@link https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/415bba4670b21014bbc5a10ce4041860.html Groups Object}
 */
export type GigyaGroups = {
    /**
     * Array of organization settings.
     */
    organizations?: Array<{
        /**
         * The roles assigned to the user.
         */
        roles?: Array<string>;
        /**
         * The user's department.
         */
        department?: string;
        /**
         * The user's job description.
         */
        job?: string;
        /**
         * The orgId of the organization assigned from Organization Management.
         */
        orgId: string;
        /**
         * The user's organization status, for example., 'active'.
         *
         * @TODO: Check the possible values, they are not documented.
         */
        status: string;
    }>;
};

export type GigyaRBA = {
    /**
     * Determines the rule set from the defined rulesSets configured in accounts.rba.setPolicy or one of the default policies.
     */
    riskPolicy?: string;
    /**
     * Determines whether the user can change their own riskPolicy. If true, only an admin can change the user's riskPolicy.
     */
    riskPolicyLocked?: boolean;
};

/**
 * This object defines properties per data fields. The object contains field names and their corresponding list of properties.
 *
 * Documentation: {@link https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413a0faa70b21014bbc5a10ce4041860.html#profile-schema-object Profile Schema Object}
 */
export type GigyaProfileSchema = {
    fields: {
        [profileFieldName: string]: {
            /**
             * A Boolean value ("false" by default), specifying whether this field is required. If set to "true", when registering for a new account you are required to supply an initial value for this field, otherwise the registration fails.
             */
            required?: boolean;
            /**
             * Specifies whether to allow unsigned requests to write into this field. This property applies when using the {@link https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41398a8670b21014bbc5a10ce4041860.html accounts.setAccountInfo} method, or when setting fields through the usage of a {@link https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/414f36ba70b21014bbc5a10ce4041860.html Screen-Set}. The supported values are:
             * + "serverOnly" (default) - Only signed requests coming from the server are allowed.
             * + "clientCreate" - Unsigned requests coming from the client are allowed to write new data into this field, but not modify existing values.
             * + "clientModify" - Unsigned requests coming from the client are allowed to write new data into this field as well as modify existing values.
             */
            writeAccess?: 'serverOnly' | 'clientCreate' | 'clientModify';
            /**
             * May be applied to string, basic-string. Passing a value of 'AES' (the encryption standard applied) sets the field to encrypted. When string fields are encrypted, you may use them in a search (e.g. using {@link https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/b32ce0918af44c3ebd7e96650fa6cc1d.html accounts.search}) only by passing an exact match (such as x = "ABCDE"), and not partial matches (x CONTAINS "ABC"). String search values are case sensitive.
             * + If you set the encrypt property on a field that already contains data, the existing data will remain unencrypted. Only new data will be encrypted.
             * + Once a field is set to encrypt, it cannot be undone.
             * + To encrypt a field that is not string or basic-string, use the encryptedNonSearchable parameter instead.
             */
            encrypt?: 'AES';
            /**
             * Indicates that values saved to this field are encrypted in the database. May be applied to integer, long, float, date, or Boolean fields.
             * + Text fields may not be encrypted, and string fields are encrypted using the encrypt parameter.
             * + Fields for which encryptedNonSearchable is set to 'true' cannot be used in search queries.
             * + Encrypting a field cannot be undone.
             */
            encryptedNonSearchable?: boolean;
            /**
             * An array of strings containing languages with which a text field is compatible, in addition to the default languages. A maximum of 4 such languages is supported. The values passed in this property are added to the existing languages in the field, and if the total number exceeds 4 languages, the operation fails. Note: the only language currently supported for this functionality is Japanese.
             */
            languages?: Array<string>;
            /**
             * Allows assigning a regular expression (regex) that defines the legitimate value acceptable in the profile.email field. SAP Customer Data Cloud will check the value passed by users to this data field to make sure it answers to the defined format. If the value passed in this field doesn't match the format, SAP Customer Data Cloud will not save the data and will return an error. The best practice is to validate the format on your client application. The format property accepts a string of the form: "regex('<regex-pattern>')". The regex syntax can be found in: {@link https://learn.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-language-quick-reference?redirectedfrom=MSDN Regular Expression Language Reference}.
             */
            format?: `regex('${string}')`;
        };
    };
};

/**
 * The schema structure of your site's data fields. The object contains field names and their corresponding list of properties.
 *
 * Requirements for field names:
 * + When designating the name of a nested field, pass the full path name with dots, e.g. "moreInfo.bio".
 * + Field names can consist of Latin alphabet letters, digits, underscores ("_"), and periods (".") only.
 *
 * Documentation: {@link https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413a0faa70b21014bbc5a10ce4041860.html#data-schema-object Data Schema Object}
 */
export type GigyaDataSchema = {
    fields: {
        [dataFieldName: string]: {
            /**
             * A Boolean value ("true" by default), specifying whether null values are allowed.
             */
            allowNull?: boolean;
            /**
             * May be applied to string, basic-string. Passing a value of 'AES' (the encryption standard applied) sets the field to encrypted. When string fields are encrypted, you may use them in a search (e.g. using accounts.search) only by passing an exact match (such as x = "ABCDE"), and not partial matches (x CONTAINS "ABC"). String search values are case sensitive.
             * + If you set the encrypt property on a field that already contains data, the existing data will remain unencrypted. Only new data will be encrypted.
             * + Once a field is set to encrypt, it cannot be undone.
             * + To encrypt a field that is not string or basic-string, use the encryptedNonSearchable parameter instead.
             */
            encrypt?: 'AES';
            /**
             * Indicates that values saved to this field are encrypted in the database. May be applied to integer, long, float, date, or Boolean fields.
             * + Text fields may not be encrypted, and string fields are encrypted using the encrypt parameter.
             * + Fields for which encryptedNonSearchable is set to 'true' cannot be used in search queries.
             * + Encrypting a field cannot be undone.
             */
            encryptedNonSearchable?: boolean;
            /**
             * Allows assigning a regular expression (regex) that defines the format of this data field. SAP Customer Data Cloud will check the value passed by users to this data field to make sure it answers to the defined format. If the value passed in this field doesn't match the format, SAP Customer Data Cloud will not save the data and will return an error. The best practice is to validate the data format on your client application. The format property accepts a string of the form: "regex('<regex-pattern>')". The regex syntax can be found in: {@link https://learn.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-language-quick-reference?redirectedfrom=MSDN Regular Expression Language Reference}. This property also accepts, for Boolean fields: true or false; e.g., "format":"true".
             */
            format?: `regex('${string}')` | 'true' | 'false';
            /**
             * Defines the data type of this field. The supported values are:
             * + "integer" (range: -2,147,483,648 to 2,147,483,647, size: signed 32-bit integer).
             * + "long" (range: -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807, size: signed 64-bit integer).
             * + "float" (approximate range: ±1.5e−45 to ±3.4e38, size: 7 digits).
             * + "string" (up to 16 KB in size - a multi-field with analyzed entries (searchable using partial case-insensitive searches)).
             * + "basic-string" (up to 16 KB in size - a field with non-analyzed entries (non-searchable)).
             * + "text" (up to 64 KB - an analyzed multi-field (only searchable using exact match)).
             * + "date"
             * + "boolean"
             *
             * When the type property is not specified, the type will be deduced from the field name extension or automatically according to the content of the first item. When defining a 'binary' field type, it is not inferred from the data and must be declared explicitly through the 'type' parameter. Note that a field's type cannot be changed after it contains data. Size limitations for numerical fields are the same as those {@link https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-types?redirectedfrom=MSDN defined for C#}. For details about the size of a KB, see {@link https://en.wikipedia.org/wiki/Kilobyte this article}.
             */
            type: 'integer' | 'long' | 'float' | 'string' | 'basic-string' | 'text' | 'date' | 'boolean';
            /**
             * Specifies whether to allow unsigned requests to write into this field. This property applies when using the {@link https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41398a8670b21014bbc5a10ce4041860.html accounts.setAccountInfo} method, or when setting fields through the usage of a {@link https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/414f36ba70b21014bbc5a10ce4041860.html Screen-Set}. The supported values are:
             * + "serverOnly" (default) - Only signed requests coming from the server are allowed.
             * + "clientCreate" - Unsigned requests coming from the client are allowed to write into this field, only if it wasn't set before.
             * + "clientModify" - Unsigned requests coming from the client are allowed to write into this field and modify existing values.
             */
            writeAccess?: 'serverOnly' | 'clientCreate' | 'clientModify';
            /**
             * An array of strings containing languages with which a text field is compatible, in addition to the default languages. A maximum of 4 such languages is supported. The values passed in this property are added to the existing languages in the field, and if the total number exceeds 4 languages, the operation fails. The only language currently supported for this functionality is Japanese.
             */
            languages?: Array<string>;
        };
    };
    /**
     * Specifies whether the schema is strict or dynamic. The default value of this parameter is true i.e. dynamic schema. In a dynamic schema, you may add new fields that are not defined in the schema to the storage. The new fields are automatically added to the dynamic schema. In a strict schema, you can only write into fields that are already defined in the schema.
     *
     * If dynamicSchema is set to false, you must make sure to set field types on creation. Failure to declare a type will prevent the field from being indexed and returned by {@link https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/b32ce0918af44c3ebd7e96650fa6cc1d.html accounts.search}.
     *
     * Note that the dynamicSchema parameter only applies to server-side setAccountInfo calls, and it enables the server to create/modify fields outside of the schema.
     *
     * When creating Dynamic fields using accounts.setAccountInfo, the write access of these fields is always serverOnly and may impact your implementation. It is recommended best practice to ONLY ever create new schema fields using accounts.setSchema, except in very rare scenarios.
     */
    dynamicSchema: boolean;
};

/**
 * The schema structure of your site's subscriptions. The object contains field names and their corresponding list of properties.
 *
 * Documentation: {@link https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413a0faa70b21014bbc5a10ce4041860.html#subscriptions-schema-object Subscription Schema Object}
 */
export type GigyaSubscriptionsSchema = {
    [subscriptionName: string]: {
        email: {
            /**
             * Must be set to subscription.
             */
            type: 'subscription';
            /**
             * A Boolean value ("false" by default), specifying whether this field must be seen by the user in order for a registration to be completed successfully. If set to "true", you should include this subscription in all profile completion screens, or the user will never be able to complete their registration. For instructions on adding subscriptions to screens, see {@link https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/414cba2d70b21014bbc5a10ce4041860.html Subscription Management}.
             */
            required: boolean;
            /**
             * The Description of the current subscription. This may be used in the double opt-in confirmation {@link https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/50ea527441844c589fd1731116fc079d.html email template}.
             */
            desciption?: string;
            /**
             * A Boolean field, specifying whether this subscription requires double opt-in confirmation.
             */
            doubleOptIn: boolean;
            /**
             * An optional Boolean field, specifying whether to allow Conditional Double Opt-in. For more information, see {@link https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/414cba2d70b21014bbc5a10ce4041860.html Communication Preferences}.
             */
            enableConditionalDoubleOptIn?: boolean;
        };
    };
};
