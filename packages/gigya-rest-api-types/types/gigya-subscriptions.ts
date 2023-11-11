/* eslint-disable no-unused-vars */

/**
 * When implementing Subscription Management, the Subscription Object is used to pass information regarding a user's email subscription status to a specific newsletter or service.
 *
 * The structure of the Subscriptions Object is as follows, where the available fields are listed below:
 *
 * subscriptions.\<subscriptionID\>.email.\<field\>
 *
 * Where <subscriptionID> is the name of this subscription in your site's schema.
 *
 * Documentation: {@link https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/417a3ebd70b21014bbc5a10ce4041860.html Subscriptions Object REST}
 */
export type GigyaSubscriptions = {
    [subscriptionID: string]:
        | {
              /**
               * Includes the email object, below.
               */
              email: GigyaSubscription;
          }
        | undefined;
};

/**
 * By default, a GigyaSubscription is what you get back from a call to accounts.getAccountInfo.
 */
export type GigyaSubscription = GigyaSubscriptionRead;

/**
 * What accounts.getAccountInfo returns when reading a subscription.
 *
 * @see https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/417a3ebd70b21014bbc5a10ce4041860.html
 */
export type GigyaSubscriptionRead = {
    /**
     * The status of the user's subscription to this service. Note that even when a subscription requires double opt-in, the value of the isSubscribed parameter changes immediately when the subscriber submits their subscription (e.g. flags a checkbox in an SAP Customer Data Cloud screen and clicks "Submit"), and before the email confirmation.
     */
    isSubscribed: boolean;
    /**
     * An array of tags that you can define which are associated with the subscription.
     */
    tags: Array<string>;
    /**
     * The time when the isSubscribed value was last changed in ISO 8601 format, for example, "2017-07-16T19:20:30Z". Note that even when a subscription requires double opt-in, the value of the isSubscribed parameter changes immediately when the subscriber submits their subscription (for example, flags a checkbox in an SAP Customer Data Cloud screen and clicks "Submit"), and before the email confirmation.
     */
    lastUpdatedSubscriptionState: string;
    /**
     * Whether or not the subscription requires double opt-in, it contains a double opt-in object.
     */
    doubleOptIn?: GigyaSubscriptionDoubleOptIn;
};

/**
 * The double opt-in object contains information about the double opt-in status of the subscription.
 */
export type GigyaSubscriptionDoubleOptIn = {
    /**
     * Whether the Double Opt-in email was sent using the Conditional Double Opt-in option. If this is true, the email was NOT sent and the user was automatically validated.
     */
    doiConditionallyConfirmed: boolean;
    /**
     * The time at which the latest confirmation email was sent to the subscriber..
     */
    emailSentTime: string;
    /**
     * The time at which the subscriber confirmed the subscription. If the user has not confirmed (or double opt-in is not required for this subscription), this is set to "null".
     */
    confirmTime: string;
    /**
     * The confirmation status. Returns one of the following values:
     * + Pending - The user subscribed but has not yet confirmed their subscription.
     * + NotConfirmed - Double opt-in is not required, the user has never subscribed, or the user has unsubscribed, before or after confirmation.
     * + Confirmed - The user has confirmed their subscription.
     */
    status: 'Pending' | 'NotConfirmed' | 'Confirmed';
};

/**
 * When manually passing subscription information for a user using accounts.setAccountInfo, you can change only the value of the following parameters:
 * - isSubscribed
 * - tags
 * - doubleOptIn.doiConditionallyConfirmed
 *
 * You can define whether a double opt-in subscription is conditionally verified by passing "isExternallyVerified": true within the doubleOptIn object of the subscription.
 *
 * Picks out only the "isSubscribed", "tags", and "doubleOptIn.doiConditionallyConfirmed" fields from the GigyaSubscriptionRead type.
 */
export type GigyaSubscriptionUpdate = Pick<GigyaSubscriptionRead, 'isSubscribed'> &
    Partial<Pick<GigyaSubscriptionRead, 'tags'>> & {
        doubleOptIn?: Pick<GigyaSubscriptionRead, 'doubleOptIn'>;
    };

/**
 * Helper to convert a subscriptions schema into a subscriptions update schema.
 *
 * Used in accounts.setAccountInfo, for example.
 */
export type UpdateSubscriptions<SubscriptionsSchema extends GigyaSubscriptions> = {
    [subscriptionID in keyof SubscriptionsSchema]: {
        email: GigyaSubscriptionUpdate;
    };
};
