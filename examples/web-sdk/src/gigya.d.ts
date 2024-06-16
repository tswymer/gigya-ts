import { GigyaWebSDK } from '@gigya-ts/web-sdk';

type MyAccountSchema = {

}

type MyPreferencesSchema = {

}

type MySubscriptionsSchema = {

}

type MyGigyaWebSDK = GigyaWebSDK<MyAccountSchema, MyPreferencesSchema, MySubscriptionsSchema>;

declare global {
    // eslint-disable-next-line no-unused-vars
    interface Window {
        /**
         * https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/417f6b5e70b21014bbc5a10ce4041860.html?locale=en-US&q=onGigyaServiceReady#ongigyaserviceready
         */
        onGigyaServiceReady?: () => void;

        gigya?: MyGigyaWebSDK;
    }
}
