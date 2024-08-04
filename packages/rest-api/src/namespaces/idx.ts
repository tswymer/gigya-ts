import { GigyaRequest, GigyaResponse } from '../types/gigya-requests';

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/415e96a670b21014bbc5a10ce4041860.html#parameters
 */
export type IDXDeleteDataflowRequest = GigyaRequest<{}>;

/**
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/415e96a670b21014bbc5a10ce4041860.html#response-data
 */
export type IDXDeleteDataflowResponse = GigyaResponse<{}>;

export type GigyaIDXNamespace = {
    /**
     * The method deletes a Dataflow by ID and deletes also all the drafts related to the dataflow.
     *
     * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/415e96a670b21014bbc5a10ce4041860.html
     */
    deleteDataflow: (params: IDXDeleteDataflowRequest) => Promise<IDXDeleteDataflowResponse>;
};
