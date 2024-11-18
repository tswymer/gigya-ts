# Adding custom schemas

Both the [@gigya-ts/rest-api](packages/rest-api/README.md) and the [@gigya-ts/web-sdk](packages/web-sdk/README.md) projects support adding custom schemas, allowing you to receive type-safe responses including your custom fields.

## Creating type definitions from Gigya schemas

### Import helper types

Import helper types from the library you are using to help you define your schemas:

```typescript
// When using the REST API
import { GigyaPreference } from '@gigya-ts/gigya';

// When using the Web SDK
import { GigyaPreference } from '@gigya-ts/web-sdk';
```

### Define your schemas

When defining your Gigya schemas, it is recommended to make all fields optional. Gigya will only return fields that have been set, and even required fields may not be there (e.g. if a user has not consented to a required consent yet).

Keeping all fields optional in type definitions force will you to handle cases where a field is not set in Gigya, which is a good practice to avoid runtime errors.

```typescript
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
