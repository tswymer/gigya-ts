import { GigyaData, GigyaPreferences, GigyaSubscriptions } from 'gigya-rest-api-types';
import { GigyaAccountsNamespaceJS } from './accounts';

export type GigyaWebSDK<
    DataSchema extends GigyaData,
    PreferencesSchema extends GigyaPreferences,
    SubscriptionsSchema extends GigyaSubscriptions,
> = {
    accounts: GigyaAccountsNamespaceJS<DataSchema, PreferencesSchema, SubscriptionsSchema>;
};
