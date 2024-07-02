import { Gigya, GigyaDataCenter, GigyaPreference } from '@gigya-ts/gigya';

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
 * Setup your Gigya instance with your API key, data center, and credentials.
 *
 * Pass your custom data schema, preferences schema, and subscriptions schema to get type-safe responses.
 *
 * Use this to make requests to your Gigya site.
 */
export const myGigya = Gigya<MyDataSchema, MyPreferencesSchema, MySubscriptionsSchema>({
    apiKey: process.env.GIGYA_API_KEY ?? '',
    dataCenter: (process.env.GIGYA_DATA_CENTER as GigyaDataCenter) ?? 'eu1.gigya.com',
    credentials: {
        type: 'key-secret',
        userKey: process.env.GIGYA_USER_KEY ?? '',
        secret: process.env.GIGYA_USER_SECRET ?? '',
    },
});

/**
 * Helper type for a Gigya instance with your custom schemas.
 */
export type MyGigya = typeof myGigya;
