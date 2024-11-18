import { GigyaCaptchaType, GigyaRegion, GigyaRequest, GigyaResponse } from '../types/gigya-requests';
import { GigyaSubscriptions, UpdateSubscriptions } from '../types/gigya-subscriptions';
import {
    GigyaClientContext,
    GigyaData,
    GigyaIdentity,
    GigyaPhoneObject,
    GigyaPreferences,
    GigyaProfile,
    GigyaProviderGeneric,
    GigyaSMSConfig,
    GigyaSMSTemplateSettings,
    GigyaStreamEvent,
    GigyaValidationError,
    GigyaWebhook,
} from '../types/gigya-types';

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/23e5e21ad35f4c85b98ce39e895e5f24.html#parameters
 */
export type AccountsAddEmailsRequest = GigyaRequest<{
    /**
     * The unique ID of the user for which to add user account emails.
     */
    uid: string;
    /**
     * A string holding a comma-separated list of email addresses. The email addresses are added to the account's verifiedEmail list. If an email address in this list exists in the unverifiedEmail list on the account object, the email address is removed from the unverifiedEmail list on the account object.
     */
    verifiedEmails?: string;
    /**
     * A string holding a comma-separated list of email addresses. The email addresses are added to the account's unverifiedEmail list. If an email address in this list exists in the verifiedEmail list on the account object, the email address is removed from the verifiedEmail list on the account object.
     */
    unverifiedEmails?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/23e5e21ad35f4c85b98ce39e895e5f24.html#response-data
 */
export type AccountsAddEmailsResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/40e8d65874d4480eb1ed7ff105351cbd.html#parameters
 */
export type AccountsAddressCountriesGetRequest = GigyaRequest<{
    /**
     * The ID of the partner for which you have set up DQM credentials.
     */
    partnerId: string;
    /**
     * The code of the language in which to display content to this user. You can find the supported language codes in Advanced Customizations and Localization.
     *
     * If you don't specify a language, SAP Customer Data Cloud provides the results in English by default.
     */
    language?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/40e8d65874d4480eb1ed7ff105351cbd.html#response-data
 */
export type AccountsAddressCountriesGetResponse = GigyaResponse<{
    /**
     * The list of countries returned from the microservices for location data (containing up to 20 address suggestions) with their corresponding ISO codes and numeric code.
     */
    countries?: Array<{
        /**
         * The name of the country.
         */
        name: string;
        /**
         * The 2-letter ISO code of the country.
         */
        isoCode2: string;
        /**
         * The 3-letter ISO code of the country.
         */
        isoCode3: string;
        /**
         * The numeric code of the country.
         */
        numericCode: number;
    }>;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/6fa4e911e0f245bbb185cb662d1132a4.html#parameters
 */
export type AccountsAddressSuggestionsGetRequest = GigyaRequest<{
    /**
     * The id of the address suggestion that a user selects from the list of suggestions.
     */
    suggestionReply?: string;
    /**
     * - The address that a user enters into the address field.
     * - Can be left blank if the address field is not required.
     */
    address?: string;
    /**
     * Country data in the form of a 3-character country code or a spelled-out country name. Country data can be localized.
     *
     * For example, DEU, Germany, or Deutschland.
     */
    country?: string;
    /**
     * Include latitude only when type-ahead suggestions are enabled and you want the distance to the point to be used to determine the type ahead suggestions returned and the order that they are returned.
     *
     * Latitude is provided by browser geolocation if a user has opted in.
     */
    latitude?: number;
    /**
     * Include longitude only when type-ahead suggestions are enabled and you want the distance to the point to be used to determine the type ahead suggestions returned and the order that they are returned.
     *
     * Longitude is provided by browser geolocation if a user has opted in.
     */
    longitude?: number;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/6fa4e911e0f245bbb185cb662d1132a4.html#response-data
 */
export type AccountsAddressSuggestionsGetResponse = GigyaResponse<{
    /**
     * The list of suggestions returned from the microservices for location data that contains up to 20 address suggestions, each with its own id. After a user has selected an option from the address suggestions, this list will be empty.
     */
    suggestions?: Array<{
        /**
         * The id of the address suggestion.
         */
        id: string;
        /**
         * The address suggestion.
         */
        address: string;
    }>;
    /**
     * The address returned from the microservices for location data after a user has selected one option from the address suggestions. If a user has not selected an option from the address suggestions, the address will be empty.
     */
    address?: {
        metadataToken?: string;
        country?: string;
        countryISOCode2?: string;
        countryISOCode3?: string;
        zipCode?: string;
        city?: string;
        street?: string;
        houseNumber?: string;
        neighborhood?: string;
        building?: string;
        entrance?: string;
        floor?: string;
        apartment?: string;
        postOfficeBox?: string;
    };
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/b92c0c7ffc954155ac5a2d5509ceada4.html#parameters
 */
export type AccountsAuthGetMethodsRequest = GigyaRequest<{
    /**
     * The type of the identifier of the user, i.e., username, email, or emailOrUsername.
     *
     * @note If not passing an aToken, this property is required.
     */
    identifierType?: 'username' | 'email' | 'emailOrUsername';
    /**
     * The actual identifier, i.e., the full username or email address of the user.
     *
     * @note If not passing an aToken, this property is required.
     */
    identifier?: string;
    /**
     * The aToken returned from accounts.identifiers.createToken.
     *
     * @note The aToken parameter takes precedence over both the identifier and identifierType passed in the request.
     *
     * @note If identifierType is phone, you must pass an aToken or you will receive errorCode: 400096
     */
    aToken?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/b92c0c7ffc954155ac5a2d5509ceada4.html#response-data
 */
export type AccountsAuthGetMethodsResponse = GigyaResponse<{
    /**
     * An array of the authentication methods available for the queried user/aToken.
     * Possible combinations may include one or more of the following:
     *   - password
     *   - push
     *   - emailOtp
     *   - magicLink
     */
    methods?: Array<'password' | 'push' | 'emailOtp' | 'magicLink'>;
    /**
     * An array of all of the available identifiers for the account. Possible combinations may include one or more of the following:
     * - email
     * - phone
     */
    identifiers?: Array<{
        id: string;
        display: string;
        type: 'email' | 'phone';
    }>;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/a330ee71b4f84843a393c1935667e39a.html
 */
export type AccountsAuthMagicLinkEmailGetConfigRequest = GigyaRequest<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/a330ee71b4f84843a393c1935667e39a.html#response-data
 */
export type AccountsAuthMagicLinkEmailGetConfigResponse = GigyaResponse<{
    /**
     * The URI that is defined as the redirect for the Magic Link.
     */
    landingPageUrl?: string;
    /**
     * The length of time that the Magic Link is valid after being sent to the user.
     */
    expiration?: number;
    /**
     * Whether Magic Link is enabled/disabled for the API key.
     */
    isEnabled?: boolean;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/71880e97f2d54fe596d506662818f0a1.html
 */
export type AccountsAuthMagicLinkGetLinkRequest = GigyaRequest<{
    /**
     * 	The email address of the recipient of the Magic Link.
     */
    email: string;
    /**
     * The expiration value for the Magic Link in seconds up to a maximum of 60 days (5184000 seconds). If not provided, the default value will be taken from the site configuration, otherwise the default will be 400 seconds.
     */
    expiration?: number;
    /**
     * The landing page the user will arrive at after clicking the Magic Link.. If not provided, the default value will be taken from the site configuration.
     */
    landingPage?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/71880e97f2d54fe596d506662818f0a1.html#response-data
 */
export type AccountsAuthMagicLinkGetLinkResponse = GigyaResponse<{
    /**
     * The Magic Link to send to the user.
     *
     * The link includes both the vToken and code needed to log the user into the specified site and should never be modified and must only be sent to the user it was created for.
     */
    magicLink?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/465e0de25d684993a481515ff707d86f.html
 */
export type AccountsAuthMagicLinkEmailLoginRequest = GigyaRequest<{
    /**
     * The code returned from accounts.auth.magiclink.email.send API when it was called with admin credentials.
     */
    code: string;
    /**
     * The vToken received from the accounts.auth.magiclink.email.send API.
     */
    vToken: string;
    /**
     * Default is jssdk.
     */
    targetEnv?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/465e0de25d684993a481515ff707d86f.html#response-data
 */
export type AccountsAuthMagicLinkEmailLoginResponse = GigyaResponse<{
    /**
     * The UID of the user's account.
     */
    UID?: string;
    /**
     * This property is deprecated in server to server REST calls! The signature that should be used for login verification.
     */
    UIDSignature?: string;
    /**
     * This returns true if the account created is newly registered.
     */
    isNewUser?: boolean;
    /**
     * An object containing session information.
     *
     * @todo: Figure out what this object looks like
     */
    sessionInfo?: unknown;
    /**
     * A token that is used to complete the registration process.
     */
    regToken?: string;
    /**
     * The SAP Customer Data Cloud Account object.
     *
     * @todo: Figure out what this object looks like
     */
    account?: unknown;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/47006b8cd6ec4292b8fa6321a90328b7.html
 */
export type AccountsAuthMagicLinkEmailSendRequest = GigyaRequest<{
    /**
     * The email address to send the magic link.
     */
    email: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/47006b8cd6ec4292b8fa6321a90328b7.html#response-data
 */
export type AccountsAuthMagicLinkEmailSendResponse = GigyaResponse<{
    /**
     * The vToken which must be passed to the accounts.auth.magiclink.email.login endpoint.
     */
    vToken?: string;
    /**
     * This code must be passed to accounts.auth.magiclink.email.login and is only returned when the request is made with admin permissions (server-side).
     */
    code?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/216a91f008db4ac2bb1dafd66848631f.html#parameters
 */
export type AccountsAuthMagicLinkEmailSetConfigRequest = GigyaRequest<{
    /**
     * If the Magic Link is enabled or disabled for the site.
     */
    isEnabled: boolean;
    /**
     * The URI of the page to redirect the user which has the WebSDK loaded.
     */
    landingPageUrl: string;
    /**
     * The length of time until the magic link expires and can no longer be used. This must be between 60-600.
     */
    expiration?: number;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/216a91f008db4ac2bb1dafd66848631f.html#response-data
 */
export type AccountsAuthMagicLinkEmailSetConfigResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/3e22c136de714dee858e4fc3fcc07e6e.html#parameters
 */
export type AccountsAuthOTPAuthenticateRequest = GigyaRequest<{
    /**
     * The OTP verification code received from the user.
     */
    code: string;
    /**
     * The vToken returned from the OTP Llogin request.
     */
    vToken: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/3e22c136de714dee858e4fc3fcc07e6e.html#response-data
 */
export type AccountsAuthOTPAuthenticateResponse = GigyaResponse<{
    /**
     * A token that can be used as a parameter when calling accounts.resetPassword REST.
     */
    access_token?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/b43af07811fd47d192082b3fcf29e82c.html#parameters
 */
export type AccountsAuthOTPEmailGetConfigRequest = GigyaRequest<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/b43af07811fd47d192082b3fcf29e82c.html#response-data
 */
export type AccountsAuthOTPEmailGetConfigResponse = GigyaResponse<{
    /**
     * Whether Email OTP is enabled for the queried API key.
     */
    isEnabled?: boolean;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/c64edbe9973c4cbdb9bc623ba363f73c.html#parameters
 */
export type AccountsAuthOTPEmailLoginRequest = GigyaRequest<{
    /**
     * Secure token obtained from the sendCode API.
     */
    vToken: string;
    /**
     * The 6-digit code received in the SMS.
     *
     * The length of the code may change, so we recommend that your implementation will not expect a fixed number of digits.
     */
    code: number;
    /**
     * A comma separated list of fields to include in the response.
     */
    include?: string;
    /**
     * Records the source of the registration. The default value is the URL of the current page but it can be any string value. regSource is stored in the account and can be used by verification emails to determine which page should be opened (see accounts.set Policies). Can also be set via the Global Conf object.
     *
     * A user's regSource can only be updated on the initial registration of the user. It can not be updated or overwritten, even if empty.
     */
    regSource?: string;
    /**
     * This parameter defines the length of time that Gigya should keep the user's login session valid. It can be configured via WebSDK Configuration, via an individual API call, or left empty. If no value is specified, the default values are 0 or -2, depending on whether your site uses RaaS or not (see below); Global configuration overrides the default, and setting the value via individual API calls override the global configuration.
     *
     * The expected values are:
     * - 0 - Session expires when the browser closes. This is the default behavior when RaaS is enabled in your site. This behavior is dependent upon the browser's cookie handling procedures, i.e., Chrome keeps processes running in the background even after the browser is technically closed, this keeps the cookies valid until the background processes are terminated. This value is not supported when using our Mobile SDKs, and the session will behave as if set to -2.
     * - -1 - Session ends after a 60 second period; Gigya gives you the option of creating a cookie that is stored on the site visitor's client (browser), allowing the site to control the session length within this 60 second window, after which the session is terminated if no cookie is found. A typical use case is when the session could include sensitive data (such as credit card details), and the session should be short, with the option of restarting the duration when users perform actions. Useful if you always set the session expiration via individual API methods or with each request, such as when the site session is controlled by a CMS (e.g., Drupal). For additional information, see how to define a session expiration cookie.
     * - -2 - Session is valid forever. This is the default behavior when RaaS is not enabled in your site.
     * - Any custom integer - Defines the number of seconds the session is active, e.g., 3600 (one hour).
     */
    sessionExpiration?: number;
    /**
     * Defines the client-side environment. Options are:
     * - mobile
     * - browser
     */
    targetEnv?: 'mobile' | 'browser';
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/c64edbe9973c4cbdb9bc623ba363f73c.html#response-data
 */
export type AccountsAuthOTPEmailLoginResponse = GigyaResponse<{
    /**
     * The UID of the user's account.
     */
    UID?: string;
    /**
     * This returns true if the account created is new.
     */
    isNewUser?: boolean;
    /**
     * An object containing session information.
     *
     * @TODO: What is this?
     */
    sessionInfo?: unknown;
    /**
     * A token that is used to complete the registration process.
     */
    regToken?: string;
    /**
     * @TODO: The rest of a normal "accounts.login" response (profile, data, etc) is also returned here, but not documented well. This still needs to be added here.
     */
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/f067d24087f84174abae20c20a46f827.html
 */
export type AccountsAuthOTPEmailSendCodeRequest = GigyaRequest<{
    /**
     * When in a Global site group, you must pass the UID of the user being updated. Only send UID when using REST and there is no current user session. This property is required only when doing a server-side global access implementation so that additional requests, i.e., accounts.otp.update, can resolve the user's residency datacenter from the vToken.
     */
    UID?: string;
    /**
     * The code of the language in which to send the SMS or email.
     */
    lang: string;
    /**
     * The email to which the verification code is sent. This parameter is required for email code verification flows.
     *
     * @note This cannot be used for one time password flows.
     */
    email?: string;
    /**
     * Whether or not to send the code for the email update flow. This may be set to "false" if you choose to send an SMS via your application, instead of using the SAP Customer Data Cloud capability.
     */
    sendCode?: boolean;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/f067d24087f84174abae20c20a46f827.html#response-data
 */
export type AccountsAuthOTPEmailSendCodeResponse = GigyaResponse<{
    /**
     * A secured token that holds the phone data and expires after 5 minutes. It contains the following fields:
     * - apiKey - The API key of the site.
     * - phoneNumber - The phone number associated with the user's account to send the SMS code.
     * - code - The 6 digit code.
     * - gmid - Only necessary if the method call was originated from the client-side.
     */
    vToken?: string;
    /**
     * The code used for logging the user in. This may be returned only when making the call with admin credentials.
     */
    code?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/2992c8277a72467caa31988bfc7cd57f.html
 */
export type AccountsAuthOTPEmailSetConfigRequest = GigyaRequest<{
    /**
     * Defines whether Email OTP is active for the apiKey.
     */
    isEnabled: boolean;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/2992c8277a72467caa31988bfc7cd57f.html#response-data
 */
export type AccountsAuthOTPEmailSetConfigResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/523e76306db34a19be9199fab59b31df.html#parameters
 */
export type AccountsAuthOTPVerifyRequest = GigyaRequest<{
    /**
     * The code used for logging the user in. This is received from the accounts.otp.sendCode REST endpoint.
     */
    code: string;
    /**
     * A secured token that holds the phone data and expires after 10 minutes. This is received from the accounts.otp.sendCode REST endpoint.
     */
    vToken: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/523e76306db34a19be9199fab59b31df.html#response-data
 */
export type AccountsAuthOTPVerifyResponse = GigyaResponse<{
    /**
     * An id_token in JWT format.
     */
    id_token?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4131785a70b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsAuthPushConfigGetRequest = GigyaRequest<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4131785a70b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsAuthPushConfigGetResponse = GigyaResponse<{
    /**
     * The vendor configuration for this site, including the Firebase Cloud Messaging server key or HTTP v1 API Service Account JSON.
     *
     * @TODO: Not really sure that this config looks like.
     */
    vendors?: Record<string, unknown>;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41318c2170b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsAuthPushConfigSetRequest = GigyaRequest<{
    /**
     * The vendor configured for the current site. Currently accepts only one of either:
     * - fcm - which must be the deprecated server key for Firebase Cloud Messaging.
     * - fcmHttpV1 - which must be the HTTP v1 API Firebase Service Account JSON.
     *
     * @TODO: Not really sure what this config looks like, there is an example provided in the documentation.
     */
    vendors: Record<string, unknown>;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41318c2170b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsAuthPushConfigSetResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4131cb2570b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsAuthPushVerifyRequest = GigyaRequest<{
    /**
     * A verification token that represents the authentication request.
     */
    vToken: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4131cb2570b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsAuthPushVerifyResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4133a29470b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsDeleteAccountRequest = GigyaRequest<{
    /**
     * The unique ID of the user, for whom to delete the account.
     */
    UID: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4133a29470b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsDeleteAccountResponse = GigyaResponse<{}>;

/**
 * https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/2782415067b047b7bf10a1439d3e67ce.html#parameters
 */
export type AccountsDeleteConsentStatementRequest = GigyaRequest<{
    /**
     * The id (name) of the consent statement you want to delete. For example: “terms.statement”.
     */
    consentId: string;
}>;

/**
 * https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/2782415067b047b7bf10a1439d3e67ce.html#response-data
 */
export type AccountsDeleteConsentStatementResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/2b289e32fa544c76850afb7e78b5d92f.html#parameters
 */
export type AccountsDeleteLegalStatementsRequest = GigyaRequest<{
    /**
     * The language of the legal statement to delete.
     */
    lang: string;
    /**
     * The unique identifier of the consent statement to delete.
     */
    consentId: string;
    /**
     * The version date of the legal statement to delete, in ISO 8601 format (i.e., yyyy-mm-dd-Thh:MM:ssZ, where the hours, minutes and seconds should be set to 0).
     *
     * Either docDate or docVersion are required.
     */
    docDate?: string;
    /**
     * The version number of the legal statement to delete.
     *
     * Either docDate or docVersion are required.
     */
    docVersion?: number;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/2b289e32fa544c76850afb7e78b5d92f.html#response-data
 */
export type AccountsDeleteLegalStatementsResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4133b5e170b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsDeleteLiteAccountRequest = GigyaRequest<{
    /**
     * The token of the email account for deletion. This can be received from the response of accounts.search.
     */
    emailAccountToken: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4133b5e170b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsDeleteLiteAccountResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/baaff4ff759d42f48464341ae167dd98.html#parameters
 */
export type AccountsDeleteNativeScreenSetRequest = GigyaRequest<{
    /**
     * The ID of the screen-set to delete.
     */
    screenSetID: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/baaff4ff759d42f48464341ae167dd98.html#response-data
 */
export type AccountsDeleteNativeScreenSetResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4133c8e670b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsDeleteSchemaFieldsRequest = GigyaRequest<{
    /**
     * The data fields to delete.
     */
    dataSchema: Array<string>;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4133c8e670b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsDeleteSchemaFieldsResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4133dbe070b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsDeleteScreenSetRequest = GigyaRequest<{
    /**
     * An identifier of the screen-set to delete. Make sure that screenSetID is not one of the default screenSetIDs and is not linked to the policy, as defined in the Screen-Sets in Gigya's site.
     */
    screenSetID: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4133dbe070b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsDeleteScreenSetResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4133eee870b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsDevicesRegisterRequest = GigyaRequest<{
    /**
     * Information about the device being registered.
     */
    deviceInfo: {
        /**
         * Acceptable values are android or ios.
         */
        platform: 'android' | 'ios';
        /**
         * Information about the manufacturer, e.g., galaxy, apple etc.
         */
        man: string;
        /**
         * The unique fcm-registration-id, as generated by Firebase for this user.
         */
        pushToken: string;
        /**
         * The version number of the operating system.
         */
        os: string;
    };
}>;

/**
 * @note This is not officially documented.
 */
export type AccountsDevicesRegisterResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4134062c70b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsDevicesUnregisterRequest = GigyaRequest<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4134062c70b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsDevicesUnregisterResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4134192b70b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsDevicesUpdateRequest = GigyaRequest<{
    /**
     * Information about the device being registered.
     */
    deviceInfo: {
        /**
         * Acceptable values are android or ios.
         */
        platform: 'android' | 'ios';
        /**
         * Information about the manufacturer, e.g., galaxy, apple etc.
         */
        man: string;
        /**
         * The unique fcm-registration-id, as generated by Firebase for this user.
         */
        pushToken: string;
        /**
         * The version number of the operating system.
         */
        os: string;
    };
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4134192b70b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsDevicesUpdateResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/d3eed592164c4b5f9ae2e8f8a8f14214.html#parameters
 */
export type AccountsDuplicateLegalStatementRequest = GigyaRequest<{
    /**
     * The language of the legal statement to retrieve.
     */
    lang: string;
    /**
     * The unique identifier of the consent statement to retrieve.
     */
    consentId: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/d3eed592164c4b5f9ae2e8f8a8f14214.html#response-data
 */
export type AccountsDuplicateLegalStatementResponse = GigyaResponse<{
    /**
     *
     */
    legalStatements?: {
        /**
         *
         */
        customData?: Array<{
            key: string;
            value: string;
        }>;
        /**
         * An array of version number objects for the current language.
         */
        versions?: {
            [key: string]: {
                purpose: string;
                documentUrl: string;
                legalStatementStatus: string;
            };
        };
        /**
         * An array of version date objects for the current language.
         */
        dates?: {
            [key: string]: {
                purpose: string;
                documentUrl: string;
                legalStatementStatus: string;
            };
        };
    };
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/78e703f2aee64dc99e883378cea0a148.html#parameters
 */
export type AccountsEmailAccountChangeEmailRequest = GigyaRequest<{
    /**
     * The UID of the emailAccount.
     */
    UID: string;
    /**
     * The current email associated to the emailAccount.
     */
    oldEmail: string;
    /**
     * The new email to associate to the emailAccount.
     */
    newEmail: string;
    /**
     * The email/channel token of the emailAccount.
     */
    emailToken: string;
    /**
     * Whether the syncUID is committed. Default value is false.
     */
    fixEnabled?: boolean;
    /**
     * A job identifier to trace all requests associated to the run of a given job.
     */
    jobId?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/78e703f2aee64dc99e883378cea0a148.html#response-data
 */
export type AccountsEmailAccountChangeEmailResponse = GigyaResponse<{
    /**
     * The email associated to the emailAccount prior synchronisation.
     */
    oldEmail?: string;
    /**
     * The email associated to the emailAccount after synchronisation.
     */
    newEmail?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/486489efe27c46deab810c0f15e81afb.html#parameters
 */
export type AccountsEmailAccountSyncMultipleAccountsRequest = GigyaRequest<{
    /**
     * The UID of the emailAccount to be synchronised.
     */
    UID: string;
    /**
     * The email of the emailAccount.
     */
    email: string;
    /**
     * The email/channel token of the emailAccount.
     */
    emailToken: string;
    /**
     * Whether the synchronisation is committed.
     */
    fixEnabled?: boolean;
    /**
     * A job identifier to trace all requests associated to the run of a given job.
     */
    jobId?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3e6a/486489efe27c46deab810c0f15e81afb.html#response-data
 */
export type AccountsEmailAccountSyncMultipleAccountsResponse = GigyaResponse<{
    /**
     * The UID associated to the emailAccount prior to synchronisation (may be the same as the new one).
     */
    uid?: string;
    /**
     * The email associated to the emailAccount prior to synchronisation (may be the same as the new one).
     */
    email?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/a5585b0870144adfb1f043726fc6dc98.html#parameters
 */
export type AccountsEmailAccountSyncUIDRequest = GigyaRequest<{
    /**
     * The UID of the full account that needs to be associated to the emailAccount. The emailAccount UID is set to this value upon execution.
     */
    UID: string;
    /**
     * The current UID of the emailAccount.
     */
    oldUid: string;
    /**
     * The email of the full account and emailAccount.
     */
    email: string;
    /**
     * The email/channel token of the emailAccount.
     */
    emailToken: string;
    /**
     * Whether the syncUID is committed. Default value is false.
     */
    fixEnabled?: boolean;
    /**
     * A job identifier to trace all requests associated to the run of a given job.
     */
    jobId?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/a5585b0870144adfb1f043726fc6dc98.html#response-data
 */
export type AccountsEmailAccountSyncUIDResponse = GigyaResponse<{
    /**
     * The new emailAccount UID (matching the full account UID).
     */
    accountUid?: string;
    /**
     * The UID associated to the emailAccount prior synchronisation (may be the same as the new one).
     */
    emailAccountUid?: string;
    /**
     * The email associated to the emailAccount prior synchronisation (may be the same as the new one).
     */
    email?: string;
    /**
     * Whether the account is a lite account.
     */
    isLiteAccount?: boolean;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41342c3970b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsExchangeUIDSignatureRequest = GigyaRequest<{
    /**
     * The UID of the logged in user.
     */
    UID: string;
    /**
     * The original signature received from the client side login operation.
     */
    UIDSignature: string;
    /**
     * The original timestamp received from the client side login operation. (Must be within 60 seconds of the exchangeUIDSignature request).
     */
    signatureTimestamp: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41342c3970b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsExchangeUIDSignatureResponse = GigyaResponse<{
    /**
     * The original UID passed when the method was called.
     */
    UID?: string;
    /**
     * A new signature based on the new timestamp and the secret key associated with the specified userKey.
     */
    UIDSignature?: string;
    /**
     * A new timestamp generated by the server.
     */
    signatureTimestamp?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41343f7b70b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsExtensionsCreateRequest = GigyaRequest<{
    /**
     * The URL where the code data file of the Extension is located.
     */
    extensionFuncUrl: string;
    /**
     * The custom friendly name that will define this Extension.
     */
    friendlyName: string;
    /**
     * The event that this Extension is connected to. This must be a single one of the following supported Extension Points:
     * - OnBeforeAccountsRegister
     * - OnBeforeAccountsLogin
     * - OnBeforeSetAccountInfo
     * - OnBeforeSocialLogin
     */
    extensionPoint:
        | 'OnBeforeAccountsRegister'
        | 'OnBeforeAccountsLogin'
        | 'OnBeforeSetAccountInfo'
        | 'OnBeforeSocialLogin';
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3e6a/41343f7b70b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsExtensionsCreateResponse = GigyaResponse<{
    /**
     * A JSON object including the details for the requested Extension.
     */
    result?: Array<{
        /**
         * The Gigya defined ID of the Extension.
         */
        extensionId: string;
        /**
         * The friendly name of the Extension.
         */
        friendlyName: string;
        /**
         * The current status of the Extension.
         */
        enabled: boolean;
    }>;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4134526e70b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsExtensionsDeleteRequest = GigyaRequest<{
    /**
     * The Gigya defined id of the requested Extension as it is returned in the accounts.extensions.list response.
     */
    extensionId: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3e6a/4134526e70b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsExtensionsDeleteResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4134656770b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsExtensionsGetRequest = GigyaRequest<{
    /**
     * The Gigya defined id of the requested Extension as it is returned in the accounts.extensions.list response.
     */
    extensionId: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4134656770b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsExtensionsGetResponse = GigyaResponse<{
    /**
     * A JSON object including the details for the requested Extension
     */
    result?: {
        /**
         * The Gigya defined ID of the Extension.
         */
        extensionId: string;
        /**
         * The friendly name of the Extension.
         */
        friendlyName: string;
        /**
         * Whether the Extension is currently enabled.
         */
        enabled: boolean;
        /**
         * The date and time the Extension was created.
         */
        created: string;
        /**
         * The date and time the Extension was last modified.
         */
        modified: string;
        /**
         * The event this Extension is connected to.
         */
        extensionPoint: string;
        /**
         * The URL where the code data file of the Extension is located.
         */
        extensionFuncUrl: string;
        /**
         * The timeout configured for this extension.
         */
        timeout: number;
        /**
         * The behavior defined for this extension in case of an error - whether to fail flows or ignore errors.
         */
        fallback: 'IgnoreAllErrors' | 'FailOnAnyError';
    };
}>;

/**
 * @note This is not officially documented.
 */
export type AccountsExtensionsListRequest = GigyaRequest<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4134785270b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsExtensionsListResponse = GigyaResponse<{
    /**
     * An array including all the returned Extensions.
     */
    result?: Array<{
        /**
         * The Gigya defined ID of the Extension.
         */
        extensionId: string;
        /**
         * The friendly name of the Extension.
         */
        friendlyName: string;
        /**
         * Whether the Extension is currently enabled.
         */
        enabled: boolean;
        /**
         * The dateTime the extension was created.
         */
        created: string;
        /**
         * The dateTime the extension was last modified.
         */
        modified: string;
        /**
         * The URL where the code data file of the Extension is located.
         */
        extensionFuncUrl: string;
        /**
         * The Description of the extension.
         */
        description: string;
        /**
         * The extension point this extension is connected to.
         */
        extensionPoint:
            | 'OnBeforeAccountsRegister'
            | 'OnBeforeAccountsLogin'
            | 'OnBeforeSetAccountInfo'
            | 'OnBeforeSocialLogin';
        /**
         * The timeout configured for this extension.
         */
        timeout: number;
        /**
         * The behavior defined for this extension in case of an error - whether to fail flows or ignore errors.
         */
        fallback: 'IgnoreAllErrors' | 'FailOnAnyError';
    }>;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41348b7a70b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsExtensionsModifyRequest = GigyaRequest<{
    /**
     * The Gigya defined id of the requested Extension as it is returned in the accounts.extensions.list response.
     */
    extensionId: string;
    /**
     * The status of this extension.
     */
    enabled?: boolean;
    /**
     * The URL where your extension code resides.
     *
     * @note If you update this value for an extension on a child site, then any subsequent changes to this value on the parent site will not cascade to the child.
     */
    extensionFuncUrl?: string;
    /**
     * The custom friendly name that will define this Extension.
     */
    friendlyName?: string;
    /**
     * The event that this Extension is connected to. This must be any single one of the following supported Extension Points:
     * - 'OnPasswordComplexityCheck'
     */
    extensionPoint?: 'OnPasswordComplexityCheck';
    /**
     * The length of time (in miliseconds) that Gigya is to wait for the Extension's response. Accepts values between 10 and 5000. The default is 1000 (i.e. 1 second).
     */
    timeout?: number;
    /**
     * The action to take in case of a technical error in the Extension execution - whether to ignore errors, or fail the flow. Acceptable values:
     * - IgnoreAllErrors (default)
     * - FailOnAnyError
     */
    fallback?: 'IgnoreAllErrors' | 'FailOnAnyError';
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41348b7a70b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsExtensionsModifyResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/228cd8bc68dc477094b3e0e9fe108e23.html
 */
export type AccountsFinalizeRegistrationRequest = GigyaRequest<{
    /**
     * The regToken returned from accounts.initRegistration. If there were errors incurred using accounts.register or from accounts.login, this is the new regToken returned from those calls (i.e., if the user tried to sign in without completing registration or there were missing required fields).
     *
     * @note The regToken you receive from Gigya is only valid for one hour.
     */
    regToken: string;
    /**
     * A comma-separated list of fields to include in the response. The possible values are: identities-active, identities-all, loginIDs, emails, profile, data, irank, subscriptions, rba. If none these parameter are provided, none of the aforementioned properties are returned in the response; only the profile and data objects are returned by default.
     */
    include?: string;
    /**
     * Default is false. If true, the server allows regTokens generated by account linking.
     */
    allowAccountsLinking?: boolean;
    /**
     * This parameter defines your client side environment, which in return determines the server response data fields. The default value of this parameter is "browser", which means that by default you receive cookie-related data in the response.
     */
    targetEnv?: 'browser' | 'mobile';
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/228cd8bc68dc477094b3e0e9fe108e23.html#response-data
 */
export type AccountsFinalizeRegistrationResponse<
    DataSchema extends GigyaData,
    PreferencesSchema extends GigyaPreferences,
    SubscriptionsSchema extends GigyaSubscriptions,
> = GigyaResponse<{
    /**
     * An object containg session information. The content of this object depends on the targetEnv parameter passed in the accounts.register method.
     *
     * By default, if the targetEnv parameter is not set (your client environment is web), the sessionInfo object contains the the following string fields: cookieName and cookieValue.
     *
     * Please create a session cookie with the name and value specified by these fields.
     *
     * Alternatively, if the targetEnv parameter is set to "mobile" (your client runs on a mobile), the sessionInfo object contains the the following string fields: sessionToken and sessionSecret. Please send these fields to your mobile client. On your client side, call GSAPI.setSession (using the Mobile SDK) to save them on the app's storage.
     */
    sessionInfo?: {
        cookieName?: string;
        cookieValue?: string;

        sessionToken?: string;
        sessionSecret?: string;

        login_token?: string;
        expires_in?: number;
    };
    /**
     * A ticket that is used to complete a registration process. A new regToken is returned when there is a pending registration error, which occurs when the user did not complete the registration process, or there are missing fields in the user profile data that were defined as "required" in the Schema.
     */
    regToken?: string;
    /**
     * One or more unverified emails, in case there is a pending verification error.
     */
    unverifiedEmails?: Array<string>;
    /**
     * Indicates whether a new user was created in this call.
     */
    newUser?: boolean;
    /**
     * The unique user ID. This user ID should be used for login verification. See User.UID for more information.
     */
    UID?: string;
    /**
     * The UTC time the account was created in ISO 8601 format, e.g., "1997-07-16T19:20:30Z".
     */
    created?: string;
    /**
     * The UTC time the account was created in Unix time format including milliseconds (i.e., the number of seconds since Jan. 1st 1970 * 1000).
     */
    createdTimestamp?: number;
    /**
     * Custom data. Any data that you want to store regarding the user that isn't part of the Profile object.
     */
    data?: DataSchema;
    /**
     * The email addresses belonging to the user. This includes the following fields:
     * - verified - an array of strings representing the user's verified email addresses.
     * - unverified - an array of strings representing the user's unverified email addresses.
     *
     * @note emails must be specified explicitly in the include parameter in order to be included in the response.
     */
    emails?: {
        verified?: Array<string>;
        unverified?: Array<string>;
    };
    /**
     * When using CIAM for B2B, this is where the user's Organization Management data is stored. For a detailed Description of this field, see the Groups Object documentation.
     *
     * @todo: type this out
     */
    groups?: unknown;
    /**
     * An array of Identity Objects, each object represents a user's social identity. Each Identity Object contains imported data from a social network that the user has connected to.
     *
     * @note You must explicitly specify identities within the include parameter for them to be included in the response: identities-active , identities-all, or identities-global to return only active identities, all identities of a site, or all identities of a site group, respectively.
     * @note Be advised that if a user registers to your site using a Social Identity, then goes through the Forgot Password flow, a Site Login is added to their account, however, a Site Identity is not. A Site Identity can only be created when accounts.setAccountInfo is called on the user's account.
     */
    identities?: Array<GigyaIdentity>;
    /**
     * Indicates whether the account is active. The account is active once the user creates it even without finalizing it. The account can be deactivated, but it will still be registered if the registration process has been finalized. If isActive==false the user cannot log in, however any currently active sessions remain valid.
     */
    isActive?: boolean;
    /**
     * Indicates whether the user is registered. The user is registered once his registration has been finalized.
     */
    isRegistered?: boolean;
    /**
     * Indicates whether the account email is verified.
     */
    isVerified?: boolean;
    /**
     * The time of the last login of the user in ISO 8601 format, e.g., "1997-07-16T19:20:30Z".
     */
    lastLogin?: string;
    /**
     * The user's last login location, derived from IP address. This includes the following fields:
     * - country - a string representing the two-character country code.
     * - state - a string representing the state, where available.
     * - city - a string representing the city name.
     * - coordinates - an object containing:
     *   - lat - a number representing the latitude.
     *   - lon - a number representing the longitude.
     */
    lastLoginLocation?: {
        country?: string;
        state?: string;
        city?: string;
        coordinates?: {
            lat?: number;
            lon?: number;
        };
    };
    /**
     * The UTC time of the last login of the user in Unix time format including milliseconds (i.e., the number of seconds since Jan. 1st 1970 * 1000).
     */
    lastLoginTimestamp?: number;
    /**
     * The UTC time when user profile, preferences, or subscriptions data was last updated (either full or partial update) in ISO 8601 format, e.g., "2017-07-16T19:20:30Z".
     */
    lastUpdated?: string;
    /**
     * The UTC time when the last update of the object occurred (either full or partial update) in Unix time including milliseconds, based on when the 'lastUpdated', 'Report AccountsFirstLogin' or 'AccountsReturnedLogin' events are fired.
     */
    lastUpdatedTimestamp?: number;
    /**
     * The user's login identifiers. This includes the following fields:
     * - username - a string representing the user's username.
     * - emails - an array of strings representing the user's email addresses.
     * - unverifiedEmails - an array of strings representing email addresses that were not validated.
     *
     * @note: loginIDs must be specified explicitly in the include parameter in order to be included in the response.
     */
    loginIDs?: {
        username?: string;
        emails?: Array<string>;
        unverifiedEmails?: Array<string>;
    };
    /**
     * The name of the provider that the user used in order to login.
     */
    loginProvider?: string;
    /**
     * The UTC time when the oldest data of the object was refreshed in ISO 8601 format, e.g., "1997-07-16T19:20:30Z".
     */
    oldestDataUpdated?: string;
    /**
     * The UTC time when the oldest data of the object was refreshed in Unix time format including milliseconds (i.e., the number of seconds since Jan. 1st 1970 * 1000).
     */
    oldestDataUpdatedTimestamp?: number;
    /**
     * The user's Site account password details. Includes the following:
     * - hash - the hashed password
     * - hashSettings - object includes:
     *   - algorithm - Represents the hash algorithm used to encrypt the password.
     *   - rounds - Represents the number of iterations to perform the hashing.
     *   - salt - Represents the BASE64 encoded value of the salt.
     *   - format - Represents the template for merging clear-text passwords. This is only returned if the pwHashFormat parameter was set during account import and until the user's first login to SAP Customer Data Cloud (when the user's password is rehashed per the site's settings). See the RaaS Import Guide for additional information.
     */
    password?: {
        hash?: string;
        hashSettings?: {
            algorithm?: string;
            rounds?: number;
            salt?: string;
            format?: string;
        };
    };
    /**
     * The Phone Number login identifier, if the account uses Phone Number Login. The phone number formatting is e.164.
     */
    phoneNumber?: string;
    /**
     * The user's preferences information as described in the Preferences Object. To have this data returned in the response it must be specifically requested using the include parameter.
     */
    preferences?: PreferencesSchema;
    /**
     * The user's profile information as described in the object. If the user has more than one type of identity (i.e. site and social), data from a 'site' source will override data from a social network and always take precedence. If no site data exists, the first social account to update a field's data will take precedence. The profile is returned in the response by default, but if the include parameter is used to specify other fields that should be provided in the response, the profile must also be specified explicitly in the include parameter.
     */
    profile?: GigyaProfile;
    /**
     * The current RBA Policy defined for the specified user. Properties include:
     * - riskPolicy - Determines the rule set from the defined rulesSets configured in accounts.rba.setPolicy or one of the default policies.
     * - riskPolicyLocked - Determines whether the user can change their own riskPolicy. If true, only an admin can change the user's riskPolicy.
     */
    rba?: {
        riskPolicy?: string;
        riskPolicyLocked?: boolean;
    };
    /**
     * The UTC time when the isRegistered parameter was set to true in ISO 8601 format, e.g., "1997-07-16T19:20:30Z".
     */
    registered?: string;
    /**
     * The GMT time when the isRegistered parameter was set to true in Unix time format, including milliseconds.
     */
    registeredTimestamp?: number;
    /**
     * A string representing the source of the registration. Can be used to set varying destination pages in accounts.setPolicies.
     */
    regSource?: string;
    /**
     * A comma-separated list of the names of the providers to which the user is connected/logged in.
     */
    socialProviders?: string;
    /**
     * The user's subscription information.
     */
    subscriptions?: SubscriptionsSchema;
    /**
     * The UTC time when the isVerified parameter was set to true in ISO 8601 format, e.g., "1997-07-16T19:20:30Z".
     */
    verified?: string;
    /**
     * The GMT time when the isVerified parameter was set to true in Unix time format including milliseconds (i.e., the number of seconds since Jan. 1st 1970 * 1000).
     */
    verifiedTimestamp?: number;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/cab69a86edae49e2be93fd51b78fc35b.html#parameters
 */
export type AccountsGetAccountInfoRequest = GigyaRequest<{
    /**
     * The unique ID of the user for which to retrieve data. Use either this parameter or regToken.
     *
     * If you call this method through an external OAuth2 SDK, then the UID may be passed implicitly within the access_token.
     */
    UID?: string;
    /**
     * The regToken returned from accounts.initRegistration, accounts.register, or accounts.login API calls when the registration process has not been finalized.
     *
     * @note The regToken you receive from SAP Customer Data Cloud is valid for only 1 hour.
     */
    regToken?: string;
    /**
     * A comma-separated list of fields to include in the response. The possible values are:
     * - identities-active
     * - identities-all
     * - identities-global
     * - loginIDs
     * - emails
     * - profile
     * - data
     * - memberships
     * - password
     * - isLockedOut
     * - lastLoginLocation
     * - regSource
     * - irank
     * - rba
     * - subscriptions
     * - userInfo
     * - preferences
     * - groups
     * - internal
     * - customIdentifiers
     *
     * The default value is "profile,data,subscriptions" so if this parameter is not used, the response returns the Profile and data objects, and subscriptions, if any are associated with the user.
     *
     * @note Make sure the parameter does not contain spaces between the values.
     */
    include?: string;
    /**
     * This parameter accepts a comma-separated list of additional social profile fields to retrieve. The current valid values are: languages, address, phones, education, educationLevel, honors, publications, patents, certifications, professionalHeadline, bio, industry, specialties, work, skills, religion, politicalView, interestedIn, relationshipStatus, hometown, favorites,followersCount, followingCount, username, name, locale, verified,timezone, likes,samlData.
     */
    extraProfileFields?: string;
    /**
     * Two parameters are acceptable:
     * - comma-separated list of combinations of communication channel & communication topic to which the user is opted in/out.
     * - all - all communication topics to which the user is opted in/out/noticed.
     */
    includeCommunications?: string | 'all';
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/cab69a86edae49e2be93fd51b78fc35b.html#response-data
 */
export type AccountsGetAccountInfoResponse<
    DataSchema extends GigyaData,
    PreferencesSchema extends GigyaPreferences,
    SubscriptionsSchema extends GigyaSubscriptions,
> = GigyaResponse<{
    /**
     * Returned only for Global sites: Indicates whether this account is currently in transition, i.e. accounts.global.changeAccountResidency has been called for this account and it is currently transferred between data centers. When the account is in transition, changes may not be made to the account, and attempting to specify this account in any other endpoint will result in an error.
     */
    inTransition?: boolean;
    /**
     * The unique user ID. This user ID should be used for login verification.
     */
    UID?: string;
    /**
     * The UTC time the account was created in ISO 8601 format, for example, "1997-07-16T19:20:30Z".
     */
    created?: string;
    /**
     * The UTC time the account was created in Unix time format including milliseconds (i.e., the number of seconds since Jan. 1st 1970 * 1000).
     */
    createdTimestamp?: number;
    /**
     * Custom data. Any data that you want to store regarding the user that isn't part of the Profile object.
     */
    data?: DataSchema;
    /**
     * The email addresses belonging to the user. This object includes the following fields:
     * - verified - an array of strings representing the user's verified email addresses
     * - unverified - an array of strings representing the user's unverified email addresses.
     *
     * @note emails must be specified explicitly in the include parameter in order to be included in the response.
     */
    emails?: {
        verified?: Array<string>;
        unverified?: Array<string>;
    };
    /**
     * When using CIAM for B2B, this is where the user's Organization Management data is stored. For a detailed Description of this field, see the Groups object documentation.
     *
     * @todo: Type this out
     */
    groups?: unknown;
    /**
     * An array of Identity Objects, each object represents a user's social identity. Each Identity Object contains imported data from a social network that the user has connected to.
     *
     * @note You must explicitly specify identities within the include parameter for them to be included in the response: identities-active , identities-all, or identities-global to return only active identities, all identities of a site, or all identities of a site group, respectively.
     * @note Be advised that if a user registers to your site using a Social Identity, then goes through the Forgot Password flow, a Site Login is added to their account, however, a Site Identity is not. A Site Identity can only be created when accounts.setAccountInfo is called on the user's account.
     */
    identities?: Array<GigyaIdentity>;
    /**
     * Indicates whether the account is active. The account is active once the user creates it even without finalizing it. The account can be deactivated, but it will still be registered if the registration process has been finalized. If isActive==false the user cannot log in, however any currently active sessions remain valid.
     */
    isActive?: boolean;
    /**
     * Indicates whether the user is registered. The user is registered once his registration has been finalized.
     */
    isRegistered?: boolean;
    /**
     * Indicates whether the account email is verified.
     */
    isVerified?: boolean;
    /**
     * The time of the last login of the user in ISO 8601 format, for example, "1997-07-16T19:20:30Z".
     */
    lastLogin?: string;
    /**
     * The user's last login location, derived from IP address. This object includes the following fields:
     * - country - a string representing the two-character country code.
     * - state - a string representing the state, where available.
     * - city - a string representing the city name.
     * - coordinates - an object containing:
     *   - lat - a double representing the latitude of the center of the city.
     *   - lon - a double representing the longitude of the center of the city.
     */
    lastLoginLocation?: {
        country?: string;
        state?: string;
        city?: string;
        coordinates?: {
            lat?: number;
            lon?: number;
        };
    };
    /**
     * The UTC time of the last login of the user in Unix time format including milliseconds (i.e., the number of seconds since Jan. 1st 1970 * 1000).
     */
    lastLoginTimestamp?: number;
    /**
     * The UTC time when user profile, preferences, or subscriptions data was last updated (either full or partial update) in ISO 8601 format, for example, "2017-07-16T19:20:30Z".
     */
    lastUpdated?: string;
    /**
     * The UTC time when the last update of the object occurred (either full or partial update) in Unix time including milliseconds, based on when the 'lastUpdated', 'Report AccountsFirstLogin' or 'AccountsReturnedLogin' events are fired.
     */
    lastUpdatedTimestamp?: number;
    /**
     * The earliest time when a user can again log in after they have been locked out by an RBA rule. This property should always be used instead of the deprecated isLockedOut property.
     */
    lockedUntil?: string;
    /**
     * The user's login identifiers. This includes the following fields:
     * - username - a string representing the username
     * - emails - an array of strings representing email addresses
     * - unverifiedEmails - an array of strings representing email addresses that were not validated
     *
     * @note loginIDs must be specified explicitly in the include parameter in order to be included in the response.
     */
    loginIDs?: {
        username?: string;
        emails?: Array<string>;
        unverifiedEmails?: Array<string>;
    };
    /**
     * The name of the provider that the user used in order to log in.
     */
    loginProvider?: string;
    /**
     * The UTC time when the oldest data of the object was refreshed in ISO 8601 format, for example, "1997-07-16T19:20:30Z".
     */
    oldestDataUpdated?: string;
    /**
     * The UTC time when the oldest data of the object was refreshed in Unix time format including milliseconds (i.e., the number of seconds since Jan. 1st 1970 * 1000).
     */
    oldestDataUpdatedTimestamp?: number;
    /**
     * The user's Site account password details. Includes the following:
     * - hash - the hashed password
     * - hashSettings - object includes:
     *   - algorithm - Represents the hash algorithm used to encrypt the password.
     *   - rounds - Represents the number of iterations to perform the hashing.
     *   - salt - Represents the BASE64 encoded value of the salt.
     *   - format - Represents the template for merging clear-text passwords. This is only returned if the pwHashFormat parameter was set during account import and until the user's first login to SAP Customer Data Cloud (when the user's password is rehashed per the site's settings). See RaaS Import Guide for additional information.
     * - created - The last date the user updated/reset their password in ISO 8601 format, for example, "1997-07-16T19:20:30Z" (The created property is always returned, even if not specifying password in the include parameter, as long as a password exists for the account).
     */
    password?: {
        hash?: string;
        hashSettings?: {
            algorithm?: string;
            rounds?: number;
            salt?: string;
            format?: string;
        };
        created?: string;
    };
    /**
     * 	The Phone Number login identifier, if the account uses Phone Number Login. The phone number formatting is e.164. Note that this field cannot be mapped using the UI Builder or the Web SDK.
     */
    phoneNumber?: string;
    /**
     * The user's preferences information as described in the Preferences Object. To have this data returned in the response, it must be requested using the include parameter.
     */
    preferences?: PreferencesSchema;
    /**
     * The user's profile information as described in the object. If the user has more than one type of identity (i.e. site and social), data from a 'site' source will override data from a social network and always take precedence. If no site data exists, the first social account to update a field's data takes precedence. The profile is returned in the response by default, but if the include parameter is used to specify other fields that should be provided in the response, the profile must also be specified explicitly in the include parameter.
     */
    profile?: GigyaProfile;
    /**
     * The current RBA Policy defined for the specified user. Properties include:
     * - riskPolicy - Determines the rule set from the defined rulesSets configured in accounts.rba.setPolicy or one of the default policies.
     * - riskPolicyLocked - Determines whether the user can change their own riskPolicy. If true, only an admin can change the user's riskPolicy.
     */
    rbaPolicy?: {
        riskPolicy?: string;
        riskPolicyLocked?: boolean;
    };
    /**
     * The UTC time when the isRegistered parameter was set to true in ISO 8601 format, for example, "1997-07-16T19:20:30Z".
     */
    registered?: string;
    /**
     * The GMT time when the isRegistered parameter was set to true in Unix time format, including milliseconds.
     */
    registeredTimestamp?: number;
    /**
     * A string representing the source of the registration. Can be used to set varying destination pages in accounts.setPolicies.
     */
    regSource?: string;
    /**
     * A comma-separated list of the names of the providers to which the user is connected/logged in.
     */
    socialProviders?: string;
    /**
     * The user's subscription information.
     */
    subscriptions?: SubscriptionsSchema;
    /**
     * The user's communication topics information.
     *
     * @todo: type this out
     */
    subscriptionsTopics?: unknown;
    /**
     * The UTC time when the isVerified parameter was set to true in ISO 8601 format, for example, "1997-07-16T19:20:30Z".
     */
    verified?: string;
    /**
     * The GMT time when the isVerified parameter was set to true in Unix time format including milliseconds (i.e., the number of seconds since Jan. 1st 1970 * 1000).
     */
    verifiedTimestamp?: number;
    /**
     * User's internal data.
     * - This section will be returned only by server-side calls.
     * - Internal fields will be returned if the user has permission to view them. For details on how to set up Data Field Access in Permission Groups, see Data Field Access.
     *
     * @TODO: Type this out
     */
    internal?: unknown;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4134d7df70b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsGetConflictingAccountRequest = GigyaRequest<{
    /**
     * The regToken of the account being checked for conflicts. regToken is returned by accounts.initRegistration, accounts.register or accounts.login if the user tried to sign in without completing registration. Please note that the regToken you receive from Gigya is valid for only one hour.
     */
    regToken: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4134d7df70b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsGetConflictingAccountResponse = GigyaResponse<{
    /**
     * Will contain null if no conflicting accounts were found.
     */
    conflictingAccount?: {
        /**
         * An array listing the social networks connected to the conflicting account, the keyword site will be used to denote a conflicting site account.
         */
        loginProviders?: Array<string>;
        /**
         * Only returned if the conflictingAccount object includes a site account. Contains either a simple username or an email address, depending on the site's Login Identifier Policy.
         */
        loginID?: string;
    } | null;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/660b99419e294030968610cbb27f42bf.html#parameters
 */
export type AccountsGetConsentStatementsRequest = GigyaRequest<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/660b99419e294030968610cbb27f42bf.html#response-data
 */
export type AccountsGetConsentStatementsResponse<PreferencesSchema extends GigyaPreferences> = GigyaResponse<{
    /**
     * An array of preference objects defined for this site.
     */
    preferences?: PreferencesSchema;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41354df770b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsGetJWTPublicKeyRequest = GigyaRequest<{
    /**
     * If this property is passed and the value is TRUE the response will contain a keys array containing the public key.
     */
    V2?: boolean;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41354df770b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsGetJWTPublicKeyResponse = GigyaResponse<{
    /**
     * Specifies the Key type returned (cryptographic family).
     */
    kty?: string;
    /**
     * 	Specifies the algorithm to be used with this key.
     */
    alg?: string;
    /**
     * Describes the use of of the public key (to encrypt the data or verify the signature)
     */
    use?: string;
    /**
     * The key id used to distinguish between multiple keys in a given set or array.
     */
    kid?: string;
    /**
     * The modulus. A base64url encoding of the returned id_token.
     */
    n?: string;
    /**
     * The exponent value for the RSA public key, base64url encoded.
     */
    e?: string;
    /**
     * For V2 requests, this object contains the public keys.
     */
    keys?: Array<{
        /**
         * Specifies the Key type returned (cryptographic family).
         */
        kty?: string;
        /**
         * 	Specifies the algorithm to be used with this key.
         */
        alg?: string;
        /**
         * Describes the use of of the public key (to encrypt the data or verify the signature)
         */
        use?: string;
        /**
         * The key id used to distinguish between multiple keys in a given set or array.
         */
        kid?: string;
        /**
         * The modulus. A base64url encoding of the returned id_token.
         */
        n?: string;
        /**
         * The exponent value for the RSA public key, base64url encoded.
         */
        e?: string;
    }>;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41353af770b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsGetJWTRequest = GigyaRequest<{
    /**
     * The UID of the user whose data is being requested. Must be a user for the site of the associated apiKey.
     */
    targetUID: string;
    /**
     * Used to add the 'aud' claim to JWT tokens returned. The 'aud' claim tells the receivers of a JWT token which audience(s) the token is valid for. If a service receives the token but is not in the audience list, the service should reject the token.
     */
    audience?: string;
    /**
     * Any existing profile and/or data fields in the target site's database you want to explicitly return in the JWT for this targetUID.
     *
     * When requesting profilefields, it is not necessary to prepend 'profile.' (e.g., profile.firstName can be passed as firstName).
     */
    fields?: string;
    /**
     * The TTL of the returned JWT, in seconds. If this parameter is not passed, the default is 300.
     */
    expiration?: number;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41353af770b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsGetJWTResponse = GigyaResponse<{
    /**
     * The returned JWT containing the user's data.
     */
    id_token?: string;
    /**
     * If any fields that were passed do not exist for the requested apiKey, they will be ignored and listed here.
     */
    ignoredFields?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/ff175775723c4fd0ba4b7be295f6c92f.html#parameters
 */
export type AccountsGetLegalStatementsRequest = GigyaRequest<{
    /**
     * 	The language of the legal statement to retrieve.
     */
    lang: string;
    /**
     * The unique identifier of the consent statement to retrieve.
     */
    consentId: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/ff175775723c4fd0ba4b7be295f6c92f.html#response-data
 */
export type AccountsGetLegalStatementsResponse = GigyaResponse<{
    /**
     * The legal statements defined for this language for this consent statement.
     */
    legalStatements?: {
        /**
         * The active version number of the legal statement.
         */
        currentDocVersion?: number;
        /**
         * The lowest version number that a user can consent to and still be considered to have a valid consent statement assigned to their account.
         */
        minDocVersion?: number;
        /**
         * The active version date (in ISO 8601 format) of the legal statement.
         */
        currentDocDate?: string;
        /**
         * The lowest version date (in ISO 8602 format) that a user can consent to and still be considered to have a valid consent statement assigned to their account.
         */
        minDocDate?: string;
        /**
         * An array of date objects for the current language, that include the purpose text, the documentURL where the legal statement document is saved for this language and legalStatementStatus.
         */
        dates?: Array<{
            [date: string]: {
                purpose?: string;
                documentURL?: string;
                /**
                 * @TODO: There might be more status codes, like draft?
                 */
                legalStatementStatus?: 'Historical' | 'Published';
            };
        }>;
        /**
         * An array of version objects for the current language, that include the purpose text, the documentURL where the legal statement document is saved for this language and legalStatementStatus.
         */
        versions?: Array<{
            [version: string]: {
                purpose?: string;
                documentURL?: string;
                /**
                 * @TODO: There might be more status codes, like draft?
                 */
                legalStatementStatus?: 'Historical' | 'Published';
            };
        }>;
        /**
         * An array of custom data objects that are part of the schema for this consent statement. Each data set is comprised of a key-value pair.
         */
        customData?: Array<{
            [key: string]: string;
        }>;
        /**
         * The purpose text associated with the current legal statement date / version.
         */
        purpose?: string;
        /**
         * The URL of the document associated with the current legal statement date / version.
         */
        documentURL?: string;
        /**
         * The status of the current legal statement date / version.
         */
        legalStatementStatus?: 'Historical' | 'Published';
        /**
         * The version number of this legal statement that is currently published.
         */
        publishedDocVersion?: number;
        /**
         * The version date (in ISO 8601 format) of this legal statement that is currently published.
         */
        publishedDocDate?: string;
    };
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413560f270b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsGetLiteTokenRequest = GigyaRequest<{
    /**
     * The email address associated with the lite account you want to send the invitation.
     *
     * @note Only one of either email or emailToken must be supplied; attempting to send both will cause the call to fail.
     */
    email?: string;
    /**
     * The emailToken associated with the lite account you want to send the invitation.
     *
     * @note Only one of either email or emailToken must be supplied; attempting to send both will cause the call to fail.
     */
    emailToken?: string;
    /**
     * The length of time the user's session will be valid (in seconds) when arriving to your site after clicking the invitation link in the email; the default is 3600 (1 hour).
     */
    sessionExpiration?: number;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413560f270b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsGetLiteTokenResponse = GigyaResponse<{
    /**
     * The token that is passed in set/getAccountInfo to update or view a lite user's account data.
     */
    token?: string;
}>;
/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4135743670b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsGetNativeScreenSetRequest = GigyaRequest<{
    /**
     * An identifier of a native Screen-Set to retrieve.
     */
    screenSetID: string;
    /**
     * A comma separated list of top level fields to include in the response. Possible values are:
     * - screenSetId
     * - routing
     * - screens
     * - theme
     * - customThemes
     * - events
     * - i18n
     *
     * The default response includes all these values.
     */
    include?: string;
    /**
     * If translations exist for the Screen-Set, you can specify which language to return. If not provided, lang defaults to 'null' and the default localization is used. SeeAdvanced Customizations and Localization for supported values.
     */
    lang?: string;
}>;

/**
 * https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4135743670b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsGetNativeScreenSetResponse = GigyaResponse<{
    /**
     * A native Screen-Set object with the top-level fields specified in the include parameter of the request.
     *
     * @TODO: Type this out
     */
    screenSet?: unknown;
    /**
     * The ID of the Screen-Set.
     */
    screenSetId?: string;
    /**
     * The version number for this Screen-Set.
     */
    version?: number;
    /**
     * A comment added to this version of the Screen-Set
     */
    comment?: string;
    /**
     * A Description of this native Screen-Set.
     */
    Description?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/908f6738288644d599d682b11e5eca55.html#parameters
 */
export type AccountsGetNativeScreenSetsRequest = GigyaRequest<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/908f6738288644d599d682b11e5eca55.html#response-data
 */
export type AccountsGetNativeScreenSetsResponse = GigyaResponse<{
    /**
     * An array of native screen-set native metadata objects.
     */
    screenSets?: Array<{
        /**
         * The ID of the Screen-Set
         */
        screenSetId: string;
        /**
         * The version number for this Screen-Set.
         */
        version: number;
        /**
         * A comment added to this version of the Screen-Set.
         */
        comment?: string;
        /**
         * A Description of this native Screen-Set.
         */
        Description?: string;
        /**
         * A timestamp of the last time a change was made to this Screen-Set.
         */
        lastModified?: string;
    }>;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41359a2970b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsGetPoliciesRequest = GigyaRequest<{
    /**
     * A comma-separated list specifying which sections of the policies to include in the response. The available policies are:
     * - registration
     * - gigyaPlugins
     * - accountOptions
     * - passwordComplexity
     * - emailVerification
     * - emailNotifications
     * - passwordReset
     * - profilePhoto
     * - security
     * - twoFactorAuth
     * - federation
     *
     * @note Non-privileged requests (not signed with the application secret) may only request the following policies: registration, gigyaPlugins, passwordComplexity, and security.
     */
    sections?: string;
    /**
     * Specifies what policies to include, can be one of the following options:
     * - full (default) - include the effective policy, including all Gigya defaults and inherited (for member sites in a group) policies.
     * - explicitOnly - include only policies that are explicitly defined by the site.
     */
    include?: 'full' | 'explicitOnly';
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41359a2970b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsGetPoliciesResponse = GigyaResponse<{
    /**
     * The registration policy.
     *
     * @TODO: Type this out
     */
    registration?: unknown;
    /**
     * The Gigya plugins policy.
     *
     * @TODO: Type this out
     */
    gigyaPlugins?: unknown;
    /**
     * The account options policy.
     *
     * @TODO: Type this out
     */
    accountOptions?: unknown;
    /**
     * The password complexity policy.
     *
     * @TODO: Type this out
     */
    passwordComplexity?: unknown;
    /**
     * The email verification policy.
     *
     * @TODO: Type this out
     */
    emailVerification?: unknown;
    /**
     * The email notifications policy.
     *
     * @TODO: Type this out
     *
     * @note: This is not part of the official documentation currently.
     */
    emailNotifications?: unknown;
    /**
     * The password reset policy.
     *
     * @TODO: Type this out
     */
    passwordReset?: unknown;
    /**
     * The profile photo policy.
     *
     * @TODO: Type this out
     */
    profilePhoto?: unknown;
    /**
     * The security policy.
     *
     * @TODO: Type this out
     */
    security?: unknown;
    /**
     * The two-factor authentication policy.
     *
     * @TODO: Type this out
     */
    twoFactorAuth?: unknown;
    /**
     * The federation policy.
     *
     * @TODO: Type this out
     */
    federation?: unknown;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4135e80970b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsGetSchemaRequest = GigyaRequest<{
    /**
     * Specifies what parts of the schema to return, can be one of the following options:
     * - (default) - return the complete schema including implicit fields and dynamic fields.
     * - explicitOnly - return only the parts of the schema that were explicitly set by the partner using a setSchema call.
     * - clientOnly - return only the fields in the schema that allow client access. (see the format definition of the schema object).
     */
    filter?: 'full' | 'explicitOnly' | 'clientOnly';
    /**
     * A comma separated string defining which schema(s) you would like to retrieve in the response; possible values are: "profileSchema, dataSchema, subscriptionsSchema, or internalSchema".
     */
    include?: string;
    /**
     * When calling this method on a member of a site group, this parameter determines the schema that is returned. You may specify one of the following:
     * - effective (default) - Returns a merged schema object for the group and site specific schemas, if they differ, including any site-specific overrides in effect.
     * - group - Returns the schema that is set for the entire group.
     * - site - Returns the schema that is set for the site.
     */
    scope?: 'effective' | 'group' | 'site';
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4135e80970b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsGetSchemaResponse = GigyaResponse<{
    /**
     * A JSON object defining the schema of the {@link https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41698a3870b21014bbc5a10ce4041860.html Profile} object.
     */
    profileSchema?: {
        fields: {
            [key: string]: {
                // @todo: Can this by typed as "AES"?
                allowNull: boolean;
                encrypt?: string;
                format?: string;
                required: boolean;
                type: 'integer' | 'string' | 'basic-string' | 'date' | 'boolean';
                writeAccess: 'serverOnly' | 'clientCreate' | 'clientModify';
            };
        };
    };
    /**
     * A JSON object defining the schema of the {@link https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4130c64b70b21014bbc5a10ce4041860.html Data} object (the site specific custom data object).
     */
    dataSchema?: {
        fields: {
            [key: string]: {
                allowNull: boolean;
                format?: string;
                required: boolean;
                subType?: string;
                tags?: Array<string>;
                type: 'integer' | 'string' | 'basic-string' | 'date' | 'boolean';
                writeAccess: 'serverOnly' | 'clientCreate' | 'clientModify';
            };
        };
    };
    /**
     * A JSON object defining the schema of the {@link https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/417a3ebd70b21014bbc5a10ce4041860.html Subscriptions} object.
     */
    subscriptionsSchema?: {
        fields: {
            [key: string]: {
                required: boolean;
                type: 'subscription';
                writeAccess: 'serverOnly' | 'clientCreate' | 'clientModify';
                doubleOptIn: boolean;
                description: string;
                enableConditionalDoubleOptIn: boolean;
                relatedConsentIds: Array<string>;
            };
        };
    };
    /**
     * A JSON object defining the schema of the Internal Fields object. See the format details in the Internal Fields object section on the {@link https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413a0faa70b21014bbc5a10ce4041860.html accounts.setSchema REST} page.
     *
     * @TODO: Type this out
     */
    internalSchema?: {
        fields: unknown;
    };
    /**
     * A JSON object defining the schema of the Addresses object. For more information, see the addresses fields object section on the accounts.setSchema REST page.
     *
     * @TODO: Type this out
     */
    addressesSchema?: {
        fields: unknown;
    };
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41360e5770b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsGetScreenSetsRequest = GigyaRequest<{
    /**
     * Either a comma separated list or an array of identifiers of the screen-sets to be retrieved. When not specified returns all the screen-sets associated with the site (apiKey). To return screen-sets outside of the local site, e.g., when in an SSO Group, you must specify the screenSetIDs of the screen-set to return.
     */
    screenSetIDs?: string | Array<string>;
    /**
     * A comma separated list of top level fields to include in the response. Possible values are:
     * - screenSetID
     * - html
     * - css
     * - javascript
     * - translations
     *
     * The default response includes all of the above.
     */
    include?: string;
    /**
     * If translations exist for the screen-set(s), you can specify which language to return. If not provided, lang defaults to NULL and the default localization is used. See Advanced Customizations and Localization for supported values.
     */
    lang?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41360e5770b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsGetScreenSetsResponse = GigyaResponse<{
    /**
     * An array of screenSet objects that are returned with the top level fields that are defined in the include parameter.
     */
    screenSets?: Array<{
        screenSetID?: string;
        html?: string;
        css?: string;
        javascript?: string;
        translations?: {
            [language: string]: {
                [translationKey: string]: string;
            };
        };
    }>;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/13d09b52ca21463580b418599b46de64.html#parameters
 */
export type AccountsGetSiteConsentDetailsRequest = GigyaRequest<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/13d09b52ca21463580b418599b46de64.html#response-data
 */
export type AccountsGetSiteConsentDetailsResponse = GigyaResponse<{
    /**
     * All effective consents for the site or group.
     *
     * @TODO: Type this out.
     */
    siteConsentDetails?: unknown;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4136217170b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsGlobalChangeAccountResidencyRequest = GigyaRequest<{
    /**
     * The unique ID of the user whose resident data center is being changed.
     */
    UID: string;
    /**
     * A JWT containing the details of the data center to which the user is transferred.
     */
    transferRequest: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4136217170b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsGlobalChangeAccountResidencyResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/bd88023234a143ce8a7a8104b79eab18.html#parameters
 */
export type AccountsIdentifiersCreateTokenRequest = GigyaRequest<{
    /**
     * Must be one of the following:
     * - phone
     * - email
     * - username
     */
    identifierType: 'phone' | 'email' | 'username';
    /**
     * The actual identifier, i.e., the email address or phone number associated with the user. If the identifier is phone, it must begin with a + (plus) symbol.
     */
    identifier: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/bd88023234a143ce8a7a8104b79eab18.html#response-data
 */
export type AccountsIdentifiersCreateTokenResponse = GigyaResponse<{
    /**
     * The secure JWT containing the user identification in SAP Customer Data Cloud.
     */
    aToken: string;
}>;

/**
 * https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/c50ab43072964e3ba6ab422436d000bd.html#parameters
 */
export type AccountsIdentifiersFindRequest = GigyaRequest<{
    /**
     * A comma-separated list specifying which sections of the policies to include in the response. The available policies are:
     * - gigya.com/identifiers/UID
     * - gigya.com/identifiers/email
     * - gigya.com/identifiers/username
     * - gigya.com/identifiers/phone
     */
    identifierSchema?: string;
    /**
     * The value for the ID specified in the identifierSchema parameter.
     */
    id: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/c50ab43072964e3ba6ab422436d000bd.html#response-data
 */
export type AccountsIdentifiersFindResponse = GigyaResponse<{
    /**
     * Returns a list of all of the available identifiers for the account.
     */
    identifiers?: {
        [identifier in
            | 'gigya.com/identifiers/UID'
            | 'gigya.com/identifiers/email'
            | 'gigya.com/identifiers/username'
            | 'gigya.com/identifiers/phone']?: Array<string>;
    };
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41365a5370b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsImportFullAccountRequest<
    DataSchema extends GigyaData,
    PreferencesSchema extends GigyaPreferences,
    SubscriptionsSchema extends GigyaSubscriptions,
> = GigyaRequest<{
    /**
     * A unique identifier for the imported user. This UID will be the main identifier for the user in SAP Customer Data Cloud.
     */
    UID: string;
    /**
     * How to handle existing users during the import, based on the UID. Acceptable values:
     * - insert (default) - Creates a new user. If the user exists, an error is returned.
     * - upsert -  modifies an existing user or creates a new one. In "upsert" mode, if a value is passed to a field for which data already exists, that value is overritten and not appended.
     */
    importPolicy?: 'insert' | 'upsert';
    /**
     * The time (in UTC) the account was created in ISO 8601 format, e.g., "2019-07-16T19:20:30Z".
     */
    created?: string;
    /**
     * Custom data. The purpose of this object is storing any custom data associated to the user, but which is not part of the Profile object. Gigya validates that the data fields meet the requirements that are defined in the Schema.
     */
    data?: DataSchema;
    /**
     * The data center in which the registering user's data will be stored. Acceptable values:
     * - us1
     * - eu1
     * - au1
     * - cn1
     */
    dataCenter?: GigyaRegion;
    /**
     * Verified and unverified emails. Contains the following arrays of strings:
     * - verified
     * - unverified
     *
     * Required for a user to reset password to the account after import.
     *
     * For details regarding the different Email fields in Customer Data Cloud, see Accounts Objects JS.
     */
    emails?: {
        verified?: Array<string>;
        unverified?: Array<string>;
    };
    /**
     * The phone number login identifier, if the account uses Phone Number Login. The supported phone number formatting is E.164.
     */
    phoneNumber?: string;
    /**
     * The user's identities information. Contains all the properties of the Identity JS object.
     *
     * You can expand a full list of all Identity Properties below the table.
     */
    identities?: Array<GigyaIdentity>;
    /**
     * Indicates whether the account is active. The default is true.
     */
    isActive?: boolean;
    /**
     * Details if the account is registered or not (if finalizeRegistration was completed).
     */
    isRegistered?: boolean;
    /**
     * Indicates whether the account email(s) is verified.
     */
    isVerified?: boolean;
    /**
     * The UTC time of the last login of the user in ISO 8601 format, e.g., "2019-07-16T19:20:30Z".
     */
    lastLogin?: string;
    /**
     * The UTC time when the last update of the object occurred (either full or partial update) in ISO 8601 format, e.g., "2019-07-16T19:20:30Z".
     */
    lastUpdated?: string;
    /**
     * The user's login identifiers. Contains the following properties:
     * - username
     * - emails
     * - unverifiedEmails
     *
     * Required for a user to log in to the account after import.
     */
    loginIDs?: {
        username?: string;
        emails?: Array<string>;
        unverifiedEmails?: Array<string>;
    };
    /**
     * The user's Site account password details.
     */
    password?: {
        /**
         * A string in which a user's password hash as well as the hashing algorithm and various algorithm settings are encoded. Such a compound string packs all information that would otherwise need to be passed through the HashAlgorithm, HashSalt and HashRounds parameters. We currently support two formats, to some extent: Modular Crypt Format (MCF) strings typically start with a "$...$" pattern. These strings are typically used by PHP and Python-based user management platforms.
         */
        compoundHashedPassword?: string;
        /**
         * The user's password, hashed using the algorithm defined by the HashAlgorithm parameter using BASE64 encoding. The max number of hash bits is 512. If compoundHashedPassword is not passed, this parameter is required.
         *
         * @note You must avoid double encoding with your hashing. If your hashes are already hex-encoded, you should convert them to BASE64-encoding, not perform an additional BASE64-encoding to the hex-encoded hashes.
         */
        hashedPassword?: string;
        /**
         * Password settings
         */
        passwordSettings?: {
            /**
             * The hash algorithm used to encrypt the password. The supported hash algorithms are:"md5", "sha1", "sha1_hashbytes", "sha256", "sha512", "sha512Hexa", "md5_double_salted", "md5_crypt", "bcrypt", "pbkdf2", "pbkdf2_sha256", "pbkdf2_sha512", "drupal", "symphony2", and "sap_abap".
             *
             * @note The HashedAlgorithm will not be accepted if a compoundHashedPassword is set. You will typically want to pass md5-crypt, bcrypt and drupal password hashes using their compoundHashedPassword representation. You should specify these algorithms only if your user management system stored the raw form of these password hashes (as byte arrays). Be wary of passing existing base64-encoded hashes to hashedPassword. These algorithms typically string-encode their hashes using non-standard (MIME) base64 encodings.
             *
             * @note For the sap_abap password algorithm, only the hashedPassword is required.
             */
            hashAlgorithm?:
                | 'md5'
                | 'sha1'
                | 'sha1_hashbytes'
                | 'sha256'
                | 'sha512'
                | 'sha512Hexa'
                | 'md5_double_salted'
                | 'md5_crypt'
                | 'bcrypt'
                | 'pbkdf2'
                | 'pbkdf2_sha256'
                | 'pbkdf2_sha512'
                | 'drupal'
                | 'symphony2'
                | 'sap_abap';
            /**
             * The BASE64 encoded value of the salt. If HashFormat is specified and it contains "$salt" -> HashSalt is a required parameter and should be clear text, not BASE64-encoded. The max number of salt bits is 1024.
             */
            salt?: string;
            /**
             * Specifies the number of iterations to perform the hashing. The default value is 1, i.e., one iteration of hashing. If HashAlgorithm is "bcrypt" then this value must be a power of two.
             */
            rounds?: number;
            /**
             * A template describing how to merge the clear-text password that is entered by the user with a salt. The string must contain "$password", which will be replaced with the clear-text password. It may also contain "$salt", which will be replaced with whatever value you passed to the HashSalt parameter (or you can pass the salt directly in the template and omit the HashSalt parameter. For example, Wikipedia hashes passwords that include a constant salt ("wikipedia") along with a per-user random salt, as per this template: "wikipedia$salt$password".
             */
            format?: string;
            /**
             * A template describing how to merge the clear-text password that is entered by the user with an optional salt, and what binary conversion to perform. This parameter is similar to HashFormat , but the difference is that HashFormat works on top of strings and then implicitly converts the result into a bytes array using UTF-8, and HashBinaryFormat , on the other hand, uses whatever encoding is explicitly specified.
             */
            binaryFormat?: string;
            /**
             * The URL to the remote custom hash algorithm service, used only if the password hash algorithm is custom.
             */
            URL?: string;
        };
    };
    secretQuestionAndAnswer?: {
        /**
         * The secret question that can be used for verification. This parameter is required if specified so in the site's requireSecurityQuestion Policy.
         */
        secretQuestion?: string;
        /**
         * The answer to the secret question. This parameter is required if specified so in the site's requireSecurityQuestion Policy.
         */
        secretAnswer?: string;
    };
    /**
     * The preferences object that contains all the existing consents for the user.
     */
    preferences?: PreferencesSchema;
    /**
     * The user's profile information. The object may include site's custom fields in addition to reserved field names (as defined in the Profile object). Gigya validates that the profile fields meet the requirements that are defined in the Schema.
     */
    profile?: GigyaProfile;
    /**
     * The UTC time when the isRegistered parameter was set to true in ISO 8601 format, e.g., "2019-07-16T19:20:30Z".
     */
    registered?: string;
    /**
     * A string representing the source (URL) of the registration.
     */
    regSource?: string;
    /**
     * The user's subscriptions information. The object includes the user's subscriptions. Gigya validates that the subscriptions fields meet the requirements that are defined in the Schema.
     */
    subscriptions?: SubscriptionsSchema;
    /**
     * The user's communication information. The object includes information on the user's communication topics.
     *
     * @TODO: Type this out
     */
    communications?: unknown;
    /**
     * The UTC time when the isVerified parameter was set to true in ISO 8601 format, e.g., "2019-07-16T19:20:30Z".
     */
    verified?: string;
    /**
     * The language set for consent, if one is provided.
     */
    lang?: string;
    /**
     * The user's providerSessions information.
     *
     * @TODO: Type this out
     */
    providerSessions?: unknown;
}>;

/**
 * https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41365a5370b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsImportFullAccountResponse = GigyaResponse<{
    /**
     * Contain the identities that caused a conflict. This field is only returned if there are conflicts, both when returning an error and when returning success.
     */
    identityConflicts?: Array<{
        provider: string;
        providerUID: string;
    }>;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41366d8270b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsImportLiteAccountRequest<
    DataSchema extends GigyaData,
    SubscriptionsSchema extends GigyaSubscriptions,
> = GigyaRequest<{
    /**
     * The email address associated with this lite registration.
     */
    email: string;
    /**
     * The Profile information associated with this lite registration.
     */
    profile: GigyaProfile;
    /**
     * The Subscriptions information associated with this lite registration. Note that a value can be written to the lastUpdatedSubscriptionState parameter when importing lite registrations. Otherwise, this parameter is read-only.
     */
    subscriptions: SubscriptionsSchema;
    /**
     * Custom data associated with this lite registration.
     */
    data?: DataSchema;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41366d8270b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsImportLiteAccountResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413693b870b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsImportProfilePhotoRequest = GigyaRequest<{
    /**
     * The URL of the photo to import.
     */
    url: string;
    /**
     * The unique ID of the user to which to associate the imported photo.
     *
     * @note You are required to pass only one of the parameters either UID or regToken.
     */
    UID?: string;
    /**
     * The regToken returned from accounts.initRegistration, accounts.register or accounts.login API calls when the registration process has not been finalized. Please note that the regToken you receive from Gigya is valid for only one hour.
     *
     * @note You are required to pass only one of the parameters either UID or regToken.
     */
    regToken?: string;
    /**
     * Indicates whether to publish this photo to the user's profile or treat it as a temporary photo. The default value is 'false', i.e. the photo is temporary. You can later publish a temporary photo using the accounts.publishProfilePhoto API method. If published, the photo is saved in the photoURL field of the user's Profile, in addition the photo is trimmed to the size defined in the site's Policies (64X64 by default) and saved in the thumbnailURL field.
     */
    publish?: boolean;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413693b870b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsImportProfilePhotoResponse = GigyaResponse<{}>;

/**
 *  @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4136e1f370b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsInitRegistrationRequest = GigyaRequest<{
    /**
     *  *Early Adopters parameter - supported only with Global Access*
     *
     *  The data center in which the registering user's data will be stored. Acceptable values:
     *   - us1
     *   - eu1
     *   - au1
     *   - cn1
     */
    dataCenter?: GigyaRegion;
    /**
     *  Defines whether the regToken that is returned can be used to create a full registered account or a lite account.
     *
     *  Set this to TRUE to create a lite account.
     */
    isLite?: boolean;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4136e1f370b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsInitRegistrationResponse = GigyaResponse<{
    /**
     * A ticket that is used to complete the registration process if registration fails. Valid for one hour.
     */
    regToken?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41370be670b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsIsAvailableLoginIDRequest = GigyaRequest<{
    /**
     * The login identifier to check if available. Can be either a username or an email address.
     */
    loginID: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41370be670b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsIsAvailableLoginIDResponse = GigyaResponse<{
    /**
     * Returns either 'true' or 'false', depending on whether the login ID is available or not.
     */
    isAvailable?: boolean;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/2a4dabf377414d0b92a29ffba5f0970a.html#parameters
 */
export type AccountsLinkAccountsRequest = GigyaRequest<{
    /**
     * The unique ID of a logged-in user. Use either this parameter or regToken.
     */
    UID?: string;
    /**
     * A token that is used to complete the registration process. Use either this parameter or UID. The regToken is returned from the accounts.login, accounts.socialLogin, or accounts.initRegistration API calls when the registration process has not been finalized.
     */
    regToken?: string;
    /**
     * The existing account's login identifier. Can be a simple username or an email address.
     */
    loginID: string;
    /**
     * The existing account's password.
     */
    password: string;
    /**
     * A comma-separated list of fields to include in the response. The possible values are: identities-active, identities-all, loginIDs, emails, profile, data, and id_token. The default is profile and data so if this parameter is not used, the response will return the Profile and data objects.
     */
    include?: string;
    /**
     * This parameter defines your client side environment, which in return determines the server response data fields. The default value of this parameter is "browser", which means that by default you receive cookie-related data in the response.
     *
     * If your client runs on a mobile:
     * If you are calling this method using a Mobile SDK since version 2.15.6, this parameter is automatically set to "mobile" (there is no need to set it manually). In any other case, you should set this parameter to be "mobile".
     * As a result of setting the parameter to "mobile" the server response data fields will include: sessionToken and sessionSecret (instead of cookie related data). In such case, you should send the sessionToken and sessionSecret to your mobile client. On your client side, call GSAPI.setSession (using the Mobile SDK) to save them in the app's storage.
     */
    targetEnv?: 'browser' | 'mobile';
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/2a4dabf377414d0b92a29ffba5f0970a.html#response-data
 */
export type AccountsLinkAccountsResponse<
    DataSchema extends GigyaData,
    PreferencesSchema extends GigyaPreferences,
    SubscriptionsSchema extends GigyaSubscriptions,
> = GigyaResponse<{
    /**
     * Can be the combination of cookieName (string) + cookieValue (string) or sessionToken (string) + sessionSecret (string), depending on targetEnv. If targetEnv is "browser", the response is cookieName and cookieValue, and if targetEnv is "mobile", the response is sessionToken and sessionSecret.
     */
    sessionInfo?: {
        cookieName?: string;
        cookieValue?: string;
        sessionToken?: string;
        sessionSecret?: string;
    };
    /**
     * A ticket that is used to complete a registration process. The regToken is returned when there is a pending registration error, which occurs when the user did not complete the registration process, or there are missing fields in the user profile data that were defined as "required" in the Schema.
     */
    regToken?: string;
    /**
     * One or more unverified emails, in case there is a pending verification error.
     */
    unverifiedEmails?: Array<string>;
    /**
     * The unique user ID. This user ID should be used for login verification. See User.UID for more information.
     */
    UID?: string;
    /**
     * The UTC time the account was created in ISO 8601 format, e.g., "1997-07-16T19:20:30Z".
     */
    created?: string;
    /**
     * The UTC time the account was created in Unix time format including milliseconds (i.e., the number of seconds since Jan. 1st 1970 * 1000).
     */
    createdTimestamp?: number;
    /**
     * Custom data. Any data that you want to store regarding the user that isn't part of the Profile object.
     */
    data?: DataSchema;
    /**
     * The email addresses belonging to the user.
     *
     * @note Emails must be specified explicitly in the include parameter in order to be included in the response.
     */
    emails?: {
        /**
         * An array of strings representing the user's verified email addresses
         */
        verified?: Array<string>;
        /**
         * An array of strings representing the user's unverified email addresses.
         */
        unverified?: Array<string>;
    };
    /**
     * When using CIAM for B2B, this is where the user's Organization Management data is stored. For a detailed Description of this field, see the Groups object documentation.
     *
     * @TODO: Type this out.
     */
    groups?: unknown;
    /**
     * An array of Identity Objects, each object represents a user's social identity. Each Identity Object contains imported data from a social network that the user has connected to.
     *
     * @note You must explicitly specify identities within the include parameter for them to be included in the response: identities-active , identities-all, or identities-global to return only active identities, all identities of a site, or all identities of a site group, respectively.
     * @note Be advised that if a user registers to your site using a Social Identity, then goes through the Forgot Password flow, a Site Login is added to their account, however, a Site Identity is not. A Site Identity can only be created when accounts.setAccountInfo is called on the user's account.
     */
    identities?: Array<GigyaIdentity>;
    /**
     * Indicates whether the account is active. The account is active once the user creates it even without finalizing it. The account can be deactivated, but it will still be registered if the registration process has been finalized. If isActive==false the user cannot log in, however any currently active sessions remain valid.
     */
    isActive?: boolean;
    /**
     * Indicates whether the user is registered. The user is registered once his registration has been finalized.
     */
    isRegistered?: boolean;
    /**
     * Indicates whether the account email is verified.
     */
    isVerified?: boolean;
    /**
     * The time of the last login of the user in ISO 8601 format, e.g., "1997-07-16T19:20:30Z".
     */
    lastLogin?: string;
    /**
     * The user's last login location, derived from IP address.
     */
    lastLoginLocation?: {
        /**
         * A string representing the two-character country code.
         */
        country?: string;
        /**
         * A string representing the state, where available.
         */
        state?: string;
        /**
         * A string representing the city name.
         */
        city?: string;
        coordinates?: {
            /**
             * A double representing the latitude of the center of the city.
             */
            lat?: number;
            /**
             * A double representing the longitude of the center of the city.
             */
            lon?: number;
        };
    };
    /**
     * The UTC time of the last login of the user in Unix time format including milliseconds (i.e., the number of seconds since Jan. 1st 1970 * 1000).
     */
    lastLoginTimestamp?: number;
    /**
     * The UTC time when user profile, preferences, or subscriptions data was last updated (either full or partial update) in ISO 8601 format, e.g., "2017-07-16T19:20:30Z".
     */
    lastUpdated?: string;
    /**
     * The UTC time when the last update of the object occurred (either full or partial update) in Unix time including milliseconds, based on when the 'lastUpdated', 'Report AccountsFirstLogin' or 'AccountsReturnedLogin' events are fired.
     */
    lastUpdatedTimestamp?: number;
    /**
     * The user's login identifiers.
     *
     * @note loginIDs must be specified explicitly in the include parameter in order to be included in the response.
     */
    loginIDs?: {
        /**
         * A string representing the username.
         */
        username?: string;
        /**
         * An array of strings representing email addresses
         */
        emails?: Array<string>;
        /**
         * An array of strings representing email addresses that were not validated
         */
        unverifiedEmails?: Array<string>;
    };
    /**
     * The name of the provider that the user used in order to login.
     */
    loginProvider?: string;
    /**
     * The UTC time when the oldest data of the object was refreshed in ISO 8601 format, e.g., "1997-07-16T19:20:30Z".
     */
    oldestDataUpdated?: string;
    /**
     * The UTC time when the oldest data of the object was refreshed in Unix time format including milliseconds (i.e., the number of seconds since Jan. 1st 1970 * 1000).
     */
    oldestDataUpdatedTimestamp?: number;
    /**
     * The user's Site account password details.
     */
    password?: {
        /**
         * The hashed password
         */
        hash?: string;
        hashSettings?: {
            /**
             * Represents the hash algorithm used to encrypt the password.
             */
            algorithm?: string;
            /**
             * Represents the number of iterations to perform the hashing.
             */
            rounds?: number;
            /**
             * Represents the BASE64 encoded value of the salt.
             */
            salt?: string;
            /**
             * Represents the template for merging clear-text passwords. This is only returned if the pwHashFormat parameter was set during account import and until the user's first login to Gigya (when the user's password is rehashed per the site's settings). See the User Import Guide for additional information.
             */
            format?: string;
        };
    };
    /**
     * The Phone Number login identifier, if the account uses Phone Number Login. The phone number formatting is e.164. Note that this field cannot be mapped using the UI Builder or the Web SDK.
     */
    phoneNumber?: string;
    /**
     * The user's preferences information as described in the Preferences Object. To have this data returned in the response it must be specifically requested using the include parameter.
     */
    preferences?: PreferencesSchema;
    /**
     * The user's profile information as described in the object. If the user has more than one type of identity (i.e. site and social), data from a 'site' source will override data from a social network and always take precedence. If no site data exists, the first social account to update a field's data will take precedence. The profile is returned in the response by default, but if the include parameter is used to specify other fields that should be provided in the response, the profile must also be specified explicitly in the include parameter.
     */
    profile?: GigyaProfile;
    /**
     * The current RBA Policy defined for the specified user.
     */
    rbaPolicy?: {
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
     * The UTC time when the isRegistered parameter was set to true in ISO 8601 format, e.g., "1997-07-16T19:20:30Z".
     */
    registered?: string;
    /**
     * The GMT time when the isRegistered parameter was set to true in Unix time format, including milliseconds.
     */
    registeredTimestamp?: number;
    /**
     * A string representing the source of the registration. Can be used to set varying destination pages in accounts.setPolicies.
     */
    regSource?: string;
    /**
     * A comma-separated list of the names of the providers to which the user is connected/logged in.
     */
    socialProviders?: string;
    /**
     * The user's subscription information.
     */
    subscriptions?: SubscriptionsSchema;
    /**
     * The UTC time when the isVerified parameter was set to true in ISO 8601 format, e.g., "1997-07-16T19:20:30Z".
     */
    verified?: string;
    /**
     * The GMT time when the isVerified parameter was set to true in Unix time format including milliseconds (i.e., the number of seconds since Jan. 1st 1970 * 1000).
     */
    verifiedTimestamp?: number;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/683844d3c4b54104b2201efffdf558e3.html#parameters
 */
export type AccountsLoginRequest = GigyaRequest<{
    /**
     * The aToken returned for this user from accounts.identifiers.createToken.
     *
     * Only pass an aToken or a loginId.
     */
    aToken?: string;
    /**
     * The identifier the user uses to log in to their account. Can be a simple username or an email address, decided based on the site's Login Identifier Policy.
     *
     * Only pass an aToken or a loginId.
     */
    loginID?: string;
    /**
     * The password the user uses to log in to their account.
     *
     * Empty passwords are invalid and are not accepted.
     */
    password: string;
    /**
     * The CAPTCHA provider configured for the site. Possible values are:
     * - reCaptchaV2
     * - invisible
     * - reCaptchaV3
     * - reCaptchaEnterpriseScore
     * - FunCaptcha
     */
    captchaType?: GigyaCaptchaType;
    /**
     * The CAPTCHA challenge. This parameter is required only if the CAPTCHA failed login threshold in the site's policy has been reached (security.captcha.failedLoginThreshold).
     */
    captchaToken?: string;
    /**
     * actionAttributes contain a JSON object comprised of a series of attribute keys (categories) with associated values. You can also use a generic "tags" key.
     *
     * No more than three values can be given, they can be with a single key or each have their own key.
     *
     * For more information, see Variants and Action Attributes. Action attributes are later used to filter GM Plugins by a certain attribute.
     *
     * Example: {"<attribute key1>": ["<attribute value1>", "<attribute value2>"], "<attribute key2>": "<attribute value3>" }
     *
     * @todo: Type this out, this is probably used somewhere else too
     */
    actionAttributes?: unknown;
    /**
     * Additional information regarding the client who made the login request, used for server-side Risk Based Authentication implementations. When passing the client context, any RBA rules apply and may be triggered.
     *
     * @todo: Type this out, this is probably used somewhere else too
     */
    clientContext?: unknown;
    /**
     * The data center in which the registering user's data will be stored. Acceptable values:
     * - us1
     * - eu1
     * - au1
     * - cn1
     */
    dataCenter?: GigyaRegion;
    /**
     * A comma-separated list of fields to include in the response. The possible values are:
     * - identities-active
     * - identities-all
     * - loginIDs
     * - emailsprofile
     * - data
     * - isLockedOut
     * - missing-required-fields
     * - preferences
     * - subscriptions
     * - groups
     * - id_token
     */
    include?: string;
    /**
     * The type of login being performed:
     * - standard - (default) the user is logging into an existing account.
     * - link - the user is linking a social network account to an existing account. The account being used to log in will become the primary account. When passing loginMode='link', x_regToken must also be passed to identify the account being linked. This is obtained from the initial login call response.
     * - reAuth - the user is proving ownership of an existing account by logging into it. The loginID will be ignored and the password verified.
     */
    loginMode?: 'standard' | 'link' | 'reAuth';
    /**
     * This parameter is required for completing the link accounts flow. Once the initial login has failed, call the login method with loginMode=link and the regToken returned from the initial call to complete the linking.
     */
    regToken?: string;
    /**
     * The time in seconds until the login session ends for the user. Set the parameter to 0 to end the session when the browser closes.
     *
     * @note This parameter overrides the value of the identical parameter in Global Conf (the global configuration object). If the parameter is not set for the method, the value from Global Conf is used. If the parameter is not set in Global Conf, the login session remains valid forever.
     */
    sessionExpiration?: number;
    /**
     * This parameter defines your client-side environment, which in return determines the server response data fields. The default value of this parameter is "browser", which means that by default you receive cookie-related data in the response.
     */
    targetEnv?: 'browser' | 'mobile';
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/683844d3c4b54104b2201efffdf558e3.html#response-data
 */
export type AccountsLoginResponse<
    DataSchema extends GigyaData,
    PreferencesSchema extends GigyaPreferences,
    SubscriptionsSchema extends GigyaSubscriptions,
> = GigyaResponse<{
    /**
     * Indicates whether the user logging in is new. The parameter is returned only when it is set to "true", or when the user is missing the 'connectionIdentity' field in the DB.
     */
    isNewUser?: boolean;
    /**
     * An object containing session information. The content of this object depends on the targetEnv parameter.
     *
     * By default, if the targetEnv parameter is not set (your client environment is web), the sessionInfo object contains the the following string fields: cookieName and cookieValue.
     *
     * Create a session cookie with the name and value specified by these fields.
     *
     * Alternatively, if the targetEnv parameter is set to "mobile" (your client runs on a mobile), the sessionInfo object contains the the following string fields: sessionToken and sessionSecret. Send these fields to your mobile client. On your client side, call GSAPI.setSession (using the Mobile SDK) to save them on the app's storage.
     */
    sessionInfo?: {
        cookieName?: string;
        cookieValue?: string;
        sessionToken?: string;
        sessionSecret?: string;
    };
    /**
     * A ticket that is used to complete a registration process. The regToken is returned when there is a pending registration error, which occurs when the user did not complete the registration process, or there are missing fields in the user profile data that were defined as "required" in the Schema. The regToken is valid for 1 hour.
     */
    regToken?: string;
    /**
     * 	One or more unverified emails, in case there is a pending verification error.
     */
    unverifiedEmails?: Array<string>;
    /**
     * The unique user ID. This user ID should be used for login verification.
     */
    UID?: string;
    /**
     * The UTC time the account was created in ISO 8601 format, e.g., "1997-07-16T19:20:30Z".
     */
    created?: string;
    /**
     * The UTC time the account was created in Unix time format including milliseconds (that is, the number of seconds since Jan. 1st 1970 * 1000).
     */
    createdTimestamp?: number;
    /**
     * Custom data. Any data that you want to store regarding the user that isn't part of the Profile object.
     */
    data?: DataSchema;
    /**
     * 	The email addresses belonging to the user. This includes the following fields:
     * - verified - an array of strings representing the user's verified email addresses
     * - unverified - an array of strings representing the user's unverified email addresses
     *
     * @note Note: emails must be specified explicitly in the include parameter in order to be included in the response.
     */
    emails?: {
        verified?: Array<string>;
        unverified?: Array<string>;
    };
    /**
     * 	When using CIAM for B2B, this is where the user's Organization Management data is stored. For a detailed Description of this field, see the Groups object documentation.
     *
     * @TODO: Type this out
     */
    groups?: unknown;
    /**
     * An array of Identity Objects, each object represents a user's social identity. Each Identity Object contains imported data from a social network that the user has connected to.
     *
     * @note You must explicitly specify identities within the include parameter for them to be included in the response: identities-active , identities-all, or identities-global to return only active identities, all identities of a site, or all identities of a site group, respectively.
     * @note Be advised that if a user registers to your site using a Social Identity, then goes through the Forgot Password flow, a Site Login is added to their account, however, a Site Identity is not. A Site Identity can only be created when accounts.setAccountInfo is called on the user's account.
     */
    identities?: Array<GigyaIdentity>;
    /**
     * Indicates whether the account is active. The account is active once the user creates it even without finalizing it. The account can be deactivated, but it will still be registered if the registration process has been finalized. If isActive==false the user cannot log in, however any currently active sessions remain valid.
     */
    isActive?: boolean;
    /**
     * Indicates whether the user is registered. The user is registered once their registration has been finalized.
     */
    isRegistered?: boolean;
    /**
     * Indicates whether the account email is verified.
     */
    isVerified?: boolean;
    /**
     * The time of the last login of the user in ISO 8601 format, e.g., "1997-07-16T19:20:30Z".
     */
    lastLogin?: string;
    /**
     * The user's last login location, derived from IP address.
     */
    lastLoginLocation?: {
        /**
         * A string representing the two-character country code.
         */
        country?: string;
        /**
         * A string representing the state, where available.
         */
        state?: string;
        /**
         * A string representing the city name.
         */
        city?: string;
        coordinates?: {
            /**
             * A double representing the latitude of the center of the city.
             */
            lat?: number;
            /**
             * A double representing the longitude of the center of the city.
             */
            lon?: number;
        };
    };
    /**
     * The UTC time of the last login of the user in Unix time format including milliseconds (that is, the number of seconds since Jan. 1st 1970 * 1000).
     */
    lastLoginTimestamp?: number;
    /**
     * The UTC time when user profile, preferences, or subscriptions data was last updated (either full or partial update) in ISO 8601 format, e.g., "2017-07-16T19:20:30Z".
     */
    lastUpdated?: string;
    /**
     * The UTC time when the last update of the object occurred (either full or partial update) in Unix time including milliseconds, based on when the 'lastUpdated', 'Report AccountsFirstLogin' or 'AccountsReturnedLogin' events are fired.
     */
    lastUpdatedTimestamp?: number;
    /**
     * The user's login identifiers.
     *
     * @note loginIDs must be specified explicitly in the include parameter in order to be included in the response.
     */
    loginIDs?: {
        /**
         * A string representing the username.
         */
        username?: string;
        /**
         * An array of strings representing email addresses
         */
        emails?: Array<string>;
        /**
         * An array of strings representing email addresses that were not validated
         */
        unverifiedEmails?: Array<string>;
    };
    /**
     * The name of the provider that the user used in order to log in.
     */
    loginProvider?: string;
    /**
     * The UTC time when the oldest data of the object was refreshed in ISO 8601 format, e.g., "1997-07-16T19:20:30Z".
     */
    oldestDataUpdated?: string;
    /**
     * The UTC time when the oldest data of the object was refreshed in Unix time format including milliseconds (that is, the number of seconds since Jan. 1st 1970 * 1000).
     */
    oldestDataUpdatedTimestamp?: number;
    /**
     * The user's Site account password details.
     */
    password?: {
        /**
         * The hashed password
         */
        hash?: string;
        hashSettings?: {
            /**
             * Represents the hash algorithm used to encrypt the password.
             */
            algorithm?: string;
            /**
             * Represents the number of iterations to perform the hashing.
             */
            rounds?: number;
            /**
             * Represents the BASE64 encoded value of the salt.
             */
            salt?: string;
            /**
             * Represents the template for merging clear-text passwords. This is only returned if the pwHashFormat parameter was set during account import and until the user's first login to Gigya (when the user's password is rehashed per the site's settings). See the User Import Guide for additional information.
             */
            format?: string;
        };
    };
    /**
     * The Phone Number login identifier, if the account uses Phone Number Login. The phone number formatting is e.164. Note that this field cannot be mapped using the UI Builder or the Web SDK.
     */
    phoneNumber?: string;
    /**
     * The user's preferences information as described in the Preferences Object. To have this data returned in the response, it must be specifically requested using the include parameter.
     */
    preferences?: PreferencesSchema;
    /**
     * The user's profile information as described in the object. If the user has more than one type of identity (i.e. site and social), data from a 'site' source will override data from a social network and always take precedence. If no site data exists, the first social account to update a field's data will take precedence. The profile* is returned in the response by default, but if the include parameter is used to specify other fields that should be provided in the response, the profile must also be specified explicitly in the include parameter.
     */
    profile?: GigyaProfile;
    /**
     * The current RBA Policy defined for the specified user.
     */
    rbaPolicy?: {
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
     * The UTC time when the isRegistered parameter was set to true in ISO 8601 format, e.g., "1997-07-16T19:20:30Z".
     */
    registered?: string;
    /**
     * The GMT time when the isRegistered parameter was set to true in Unix time format, including milliseconds.
     */
    registeredTimestamp?: number;
    /**
     * A string representing the source of the registration. Can be used to set varying destination pages in accounts.setPolicies.
     */
    regSource?: string;
    /**
     * A comma-separated list of the names of the providers to which the user is connected/logged in.
     */
    socialProviders?: string;
    /**
     * The user's subscription information.
     */
    subscriptions?: SubscriptionsSchema;
    /**
     * The UTC time when the isVerified parameter was set to true in ISO 8601 format, e.g., "1997-07-16T19:20:30Z".
     */
    verified?: string;
    /**
     * The GMT time when the isVerified parameter was set to true in Unix time format including milliseconds (that is, the number of seconds since Jan. 1st 1970 * 1000).
     */
    verifiedTimestamp?: number;
    /**
     * The JWT for the user. Only included in the response if `include: "id_token"` is passed in the request.
     *
     * @note This response field is not documentated.
     */
    id_token?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41376ba570b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsLogoutRequest = GigyaRequest<{
    /**
     * The unique ID of the user to logout of your site.
     */
    UID: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41376ba570b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsLogoutResponse = GigyaResponse<{
    /**
     * A comma separated list of providers that the user is connected to.
     */
    connectedProviders?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/bd09a6608f694a4d8461c8b0cb00a75b.html#parameters
 */
export type AccountsNotifyLoginRequest = GigyaRequest<{
    /**
     * A unique identifier used by your site to identify the user. You may use the user's account ID that you have designated for this user in your database, or alternatively the user's existing Gigya UID.
     *
     * @note The parameter accepts only ASCII characters (not Unicode) and up to 252 characters. If you use this parameter, providerSessions is Optional.
     * @note You are required to pass at least one of the parameters siteUID and/or providerSessions.
     */
    siteUID?: string;
    /**
     * This parameter gives the option to pass to SAP Customer Data Cloud, session information obtained directly from a social network, so it can be used for making API calls to the social network. The value of this parameter is a JSON object with reference to other objects. The field names of the main object are the names of the provider to set the session information for. The sub-objects contain the session information.
     *
     * @note You are required to pass at least one of the parameters siteUID and/or providerSessions.
     */
    providerSessions?: {
        [provider: string]: {
            /**
             * The session authentication token.
             */
            authToken?: string;
            /**
             * The session token secret.
             */
            tokenSecret?: string;
            /**
             * The absolute time when the session token expires in UNIX time format.
             */
            tokenExpiration?: number;
            /**
             * The session handle encoded in BASE64.
             */
            sessionHandle?: string;
            /**
             * The absolute time when the session expires in UNIX time format.
             */
            sessionHandleExpiration?: number;
        };
    };
    /**
     * This parameter defines the length of time that SAP Customer Data Cloud should keep the user's login session valid. It can be configured via WebSDK Configuration, via an individual API call, or left empty. If no value is specified, the default values are 0 or -2, depending on whether your site uses RaaS or not (see below); Global configuration overrides the default, and setting the value via individual API calls override the global configuration.
     *
     * The expected values are:
     * - 0 - Session expires when the browser closes. This is the default behavior when RaaS is enabled in your site. This behavior is dependent upon the browser's cookie handling procedures, i.e., Chrome keeps processes running in the background even after the browser is technically closed, this keeps the cookies valid until the background processes are terminated. This value is not supported when using our Mobile SDKs, and the session will behave as if set to -2.
     * - -1 - Session ends after a 60 second period; SAP Customer Data Cloud gives you the option of creating a cookie that is stored on the site visitor's client (browser), allowing the site to control the session length within this 60 second window, after which the session is terminated if no cookie is found. A typical use case is when the session could include sensitive data (such as credit card details), and the session should be short, with the option of restarting the duration when users perform actions. Useful if you always set the session expiration via individual API methods or with each request, such as when the site session is controlled by a CMS (e.g., Drupal). For additional information, see how to define a session expiration cookie.
     * - -2 - Session is valid forever. This is the default behavior when RaaS is not enabled in your site.
     * - Any custom integer - Defines the number of seconds the session is active, e.g., 3600 (one hour).
     */
    sessionExpiration?: number;
    /**
     * Default is false. If set to true, the server will not perform any validation on the user and will not return any pending state errors and will not check for any registration requirements for the end user. This parameter can only be used over HTTPS.
     */
    skipValidation?: boolean;
    /**
     * This parameter defines your client side environment, which in return determines the server response data fields. The default value of this parameter is "browser", which means that by default you receive cookie-related data in the response.
     *
     * If your client runs on a mobile:
     * If you are calling this method using a Mobile SDK since version 2.15.6, this parameter is automatically set to "mobile" (there is no need to set it manually). In any other case, you should set this parameter to be "mobile".
     * As a result of setting the parameter to "mobile" the server response data fields will include: sessionToken and sessionSecret (instead of cookie related data). In such case, you should send the sessionToken and sessionSecret to your mobile client. On your client side, call GSAPI.setSession (using the Mobile SDK) to save them in the app's storage.
     */
    targetEnv?: 'browser' | 'mobile';
    /**
     * Records the source of the registration. The default value is the URL of the current page but it can be any string value. regSource is stored in the account and can be used by verification emails to determine which page should be opened (see accounts.set Policies). Can also be set via the Global Conf object.
     */
    regSource?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/bd09a6608f694a4d8461c8b0cb00a75b.html#response-data
 */
export type AccountsNotifyLoginResponse = GigyaResponse<{
    /**
     * The unique user ID. This user ID should be used for login verification. See User.UID for more information.
     */
    UID?: string;
    /**
     * The UTC time the account was created in ISO 8601 format, e.g., "1997-07-16T19:20:30Z".
     */
    created?: string;
    /**
     * The UTC time the account was created in Unix time format including milliseconds (i.e., the number of seconds since Jan. 1st 1970 * 1000).
     */
    createdTimestamp?: number;
    /**
     * An array of Identity Objects, each object represents a user's social identity. Each Identity Object contains imported data from a social network that the user has connected to.
     *
     * @note Be advised that if a user registers to your site using a Social Identity, then goes through the Forgot Password flow, a Site Login is added to their account, however, a Site Identity is not. A Site Identity can only be created when accounts.setAccountInfo is called on the user's account.
     */
    identities?: Array<GigyaIdentity>;
    /**
     * An id_token of the current user.
     */
    id_token?: string;
    /**
     * Indicates whether the account is active. The account is active once the user creates it even without finalizing it. The account can be deactivated, but it will still be registered if the registration process has been finalized. If isActive==false the user cannot log in, however any currently active sessions remain valid.
     */
    isActive?: boolean;
    /**
     * Indicates whether the user is registered. The user is registered once his registration has been finalized.
     */
    isRegistered?: boolean;
    /**
     * Indicates whether the account email is verified.
     */
    isVerified?: boolean;
    /**
     * The time of the last login of the user in ISO 8601 format, e.g., "1997-07-16T19:20:30Z".
     */
    lastLogin?: string;
    /**
     * The UTC time of the last login of the user in Unix time format including milliseconds (i.e., the number of seconds since Jan. 1st 1970 * 1000).
     */
    lastLoginTimestamp?: number;
    /**
     * The UTC time when user profile, preferences, or subscriptions data was last updated (either full or partial update) in ISO 8601 format, e.g., "2017-07-16T19:20:30Z".
     */
    lastUpdated?: string;
    /**
     * The UTC time when the last update of the object occurred (either full or partial update) in Unix time including milliseconds, based on when the 'lastUpdated', 'Report AccountsFirstLogin' or 'AccountsReturnedLogin' events are fired.
     */
    lastUpdatedTimestamp?: number;
    /**
     * The name of the provider that the user used in order to login.
     */
    loginProvider?: string;
    /**
     * The UTC time when the oldest data of the object was refreshed in ISO 8601 format, e.g., "1997-07-16T19:20:30Z".
     */
    oldestDataUpdated?: string;
    /**
     * The UTC time when the oldest data of the object was refreshed in Unix time format including milliseconds (i.e., the number of seconds since Jan. 1st 1970 * 1000).
     */
    oldestDataUpdatedTimestamp?: number;
    /**
     * The Phone Number login identifier, if the account uses Phone Number Login. The phone number formatting is e.164. Note that this field cannot be mapped using the UI Builder or the Web SDK.
     */
    phoneNumber?: string;
    /**
     * The user's profile information as described in the object. If the user has more than one type of identity (i.e. site and social), data from a 'site' source will override data from a social network and always take precedence. If no site data exists, the first social account to update a field's data will take precedence. The profile is returned in the response by default.
     */
    profile?: GigyaProfile;
    /**
     * The UTC time when the isRegistered parameter was set to true in ISO 8601 format, e.g., "1997-07-16T19:20:30Z".
     */
    registered?: string;
    /**
     * A comma-separated list of the names of the providers to which the user is connected/logged in.
     */
    socialProviders?: string;
    /**
     * The UTC time when the isVerified parameter was set to true in ISO 8601 format, e.g., "1997-07-16T19:20:30Z".
     */
    verified?: string;
    /**
     * The GMT time when the isVerified parameter was set to true in Unix time format including milliseconds (i.e., the number of seconds since Jan. 1st 1970 * 1000).
     */
    verifiedTimestamp?: number;
    /**
     * Indicates whether or not this is a new user. This value will always return false in a TFA flow.
     */
    newUser?: boolean;
    /**
     * A ticket that is used to complete a registration process. A new regToken is returned when there is a pending registration error, which occurs when the user did not complete the registration process, or there are missing fields in the user profile data that were defined as "required" in the Schema.
     */
    regToken?: string;
    /**
     * An object containing session information. The content of this object depends on the targetEnv parameter (see above).
     *
     * By default, if the targetEnv parameter is not set (your client environment is web), the sessionInfo object contains the the following string fields: cookieName and cookieValue.
     *
     * Please create a session cookie with the name and value specified by these fields.
     *
     * Alternatively, if the targetEnv parameter is set to "mobile" (your client runs on a mobile), the sessionInfo object contains the the following string fields: sessionToken and sessionSecret. Please send these fields to your mobile client. On your client side, call GSAPI.setSession (using the Mobile SDK) to save them on the app's storage.
     */
    sessionInfo?: {
        cookieName?: string;
        cookieValue?: string;
        sessionToken?: string;
        sessionSecret?: string;
    };
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413795be70b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsNotifySocialLoginRequest = GigyaRequest<{
    /**
     * This parameter passes to Gigya, session information obtained directly from a social network, for validating the user and their session, and calling the providers. The providerSessions object is made of sub-objects, each holding session information of a different social provider.
     */
    providerSessions: {
        [provider: string]: {
            /**
             * The session authentication token.
             */
            authToken?: string;
            /**
             * The session token secret.
             */
            tokenSecret?: string;
            /**
             * The absolute time when the session token expires in UNIX time format.
             */
            tokenExpiration?: number;
            /**
             * The session handle encoded in BASE64.
             */
            sessionHandle?: string;
            /**
             * The absolute time when the session expires in UNIX time format.
             */
            sessionHandleExpiration?: number;
        };
    };
    /**
     * The data center in which the registering user's data will be stored. Acceptable values:
     * - us1
     * - eu1
     * - au1
     * - cn1
     */
    dataCenter?: GigyaRegion;
    /**
     * The login mode. Available values:
     * - standard - (default) Performs a new login with the provided provider session. This mode is not to be used when there is an existing session for the user.
     * - connect - This should be set when using this endpoint to add a connection to an existing user (see socialize.addConnection. This mode can only be used when there is an existing session for the user.
     * - link - Link accounts flow. In this mode a regToken for linking should be provided.
     */
    loginMode?: 'standard' | 'connect' | 'link';
    /**
     * The phone number login identifier, if the account uses Phone Number Login. The supported phone number formatting is E.164. This parameter can only be passed if the loginMode is 'link'.
     */
    phoneNumber?: string;
    /**
     * This parameter defines the length of time that Gigya should keep the user's login session valid. It can be configured via WebSDK Configuration, via an individual API call, or left empty. If no value is specified, the default values are 0 or -2, depending on whether your site uses RaaS or not (see below); Global configuration overrides the default, and setting the value via individual API calls override the global configuration.
     *
     * The expected values are:
     * - 0 - Session expires when the browser closes. This is the default behavior when RaaS is enabled in your site. This behavior is dependent upon the browser's cookie handling procedures, i.e., Chrome keeps processes running in the background even after the browser is technically closed, this keeps the cookies valid until the background processes are terminated. This value is not supported when using our Mobile SDKs, and the session will behave as if set to -2.
     * - -1 - Session ends after a 60 second period; Gigya gives you the option of creating a cookie that is stored on the site visitor's client (browser), allowing the site to control the session length within this 60 second window, after which the session is terminated if no cookie is found. A typical use case is when the session could include sensitive data (such as credit card details), and the session should be short, with the option of restarting the duration when users perform actions. Useful if you always set the session expiration via individual API methods or with each request, such as when the site session is controlled by a CMS (e.g., Drupal). For additional information, see how to define a session expiration cookie.
     * - -2 - Session is valid forever. This is the default behavior when RaaS is not enabled in your site.
     * - Any custom integer - Defines the number of seconds the session is active, e.g., 3600 (one hour).
     */
    sessionExpiration?: number;
    /**
     * This parameter defines your client side environment, which in return determines the server response data fields. The default value of this parameter is "browser", which means that by default you receive cookie-related data in the response.
     *
     * If your client runs on a mobile:
     * If you are calling this method using a Mobile SDK since version 2.15.6, this parameter is automatically set to "mobile" (there is no need to set it manually). In any other case, you should set this parameter to be "mobile".
     * As a result of setting the parameter to "mobile" the server response data fields will include: sessionToken and sessionSecret (instead of cookie related data). In such case, you should send the sessionToken and sessionSecret to your mobile client. On your client side, call GSAPI.setSession (using the Mobile SDK) to save them in the app's storage.
     */
    targetEnv?: 'browser' | 'mobile';
    /**
     * The source of the registration. The default value is the URL of the current page but it can be any string value. regSource is stored in the account and can be used by verification emails to determine which page should the user be redirected to (see accounts.set Policies).
     */
    regSource?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413795be70b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsNotifySocialLoginResponse = GigyaResponse<{
    /**
     * A token returned to be used internally by the WebSDK which is placed into a browser cookie and then used in all subsequent requests.
     */
    login_token?: string;
    /**
     * This is true if loginMode was set to 'connect', otherwise, false.
     */
    isAddConnection?: boolean;
    /**
     * If this call was generated by a SAP Customer Data Cloud default Console application.
     *
     * @note Default apps should never be used in a production environment and are only for testing.
     */
    isDefaultApp?: boolean;
    /**
     * If the user is a new registered user, as opposed to an existing account. Note that this will always be false if TFA is enabled, even for new users.
     */
    isNewUser?: boolean;
    /**
     * Tells if the request succeeded or not.
     */
    status?: string;
    /**
     * The id_token necessary for validating the response in a global site group.
     */
    id_token?: string;
    /**
     * An object containg session information. The content of this object depends on the targetEnv parameter (see above).
     */
    sessionInfo?: {
        cookieName?: string;
        cookieValue?: string;
        sessionToken?: string;
        sessionSecret?: string;
    };
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/8f313cc471f549d49fcc8ab3a430aea9.html#parameters
 */
export type AccountsOTPDeleteRequest = GigyaRequest<{
    /**
     * The UID of the user whose TFA you want to reset.
     */
    UID: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/8f313cc471f549d49fcc8ab3a430aea9.html#response-data
 */
export type AccountsOTPDeleteResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4137bbe870b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsOTPLoginRequest = GigyaRequest<{
    /**
     * Secure token obtained from the sendCode API.
     */
    vToken: string;
    /**
     * The 6-digit code received in the SMS.
     *
     * The length of the code may change, so we recommend that your implementation will not expect a fixed number of digits.
     */
    code: string;
    /**
     * A comma separated list of fields to include in the response.
     */
    include?: string;
    /**
     * Records the source of the registration. The default value is the URL of the current page but it can be any string value. regSource is stored in the account and can be used by verification emails to determine which page should be opened (see accounts.set Policies). Can also be set via the Global Conf object.
     *
     * A user's regSource can only be updated on the initial registration of the user. It can not be updated or overwritten, even if empty.
     */
    regSource?: string;
    /**
     * This parameter defines the length of time that Gigya should keep the user's login session valid. It can be configured via WebSDK Configuration, via an individual API call, or left empty. If no value is specified, the default values are 0 or -2, depending on whether your site uses RaaS or not (see below); Global configuration overrides the default, and setting the value via individual API calls override the global configuration.
     *
     * The expected values are:
     * - 0 - Session expires when the browser closes. This is the default behavior when RaaS is enabled in your site. This behavior is dependent upon the browser's cookie handling procedures, i.e., Chrome keeps processes running in the background even after the browser is technically closed, this keeps the cookies valid until the background processes are terminated. This value is not supported when using our Mobile SDKs, and the session will behave as if set to -2.
     * - -1 - Session ends after a 60 second period; Gigya gives you the option of creating a cookie that is stored on the site visitor's client (browser), allowing the site to control the session length within this 60 second window, after which the session is terminated if no cookie is found. A typical use case is when the session could include sensitive data (such as credit card details), and the session should be short, with the option of restarting the duration when users perform actions. Useful if you always set the session expiration via individual API methods or with each request, such as when the site session is controlled by a CMS (e.g., Drupal). For additional information, see how to define a session expiration cookie.
     * - -2 - Session is valid forever. This is the default behavior when RaaS is not enabled in your site.
     * - Any custom integer - Defines the number of seconds the session is active, e.g., 3600 (one hour).
     */
    sessionExpiration?: number;
    /**
     * Defines the client-side environment. Options are:
     * - mobile
     * - browser
     */
    targetEnv?: 'mobile' | 'browser';
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4137bbe870b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsOTPLoginResponse = GigyaResponse<{
    /**
     * The UID of the user's account.
     */
    UID?: string;
    /**
     * This returns true if the account created is new.
     */
    isNewUser?: boolean;
    /**
     * An object containing session information.
     */
    sessionInfo?: {
        cookieName?: string;
        cookieValue?: string;
        sessionToken?: string;
        sessionSecret?: string;
    };
    /**
     * A token that is used to complete the registration process.
     */
    regToken?: string;
    /**
     * @TODO The documentation is all weird for this one, its just a regular login response though. Fix this.
     */
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4137e1be70b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsOTPSendCodeRequest = GigyaRequest<{
    /**
     * The code of the language in which to send the SMS or email. For supported codes, see Advanced Customizations and Localization.
     */
    lang: string;
    /**
     * The phone number to which the verification code is sent. This parameter is required for phone number login or update flows.
     */
    phoneNumber?: string;
    /**
     * The email to which the verification code is sent. This parameter is required for email code verification flows.
     *
     * @note This cannot be used for one time password flows.
     */
    email?: string;
    /**
     * When in a Global site group, you must pass the UID of the user being updated. Only send UID when using REST and there is no current user session. This property is required only when doing a server-side global access implementation so that additional requests, i.e., accounts.otp.update, can resolve the user's residency datacenter from the vToken.
     */
    UID?: string;
    /**
     * The CAPTCHA provider configured for the site. Possible values are:
     * - reCaptchaV2
     * - invisible
     * - reCaptchaV3
     * - reCaptchaEnterpriseScore
     * - FunCaptcha
     */
    captchaType?: GigyaCaptchaType;
    /**
     * The token returned from the CAPTCHA provider.
     */
    captchaToken?: string;
    /**
     * Whether or not to send the code for the phone update flow. This may be set to "false" if you choose to send an SMS via your application, instead of using the SAP Customer Data Cloud capability.
     */
    sendCode?: boolean;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4137e1be70b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsOTPSendCodeResponse = GigyaResponse<{
    /**
     * A secured token that holds the phone data and expires after 10 minutes. It contains the following fields:
     * - apiKey - The API key of the site.
     * - phoneNumber - The phone number associated with the user's account to send the SMS code.
     * - code - The 6 digit code.
     * - gmid - Only necessary if the method call was originated from the client-side.
     */
    vToken?: string;
    /**
     * The code used for logging the user in. This may be returned only when making the call with admin credentials.
     */
    code?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413807a270b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsOTPUpdateRequest = GigyaRequest<{
    /**
     * Secure token obtained from the sendCode API.
     */
    vToken: string;
    /**
     * The 6-digit code received in the SMS.
     *
     * The length of the code may change, so we recommend that your implementation will not expect a fixed number of digits.
     */
    code: string;
    /**
     * The unique identifier of the user whose login information is being updated.
     *
     * You are required to pass only one of the parameters either UID or regToken.
     */
    UID?: string;
    /**
     * The regToken returned from accounts.initRegistration, accounts.register or accounts.login API calls when the registration process has not been finalized.
     *
     * You are required to pass only one of the parameters either UID or regToken.
     */
    regToken?: string;
}>;

/**
 * https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413807a270b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsOTPUpdateResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/8a7df13c9c00464a88b6e653472261ea.html#parameters
 */
export type AccountsPoliciesEmailTemplatesGetConfigRequest = GigyaRequest<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/8a7df13c9c00464a88b6e653472261ea.html#response-data
 */
export type AccountsPoliciesEmailTemplatesGetConfigResponse = GigyaResponse<{
    /**
     * @TODO: Type this out.
     */
    codeVerification?: unknown;
    /**
     * @TODO: Type this out.
     */
    emailNotifications?: unknown;
    /**
     * @TODO: Type this out.
     */
    emailVerification?: unknown;
    /**
     * @TODO: Type this out.
     */
    magicLink?: unknown;
    /**
     * @TODO: Type this out.
     */
    preferencesCenter?: unknown;
    /**
     * @TODO: Type this out.
     */
    doubleOptIn?: unknown;
    /**
     * @TODO: Type this out.
     */
    passwordReset?: unknown;
    /**
     * @TODO: Type this out.
     */
    twoFactorAuth?: unknown;
    /**
     * @TODO: Type this out.
     */
    impossibleTraveler?: unknown;
    /**
     * @TODO: Type this out.
     */
    unknownLocationNotification?: unknown;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/277d048b59634c8ca33de401290e58ca.html#parameters
 */
export type AccountsPoliciesEmailTemplatesSetConfigRequest = GigyaRequest<{
    /**
     * @TODO: Type this out.
     */
    codeVerification?: unknown;
    /**
     * @TODO: Type this out.
     */
    emailNotifications?: unknown;
    /**
     * @TODO: Type this out.
     */
    emailVerification?: unknown;
    /**
     * @TODO: Type this out.
     */
    magicLink?: unknown;
    /**
     * @TODO: Type this out.
     */
    preferencesCenter?: unknown;
    /**
     * @TODO: Type this out.
     */
    doubleOptIn?: unknown;
    /**
     * @TODO: Type this out.
     */
    passwordReset?: unknown;
    /**
     * @TODO: Type this out.
     */
    twoFactorAuth?: unknown;
    /**
     * @TODO: Type this out.
     */
    impossibleTraveler?: unknown;
    /**
     * @TODO: Type this out.
     */
    unknownLocationNotification?: unknown;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/277d048b59634c8ca33de401290e58ca.html#response-data
 */
export type AccountsPoliciesEmailTemplatesSetConfigResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41381aaa70b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsProgressionGetPolicyRequest = GigyaRequest<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41381aaa70b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsProgressionGetPolicyResponse = GigyaResponse<{
    /**
     * The policy for handling the data of accounts that progress from lite to full. Possible values:
     * - none - no account progression policy was defined for this site.
     * - auto - all the data that is saved to the lite account, is merged to the full account, including subscriptions, consent, profile and custom data. If there is different data for the same fields, the full account data is saved, meaning lite data is saved only when no other data exists for that field. The accountTypeswill be both lite and full.
     *
     * In both cases, the user will no longer be able to access their data via the Lite Preferences Center.
     */
    policy?: 'none' | 'auto';
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41382da770b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsProgressionSetPolicyRequest = GigyaRequest<{
    /**
     * The policy for handling the data of accounts that progress from lite to full. Acceptable values:
     * - auto - All the data that is saved to the lite account, is merged to the full account, including subscriptions, consent, profile and custom data. If there is different data for the same fields, the full account data is saved, meaning lite data is saved only when no other data exists for that field. The accountTypes will be both lite and full.
     */
    policy: 'auto';
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41382da770b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsProgressionSetPolicyResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413840aa70b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsPublishProfilePhotoRequest = GigyaRequest<{
    /**
     * The unique ID of the user account to which to publish the photo.
     *
     * @note You are required to pass only one of the parameters either UID or regToken.
     */
    UID?: string;
    /**
     * The regToken returned from accounts.initRegistration, accounts.register or accounts.login API calls when the registration process has not been finalized. Please note that the regToken you receive from Gigya is valid for only one hour.
     *
     * @note You are required to pass only one of the parameters either UID or regToken.
     */
    regToken?: string;
    /**
     * A comma-separated pair of numbers "width,height", representing the trimming size in pixels for the thumbnail photo. If not specified, then the trimming size is taken from the profilePhoto policy (see accounts.setPolicies).
     */
    thumbnail?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413840aa70b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsPublishProfilePhotoResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413853eb70b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsRBAGetPolicyRequest = GigyaRequest<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413853eb70b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsRBAGetPolicyResponse = GigyaResponse<{
    /**
     * The complete account's RBA Policy object.
     *
     * @TODO: Type this out.
     */
    policy?: unknown;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413866d370b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsRBALockRequest = GigyaRequest<{
    /**
     * The loginID of the user whose account is to be locked (email or username; dependent upon schema). You must pass either a loginID, UID or ip.
     */
    loginID?: string;
    /**
     * The UID of the user whose account is to be locked. You must pass either a loginID , UID or ip.
     */
    UID?: string;
    /**
     * The IP address to lock. You must pass either a loginID, UID or ip.
     */
    ip?: string;
    /**
     * The duration for which the user account is locked, in seconds. After the duration has passed, the account is automatically unlocked. A '0' means the account is locked indefinitely, and may be released as explained above. Note that a '0' may not be applied to an ip lock.
     */
    duration?: number;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413866d370b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsRBALockResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/ee51584c371945a799d4f7d9cbeb77e1.html#parameters
 */
export type AccountsRBASDKConfigurationGetRequest = GigyaRequest<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/ee51584c371945a799d4f7d9cbeb77e1.html#response-data
 */
export type AccountsRBASDKConfigurationGetResponse = GigyaResponse<{
    /**
     * The name and supported versions for the SDK types that exist on the site.
     */
    result?: Array<{
        /**
         * The SDK Type
         */
        type: string;
        /**
         * The name of the SDK type that is displayed to the admin in the console.
         */
        displayName: string;
        /**
         * Array of all versions of this SDK type from which traffic to the site is allowed.
         *
         * If no versions are displayed, this means that traffic is either allowed from all versions of this SDK type or blocked for SDK type. To know whether traffic is allowed or blocked, check out the SDK Management screen, seeSDK Management.
         */
        supportedVersions?: string[];
    }>;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413879cb70b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsRBASetPolicyRequest = GigyaRequest<{
    /**
     * The complete rba policy object.
     *
     * @TODO: Type this out.
     */
    policy: unknown;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413879cb70b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsRBASetPolicyResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41388cd270b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsRBAUnlockRequest = GigyaRequest<{
    /**
     * The loginID of the user whose account is to be unlocked (email or username; dependent upon schema). You must pass either a loginID, UID or ip.
     */
    loginID?: string;
    /**
     * The UID of the user whose account is to be unlocked. You must pass either a loginID, UID or ip.
     */
    UID?: string;
    /**
     * The IP address to unlock. You must pass either a loginID, UID or ip.
     */
    ip?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41388cd270b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsRBAUnlockResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/1fe26c820cd145cd8c927a497c33d935.html#parameters
 */
export type AccountsRegisterRequest<
    DataSchema extends GigyaData,
    PreferencesSchema extends GigyaPreferences,
    SubscriptionsSchema extends GigyaSubscriptions,
> = GigyaRequest<{
    /**
     * A string that the users enter to identify their account.
     */
    username?: string;
    /**
     * The user's email address.
     */
    email?: string;
    /**
     * 	The user's password. SAP Customer Data Cloud validates that the password meets the complexity requirements defined in the site's Password Strength policy.
     */
    password?: string;
    /**
     * Additional information regarding the client who made the login request, used for server-side Risk Based Authentication implementations. When passing the client context, any RBA rules apply and may be triggered.
     *
     * @todo: type this out
     */
    clientContext?: unknown;
    /**
     * The regToken that was returned by accounts.initRegistration, or from accounts.getLiteToken in a lite account progression flow. This parameter is not mandatory when calling this method server-side.
     *
     * The regToken expires one hour after it is produced.
     */
    regToken?: string;
    /**
     * The user's profile information. The object may include site's custom fields in addition to reserved field names (as defined in the Profile object). Fields that are defined as required in the Schema , are required by this method. If not passed, the method will return a "pending registration" error and a new regToken.
     */
    profile?: GigyaProfile;
    /**
     * The CAPTCHA provider configured for the site. Possible values are:
     * - reCaptchaV2
     * - invisible
     * - reCaptchaV3
     * - reCaptchaEnterpriseScore
     * - FunCaptcha
     */
    captchaProvider?: GigyaCaptchaType;
    /**
     * The CAPTCHA challenge. This parameter is required if specified so in the site's CAPTCHA policy.
     */
    captchaToken?: string;
    /**
     * Custom data. The purpose of this object is storing any custom data associated to the user, but which is not part of the Profile object. SAP Customer Data Cloud validates that the data fields meet the requirements that are defined in the Schema.
     */
    data?: DataSchema;
    /**
     * If set to 'true', this API call will also finalize the registration process for the user, and the user will appear as a 'New registered user' in the user reports.
     *
     * If there are missing fields, the registration will remain pending. The default value is 'false'.
     */
    finalizeRegistration?: boolean;
    /**
     * A Preferences Object containing consent data for this user.
     */
    preferences?: PreferencesSchema;
    /**
     * A Communications Object containing the user's subscription data to communication topics.
     *
     * @todo type this out
     */
    communications?: unknown;
    /**
     * The secret question that can be used for verification. This parameter is required if specified so in the site's requireSecurityQuestion Policy.
     */
    secretQuestion?: string;
    /**
     * The answer to the secret question. This parameter is required if specified so in the site's requireSecurityQuestion Policy.
     */
    secretAnswer?: string;
    /**
     * A Subscriptions Object containing subscription data for this user.
     */
    subscriptions?: SubscriptionsSchema;
    /**
     * The language used in the current registration process, e.g. for communicating error messages and validation emails (see also Email Templates). If an email template is defined for this language, SAP Customer Data Cloud will send emails in this language (e.g. email verification).
     *
     * @note If a profile.locale is not passed, it will be inferred from the lang passed in accounts.register.
     */
    lang?: string;
    /**
     * This parameter defines your client-side environment, which in return determines the server response data fields. The default value of this parameter is "browser", which means that by default you receive cookie-related data in the response.
     */
    targetEnv?: 'browser' | 'mobile';
    /**
     * A comma-separated list of fields to include in the response. The possible values are: identities-active, identities-all, loginIDs, emails, profile, data, password, missing-required-fields, lastLoginLocation and irank. The default is profile, so if this parameter is not used, the response will return only the Profile object.
     */
    include?: string;
    /**
     * This parameter defines the time in seconds that SAP Customer Data Cloud should keep the login session valid for the user. To end the session when the browser closes, assign the value '0'. If this parameter is not specified, the session is valid forever. See Managing Session Expiration for additional information.
     */
    sessionExpiration?: number;
    /**
     * You may specify the UID to use with this account; if not specified, it is auto-generated.
     *
     * @note The parameter accepts up to 252 ASCII characters (unicode is not supported).
     */
    siteUID?: string;
    /**
     * Records the source of the registration. The default value is the URL of the current page but it can be any string value. regSource is stored in the account and can be used by verification emails to determine which page should be opened.
     */
    regSource?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/1fe26c820cd145cd8c927a497c33d935.html#response-data
 */
export type AccountsRegisterResponse<
    DataSchema extends GigyaData,
    PreferencesSchema extends GigyaPreferences,
    SubscriptionsSchema extends GigyaSubscriptions,
> = GigyaResponse<{
    /**
     * An object containing session information. The content of this object depends on the targetEnv parameter (see above).
     *
     * By default, if the targetEnv parameter is not set (your client environment is web), the sessionInfo object contains the the following string fields: cookieName and cookieValue.
     *
     * Create a session cookie with the name and value specified by these fields.
     *
     * Alternatively, if the targetEnv parameter is set to "mobile" (your client runs on a mobile), the sessionInfo object contains the following string fields: sessionToken and sessionSecret. Send these fields to your mobile client. On your client side, call GSAPI.setSession (using the Mobile SDK) to save them on the app's storage.
     */
    sessionInfo?: {
        cookieName?: string;
        cookieValue?: string;
        sessionToken?: string;
        sessionSecret?: string;
    };
    /**
     * A ticket that is used to complete a registration process. A new regToken is returned when there is a pending registration error, which occurs when the user did not complete the registration process, or there are missing fields in the user profile data that were defined as "required" in the Schema. The regToken is valid for one hour from the moment it is returned.
     */
    regToken?: string;
    /**
     * One or more unverified emails, in case there is a pending verification error.
     */
    unverifiedEmails?: Array<string>;
    /**
     * In case of a data validation errors (errorCode 400006), you will receive this field as an array of error objects. Each object represents a validation error regarding one of the following required fields: username, password, secretQuestion, secretAnswer, email.
     */
    validationErrors?: GigyaValidationError[];
    /**
     * Indicates whether a new user was created in this call.
     */
    newUser?: boolean;
    /**
     * The unique user ID. This user ID should be used for login verification. See User.UID for more information.
     */
    UID?: string;
    /**
     * The UTC time the account was created in ISO 8601 format, e.g., "1997-07-16T19:20:30Z".
     */
    created?: string;
    /**
     * The UTC time the account was created in Unix time format including milliseconds (i.e., the number of seconds since Jan. first 1970 * 1000).
     */
    createdTimestamp?: number;
    /**
     * Custom data. Any data that you want to store regarding the user that isn't part of the Profile object.
     */
    data?: DataSchema;
    /**
     * The email addresses belonging to the user. This includes the following fields:
     * - verified - an array of strings representing the user's verified email addresses.
     * - unverified - an array of strings representing the user's unverified email addresses.
     *
     * @note Emails must be specified explicitly in the include parameter in order to be included in the response.
     */
    emails?: {
        verified?: Array<string>;
        unverified?: Array<string>;
    };
    /**
     * When using CIAM for B2B, this is where the user's Organization Management data is stored. For a detailed Description of this field, see the Groups object documentation.
     *
     * @todo: type this out
     */
    groups?: unknown;
    /**
     * An array of Identity Objects, each object represents a user's social identity. Each Identity Object contains imported data from a social network that the user has connected to.
     *
     * @note: You must explicitly specify identities within the include parameter for them to be included in the response: identities-active , identities-all, or identities-global to return only active identities, all identities of a site, or all identities of a site group, respectively.
     * @note: Be advised that if a user registers to your site using a Social Identity, then goes through the Forgot Password flow, a Site Login is added to their account, however, a Site Identity is not. A Site Identity can only be created when accounts.setAccountInfo is called on the user's account.
     */
    identities?: Array<GigyaIdentity>;
    /**
     * Indicates whether the account is active. The account is active once the user creates it even without finalizing it. The account can be deactivated, but it will still be registered if the registration process has been finalized. If isActive==false the user cannot log in, however any currently active sessions remain valid.
     */
    isActive?: boolean;
    /**
     * Indicates whether the user is registered. The users are registered once their registration has been finalized.
     */
    isRegistered?: boolean;
    /**
     * Indicates whether the account email is verified.
     */
    isVerified?: boolean;
    /**
     * The time of the last login of the user in ISO 8601 format, e.g., "1997-07-16T19:20:30Z".
     */
    lastLogin?: string;
    /**
     * The user's last login location, derived from IP address. This includes the following fields:
     * - country - a string representing the two-character country code.
     * - state - a string representing the state, where available.
     * - city - a string representing the city name.
     * - coordinates - an object containing:
     *   - lat - a number representing the latitude.
     *   - lon - a number representing the longitude.
     */
    lastLoginLocation?: {
        country?: string;
        state?: string;
        city?: string;
        coordinates?: {
            lat?: number;
            lon?: number;
        };
    };
    /**
     * The UTC time of the last login of the user in Unix time format including milliseconds (i.e., the number of seconds since Jan. 1st 1970 * 1000).
     */
    lastLoginTimestamp?: number;
    /**
     * The UTC time when user profile, preferences, or subscriptions data was last updated (either full or partial update) in ISO 8601 format, e.g., "2017-07-16T19:20:30Z".
     */
    lastUpdated?: string;
    /**
     * The UTC time when the last update of the object occurred (either full or partial update) in Unix time including milliseconds, based on when the 'lastUpdated', 'Report AccountsFirstLogin' or 'AccountsReturnedLogin' events are fired.
     */
    lastUpdatedTimestamp?: number;
    /**
     * The user's login identifiers. This includes the following fields:
     * - username - a string representing the user's username.
     * - emails - an array of strings representing the user's email addresses.
     * - unverifiedEmails - an array of strings representing email addresses that were not validated.
     *
     * @note: LoginIDs must be specified explicitly in the include parameter in order to be included in the response.
     */
    loginIDs?: {
        username?: string;
        emails?: Array<string>;
        unverifiedEmails?: Array<string>;
    };
    /**
     * The name of the provider that the user used in order to log in.
     */
    loginProvider?: string;
    /**
     * The UTC time when the oldest data of the object was refreshed in ISO 8601 format, e.g., "1997-07-16T19:20:30Z".
     */
    oldestDataUpdated?: string;
    /**
     * The UTC time when the oldest data of the object was refreshed in Unix time format including milliseconds (i.e., the number of seconds since Jan. 1st 1970 * 1000).
     */
    oldestDataUpdatedTimestamp?: number;
    /**
     * The user's Site account password details. Includes the following:
     * - hash - the hashed password
     * - hashSettings - object includes:
     *   - algorithm - Represents the hash algorithm used to encrypt the password.
     *   - rounds - Represents the number of iterations to perform the hashing.
     *   - salt - Represents the BASE64 encoded value of the salt.
     *   - format - Represents the template for merging clear-text passwords. This is only returned if the pwHashFormat parameter was set during account import and until the user's first login to SAP Customer Data Cloud (when the user's password is rehashed per the site's settings). See the RaaS Import Guide for additional information.
     */
    password?: {
        hash?: string;
        hashSettings?: {
            algorithm?: string;
            rounds?: number;
            salt?: string;
            format?: string;
        };
    };
    /**
     * The Phone Number login identifier, if the account uses Phone Number Login. The phone number formatting is e.164.
     */
    phoneNumber?: string;
    /**
     * The user's preferences information as described in the Preferences Object. To have this data returned in the response it must be specifically requested using the include parameter.
     */
    preferences?: PreferencesSchema;
    /**
     * The user's profile information as described in the object. If the user has more than one type of identity (i.e. site and social), data from a 'site' source will override data from a social network and always take precedence. If no site data exists, the first social account to update a field's data will take precedence. The profile is returned in the response by default, but if the include parameter is used to specify other fields that should be provided in the response, the profile must also be specified explicitly in the include parameter.
     */
    profile?: GigyaProfile;
    /**
     * The current RBA Policy defined for the specified user. Properties include:
     * - riskPolicy - Determines the rule set from the defined rulesSets configured in accounts.rba.setPolicy or one of the default policies.
     * - riskPolicyLocked - Determines whether the user can change their own riskPolicy. If true, only an admin can change the user's riskPolicy.
     *
     * @note: type this out
     */
    rba?: unknown;
    /**
     * The UTC time when the isRegistered parameter was set to true in ISO 8601 format, e.g., "1997-07-16T19:20:30Z".
     */
    registered?: string;
    /**
     * The GMT time when the isRegistered parameter was set to true in Unix time format, including milliseconds.
     */
    registeredTimestamp?: number;
    /**
     * A string representing the source of the registration. Can be used to set varying destination pages in accounts.setPolicies.
     */
    regSource?: string;
    /**
     * A comma-separated list of the names of the providers to which the user is connected/logged in.
     */
    socialProviders?: string;
    /**
     * The user's email subscription information.
     */
    subscriptions?: SubscriptionsSchema;
    /**
     * The user's subscription to communication topics information.
     *
     * @todo: type this out
     */
    communications?: unknown;
    /**
     * The UTC time when the isVerified parameter was set to true in ISO 8601 format, e.g., "1997-07-16T19:20:30Z".
     */
    verified?: string;
    /**
     * The GMT time when the isVerified parameter was set to true in Unix time format including milliseconds (i.e., the number of seconds since Jan. 1st 1970 * 1000).
     */
    verifiedTimestamp?: number;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/d5d894b89e3f41e885d322bcaee36bea.html#parameters
 */
export type AccountsRemoveEmailsRequest = GigyaRequest<{
    /**
     * The unique ID of the user for which to add user account emails.
     */
    UID?: string;
    /**
     * A string holding a comma-separated list of email addresses. The email addresses are removed from the account's verifiedEmail list.
     */
    verifiedEmails?: string;
    /**
     * A string holding a comma-separated list of email addresses. The email addresses are removed from the account's unverifiedEmail list.
     */
    unverifiedEmails?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/d5d894b89e3f41e885d322bcaee36bea.html#response-data
 */
export type AccountsRemoveEmailsResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4138cb4370b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsResendDOIConfirmationEmailRequest = GigyaRequest<{
    /**
     * The email address of the subscribed user.
     */
    email: string;
    /**
     * The ID of the subscription to which the user subscribed.
     */
    subscriptionId: string;
    /**
     * The code of the language of the double opt-in email to send to this subscriber. The default value is "en".
     */
    lang?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4138cb4370b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsResendDOIConfirmationEmailResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413917bf70b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsResetSitePreferencesRequest = GigyaRequest<{
    /**
     * The unique identifier of the user for which the consent statements are being reset.
     */
    UID?: string;
    /**
     * If you are resetting the consent status of the user on a site that is not the site from which the call originates, the API key of the site for which to reset the consent status.
     */
    resetPreferencesApiKey?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413917bf70b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsResetSitePreferencesResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4138f19d70b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsResendVerificationCodeRequest = GigyaRequest<{
    /**
     * The unique ID of a logged-in user. This is the UID you receive from Gigya after a successful login of this user.
     */
    UID?: string;
    /**
     * The regToken returned from accounts.initRegistration, accounts.register or accounts.login API calls when the registration process has not been finalized. Please note that the regToken you receive from Gigya is valid for only one hour.
     */
    regToken?: string;
    /**
     * The email address to which to send a verification email. If specified the verification email will only be sent to this address, otherwise it will be sent to all unverified email addresses. If this email address is not associated with the account already it will be automatically added as another unverified email address and a verification email will be sent to that address. If loginIdentifiers in the policy (accounts.setPolicies) contains "email" then this email will also be added as an unlocked login identifier.
     */
    email?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4138f19d70b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsResendVerificationCodeResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/559574624b634e5a955e0f7eeba01c07.html#parameters
 */
export type AccountsResetPasswordRequest = GigyaRequest<{
    /**
     * The existing account's loginID for identification. Can be a simple username or an email address. If it's an email address, it's the email address to which to send the password reset link, and it must already be associated with the specified account. Use this parameter when you first call this method.
     *
     * @note You are required to pass only one of the parameters either loginID or passwordResetToken.
     */
    loginID?: string;
    /**
     * A token to be used for password reset in the password reset email. You can pass this parameter instead of loginID after it is returned in the password reset email. If the token is found to be valid, the new password is set. The default token expiration time is 1 hour, and it can be changed in accounts.setPolicies in the passwordReset.tokenExpiration policy.
     *
     * If passwordResetToken is passed, then the newPassword parameter is also required.
     *
     * @note You are required to pass only one of the parameters either loginID or passwordResetToken.
     */
    passwordResetToken?: string;
    /**
     * The new password. SAP Customer Data Cloud will reset the password using this parameter only after verifying the ownership of the account, using either passwordResetToken (received with the password reset email), secretAnswer or securityFields parameters. In case loginID is passed (and not passwordResetToken ) and the account includes an email address, this parameter is ignored and an email with a link to a "reset password" page is sent. The password property accepts unicode characters.
     *
     * This parameter is Required only in the following cases:
     * - If passwordResetToken is passed.
     * - If we do not have any email address defined for the user or if the policies.passwordReset.requireSecrutiyCheck property is set to true. In these cases, you are also required to pass either secretAnswer or securityFields parameters.
     *
     * @note If this parameter is passed, then the method must be called using HTTPS.
     */
    newPassword?: string;
    /**
     * The user's answer to the secretQuestion. If we do not have any email address for the user or policies.passwordReset.requireSecurityCheck is true, the password may be reset directly by providing the newPassword parameter, in such case you are required to pass either this parameter or securityFields. This field is hashed and can not be extracted.
     *
     * You are Required to pass one of the parameters either secretAnswer or securityFields , only in the following cases:
     * - If the site policies define passwordReset.requireSecurityCheck to be true.
     * - If we do not have any email address already defined for the user. In this case, the newPassword parameter is also required.
     */
    secretAnswer?: string;
    /**
     * One set of profile fields specified in the policy with their values provided by the user. If we do not have any email address for the user or policies.passwordReset.requireSecurityCheck is true, the password may be reset directly by providing the newPassword parameter, in such case you are required to pass either this parameter or secretAnswer.
     *
     * You are Required to pass one of the parameters either secretAnswer or securityFields , only in the following cases:
     * - If the site policies define passwordReset.requireSecurityCheck to be true.
     * - If we do not have any email address already defined for the user. In this case, the newPassword parameter is also required.
     */
    securityFields?: string;
    /**
     * The CAPTCHA provider configured for the site. Possible values are:
     * - reCaptchaV2
     * - invisible
     * - reCaptchaV3
     * - reCaptchaEnterpriseScore
     * - FunCaptcha
     */
    captchaType?: GigyaCaptchaType;
    /**
     * The CAPTCHA challenge. This parameter is required only if the CAPTCHA failed login threshold in the site's policy has been reached (security.captcha.failedLoginThreshold).
     */
    captchaToken?: string;
    /**
     * @todo: Type this out, this is probably used somewhere else too
     */
    clientContext?: unknown;
    /**
     * If specified, allows sending a password reset link to an unverified email address that is not the current loginID, as long as it is already defined in the account.
     */
    email?: string;
    /**
     * The language specified for emails. If a template was defined for that language, the email sent to the user will be in that language. Otherwise, the language used in the email is taken from the locale field of the site identity, if available.
     *
     * This parameter is only valid if the profile.locale is not set.
     */
    lang?: string;
    /**
     * The default is true. When set to false SAP Customer Data Cloud does not send the password reset email to the user, instead, the passwordResetToken and the list of valid email addresses are returned in the response of this method (see passwordResetToken and emails fields in the method response below).
     */
    sendEmail?: boolean;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/559574624b634e5a955e0f7eeba01c07.html#response-data
 */
export type AccountsResetPasswordResponse = GigyaResponse<{
    /**
     * This field is returned only if there is a security verification failed error (code #400050).
     */
    secretQuestion?: string;
    /**
     * This field is returned only if, in the method call, you set the sendEmail parameter to false (see Description of the parameter above).
     *
     * A token to be used for password reset in the password reset email.
     *
     * @note If this method is used repeatedly on the same user, any previously sent tokens are revoked and only the last token sent will allow the user to reset their password.
     */
    passwordResetToken?: string;
    /**
     * This field is returned only if, in the method call, you set the sendEmail parameter to false (see Description of the parameter above).
     */
    emails?: {
        /**
         * The user's verified email addresses.
         */
        verified?: Array<string>;
        /**
         * The user's unverified email addresses.
         */
        unverified?: Array<string>;
    };
    /**
     * The user ID of the user whose password was changed. This field is only returned when the password is changed, not in calls that send an email or return a secret question.
     */
    UID?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/b32ce0918af44c3ebd7e96650fa6cc1d.html#parameters
 */
export type AccountsSearchRequest = GigyaRequest<{
    /**
     * The SQL-like query used to search the audit log. When using cursors, this parameter should only be sent with the initial request and omitted from subsequent requests.
     */
    query?: string;
    /**
     * When set to true, the search response will include, in addition to the first page, another field named nextCursorId, which is used to fetch the next batch of results. This parameter should only be used on the first request and later should be removed from the request.
     * When openCursor is active, the Limit clause sets the number of results returned in the batch and should not be larger than 1000 (one thousand).
     *
     * @note When using a cursor with a Limit set, the number of results in a batch is not guaranteed.
     * @note You can't use a cursor if you have a group by or when using 'start'.
     * @note openCursor is not supported when using querySig and can only be used in server-to-server calls that include a userKey and secret.
     */
    openCursor?: boolean;
    /**
     * The cursor ID that contains the nextCursorId value received in the first search call.
     *
     * @note You can't pass both cursorId and query on the same request - cursorId brings the next page for the search for which it was opened. Also, the time between search requests using a cursorId must not exceed 5 minutes (300 seconds).
     * @note Each request should contain a different cursorId obtained from the response of the previous request (not the first) using the nextCursorId field. The exception to this rule is when a request fails or when a particular result set needs to be resent; in this case, resend the same cursorID (as long as it has not expired) to receive its associated result set.
     */
    cursorId?: string;
    /**
     * The timeout for the request (in milliseconds). Default value is 20000 (20 seconds). Maximum allowed value is 60000 (60 seconds).
     */
    timeout?: number;
    /**
     * An SQL-like query specifying the data to retrieve. When using this parameter, the query specified must meet the regex criteria defined for the user making this call.
     * When using restrictedQuery, an ACL must exist with a regex limiting the allowValues for this parameter.
     */
    restrictedQuery?: string;
    /**
     * The type of account to retrieve: full or lite. Acceptable values:
     * - full (the default value)
     * - lite
     * - full,lite
     */
    accountTypes?: 'full' | 'lite' | 'full,lite';
}>;

/**
 * @note This isn't officially documented.
 */
export type AccountsSearchResponse<
    DataSchema extends GigyaData,
    PreferencesSchema extends GigyaPreferences,
    SubscriptionsSchema extends GigyaSubscriptions,
> = GigyaResponse<{
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
    results?: AccountsGetAccountInfoResponse<DataSchema, PreferencesSchema, SubscriptionsSchema>[];
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4139643c70b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsSendLiteInviteRequest = GigyaRequest<{
    /**
     * The email address associated with the lite account you want to send the invitation.
     *
     * @note Only one of either email or emailToken must be supplied; attempting to send both will cause the call to fail.
     */
    email?: string;
    /**
     * The emailToken associated with the lite account you want to send the invitation.
     *
     * @note Only one of either email or emailToken must be supplied; attempting to send both will cause the call to fail.
     */
    emailToken?: string;
    /**
     * The length of time in seconds the link will remain valid that is inside the email sent to the user in the invitation; the default is 600 (10 minutes).
     */
    invitationExpiration?: number;
    /**
     * The language of the email template to send to the user, the default is "en". Sending an email other than English requires that you have the appropriate template defined in the preferencesCenter object of your Site's Policies.
     */
    lang?: string;
    /**
     * The length of time the user's session will be valid when arriving to your site after clicking the invitation link in the email; the default is 3600 (1 hour).
     */
    sessionExpiration?: number;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4139643c70b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsSendLiteInviteResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/6e5f013e6369493091d086c56d842862.html#parameters
 */
export type AccountsSessionVerifyRequest = GigyaRequest<{
    /**
     * An access token.
     */
    oauth_token: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/6e5f013e6369493091d086c56d842862.html#response-data
 */
export type AccountsSessionVerifyResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41398a8670b21014bbc5a10ce4041860.html
 */
export type AccountsSetAccountInfoRequest<
    DataSchema extends GigyaData,
    PreferencesSchema extends GigyaPreferences,
    SubscriptionsSchema extends GigyaSubscriptions,
> = GigyaRequest<{
    /**
     * The unique ID of the user for which to set account data. Use either this parameter or regToken.
     *
     * @note You are required to pass only one of the parameters either UID or regToken.
     */
    UID?: string;
    /**
     * The regToken returned from accounts.initRegistration, accounts.register, or accounts.login API calls when the registration process has not been finalized. Note that the regToken you receive from Gigya is valid for only one hour. Calls passing a regToken are handled as client-side calls by the server: fields with a writeAccess permission of "server only" will be inaccessible.
     */
    regToken?: string;
    /**
     * A comma-separated list of emails that should be added to the user's login identifiers list, and can be used for login purposes.
     */
    addLoginEmails?: string;
    /**
     * An object containing SMS subscription data for this user.
     *
     * @todo: type this out.
     */
    communications?: unknown;
    /**
     * How the server handles a "login identifier exists" conflict on a new account:
     * - fail - (default) returns a "login identifier exists" error.
     * - saveProfileAndFail - profile data is saved before returning error "OK with error login identifier exists".
     */
    conflictHandling?: 'fail' | 'saveProfileAndFail';
    /**
     * An object containing the list of custom user identifiers to update for this user.
     *
     * @todo: type this out.
     */
    customIdentifiers?: unknown;
    /**
     * An object containing custom data. Any data that you want to store regarding the user that isn't part of the profile object can be stored here.
     */
    data?: DataSchema;
    /**
     * This parameter allows disabling the account. This is only permitted when calling this method from server-side, attempting to disable an account from a client SDK will return an error.
     *
     * If an account's isActive state is false, a user attempting to log in will receive an 'Account is disabled' error, and if email is the site's Login Identifier, the same email can not be used to create a new account.
     */
    isActive?: boolean;
    /**
     * Indicates whether the account emails are verified.
     *
     * @note f you pass the value 'true', all the user's emails will be set as verified. Once an account has been verified, it is immutable and can not be 'unverified' and any unverified email addresses in the account will be flagged as verified.
     */
    isVerified?: boolean;
    /**
     * The locale of the current interaction.
     *
     * If the current call includes the user's consent status (the preferences object), and the consent statement being passed has more than one localized purpose, this parameter is required to specify the language in which the user gave their consent.
     *
     * In the New Consent solution, if the lang parameter is not forwarded, and a default locale is defined in the consent, then the default locale is used.
     */
    lang?: string;
    /**
     * When set to true, no webhooks are triggered by the API call. The default value is false.
     */
    muteWebhooks?: boolean;
    /**
     * The new password to replace the old one. Use this parameter with password . When passing the securityQuestion or securityAnswer parameters, the password parameter is required.
     *
     * @note If this parameter is passed, then the method must be called using HTTPS.
     * @note When users reset their password with this method, they are logged out of all devices except the one from which the call is made.
     */
    newPassword?: string;
    /**
     * The old password to be changed. Use this parameter with newPassword.
     *
     * @note If this parameter is passed, then the method must be called using HTTPS.
     * @note When users reset their password with this method, they are logged out of all devices except the one from which the call is made.
     */
    password?: string;
    /**
     * The phone number login identifier, if the account uses Phone Number Login. The supported phone number formatting is E.164.
     *
     * When using accounts.setAccountInfo, this parameter cannot be updated using client-side calls.
     */
    phoneNumber?: string;
    /**
     * A Preferences Object containing consent data for this user. When manually passing subscription information for a user using this method, you can change only the value of the isConsentGranted Boolean parameter and tags (only when accompanied by a status change of isConsentGranted).
     *
     * Note that passing tags without consenting/withdrawing a consent causes the specific consent request to be ignored.
     *
     * When setting or updating a user's Consent, you must pass the lang parameter also.
     *
     * Passing this as an array is not supported.
     */
    preferences?: PreferencesSchema;
    /**
     * The user's profile information as described in the Profile object. You may add data to the predefined Gigya fields. To add your own custom profile fields, use the data object.
     */
    profile?: GigyaProfile;
    /**
     * User's internal data.
     *
     * @todo: type this out
     */
    internal?: unknown;
    /**
     * A comma-separated list of emails to be removed from the user's emails array.
     *
     * @note When using the removeLoginEmails parameter, it also removes any matching email address from loginIDs.username in Account REST.
     */
    removeLoginEmails?: string;
    /**
     * When this property is passed, the only valid value is TRUE and once set, it is immutable and will force the user to change their password on the next login.
     */
    requirePasswordChange?: boolean;
    /**
     * A secret answer to the secret question that can be used for verification. Use this parameter with secretQuestion.
     * Changing the secret answer will not work without providing the existing password ( password parameter). This field is hashed and can not be extracted.
     */
    secretAnswer?: string;
    /**
     * A secret question that can be used for verification. Use this parameter with secretAnswer . Changing the secret question will not work without providing the existing password ( password parameter).
     */
    secretQuestion?: string;
    /**
     * The default value is "false". When set to "true", the API call does not require the oldPassword for setting the newPassword . It also does not require a password validation when setting the secret question and answer for the first time. Only users with _sites permissions are allowed to pass this parameter. Read more about Console Administration.
     */
    securityOverride?: boolean;
    /**
     * A Subscriptions Object containing email subscription data for this user. When manually passing subscription information for a user using this method, you can change only the value of the isSubscribed, tags, and doiConditionallyConfirmed* parameters.
     *
     * You can define whether a double opt-in subscription is conditionally verified by passing "isExternallyVerified": true within the doubleOptIn object of the subscription.
     */
    subscriptions?: UpdateSubscriptions<SubscriptionsSchema>;
    /**
     * Sets the specified user's rba policy.
     *
     * @todo: type this out
     */
    rba?: unknown;
    /**
     * The user's new username that can be used as a login identifier, if the site's Login Identifier Policy allow that.
     */
    username?: string;
    /**
     * A string representing the source of the registration. Can be used to set varying destination pages in accounts.setPolicies.
     *
     * This property can not be edited once it is set.
     */
    regSource?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41398a8670b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsSetAccountInfoResponse = GigyaResponse<{
    /**
     * When using a Lite User regToken, the user's UID is returned in the response.
     */
    UID?: string;
    /**
     * In case of a data validation errors (errorCode 400006), you will receive this field as an array of error objects. Each object represents a validation error regarding one of the following fields: username, password, secretQuestion, secretAnswer, email.
     */
    validationErrors?: GigyaValidationError[];
}>;

/**
 * This method uploads a user's profile photo to Gigya's server.
 *
 * By default the uploaded photo is treated as a temporary photo. You can decide whether to publish the photo into the user's account, using the publish parameter (see below), or you can publish later using the accounts.publishProfilePhoto API method.
 *
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4139fc6970b21014bbc5a10ce4041860.html
 */
export type AccountsSetProfilePhotoRequest = GigyaRequest<{
    /**
     * The unique ID of the user to which to associate the uploaded photo.
     *
     * @note You are required to pass only one of the parameters either UID or regToken.
     */
    UID?: string;
    /**
     * The regToken returned from accounts.initRegistration, accounts.register or accounts.login API calls when the registration process has not been finalized. Please note that the regToken you receive from Gigya is valid for only one hour.
     *
     * @note You are required to pass only one of the parameters either UID or regToken.
     */
    regToken?: string;
    /**
     * A BASE64 encoded string representation of the photo bytes. The size limit of the photo is 6MB, and the supported image types are png, jpeg, and gif.
     */
    photoBytes?: string;
    /**
     * Indicates whether to publish this photo to the user's profile or treat it as a temporary photo.
     * The default value is 'false', i.e. the photo is temporary.
     * You can later publish a temporary photo using the accounts.publishProfilePhoto API method.
     * If published, the photo is saved in the photoURL field of the user's Profile, in addition the photo is trimmed to the size defined in the site's Policies (64X64 by default) and saved in the thumbnailURL field.
     */
    publish?: boolean;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4139fc6970b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsSetProfilePhotoResponse = GigyaResponse<{}>;

/**
 * TODO: Type this out
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413a0faa70b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsSetSchemaRequest = GigyaRequest<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413a0faa70b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsSetSchemaResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413a22ad70b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsSetScreenSetRequest = GigyaRequest<{
    /**
     * An identifier of a screen-set to update or to create if it does not exist.
     */
    screenSetID: string;
    /**
     * The HTML code that defines the screen-set.
     */
    html: string;
    /**
     * The CSS that defines the style of the screen-set.
     *
     * If the HTML file (above) does not include the screens css and it is in a seperate file, you must upload that file now. You can not upload css separately from the HTML file it belongs to.
     */
    css?: string;
    /**
     * An object declaring any custom translations for the screen-set.
     *
     * If your screen-set requires a separate translations file, you must include it now.
     */
    translations?: {
        [language: string]: {
            [key: string]: string;
        };
    };
    /**
     * See JavaScript Parameters for additional information.
     *
     * TODO: Type this out
     */
    javascript?: unknown;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413a22ad70b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsSetScreenSetResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/215367b5a1604283899d505811964492.html#parameters
 */
export type AccountsSMSTemplatesGetRequest = GigyaRequest<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/215367b5a1604283899d505811964492.html#response-data
 */
export type AccountsSMSTemplatesGetResponse = GigyaResponse<{
    /**
     * The text templates defined for the site.
     */
    templates?: {
        /**
         * Object containing the global and country-code templates defined for the OTP flow.
         */
        otp?: GigyaSMSTemplateSettings;
        /**
         * Object containing the global and country-code templates defined for the TFA flow.
         */
        tfa?: GigyaSMSTemplateSettings;
    };
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/bde4427de0f44ca2b5a3e816d5e3a7bb.html#parameters
 */
export type AccountsSMSTemplatesSetRequest = GigyaRequest<{
    templates: {
        /**
         * Object containing the global and country-code templates defined for the OTP flow.
         */
        otp: GigyaSMSTemplateSettings;
        /**
         * Object containing the global and country-code templates defined for the TFA flow.
         */
        tfa: GigyaSMSTemplateSettings;
    };
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/bde4427de0f44ca2b5a3e816d5e3a7bb.html#response-data
 */
export type AccountsSMSTemplatesSetResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/96386b7e9d3f4dd2ba6db6ae17636f42.html#parameters
 */
export type AccountsSMSConfigGetRequest = GigyaRequest<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/96386b7e9d3f4dd2ba6db6ae17636f42.html#response-data
 */
export type AccountsSMSConfigGetResponse = GigyaResponse<{
    /**
     * The configuration that was used to set SMS providers at site level.
     */
    smsProviderConfig?: GigyaSMSConfig;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/2f7844ac20964d0a90154d2e7982715d.html#parameters
 */
export type AccountsSMSConfigSetRequest = GigyaRequest<{
    /**
     * The configuration to be used for SMS providers at site level.
     */
    smsProviderConfig: GigyaSMSConfig;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/2f7844ac20964d0a90154d2e7982715d.html#response-data
 */
export type AccountsSMSConfigSetResponse = GigyaResponse<{}>;

/**
 * TODO: Type this out
 *
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413a6e9d70b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsSocialLoginRequest = GigyaRequest<{}>;

/**
 * TODO: Type this out
 *
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413a6e9d70b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsSocialLoginResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413a81a770b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsStoreDownloadConsentDocumentRequest = GigyaRequest<{
    /**
     * The URL of the stored document, as returned in the response of accounts.store.uploadConsentDocument REST.
     */
    URL: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413a81a770b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsStoreDownloadConsentDocumentResponse = GigyaResponse<{
    /**
     * Base-64 encoding of the document content.
     */
    DocumentContent?: string;
    /**
     * The type of the document.
     */
    DocumentContentType?: 'application/pdf';
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413a94a470b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsStoreUploadConsentDocumentRequest = GigyaRequest<{
    /**
     * A base-64 encoded string of the document contents.
     */
    documentContent: string;
    /**
     * The type of document. Only PDF are supported.
     */
    documentContentType: 'application/pdf';
    /**
     * The name of the document.
     */
    documentName?: string;
    /**
     * If you are storing the document on SAP Customer Data Cloud, the prefix (your site domain) that will appear in the download link. For example, if your domain is mysite.com, and you specify "mysite" here, the document will be downloaded from mysite.accounts.gigya.com.
     *
     * When using a URL prefix, it must be added to your CNAME configuration.
     */
    URLPrefix?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413a94a470b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsStoreUploadConsentDocumentResponse = GigyaResponse<{
    /**
     * The URL of the stored document.
     */
    Url?: string;
    /**
     * The file name for the stored document.
     */
    FileName?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/de20e73c5f0e4df0bc5ab38e2717f494.html#parameters
 */
export type AccountsStreamCreateRequest = GigyaRequest<{
    /**
     * The timestamp to begin the records in Unix time (for example "1702646077"). This value represents the earliest time an event occured to return in UTC (12/15/2023 @ 01:14pm), limited to: Now-30d
     */
    since?: number;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/de20e73c5f0e4df0bc5ab38e2717f494.html#response-example
 */
export type AccountsStreamCreateResponse = GigyaResponse<{
    /**
     * The ID of the newly created stream.
     */
    streamId: string;
    /**
     * The initial cursorId that you need to pass into the accounts.stream.read REST API.
     */
    cursorId: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/cbf4b101bc1d427da0e257e364da1c36.html#parameters
 */
export type AccountsStreamReadRequest = GigyaRequest<{
    /**
     * The cursorId is returned in every response. For the first call to this API, you must pass the cursorId received from the initial response from accounts.stream.create REST.
     */
    cursorId: string;
    /**
     * The number of results to limit each response.
     */
    limit?: number;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/cbf4b101bc1d427da0e257e364da1c36.html#response-data
 */
export type AccountsStreamReadResponse = GigyaResponse<{
    /**
     * The returned events in an array.
     */
    results?: GigyaStreamEvent[];
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413abafd70b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsTFABackupCodesCreateRequest = GigyaRequest<{
    /**
     * The JWT token from accounts.tfa.initTFA. It is made up of a header object, a body object and a signature.
     */
    gigyaAssertion: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413abafd70b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsTFABackupCodesCreateResponse = GigyaResponse<{
    /**
     * An array of backup codes generated for this user.
     */
    backupCodes?: string[];
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413ace4a70b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsTFABackupCodesGetRequest = GigyaRequest<{
    /**
     * The JWT token from accounts.tfa.initTFA. It is made up of a header object, a body object and a signature.
     */
    gigyaAssertion: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413ace4a70b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsTFABackupCodesGetResponse = GigyaResponse<{
    /**
     * An array of backup codes generated for this user.
     */
    backupCodes?: string[];
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413ae15570b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsTFABackupCodesVerifyRequest = GigyaRequest<{
    /**
     * The JWT token from accounts.tfa.initTFA. It is made up of a header object, a body object and a signature.
     */
    gigyaAssertion: string;
    /**
     * The backup code submitted by the user. This is validated against the secret token (sctToken) that is saved to the user's account.
     */
    code: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413ae15570b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsTFABackupCodesVerifyResponse = GigyaResponse<{
    /**
     * The JWT token from the TFA provider. The It is made up of a header object, a body object and a signature.
     */
    gigyaAssertion?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413af46770b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsTFADeactivateProviderRequest = GigyaRequest<{
    /**
     * The unique ID of the user, for whom to deactivate the provider.
     */
    UID: string;
    /**
     * The TFA provider to deactivate.
     */
    provider: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413af46770b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsTFADeactivateProviderResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413b0b7d70b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsTFAEmailCompleteVerificationRequest = GigyaRequest<{
    /**
     * The JWT token from accounts.tfa.initTFA. It is made up of a header object, a body object and a signature.
     */
    gigyaAssertion: string;
    /**
     * A secure token that includes the code that was sent to the user's email, and gigyaAssertion.jti.
     */
    phvToken: string;
    /**
     * The verification code entered by the user.
     */
    code: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413b0b7d70b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsTFAEmailCompleteVerificationResponse = GigyaResponse<{
    /**
     * The JWT token from the TFA provider. The It is made up of a header object, a body object and a signature.
     */
    providerAssertion?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413b1e8a70b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsTFAEmailGetEmailsRequest = GigyaRequest<{
    /**
     * The JWT token from accounts.tfa.initTFA. It is made up of a header object, a body object and a signature.
     */
    gigyaAssertion: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413b1e8a70b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsTFAEmailGetEmailsResponse = GigyaResponse<{
    /**
     * An array of verified emails.
     */
    emails?: {
        /**
         * A unique identifier for the email address.
         */
        id: string;
        /**
         * An obfuscated version of the email address, where asterisks replace some of the letters.
         */
        obfuscated: string;
        /**
         * The verified email address (without any obfuscation or masking).
         */
        plain?: string;
        /**
         * The last verification time in UNIX time.
         */
        lastVerification: number;
    }[];
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413b31d470b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsTFAEmailSendVerificationCodeRequest = GigyaRequest<{
    /**
     * The JWT token from accounts.tfa.initTFA. It is made up of a header object, a body object and a signature.
     */
    gigyaAssertion: string;
    /**
     * The actual email address of the user. This email must exist in the user's verified emails list. You must pass one of either email or emailID; if both are passed emailID will be used.
     */
    email?: string;
    /**
     * The unique identifier of the email, as returned from accounts.tfa.email.getEmails. You may use the obfuscated email returned from the same method to display to the user the email with which they are expected to verify. You must pass one of either email or emailID; if both are passed emailID will be used.
     */
    emailID?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413b31d470b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsTFAEmailSendVerificationCodeResponse = GigyaResponse<{
    /**
     * A secure ticket that includes the code and gigyaAssertion.jti.
     */
    phvToken?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413b44d170b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsTFAFinalizeTFARequest = GigyaRequest<{
    /**
     * The JWT token from accounts.tfa.initTFA. It is made up of a header object, a body object and a signature.
     */
    gigyaAssertion: string;
    /**
     * The JWT token from the TFA provider. The It is made up of a header object, a body object and a signature.
     */
    providerAssertion: string;
    /**
     * The regToken returned from the previous API or notifyLogin response.
     */
    regToken?: string;
    /**
     * The users UID, can be specified when the user is logged in.
     */
    UID?: string;
    /**
     * Indicates whether this device is temporary and should not be remembered as an active device. The default value is "false". When this value is true the server marks the device as "oneTimeOnly". When login is performed, "oneTimeOnly" devices are treated as not verified.
     */
    tempDevice?: boolean;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413b44d170b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsTFAFinalizeTFAResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413b57d970b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsTFAGetCertificateRequest = GigyaRequest<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413b57d970b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsTFAGetCertificateResponse = GigyaResponse<{
    /**
     * Gigya's PEM-encoded X.509 certificate containing an RSA public key.
     */
    certificate?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413b6ced70b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsTFAGetProvidersRequest = GigyaRequest<{
    /**
     * You are required to pass only one of the parameters either UID or regToken.
     *
     * The unique ID of the user for which to retrieve data. Use either this parameter or regToken.
     * If you call this method through an external OAuth2 SDK, then the UID may be passed implicitly within the access_token.
     */
    UID?: string;
    /**
     * You are required to pass only one of the parameters either UID or regToken.
     *
     * The regToken returned from accounts.initRegistration, accounts.register or accounts.login API calls when the registration process has not been finalized. Please note that the regToken you receive from Gigya is valid for only one hour.
     */
    regToken?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413b6ced70b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsTFAGetProvidersResponse = GigyaResponse<{
    /**
     * All the TFA providers that the site supports and to which the user registered. Returned as an array of objects, each object with the field "name" that indicates the type of TFA provider, e.g., gigyaPhone:
     */
    activeProviders: GigyaProviderGeneric[];
    /**
     * All the TFA providers that the site supports and to which the user did not register. Returned as an array of objects, each object with the field "name" that indicates the type of TFA provider, e.g., gigyaPhone:
     */
    inactiveProviders: GigyaProviderGeneric[];
    /**
     * All the TFA providers that the site supports that are pending opt-in. Returned as an array of objects, each object with the field "name" that indicates the type of TFA provider, e.g., gigyaPush:
     */
    pendingOptin: GigyaProviderGeneric[];
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413b800070b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsTFAImportTFARequest = GigyaRequest<{
    /**
     * The unique ID of the user, for whom to import the verified phone numbers.
     */
    UID: string;
    /**
     * The TFA provider to import. We currently support only "gigyaPhone".
     */
    provider: 'gigyaPhone';
    /**
     * An array of objects, each with the phone number and the method used for the second step verification, which can be either "sms" or "voice".
     */
    phones: {
        /**
         * The phone number to import.
         */
        phoneNumber: string;
        /**
         * The method used for the second step verification. Can be either "sms" or "voice".
         */
        method: 'sms' | 'voice';
    }[];
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413b800070b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsTFAImportTFAResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413b93e570b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsTFAInitTFARequest = GigyaRequest<{
    /**
     * The users UID, can be specified when the user is logged in.
     */
    UID?: string;
    /**
     * The regToken returned from accounts.initRegistration, accounts.register or accounts.login API calls when the registration process has not been finalized. Please note that the regToken you receive from SAP Customer Data Cloud is valid for only one hour.
     */
    regToken?: string;
    /**
     * The name of the TFA provider for which the token mode is set.
     */
    provider: 'gigyaPhone' | 'gigyaTotp' | 'gigyaPush' | 'gigyaEmail';
    /**
     * The token mode. The possible values for the mode are:
     * - register (default)
     * - verify
     * - add
     * - edit
     */
    mode: 'register' | 'verify' | 'add' | 'edit';
    /**
     * Additional information regarding the client who made the login request, used for server-side Risk Based Authentication implementations. When passing the client context, any RBA rules apply and may be triggered.
     */
    clientContext?: GigyaClientContext;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413b93e570b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsTFAInitTFAResponse = GigyaResponse<{
    /**
     * The JWT token, which is made up of a header object, a body object and a signature.
     */
    gigyaAssertion: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413bb9ee70b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsTFAPhoneCompleteVerificationRequest = GigyaRequest<{
    /**
     * The JWT token from accounts.tfa.initTFA. It is made up of a header object, a body object and a signature.
     */
    gigyaAssertion: string;
    /**
     * A secure ticket that includes the method, phone, code, and gigyaAssertion.jti.
     */
    phvToken: string;
    /**
     * The verification code.
     */
    code: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413bb9ee70b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsTFAPhoneCompleteVerificationResponse = GigyaResponse<{
    /**
     * The JWT token from the TFA provider. The It is made up of a header object, a body object and a signature.
     */
    providerAssertion: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413bcd4070b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsTFAPhoneGetCertificateRequest = GigyaRequest<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413bcd4070b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsTFAPhoneGetCertificateResponse = GigyaResponse<{
    /**
     * Gigya's PEM-encoded X.509 certificate containing an RSA public key.
     */
    certificate?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413be06570b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsTFAPhoneGetRegisteredPhoneNumbersRequest = GigyaRequest<{
    /**
     * The JWT token from accounts.tfa.initTFA. It is made up of a header object, a body object and a signature.
     */
    gigyaAssertion: string;
}>;
/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413be06570b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsTFAPhoneGetRegisteredPhoneNumbersResponse = GigyaResponse<{
    /**
     * An array of objects, each object includes the following fields.
     */
    phones: GigyaPhoneObject[];
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413bf36d70b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsTFAPhoneRemovePhoneRequest = GigyaRequest<{
    /**
     * The JWT token from accounts.tfa.initTFA. It is made up of a header object, a body object, and a signature.
     */
    gigyaAssertion: string;
    /**
     * 	The unique identifier of the phone.
     */
    phoneId: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413bf36d70b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsTFAPhoneRemovePhoneResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413c069e70b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsTFAPhoneSendVerificationCodeRequest = GigyaRequest<{
    /**
     * The JWT token from accounts.tfa.initTFA. It is made up of a header object, a body object and a signature.
     */
    gigyaAssertion: string;
    /**
     * The unique identifier of the phone. If this parameter is provided, there is no need for the phone parameter.
     */
    phoneID?: string;
    /**
     * The phone number. If this parameter is provided, there is no need for the phoneID parameter.
     */
    phone?: string;
    /**
     * Can be either "sms" or "voice".
     */
    method: 'sms' | 'voice';
    /**
     * The language of the text or voice message.
     */
    lang: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413c069e70b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsTFAPhoneSendVerificationCodeResponse = GigyaResponse<{
    /**
     * A secure ticket that includes the method, phone, code, and gigyaAssertion.jti.
     */
    phvToken: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413c199b70b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsTFAPushIsVerifiedRequest = GigyaRequest<{
    /**
     * The JWT token from accounts.tfa.initTFA. It is made up of a header object, a body object and a signature.
     */
    gigyaAssertion: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413c199b70b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsTFAPushIsVerifiedResponse = GigyaResponse<{
    /**
     * TODO: This is not documented.
     */
    providerAssertion?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413c2c9870b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsTFAPushOptInRequest = GigyaRequest<{
    /**
     * The JWT token from accounts.tfa.initTFA. It is made up of a header object, a body object and a signature.
     */
    gigyaAssertion: string;
    /**
     * Information about the device from which the original login request came.
     */
    deviceInfo: {
        /**
         * Acceptable values are android or ios.
         */
        platform: 'android' | 'ios';
        /**
         * Information about the manufacturer, e.g., galaxy, apple etc.
         */
        man: string;
        /**
         * The unique fcm-registration-id, as generated by Firebase for this user.
         */
        pushToken: string;
        /**
         * The version number of the operating system.
         */
        os: string;
    };
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413c2c9870b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsTFAPushOptInResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413c3f9d70b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsTFAPushSendVerificationRequest = GigyaRequest<{
    /**
     * The JWT token from accounts.tfa.initTFA. It is made up of a header object, a body object and a signature.
     */
    gigyaAssertion: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413c3f9d70b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsTFAPushSendVerificationResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413c529a70b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsTFAPushVerifyRequest = GigyaRequest<{
    /**
     * The JWT token from accounts.tfa.initTFA. It is made up of a header object, a body object and a signature.
     */
    gigyaAssertion: string;
    /**
     * The token associated with this user's credentials and session in the third-party app.
     */
    verificationToken: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413c529a70b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsTFAPushVerifyResponse = GigyaResponse<{
    /**
     * The JWT token from the TFA provider. The It is made up of a header object, a body object and a signature.
     */
    providerAssertion: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413c65da70b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsTFAResetTFARequest = GigyaRequest<{
    /**
     * The unique ID of the user, for whom to reset the verified phone numbers.
     */
    UID: string;
    /**
     * The TFA provider to reset. Supported values:
     *   gigyaPhone
     *   gigyaTotp
     *   gigyaPush
     *
     * If no provider is sent, all active providers will be reset. Note that gigyaEmail cannot be reset using this method but via email verification flows instead.
     */
    provider?: 'gigyaPhone' | 'gigyaTotp' | 'gigyaPush';
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413c65da70b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsTFAResetTFAResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413c8bc970b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsTFATOTPRegisterRequest = GigyaRequest<{
    /**
     * The JWT token from accounts.tfa.initTFA. It is made up of a header object, a body object and a signature.
     */
    gigyaAssertion: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413c8bc970b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsTFATOTPRegisterResponse = GigyaResponse<{
    /**
     * A URL that contains the QR code to be scanned by the user, to pair their app with their account.
     */
    qrCode?: string;
    /**
     * A secret token that is used for the actual app-based authentication.
     */
    sctToken?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413cb1cd70b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsTFATOTPVerifyRequest = GigyaRequest<{
    /**
     * The JWT token from accounts.tfa.initTFA. It is made up of a header object, a body object and a signature.
     */
    gigyaAssertion: string;
    /**
     * The authentication code submitted by the user. This is validated against the secret token (sctToken).
     */
    code: string;
    /**
     * The secret token associated with this user's authentication app. This is required in registration mode, but not in verify mode, as it is already saved to the user's account.
     */
    sctToken?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413cb1cd70b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsTFATOTPVerifyResponse = GigyaResponse<{
    /**
     * The JWT token from the TFA provider. The It is made up of a header object, a body object and a signature.
     */
    providerAssertion?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413cc8e070b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsTFAUnregisterDeviceRequest = GigyaRequest<{
    /**
     * The UID of the user whose TFA you want to reset.
     */
    UID: string;
    /**
     * Indicates whether to unregister all the user devices (but not to disable the TFA providers). This may be used, for example, if the user loses their mobile phone, which is used for the TFA validation. When set to 'false', only devices for which there is a current active session will be unregistered. The default value is "false".
     */
    allDevices?: boolean;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413cc8e070b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsTFAUnregisterDeviceResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413cef8370b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsUnsubscribeRequest = GigyaRequest<{
    /**
     * The name of the newsletter from which the user is being unsubscribed.
     */
    subscriptionID: string;
    /**
     * The email to unsubscribe from this newsletter.
     *
     * You must provide either the email or the channelToken property.
     */
    email?: string;
    /**
     * The token returned from accounts.search of the emailAccounts for the user. This is used when unsubscribing via a 3rd party, so not to expose the user's PII email address.
     *
     * You must provide either the email or the channelToken property.
     */
    channelToken?: string;
    /**
     * Any tags you want to associate with the subscription change. Note that this will overwrite any previous tags associated with the subscription. If passed empty, all previously existing tags will be removed.
     */
    tags?: string[];
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413cef8370b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsUnsubscribeResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/929ca94d9a484d7bb466d0746e449a01.html#parameters
 */
export type AccountsVerifyLoginRequest = GigyaRequest<{
    /**
     * The unique user ID. This user ID should be used for login verification.
     */
    UID?: string;
    /**
     * A comma-separated list of fields to include in the response. The possible values are:
     * - identities-active
     * - identities-all
     * - loginIDs
     * - emails
     * - profile
     * - data
     * - preferences
     * - subscriptions
     * - groups
     * - id_token
     */
    include?: string;
    /**
     * This parameter defines your client side environment, which in return determines the server response data fields. The default value of this parameter is "browser", which means that by default you receive cookie-related data in the response.
     */
    targetEnv?: 'browser' | 'mobile';
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/929ca94d9a484d7bb466d0746e449a01.html#response-data
 */
export type AccountsVerifyLoginResponse<DataSchema, PreferencesSchema, SubscriptionsSchema> = GigyaResponse<{
    /**
     * The unique user ID. This user ID should be used for login verification.
     */
    UID?: string;
    /**
     * The UTC time the account was created in ISO 8601 format, e.g., "1997-07-16T19:20:30Z".
     */
    created?: string;
    /**
     * The UTC time the account was created in Unix time format including milliseconds (i.e., the number of seconds since Jan. 1st 1970 * 1000).
     */
    createdTimestamp?: number;
    /**
     * Custom data. Any data that you want to store regarding the user that isn't part of the Profile object.
     */
    data?: DataSchema;
    /**
     * The email addresses belonging to the user.
     */
    emails?: {
        /**
         * An array of strings representing the user's verified email addresses.
         */
        verified?: string[];
        /**
         * An array of strings representing the user's unverified email addresses.
         */
        unverified?: string[];
    };
    /**
     * When using CIAM for B2B, this is where the user's Organization Management data is stored. For a detailed Description of this field, see the Groups object documentation.
     *
     * TODO: Type this out.
     */
    groups?: unknown;
    /**
     * An array of Identity Objects, each object represents a user's social identity. Each Identity Object contains imported data from a social network that the user has connected to.
     */
    identities?: GigyaIdentity[];
    /**
     * Boolean	Indicates whether the account is active. The account is active once the user creates it even without finalizing it. The account can be deactivated, but it will still be registered if the registration process has been finalized. If isActive==false the user cannot log in, however any currently active sessions remain valid.
     */
    isActive?: boolean;
    /**
     * Indicates whether the user is registered. The user is registered once his registration has been finalized.
     */
    isRegistered?: boolean;
    /**
     * Indicates whether the account email is verified.
     */
    isVerified?: boolean;
    /**
     * The time of the last login of the user in ISO 8601 format, e.g., "1997-07-16T19:20:30Z".
     */
    lastLogin?: string;
    /**
     * The user's last login location, derived from IP address.
     */
    lastLoginLocation?: {
        /**
         * A string representing the two-character country code.
         */
        country?: string;
        /**
         * A string representing the state, where available.
         */
        state?: string;
        /**
         * A string representing the city name.
         */
        city?: string;
        coordinates?: {
            /**
             * A double representing the latitude of the center of the city.
             */
            lat: number;
            /**
             * A double representing the longitude of the center of the city.
             */
            lon: number;
        };
    };
    /**
     * The UTC time of the last login of the user in Unix time format including milliseconds (i.e., the number of seconds since Jan. 1st 1970 * 1000).
     */
    lastLoginTimestamp?: number;
    /**
     * The UTC time when user profile, preferences, or subscriptions data was last updated (either full or partial update) in ISO 8601 format, e.g., "2017-07-16T19:20:30Z".
     */
    lastUpdated?: string;
    /**
     * The UTC time when the last update of the object occurred (either full or partial update) in Unix time including milliseconds, based on when the 'lastUpdated', 'Report AccountsFirstLogin' or 'AccountsReturnedLogin' events are fired.
     */
    lastUpdatedTimestamp?: number;
    /**
     * The user's login identifiers.
     */
    loginIDs?: {
        /**
         * A string representing the username.
         */
        username?: string;
        /**
         * An array of strings representing email addresses.
         */
        emails?: string[];
        /**
         * An array of strings representing email addresses that were not validated.
         */
        unverifiedEmails?: string[];
    };
    /**
     * The name of the provider that the user used in order to login.
     */
    loginProvider?: string;
    /**
     * The UTC time when the oldest data of the object was refreshed in ISO 8601 format, e.g., "1997-07-16T19:20:30Z".
     */
    oldestDataUpdated?: string;
    /**
     * The UTC time when the oldest data of the object was refreshed in Unix time format including milliseconds (i.e., the number of seconds since Jan. 1st 1970 * 1000).
     */
    oldestDataUpdatedTimestamp?: number;
    /**
     * The user's Site account password details.
     */
    password?: {
        /**
         * The hashed password
         */
        hash?: string;
        hashSettings?: {
            /**
             * Represents the hash algorithm used to encrypt the password.
             */
            algorithm?: string;
            /**
             * Represents the number of iterations to perform the hashing.
             */
            rounds?: number;
            /**
             * Represents the BASE64 encoded value of the salt.
             */
            salt?: string;
            /**
             * Represents the template for merging clear-text passwords. This is only returned if the pwHashFormat parameter was set during account import and until the user's first login to Gigya (when the user's password is rehashed per the site's settings).
             */
            format?: string;
        };
    };
    /**
     * The Phone Number login identifier, if the account uses Phone Number Login. The phone number formatting is e.164. Note that this field cannot be mapped using the UI Builder or the Web SDK.
     */
    phoneNumber?: string;
    /**
     * The user's preferences information as described in the Preferences Object.
     */
    preferences?: PreferencesSchema;
    /**
     * The user's profile information as described in the object. If the user has more than one type of identity (i.e. site and social), data from a 'site' source will override data from a social network and always take precedence. If no site data exists, the first social account to update a field's data will take precedence. The profile is returned in the response by default, but if the include parameter is used to specify other fields that should be provided in the response, the profile must also be specified explicitly in the include parameter.
     */
    profile?: GigyaProfile;
    /**
     * The current RBA Policy defined for the specified user.
     *
     * TODO: Type this out.
     */
    rbaPolicy?: unknown;
    /**
     * The UTC time when the isRegistered parameter was set to true in ISO 8601 format, e.g., "1997-07-16T19:20:30Z".
     */
    registered?: string;
    /**
     * The GMT time when the isRegistered parameter was set to true in Unix time format, including milliseconds.
     */
    registeredTimestamp?: number;
    /**
     * A string representing the source of the registration. Can be used to set varying destination pages in accounts.setPolicies.
     */
    regSource?: string;
    /**
     * A comma-separated list of the names of the providers to which the user is connected/logged in.
     */
    socialProviders?: string;
    /**
     * The user's subscription information.
     */
    subscriptions?: SubscriptionsSchema;
    /**
     * The UTC time when the isVerified parameter was set to true in ISO 8601 format, e.g., "1997-07-16T19:20:30Z".
     */
    verified?: string;
    /**
     * The GMT time when the isVerified parameter was set to true in Unix time format including milliseconds (i.e., the number of seconds since Jan. 1st 1970 * 1000).
     */
    verifiedTimestamp?: number;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413d28b670b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsWebhooksDeleteRequest = GigyaRequest<{
    /**
     * The name of the webhook to delete.
     */
    name: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413d28b670b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsWebhooksDeleteResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413d3bbe70b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsWebhooksGetAllRequest = GigyaRequest<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413d3bbe70b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsWebhooksGetAllResponse = GigyaResponse<{
    /**
     * An array of webhook objects.
     */
    webhooks?: GigyaWebhook[];
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413d4eeb70b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsWebhooksGetStatusRequest = GigyaRequest<{
    /**
     * The callback URL to which webhook notifications are delivered. This value is case-sensitive.
     */
    url: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413d4eeb70b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsWebhooksGetStatusResponse = GigyaResponse<{
    /**
     * An object that indicates the status of the webhook.
     */
    webhookStatus?: {
        /**
         * The code of the received status.
         */
        statusCode: number;
        /**
         * The time at which the notification service attempted to send the event to the specified URL. This will not appear if the message is "No Webhook activity was found".
         */
        lastSent: string;
        /**
         * Details related to the status. This will not be displayed in the case of a "200" (OK) response.
         */
        message: string;
    };
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413d61fc70b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsWebhooksSetRequest = GigyaRequest<{
    /**
     * The callback URL to which webhook notifications will be delivered. This must be unique per site and HTTPS.
     *
     * When updating the URL for an existing webhook, allow some time for the new URL to update and make sure it is updated in the system, before removing the previously used URL.
     */
    url: string;
    /**
     * The event types to receive notifications for.
     *
     * Possible values for Accounts are:
     * - accountCreated
     * - accountRegistered
     * - accountUpdated
     * - accountLoggedIn
     * - accountDeleted
     * - accountLockedOut
     * - accountMerged
     * - accountProgressed
     * - accountUidChanged
     * - sitePreferencesReset
     * - subscriptionUpdated
     *
     * Possible values for Groups Management are:
     * - modelCreated
     * - modelUpdated
     * - groupCreated
     * - groupUpdated
     * - groupDeleted
     * - memberAdded
     * - memberUpdated
     * - memberRemoved
     *
     * In addition, the following B2B Organization Management B2B Organization Management webhooks are supported:
     * - organizationRequested
     * - organizationEnteredDraftStage
     * - organizationEnteredApprovalWorkflow
     * - organizationActivated
     * - organizationSuspended
     * - organizationRejected
     * - organizationWorkflowEnabled
     * - organizationDeleted
     * - organizationUpdated
     * - organizationMemberAdded
     * - organizationMemberRemoved
     *
     * Pass multiple event types as a comma separated string or pass multiple event types as an array.
     */
    events: string[] | string;
    /**
     * The name of the webhook. This can be up to 100 characters long and must be unique per site.
     */
    name: string;
    /**
     * Indicates whether the current webhook is active. When set to false, notifications will not be sent to this webhook.
     */
    active: boolean;
    /**
     * The user or application key whose secret is used to sign the notification.
     */
    signingUserKey: string;
    /**
     * The userKey secret.
     */
    secret: string;
    /**
     * A list of name-value pairs of custom HTTP headers defined for this webhook.
     */
    headers?: {
        name: string;
        value: string;
    }[];
    /**
     * The version of the Webhooks service to use with this webhook. Supported values:
     * - 2.0: Support for using webhooks with Global Access, includes the following:
     *   - Sign the webhook notifications with a JWT. For more information, see Validate A JWT from SAP Customer Data Cloud.
     *   - Webhooks can be verified with the accounts.getJWTPublicKey.
     *   - Version 2.0 adds the API key of the site that initiated the notification to the webhook payload, supporting site group scenarios where an event should be triggered only when a webhook was initiated from a specific site. endpoint without having to exchange secrets with the webhook recipient. Maximum number of multiple events sent in a single webhook message is 100.
     * - 3.0: Supports the following:
     *   - Only for accountCreated, accountRegistered, accountUpdated events, adds to the webhook event payload the parameters of the API call that triggered the webhook. This is optional, see “include” parameter below.
     *   - Webhooks messages above certain message length are sent gzip-compressed.
     *   - Maximum number of multiple events sent in a single webhook message is 500.
     */
    version: '2.0' | '3.0';
    /**
     * Only applicable to version 3.0.
     *
     * Comma-delimited strings. Currently only supports the string “params”. Use to include the “params” section in the webhook message payload.
     *
     * If this field is missing or null, then the “params” section is not added to the webhook payload.
     */
    include?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413d61fc70b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsWebhooksSetResponse = GigyaResponse<{}>;

export type GigyaAccountsNamespace<
    DataSchema extends GigyaData,
    PreferencesSchema extends GigyaPreferences,
    SubscriptionsSchema extends GigyaSubscriptions,
> = {
    /**
     * This API adds emails to a user's account.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/23e5e21ad35f4c85b98ce39e895e5f24.html
     */
    addEmails: (params: AccountsAddEmailsRequest) => Promise<AccountsAddEmailsResponse>;

    /**
     * This API communicates with SAP Data Quality Management, microservices for location data. SAP Customer Data Cloud calls this API to receive a list of countries including their ISO codes and numeric codes.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/40e8d65874d4480eb1ed7ff105351cbd.html
     */
    'address.countries.get': (
        params: AccountsAddressCountriesGetRequest,
    ) => Promise<AccountsAddressCountriesGetResponse>;

    /**
     * This API communicates with SAP Data Quality Management, microservices for location data.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/6fa4e911e0f245bbb185cb662d1132a4.html
     */
    'address.suggestions.get': (
        params: AccountsAddressSuggestionsGetRequest,
    ) => Promise<AccountsAddressSuggestionsGetResponse>;

    /**
     * This API retrieves the authentication methods associated to a specific user when using a custom identifier with an aToken or identifier.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/b92c0c7ffc954155ac5a2d5509ceada4.html
     */
    'auth.getMethods': (params: AccountsAuthGetMethodsRequest) => Promise<AccountsAuthGetMethodsResponse>;

    /**
     * This API returns the current Magic Link configuration for the site.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/a330ee71b4f84843a393c1935667e39a.html
     */
    'auth.magiclink.email.getConfig': (
        params: AccountsAuthMagicLinkEmailGetConfigRequest,
    ) => Promise<AccountsAuthMagicLinkEmailGetConfigResponse>;

    /**
     * This API is designed for use with campaign marketing emails. It returns a Magic Link for the user that can have an expiration of up to 60 days which allows it to be inserted into marketing emails, allowing the user a single-click login experience.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/71880e97f2d54fe596d506662818f0a1.html
     */
    'accounts.auth.magiclink.getlink': (
        params: AccountsAuthMagicLinkGetLinkRequest,
    ) => Promise<AccountsAuthMagicLinkGetLinkResponse>;

    /**
     * This API logs the user in when using magiclink (after using accounts.auth.magiclink.email.send).
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/465e0de25d684993a481515ff707d86f.html
     */
    'auth.magiclink.email.login': (
        params: AccountsAuthMagicLinkEmailLoginRequest,
    ) => Promise<AccountsAuthMagicLinkEmailLoginResponse>;

    /**
     * This API initiates Magic Link login by sending an email to the specified email address.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/47006b8cd6ec4292b8fa6321a90328b7.html
     */
    'auth.magiclink.email.send': (
        params: AccountsAuthMagicLinkEmailSendRequest,
    ) => Promise<AccountsAuthMagicLinkEmailSendResponse>;

    /**
     * This API enables or disables magic Link for a site and defines the configuration.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/216a91f008db4ac2bb1dafd66848631f.html
     */
    'auth.magiclink.email.setConfig': (
        params: AccountsAuthMagicLinkEmailSetConfigRequest,
    ) => Promise<AccountsAuthMagicLinkEmailSetConfigResponse>;

    /**
     * This API creates an access token after the user validates an OTP code. This access token is used to support a reset password flow.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/3e22c136de714dee858e4fc3fcc07e6e.html
     */
    'auth.otp.authenticate': (
        params: AccountsAuthOTPAuthenticateRequest,
    ) => Promise<AccountsAuthOTPAuthenticateResponse>;

    /**
     * This API retrieves the current configuration of Email OTP from the apiKey.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/b43af07811fd47d192082b3fcf29e82c.html
     */
    'auth.otp.email.getConfig': (
        params: AccountsAuthOTPEmailGetConfigRequest,
    ) => Promise<AccountsAuthOTPEmailGetConfigResponse>;

    /**
     * This method is used to log in users via OTP (one-time password).
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/c64edbe9973c4cbdb9bc623ba363f73c.html
     */
    'auth.otp.email.login': (params: AccountsAuthOTPEmailLoginRequest) => Promise<AccountsAuthOTPEmailLoginResponse>;

    /**
     * This method is used to trigger an OTP Login flow. It accepts the user's email, returns a vToken, and sends an authentication code to the user.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/f067d24087f84174abae20c20a46f827.html
     */
    'auth.otp.email.sendCode': (
        params: AccountsAuthOTPEmailSendCodeRequest,
    ) => Promise<AccountsAuthOTPEmailSendCodeResponse>;

    /**
     * This API enables or disables Email One-Time Password for the site
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/2992c8277a72467caa31988bfc7cd57f.html
     */
    'auth.otp.email.setConfig': (
        params: AccountsAuthOTPEmailSetConfigRequest,
    ) => Promise<AccountsAuthOTPEmailSetConfigResponse>;

    /**
     * This API verifies that an end-user has possession of the email account or phone number that a one-time password (code) was sent to and marks the device as verified in their account.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/523e76306db34a19be9199fab59b31df.html
     */
    'auth.otp.verify': (params: AccountsAuthOTPVerifyRequest) => Promise<AccountsAuthOTPVerifyResponse>;

    /**
     * This method is used to get the configuration of vendors for Push Authentication.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4131785a70b21014bbc5a10ce4041860.html
     */
    'auth.push.config.get': (params: AccountsAuthPushConfigGetRequest) => Promise<AccountsAuthPushConfigGetResponse>;

    /**
     * This method is used to configure the vendors for Push Authentication.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41318c2170b21014bbc5a10ce4041860.html
     */
    'auth.push.config.set': (params: AccountsAuthPushConfigSetRequest) => Promise<AccountsAuthPushConfigSetResponse>;

    /**
     * This API is used by a mobile app in a push authentication scenario, to notify SAP Customer Data Cloud that the user has authenticated successfully. The API may only be called for an authenticated user with an active session.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4131cb2570b21014bbc5a10ce4041860.html
     */
    'auth.push.verify': (params: AccountsAuthPushVerifyRequest) => Promise<AccountsAuthPushVerifyResponse>;

    /**
     * accounts.B2B.xxx
     *
     * @TODO: Add the accounts.B2B.xxx API methods
     */

    /**
     * accounts.communication.xxx
     *
     * @TODO: Add the accounts.communication.xxx API methods
     */

    /**
     * This method deletes the specified user's account from SAP Customer Data Cloud's database.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4133a29470b21014bbc5a10ce4041860.html
     */
    deleteAccount: (params: AccountsDeleteAccountRequest) => Promise<AccountsDeleteAccountResponse>;

    /**
     * This API deletes a consent statement that exists in SAP Customer Data Cloud. This deletes the consent statement across all locations inSAP Customer Data Cloud where it is listed (Audit Log, User Profile, etc.), and including all the APIs.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/2782415067b047b7bf10a1439d3e67ce.html
     */
    deleteConsentStatement: (
        params: AccountsDeleteConsentStatementRequest,
    ) => Promise<AccountsDeleteConsentStatementResponse>;

    /**
     * This method deletes a version of a legal statement associated with a consent statement. Only versions in draft status may be deleted.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/2b289e32fa544c76850afb7e78b5d92f.html
     */
    deleteLegalStatements: (
        params: AccountsDeleteLegalStatementsRequest,
    ) => Promise<AccountsDeleteLegalStatementsResponse>;

    /**
     * This method deletes a lite account from SAP Customer Data Cloud's database.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4133b5e170b21014bbc5a10ce4041860.html
     */
    deleteLiteAccount: (params: AccountsDeleteLiteAccountRequest) => Promise<AccountsDeleteLiteAccountResponse>;

    /**
     * This method deletes a Native Screen-Sets (NSS) hosted by SAP Customer Data Cloud. Native screen-sets are used to quickly integrate SAP Customer Data Cloud CIAM capabilities to your mobile apps.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/baaff4ff759d42f48464341ae167dd98.html
     */
    deleteNativeScreenSet: (
        params: AccountsDeleteNativeScreenSetRequest,
    ) => Promise<AccountsDeleteNativeScreenSetResponse>;

    /**
     * This method deletes a custom data field from the schema. Once a field is deleted:
     * - You cannot save data to that field, nor retrieve data that was saved to that field.
     * - You cannot recreate a field of the same name in the schema.
     * - If you have reached your schema field limit, you may delete an unused field to create a new one.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4133c8e670b21014bbc5a10ce4041860.html
     */
    deleteSchemaFields: (params: AccountsDeleteSchemaFieldsRequest) => Promise<AccountsDeleteSchemaFieldsResponse>;

    /**
     * This method deletes a screen-set hosted by Gigya.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4133dbe070b21014bbc5a10ce4041860.html
     */
    deleteScreenSet: (params: AccountsDeleteScreenSetRequest) => Promise<AccountsDeleteScreenSetResponse>;

    /**
     * This method is used by a mobile app to register a user's device on SAP Customer Data Cloud in a passwordless authentication flow, such as Push Authentication. The method may only be called for an authenticated user with an active session.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4133eee870b21014bbc5a10ce4041860.html
     */
    'devices.register': (params: AccountsDevicesRegisterRequest) => Promise<AccountsDevicesRegisterResponse>;

    /**
     * This method is used by a mobile app to unregister a user's device on SAP Customer Data Cloud in a passwordless authentication flow, such as Push Authentication. The method may only be called for an authenticated user with an active session.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4134062c70b21014bbc5a10ce4041860.html
     */
    'devices.unregister': (params: AccountsDevicesUnregisterRequest) => Promise<AccountsDevicesUnregisterResponse>;

    /**
     * This method is used by a mobile app to update a user's device on SAP Customer Data Cloud in a passwordless authentication flow, such as Push Authentication. The method may only be called for an authenticated user with an active session.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4134192b70b21014bbc5a10ce4041860.html
     */
    'devices.update': (params: AccountsDevicesUpdateRequest) => Promise<AccountsDevicesUpdateResponse>;

    /**
     * This method returns a partial copy of existing legal statement from SAP Customer Data Cloud. It returns only custom data and versions or dates fields. You can use the response to create a new statement version by calling accounts.setLegalStatement.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/d3eed592164c4b5f9ae2e8f8a8f14214.html
     */
    duplicateLegalStatement: (
        params: AccountsDuplicateLegalStatementRequest,
    ) => Promise<AccountsDuplicateLegalStatementResponse>;

    /**
     * This method is used to update the email associated to the emailAccount to the email of an existing full account. This API is part of the Accounts and Email Accounts Sync flow.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/78e703f2aee64dc99e883378cea0a148.html
     */
    'emailAccount.changeEmail': (
        params: AccountsEmailAccountChangeEmailRequest,
    ) => Promise<AccountsEmailAccountChangeEmailResponse>;

    /**
     * This method is used to update the UID or email associated to the emailAccount based on the following rules:
     * - Search existing full accounts with the same email address as the emailAccount. If there is a match by email then:
     *      - If this is a single match then set emailAccount UID to the matching full account UID
     *      - If there are multiple matches then:
     *          - If only one full account is registered then set emailAccount UID to the matching full account UID.
     *          - If multiple full accounts are registered then set emailAccount UID to the last updated registered full account UID.
     *          - If all match unregistered full accounts then set emailAccount UID to the last updated unregistered full account UID.
     * - Else, search existing full accounts with the same UID. If there is a match then set the emailAccount email to the full account profile.email
     * - Else, if isLite flag is false then delete emailAccount
     * - Else do nothing
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/486489efe27c46deab810c0f15e81afb.html
     */
    'emailAccount.syncMultipleAccounts': (
        params: AccountsEmailAccountSyncMultipleAccountsRequest,
    ) => Promise<AccountsEmailAccountSyncMultipleAccountsResponse>;

    /**
     * This method is used to update the UID associated to the emailAccount to the UID of an existing full account.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/a5585b0870144adfb1f043726fc6dc98.html
     */
    'emailAccount.syncUid': (
        params: AccountsEmailAccountSyncUIDRequest,
    ) => Promise<AccountsEmailAccountSyncUIDResponse>;

    /**
     * This method allows sites integrating 3rd party plugins to validate the UID of a logged-in user. More specifically, it provides a means for 3rd party plugins to authenticate a user when the plugin does not have access to the site secret.
     *
     * When using signatures with a Gigya user key or Gigya Application key, you must use this API to exchange the received signature, default signature validation always uses the Partner secret, not a user or application key secret.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41342c3970b21014bbc5a10ce4041860.html
     */
    exchangeUIDSignature: (
        params: AccountsExchangeUIDSignatureRequest,
    ) => Promise<AccountsExchangeUIDSignatureResponse>;

    /**
     * This API creates a new empty and disabled Identity Extensibility Extension. You can only have a single Extension for any available Extension Point. Attempting to use this API when an extension already exists will return an error; you must first use extensions.delete to remove the existing endpoint.
     *
     * @note This API call cannot be made on a child site.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41343f7b70b21014bbc5a10ce4041860.html
     */
    'extensions.create': (params: AccountsExtensionsCreateRequest) => Promise<AccountsExtensionsCreateResponse>;

    /**
     * When called on an existing extension of a standalone site or parent site, this call deletes the extension.
     *
     * When called on the extension of a child site, this call reverts the extension's configuration for that site to that of the corresponding extension on the parent site, and any further changes to the extension's configuration on the parent site will be automatically inherited by the child site.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4134526e70b21014bbc5a10ce4041860.html
     */
    'extensions.delete': (params: AccountsExtensionsDeleteRequest) => Promise<AccountsExtensionsDeleteResponse>;

    /**
     * This API returns a specific Identity Extensibility Extension by it's id.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4134656770b21014bbc5a10ce4041860.html
     */
    'extensions.get': (params: AccountsExtensionsGetRequest) => Promise<AccountsExtensionsGetResponse>;

    /**
     * This API returns a list of all Identity Extensibility Extensions currently defined for a site.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4134785270b21014bbc5a10ce4041860.html
     */
    'extensions.list': (params: AccountsExtensionsListRequest) => Promise<AccountsExtensionsListResponse>;

    /**
     * This API modifies an existing extension. Any parameters not updated will remain unchanged.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41348b7a70b21014bbc5a10ce4041860.html
     */
    'extensions.modify': (params: AccountsExtensionsModifyRequest) => Promise<AccountsExtensionsModifyResponse>;

    /**
     * This method completes on-site user registration. For registration through a social network, see accounts.socialLogin.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/228cd8bc68dc477094b3e0e9fe108e23.html
     */
    finalizeRegistration: (
        params: AccountsFinalizeRegistrationRequest,
    ) => Promise<AccountsFinalizeRegistrationResponse<DataSchema, PreferencesSchema, SubscriptionsSchema>>;

    /**
     * This method retrieves account data for the specified user.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/cab69a86edae49e2be93fd51b78fc35b.html
     */
    getAccountInfo: (
        params: AccountsGetAccountInfoRequest,
    ) => Promise<AccountsGetAccountInfoResponse<DataSchema, PreferencesSchema, SubscriptionsSchema>>;

    /**
     * This method searches for a conflicting account: an account that uses the email associated with a social identity linked to the account currently logging in.
     *
     * This method will return an error if account harvesting protection is activated.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4134d7df70b21014bbc5a10ce4041860.html
     */
    getConflictingAccount: (
        params: AccountsGetConflictingAccountRequest,
    ) => Promise<AccountsGetConflictingAccountResponse>;

    /**
     * In implementations of Consent Management, this method returns all the consent statements defined for a given site.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/660b99419e294030968610cbb27f42bf.html
     */
    getConsentStatements: (
        params: AccountsGetConsentStatementsRequest,
    ) => Promise<AccountsGetConsentStatementsResponse<PreferencesSchema>>;

    /**
     * This API allows retrieval of the public key necessary for validating an id_token returned from the accounts.getJWT API endpoint. As a public endpoint, this API requires no parameters.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41354df770b21014bbc5a10ce4041860.html
     */
    getJWTPublicKey: (params: AccountsGetJWTPublicKeyRequest) => Promise<AccountsGetJWTPublicKeyResponse>;

    /**
     * Obtains an id_token containing an existing user's data in JWS format.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41353af770b21014bbc5a10ce4041860.html
     */
    getJWT: (params: AccountsGetJWTRequest) => Promise<AccountsGetJWTResponse>;

    /**
     * This method retrieves the details of a legal statement (associated with a consent statement), including the languages, versions, purpose, custom data.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/ff175775723c4fd0ba4b7be295f6c92f.html
     */
    getLegalStatements: (params: AccountsGetLegalStatementsRequest) => Promise<AccountsGetLegalStatementsResponse>;

    /**
     * When using this API as part of the Lite Preferences Center solution, first activate your Preferences Center by setting the preferencesCenter object of accounts.setPolicies or by entering the redirectURL in the Email Templates section of the Gigya Console. For more information see Lite Preferences Center.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413560f270b21014bbc5a10ce4041860.html
     */
    getLiteToken: (params: AccountsGetLiteTokenRequest) => Promise<AccountsGetLiteTokenResponse>;

    /**
     * This method retrieves a native Screen-Set hosted by SAP Customer Data Cloud. Native screen-sets are used to quickly integrate SAP Customer Data Cloud CIAM capabilities to your mobile apps.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4135743670b21014bbc5a10ce4041860.html
     */
    getNativeScreenSet: (params: AccountsGetNativeScreenSetRequest) => Promise<AccountsGetNativeScreenSetResponse>;

    /**
     * This method retrieves all Native Screen-Sets (NSS) hosted by SAP Customer Data Cloud. Native screen-sets are used to quickly integrate SAP Customer Data Cloud CIAM capabilities to your mobile apps.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/908f6738288644d599d682b11e5eca55.html
     */
    getNativeScreenSets: (params: AccountsGetNativeScreenSetsRequest) => Promise<AccountsGetNativeScreenSetsResponse>;

    /**
     * This method retrieves account policies. Refer to the accounts.setPolicies method parameters for a detailed specification of the policies.
     *
     * When using accounts.getPolicies within a Single-Sign-On (SSO) environment, the method will return all policies that are set at the Master level and not overridden by the specific Member site being queried, as well as all the Member policies that are currently overriding the Master policies.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41359a2970b21014bbc5a10ce4041860.html
     */
    getPolicies: (params: AccountsGetPoliciesRequest) => Promise<AccountsGetPoliciesResponse>;

    /**
     * This method retrieves the schema of the Profile object and the Data object (the site specific custom data object) in Gigya's Accounts Storage. The schema defines a set of properties for static data fields. The properties act as meta-data, guiding Gigya how to handle the data in the specified fields.
     *
     * @note While a preferences object may be returned when calling this method, it should be ignored, as it may contain unreliable data relating to consent statement versions.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4135e80970b21014bbc5a10ce4041860.html
     */
    getSchema: (params: AccountsGetSchemaRequest) => Promise<AccountsGetSchemaResponse>;

    /**
     * This method retrieves one or more screen-sets hosted by Gigya.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41360e5770b21014bbc5a10ce4041860.html
     */
    getScreenSets: (params: AccountsGetScreenSetsRequest) => Promise<AccountsGetScreenSetsResponse>;

    /**
     * This API returns all effective consents (complete) for the specified site/group API key.
     *
     * This API is part of the new Consent Update which requires opt-in prior to May 30, 2022.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/13d09b52ca21463580b418599b46de64.html
     */
    getSiteConsentDetails: (
        params: AccountsGetSiteConsentDetailsRequest,
    ) => Promise<AccountsGetSiteConsentDetailsResponse>;

    /**
     * This method is used to change the resident data center of a registered user in implementations of Global Access.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4136217170b21014bbc5a10ce4041860.html
     */
    'global.changeAccountResidency': (
        params: AccountsGlobalChangeAccountResidencyRequest,
    ) => Promise<AccountsGlobalChangeAccountResidencyResponse>;

    /**
     * @TODO: accounts.groups.xxx
     *
     * @TODO: Add the accounts.groups.xxx API methods
     */

    /**
     * This API creates the necessary aToken for use with a custom identifier. For instance, when using Phone and Password login.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/bd88023234a143ce8a7a8104b79eab18.html
     */
    'identifiers.createToken': (
        params: AccountsIdentifiersCreateTokenRequest,
    ) => Promise<AccountsIdentifiersCreateTokenResponse>;

    /**
     * Provides a method to retrieve an account's UID and associated identifiers by passing any identifier associated with the account, such as:
     * - UID
     * - email
     * - username
     * - phone
     *
     * This is useful for retrieving the UID of newly created accounts that are not yet available via accounts.search REST due to caching issues. You can then use the UID returned from this request and call accounts.getAccountInfo REST.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/c50ab43072964e3ba6ab422436d000bd.html
     */
    'identifiers.find': (params: AccountsIdentifiersFindRequest) => Promise<AccountsIdentifiersFindResponse>;

    /**
     * This method imports user account data into the Accounts Storage.
     *
     * @note Imported users are not considered new users for reporting purposes.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41365a5370b21014bbc5a10ce4041860.html
     */
    importFullAccounts: (
        params: AccountsImportFullAccountRequest<DataSchema, PreferencesSchema, SubscriptionsSchema>,
    ) => Promise<AccountsImportFullAccountResponse>;

    /**
     * This method imports lite registration data into the Email Accounts storage. This method imports existing lite registrations into a new or additional database. No double opt-in emails are sent when using this method, and any registrations imported via this method are not considered new registrations for reporting purposes.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41366d8270b21014bbc5a10ce4041860.html
     */
    importLiteAccounts: (
        params: AccountsImportLiteAccountRequest<DataSchema, SubscriptionsSchema>,
    ) => Promise<AccountsImportLiteAccountResponse>;

    /**
     * This method imports a user's profile photo to Gigya's server.
     *
     * By default the imported photo is treated as a temporary photo. You can decide whether to publish the photo into the user's account, using the publish parameter (see below), or you can publish later using the accounts.publishProfilePhoto API method.
     *
     * The supported photo file types are: image/gif, image/png, image/jpeg.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413693b870b21014bbc5a10ce4041860.html
     */
    importProfilePhoto: (params: AccountsImportProfilePhotoRequest) => Promise<AccountsImportProfilePhotoResponse>;

    /**
     *  This method initializes a registration process at a site. To fully register a user to your site requires three API calls:
     *      1. accounts.initRegistration
     *      2. accounts.register
     *      3. accounts.finalizeRegistration
     *
     *  The method returns a regToken (registration token) in the response, which is required when calling accounts.register/ accounts.finalizeRegistration/ accounts.linkAccounts.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4136e1f370b21014bbc5a10ce4041860.html
     */
    initRegistration: (params: AccountsInitRegistrationRequest) => Promise<AccountsInitRegistrationResponse>;

    /**
     * This method checks whether a certain login identifier (username / email) is available. A login identifier is available if it is unique in this user management system.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41370be670b21014bbc5a10ce4041860.html
     */
    isAvailableLoginID: (params: AccountsIsAvailableLoginIDRequest) => Promise<AccountsIsAvailableLoginIDResponse>;

    /**
     * This method merges the account identified by the provided UID with the account identified by the provided login credentials (loginID + password). The method first validates the login credentials, then merges the data and social connections from both accounts into one account.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/2a4dabf377414d0b92a29ffba5f0970a.html
     */
    linkAccounts: (
        params: AccountsLinkAccountsRequest,
    ) => Promise<AccountsLinkAccountsResponse<DataSchema, PreferencesSchema, SubscriptionsSchema>>;

    /**
     * This method logs a user into your site and opens a session for the logged-in user on success. If a userkey/secret pair is not passed in this request it is treated as a client-side call and all client-side rate limits will apply, regardless if the request came from a server.
     *
     * @note When receiving the response from this API, make sure to create a session cookie, using data contained in the returned sessionInfo object, so as to maintain the client application synchronized with the user state. The response includes data fields specifying the name, content, and location of the session cookie. Make sure that the page following the login includes SAP Customer Data Cloud's library that is, gigya.js, in order for SAP Customer Data Cloud to read the cookie before it expires. If you are using an ajax-based site login (no page refresh after logging in), make a call to socialize.refreshUI after setting the session cookie so that SAP Customer Data Cloud is able to process the authorization before it expires.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/683844d3c4b54104b2201efffdf558e3.html
     */
    login: (
        params: AccountsLoginRequest,
    ) => Promise<AccountsLoginResponse<DataSchema, PreferencesSchema, SubscriptionsSchema>>;

    /**
     * This method logs out the specified user from your site or site group across all devices and terminates any active sessions and revokes any active OIDC refresh tokens.
     *
     * Please note, that this method does not disconnect the user from the social providers, the user's site account remains associated with any connected social accounts, even when logged out. When the user logs in again, full access to all the previously connected providers is restored, i.e. the association remains.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41376ba570b21014bbc5a10ce4041860.html
     */
    logout: (params: AccountsLogoutRequest) => Promise<AccountsLogoutResponse>;

    /**
     * This method notifies SAP Customer Data Cloud of an external login that happened outside of the Accounts system.
     *
     * The notifyLogin call registers a new user in the Accounts service, in case the siteUID parameter provided is new, or reconnects a returning user in case the siteUID already exists in our records.
     *
     * @note When receiving the response from this API, make sure to create a session cookie, using data contained in the returned sessionInfo object, so as to maintain the client application synchronized with the user state. The response includes data fields specifying the name, content and location of the session cookie. Please make sure that the page following the login includes SAP Customer Data Cloud's library i.e., gigya.js, in order for SAP Customer Data Cloud to read the cookie before it expires. If you are using an ajax-based site login (no page refresh after logging in), make a call to socialize.refreshUI after setting the session cookie so that SAP Customer Data Cloud is able to process the authorization before it expires.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/bd09a6608f694a4d8461c8b0cb00a75b.html
     */
    notifyLogin: (params: AccountsNotifyLoginRequest) => Promise<AccountsNotifyLoginResponse>;

    /**
     * This method notifies Gigya of a login with a social provider that happened outside of the Accounts system. The notifySocialLogin call registers a new user, or reconnects an existing user, in the Accounts database.
     *
     * Unlike accounts.notifyLogin, there is no user data returned in this response, if you require the user's data you must call getUserInfo (mobile) or accounts.getAccountInfo (web) to receive the user data after a successful notifySocialLogin call.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413795be70b21014bbc5a10ce4041860.html
     */
    notifySocialLogin: (params: AccountsNotifySocialLoginRequest) => Promise<AccountsNotifySocialLoginResponse>;

    /**
     * This API removes the phone number from the specified account.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/8f313cc471f549d49fcc8ab3a430aea9.html
     */
    'otp.delete': (params: AccountsOTPDeleteRequest) => Promise<AccountsOTPDeleteResponse>;

    /**
     * This method is used to log in users via Phone Number Login. It requires the vToken and code returned from accounts.OTP.sendCode.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4137bbe870b21014bbc5a10ce4041860.html
     */
    'otp.login': (params: AccountsOTPLoginRequest) => Promise<AccountsOTPLoginResponse>;

    /**
     * This method is used to trigger a Phone Number Login flow, or is part of an email code verification flow. It accepts the user's phone number or email, returns a vToken, and sends an authentication code to the user.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4137e1be70b21014bbc5a10ce4041860.html
     */
    'otp.sendCode': (params: AccountsOTPSendCodeRequest) => Promise<AccountsOTPSendCodeResponse>;

    /**
     * This method is used to update a user's phone number when using Phone Number Login, or their email in an email code verification flow. It requires the vToken and code returned from accounts.OTP.sendCode. When using this method client side, an active user session is required. When calling this method server side, it requires the UID param.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413807a270b21014bbc5a10ce4041860.html
     */
    'otp.update': (params: AccountsOTPUpdateRequest) => Promise<AccountsOTPUpdateResponse>;

    /**
     * This API retrieves the current email templates configuration for the site/apiKey.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/8a7df13c9c00464a88b6e653472261ea.html
     */
    'policies.emailTemplates.getConfig': (
        params: AccountsPoliciesEmailTemplatesGetConfigRequest,
    ) => Promise<AccountsPoliciesEmailTemplatesGetConfigResponse>;

    /**
     * This API sets the html of one or more system emails for a site/apiKey.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/277d048b59634c8ca33de401290e58ca.html
     */
    'policies.emailTemplates.setConfig': (
        params: AccountsPoliciesEmailTemplatesSetConfigRequest,
    ) => Promise<AccountsPoliciesEmailTemplatesSetConfigResponse>;

    /**
     * The following information is internal, and may not be shared with customers.
     *
     * @TODO: What is this description...?
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41381aaa70b21014bbc5a10ce4041860.html
     */
    'progression.getPolicy': (
        params: AccountsProgressionGetPolicyRequest,
    ) => Promise<AccountsProgressionGetPolicyResponse>;

    /**
     * For customers who are implementing Lite Registration, this method is used to decide how to handle the data of a user who progresses from a lite to a full account.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41382da770b21014bbc5a10ce4041860.html
     */
    'progression.setPolicy': (
        params: AccountsProgressionSetPolicyRequest,
    ) => Promise<AccountsProgressionSetPolicyResponse>;

    /**
     * This method publishes the last imported profile photo if it hadn't been published previously. When published, the photo is saved in the photoURL field of the user's Profile, in addition the photo is trimmed to the size defined by the thumbnail parameter or in the site's Policies and saved in the thumbnailURL Profile field.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413840aa70b21014bbc5a10ce4041860.html
     */
    publishProfilePhoto: (params: AccountsPublishProfilePhotoRequest) => Promise<AccountsPublishProfilePhotoResponse>;

    /**
     * This API gets the RBA (Risk-Based Authentication) policy for a site or master site of a group. If the requested API key belongs to a child site of a site-group, the Parent's policy is returned. If no existing custom policy is currently specified, the default policy is returned.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413853eb70b21014bbc5a10ce4041860.html
     */
    'rba.getPolicy': (params: AccountsRBAGetPolicyRequest) => Promise<AccountsRBAGetPolicyResponse>;

    /**
     * Use this method to lock a user account, based on their UID, loginID or IP address, for a specified time period.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413866d370b21014bbc5a10ce4041860.html
     */
    'rba.lock': (params: AccountsRBALockRequest) => Promise<AccountsRBALockResponse>;

    /**
     * This API retrieves a list of all SDK types and their versions supported on the site. This might be needed if you want to increase site security by blocking calls coming from old, empty, or non-existing SDK calls. For more information, see SDK Management.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/ee51584c371945a799d4f7d9cbeb77e1.html
     */
    'rba.sdkConfiguration.get': (
        params: AccountsRBASDKConfigurationGetRequest,
    ) => Promise<AccountsRBASDKConfigurationGetResponse>;

    /**
     * This API sets the RBA (Risk-Based Authentication) policy for a site or master site of a group.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413879cb70b21014bbc5a10ce4041860.html
     */
    'rba.setPolicy': (params: AccountsRBASetPolicyRequest) => Promise<AccountsRBASetPolicyResponse>;

    /**
     * This API unlocks either the specified user's account or the specified IP, depending upon which parameters are passed.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41388cd270b21014bbc5a10ce4041860.html
     */
    'rba.unlock': (params: AccountsRBAUnlockRequest) => Promise<AccountsRBAUnlockResponse>;

    /**
     * This method registers a new user at your site, in accordance with the predefined site Policies and the Schema of the Accounts Storage. The accounts.register call is followed by accounts.finalizeRegistration, unless the finalizeRegistration parameter of accounts.register is set to 'true' (in which case there is no need to call accounts.finalizeRegistration).
     *
     * A regToken (registration token), generated by accounts.initRegistration, is not required when using this method server-side, with a signed request.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/1fe26c820cd145cd8c927a497c33d935.html
     */
    register: (
        params: AccountsRegisterRequest<DataSchema, PreferencesSchema, SubscriptionsSchema>,
    ) => Promise<AccountsRegisterResponse<DataSchema, PreferencesSchema, SubscriptionsSchema>>;

    /**
     * This API removes emails from a user's account.
     *
     * @note This API call doesn't affect the profile email or login IDs. To change the profile email or login IDs, use the accounts.setAccountInfo REST API call.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/d5d894b89e3f41e885d322bcaee36bea.html
     */
    removeEmails: (params: AccountsRemoveEmailsRequest) => Promise<AccountsRemoveEmailsResponse>;

    /**
     * This method is used to resend an email in a subscription flow that requires double opt-in. Note that this method is currently not supported for global sites.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4138cb4370b21014bbc5a10ce4041860.html
     */
    resendDOIConfirmationEmail: (
        params: AccountsResendDOIConfirmationEmailRequest,
    ) => Promise<AccountsResendDOIConfirmationEmailResponse>;

    /**
     * For implementations of Customer Consent, this method is used to reset the preferences (consent statement status) of a registered site user, on a child site in a site group, for all the consent statements including any mandatory consent statements to which they have agreed. Note that this will reset only consent statements that are unique to the site, i.e. will not affect statements that are active in other sites of the group. As a result of successfully calling this endpoint:
     * - Active sessions are terminated for this user
     * - The consent status for this user is withdrawn for active consent statements that are unique to this site
     * - 'Site Preferences Reset' and 'Account Updated' webhooks are fired
     * - The event is registered in the audit log
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413917bf70b21014bbc5a10ce4041860.html
     */
    resetSitePreferences: (
        params: AccountsResetSitePreferencesRequest,
    ) => Promise<AccountsResetSitePreferencesResponse>;

    /**
     * This method is used to resend an email in a subscription flow that requires double opt-in. Note that this method is currently not supported for global sites.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4138cb4370b21014bbc5a10ce4041860.html
     */
    resendVerificationCode: (
        params: AccountsResendVerificationCodeRequest,
    ) => Promise<AccountsResendVerificationCodeResponse>;

    /**
     * This method resets a user's password, either via email or directly. The email format is according to the templates defined in the site policy. For more information on the email format, refer to account.setPolicies or to the Password Reset Email section of the User Management Policies guide.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/559574624b634e5a955e0f7eeba01c07.html
     */
    resetPassword: (params: AccountsResetPasswordRequest) => Promise<AccountsResetPasswordResponse>;

    /**
     * Searches and retrieves data from SAP Customer Data Cloud's Accounts Storage using an SQL-like query. SQL queries are converted intoSAP Customer Data Cloud's proprietary query language. SQL injection attacks are not possible because queries are both created by the customer and then converted by SAP Customer Data Cloud.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/b32ce0918af44c3ebd7e96650fa6cc1d.html
     */
    search: (
        params: AccountsSearchRequest,
    ) => Promise<AccountsSearchResponse<DataSchema, PreferencesSchema, SubscriptionsSchema>>;

    /**
     * This external API triggers an email from the Gigya server to the email address registered to a lite account. The email contains a clickable link and verifies that the email belongs to the user. The user may click the link to receive an access token that is sent with the user to the page you defined as your Lite Preference Center. The Screen-Sets hosted in your Lite Preference Center will read and validate this token and, on success, allow the user to access and edit their data.
     *
     * @seehttps://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4139643c70b21014bbc5a10ce4041860.html
     */
    sendLiteInvite: (params: AccountsSendLiteInviteRequest) => Promise<AccountsSendLiteInviteResponse>;

    /**
     * This API can be used to determine if a given token is valid (received from socialize.getToken).
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/6e5f013e6369493091d086c56d842862.html
     */
    'session.verify': (params: AccountsSessionVerifyRequest) => Promise<AccountsSessionVerifyResponse>;

    /**
     * This method sets account data into a user's account. The method accepts a list of optional parameters each defining a field/object in the account. The parameters that are passed in the request modify the relevant fields, and the other fields remain unchanged.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41398a8670b21014bbc5a10ce4041860.html
     */
    setAccountInfo: (
        params: AccountsSetAccountInfoRequest<DataSchema, PreferencesSchema, SubscriptionsSchema>,
    ) => Promise<AccountsSetAccountInfoResponse>;

    setProfilePhoto: (params: AccountsSetProfilePhotoRequest) => Promise<AccountsSetProfilePhotoResponse>;

    /**
     * This method enables you to customize your site schema for SAP Customer Data Cloud Accounts Storage.
     *
     * @note The writeAccess values clientCreate & clientModify on the Accounts schema are relevant only for full accounts. On Lite Registrationaccounts, there is no differentiation between clientCreate and clientModify, and the system treats both as clientModify. Thus, on Lite Registration accounts it's advised to use only the createModify and serverOnly values.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413a0faa70b21014bbc5a10ce4041860.html
     */
    setSchema: (params: AccountsSetSchemaRequest) => Promise<AccountsSetSchemaResponse>;

    /**
     * This method updates a screen-set hosted by Gigya, or creates it if it does not exist.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413a22ad70b21014bbc5a10ce4041860.html
     */
    setScreenSet: (params: AccountsSetScreenSetRequest) => Promise<AccountsSetScreenSetResponse>;

    /**
     * This API retrieves the multi-language SMS templates defined for the site.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/215367b5a1604283899d505811964492.html
     */
    'sms.templates.get': (params: AccountsSMSTemplatesGetRequest) => Promise<AccountsSMSTemplatesGetResponse>;

    /**
     * This API updates text templates for the SMS messages sent out to users as part of their site journey, if these already exist in the site, or create them, if they do not exist.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/bde4427de0f44ca2b5a3e816d5e3a7bb.html
     */
    'sms.templates.set': (params: AccountsSMSTemplatesSetRequest) => Promise<AccountsSMSTemplatesSetResponse>;

    /**
     * This API retrieves the configuration of an SMS provider at site level that was set by accounts.sms.config.set REST.
     *
     * This API retrieves the lowest level of configuration that exists: site  site group  partner. If a config at the lowest level (site level) exists, SAP Customer Data Cloud retrieves this one. Otherwise, SAP Customer Data Cloud retrieves a configuration from a higher level (site group or partner level).
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/96386b7e9d3f4dd2ba6db6ae17636f42.html
     */
    'sms.config.get': (params: AccountsSMSConfigGetRequest) => Promise<AccountsSMSConfigGetResponse>;

    /**
     * This API sets the configuration of an SMS provider at site level.
     *
     * If no configuration at site level exists, SAP Customer Data Cloud saves the new configuration (smsProviderConfig). Saving the smsProviderConfig fails, if the vendor name or credentials are missing.
     *
     * If smsProviderConfig already exists, and you call accounts.sms.config.set REST again, SAP Customer Data Cloud overwrites the existing smsProviderConfig.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/2f7844ac20964d0a90154d2e7982715d.html
     */
    'sms.config.set': (params: AccountsSMSConfigSetRequest) => Promise<AccountsSMSConfigSetResponse>;

    /**
     * This method serves as an end point for user authentication using the user's social network or webmail account. This method requires user interaction. To login/register the user to your site, redirect the user to the specified URL and pass the required parameters. The login URL shows the login screen of the requested provider. In some cases, such as Facebook login, users will also be asked to give the site permission to access their personal data.
     *
     * When the login process completes - either successfully or with error - the Gigya server redirects the user to the URL defined in the redirect_uri parameter and appends response parameters. Read more in Using Gigya's REST API in compliance with OAuth 2.0.
     *
     * You can also perform this operation using the Web SDK method accounts.socialLogin.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413a6e9d70b21014bbc5a10ce4041860.html
     */
    socialLogin: (params: AccountsSocialLoginRequest) => Promise<AccountsSocialLoginResponse>;

    /**
     * This method is used to download a consent document into the SAP Customer Data Cloud "accounts" storage, when implementing Customer Consent.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413a81a770b21014bbc5a10ce4041860.html
     */
    'store.downloadConsentDocument': (
        params: AccountsStoreDownloadConsentDocumentRequest,
    ) => Promise<AccountsStoreDownloadConsentDocumentResponse>;

    /**
     * This method is used to upload a consent document into the SAP Customer Data Cloud "accounts" storage, when implementing Customer Consent.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413a94a470b21014bbc5a10ce4041860.html
     */
    'store.uploadConsentDocument': (
        params: AccountsStoreUploadConsentDocumentRequest,
    ) => Promise<AccountsStoreUploadConsentDocumentResponse>;

    /**
     * This API creates a new stream for retrieving account updates via accounts.stream.read REST.
     *
     * The stream returns a sorted list of changes made to accounts in a specific site group, in time order of application, Only the most recent change for a given account is guaranteed to be provided, for example if an account has had fields added, and then deleted, the API will not necessarily receive the intermediate state of the added account.
     *
     * The updates stream can be used to listen for modifications of accounts for post processing or synchronization, a continuously polling of the updates stream is a reasonable approach for generating a real-time log for most applications.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/de20e73c5f0e4df0bc5ab38e2717f494.html
     */
    'stream.create': (params: AccountsStreamCreateRequest) => Promise<AccountsStreamCreateResponse>;

    /**
     * This API retrieves a list of the latest actions performed in your site.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/cbf4b101bc1d427da0e257e364da1c36.html
     */
    'stream.read': (params: AccountsStreamReadRequest) => Promise<AccountsStreamReadResponse>;

    /**
     * This method is part of a two-factor authentication (TFA) flow and is used to generate backup codes for use in a time-based authentication flow. Note that TFA is part of Risk Based Authentication (RBA).
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413abafd70b21014bbc5a10ce4041860.html
     */
    'tfa.backupcodes.create': (
        params: AccountsTFABackupCodesCreateRequest,
    ) => Promise<AccountsTFABackupCodesCreateResponse>;

    /**
     * This method is part of a two-factor authentication (TFA) flow and is used to retrieve backup codes saved for a user in a time-based authentication flow. Note that TFA is part of Risk Based Authentication (RBA).
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413ace4a70b21014bbc5a10ce4041860.html
     */
    'tfa.backupcodes.get': (params: AccountsTFABackupCodesGetRequest) => Promise<AccountsTFABackupCodesGetResponse>;

    /**
     * This method is part of a two-factor authentication (TFA) flow and is triggered after the user submits a backup code in a time-based authentication flow. It verifies the code against the secret saved to this user's account, and is followed by accounts.tfa.finalizeTFA. Note that TFA is part of Risk Based Authentication (RBA).
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413ae15570b21014bbc5a10ce4041860.html
     */
    'tfa.backupcodes.verify': (
        params: AccountsTFABackupCodesVerifyRequest,
    ) => Promise<AccountsTFABackupCodesVerifyResponse>;

    /**
     * This method deactivates a provider for the user across all devices. This method may only be called when the user is fully logged in (not in any "pending state").
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413af46770b21014bbc5a10ce4041860.html
     */
    'tfa.deactivateProvider': (
        params: AccountsTFADeactivateProviderRequest,
    ) => Promise<AccountsTFADeactivateProviderResponse>;

    /**
     * When implementing Risk Based Authentication Two-factor authentication, this method verifies that the verification code entered by the user matches the code that was sent to their email address (saved in a token on the Gigya server). It returns a provider assertion to be passed on to accounts.tfa.finalizeTFA for completing the authentication process.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413b0b7d70b21014bbc5a10ce4041860.html
     */
    'tfa.email.completeVerification': (
        params: AccountsTFAEmailCompleteVerificationRequest,
    ) => Promise<AccountsTFAEmailCompleteVerificationResponse>;

    /**
     * When implementing Risk Based Authentication, this method returns the list of verified emails for a user, to use in a second-factor authentication flow.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413b1e8a70b21014bbc5a10ce4041860.html
     */
    'tfa.email.getEmails': (params: AccountsTFAEmailGetEmailsRequest) => Promise<AccountsTFAEmailGetEmailsResponse>;

    /**
     * When implementing Risk Based Authentication, this method sends a crypto-random 6-digit verification code to the specified email, as part of a two-factor authentication flow.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413b31d470b21014bbc5a10ce4041860.html
     */
    'tfa.email.sendVerificationCode': (
        params: AccountsTFAEmailSendVerificationCodeRequest,
    ) => Promise<AccountsTFAEmailSendVerificationCodeResponse>;

    /**
     * This method finalizes the two-factor authentication (TFA) flow that started with accounts.tfa.initTFA.
     *
     * The server validates the JWT token, extracts the inner secure ticket and if the flow is:
     *
     * register - the server adds the provider to the "active" providers list of the user, adds the deviceID to the list of verified devices for the user, and reports a 'tfa registration' event.
     * add - the server adds the provider to the "active" providers list of the user, but does not update the deviceID in the list of verified devices for the user, and reports a 'tfa added' event.
     * verify - the server updates/inserts the deviceID to the list of verified devices for the user, and reports a 'tfa verification' event.
     * edit - the server updates the deviceID in the list of verified devices for the user, and reports a 'tfa edited' event.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413b44d170b21014bbc5a10ce4041860.html
     */
    'tfa.finalizeTFA': (params: AccountsTFAFinalizeTFARequest) => Promise<AccountsTFAFinalizeTFAResponse>;

    /**
     * This method retrieves Gigya's PEM-encoded X.509 certificate containing an RSA public key, which can be used to verify the signature on the JWT tokens Gigya issues.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413b57d970b21014bbc5a10ce4041860.html
     */
    'tfa.getCertificate': (params: AccountsTFAGetCertificateRequest) => Promise<AccountsTFAGetCertificateResponse>;

    /**
     * This method retrieves the two-factor authentication (TFA) providers for a site and user.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413b6ced70b21014bbc5a10ce4041860.html
     */
    'tfa.getProviders': (params: AccountsTFAGetProvidersRequest) => Promise<AccountsTFAGetProvidersResponse>;

    /**
     * When implementing Risk Based Authentication, this method takes specified phones and adds them to a specified user's verified phone numbers. If this is the first phone added to this user it will also enable the provider.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413b800070b21014bbc5a10ce4041860.html
     */
    'tfa.phone.importTFA': (params: AccountsTFAImportTFARequest) => Promise<AccountsTFAImportTFAResponse>;

    /**
     * This method initializes two-factor authentication (TFA) by returning a JWT token that can be used to register with a new provider, or to verify the user using an existing provider, or to edit an existing provider.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413ba6e870b21014bbc5a10ce4041860.html
     */
    'tfa.initTFA': (params: AccountsTFAInitTFARequest) => Promise<AccountsTFAInitTFAResponse>;

    /**
     * When implementing Risk Based Authentication, this method verifies that the provided verification code matches the code in the token, and adds the phone number in the phvToken to the user's verified phones list.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413bb9ee70b21014bbc5a10ce4041860.html
     */
    'tfa.phone.completeVerification': (
        params: AccountsTFAPhoneCompleteVerificationRequest,
    ) => Promise<AccountsTFAPhoneCompleteVerificationResponse>;

    /**
     * When implementing Risk Based Authentication, this method retrieves Gigya's PEM-encoded X.509 certificate containing an RSA public key, which can be used to verify the signature on the JWT tokens Gigya issues.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413bcd4070b21014bbc5a10ce4041860.html
     */
    'tfa.phone.getCertificate': (
        params: AccountsTFAPhoneGetCertificateRequest,
    ) => Promise<AccountsTFAPhoneGetCertificateResponse>;

    /**
     * When implementing Risk Based Authentication, this method r eturns the list of phone numbers that are verified for the user. For security reasons, full phone numbers are not returned, instead, an obfuscated number (last 3 digits) and a unique ID are returned for each phone.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413be06570b21014bbc5a10ce4041860.html
     */
    'tfa.phone.getRegisteredPhoneNumbers': (
        params: AccountsTFAPhoneGetRegisteredPhoneNumbersRequest,
    ) => Promise<AccountsTFAPhoneGetRegisteredPhoneNumbersResponse>;

    /**
     * When implementing Risk Based Authentication, this method removes the given phone ID from the user's list of verified phone numbers.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413bf36d70b21014bbc5a10ce4041860.html
     */
    'tfa.phone.removePhone': (
        params: AccountsTFAPhoneRemovePhoneRequest,
    ) => Promise<AccountsTFAPhoneRemovePhoneResponse>;

    /**
     * When implementing Risk Based Authentication, this method sends a crypto-random 6-digit verification code to the specified number.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413c069e70b21014bbc5a10ce4041860.html
     */
    'tfa.phone.sendVerificationCode': (
        params: AccountsTFAPhoneSendVerificationCodeRequest,
    ) => Promise<AccountsTFAPhoneSendVerificationCodeResponse>;

    /**
     * This method is called every 3 seconds by the Web SDK to poll the SAP Customer Data Cloud service, as part of a push TFA second factor authentication flow. It is called following the sending of a push notification to a 3rd party app, to poll the service and check if the user has verified the push notification, and is thereby authenticated. When the user is verified, the response includes a providerAssertion. It is followed by accounts.tfa.finalizeTFAThe result is a push notification that appears on the user's phone.
     *
     * This method is used after a user is opted in to a device, i.e. as part of a "verify" flow and not an "optin" flow.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413c199b70b21014bbc5a10ce4041860.html
     */
    'tfa.push.isVerified': (params: AccountsTFAPushIsVerifiedRequest) => Promise<AccountsTFAPushIsVerifiedResponse>;

    /**
     * When implementing Risk Based Authentication, this method is called by an app as part of a push TFA second factor authentication opt-in flow. It is not part of a push verification flow. The result is a push notification displayed on the user's phone. This method requires an active user session.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413c2c9870b21014bbc5a10ce4041860.html
     */
    'tfa.push.optin': (params: AccountsTFAPushOptInRequest) => Promise<AccountsTFAPushOptInResponse>;

    /**
     * When implementing Risk Based Authentication, this method is called by the Web SDK to a third party app, as part of a push TFA second factor authentication flow. The result is a push notification that appears on the user's phone.
     *
     * This method is used after a user is opted in to a device, i.e. as part of a "verify" flow and not an "optin" flow.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413c3f9d70b21014bbc5a10ce4041860.html
     */
    'tfa.push.sendVerification': (
        params: AccountsTFAPushSendVerificationRequest,
    ) => Promise<AccountsTFAPushSendVerificationResponse>;

    /**
     * When implementing Risk Based Authentication, this method is part of a push TFA second factor authentication flow. It is a request sent from the application to SAP Customer Data Cloud (Gigya) after a user has approved a push notification on their device, to authorize the user's session. It may only be used when the user has an active session on the app that sent the request. When part of the first opt-in flow, it is followed by accounts.tfa.finalizeTFA. For more information see Push Notification.
     *
     * This method is part of both the opt-in, and the verification flow for push notifications.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413c529a70b21014bbc5a10ce4041860.html
     */
    'tfa.push.verify': (params: AccountsTFAPushVerifyRequest) => Promise<AccountsTFAPushVerifyResponse>;

    /**
     * This method resets the means of identification (e.g., SMS or authenticating app) used as the second step of authentication in a TFA flow for a specified user. The user will be prompted to enter a new verification method on their next login.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413c65da70b21014bbc5a10ce4041860.html
     */
    'tfa.resetTFA': (params: AccountsTFAResetTFARequest) => Promise<AccountsTFAResetTFAResponse>;

    /**
     * This method is part of a two-factor authentication (TFA) flow. It creates a Gigya assertion that contains some information about the user, the site, and the mode (whether registration or verify). It creates a secret that is expressed to the user as a QR code, used by the user for pairing their authenticating app, and a secret token, that is part of the actual authentication. Note that TFA is part of Risk Based Authentication (RBA).
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413c8bc970b21014bbc5a10ce4041860.html
     */
    'tfa.totp.register': (params: AccountsTFATOTPRegisterRequest) => Promise<AccountsTFATOTPRegisterResponse>;

    /**
     * This method is part of a two-factor authentication (TFA) flow and is triggered after the user submits the code generated by the authenticating app. It verifies the code against the secret saved to this user's account, and is followed by accounts.tfa.finalizeTFA. Note that TFA is part of Risk Based Authentication (RBA).
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413cb1cd70b21014bbc5a10ce4041860.html
     */
    'tfa.totp.verify': (params: AccountsTFATOTPVerifyRequest) => Promise<AccountsTFATOTPVerifyResponse>;

    /**
     * This method unregisters devices from the list of verified devices for the user, used in Risk-Based Authentication flows. A verified device is a device (phone or web browser) that has already been verified with an SMS, TOTP, or email verification code. The method may unregister all devices, or those with an active session.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413cc8e070b21014bbc5a10ce4041860.html
     */
    'tfa.unregisterDevice': (
        params: AccountsTFAUnregisterDeviceRequest,
    ) => Promise<AccountsTFAUnregisterDeviceResponse>;

    /**
     * When you are implementing Subscription Management, use this method to unsubscribe users from a mailing list or newsletter subscription with a one-click unsubscribe.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413cef8370b21014bbc5a10ce4041860.html
     */
    unsubscribe: (params: AccountsUnsubscribeRequest) => Promise<AccountsUnsubscribeResponse>;

    /**
     * The accounts.verifyLogin API checks user profile information against the required schema fields and site policies to ensure that all the necessary data is in place. In site groups, this is done across multiple domains. If validation passes, the user's account information is returned. If not, an error is returned.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/929ca94d9a484d7bb466d0746e449a01.html
     */
    verifyLogin: (
        params: AccountsVerifyLoginRequest,
    ) => Promise<AccountsVerifyLoginResponse<DataSchema, PreferencesSchema, SubscriptionsSchema>>;

    /**
     * This method is used to delete a webhook.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413d28b670b21014bbc5a10ce4041860.html
     */
    'webhooks.delete': (params: AccountsWebhooksDeleteRequest) => Promise<AccountsWebhooksDeleteResponse>;

    /**
     * This method is used to retrieve a list of all defined webhooks.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413d3bbe70b21014bbc5a10ce4041860.html
     */
    'webhooks.getAll': (params: AccountsWebhooksGetAllRequest) => Promise<AccountsWebhooksGetAllResponse>;

    /**
     * This method is used to check the status of a defined webhook, including the time the last bulk was sent from the Gigya servers and the status received for them from the downstream system. We recommend calling accounts.webhooks.getAll beforehand, to get the correct URL for your webhook notifications.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413d4eeb70b21014bbc5a10ce4041860.html
     */
    'webhooks.getStatus': (params: AccountsWebhooksGetStatusRequest) => Promise<AccountsWebhooksGetStatusResponse>;

    /**
     * This method is used to create a new webhook or update an existing one.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413d61fc70b21014bbc5a10ce4041860.html
     */
    'webhooks.set': (params: AccountsWebhooksSetRequest) => Promise<AccountsWebhooksSetResponse>;
};
