window.onGigyaServiceReady = () => {
    console.log('Gigya service is ready');

    window.gigya?.accounts.showScreenSet({
        screenSet: 'Default-RegistrationLogin',
    });

    window.gigya?.accounts.getAccountInfo({
        callback: (response) => {
            console.log('gigya.account.getAccountInfo response', response);
        },
    });
};
