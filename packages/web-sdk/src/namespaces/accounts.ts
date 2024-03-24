import {
    AccountsGetAccountInfoRequest,
    AccountsGetAccountInfoResponse,
    AccountsGetJWTRequest,
    AccountsGetJWTResponse,
    AccountsGetSchemaRequest,
    AccountsGetSchemaResponse,
    AccountsLoginRequest,
    AccountsLoginResponse,
    AccountsResetPasswordRequest,
    AccountsResetPasswordResponse,
    AccountsSetAccountInfoRequest,
    AccountsSetAccountInfoResponse,
    GigyaData,
    GigyaPreferences,
    GigyaRequest,
    GigyaResponse,
    GigyaSubscriptions,
} from '@gigya-ts/rest-api';
import {
    GigyaJSFunction,
    GigyaJSOnLoginEvent,
    GigyaJSOnLogoutEvent,
    GigyaJSUIDSignature,
} from '../types/gigya-helpers';

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41313c7e70b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsAddEventsHandlersRequestJS<DataSchema extends GigyaData> = GigyaRequest<{
    /**
     * A reference to a function that is called when the user is successfully authenticated by SAP Customer Data Cloud.
     */
    onLogin?: (onLoginEvent: GigyaJSOnLoginEvent<DataSchema>) => void;
    /**
     * A reference to a function that is called when the user has logged out.
     */
    onLogout?: (onLoginEvent: GigyaJSOnLogoutEvent) => void;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41313c7e70b21014bbc5a10ce4041860.html#response-object-data-members
 */
export type AccountsAddEventsHandlersResponseJS = GigyaResponse<Record<string, never>>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/eb93d538b9ae45bfadd9a8aaa8806753.html#parameters
 */
export type AccountsLoginRequestJS = Omit<AccountsLoginRequest, 'clientContext'>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/eb93d538b9ae45bfadd9a8aaa8806753.html?#response-data
 */
export type AccountsLoginResponseJS = AccountsLoginResponse & GigyaJSUIDSignature;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4137589670b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsLogoutRequestJS = GigyaRequest<{
    /**
     * If this parameter is set to 'true' (default), Gigya attempts to logout the user out from all providers to which they are connected and which support this feature (currently only Facebook and SAML sessions can be forcibly logged out). Note that Facebook only allows an app to log the user out of Facebook, if the app was used to log the user in. If the user was already logged into Facebook, a 3rd party app does not have the necessary permissions to end the user's Facebook session.
     *
     * If this parameter is set to 'false', the user will remain logged in to all providers after logging out from the Gigya platform, i.e., they will only be logged out of Gigya.
     */
    forceProvidersLogout?: boolean;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4137589670b21014bbc5a10ce4041860.html#response-object-data-members
 */
export type AccountsLogoutResponseJS = GigyaResponse<Record<string, never>>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/04d7b87fe17c4091839cae8c6a887efd.html#parameters
 */
export type AccountsGetAccountInfoRequestJS = AccountsGetAccountInfoRequest;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/04d7b87fe17c4091839cae8c6a887efd.html#response-example
 */
export type AccountsGetAccountInfoResponseJS<
    DataSchema extends GigyaData,
    PreferencesSchema extends GigyaPreferences,
    SubscriptionsSchema extends GigyaSubscriptions,
> = AccountsGetAccountInfoResponse<DataSchema, PreferencesSchema, SubscriptionsSchema> & GigyaJSUIDSignature;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4135d4e170b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsGetSchemaRequestJS = AccountsGetSchemaRequest;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413523ec70b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsGetJWTRequestJS = Pick<AccountsGetJWTRequest,
    'fields' |
    'expiration' |
    'audience'
>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413523ec70b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsGetJWTResponseJS = AccountsGetJWTResponse;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/c21d4e0445b84a779af1ad4868902c21.html#parameters
 */
export type AccountsResetPasswordRequestJS = Omit<AccountsResetPasswordRequest, 'sendEmail'>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/c21d4e0445b84a779af1ad4868902c21.html#response-data
 */
export type AccountsResetPasswordResponseJS = AccountsResetPasswordResponse;

/**
 * https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4139777d70b21014bbc5a10ce4041860.html#parameters
 *
 * @TODO: We probably need to omit some params from AccountsSetAccountInfoRequest for the JS version.
 */
export type AccountsSetAccountInfoRequestJS<
    DataSchema extends GigyaData,
    PreferencesSchema extends GigyaPreferences,
    SubscriptionsSchema extends GigyaSubscriptions,
> = AccountsSetAccountInfoRequest<DataSchema, PreferencesSchema, SubscriptionsSchema>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4139777d70b21014bbc5a10ce4041860.html#response-object-data-members
 */
export type AccountsSetAccountInfoResponseJS = AccountsSetAccountInfoResponse;

/**
 * @TODO: This is not documented in the Gigya WebSDK docs.
 */
export type AccountsGetSchemaResponseJS = AccountsGetSchemaResponse;

export type GigyaAccountsNamespaceJS<
    DataSchema extends GigyaData,
    PreferencesSchema extends GigyaPreferences,
    SubscriptionsSchema extends GigyaSubscriptions,
> = {
    /**
     * Global application events are fired whenever the event to which they refer occurs, regardless of which application component triggered the event.
     *
     * This method allows setting event handlers for each of the supported global events.
     *
     * The following are two of the most used available global application events:
     * - **onLogin** - Fired whenever a user successfully logs in to your site.
     * - **onLogout** - Fired whenever a user logs out from your site.
     */
    addEventHandlers: GigyaJSFunction<
        AccountsAddEventsHandlersRequestJS<DataSchema>,
        AccountsAddEventsHandlersResponseJS
    >;
    /**
     * This method logs in a user to your site and opens a session for the logged-in user on success.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/eb93d538b9ae45bfadd9a8aaa8806753.html
     */
    login: GigyaJSFunction<AccountsLoginRequestJS, AccountsLoginResponseJS>;
    /**
     * This method Logs out the current user of your site.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4137589670b21014bbc5a10ce4041860.html
     */
    logout: GigyaJSFunction<AccountsLogoutRequestJS, AccountsLogoutResponseJS>;
    /**
     * This method retrieves user account data.
     *
     * @note We recommend using this method from your server-side rather than from your web-client, and only pass the relevant data to the client-side, thus not exposing the entire account data to the client.
     */
    getAccountInfo: GigyaJSFunction<
        AccountsGetAccountInfoRequestJS,
        AccountsGetAccountInfoResponseJS<DataSchema, PreferencesSchema, SubscriptionsSchema>
    >;
    /**
     * This API is used to obtain an id_token containing the active session's user data.
     */
    getJWT: GigyaJSFunction<AccountsGetJWTRequestJS, AccountsGetJWTResponseJS>;
    /**
     * The password can be reset either via email or directly. The email format is according to the templates defined in the site policy.
     */
    resetPassword: GigyaJSFunction<AccountsResetPasswordRequestJS, AccountsResetPasswordResponseJS>;
    /**
     * This method sets account data into a user's account.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4139777d70b21014bbc5a10ce4041860.html
     */
    setAccountInfo: GigyaJSFunction<
        AccountsSetAccountInfoRequestJS<DataSchema, PreferencesSchema, SubscriptionsSchema>,
        AccountsSetAccountInfoResponseJS
    >;
    /**
     * This method retrieves the schema of the Profile object and the Data object (the site specific custom data object) in Gigya's Accounts Storage.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4135d4e170b21014bbc5a10ce4041860.html
     */
    getSchema: GigyaJSFunction<AccountsGetSchemaRequestJS, AccountsGetSchemaResponseJS>;
};
