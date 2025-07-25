# @gigya-ts/gigya

A tiny type-safe client for interacting with the [Gigya REST API](https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/416d906d70b21014bbc5a10ce4041860.html) for Node.js and the browser.

See [@gigya-ts/web-sdk](/packages/web-sdk/README.md) if you are using the [Gigya Web SDK](https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/417f6b5e70b21014bbc5a10ce4041860.html) instead.

## Installation

<a href="https://pkg-size.dev/@gigya-ts/gigya"><img src="https://pkg-size.dev/badge/bundle/3415" title="Bundle size for @gigya-ts/gigya"></a>

Install the `@gigya-ts/gigya` package from your package manager of choice:

```bash
# npm
npm add @gigya-ts/gigya
# pnpm
pnpm add @gigya-ts/gigya
```

## Usage

### 0. (Optional) Define your Custom Gigya Schemas

See [adding custom schemas](/docs/adding-custom-schemas.md) to define your custom schemas (data, preferences, etc.) so that response types from the REST API include your custom fields.

### 1. Create a Gigya Client

Create a new Gigya client instance with your API key and data center. Make sure to pass your own schemas as generics if you want the client to return your own types.

```typescript
import { Gigya } from '@gigya-ts/gigya';

const gigya = Gigya<MyDataSchema, MyPreferencesSchema, MySubscriptionsSchema>({
    apiKey: '4_qd71...',
    dataCenter: 'eu1.gigya.com',
    // see credentials in next step
});
```

### 2. Choose an Authentication Method

`@gigya-ts/gigya` supports multiple different authentication methods:

#### (Recommended) User/Application key and private key

Creates a short-lived bearer token for every request using admin or application user's RSA key-pair. This is the recommended approach when accessing the REST API with server credentials as real privateKey is never actually sent accross the wire itself. See [Asymmetric Keys](https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4eb8307555d24988a5a3c542b65ccf77.html) for more information.

```typescript
export const gigya = Gigya({
    // ...
    credentials: {
        type: 'asymmetric-key',
        userKey: process.env.GIGYA_USER_KEY,
        privateKey: process.env.GIGYA_PRIVATE_KEY,
    },
});
```

#### User/Application Key and Secret

Attaches a userKey and secret from an admin or application user to every request made to the REST API. See [Application and User Keys](https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/6d7bed554d8b4cf09a16faadd5519d1b.html) for more information.

```typescript
export const gigya = Gigya({
    // ...
    credentials: {
        type: 'key-secret',
        userKey: process.env.GIGYA_USER_KEY,
        secret: process.env.GIGYA_USER_SECRET,
    },
});
```

#### Bearer Token

Uses an accessToken obtained from [socialize.getToken](https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4175c2f570b21014bbc5a10ce4041860.html) to call the REST API using the authorizations of a single user (even without passing their UID).

```typescript
export const gigya = Gigya({
    // ...
    credentials: {
        type: 'bearer-token',
        token: 'st2.s.AtLtNX...',
    },
});
```

#### No Authentication

Make unauthenticated requests to the REST API without any credentials (e.g. to fetch public schemas, policies, ...).

```typescript
export const gigya = Gigya({
    // ...
    credentials: { type: 'none' },
});
```

### 3. Make a Request to the Gigya REST API

Once `Gigya` has been configured, make requests to the REST API using the created client:

```typescript
// Call the "accounts.setAccountInfo" API method from the Gigya API
const setAccountInfoResponse = await gigya.accounts.setAccountInfo({
    UID: 'YOUR_UID',
    profile: {
        lastName: 'Doe',
    },
});

// Check we got a successful response
if (setAccountInfoResponse.errorCode !== 0) throw new Error(getAccountInfoResponse.errorMessage);
```

See [examples/gigya](/examples/gigya/) for more usage examples.
