import { GigyaRequest, GigyaResponse } from '../types/gigya-helpers';
import { GigyaIdentity, GigyaUserInfo } from './gigya';

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41738a6470b21014bbc5a10ce4041860.htmlparameters
 */
export type SocializeAddConnectionRequest = GigyaRequest<{
    /**
     * The OAuth access token for the user. Read more in The OAuth 2.0 protocol.
     * This must be passed over HTTPS; requests made over non-SSL connections will return an error invalid_token (errorCode 403025).
     */
    oauth_token: string;
    /**
     * The provider to connect to. The optional values for this parameter are:
     * - 'apple'
     * - 'facebook'
     * - 'googleplus'
     * - 'kakao'
     * - 'line'
     * - 'linkedin'
     * - 'microsoft'
     * - 'qq'
     * - 'renren'
     * - 'sina'
     * - 'twitter'
     * - 'vkontakte'
     * - 'wechat'
     * - 'yahoo' (Note: 'messenger' has been replaced by microsoft, however, for backward compatibility, etiher can be used)
     * - 'instagram'
     * - 'mixi'
     * - 'odnoklassniki'
     * - 'yahoojapan'
     * Also SAML providers are supported - the format of the provider name is "saml-[providerName]".
     */
    provider: string;
    /**
     * May be either "code" or "token".
     */
    response_type: 'code' | 'token';
    /**
     * A string that will be passed as another parameter to the redirect_uri after the login completes.
     */
    state?: string;
    /**
     * Defines the language of Gigya's user interface and error message. For the list of languages supported, refer to the languages table.
     */
    x_lang?: string;
    /**
     * A comma-delimited list of extended permissions to request from the user. This parameter gives the possibility to request extended permissions in addition to the permissions that Gigya is already requesting. Refer to Facebook's extended permissions page for the complete list of Facebook permissions.
     *
     * For example, if you wish to RSVP to events on the user's behalf and to send sms messages to the user, define: x_extraPermissions="rsvp_event,sms". To request Google wallet permissions define: x_extraPermissions="wallet".
     */
    x_extraPermissions?: string;
    /**
     * The display mode of of the Facebook login page. The valid values are:
     * - 'popup' (default) - displays Facebook's popup login dialog
     * - 'page'- displays Facebook's full login page
     * - 'touch' - used on smartphone mobile devices, like iPhone and Android
     */
    x_displayMode?: 'popup' | 'page' | 'touch';
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41738a6470b21014bbc5a10ce4041860.html#response-data
 */
export type SocializeAddConnectionResponse = GigyaResponse<{
    /**
     * The state string passed by your application as parameter to the login endpoint.
     */
    state?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4173b12870b21014bbc5a10ce4041860.html#parameters
 */
export type SocializeDeleteAccountRequest = GigyaRequest<{
    /**
     * The unique ID of the user, with which this method call is associated. This is the UID you receive from Gigya after a successful login of this user.
     *
     * @note If you are using account linking then the UID would be your site user ID. To learn more about Social Login with account linking (best practice), refer to the Login Implementation guide.
     */
    UID: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4173b12870b21014bbc5a10ce4041860.html#response-data
 */
export type SocializeDeleteAccountResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4173d7fe70b21014bbc5a10ce4041860.html#parameters
 */
export type SocializeDelUserSettingsRequest = GigyaRequest<{
    /**
     * The unique ID of the user with which this method call is associated (i.e., the logged-in user whom is performing the action on the client-side and triggering the REST call). This is the UID you receive from Gigya after a successful login of this user. See the UID item on the User table for more information.
     *
     * @note If you are using account linking then the UID would be your site user ID. To learn more about Social Login with account linking (best practice), refer to the Social Login Implementation guide.
     */
    UID?: string;
    /**
     * The section identifier for which to delete the settings. If not specified the method will delete settings that were set without group specification.
     */
    group?: string;
    /**
     * A comma separated list of settings to delete for the current user. If not specified the method will delete all the user settings for the specified group. For example: "alwaysAllow, neverAsk".
     */
    settings?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4173d7fe70b21014bbc5a10ce4041860.html#response-data
 */
export type SocializeDelUserSettingsResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4173ebc970b21014bbc5a10ce4041860.html#parameters
 */
export type SocializeExchangeUIDSignatureRequest = GigyaRequest<{
    /**
     * The UID of the logged in user.
     */
    UID: string;
    /**
     * The original signature received from the client side login operation.
     */
    UIDSignature: string;
    /**
     * The original timestamp received from the client side login operation.
     */
    signatureTimestamp: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4173ebc970b21014bbc5a10ce4041860.html#response-data
 */
export type SocializeExchangeUIDSignatureResponse = GigyaResponse<{
    /**
     * The original UID passed when the method was called.
     */
    UID?: string;
    /**
     * A new timestamp generated by the server.
     */
    signatureTimestamp?: string;
    /**
     * A new signature based on the new timestamp and the secret key associated with the specified userKey.
     */
    UIDSignature?: string;
    /**
     * The result code of the operation.
     * - Code '0' indicates success.
     * - Code '403002' indicates that signatureTimestamp is more than 60 seconds old.
     * - Code '400006' indicates that UIDSignature is invalid.
     */
    errorCode?: '0' | '403002' | '400006' | string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/2a1d9c89427a4c5991eb76965bc0bb81.html#parameters
 */
export type SocializeFacebookDeauthorizeRequest = GigyaRequest<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/2a1d9c89427a4c5991eb76965bc0bb81.html#response-data
 */
export type SocializeFacebookDeauthorizeResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4174262170b21014bbc5a10ce4041860.html#parameters
 */
export type SocializeFacebookGraphOperation = GigyaRequest<{
    /**
     * The unique ID of the user with which this method call is associated. This is the UID you receive from Gigya after a successful login of this user. See User.UID for more information.
     */
    UID?: string;
    /**
     * The Graph operation path. This is the part of Facebook's Graph URL that defines the operation. For example:
     * - "/me/[namespace]:[action_type]" for creating Graph Actions.
     * - "/[action_id]" for reading, updating or deleting a Graph Action.
     * - "/[action_id]/likes" for Liking a Graph Action.
     */
    graphPath: string;
    /**
     * Determines the HTTP method to use: "GET", "POST" or "DELETE". The default is "GET".
     */
    method?: 'GET' | 'POST' | 'DELETE';
    /**
     * A JSON object containing parameters to be passed to the Graph operation.
     */
    graphParams?: Record<string, unknown>;
    /**
     * Determines whether the graph operation requires an access token and what type. The supported values are:
     * - none - no access token
     * - userToken (default) - a user access token. User access tokens are the standard type for API calls; these are generated in the login flow when a user grants permissions to an app.
     * - appToken - an app access token. App access tokens can be generated for Facebook Apps. For more information on Facebook app access tokens refer to: https://developers.facebook.com/docs/opengraph/using-app-tokens/.
     */
    accessTokenType?: 'none' | 'userToken' | 'appToken';
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4174262170b21014bbc5a10ce4041860.html#response-data
 */
export type SocializeFacebookGraphOperationResponse = GigyaResponse<{
    /**
     * An object containing the response data of the Graph operation. The response is returned exactly as it is received from Facebook Graph API without translation by Gigya.
     */
    graphResponse?: Record<string, unknown>;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4174743070b21014bbc5a10ce4041860.html#parameters
 */
export type SocializeGetContactsRequest = GigyaRequest<{
    /**
     * The unique ID of the user with which this method call is associated (i.e., the logged-in user whom is performing the action on the client-side and triggering the REST call). This is the UID you receive from Gigya after a successful login of this user. See the UID item on the User table for more information.
     *
     * @note If you are using account linking then the UID would be your site user ID. To learn more about Social Login with account linking (best practice), refer to the Social Login Implementation guide.
     */
    UID?: string;
    /**
     * 'yahoo'.
     */
    enabledProviders?: 'yahoo';
    /**
     * 'yahoo'.
     */
    disabledProviders?: 'yahoo';
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4174743070b21014bbc5a10ce4041860.html#response-data
 */
export type SocializeGetContactsResponse = GigyaResponse<{
    /**
     * Array of Contact objects, corresponding to the list of contacts of the current user from all the email providers to which the user is connected.
     */
    contacts?: Array<{
        /**
         * The contact's email.
         */
        email?: string;
        /**
         * The name of the email provider from which the contact was retrieved. For example: 'yahoo'.
         */
        provider?: string;
        /**
         * The contact's first name.
         */
        firstName?: string;
        /**
         * The contact's last name.
         */
        lastName?: string;
        /**
         * The contact 's nickname, this may be either the nickname provided by the email provider or a concatenation of the first and last names.
         */
        nickname?: string;
        /**
         * The URL of person's full size photo.
         */
        photoURL?: string;
    }>;
    /**
     * Array of provider-specific error objects. Each object includes the following fields:
     * - provider
     * - errorCode
     * - errorMessage
     */
    providerErrorCodes?: Array<{
        provider?: string;
        errorCode?: string;
        errorMessage?: string;
    }>;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4175c2f570b21014bbc5a10ce4041860.html#parameters
 */
export type SocializeGetTokenRequest = GigyaRequest<{
    /**
     * The behavior of the getToken method is determined by the grant_type parameter. The set of parameters which the method receives depends on the grant type.
     */
    grant_type: 'authorization_code' | 'client_credentials' | 'none';
    /**
     * Only required if grant_type is authorization_code.
     *
     * The verification code received from the login response:
     * - If the code parameter is not passed, an error Missing_required_parameter (errorCode 400002) is returned.
     * - If an invalid code parameter is passed, an error Invalid_parameter_value (errorCode 400006) is returned.
     */
    code?: string;
    /**
     * Only required if grant_type is authorization_code.
     *
     * This parameter is used for validation. The URL must be the same redirect_uri provided in the login request.
     */
    redirect_uri?: string;
    /**
     * Only required if grant_type is client_credentials or none.
     *
     * You may provide the UID of the user that has been logged in by your site. This will generate an access token associated with the user and will allow you to invoke REST API methods, without passing the UID parameter.
     *
     * When passing this parameter, this method becomes equivalent to the socialize.notifyLogin API method, notifying the Gigya service that the user has been logged-in by the site. Note that any providerSessions parameter will be ignored and if a user is not yet logged in, this will not automatically log the user in.
     */
    x_siteUID?: string;
    /**
     * Only required if grant_type is client_credentials or none.
     *
     * This parameter is relevant only if the x_siteUID parameter (see above) is specified.
     *
     * This parameter allows you to provide Gigya with site's user profile data. This will ensure consistent user experience. Gigya will use this information, for example, in Plugins that show user info, such as the Chat and the Comments Plugins.
     *
     * The object may include the following fields:
     * - nickname
     * - photoURL
     * - thumbnailURL
     * - firstName
     * - lastName
     * - gender
     * - age
     * - email
     *
     * @todo: Type this out
     */
    x_userInfo?: unknown;
    /**
     * Only required if grant_type is client_credentials or none.
     *
     * The time in seconds that Gigya should keep the session valid for the user. To end the session when the browser closes, assign the value '0'. If this parameter is not specified, the session will be valid forever.
     */
    x_sessionExpiration?: number;
    /**
     * Records the source of the registration. The default value is the URL of the current page but it can be any string value. regSource is stored in the account and can be used by verification emails to determine which page should be opened.
     */
    regSource?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4175c2f570b21014bbc5a10ce4041860.html#response-data
 */
export type SocializeGetTokenResponse = GigyaResponse<{
    /**
     * A Gigya session key. You may use this token to invoke Gigya's REST API methods. Pass this token as a parameter with each REST API method call. Read more in making an API call. The token is a privileged token that has almost the same permission as using an API key with the secret, and for this reason should only be passed down to the end user when necessary.
     */
    access_token?: string;
    /**
     * The duration in seconds of the access token's lifetime.
     *
     * This field is only returned when the token has an expiration time. If this field is not available then the token will not expire.
     */
    expires_in?: number;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4175273e70b21014bbc5a10ce4041860.html#parameters
 */
export type SocializeGetRawDataRequest = GigyaRequest<{
    /**
     * The provider to retrieve data from. The following values are currently supported for use with this parameter:
     * - 'facebook'
     * - 'twitter'
     * - 'yahoo'
     * - 'linkedin'
     * - 'googleplus'
     * - 'xing'
     * - 'odnoklassniki'
     * - 'wechat'
     * - 'microsoft' ('messenger' has been replaced by 'microsoft', however, for backward compatibility, either can be used)
     * - 'foursquare'
     */
    provider: string;
    /**
     * The user ID of the user for whom to retrieve the information.
     */
    UID: string;
    /**
     * (Facebook only) For Facebook Graph API operations, this parameter specifies the path of the API from which you want to retrieve data, e.g./me/photos. This path is appended to the base API path, which is https://graph.facebook.com, to form the request.
     *
     * You may also include parameters for the request, e.g. /v2.2/12341354253?fields=from,link.
     *
     * Notes for users of Facebook app version 2.1 or higher:
     * - Facebook does not support FQL requests for version 2.1 or higher, so you must always use 'path' instead of 'fields'.
     * - If you do not pass either 'fields' or 'path' in the parameters, the API call defaults to FQL, which will result in an error.
     */
    path?: string;
    /**
     * Choose the preferred format of the raw data. The options are:
     * - 'json' (default)
     * - 'xml'
     *
     * @note Not all the providers support both formats.
     */
    format?: 'json' | 'xml';
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4175273e70b21014bbc5a10ce4041860.html#response-data
 */
export type SocializeGetRawDataResponse<T> = GigyaResponse<{
    /**
     * The data returned by the provider as-is, without any manipulation by Gigya.
     *
     * @note Every provider returns his individual data structure.
     */
    rawData?: T;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4175af8f70b21014bbc5a10ce4041860.html#parameters
 */
export type SocializeGetSessionInfoRequest = GigyaRequest<{
    /**
     * The unique ID of the user with which this method call is associated (i.e., the logged-in user whom is performing the action on the client-side and triggering the REST call). This is the UID you receive from Gigya after a successful login of this user. See the UID item on the User table for more information.
     *
     * @note If you are using account linking then the UID would be your site user ID. To learn more about Social Login with account linking (best practice), refer to the Social Login Implementation guide.
     */
    UID?: string;
    /**
     * The provider to retrieve the session information for. The optional values for this parameter are:
     * - 'facebook'
     * - 'twitter'
     * - 'google'
     * - 'linkedin'
     * - 'yahoo'
     * - 'microsoft' ('messenger' has been replaced by 'microsoft', however, for backward compatibility, either can be used)
     * - 'foursquare'
     * - 'renren'
     * - 'qq'
     * - 'sina'
     * - 'vkontakte'
     * - 'mixi'
     * - 'yahoojapan'
     * - 'spiceworks'
     * - 'odnoklassniki'
     * - 'amazon'
     * - 'xing'
     * - 'wechat'
     * - 'wordpress'
     * - 'blogger'
     * - 'paypaloauth'
     * - 'netlog'
     * - 'line'
     * - 'livedoor'
     * - 'aol'
     * - 'orangefr'
     *
     * You can also pass the name of a SAML or OIDC provider, as you have defined it in the console, e.g., 'provider': 'oidc-gigyademosite'.
     */
    provider: string;
    /**
     * The padding mode to be used in the AES algorithm. The valid values for this parameter are: 'PKCS5', 'PKCS7' and 'ZEROS'. The default value, if this parameter is not set, is 'PKCS7'.
     */
    paddingMode?: 'PKCS5' | 'PKCS7' | 'ZEROS';
    /**
     * The default value is "false". If this field is set to "true", the timestamp and providerUIDSig fields are returned and the providerUID that is returned by this method will be signed by Gigya. To learn more about this subject, refer to the Security page of the Developer's Guide.
     */
    signIDs?: boolean;
    /**
     * The default value is "false". If this field is set to "true", the server encrypts all the fields in response, not only the tokenSecret field.
     */
    encryptAll?: boolean;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4175af8f70b21014bbc5a10ce4041860.html#response-data
 */
export type SocializeGetSessionInfoResponse = GigyaResponse<{
    /**
     * The session authentication token. See in the table below, how this field is mapped to the corresponding field in each provider.
     */
    authToken?: string;
    /**
     * The session token secret, encrypted with the partner secret key (see explanation above) and encoded in BASE64. See in the table below, how this field is mapped to the corresponding field in each provider.
     */
    tokenSecret?: string;
    /**
     * The expiration time for the session token in UTC. See in the table below, how this field is mapped to the corresponding field in each provider. Note that when socialize.notifyLogin is used to establish a session, the tokenExpirationUTC value contains the tokenExpirationUTC passed to socialize.notifyLogin.
     */
    tokenExpirationUTC?: string;
    /**
     * The session handle, encrypted with the partner secret key (see explanation above) and encoded in BASE64. See in the table below, how this field is mapped to the corresponding field in each provider.
     */
    sessionHandle?: string;
    /**
     * The session expiration time in UTC. See the table below for how this field is mapped to the corresponding field in each provider.
     */
    sessionExpiration?: string;
    /**
     * The initialization vector that should be used for decrypting the encrypted fields, encoded in BASE64.
     */
    IV?: string;
    /**
     * The person's ID on the connected provider.
     */
    providerUID?: string;
    /**
     * The GMT time of the signature in UNIX time format (i.e. the number of seconds since Jan. 1st 1970). This field is returned only if signIDs is set to "true".
     */
    timestamp?: string;
    /**
     * The signature on timestamp_providerUID. This field is returned only if signIDs is set to "true".
     */
    providerUIDSig?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/417637a470b21014bbc5a10ce4041860.html#parameters
 */
export type SocializeGetUserInfoRequest = GigyaRequest<{
    /**
     * The unique ID of the user with which this method call is associated (i.e., the logged-in user whom is performing the action on the client-side and triggering the REST call). This is the UID you receive from Gigya after a successful login of this user. See the UID item on the User table for more information.
     *
     * @note If you are using account linking then the UID would be your site user ID. To learn more about Social Login with account linking (best practice), refer to the Social Login Implementation guide.
     */
    UID?: string;
    /**
     * This parameter's default value is false. If set to 'true' you will receive all the user's identities, including those with expired sessions. Each entry will have an attribute that will be 'true' when the session has expired for that provider (or is otherwise inactive) and 'false' if it is active.
     */
    includeAllIdentities?: boolean;
    /**
     * This parameter accepts a comma-separated list of additional data fields to retrieve. The current valid values are:
     * - languages
     * - address
     * - phones
     * - education
     * - honors
     * - publications
     * - patents
     * - certifications
     * - professionalHeadline
     * - bio
     * - industry
     * - specialties
     * - work
     * - skills
     * - religion
     * - politicalView
     * - interestedIn
     * - relationshipStatus
     * - hometown
     * - favorites
     * - likes
     * - followersCount
     * - followingCount
     * - name
     * - username
     * - educationLevel
     * - locale
     * - verified
     * - irank
     * - timezone
     * - samlData
     *
     * @note Before your application can retrieve Facebook data, the user must grant your application with access. Please make sure you have checked the check boxes that enable retrieving the relevant fields from Facebook in the PermissionsInformation published on non-SAP site page on Gigya's website. You may find more information in the Facebook Permissions section of our guide.
     */
    extraFields?: string;
    /**
     * A comma delimited list of providers from which to return user information in the response.
     *
     * If you do not set this parameter, by default the following providers are enabled:
     * - facebook
     * - twitter
     * - yahoo
     * - linkedIn
     * - messenger
     * - google+
     * - foursquare
     * - vkontakte
     * - renren
     * - qq
     * - sina
     * - aol
     * - blogger
     * - wordpress
     *
     * In addition the following providers are supported and may be added explicitly:
     * - netlog
     * - orangefrance
     * - mixi
     * - livedoor
     * - paypal
     * - paypaloauth
     * - amazon
     * - xing
     *
     * You may use the '*' sign as an indication to include all the default providers.
     */
    enabledProviders?: string;
    /**
     * A comma delimited list of providers from which not to return user information in the response. If you do not set this parameter, by default no provider is disabled (i.e. the method applies to all connected providers).
     */
    disabledProviders?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/417637a470b21014bbc5a10ce4041860.html#response-data
 */
export type SocializeGetUserInfoResponse = GigyaResponse<{
    /**
     * Information about the user. See JSON example below for the user data representation. Only fields with data are returned. Note that unlike client-based calls, the identities field returns an array and the capabilities field a comma separated string.
     */
    userData?: unknown;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41768a0370b21014bbc5a10ce4041860.html#parameters
 */
export type SocializeImportIdentitiesRequest = GigyaRequest<{
    /**
     * A unique identifier for the imported user. Gigya verifies that this UID does not already exist.
     */
    UID: string;
    /**
     * An array of Identity objects. The two most common fields are:
     * - provider - the name of the provider for this identity, e.g. "facebook", "twitter", etc.
     * - providerUID - the ID of the user on the specified provider.
     *
     * For a comprehensive listing of all available fields, refer to the Identity object.
     */
    identities: Array<GigyaIdentity>;
    /**
     * When set to true, a new user will be created if the UID does not exist. When set to false, the UID must already exist. The default value is false.
     */
    allowNewUser?: boolean;
    /**
     * This parameter gives the option to pass to Gigya, session information obtained directly from a social network, so it can be used for making API calls to the social network. The value of this parameter is a JSON object with reference to other objects. The field names of the main object are the names of the provider to set the session information for. The sub-objects contain the session information.
     *
     * @note Each provider requires a different set of fields for making API calls.
     *
     * The provider field names may be:
     * - 'facebook'
     * - 'twitter'
     * - 'yahoo'
     * - 'messenger'
     * - 'linkedin'
     * - 'sina'
     * - 'qq'
     * - 'renren'
     *
     * The sub-objects' fields are:
     * - 'authToken' - The session authentication token. For Facebook this member should hold the Facebook Session Key.
     * - 'tokenSecret' - The session token secret. For Facebook this member should hold the Facebook sessionSecret.
     * - 'tokenExpiration' - The absolute time when the session token expires in UNIX time format.
     * - 'sessionHandle' - The session handle encoded in BASE64.
     * - 'sessionHandleExpiration' - The absolute time when the session expires in UNIX time format.
     *
     * @note If this parameter (providerSessions) is specified, the call must be done over HTTPS.
     */
    providerSessions?: Record<
        string,
        {
            authToken: string;
            tokenSecret: string;
            tokenExpiration: string;
            sessionHandle: string;
            sessionHandleExpiration: string;
        }
    >;
    /**
     * The possible values are:
     * - Ignore (default) - ignore an expired providerSessions, meaning the provider will not be added to the user.
     * - Error - returns an error in case any of the provider sessions are expired.
     */
    handleInvalidSessions?: 'Ignore' | 'Error';
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41768a0370b21014bbc5a10ce4041860.html#response-data
 */
export type SocializeImportIdentitiesResponse = GigyaResponse<{
    /**
     * Contain the identities that caused a conflict. This field is returned if there are conflicts, both when returning an error and when returning success.
     */
    identityConflicts?: Array<{
        provider: string;
        providerUID: string;
    }>;
    /**
     * Indicates if the account was imported or not (*this field is internal and not public).
     */
    isImported?: boolean;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4176c45f70b21014bbc5a10ce4041860.html#parameters
 */
export type SocializeLoginRequest = GigyaRequest<{
    /**
     * The provider which will be used for authenticating the user. The following values are currently supported for use with this parameter:
     * - 'amazon'
     * - 'apple'
     * - 'blogger'
     * - 'facebook'
     * - 'foursquare'
     * - 'googleplus'
     * - 'kakao'
     * - 'line'
     * - 'linkedin'
     * - 'livedoor'
     * - 'messenger'
     * - 'mixi'
     * - 'naver'
     * - 'netlog'
     * - 'odnoklassniki'
     * - 'orangefrance'
     * - 'paypayoauth'
     * - 'qq'
     * - 'renren'
     * - 'sina'
     * - 'spiceworks'
     * - 'twitter'
     * - 'vkontakte'
     * - 'wechat'
     * - 'wordpress'
     * - 'xing'
     * - 'yahoo'
     * - 'yahoojapan'
     *
     * In addition, federated providers are also supported, e.g. SAML/OIDC.
     */
    x_provider: string;
    /**
     * The Gigya API key. You may obtain a Gigya API key from the Site Dashboard page on Gigya's website.
     */
    client_id: string;
    /**
     * The URL to redirect to after the login completes. This must be verified against the registered domain for this API key.
     */
    redirect_uri: string;
    /**
     * May be either "token" or "code". See extended explanation below.
     */
    response_type: 'token' | 'code';
    /**
     * A string that will be passed as another parameter to the redirect_uri after the login completes.
     */
    state?: string;
    /**
     * A string that will be passed as another parameter to the redirect_uri after the login completes.
     */
    x_cid?: string;
    /**
     * The default value of this parameter is 'true'. The default behavior - the account is not considered final until socialize.notifyRegistration is called. While being not-final the identities associated with this account can be connected to another account without causing an error.
     *
     * If this parameter is set to 'false' - when a new user logs-in (registers), his new Gigya account is final immediately.
     */
    finalizeRegistration?: boolean;
    /**
     * This parameter defines the time in seconds that Gigya should keep the login session valid for the user. To end the session when the browser closes, assign the value '0'. If this parameter is not specified, the session will be valid forever.
     */
    x_session_expiration?: number;
    /**
     * Defines the language of Gigya's user interface and error message. For the list of supported languages, refer to the languages table.
     */
    x_lang?: string;
    /**
     * A comma delimited list of extended permissions to request from the user. This parameter gives the possibility to request extended permissions in addition to the permissions that Gigya is already requesting.
     *
     * Please refer to Facebook's extended permissions page, for the complete list of Facebook permissions.
     *
     * For example, if you wish to RSVP to events on the user's behalf and to to send sms messages to the user, define: x_extraPermissions=" rsvp_event ,sms".
     *
     * To request Google wallet permissions define: x_extraPermissions="wallet ".
     *
     * @note Use the socialize.getRawData method to pull the extra data.
     */
    x_extraPermissions?: string;
    /**
     * The default value of this parameter is 'false'. If it is set to 'true', the user is forced to provide their social network credentials during login - even if the user is already connected to the social network. This parameter is currently supported by Facebook, Twitter, and Renren. Note that the behavior of the various social networks may be slightly different: Facebook expects the current user to enter their password, and will not accept a different user name. Other networks prompt the user to re-authorize the application or allow a different user to log in.
     *
     * @note This parameter is also named " forceAuthentication".
     */
    x_forceAuthentication?: boolean;
    /**
     * The display mode of the Facebook login page. The valid values are:
     * - 'popup' (default) - displays Facebook's popup login dialog
     * - 'page'- displays Facebook's full login page
     * - 'touch' - used on smartphone mobile devices, like iPhone and Android
     */
    x_displayMode?: 'popup' | 'page' | 'touch';
    /**
     * The username in the OpenID provider, if available. When this parameter is passed with a known OpenID provider, the username request screen is skipped.
     */
    x_openIDUsername?: string;
    /**
     * A URL template representing an OpenID user, where $USERNAME$ represents the placeholder for the username. For example: http://aol.com$USERNAME$. This parameter is required if provider='openID'.
     */
    x_openIDURL?: string;
    /**
     * A URL of the provider logo to display in the OpenID popup. This parameter is used only when provider='openID' and x_openIDURL is specified.
     */
    x_openIDProviderLogo?: string;
    /**
     * The provider name to display in the OpenID popup. This parameter is used only when provider='openID' and x_openIDURL is specified.
     */
    x_openIDProviderName?: string;
    /**
     * The objective of this parameter is to support Over The Air app installs for Android devices during Google+ login. Set this parameter with the package name of your Android app (for example: "com.yourdomain.app"). As a result, after signing in with Google+, users have the option to send your Android app to their device instantly, without leaving your website. As a preliminary step you'll need to Utilize Google+ Native Android Sign-on on your Android app. The package name passed to this parameter is the same one you enter when enabling the Google+ API.
     */
    x_googlePlayAppID?: string;
    /**
     * A string representing the source of the registration. This would typically be the URL where it took place.
     */
    x_regSource?: string;
}>;

/**
 * When the login process completes (either successfully or with error), Gigya server redirects the user to the URL defined in the redirect_uri parameter and appends response parameters.
 *
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4176c45f70b21014bbc5a10ce4041860.html#response-data
 */
export type SocializeLoginResponse = GigyaResponse<never>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4177032870b21014bbc5a10ce4041860.html#parameters
 */
export type SocializeLogoutRequest = GigyaRequest<{
    /**
     * The unique ID of the user with which this method call is associated (i.e., the logged-in user whom is performing the action on the client-side and triggering the REST call). This is the UID you receive from Gigya after a successful login of this user. See the UID item on the User table for more information.
     */
    UID?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4177032870b21014bbc5a10ce4041860.html#response-data
 */
export type SocializeLogoutResponse = GigyaResponse<{
    /**
     * The sessionID corresponding to the party that initiated the SLO.
     */
    samlContext?: string;
    /**
     * Always 'true', unless the user that is logged in is not the user specified in the SAML SLO request.
     */
    logoutActiveSession?: boolean;
    /**
     * A comma-delimited list of SAML sessionIDs indicating the SPs that the user is connected to.
     */
    connectedSamlSessions?: string;
    /**
     * A comma separated list of providers that the user is connected to.
     */
    connectedProviders?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41773d6170b21014bbc5a10ce4041860.html#parameters
 */
export type SocializeNotifyLoginRequest = GigyaRequest<{
    /**
     * When calling notifyLogin on a user that has not finalized registration, if the user'sA unique identifier used by your site to identify the user. You may use the account ID that you have designated for this user in your database, or alternatively the user's existing Gigya UID. This parameter accepts up to 252 ASCII characters (it does not accept Unicode).
     */
    siteUID?: string;
    /**
     * This parameter gives the option to pass to Gigya session information obtained directly from a social network, so it can be used for making API calls to the social network.
     *
     * The provider field names may be:
     * - 'apple'
     * - 'facebook'
     * - 'googleplus'
     * - 'kakao'
     * - 'line'
     * - 'linkedin'
     * - 'microsoft' (Note: 'messenger' has been replaced by microsoft', however, for backward compatibility, either can be used)
     * - 'qq'
     * - 'renren'
     * - 'sina'
     * - 'twitter'
     * - 'vkontakte'
     * - 'wechat'
     * - 'yahoo'
     */
    providerSessions?: Record<
        string,
        {
            /**
             * The session authentication token. For Facebook this member should hold the Facebook Session Key. You must pass either authToken or code.
             */
            authToken?: string;
            /**
             * A preliminary verification code received from the provider while establishing a session. The code is used in the process of receiving a session authentication token. You must pass either authToken or code.
             */
            code?: string;
            /**
             * The user's account ID in the provider's system. Only required for certain providers.
             */
            providerUID?: string;
            /**
             * The session token secret. Only required for certain providers.
             */
            tokenSecret?: string;
            /**
             * The absolute time when the session token expires in Unix time format.
             */
            tokenExpiration?: string;
            /**
             * The number of seconds until the session token expires. This will be used only if tokenExpiration is not provided.
             */
            tokenExpiresIn?: number;
            /**
             * The session handle encoded in BASE64.
             */
            sessionHandle?: string;
            /**
             * The absolute time when the session expires in Unix time format.
             */
            sessionHandleExpiration?: string;
        }
    >;
    /**
     * This parameter determines whether this user is new to the site. The default value is false.
     */
    newUser?: boolean;
    /**
     * The phone number login identifier, if the account uses Phone Number Login. The supported phone number formatting is E.164.
     */
    phoneNumber?: string;
    /**
     * A string representing the source of the registration. This would typically be the URL where it took place.
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
     * Default is false. If set to true, the server will not perform any validation on the user and will not return any pending state errors and will not check for any registration requirements for the end user. This parameter can only be used over HTTPS.
     */
    skipValidation?: boolean;
    /**
     * This parameter defines your client side environment, which in return determines the server response data fields. The default value of this parameter is "browser", which means that by default you receive cookie-related data in the response.
     *
     * If your client runs on a mobile you will call this method using a Mobile SDK. Since version 2.15.6, this parameter is automatically set to "mobile" (there is no need to set it manually). In any other case, you should set this parameter to be "mobile".
     *
     * As a result of setting the parameter to "mobile" the server response data fields will include: sessionToken and sessionSecret (instead of cookie related data). In such case, you should send the sessionToken and sessionSecret to your mobile client. On your client side, call GSAPI.setSession (using the Mobile SDK) to save them in the app's storage.
     */
    targetEnv?: 'browser' | 'mobile';
    /**
     * This parameter allows you to provide Gigya with site's user profile data. This will ensure consistent user experience. Gigya will use this information, for example, in plugins that show user info, such as the Chat and the Comments plugins.
     *
     * When using Gigya's plugins, notifyLogin must be called with userInfo for site users who don't have a social identity, in order for them to interact with the plugins. The object may include the following fields:
     * - nickname
     * - photoURL
     * - thumbnailURL
     * - firstName
     * - lastName
     * - gender
     * - age
     * - email
     *
     * You must always pass a photoURL when passing a thumbnailURL .
     */
    userInfo?: GigyaUserInfo;
    /**
     * The language of the legal statement to retrieve, if a legal statement exits.
     */
    lang?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41773d6170b21014bbc5a10ce4041860.html#response-data
 */
export type SocializeNotifyLoginResponse = GigyaResponse<{
    /**
     * Please create a session cookie with the name specified by this field.
     */
    cookieName?: string;
    /**
     * Please create a session cookie with the value specified by this field.
     */
    cookieValue?: string;
    /**
     * Please create a session cookie with the domain specified by this field.
     */
    cookieDomain?: string;
    /**
     * Please create a session cookie with the path specified by this field.
     */
    cookiePath?: string;
    /**
     * The User ID that should be used for login verification as described under Validate the UID Signature in the Social Login Process.
     */
    UID?: string;
    /**
     * The signature that should be used for login verification as described under Validate the UID Signature in the Social Login Process.
     */
    UIDSignature?: string;
    /**
     * The GMT time of the response in UNIX time format (i.e., the number of seconds since Jan. 1st 1970). The timestamp should be used for login verification as described under Validate the UID Signature in the Social Login Process.
     */
    signatureTimestamp?: number;
    /**
     * Please send this data field to your mobile client. On your client side, call GSAPI.setSession ( using the Mobile SDK ) to save it on the app's storage.
     */
    sessionToken?: string;
    /**
     * Please send this data field to your mobile client. On your client side, call GSAPI.setSession ( using the Mobile SDK) to save it on the app's storage.
     */
    sessionSecret?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4177644c70b21014bbc5a10ce4041860.html#parameters
 */
export type SocializeNotifyRegistrationRequest = GigyaRequest<{
    /**
     * The unique ID of the user with which this method call is associated (i.e., the logged-in user whom is performing the action on the client-side and triggering the REST call). This is the UID you receive from SAP Customer Data Cloud after a successful login of this user. See the UID item on the User table for more information.
     */
    UID?: string;
    /**
     * The user ID which you have designated to the current user on your user management system. This site UID must be different than the SAP Customer Data Cloud ID.
     *
     * @note The parameter accepts only ASCII characters (not unicode) and up to 252 characters.
     */
    siteUID?: string;
    /**
     * The phone number login identifier, if the account uses Phone Number Login. The supported phone number formatting is E.164.
     */
    phoneNumber?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4177644c70b21014bbc5a10ce4041860.html#response-data
 */
export type SocializeNotifyRegistrationResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4177d96470b21014bbc5a10ce4041860.html#parameters
 */
export type SocializeRemoveConnectionRequest = GigyaRequest<{
    /**
     * The unique ID of the user with which this method call is associated (i.e., the logged-in user whom is performing the action on the client-side and triggering the REST call). This is the UID you receive from Gigya after a successful login of this user. See the UID item on the User table for more information.
     */
    UID?: string;
    /**
     * The provider to disconnect from. The optional values for this parameter are:
     * - "renren"
     * - "vkontakte"
     * - "mixi"
     *
     * If this parameter is not set, then the user will be disconnected from all the providers.
     */
    provider?: string;
    /**
     * Indicates whether the server should remove the login ID that is associated with the removed social network identity. This can be done as long as the following conditions are met:
     * 1. The login ID is not associated with any other identity (site or social)
     * 2. After removing the login ID there is still another way to log in to the account, i.e. either there is another social identity connected to the account or there is another login ID and password pair.
     *
     * If these conditions are not met, for example, if the social identity being removed is the last social identity and the associated login ID is the last login ID. In this case the operation fails without removing anything. The default value is "false".
     */
    removeLoginID?: boolean;
    /**
     * Determines how to handle attempts to remove the last login identity. May be either "soft" or "fail":
     * - "soft" - Indicates that Gigya will remove all the stored information related to the connection, except for the mapping between this user account and the social user. This way Gigya deletes all the information about the user but the account remains accessible if the user ever tries to login again using the same social identity. Completely deleting any association with the last connected identity may be achieved by deleting the account using socialize.deleteAccount.
     * - "remove" - Removes the connection entirely, including the loginID, for the defined social network.
     * - "fail" - Indicates that the last login identity cannot be removed by Gigya, an error indicating this will be returned.
     */
    lastIdentityHandling?: 'soft' | 'remove' | 'fail';
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4177d96470b21014bbc5a10ce4041860.html#response-data
 */
export type SocializeRemoveConnectionResponse = GigyaResponse<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41787acc70b21014bbc5a10ce4041860.html#parameters
 */
export type SocializeSetUIDRequest = GigyaRequest<{
    /**
     * The unique ID of the user with which this method call is associated (i.e., the logged-in user whom is performing the action on the client-side and triggering the REST call). This is the UID you receive from SAP Customer Data Cloud after a successful login of this user. See the UID item on the User table for more information.
     */
    UID?: string;
    /**
     * The user ID which you have designated to the current user on your user management system. This site UID must be different than the SAP Customer Data Cloud ID.
     *
     * This parameter accepts up to 252 ASCII characters (not unicode).
     */
    siteUID: string;
    /**
     * The phone number login identifier, if the account uses Phone Number Login. The supported phone number formatting is E.164.
     */
    phoneNumber?: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41787acc70b21014bbc5a10ce4041860.html#response-data
 */
export type SocializeSetUIDResponse = GigyaResponse<{}>;

/**
 * https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41788e7070b21014bbc5a10ce4041860.html#parameters
 */
export type SocializeSetUserInfoRequest = GigyaRequest<{
    /**
     * The unique ID of the user with which this method call is associated (i.e., the logged-in user whom is performing the action on the client-side and triggering the REST call). This is the UID you receive from Gigya after a successful login of this user. See the UID item on the User table for more information.
     */
    UID?: string;
    /**
     * This parameter allows you to provide Gigya with a site's user profile data. This ensures consistent user experience. Gigya uses this information, for example, in plugins that show user info such as the Comments plugins.
     */
    userInfo: GigyaUserInfo;
}>;

/**
 * https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41788e7070b21014bbc5a10ce4041860.html#response-data
 */
export type SocializeSetUserInfoResponse = GigyaResponse<{}>;

export type GigyaSocializeNamespace = {
    /**
     * This API serves as an end point for connecting the user to a specified* social network. This API requires user interaction. To add a connection, redirect the user to the specified URL and pass the required parameters. When the addConnection process completes - either successfully or with an error - the Gigya server redirects the user to the URL defined in the redirect_uri parameter and appends response parameters.
     *
     * Technically speaking, a connection is an established session with the social network and it expires according to the social network policy. A valid and active connection will give your site access to the user's social graph and ability to perform various social actions, such as publishing a newsfeed report to the connected social network.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41738a6470b21014bbc5a10ce4041860.html
     */
    addConnection: (params: SocializeAddConnectionRequest) => Promise<SocializeAddConnectionResponse>;

    /**
     * This API deletes the specified user's account from Gigya's database. The Gigya user account to be deleted is specified by the UID parameter.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4173b12870b21014bbc5a10ce4041860.html
     */
    deleteAccount: (params: SocializeDeleteAccountRequest) => Promise<SocializeDeleteAccountResponse>;

    /**
     * Utility API for deleting user's settings in Gigya's database.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4173d7fe70b21014bbc5a10ce4041860.html
     */
    delUserSettings: (params: SocializeDelUserSettingsRequest) => Promise<SocializeDelUserSettingsResponse>;

    /**
     * This API allows sites integrating 3rd party plugins to validate the UID of a logged-in user. More specifically, it provides a means for 3rd party plugins to authenticate a user when the plugin does not have access to the site secret.
     *
     * When using signatures with a Gigya user key or Gigya Application key, you must use this API to exchange the received signature, default signature validation always uses the Partner secret, not a user or application key secret.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4173ebc970b21014bbc5a10ce4041860.html
     */
    exchangeUIDSignature: (
        params: SocializeExchangeUIDSignatureRequest,
    ) => Promise<SocializeExchangeUIDSignatureResponse>;

    /**
     * This API deauthorizes the Facebook login from your app and removes the Facebook identity from a user's profile on SAP Customer Data Cloud.
     *
     * @https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/2a1d9c89427a4c5991eb76965bc0bb81.html
     */
    'facebook.deauthorize': (
        params: SocializeFacebookDeauthorizeRequest,
    ) => Promise<SocializeFacebookDeauthorizeResponse>;

    /**
     * A generic method for making calls to the Facebook Graph API. This method can be used for Graph operations such as publishing Graph actions to the user's Facebook timeline.
     *
     * To publish Graph actions, you must first configure your app for Graph actions and submit it for approval.
     *
     * SAP Customer Data Cloud uses a set version of the Facebook Graph API. You can not explicitly define any specific Graph API version when using our APIs.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4174262170b21014bbc5a10ce4041860.html
     */
    facebookGraphOperation: (
        params: SocializeFacebookGraphOperation,
    ) => Promise<SocializeFacebookGraphOperationResponse>;

    /**
     * Returns the list of email contacts of the current user, from all the providers that support retrieving contacts. Contact information include first name, last name and email.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4174743070b21014bbc5a10ce4041860.html
     */
    getContacts: (params: SocializeGetContactsRequest) => Promise<SocializeGetContactsResponse>;

    /**
     * Technically speaking, a connection is an established session with the social network and it expires according to the social network policy. A valid and active connection will give your site access to the user's social graph and ability to perform various social actions, such as publishing a newsfeed report to the connected social network.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4175c2f570b21014bbc5a10ce4041860.html
     */
    getToken: (params: SocializeGetTokenRequest) => Promise<SocializeGetTokenResponse>;

    /**
     * Enables retrieving raw data directly from the provider. This allows accessing provider specific information, which is not supported by Gigya.
     *
     * The response is returned exactly as it is received from the provider without translation by Gigya, so it is the site's responsibility to know how to use the information.
     *
     * @note The response from the provider is not sanitized. Keep this in mind when calling the API.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4175273e70b21014bbc5a10ce4041860.html
     */
    getRawData: <T = unknown>(params: SocializeGetRawDataRequest) => Promise<SocializeGetRawDataResponse<T>>;

    /**
     * Returns the session information required for making direct API calls to the providers. This allows retrieving information or performing operations which are not yet supported by the Gigya service.
     *
     * Each provider requires an individual set of fields for making direct API call. This set of fields is different for each provider. Respectively, in the Response object, only the fields which are required by the specific provider are available (according to the provider which is specified in the method's input parameter).
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4175af8f70b21014bbc5a10ce4041860.html
     */
    getSessionInfo: (params: SocializeGetSessionInfoRequest) => Promise<SocializeGetSessionInfoResponse>;

    /**
     * This method retrieves extended information regarding a user.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/417637a470b21014bbc5a10ce4041860.html
     */
    getUserInfo: (params: SocializeGetUserInfoRequest) => Promise<SocializeGetUserInfoResponse>;

    /**
     * This method enables you to import a social or SAML user into SAP Customer Data Cloud.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41768a0370b21014bbc5a10ce4041860.html
     */
    importIdentities: (params: SocializeImportIdentitiesRequest) => Promise<SocializeImportIdentitiesResponse>;

    /**
     * This API serves as an endpoint for user authentication using their social network / webmail account. This method requires user interaction. To log the user in, redirect the user to the specified URL and pass the required parameters. The login URL shows the login screen of the requested provider. In some cases, such as Facebook, users will also be asked to give the site permission to access their personal data.
     *
     * When the login process completes (either successfully or with an error), Gigya server redirects the user to the URL defined in the redirect_uri parameter and appends response parameters.
     *
     * The login operation is currently supported by the following providers:
     * - Amazon
     * - Apple
     * - Blogger
     * - Facebook
     * - FourSquare
     * - GooglePlus
     * - Kakao
     * - LINE
     * - LinkedIn
     * - Livedoor
     * - Messenger
     * - mixi
     * - Naver
     * - Netlog
     * - Odnoklassniki
     * - Orange France
     * - PayPayOAuth
     * - Tencent QQ,
     * - Renren
     * - Sina Weibo
     * - Spiceworks
     * - Twitter
     * - VKontakte
     * - WeChat
     * - WordPress
     * - Xing
     * - Yahoo
     * - Yahoo Japan
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4176c45f70b21014bbc5a10ce4041860.html
     */
    login: (params: SocializeLoginRequest) => Promise<SocializeLoginResponse>;

    /**
     * This method logs the current user out of Gigya's Platform. We highly recommend calling this method when the user logs out of the hosting site.
     *
     * @note Note, that this method does not disconnect the user from the providers, it merely indicates that the user is logged out. When the user logs in again, full access to all of the previously connected providers will be restored.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4177032870b21014bbc5a10ce4041860.html
     */
    logout: (params: SocializeLogoutRequest) => Promise<SocializeLogoutResponse>;

    /**
     * This method notifies Gigya of an external login that happened outside of the Accounts system.
     *
     * The notifyLogin call registers a new user in the Accounts service, in case the siteUID parameter provided is new, or reconnects a returning user in case the siteUID already exists in our records.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41773d6170b21014bbc5a10ce4041860.html
     */
    notifyLogin: (params: SocializeNotifyLoginRequest) => Promise<SocializeNotifyLoginResponse>;

    /**
     * This method notifies the SAP Customer Data Cloud service that the user has completed the registration process at your site. SAP Customer Data Cloud then completes the user's login process.
     *
     * If you pass the optional "siteUID" parameter with this method (see the table of parameters below), this method also acts like the socialize.setUID method, replacing SAP Customer Data Cloud UID in the user account with the site UID that you provide.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4177644c70b21014bbc5a10ce4041860.html
     */
    notifyRegistration: (params: SocializeNotifyRegistrationRequest) => Promise<SocializeNotifyRegistrationResponse>;

    /**
     * Disconnects the current user from one or all of the connected providers. Disconnection from a provider means that the session with the provider closes. Removing connection also disassociates (unlinks) the social identity from the user, unless this is the user's only login identity. For the following providers the removeConnection will also logout the user from the social network: Facebook, Yahoo, Google, and LinkedIn.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4177d96470b21014bbc5a10ce4041860.html
     */
    removeConnection: (params: SocializeRemoveConnectionRequest) => Promise<SocializeRemoveConnectionResponse>;

    /**
     * This method replaces the SAP Customer Data Cloud UID in the user account on SAP Customer Data Cloud's DB, with a site user ID that you provide. This method should be used in case a user ID has changed.
     *
     * @note This method is not part of our recommended social registration flow. Please use the socialize.notifyRegistration method instead, and pass the "siteUID" parameter. Learn more in Social Login.
     * @note This method replaces the deprecated socialize.linkAccounts method.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41787acc70b21014bbc5a10ce4041860.html
     */
    setUID: (params: SocializeSetUIDRequest) => Promise<SocializeSetUIDResponse>;

    /**
     * This method updates a user's site information.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/41788e7070b21014bbc5a10ce4041860.html
     */
    setUserInfo: (params: SocializeSetUserInfoRequest) => Promise<SocializeSetUserInfoResponse>;
};
