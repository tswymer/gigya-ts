import { MyGigya } from './my-gigya';

export async function accountsSearchLastNamesExample(gigya: MyGigya, lastName: string) {
    // Execute the "ds.search" API method
    const accountsSearchResponse = await gigya.accounts('search', {
        query: `SELECT * FROM accounts WHERE profile.lastName CONTAINS "${lastName}"`,
    });

    // Check for a successful response
    // prettier-ignore
    if (accountsSearchResponse.errorCode !== 0) throw new Error([
        `Failed to accounts.search: ${accountsSearchResponse.errorMessage}`,
        `Error Code: ${accountsSearchResponse.errorCode}`,
        `Error Details: ${accountsSearchResponse.errorDetails}`,
    ].join('\n'));

    // Type-safe responses including your custom schemas
    console.log(accountsSearchResponse.results?.[0]?.data?.myDataSchemaString);

    // Since we checked for a successful response, we can safely assume that "results" is not undefined
    return accountsSearchResponse.results!;
}
