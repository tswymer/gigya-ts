import { GigyaAuditParams } from './gigya-types';

/**
 * This object represents a record in a site's Audit Log.
 *
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4143948970b21014bbc5a10ce4041860.html
 */
export type AuditLogObject = {
    /**
     * The time in which the request was received.
     */
    '@timestamp': string;
    /**
     * A unique identifier of the transaction.
     */
    callID: string;
    /**
     * The result code of the operation. Code '0' indicates success, any other number indicates failure.
     */
    errCode: number;
    /**
     * The API endpoint used for the action.
     */
    endpoint: string;
    /**
     * A short textual description of the error associated with the errorCode; for logging purposes.
     */
    errMessage: string;
    /**
     * If an error exists, an extended description of the error.
     */
    errDetails: string;
    /**
     * The userKey by which the request was signed.
     */
    userKey: string;
    /**
     * The IP address from which the request was sent.
     */
    sourceIP: string;
    /**
     * A list of parameters sent along with the request.
     */
    params: GigyaAuditParams;
    /**
     * The uid of the user that submitted the request.
     */
    uid: string;
    /**
     * The API key submitted with the request.
     */
    apiKey: string;
    /**
     * Information regarding the original request.
     */
    httpReq: HttpReqObject;
    /**
     * Extended information pertaining to the userKey used to sign the request.
     */
    userKeyDetails: UserKeyDetailsObject;
};

/**
 * The HttpReqObject contains information regarding the original request. This includes the following fields:
 */
export type HttpReqObject = {
    /**
     * The platform used to make the request.
     */
    SDK: string;
    /**
     * A two-character code identifying the country from which the request was made.
     */
    country: string;
};

/**
 * The UserKeyDetailsObject contains extended information pertaining to the userKey used to sign the request. This includes the following fields:
 */
export type UserKeyDetailsObject = {
    /**
     * The description of the userKey.
     */
    description: string;
    /**
     * The name of the user associated with the userKey, or the name of the application key.
     */
    name: string;
    /**
     * The email domain of the userKey's owner.
     */
    emailDomain: string;
};
