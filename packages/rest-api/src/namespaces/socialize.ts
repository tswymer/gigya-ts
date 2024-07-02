import { GigyaRequest, GigyaResponse } from '../types/gigya-helpers';

/**
 * This API retrieves an access token, which is required as part of the OAuth 2.0 protocol.
 *
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4175c2f570b21014bbc5a10ce4041860.html#parameters
 */
export type SocializeGetTokenRequest = GigyaRequest<{
    /**
     *
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

export type GigyaSocializeNamespace = {
    getToken: (params: SocializeGetTokenRequest) => Promise<SocializeGetTokenResponse>;
};
