import { gigya as MyGigya } from '../my-gigya';

export async function accountsSearchLastNamesExample(gigya: typeof MyGigya, lastName: string) {
    // Execute the "ds.search" API method
    const accountsSearchResponse = await gigya.accounts.search({
        query: `SELECT * FROM accounts WHERE profile.lastName CONTAINS "${lastName}"`,
    });

    // Check for a successful response
    if (accountsSearchResponse.errorCode !== 0) throw new Error(accountsSearchResponse.errorMessage);

    // Since we checked for a successful response, we can safely assume that "results" is not undefined
    return accountsSearchResponse.results!;
}
