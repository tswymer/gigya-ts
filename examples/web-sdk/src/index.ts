const startTimestamp = Date.now();

/**
 * Small helper function to update an element on the page with a new value.
 */
function updatePageElement(elementId: string, value: string) {
    const element = document.getElementById(elementId);

    if (element) element.innerText = value;
}

/**
 * Define a global "onGigyaServiceReady" function, which is called by the Web SDK when the service is ready.
 *
 * Loads the "profileSchema" and prints them to the page.
 */
window.onGigyaServiceReady = async () => {
    // Assert that window.gigya is defined to that TypeScript is happy going forward
    if (!window.gigya) return alert('onGigyaServiceReady was called, but window.gigya is not defined!');

    // Time how long is took for the Gigya Web SDK to be ready
    updatePageElement('is-gigya-service-ready', `Yes (loaded ${Date.now() - startTimestamp}ms)`);

    // Make a call to the Gigya Web SDK using regular callbacks
    window.gigya.accounts.getSchema({
        include: 'profileSchema',
        callback(response) {
            // Make sure we have a successful response
            if (response.errorCode !== 0)
                return updatePageElement('gigya-profile-schema', `Error: ${response.errorMessage}`);

            // Print the profile schema to the page
            updatePageElement('gigya-profile-schema', JSON.stringify(response.profileSchema, null, 2));

            // Print the data schema to the page
            updatePageElement('gigya-data-schema', JSON.stringify(response.dataSchema, null, 2));
        },
    });
};
