# @gigya-ts/web-sdk

Add type-safety to a [Gigya Web SDK](https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/417f6b5e70b21014bbc5a10ce4041860.html) project.

See [@gigya-ts/gigya](/packages/gigya/README.md) if you are using the [Gigya REST API](https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/416d906d70b21014bbc5a10ce4041860.html) instead (even from the browser!).

## Installation

<a href="https://pkg-size.dev/@gigya-ts/web-sdk"><img src="https://pkg-size.dev/badge/bundle/0" title="Bundle size for @gigya-ts/web-sdk"></a>

Install the @gigya-ts/gigya package from your package manager of choice:

```bash
# npm
npm add @gigya-ts/web-sdk
# pnpm
pnpm add @gigya-ts/web-sdk
```

## Usage

### 0. (Optional) Define your custom Gigya schemas

See [adding custom schemas](/docs/adding-custom-schemas.md) to define your custom schemas (data, preferences, etc.) so that response types from the Web SDK include your custom fields.

### 1. Extend the global window with the `gigya` types

Extend the global window with the Gigya Web SDK, including your schemas:

```typescript
// my-gigya.ts
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
