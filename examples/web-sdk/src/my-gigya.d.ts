import { GigyaPreference, GigyaWebSDK } from '@gigya-ts/web-sdk';

/**
 * Your custom data schema, as you have it defined in Gigya / SAP Customer Data Cloud.
 */
type MyDataSchema = {
    myDataSchemaString?: string;
    myDataSchemaObject?: {
        myDataSchemaNumber?: number;
    };
};

/**
 * Your custom preferences schema, as you have it defined in Gigya / SAP Customer Data Cloud.
 */
type MyPreferencesSchema = {
    terms?: {
        myTermsSchema?: GigyaPreference;
    };
    myPreferencesSchema?: GigyaPreference;
};

/**
 * Your custom preferences schema, as you have it defined in Gigya / SAP Customer Data Cloud.
 */
type MySubscriptionsSchema = {};

/**
 * The WebSDK ("gigya" object) is in the global scope, so you can access it from anywhere in your application.
 *
 * Here we extend the global scope to include the "gigya" object, passing your own schemas so that we get type-safe responses with you use the WebSDK.
 *
 * We also define a global "onGigyaServiceReady" function, which is called when the Gigya service is ready.
 */
declare global {
    interface Window {
        gigya?: GigyaWebSDK<MyDataSchema, MyPreferencesSchema, MySubscriptionsSchema>;

        /**
         * https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/417f6b5e70b21014bbc5a10ce4041860.html?locale=en-US&q=onGigyaServiceReady#ongigyaserviceready
         */
        onGigyaServiceReady?: () => void;
    }
}
