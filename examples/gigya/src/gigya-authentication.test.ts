import { Gigya, GigyaDataCenter } from '@gigya-ts/gigya';
import assert from 'assert/strict';
import { describe, it } from 'node:test';

describe('gigya authentication: anonymous', async () => {
    const anoymousGigya = Gigya({
        apiKey: process.env.GIGYA_API_KEY as string,
        dataCenter: process.env.GIGYA_DATA_CENTER as GigyaDataCenter,
        credentials: { type: 'none' },
    });

    await it('should successfully run accounts.getPolicies for public policies', async () => {
        const getPoliciesResponse = await anoymousGigya.accounts.getPolicies({
            sections: 'gigyaPlugins,passwordComplexity,registration,security',
        });

        assert.equal(getPoliciesResponse.errorCode, 0);

        assert.notEqual(getPoliciesResponse.gigyaPlugins, undefined);
        assert.notEqual(getPoliciesResponse.passwordComplexity, undefined);
        assert.notEqual(getPoliciesResponse.registration, undefined);
        assert.notEqual(getPoliciesResponse.security, undefined);
    });

    await it('should fail running "accounts.getPolicies" for private policies with "Permission denied"', async () => {
        const getAccountInfoResponse = await anoymousGigya.accounts.getPolicies({
            sections: 'accountOptions,emailVerification,federation,twoFactorAuth',
        });

        assert.equal(getAccountInfoResponse.errorCode, 403007);
        assert.equal(getAccountInfoResponse.statusCode, 403);
        assert.equal(getAccountInfoResponse.errorMessage, 'Permission denied');

        assert.equal(getAccountInfoResponse.accountOptions, undefined);
        assert.equal(getAccountInfoResponse.emailVerification, undefined);
        assert.equal(getAccountInfoResponse.federation, undefined);
        assert.equal(getAccountInfoResponse.twoFactorAuth, undefined);
    });
});

describe('gigya authentication: user key + secret', async () => {
    const userkeySecretGigya = Gigya({
        apiKey: process.env.GIGYA_API_KEY as string,
        dataCenter: process.env.GIGYA_DATA_CENTER as GigyaDataCenter,
        credentials: {
            type: 'key-secret',
            userKey: process.env.GIGYA_USER_KEY as string,
            secret: process.env.GIGYA_USER_SECRET as string,
        },
    });

    await testAuthenticatedGigya(userkeySecretGigya);
});

describe('gigya authentication: asymmetric-key', async () => {
    const asymmetricKeyGigya = Gigya({
        apiKey: process.env.GIGYA_API_KEY as string,
        dataCenter: process.env.GIGYA_DATA_CENTER as GigyaDataCenter,
        credentials: {
            type: 'asymmetric-key',
            userKey: process.env.GIGYA_USER_KEY as string,
            privateKey: process.env.GIGYA_PRIVATE_KEY as string,
        },
    });

    await testAuthenticatedGigya(asymmetricKeyGigya);
});

async function testAuthenticatedGigya(gigya: ReturnType<typeof Gigya>) {
    await it('should successfully run accounts.getPolicies for public policies', async () => {
        const getPoliciesResponse = await gigya.accounts.getPolicies({
            sections: 'gigyaPlugins,passwordComplexity,registration,security',
        });

        assert.equal(getPoliciesResponse.errorCode, 0);
        assert.equal(getPoliciesResponse.statusCode, 200);

        assert.notEqual(getPoliciesResponse.gigyaPlugins, undefined);
        assert.notEqual(getPoliciesResponse.passwordComplexity, undefined);
        assert.notEqual(getPoliciesResponse.registration, undefined);
        assert.notEqual(getPoliciesResponse.security, undefined);
    });

    await it('should successfully run "accounts.getPolicies" for private policies', async () => {
        const getPoliciesResponse = await gigya.accounts.getPolicies({
            sections: 'accountOptions,emailVerification,federation,twoFactorAuth',
        });

        assert.equal(getPoliciesResponse.errorCode, 0);
        assert.equal(getPoliciesResponse.statusCode, 200);

        assert.notEqual(getPoliciesResponse.accountOptions, undefined);
        assert.notEqual(getPoliciesResponse.emailVerification, undefined);
        assert.notEqual(getPoliciesResponse.federation, undefined);
        assert.notEqual(getPoliciesResponse.twoFactorAuth, undefined);
    });
}
