import { Gigya } from '@gigya-ts/gigya';

async function getAccountInfoExample() {
    const gigya = Gigya({
        apiKey: 'YOUR_API_KEY',
        dataCenter: 'eu1.gigya.com',
        credentials: {
            userKey: 'YOUR_USER_KEY',
            secret: 'YOUR_SECRET'
        }
    });

    const getAccountInfoResponse = await gigya.accounts('setAccountInfo', {
        UID: 'YOUR_UID',
        profile: {
            lastName: 'Doe',
        }
    });

    if (getAccountInfoResponse.errorCode !== 0) throw new Error(getAccountInfoResponse.errorDetails);

    console.log('getAccountInfoResponse', getAccountInfoResponse);
}

getAccountInfoExample().catch(console.error);
