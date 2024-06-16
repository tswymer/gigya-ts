import { GigyaData, GigyaProfile } from '@gigya-ts/rest-api';

/**
 * Generic type for Gigya Web SDK methods that accept a callback function.
 */
export type GigyaJSFunction<JSRequestSchema, JSResponseSchema> = (
    params: JSRequestSchema & GigyaJSRequestWithCallback<JSResponseSchema>,
) => void;

/**
 * The Gigya WebSDK passes all responses from its APIs via callbacks functions.
 */
export type GigyaJSRequestWithCallback<JSResponseSchema> = {
    /**
     * A reference to a callback function. SAP Customer Data Cloud calls the specified function along with the results
     * of the API method when the API method completes.
     *
     * The callback function should be defined with the following signature: functionName(Response).
     */
    callback?: (response: JSResponseSchema) => void;
};

/**
 * Many Gigya responses include a UIDSignature and signatureTimestamp.
 */
export type GigyaJSUIDSignature = {
    /**
     * The signature that should be used for login verification.
     */
    UIDSignature?: string;
    /**
     * 	The GMT time of the response in UNIX time format, i.e., the number of seconds since Jan. 1st 1970. The timestamp should be used for login verification.
     */
    signatureTimestamp?: number;
};

/**
 * The "onLogin" event schema from the accounts.addEventHandlers methon.
 *
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41313c7e70b21014bbc5a10ce4041860.html#onlogin-event-data
 */
export type GigyaJSOnLoginEvent<DataSchema extends GigyaData> = {
    /**
     * The name of the event: 'login'.
     */
    eventName: 'login';
    /**
     * The source plugin that generated this event. The value of this field is the name of the plugin's API method, e.g. 'showLoginUI'.
     *
     * This field will not be available if the source of this event is not a plugin (e.g. if the source is a socialize.login API call).
     */
    source?: string;
    /**
     * The context object passed as a parameter to the plugin/method that triggered this event, or null if no object was passed.
     */
    context?: unknown;
    /**
     * The User ID that should be used for login verification.
     */
    UID: string;
    /**
     * The type of login:
     * - "standard" - the userislogging into an existing account.
     * - "reAuth" - the user is proving ownership of an account by logging into it.
     */
    loginMode: 'standard' | 'reAuth';
    /**
     * Whether the current login is for a newly created or existing user (in the database).
     *
     * @note When using TFA, a new user is created in the database prior to the user completing TFA and then logging in. This means that newUser is always false when TFA is enabled, even for users whose initial creation triggered the TFA.
     */
    newUser: boolean;
    /**
     * The name of the provider that the user used in order to login (e.g. "Facebook").
     *
     * @note If this event is fired as a result of a socialize.notifyLogin call, i.e. the user was authenticated by your site, the provider field will be set to "site".
     */
    provider: string;
    /**
     * The user's profile information as described in the Profile object.
     */
    profile: GigyaProfile;
    /**
     * Custom data. Any data that the you want to store regarding the user, which isn't part of the Profile object.
     */
    data?: DataSchema;
    /**
     * Whether the user asked to remember his credentials (using a "Remember me" checkbox).
     */
    remember: boolean;
} & GigyaJSUIDSignature;

/**
 * The "onLogout" event schema from the accounts.addEventHandlers methon.
 *
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41313c7e70b21014bbc5a10ce4041860.html#onlogout-event-data
 */
export type GigyaJSOnLogoutEvent = {
    /**
     * The name of the event: 'logout'.
     */
    eventName: 'logout';
    /**
     * The context object passed as a parameter to the plugin/method that triggered this event, or null if no object was passed.
     */
    context?: unknown;
};
