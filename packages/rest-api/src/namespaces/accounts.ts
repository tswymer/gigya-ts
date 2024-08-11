import { GigyaCaptchaType, GigyaRegion, GigyaRequest, GigyaResponse } from '../types/gigya-requests';
import { GigyaSubscriptions, UpdateSubscriptions } from '../types/gigya-subscriptions';
import { GigyaData, GigyaIdentity, GigyaPreferences, GigyaProfile, GigyaValidationError } from '../types/gigya-types';

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
     */
    internal?: unknown;
}>;

/**
 * This API is used to obtain an id_token containing an existing user's data in JWS format . This id_token can then be transmitted between servers, enabling a partner to share a user's data among multiple sites/API keys. You can validate the JWT using the originating site's public key returned from accounts.getJWTPublicKey.
 *
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41353af770b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsGetJWTRequest = GigyaRequest<{
    /**
     * Used to add the 'aud' claim to JWT tokens returned. The 'aud' claim tells the receivers of a JWT token which audience(s) the token is valid for. If a service receives the token but is not in the audience list, the service should reject the token.
     */
    audience?: string;
    /**
     * The UID of the user whose data is being requested. Must be a user for the site of the associated apiKey.
     */
    targetUID: string;
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
    missingFields?: string;
}>;

/**
 * This method retrieves account policies. Refer to the accounts.setPolicies method parameters for a detailed specification of the policies.
 *
 * @TODO: Type out the specific policies
 *
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
}>;

export type AccountsGetPoliciesResponse = GigyaResponse<{
    /**
     * The registration policy.
     */
    registration?: unknown;
    /**
     * The Gigya plugins policy.
     */
    gigyaPlugins?: unknown;
    /**
     * The account options policy.
     */
    accountOptions?: unknown;
    /**
     * The password complexity policy.
     */
    passwordComplexity?: unknown;
    /**
     * The email verification policy.
     */
    emailVerification?: unknown;
    /**
     * The email notifications policy.
     *
     * @note: This is not part of the official documentation currently.
     */
    emailNotifications?: unknown;
    /**
     * The password reset policy.
     */
    passwordReset?: unknown;
    /**
     * The profile photo policy.
     */
    profilePhoto?: unknown;
    /**
     * The security policy.
     */
    security?: unknown;
    /**
     * The two-factor authentication policy.
     */
    twoFactorAuth?: unknown;
    /**
     * The federation policy.
     */
    federation?: unknown;
}>;

/**
 * This method retrieves the schema of the Profile object and the Data object (the site specific custom data object) in Gigya's Accounts Storage. The schema defines a set of properties for static data fields. The properties act as meta-data, guiding Gigya how to handle the data in the specified fields.
 *
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4135e80970b21014bbc5a10ce4041860.html
 *
 * @note While a preferences object may be returned when calling this method, it should be ignored, as it may contain unreliable data relating to consent statement versions.
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
    scope?: string;
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
     * @TODO: Fix this
     * A JSON object defining the schema of the Internal Fields object. See the format details in the Internal Fields object section on the {@link https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413a0faa70b21014bbc5a10ce4041860.html accounts.setSchema REST} page.
     */
    internalSchema?: {
        fields: unknown;
    };
}>;

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
     * A string of maximum 100 characters length. The CID sets categories for transactions that can be used later for filtering reports generated by SAP Customer Data Cloud in the "Context ID" combo box. The CID allows you to associate the report information with your own internal data. For example, to identify a specific widget or page on your site/application. You should not define more than 100 different context IDs.
     */
    cid?: string;
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

export type AccountsLoginResponse = GigyaResponse<{
    /**
     * Indicates whether the user logging in is new. The parameter is returned only when it is set to "true", or when the user is missing the 'connectionIdentity' field in the DB.
     */
    isNewUser: boolean;
    /**
     * An object containing session information. The content of this object depends on the targetEnv parameter.
     *
     * By default, if the targetEnv parameter is not set (your client environment is web), the sessionInfo object contains the the following string fields: cookieName and cookieValue.
     *
     * Create a session cookie with the name and value specified by these fields.
     *
     * Alternatively, if the targetEnv parameter is set to "mobile" (your client runs on a mobile), the sessionInfo object contains the the following string fields: sessionToken and sessionSecret. Send these fields to your mobile client. On your client side, call GSAPI.setSession (using the Mobile SDK) to save them on the app's storage.
     *
     * @todo: type this out
     */
    sessionInfo: unknown;
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
     *
     * @todo: type this out
     */
    data?: GigyaData;
    /**
     * 	The email addresses belonging to the user. This includes the following fields:
     * - verified - an array of strings representing the user's verified email addresses
     * - unverified - an array of strings representing the user's unverified email addresses
     *
     * @todo: type this out
     */
    emails?: unknown;
    profile?: GigyaProfile;
}>;

