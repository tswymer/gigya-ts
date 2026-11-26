import {
    GigyaRequest,
    GigyaResponse,
    SocializeLoginResponse,
    SocializeNotifyLoginRequest,
    SocializeNotifyLoginResponse,
} from '@gigya-ts/rest-api';

import { GigyaJSFunction, GigyaJSUIDSignature } from '../types/gigya-helpers';

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/417376f070b21014bbc5a10ce4041860.html#parameters
 */
export type SocializeAddConnectionRequestJS = GigyaRequest<{
    /**
     * The provider to which to connect.
     *
     * The following providers currently support this operation: Amazon, Blogger, Facebook, Foursquare, GooglePlus, Kakao, LINE, LinkedIn, Livedoor, Messenger, mixi, Naver, Netlog, Odnoklassniki, PayPalOAuth, Tencent QQ, renren, Sina Weibo, Spiceworks, Twitter, WeChat, WordPress, Xing, Yahoo!, Yahoo! Japan.
     * (Note: messenger has been replaced by microsoft, however, for backward compatibility, either can be used).
     *
     * SAML providers are also supported - the format of the provider name is `saml-<name>`.
     */
    provider: string;
    /**
     * Specifies whether the adding connection flow uses a popup (default) or page redirects.
     *
     * With "redirect", the user is redirected to `redirectURL` (or to the original page if not specified) when the process completes successfully.
     *
     * @note This option will only work if CNAME is configured. The context object will not be passed when `authFlow` is "redirect".
     */
    authFlow?: 'popup' | 'redirect';
    /**
     * This parameter accepts a comma-separated list of additional data fields to retrieve.
     *
     * The current valid values are: languages, address, phones, education, honors, publications, patents, certifications, professionalHeadline, bio, industry, specialties, work, skills, religion, politicalView, interestedIn, relationshipStatus, hometown, favorites, likes, followersCount, followingCount, name, username, educationLevel, locale, verified, irank, timezone, and samlData.
     */
    extraFields?: string;
    /**
     * A comma-delimited list of Facebook-extended permissions to request from the user, in addition to the permissions that Gigya already requests.
     *
     * For example: `facebookExtraPermissions: "rsvp_event,sms"`.
     *
     * @note This parameter overrides the value of the identical parameter in Global Conf.
     */
    facebookExtraPermissions?: string;
    /**
     * The default value of this parameter is 'false'. If set to 'true', the user is forced to provide their social network credentials during login - even if the user is already connected to the social network.
     *
     * This parameter is currently supported by Facebook, Twitter, and Renren.
     */
    forceAuthentication?: boolean;
    /**
     * Extended Google permissions to request in addition to the permissions that Gigya already requests. The supported values are: "wallet" - for Google wallet permissions.
     */
    googleExtraPermissions?: string;
    /**
     * This parameter is only applicable when `redirectURL` is specified and it determines how the user info data is passed to the `redirectURL`:
     * - 'get' (default) - the user info values are passed as query string parameters.
     * - 'post' - the user info is passed as POST fields.
     */
    redirectMethod?: 'get' | 'post';
    /**
     * Relevant only if `authFlow` is "redirect". The URL to which to redirect the user when the adding connection process has successfully completed.
     *
     * The following additional parameters are appended to the URL string: UID, UIDSig, timestamp, loginProvider, loginProviderUID, nickname, photoURL, thumbnailURL, firstName, lastName, gender, birthDay, birthMonth, birthYear, email, country, state, city, zip, profileURL, provider.
     *
     * @note We strongly recommend providing a secure HTTPS URL.
     */
    redirectURL?: string;
    /**
     * The time in seconds that Gigya should keep the social network session valid for the user. To end the session when the browser closes, assign the value '0'.
     *
     * If not specified, the session will be valid for the life of the cookie (approx. one year).
     */
    sessionExpiration?: number;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/417376f070b21014bbc5a10ce4041860.html#response-object-data-members
 */
export type SocializeAddConnectionResponseJS = GigyaResponse<{
    /**
     * A User object with updated information for the current user.
     */
    user?: unknown;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4176b0ef70b21014bbc5a10ce4041860.html#parameters
 */
export type SocializeLoginRequestJS = GigyaRequest<{
    /**
     * The provider that is used for authenticating the user.
     */
    provider: string;
    /**
     * This parameter is intended only for developers who wish to implement the "Web Server Flow" of the OAuth 2.0 standard.
     *
     * If you set this parameter to 'true', you will not receive the user data in the response. Instead you will receive an authCode.
     *
     * The authCode contains a code that is intended to be used for invoking the OAuth 2.0 getToken end-point along with the grant_type parameter set to authorization_code.
     */
    authCodeOnly?: boolean;
    /**
     * Using this parameter you may specify that the login flow will use page redirects instead of using a popup.
     *
     * This gives a solution for environments where popups are unavailable (i.e., mobile web view controls).
     */
    authFlow?: 'popup' | 'redirect';
    /**
     * This parameter accepts a comma-separated list of additional data fields to retrieve.
     *
     * The current valid values are: languages, address, phones, education, honors, publications, patents, certifications, professionalHeadline, bio, industry, specialties, work, skills, religion, politicalView, interestedIn, relationshipStatus, hometown, favorites, likes, followersCount, followingCount, name, username, educationLevel, locale, verified, irank, timezone, and samlData.
     */
    extraFields?: string;
    /**
     * A comma-separated list of fields to include in the response.
     *
     * The possible values are: identities-active, identities-all, loginIDs, emails, profile, data, and id_token.
     */
    include?: string;
    /**
     * The default value of this parameter is 'false'.
     *
     * If set to 'true', you will receive all the user's identities, including those with expired sessions.
     *
     * Each entry will have an attribute that will be 'true' when the session has expired for that provider (or is otherwise inactive) and 'false' if it is active.
     */
    includeAllIdentities?: boolean;
    /**
     * The type of login being performed:
     * - standard - (default) the user is logging into an existing account.
     * - link - the user is linking a social network account to an existing account. The account being used to log in will become the primary account. When passing loginMode='link', x_regToken must also be passed to identify the account being linked. This is obtained from the initial login call response.
     * - reAuth - the user is proving ownership of an existing account by logging into it. The loginID will be ignored and the password verified.
     */
    loginMode?: 'standard' | 'link' | 'reAuth';
    /**
     * This parameter is only applicable when redirectURL is specified and it determines how the user info data is passed to the redirectURLs.
     */
    redirectMethod?: 'get' | 'post';
    /**
     * A URL to which to redirect the user when the login process has successfully completed.
     *
     * The following additional parameters are appended to the URL string: UID, UIDSignature, signatureTimestamp, loginProvider, loginProviderUID, nickname, photoURL, thumbnailURL, firstName, lastName, gender, birthDay, birthMonth, birthYear, email, country, state, city, zip, profileURL, provider.
     */
    redirectURL?: string;
    /**
     * This parameter is required for completing the link accounts flow.
     *
     * Once the initial login has failed, call the login method with loginMode=link and the regToken returned from the initial call to complete the linking.
     */
    regToken?: string;
    /**
     * The time in seconds until the login session ends for the user. Set the parameter to 0 to end the session when the browser closes.
     */
    sessionExpiration?: number;
}>;

/**
 * @TODO: This is not documented in the Gigya WebSDK docs.
 */
export type SocializeLoginResponseJS = SocializeLoginResponse;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/417729f470b21014bbc5a10ce4041860.html?locale=en-US#parameters
 */
export type SocializeNotifyLoginRequestJS = SocializeNotifyLoginRequest &
    GigyaRequest<{
        /**
         * An HMAC-SHA1 signature proving the authenticity of the data.
         *
         * This parameter is required if you pass the siteUID parameter (above) with this method.
         */
        UIDSig?: string;
        /**
         * The GMT time in which the request is made. The expected format is the Unix time format
         * (e.g., the number of seconds since Jan. 1st 1970).
         *
         * This parameter is required if you pass the siteUID parameter (above) with this method.
         */
        UIDTimestamp?: string;
    }>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41773d6170b21014bbc5a10ce4041860.html?locale=en-US#response-data
 */
export type SocializeNotifyLoginResponseJS = SocializeNotifyLoginResponse;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4177b28a70b21014bbc5a10ce4041860.html#parameters
 */
export type SocializeRefreshUIRequestJS = GigyaRequest<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4177b28a70b21014bbc5a10ce4041860.html#response-object-data-members
 */
export type SocializeRefreshUIResponseJS = GigyaResponse<
    {
        /**
         * The user's UID.
         *
         * @note This response field is not documentated.
         */
        UID?: string;
        /**
         * The JWT for the user. Only included in the response if `include: "id_token"` is passed in the request.
         *
         * @note This response field is not documentated.
         */
        id_token?: string;
    } & GigyaJSUIDSignature
>;

export type GigyaSocializeNamespaceJS = {
    /**
     * Connects the user to a specified social network. If the user is logged in, the connected social network account is linked to the user's site account.
     *
     * Triggers the global `onConnectionAdded` event.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/417376f070b21014bbc5a10ce4041860.html
     */
    addConnection: GigyaJSFunction<SocializeAddConnectionRequestJS, SocializeAddConnectionResponseJS>;
    /**
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4176b0ef70b21014bbc5a10ce4041860.html
     */
    login: GigyaJSFunction<SocializeLoginRequestJS, SocializeLoginResponseJS>;
    /**
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/417729f470b21014bbc5a10ce4041860.html
     */
    notifyLogin: GigyaJSFunction<SocializeNotifyLoginRequestJS, SocializeNotifyLoginResponseJS>;
    /**
     * Manually triggers a refresh of Gigya's Add-ons. The refresh in only applied for the user's details, not the Add-on content.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4177b28a70b21014bbc5a10ce4041860.html
     */
    refreshUI: GigyaJSFunction<SocializeRefreshUIRequestJS, SocializeRefreshUIResponseJS>;
};
