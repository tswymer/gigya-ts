import { GigyaWebSDK } from '@gigya-ts/web-sdk';

import { MyDataSchema, MyPreferencesSchema, MySubscriptionsSchema } from './my-gigya-schemas';

/**
 * The WebSDK ("gigya" object) is in the global scope, so you can access it from anywhere in your application.
 *
 * Here we extend the global scope to include the "gigya" object, which is added by the gigya.jsWebSDK.
 *
 * Pass your own schemas to get type-safe responses from WebSDK.
 *
 * We also define a global "onGigyaServiceReady" function, which is called when the Gigya service is ready.
 */
declare global {
    interface Window {
        /**
         * Add type definitions for the global "gigya" Web SDK object.
         */
        gigya?: GigyaWebSDK<MyDataSchema, MyPreferencesSchema, MySubscriptionsSchema>;

        /**
         * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/417f6b5e70b21014bbc5a10ce4041860.html#ongigyaserviceready
         */
        onGigyaServiceReady?: () => void;
    }
}
