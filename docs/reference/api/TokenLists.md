# TokenLists

## Table of contents

### Constructors

- [constructor](TokenLists.md#constructor)

### Methods

- [getFromTokenList](TokenLists.md#getfromtokenlist)
- [getToTokenList](TokenLists.md#gettotokenlist)

## Constructors

### constructor

• **new TokenLists**()

## Methods

### getFromTokenList

▸ `Static` **getFromTokenList**(`__namedParameters`): [`CancelablePromise`](../client/CancelablePromise.md)<[`TokenListOutputDTO`](../types.md#tokenlistoutputdto)\>

**`throws`** ApiError

#### Parameters

| Name                                 | Type                         | Description                                                                                                            |
| :----------------------------------- | :--------------------------- | :--------------------------------------------------------------------------------------------------------------------- |
| `__namedParameters`                  | `Object`                     | -                                                                                                                      |
| `__namedParameters.disableSwapping?` | `boolean`                    | Flag to specify if tokens that need dex swap should be ignored.                                                        |
| `__namedParameters.excludeBridges?`  | `BridgeName`[]               | Specify Bridges that should be excluded for token support. This option will be ignored if includeBridges is specified. |
| `__namedParameters.excludeDexes?`    | (`"oneinch"` \| `"zerox"`)[] | Specify Dexes that should be excluded for token support. This option will be ignored if includeDexes is specified.     |
| `__namedParameters.fromChainId`      | `number`                     | Id of source chain, e.g Optimism = 10                                                                                  |
| `__namedParameters.includeBridges?`  | `BridgeName`[]               | Specify Bridges that should be included for token support.                                                             |
| `__namedParameters.includeDexes?`    | (`"oneinch"` \| `"zerox"`)[] | Specify Dexes that should be included for token support.                                                               |
| `__namedParameters.isShortList?`     | `boolean`                    | To be Marked true if you want the shorter and more efficient token list.                                               |
| `__namedParameters.singleTxOnly?`    | `boolean`                    | To be Marked true if you want the token list that needs only a single transaction from the user to bridge.             |
| `__namedParameters.toChainId`        | `number`                     | Id of destination chain, e.g xDAI = 100                                                                                |

#### Returns

[`CancelablePromise`](../client/CancelablePromise.md)<[`TokenListOutputDTO`](../types.md#tokenlistoutputdto)\>

TokenListOutputDTO All Supported token by a given chainId

#### Defined in

[src/client/services/TokenLists.ts:13](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/services/TokenLists.ts#L13)

---

### getToTokenList

▸ `Static` **getToTokenList**(`__namedParameters`): [`CancelablePromise`](../client/CancelablePromise.md)<[`TokenListOutputDTO`](../types.md#tokenlistoutputdto)\>

**`throws`** ApiError

#### Parameters

| Name                                 | Type                         | Description                                                                                                                 |
| :----------------------------------- | :--------------------------- | :-------------------------------------------------------------------------------------------------------------------------- |
| `__namedParameters`                  | `Object`                     | -                                                                                                                           |
| `__namedParameters.disableSwapping?` | `boolean`                    | Flag to specify if tokens that need dex swap should be ignored. This option will be ignored if singleTxOnly is marked true. |
| `__namedParameters.excludeBridges?`  | `BridgeName`[]               | Specify Bridges that should be excluded for token support. This option will be ignored if includeBridges is specified.      |
| `__namedParameters.excludeDexes?`    | (`"oneinch"` \| `"zerox"`)[] | Specify Dexes that should be excluded for token support. This option will be ignored if includeDexes is specified.          |
| `__namedParameters.fromChainId`      | `number`                     | Id of source chain, e.g Optimism = 10                                                                                       |
| `__namedParameters.includeBridges?`  | `BridgeName`[]               | Specify Bridges that should be included for token support.                                                                  |
| `__namedParameters.includeDexes?`    | (`"oneinch"` \| `"zerox"`)[] | Specify Dexes that should be included for token support.                                                                    |
| `__namedParameters.isShortList?`     | `boolean`                    | To be Marked true if you want the shorter and more efficient token list.                                                    |
| `__namedParameters.singleTxOnly?`    | `boolean`                    | To be Marked true if you want the token list that needs only a single transaction from the user to bridge.                  |
| `__namedParameters.toChainId`        | `number`                     | Id of destination chain, e.g xDAI = 100                                                                                     |

#### Returns

[`CancelablePromise`](../client/CancelablePromise.md)<[`TokenListOutputDTO`](../types.md#tokenlistoutputdto)\>

TokenListOutputDTO All Supported token by a given route

#### Defined in

[src/client/services/TokenLists.ts:69](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/services/TokenLists.ts#L69)
