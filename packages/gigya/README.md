# @gigya-ts/gigya

A tiny type-safe client for interacting with the Gigya / SAP Customer Data Cloud REST API from browsers and Node.js.

See [@gigya-ts/web-sdk](/packages/web-sdk/README.md) if you are working with the Web SDK instead.

## Installation

<a href="https://pkg-size.dev/@gigya-ts/gigya"><img src="https://pkg-size.dev/badge/bundle/3415" title="Bundle size for @gigya-ts/gigya"></a>

```bash
# npm
npm install @gigya-ts/gigya
```

## Usage

```typescript
// Import "Gigya"
import { Gigya } from '@gigya-ts/gigya';

// Create a new Gigya instance with your site info and credentials
const gigya = Gigya({
    apiKey: 'YOUR_API_KEY',
    dataCenter: 'eu1.gigya.com',
    credentials: {
        userKey: 'YOUR_USER_KEY',
        secret: 'YOUR_SECRET',
    },
});

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
