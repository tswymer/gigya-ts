import assert from 'assert/strict';
import { beforeEach, describe, it, mock } from 'node:test';

import { GigyaDataCenter } from '..';
import { Gigya } from '../gigya';
import { ParamsOf } from '../utils';

const requestMiddleware = mock.fn(async (request) => request) satisfies NonNullable<
    NonNullable<ParamsOf<typeof Gigya>[0]['middleware']>['onBeforeRequest']
>[number];
const responseMiddleware = mock.fn(async (_request, response) => response) satisfies NonNullable<
    NonNullable<ParamsOf<typeof Gigya>[0]['middleware']>['onAfterResponse']
>[number];

beforeEach(() => {
    requestMiddleware.mock.restore();
    requestMiddleware.mock.resetCalls();

    responseMiddleware.mock.restore();
    responseMiddleware.mock.resetCalls();
});

describe('middleware', async () => {
    await it('should call the onBeforeRequest middleware once', async () => {
        await Gigya({
            apiKey: process.env.GIGYA_API_KEY as string,
            dataCenter: process.env.GIGYA_DATA_CENTER as GigyaDataCenter,
            credentials: { type: 'none' },
            middleware: {
                onBeforeRequest: [requestMiddleware],
            },
        }).accounts.getPolicies({
            sections: 'gigyaPlugins,passwordComplexity,registration,security',
        });

        assert.equal(requestMiddleware.mock.calls.length, 1);

        assert.equal(requestMiddleware.mock.calls.at(0)?.arguments[0].method, 'POST');
        assert.equal(requestMiddleware.mock.calls.at(0)?.arguments[0].namespace, 'accounts');
        assert.equal(requestMiddleware.mock.calls.at(0)?.arguments[0].endpoint, 'getPolicies');
        assert.equal(
            requestMiddleware.mock.calls.at(0)?.arguments[0].body.get('sections'),
            'gigyaPlugins,passwordComplexity,registration,security',
        );
    });

    await it('should call the onAfterResponse middleware once', async () => {
        await Gigya({
            apiKey: process.env.GIGYA_API_KEY as string,
            dataCenter: process.env.GIGYA_DATA_CENTER as GigyaDataCenter,
            credentials: { type: 'none' },
            middleware: {
                onAfterResponse: [responseMiddleware],
            },
        }).accounts.getPolicies({
            sections: 'gigyaPlugins,passwordComplexity,registration,security',
        });

        assert.equal(responseMiddleware.mock.calls.length, 1);

        assert.equal(responseMiddleware.mock.calls.at(0)?.arguments[0].method, 'POST');
        assert.equal(responseMiddleware.mock.calls.at(0)?.arguments[0].namespace, 'accounts');
        assert.equal(responseMiddleware.mock.calls.at(0)?.arguments[0].endpoint, 'getPolicies');
        assert.equal(
            responseMiddleware.mock.calls.at(0)?.arguments[0].body.get('sections'),
            'gigyaPlugins,passwordComplexity,registration,security',
        );

        assert.equal(responseMiddleware.mock.calls.at(0)?.arguments[1].ok, true);
        assert.equal(responseMiddleware.mock.calls.at(0)?.arguments[1].status, 200);
    });

    await it('should call both the onBeforeRequest and onAfterResponse middleware once', async () => {
        await Gigya({
            apiKey: process.env.GIGYA_API_KEY as string,
            dataCenter: process.env.GIGYA_DATA_CENTER as GigyaDataCenter,
            credentials: { type: 'none' },
            middleware: {
                onBeforeRequest: [requestMiddleware],
                onAfterResponse: [responseMiddleware],
            },
        }).accounts.getPolicies({
            sections: 'gigyaPlugins,passwordComplexity,registration,security',
        });

        assert.equal(requestMiddleware.mock.calls.length, 1);
        assert.equal(responseMiddleware.mock.calls.length, 1);

        assert.deepEqual(
            requestMiddleware.mock.calls.at(0)?.arguments[0],
            responseMiddleware.mock.calls.at(0)?.arguments[0],
        );
    });

    await it('should call both the onBeforeRequest and onAfterResponse middleware multiple times', async () => {
        await Gigya({
            apiKey: process.env.GIGYA_API_KEY as string,
            dataCenter: process.env.GIGYA_DATA_CENTER as GigyaDataCenter,
            credentials: { type: 'none' },
            middleware: {
                onBeforeRequest: [requestMiddleware, requestMiddleware, requestMiddleware],
                onAfterResponse: [responseMiddleware, responseMiddleware, responseMiddleware],
            },
        }).accounts.getPolicies({
            sections: 'gigyaPlugins,passwordComplexity,registration,security',
        });

        assert.equal(requestMiddleware.mock.calls.length, 3);
        assert.equal(responseMiddleware.mock.calls.length, 3);

        assert.deepEqual(
            requestMiddleware.mock.calls.at(0)?.arguments[0],
            responseMiddleware.mock.calls.at(0)?.arguments[0],
        );
    });

    await it('should throw an error when onBeforeRequest middleware throws an error', async () => {
        const mockError = new Error('MOCK_ON_BEFORE_REQUEST_ERROR');

        requestMiddleware.mock.mockImplementation(async () => {
            throw mockError;
        });

        assert.rejects(
            async () =>
                await Gigya({
                    apiKey: process.env.GIGYA_API_KEY as string,
                    dataCenter: process.env.GIGYA_DATA_CENTER as GigyaDataCenter,
                    credentials: { type: 'none' },
                    middleware: {
                        onBeforeRequest: [requestMiddleware],
                    },
                }).accounts.getPolicies({
                    sections: 'gigyaPlugins,passwordComplexity,registration,security',
                }),
            mockError,
        );
    });

    await it('should throw an error when onAfterResponse middleware throws an error', async () => {
        const mockError = new Error('MOCK_ON_AFTER_RESPONSE_ERROR');

        responseMiddleware.mock.mockImplementation(async () => {
            throw mockError;
        });

        await assert.rejects(
            Gigya({
                apiKey: process.env.GIGYA_API_KEY as string,
                dataCenter: process.env.GIGYA_DATA_CENTER as GigyaDataCenter,
                credentials: { type: 'none' },
                middleware: {
                    onAfterResponse: [responseMiddleware],
                },
            }).accounts.getPolicies({
                sections: 'gigyaPlugins,passwordComplexity,registration,security',
            }),
            mockError,
        );
    });

    await it('should pass a modified request from onBeforeRequest to onBeforeResponse', async () => {
        requestMiddleware.mock.mockImplementation(async (request) => {
            request.body.append('MOCK_KEY', 'MOCK_KEY');
            return request;
        });

        responseMiddleware.mock.mockImplementation(async (request, response) => {
            assert.equal(request.body.get('MOCK_KEY'), 'MOCK_KEY');
            return response;
        });

        await Gigya({
            apiKey: process.env.GIGYA_API_KEY as string,
            dataCenter: process.env.GIGYA_DATA_CENTER as GigyaDataCenter,
            credentials: { type: 'none' },
            middleware: {
                onBeforeRequest: [requestMiddleware],
                onAfterResponse: [responseMiddleware],
            },
        }).accounts.getPolicies({
            sections: 'gigyaPlugins,passwordComplexity,registration,security',
        });
    });
});
