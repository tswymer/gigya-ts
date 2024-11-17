# @gigya-ts/gigya

A tiny type-safe wrapper client for interacting with the [Gigya REST API](https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/416d906d70b21014bbc5a10ce4041860.html), for Node.js and browsers.

See [@gigya-ts/web-sdk](/packages/web-sdk/README.md) if you want to use the [Gigya Web SDK](https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/417f6b5e70b21014bbc5a10ce4041860.html) instead.

## Installation

<a href="https://pkg-size.dev/@gigya-ts/gigya"><img src="https://pkg-size.dev/badge/bundle/3415" title="Bundle size for @gigya-ts/gigya"></a>

Install the `@gigya-ts/gigya` package from your package manager of choice:

```bash
# npm
npm add @gigya-ts/gigya
# yarn
yarn add @gigya-ts/gigya
# pnpm
pnpm add @gigya-ts/gigya
```

## Usage

### 0. (Optional) Define your Gigya schemas

When defining your Gigya schemas, it is recommended to make all fields optional. Gigya will only return fields that have been set, and even required fields may not be there (e.g. if a user has not consented to a required consent yet).

Keeping all fields optional in type definitions force will you to handle cases where a field is not set in Gigya, which is a good practice to avoid runtime errors.

```typescript
import { type GigyaPreference } from '@gigya-ts/gigya';

/**
 * Your data schema.
 */
type MyDataSchema = {
    myDataSchemaString?: string;
    myDataSchemaObject?: {
        myDataSchemaNumber?: number;
    };
};

/**
 * Your preferences schema, use 'GigyaPreference' to type preferences.
 */
type MyPreferencesSchema = {
    terms?: {
        myTermsSchema?: GigyaPreference;
    };
    myPreferencesSchema?: GigyaPreference;
};

/**
 * Your subscriptions schema.
 */
type MySubscriptionsSchema = {};
```

### 1. Create a Gigya client and choose an authentication method

Create a new Gigya client instance with your API key and data center. Make sure to pass your own schemas as generics if you want the client to return your own types.

```typescript
import { Gigya } from '@gigya-ts/gigya';

const gigya = Gigya<MyDataSchema, MyPreferencesSchema, MySubscriptionsSchema>({
    apiKey: '4_qd71...',
    dataCenter: 'eu1.gigya.com',
    // see credentials in next step
});
```

Then add your authentication credentials. `@gigya-ts/gigya` supports multiple authentication methods:

#### (Recommended) User/Application key and private key

```typescript
const gigya = Gigya({
    apiKey: '4_qd71...',
    dataCenter: 'eu1.gigya.com',
    credentials: {
        type: 'asymmetric-key',
        userKey: process.env.GIGYA_USER_KEY,
        privateKey: process.env.GIGYA_PRIVATE_KEY,
    },
});
```

#### User/Application key and secret

```typescript
const gigya = Gigya({
    apiKey: '4_qd71...',
    dataCenter: 'eu1.gigya.com',
    credentials: {
        type: 'key-secret',
        userKey: process.env.GIGYA_USER_KEY,
        secret: process.env.GIGYA_USER_SECRET,
    },
});
```

#### No authentication

```typescript
const gigya = Gigya({
    apiKey: '4_qd71...',
    dataCenter: 'eu1.gigya.com',
    credentials: { type: 'none' },
});
```

### 3. Make a request to the Gigya REST API

```typescript
// Call the "accounts.setAccountInfo" API method from the Gigya API
const getAccountInfoResponse = await gigya.accounts.setAccountInfo({
    UID: 'YOUR_UID',
    profile: {
        lastName: 'Doe',
    },
});

// Check we got a successful response
if (getAccountInfoResponse.errorCode !== 0) throw new Error(getAccountInfoResponse.errorDetails);
```
