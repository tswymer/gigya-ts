import { GigyaPreference } from '@gigya-ts/web-sdk';

/**
 * Your custom data schema, as you have it defined in Gigya / SAP Customer Data Cloud.
 */
export type MyDataSchema = {
    myDataSchemaString?: string;
    myDataSchemaObject?: {
        myDataSchemaNumber?: number;
    };
    myDataSchemaArray?: string[];
};

/**
 * Your custom preferences schema, as you have it defined in Gigya / SAP Customer Data Cloud.
 */
export type MyPreferencesSchema = {
    terms?: {
        myTermsSchema?: GigyaPreference;
    };
    myPreferencesSchema?: GigyaPreference;
};

/**
 * Your custom preferences schema, as you have it defined in Gigya / SAP Customer Data Cloud.
 */
export type MySubscriptionsSchema = {};
