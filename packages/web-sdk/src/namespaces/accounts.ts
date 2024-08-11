import {
    AccountsFinalizeRegistrationRequest,
    AccountsFinalizeRegistrationResponse,
    AccountsGetAccountInfoRequest,
    AccountsGetAccountInfoResponse,
    AccountsGetJWTRequest,
    AccountsGetJWTResponse,
    AccountsGetSchemaRequest,
    AccountsGetSchemaResponse,
    AccountsInitRegistrationRequest,
    AccountsInitRegistrationResponse,
    AccountsInitTFARequest,
    AccountsInitTFAResponse,
    AccountsLoginRequest,
    AccountsLoginResponse,
    AccountsOTPSendCodeRequest,
    AccountsOTPSendCodeResponse,
    AccountsRegisterRequest,
    AccountsRegisterResponse,
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
export type AccountsAddEventsHandlersResponseJS = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/eb93d538b9ae45bfadd9a8aaa8806753.html#parameters
 */
export type AccountsLoginRequestJS = Omit<AccountsLoginRequest, 'clientContext'> & {
    /**
     * This may be used in some cases to suppress logic applied by the Web SDK, such as automatic opening of screens (e.g., in a registration completion scenario). This parameter may not be used with REST APIs.
     */
    ignoreInterruptions?: boolean;
};

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/eb93d538b9ae45bfadd9a8aaa8806753.html?#response-data
 */
export type AccountsLoginResponseJS<
    DataSchema extends GigyaData,
    PreferencesSchema extends GigyaPreferences,
    SubscriptionsSchema extends GigyaSubscriptions,
> = AccountsLoginResponse<DataSchema, PreferencesSchema, SubscriptionsSchema> & GigyaJSUIDSignature;

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
export type AccountsLogoutResponseJS = GigyaResponse<{}>;

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
> = AccountsGetAccountInfoResponse<DataSchema, PreferencesSchema, SubscriptionsSchema> &
    GigyaJSUIDSignature & {
        password: {
            created?: string;
        };
    };

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4135d4e170b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsGetSchemaRequestJS = AccountsGetSchemaRequest;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413523ec70b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsGetJWTRequestJS = Pick<AccountsGetJWTRequest, 'fields' | 'expiration' | 'audience'>;

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
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413a5b7170b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsShowScreenSetRequestJS = GigyaRequest<{
    /**
     * A reference to the screen-set to be presented. The value of this parameter is the ID of a screen-set. The screen-set is either defined on the same page from which this method is called, or it is stored on Gigya servers. For the default screen-set names, see Default Screen-sets.
     *
     * @note: Important: When using custom screen-sets, ensure that the default screen-sets in your Site's Policies are defined and configured correctly.
     *
     * When a user is redirected back to your site, the previous screen-set data is lost and if any errors are triggered, the necessary screens to display will be determined from the default screen-set as defined within your Site Policies.
     */
    screenSet: string;
    /**
     * 	An ID of a <div> element on the page in which you want to display the screens. If this parameter is not specified then the screens will be displayed as a dialog (popup) at the center of the page. For recommended best practice while using this parameter, see Implementing With the containerID Parameter.
     */
    containerID?: string;
    /**
     * Using this parameter you may specify that the login flow will use page redirects instead of using a popup. This gives a solution for environments where popups are unavailable (e.g., mobile web view controls). This parameter accepts two values:
     * - **popup** (default).
     * - **redirect** - The login flow will use page redirects. When the login process completes successfully, the user is redirected to the URL specified by the redirectURL parameter (see below). If the redirectURL parameter is not specified, the user will be redirected to the original page from which the login process started.
     *
     * The context object will not be passed when authFlow: 'redirect'.
     */
    authFlow?: 'popup' | 'redirect';
    /**
     * This property defines whether to use the currently specified screen-set lang or not when sending system emails to the user, TFA, email verification, etc.
     *
     * The default is true. When set to true, the screen-set will always send the lang parameter with the request. This is the previous legacy behavior.
     *
     * If set to false, the screen-set will not send the lang parameter in the request, and the email language will be set according to the following hierarchy:
     * - If the user has a locale defined and a template exists for that language, then the email will be sent in the user's locale.
     * - If the user does not have a locale defined the email template defined as the default in the site's policies will be used.
     */
    communicationLangByScreenSet?: boolean;
    /**
     * A JSON object consisting of key/value pairs.
     */
    params?: Record<string, unknown>;
    /**
     * Specifies the container style of the screen-set. Options are:
     * - **modern** - (Default) Uses the default updated and responsive dialog style for the screen-set.
     * - **legacy** - Retains pre-October 26th, 2015 dialog style, however, screens remain responsive.
     *
     * @note: The default value of modern only applies to screen-sets created after October 26th, 2015. Screen-Sets created before this date will default to legacy.
     */
    dialogStyle?: 'modern' | 'legacy';
    /**
     * Specifies the type of the device the UI is to be displayed on. The possible values are:
     * - **desktop** - (default)
     * - **mobile**
     * - **auto** - When this value is used, you must also include the following meta tag in the <head> section of your site for mobile devices to be automatically recognized:
     *
     * \<meta name="viewport" content="width=device-width">
     *
     * Otherwise, the device will be recognized as a desktop device.
     */
    deviceType?: 'desktop' | 'mobile' | 'auto';
    /**
     * A comma-delimited list of provider names to include in the method execution. This parameter enables you to dynamically change the providers displayed in the screen-set. If you do not set this parameter, by default all the providers are enabled (i.e., the screen-set will display all connected providers).
     *
     * For example, if you would like the screen-set to only show Twitter, define: enabledProviders: "twitter".
     *
     * Valid provider names include: amazon, blogger, facebook, foursquare, googleplus, kakao, line, linkedin, livedoor, microsoft, mixi, naver, netlog, odnoklassniki, paypaloauth, qq, renren, sina, spiceworks, twitter, vkontakte, wechat, wordpress, xing, yahoo, yahoojapan.(Note: messenger has been replaced by microsoft, however, for backward compatibility, either can be used).
     *
     * @note: In order to use this parameter to dynamically load providers in your screen-set, make sure not to define providers in the UI Builder or in markup. If you define providers directly in the screen-set (in the UI Builder or in markup), those settings will override this parameter.
     */
    enabledProviders?: string;
    /**
     * The objective of this parameter is to support Over The Air app installs for Android devices during Google+ login. Set this parameter with the package name of your Android app (for example: "com.yourdomain.app"). As a result, after signing in with Google+, users have the option to send your Android app to their device instantly, without leaving your website. As a preliminary step you'll need to Utilize Google+ Native Android Sign-on on your Android app. The package name passed to this parameter is the same one you enter when enabling the Google+ API.
     */
    googlePlayAppID?: string;
    /**
     * Defines a language to automatically translate Screen-Set error messages. The supported languages and their codes can be found in our Language Support guide. This parameter will also display the specified localization, if one exists for the language in your screen-set.
     *
     * @note: It is important to note that the lang parameter only changes the language of the returned on-screen errors, to have screen-sets display in a language other than English you must create a localization for each language you require.
     */
    lang?: string;
    /**
     * A screen-set to use on mobile devices. This screen-set should be opened to cover the entire screen and not resized when switching screens.
     */
    mobileScreenSet?: string;
    /**
     * This parameter is only applicable when redirectURL is specified and it determines how the user info data is passed to the redirectURLs. This parameter accepts two values:
     * - **get** (default) - The user info values should be passed as query string parameters.
     * - **post** - The user info should be passed as POST fields.
     */
    redirectMethod?: 'get' | 'post';
    /**
     * A URL to which to redirect the user when the login process has successfully completed. You must provide an absolute URL - relative URLs are not supported.
     *
     * The following additional parameters are appended to the URL string: UID, UIDSig, timestamp, loginProvider, loginProviderUID, nickname, photoURL, thumbnailURL, firstName, lastName, gender, birthDay, birthMonth, birthYear, email, country, state, city, zip, profileURL, provider.
     *
     * These parameters are equivalent to the User object fields. Please find the parameters' description in the User object reference page.
     *
     * When redirectURL is explicitly defined by the partner the user object fields should always be sent with the redirect regardless of the authFlow mode.
     *
     * This parameter is required if using authFlow: 'redirect' (above).
     *
     * @note: We strongly advise providing a secure (ssl) HTTPS URL.
     */
    redirectURL?: string;
    /**
     * Records the source of the registration. The default value is the URL of the current page but it can be any string value. regSource is stored in the account and can be used by verification emails to determine which page should be opened (see accounts.set Policies). Can also be set via the Global Conf object.
     */
    regSource?: string;
    /**
     * 	A ticket that is used to complete the registration process. This parameter may be used in a scenario where a user may begin registration via social login on one page but the site redirects them to a registration page to complete his registration.
     */
    regToken?: string;
    /**
     * This parameter defines the length of time that Gigya should keep the user's login session valid. It can be configured via WebSDK Configuration, via an individual API call, or left empty. If no value is specified, the default values are 0 or -2, depending on whether your site uses RaaS or not (see below); Global configuration overrides the default, and setting the value via individual API calls override the global configuration.
     *
     * The expected values are:
     * - **0** - Session expires when the browser closes. This is the default behavior when RaaS is enabled in your site. This behavior is dependent upon the browser's cookie handling procedures, i.e., Chrome keeps processes running in the background even after the browser is technically closed, this keeps the cookies valid until the background processes are terminated. This value is not supported when using our Mobile SDKs, and the session will behave as if set to -2.
     * - **-1** - Session ends after a 60 second period; Gigya gives you the option of creating a cookie that is stored on the site visitor's client (browser), allowing the site to control the session length within this 60 second window, after which the session is terminated if no cookie is found. A typical use case is when the session could include sensitive data (such as credit card details), and the session should be short, with the option of restarting the duration when users perform actions. Useful if you always set the session expiration via individual API methods or with each request, such as when the site session is controlled by a CMS (e.g., Drupal). For additional information, see how to define a session expiration cookie. Note: This setting is not supported on Safari.
     * - **-2** - Session is valid forever. This is the default behavior when RaaS is not enabled in your site.
     * - Any custom integer - Defines the number of seconds the session is active, e.g., 3600 (one hour).
     */
    sessionExpiration?: number;
    /**
     * Specifies which screen of the screen-set to render initially. The value of this parameter is the ID of a screen. By default, if this parameter is not specified, Gigya will initially present the first screen defined within the screen-set. For names of screens within the default screen-sets, see the Default Screen-sets.
     */
    startScreen?: string;
}>;

/**
 * This doesn't seem to be documented?
 */
export type AccountsShowScreenSetResponseJS = GigyaResponse<{}>;

/**
 * @TODO: This is not documented in the Gigya WebSDK docs.
 */
export type AccountsGetSchemaResponseJS = AccountsGetSchemaResponse;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4136cef070b21014bbc5a10ce4041860.html#method-parameters
 */
export type AccountsInitRegistrationRequestJS = Omit<AccountsInitRegistrationRequest, 'dataCenter'>;

/**
 * @TODO: This is not documented in the Gigya WebSDK docs.
 */
export type AccountsInitRegistrationResponseJS = AccountsInitRegistrationResponse;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41389fe070b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsRegisterRequestJS<
    DataSchema extends GigyaData,
    PreferencesSchema extends GigyaPreferences,
    SubscriptionsSchema extends GigyaSubscriptions,
> = AccountsRegisterRequest<DataSchema, PreferencesSchema, SubscriptionsSchema> & {
    /**
     * This may be used in some cases to suppress logic applied by the Web SDK, such as automatic opening of screens (e.g., in a registration completion scenario). This parameter may not be used with REST APIs.
     */
    ignoreInterruptions?: boolean;
};

/**
 * @TODO: This is not documented in the Gigya WebSDK docs.
 */
export type AccountsRegisterResponseJS<
    DataSchema extends GigyaData,
    PreferencesSchema extends GigyaPreferences,
    SubscriptionsSchema extends GigyaSubscriptions,
> = Omit<AccountsRegisterResponse<DataSchema, PreferencesSchema, SubscriptionsSchema>, 'password'>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4134b19d70b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsFinalizeRegistrationRequestJS = AccountsFinalizeRegistrationRequest;

/**
 * @TODO: This is not documented in the Gigya WebSDK docs.
 */
export type AccountsFinalizeRegistrationResponseJS<
    DataSchema extends GigyaData,
    PreferencesSchema extends GigyaPreferences,
    SubscriptionsSchema extends GigyaSubscriptions,
> = Omit<AccountsFinalizeRegistrationResponse<DataSchema, PreferencesSchema, SubscriptionsSchema>, 'password'>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4137cecf70b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsOTPSendCodeRequestJS = AccountsOTPSendCodeRequest & {
    /**
     * This may be used in some cases to suppress logic applied by the Web SDK, such as automatic opening of screens (e.g., in a registration completion scenario). This parameter may not be used with REST APIs.
     */
    ignoreInterruptions?: boolean;
};

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4137cecf70b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsOTPSendCodeResponseJS = Omit<AccountsOTPSendCodeResponse, 'code'>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413b93e570b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsInitTFARequestJS = AccountsInitTFARequest;
/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413b93e570b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsInitTFAResponseJS = AccountsInitTFAResponse;

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
     *  This method completes on-site user registration.
     *
     *  For registration through a social network, see accounts.socialLogin.
     *
     *  On-site registration requires three API calls:
     *
     *      1. accounts.initRegistration
     *      2. accounts.register
     *      3. accounts.finalizeRegistration
     *
     *  This method is not required if the finalizeRegistration parameter was set to true in accounts.register.
     *
     *  @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4134b19d70b21014bbc5a10ce4041860.html
     */
    finalizeRegistration: GigyaJSFunction<
        AccountsFinalizeRegistrationRequestJS,
        AccountsFinalizeRegistrationResponseJS<DataSchema, PreferencesSchema, SubscriptionsSchema>
    >;

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
     * This method retrieves the schema of the Profile object and the Data object (the site specific custom data object) in Gigya's Accounts Storage.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4135d4e170b21014bbc5a10ce4041860.html
     */
    getSchema: GigyaJSFunction<AccountsGetSchemaRequestJS, AccountsGetSchemaResponseJS>;

    /**
     * This method initializes a registration process at a site.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4136cef070b21014bbc5a10ce4041860.html
     */
    initRegistration: GigyaJSFunction<AccountsInitRegistrationRequestJS, AccountsInitRegistrationResponseJS>;

    /**
     * This method logs in a user to your site and opens a session for the logged-in user on success.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/eb93d538b9ae45bfadd9a8aaa8806753.html
     */
    login: GigyaJSFunction<
        AccountsLoginRequestJS,
        AccountsLoginResponseJS<DataSchema, PreferencesSchema, SubscriptionsSchema>
    >;

    /**
     * This method Logs out the current user of your site.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4137589670b21014bbc5a10ce4041860.html
     */
    logout: GigyaJSFunction<AccountsLogoutRequestJS, AccountsLogoutResponseJS>;

    /**
     * This method is the first to call in a Phone Number Login flow, and is used in an email code verification flow.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4137cecf70b21014bbc5a10ce4041860.html
     */
    'otp.sendCode': GigyaJSFunction<AccountsOTPSendCodeRequestJS, AccountsOTPSendCodeResponseJS>;

    /**
     * This method registers a new user at your site.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41389fe070b21014bbc5a10ce4041860.html
     */
    register: GigyaJSFunction<
        AccountsRegisterRequestJS<DataSchema, PreferencesSchema, SubscriptionsSchema>,
        AccountsRegisterResponseJS<DataSchema, PreferencesSchema, SubscriptionsSchema>
    >;

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
     * This method loads a screen-set.
     *
     * This API binds the screen-set to its functionality, and, by default, renders the initial screen of the screen-set. When using this method with Screen-Sets hosted on Gigya (via the UI Builder), the latest version of the screen-set in your account will always be the one displayed.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413a5b7170b21014bbc5a10ce4041860.html
     */
    showScreenSet: GigyaJSFunction<AccountsShowScreenSetRequestJS, AccountsShowScreenSetResponseJS>;

    /**
     * This method initializes two-factor authentication (TFA).
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413b93e570b21014bbc5a10ce4041860.html
     */
    'tfa.initTFA': GigyaJSFunction<AccountsInitTFARequestJS, AccountsInitTFAResponseJS>;
};
