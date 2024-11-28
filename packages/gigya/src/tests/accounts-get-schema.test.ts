import assert from 'assert/strict';
import { describe, it } from 'node:test';

import { Gigya } from '../gigya';
import { GigyaDataCenter } from '..';

describe('accounts.getSchema API', async () => {
    const gigya = Gigya({
        apiKey: process.env.GIGYA_API_KEY as string,
        dataCenter: process.env.GIGYA_DATA_CENTER as GigyaDataCenter,
        credentials: { type: 'none' },
    });

    const getSchemaResponse = await gigya.accounts.getSchema({
        include: 'profileSchema,dataSchema,subscriptionsSchema',
    });

    await it('should respond with errorCode 0', () => assert.equal(getSchemaResponse.errorCode, 0));

    await it('should include a profile schema in the response', () =>
        assert.notEqual(getSchemaResponse.profileSchema?.fields, undefined));

    await it('should include a data schema in the response', () =>
        assert.notEqual(getSchemaResponse.dataSchema?.fields, undefined));
});
