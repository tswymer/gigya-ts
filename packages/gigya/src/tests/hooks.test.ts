import assert from 'assert/strict';
import { beforeEach, describe, it, mock } from 'node:test';

import { GigyaDataCenter } from '..';
import { Gigya } from '../gigya';
import { GigyaFetchRequest, ParamsOf } from '../utils';

const mockRequestHook = mock.fn(async (request) => request) satisfies NonNullable<
    NonNullable<ParamsOf<typeof Gigya>[0]['hooks']>['onBeforeRequest']
>[number];
const mockResponseHook = mock.fn(async (_request, response) => response) satisfies NonNullable<
    NonNullable<ParamsOf<typeof Gigya>[0]['hooks']>['onAfterResponse']
>[number];
const mockFailedResponseHook = mock.fn() satisfies NonNullable<
    NonNullable<ParamsOf<typeof Gigya>[0]['hooks']>['onFailedRequest']
>;

beforeEach(() => {
    mockRequestHook.mock.restore();
    mockRequestHook.mock.resetCalls();

    mockResponseHook.mock.restore();
    mockResponseHook.mock.resetCalls();

    mockFailedResponseHook.mock.restore();
    mockFailedResponseHook.mock.resetCalls();
});

describe('hooks', async () => {
    await it('should call the onBeforeRequest hook once', async () => {
        await Gigya({
            apiKey: process.env.GIGYA_API_KEY as string,
            dataCenter: process.env.GIGYA_DATA_CENTER as GigyaDataCenter,
            credentials: { type: 'none' },
            hooks: {
                onBeforeRequest: [mockRequestHook],
            },
        }).accounts.getPolicies({
            sections: 'gigyaPlugins,passwordComplexity,registration,security',
        });

        assert.equal(mockRequestHook.mock.calls.length, 1);

        assert.equal(mockRequestHook.mock.calls.at(0)?.arguments[0].method, 'POST');
        assert.equal(mockRequestHook.mock.calls.at(0)?.arguments[0].namespace, 'accounts');
        assert.equal(mockRequestHook.mock.calls.at(0)?.arguments[0].endpoint, 'getPolicies');
        assert.equal(
            mockRequestHook.mock.calls.at(0)?.arguments[0].url,
            'https://accounts.eu1.gigya.com/accounts.getPolicies',
        );
        assert.equal(
            mockRequestHook.mock.calls.at(0)?.arguments[0].body.get('sections'),
            'gigyaPlugins,passwordComplexity,registration,security',
        );
    });

    await it('should call the onAfterResponse hook once', async () => {
        await Gigya({
            apiKey: process.env.GIGYA_API_KEY as string,
            dataCenter: process.env.GIGYA_DATA_CENTER as GigyaDataCenter,
            credentials: { type: 'none' },
            hooks: {
                onAfterResponse: [mockResponseHook],
            },
        }).accounts.getPolicies({
            sections: 'gigyaPlugins,passwordComplexity,registration,security',
        });

        assert.equal(mockResponseHook.mock.calls.length, 1);

        assert.equal(mockResponseHook.mock.calls.at(0)?.arguments[0].method, 'POST');
        assert.equal(mockResponseHook.mock.calls.at(0)?.arguments[0].namespace, 'accounts');
        assert.equal(mockResponseHook.mock.calls.at(0)?.arguments[0].endpoint, 'getPolicies');
        assert.equal(
            mockResponseHook.mock.calls.at(0)?.arguments[0].url,
            'https://accounts.eu1.gigya.com/accounts.getPolicies',
        );
        assert.equal(
            mockResponseHook.mock.calls.at(0)?.arguments[0].body.get('sections'),
            'gigyaPlugins,passwordComplexity,registration,security',
        );

        assert.equal(mockResponseHook.mock.calls.at(0)?.arguments[1].statusCode, 200);
    });

    await it('should call both the onBeforeRequest and onAfterResponse hook once', async () => {
        await Gigya({
            apiKey: process.env.GIGYA_API_KEY as string,
            dataCenter: process.env.GIGYA_DATA_CENTER as GigyaDataCenter,
            credentials: { type: 'none' },
            hooks: {
                onBeforeRequest: [mockRequestHook],
                onAfterResponse: [mockResponseHook],
            },
        }).accounts.getPolicies({
            sections: 'gigyaPlugins,passwordComplexity,registration,security',
        });

        assert.equal(mockRequestHook.mock.calls.length, 1);
        assert.equal(mockResponseHook.mock.calls.length, 1);

        assert.deepEqual(
            mockRequestHook.mock.calls.at(0)?.arguments[0],
            mockResponseHook.mock.calls.at(0)?.arguments[0],
        );
    });

    await it('should call both the onBeforeRequest and onAfterResponse hook multiple times', async () => {
        await Gigya({
            apiKey: process.env.GIGYA_API_KEY as string,
            dataCenter: process.env.GIGYA_DATA_CENTER as GigyaDataCenter,
            credentials: { type: 'none' },
            hooks: {
                onBeforeRequest: [mockRequestHook, mockRequestHook, mockRequestHook],
                onAfterResponse: [mockResponseHook, mockResponseHook, mockResponseHook],
            },
        }).accounts.getPolicies({
            sections: 'gigyaPlugins,passwordComplexity,registration,security',
        });

        assert.equal(mockRequestHook.mock.calls.length, 3);
        assert.equal(mockResponseHook.mock.calls.length, 3);

        assert.deepEqual(
            mockRequestHook.mock.calls.at(0)?.arguments[0],
            mockResponseHook.mock.calls.at(0)?.arguments[0],
        );
    });

    await it('should throw an error when onBeforeRequest hook throws an error', async () => {
        const mockError = new Error('MOCK_ON_BEFORE_REQUEST_ERROR');

        mockRequestHook.mock.mockImplementation(async () => {
            throw mockError;
        });

        assert.rejects(
            async () =>
                await Gigya({
                    apiKey: process.env.GIGYA_API_KEY as string,
                    dataCenter: process.env.GIGYA_DATA_CENTER as GigyaDataCenter,
                    credentials: { type: 'none' },
                    hooks: {
                        onBeforeRequest: [mockRequestHook],
                    },
                }).accounts.getPolicies({
                    sections: 'gigyaPlugins,passwordComplexity,registration,security',
                }),
            mockError,
        );
    });

    await it('should throw an error when onAfterResponse hook throws an error', async () => {
        const mockError = new Error('MOCK_ON_AFTER_RESPONSE_ERROR');

        mockResponseHook.mock.mockImplementation(async () => {
            throw mockError;
        });

        await assert.rejects(
            Gigya({
                apiKey: process.env.GIGYA_API_KEY as string,
                dataCenter: process.env.GIGYA_DATA_CENTER as GigyaDataCenter,
                credentials: { type: 'none' },
                hooks: {
                    onAfterResponse: [mockResponseHook],
                },
            }).accounts.getPolicies({
                sections: 'gigyaPlugins,passwordComplexity,registration,security',
            }),
            mockError,
        );
    });

    await it('should pass a modified body param from onBeforeRequest to onBeforeResponse', async () => {
        mockRequestHook.mock.mockImplementation(async (request) => {
            request.body.append('MOCK_KEY', 'MOCK_VALUE');
            return request;
        });

        await Gigya({
            apiKey: process.env.GIGYA_API_KEY as string,
            dataCenter: process.env.GIGYA_DATA_CENTER as GigyaDataCenter,
            credentials: { type: 'none' },
            hooks: {
                onBeforeRequest: [mockRequestHook],
                onAfterResponse: [mockResponseHook],
            },
        }).accounts.getPolicies({
            sections: 'gigyaPlugins,passwordComplexity,registration,security',
        });

        assert.equal(mockResponseHook.mock.calls.at(0)?.arguments[0].body.get('MOCK_KEY'), 'MOCK_VALUE');
    });

    await it('should call onFailedRequest hook when gigya responds with non-200 status', async () => {
        await assert.rejects(
            Gigya({
                apiKey: 'INVALID_API_KEY',
                dataCenter: 'eu1.gigya.com',
                credentials: { type: 'none' },
                hooks: {
                    onFailedRequest: mockFailedResponseHook,
                },
            }).accounts.getPolicies({
                sections: 'gigyaPlugins,passwordComplexity,registration,security',
                httpStatusCodes: true,
            }),
        );

        assert.equal(mockFailedResponseHook.mock.calls.length, 1);
        assert.equal(mockFailedResponseHook.mock.calls.at(0)?.arguments[1].status, 400);
    });

    await it('should call onFailedRequest hook when gigya responds with status 200, but an invalid JSON body', async () => {
        await assert.rejects(
            Gigya({
                apiKey: process.env.GIGYA_API_KEY as string,
                dataCenter: process.env.GIGYA_DATA_CENTER as GigyaDataCenter,
                credentials: { type: 'none' },
                hooks: {
                    onBeforeRequest: [
                        async (request) => {
                            return {
                                ...request,
                                method: 'GET',
                                body: undefined,
                                url: 'https://raw.githubusercontent.com/tswymer/gigya-ts/refs/heads/main/README.md',
                            } as GigyaFetchRequest & { body: undefined };
                        },
                    ],
                    onFailedRequest: mockFailedResponseHook,
                },
            }).accounts.getPolicies({
                sections: 'gigyaPlugins,passwordComplexity,registration,security',
            }),
        );

        assert.equal(mockFailedResponseHook.mock.calls.at(0)?.arguments[1].status, 200);
        assert.equal(mockFailedResponseHook.mock.calls.length, 1);
    });
});
