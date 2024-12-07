import { Gigya, GigyaDataCenter } from '@gigya-ts/gigya';

import { MyDataSchema, MyPreferencesSchema, MySubscriptionsSchema } from './my-gigya-schemas';

/**
 * Create a Gigya instance with your API key, data center, and credentials.
 *
 * Pass your custom data schema, preferences schema, and subscriptions schemas as generics to get type-safe responses.
 *
 * Export this and use it in your application to access the Gigya REST API.
 */
export const gigya = Gigya<MyDataSchema, MyPreferencesSchema, MySubscriptionsSchema>({
    apiKey: process.env.GIGYA_API_KEY ?? '',
    dataCenter: (process.env.GIGYA_DATA_CENTER as GigyaDataCenter) ?? 'eu1.gigya.com',
    credentials: {
        type: 'key-secret',
        userKey: process.env.GIGYA_USER_KEY ?? '',
        secret: process.env.GIGYA_USER_SECRET ?? '',
    },
});
