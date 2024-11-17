# @gigya-ts/web-sdk

Add type-safety to the [Gigya Web SDK](https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/417f6b5e70b21014bbc5a10ce4041860.html).

See [@gigya-ts/gigya](/packages/gigya/README.md) if you want to use the [Gigya REST API](https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/416d906d70b21014bbc5a10ce4041860.html) instead (even from the browser!).

## Installation

<a href="https://pkg-size.dev/@gigya-ts/web-sdk"><img src="https://pkg-size.dev/badge/bundle/0" title="Bundle size for @gigya-ts/web-sdk"></a>

```bash
# npm
npm install @gigya-ts/web-sdk
```

## Usage

Define your own schema types. They will be used to type the data used when interacting with the Web SDK.

```typescript
import { GigyaPreference } from '@gigya-ts/web-sdk';

// Data Schema
type MyDataSchema = {
    myCustomString: string;
    myCustomObject: {
        myCustomNumber: number;
    };
};

// Preferences Schema
type MyPreferencesSchema = {
    terms: {
        myTerms: GigyaPreference;
    };
    myCustomPreference: GigyaPreference;
};

// Subscriptions Schema
type MySubscriptionsSchema = {};
```

Then, extend the global window with your the Gigya Web SDK, including your schemas:

```typescript
// gigya.d.ts (or any other name)
import { GigyaWebSDK } from '@gigya-ts/web-sdk';

declare global {
    interface Window {
        onGigyaServiceReady?: () => void;

        gigya?: GigyaWebSDK<MyAccountSchema, MyPreferencesSchema, MySubscriptionsSchema>;
    }
}
```

Once the global window has been extended, you can use the Web SDK as you normally would:

```typescript
window.onGigyaServiceReady = () => {
    window.gigya?.accounts.getAccountInfo({
        callback: (response) => {
            console.log('gigya.account.getAccountInfo response', response);
        },
    });
};
```
