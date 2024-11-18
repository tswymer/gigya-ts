import { gigya as MyGigya } from '../my-gigya';

export async function setAccountInfoExample(
    gigya: typeof MyGigya,
    UID: string,
    lastName: string,
    myDataSchemaString: string,
    myDataSchemaNumber: number,
    grantedMyPreferencesSchema: boolean,
) {
    // Execute the "accounts.setAccountInfo" API method
    const setAccountInfoResponse = await gigya.accounts.setAccountInfo({
        UID,
        profile: { lastName },
        // Type-safe requests including your custom data schema
        data: {
            myDataSchemaString,
            myDataSchemaObject: {
                myDataSchemaNumber: myDataSchemaNumber,
            },
        },
        // And your custom preferences schema
        preferences: {
            myPreferencesSchema: {
                isConsentGranted: grantedMyPreferencesSchema,
            },
        },
    });

    // Check for a successful response
    if (setAccountInfoResponse.errorCode !== 0) throw new Error(setAccountInfoResponse.errorMessage);

    return setAccountInfoResponse;
}
