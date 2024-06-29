import { Gigya, GigyaPreference } from "@gigya-ts/gigya";

/**
 * Your custom data schema, as you have it defined in Gigya / SAP Customer Data Cloud.
 */
type MyDataSchema = {
    myDataSchemaString: string;
    myDataSchemaObject: {
        myCustomNumber: number;
    };
};

/**
 * Your custom preferences schema, as you have it defined in Gigya / SAP Customer Data Cloud.
 */
type MyPreferencesSchema = {
    terms: {
        myTerms: GigyaPreference;
    };
    myPreferences: GigyaPreference;
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
    apiKey: 'YOUR_API_KEY',
    dataCenter: 'eu1.gigya.com',
    credentials: {
        userKey: 'YOUR_USER_KEY',
        secret: 'YOUR_SECRET',
    },
});