/**
 * This method logs out the specified user from your site or site group across all devices and terminates any active sessions and revokes any active OIDC refresh tokens.
 *
 * Please note, that this method does not disconnect the user from the social providers, the user's site account remains associated with any connected social accounts, even when logged out. When the user logs in again, full access to all the previously connected providers is restored, i.e. the association remains.
 *
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
 * This method resets a user's password, either via email or directly. The email format is according to the templates defined in the site policy.
 *
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/559574624b634e5a955e0f7eeba01c07.html
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
    captchaType?: string;
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
 * This method sets account data into a user's account. The method accepts a list of optional parameters each defining a field/object in the account. The parameters that are passed in the request modify the relevant fields, and the other fields remain unchanged.
 *
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
 *
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
 * Searches and retrieves data from SAP Customer Data Cloud's Accounts Storage.
 *
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
    type?: 'full' | 'lite' | 'full,lite';
}>;

/**
 * @todo: This is documented in the official documentation.
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
 *  This method initializes a registration process at a site. To fully register a user to your site requires three API calls:
 *      1. accounts.initRegistration
 *      2. accounts.register
 *      3. accounts.finalizeRegistration
 *
 *  The method returns a regToken (registration token) in the response, which is required when calling accounts.register/ accounts.finalizeRegistration/ accounts.linkAccounts.
 *
 *  @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4136e1f370b21014bbc5a10ce4041860.html
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
 * This method registers a new user at your site, in accordance with the predefined site Policies and the Schema of the Accounts Storage. The accounts.register call is followed by accounts.finalizeRegistration, unless the finalizeRegistration parameter of accounts.register is set to 'true' (in which case there is no need to call accounts.finalizeRegistration).
 *
 * A regToken (registration token), generated by accounts.initRegistration, is not required when using this method server-side, with a signed request.
 *
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/1fe26c820cd145cd8c927a497c33d935.html
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
     *
     * @todo: type this out
     */
    sessionInfo?: unknown;
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
 * In implementations of Consent Management, this method returns all the consent statements defined for a given site.
 *
 * There are no parameters for this API. The statements returned are based on the API key passed in the authorization parameters.
 *
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
 * This method is the first to call in a Phone Number Login flow, and is used in an email code verification flow.
 *
 * It accepts the user's phone number or email, returns a vToken, and sends an authentication code to the user.
 *
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4137e1be70b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsOTPSendCodeRequest = GigyaRequest<{
    /**
     * The code of the language in which to send the SMS. For supported codes, see {@link https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4141d83470b21014bbc5a10ce4041860.html Advanced Customizations and Localization}.
     */
    lang: string;
    /**
     *The phone number to which the verification code is sent. This parameter is required for phone number login or update flows.
     */
    phoneNumber?: string;
    /**
     * The email to which the verification code is sent. This parameter is required for email code verification flows.
     */
    email?: string;
    /**
     * Whether or not to send the code for the phone update flow. This may be set to "false" if you choose to send an SMS via your application, instead of using the SAP Customer Data Cloud capability.
     */
    sendCode?: boolean;
    /**
     * The CAPTCHA provider configured for the site. Possible values are:
     *   - reCaptchaV2
     *   - invisible
     *   - reCaptchaV3
     *   - reCaptchaEnterpriseScore
     *   - FunCaptcha
     */
    captchaType?: GigyaCaptchaType;
    /**
     * The token returned from the CAPTCHA provider.
     */
    captchaToken?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4137e1be70b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsOTPSendCodeResponse = GigyaResponse<{
    /**
     * A secured token that holds the phone data and expires after 10 minutes. It contains the following fields:
     *   - apiKey - The API key of the site.
     *   - phoneNumber - The phone number associated with the user's account to send the SMS code.
     *   - code - The 4 digit code.
     *   - gmid - Only necessary if the method call was originated from the client-side.
     */
    vToken?: string;
    /**
     * The code used for logging the user in. This may be returned only when making the call with admin credentials.
     */
    code?: string;
}>;

/**
 * This method is used to update a user's phone number when using Phone Number Login, or their email in an email code verification flow.
 *
 * It requires the vToken and code returned from accounts.OTP.sendCode.
 *
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
    code: number;
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
 * This API unlocks either the specified user's account or the specified IP, depending upon which parameters are passed.
 *
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
 * This method is used to resend a validation email to unverified addresses associated with the account. The email format is according to the templates defined in the policy. For more information on the email format, refer to account.setPolicies or to the Email Templates section of the User Management Policies guide.
 *
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
 * This method resets the means of identification (e.g., SMS or authenticating app) used as the second step of authentication in a TFA flow for a specified user. The user will be prompted to enter a new verification method on their next login.
 *
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
     * If no provider is sent, all active providers will be reset. Note that gigyaEmail cannot be reset using this method but via email verification flows instead.
     */
    provider?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413c65da70b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsTFAResetTFAResponse = GigyaResponse<{}>;

/**
 * This method unregisters devices from the list of verified devices for the user, used in Risk-Based Authentication flows. A verified device is a device (phone or web browser) that has already been verified with an SMS, TOTP, or email verification code. The method may unregister all devices, or those with an active session.
 *
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
 * This API removes the phone number from the specified account.
 *
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
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413b93e570b21014bbc5a10ce4041860.html#parameters
 */
export type AccountsInitTFARequest = GigyaRequest<{
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
}>;
/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/413b93e570b21014bbc5a10ce4041860.html#response-data
 */
export type AccountsInitTFAResponse = GigyaResponse<{
    /**
     * The JWT token, which is made up of a header object, a body object and a signature.
     */
    gigyaAssertion: string;
}>;

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

    getAccountInfo: (
        params: AccountsGetAccountInfoRequest,
    ) => Promise<AccountsGetAccountInfoResponse<DataSchema, PreferencesSchema, SubscriptionsSchema>>;

    getConsentStatements: (
        params: AccountsGetConsentStatementsRequest,
    ) => Promise<AccountsGetConsentStatementsResponse<PreferencesSchema>>;

    getJWT: (params: AccountsGetJWTRequest) => Promise<AccountsGetJWTResponse>;

    getPolicies: (params: AccountsGetPoliciesRequest) => Promise<AccountsGetPoliciesResponse>;

    getSchema: (params: AccountsGetSchemaRequest) => Promise<AccountsGetSchemaResponse>;

    initRegistration: (params: AccountsInitRegistrationRequest) => Promise<AccountsInitRegistrationResponse>;

    login: (params: AccountsLoginRequest) => Promise<AccountsLoginResponse>;

    logout: (params: AccountsLogoutRequest) => Promise<AccountsLogoutResponse>;

    'otp.sendCode': (params: AccountsOTPSendCodeRequest) => Promise<AccountsOTPSendCodeResponse>;

    'otp.update': (params: AccountsOTPUpdateRequest) => Promise<AccountsOTPUpdateResponse>;

    'otp.delete': (params: AccountsOTPDeleteRequest) => Promise<AccountsOTPDeleteResponse>;

    'rba.unlock': (params: AccountsRBAUnlockRequest) => Promise<AccountsRBAUnlockResponse>;

    register: (
        params: AccountsRegisterRequest<DataSchema, PreferencesSchema, SubscriptionsSchema>,
    ) => Promise<AccountsRegisterResponse<DataSchema, PreferencesSchema, SubscriptionsSchema>>;

    resendVerificationCode: (
        params: AccountsResendVerificationCodeRequest,
    ) => Promise<AccountsResendVerificationCodeResponse>;

    resetPassword: (params: AccountsResetPasswordRequest) => Promise<AccountsResetPasswordResponse>;

    search: (
        params: AccountsSearchRequest,
    ) => Promise<AccountsSearchResponse<DataSchema, PreferencesSchema, SubscriptionsSchema>>;

    setAccountInfo: (
        params: AccountsSetAccountInfoRequest<DataSchema, PreferencesSchema, SubscriptionsSchema>,
    ) => Promise<AccountsSetAccountInfoResponse>;

    setProfilePhoto: (params: AccountsSetProfilePhotoRequest) => Promise<AccountsSetProfilePhotoResponse>;

    'tfa.resetTFA': (params: AccountsTFAResetTFARequest) => Promise<AccountsTFAResetTFAResponse>;

    'tfa.unregisterDevice': (
        params: AccountsTFAUnregisterDeviceRequest,
    ) => Promise<AccountsTFAUnregisterDeviceResponse>;

    'tfa.phone.sendVerificationCode': (
        params: AccountsTFAPhoneSendVerificationCodeRequest,
    ) => Promise<AccountsTFAPhoneSendVerificationCodeResponse>;

    'tfa.phone.completeVerification': (
        params: AccountsTFAPhoneCompleteVerificationRequest,
    ) => Promise<AccountsTFAPhoneCompleteVerificationResponse>;

    'tfa.initTFA': (params: AccountsInitTFARequest) => Promise<AccountsInitTFAResponse>;
};
