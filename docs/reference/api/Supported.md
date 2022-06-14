# Supported

## Table of contents

### Constructors

- [constructor](Supported.md#constructor)

### Methods

- [getAllBridges](Supported.md#getallbridges)
- [getAllSupportedRoutes](Supported.md#getallsupportedroutes)
- [getIfTokenIsSupported](Supported.md#getiftokenissupported)

## Constructors

### constructor

• **new Supported**()

## Methods

### getAllBridges

▸ `Static` **getAllBridges**(): [`CancelablePromise`](../client/CancelablePromise.md)<[`SupportedBridgesOutputDTO`](../types.md#supportedbridgesoutputdto)\>

**`throws`** ApiError

#### Returns

[`CancelablePromise`](../client/CancelablePromise.md)<[`SupportedBridgesOutputDTO`](../types.md#supportedbridgesoutputdto)\>

SupportedBridgesOutputDTO All Supported Bridges

#### Defined in

[src/client/services/Supported.ts:13](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/services/Supported.ts#L13)

---

### getAllSupportedRoutes

▸ `Static` **getAllSupportedRoutes**(): [`CancelablePromise`](../client/CancelablePromise.md)<[`SupportedChainsOutputDTO`](../types.md#supportedchainsoutputdto)\>

**`throws`** ApiError

#### Returns

[`CancelablePromise`](../client/CancelablePromise.md)<[`SupportedChainsOutputDTO`](../types.md#supportedchainsoutputdto)\>

SupportedChainsOutputDTO All Supported Chains by Movr

#### Defined in

[src/client/services/Supported.ts:24](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/services/Supported.ts#L24)

---

### getIfTokenIsSupported

▸ `Static` **getIfTokenIsSupported**(`__namedParameters`): [`CancelablePromise`](../client/CancelablePromise.md)<[`SupportedChainsOutputDTO`](../types.md#supportedchainsoutputdto)\>

**`throws`** ApiError

#### Parameters

| Name                        | Type     | Description                    |
| :-------------------------- | :------- | :----------------------------- |
| `__namedParameters`         | `Object` | -                              |
| `__namedParameters.address` | `string` | Contract address of the token  |
| `__namedParameters.chainId` | `string` | Id of chain, e.g Optimism = 10 |

#### Returns

[`CancelablePromise`](../client/CancelablePromise.md)<[`SupportedChainsOutputDTO`](../types.md#supportedchainsoutputdto)\>

SupportedChainsOutputDTO Get if token is supported

#### Defined in

[src/client/services/Supported.ts:38](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/services/Supported.ts#L38)
