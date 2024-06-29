import { MyGigya } from "./my-gigya";

export async function setAccountInfoExample(gigya: MyGigya, UID: string, myDataSchemaString: string, myDataSchemaNumber: number, grantedMyPreferencesSchema: boolean) {
    // Execute the "accounts.setAccountInfo" API method
    const setAccountInfoResponse = await gigya.accounts('setAccountInfo', {
        UID,
        profile: {
            lastName: 'Doe',
        },
        // Type-safe requests including your custom data schema
        data: {
            myDataSchemaString,
            myDataSchemaObject: {
                myDataSchemaNumber: myDataSchemaNumber,
            },
        },
        // And your custom preferences schema
        prefereces: {
            myPreferencesSchema: {
                isConsentGranted: grantedMyPreferencesSchema,
            }
        }
    });

    // Check for a successful response
    if (setAccountInfoResponse.errorCode !== 0) throw new Error([
        `Failed to setAccountInfo: ${setAccountInfoResponse.errorMessage}`,
        `Error Code: ${setAccountInfoResponse.errorCode}`,
        `Error Details: ${setAccountInfoResponse.errorDetails}`,
    ].join('\n'));

    return setAccountInfoResponse;
}
