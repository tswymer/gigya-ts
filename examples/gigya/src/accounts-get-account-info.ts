import { MyGigya } from "./my-gigya";

export async function getAccountInfoExample(gigya: MyGigya, UID: string) {
    // Execute the "accounts.getAccountInfo" API method
    const getAccountInfoResponse = await gigya.accounts('getAccountInfo', {
        UID,
        include: 'profile,data,preferences,loginIDs,isLockedOut',
        extraProfileFields: 'locale',
    });

    // Check for a successful response
    if (getAccountInfoResponse.errorCode !== 0) throw new Error([
        `Failed to getAccountInfo: ${getAccountInfoResponse.errorMessage}`,
        `Error Code: ${getAccountInfoResponse.errorCode}`,
        `Error Details: ${getAccountInfoResponse.errorDetails}`,
    ].join('\n'));

    // Type-safe responses including your custom schemas
    console.log(getAccountInfoResponse.data?.myDataSchemaObject?.myDataSchemaNumber);
    console.log(getAccountInfoResponse.preferences?.myPreferencesSchema?.isConsentGranted);

    return getAccountInfoResponse;
}
