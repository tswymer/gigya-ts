import { GigyaPreference, GigyaWebSDK } from '@gigya-ts/web-sdk';

type MyDataSchema = {
    myCustomString: string;
    myCustomObject: {
        myCustomNumber: number;
    };
}

type MyPreferencesSchema = {
    terms: {
        myTerms: GigyaPreference,
    },
    myCustomPreference: GigyaPreference,
}

type MySubscriptionsSchema = {

}

declare global {
    interface Window {
        /**
         * https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/417f6b5e70b21014bbc5a10ce4041860.html?locale=en-US&q=onGigyaServiceReady#ongigyaserviceready
         */
        onGigyaServiceReady?: () => void;

        gigya?: GigyaWebSDK<MyDataSchema, MyPreferencesSchema, MySubscriptionsSchema>;
    }
}
