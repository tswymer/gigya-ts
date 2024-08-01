import assert from 'assert/strict';
import { describe, it } from 'node:test';
import { myGigya } from './my-gigya';

describe('accounts.getSchema API', async () => {
    const getSchemaResponse = await myGigya.accounts.getSchema({
        include: 'profileSchema,dataSchema,subscriptionsSchema',
    });

    await it('should respond with errorCode 0', () => assert.equal(getSchemaResponse.errorCode, 0));

    await it('should include a profile schema in the response', () =>
        assert.notEqual(getSchemaResponse.profileSchema?.fields, undefined));

    await it('should include a data schema in the response', () =>
        assert.notEqual(getSchemaResponse.dataSchema?.fields, undefined));
});
