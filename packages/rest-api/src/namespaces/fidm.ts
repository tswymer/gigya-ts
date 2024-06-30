import { GigyaRequest, GigyaResponse } from '../types/gigya-helpers';

/**
 * This API deletes a SAML Service Provider (SP).
 *  
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/415640e470b21014bbc5a10ce4041860.html#parameters
 */
export type FIdMSAMLIDPDelSPRequest = GigyaRequest<{
    /**
     * The name of the external SP to be deleted.
     */
    name: string;
}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/415640e470b21014bbc5a10ce4041860.html#response-data
 */
export type FIdMSAMLIDPDelSPResponse = GigyaResponse<{}>;

export type GigyaFIdMNamespace = {
    'saml-idp.delSP': (params: FIdMSAMLIDPDelSPRequest) => FIdMSAMLIDPDelSPResponse;
};
