import { GigyaData, GigyaPreferences, GigyaSubscriptions } from '@gigya-ts/rest-api';
import { GigyaAccountsNamespaceJS } from './accounts';
import { GigyaSocializeNamespaceJS } from './socialize';
import { GigyaFIdMNamespaceJS } from './fidm';

export type GigyaWebSDK<
    DataSchema extends GigyaData,
    PreferencesSchema extends GigyaPreferences,
    SubscriptionsSchema extends GigyaSubscriptions,
> = {
    accounts: GigyaAccountsNamespaceJS<DataSchema, PreferencesSchema, SubscriptionsSchema>;
    fidm: GigyaFIdMNamespaceJS;
    socialize: GigyaSocializeNamespaceJS;
    isReady: boolean;
};
