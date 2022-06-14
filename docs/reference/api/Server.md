# Server

## Table of contents

### Constructors

- [constructor](Server.md#constructor)

### Methods

- [getBridgingStatus](Server.md#getbridgingstatus)
- [getGasPrice](Server.md#getgasprice)
- [getHealth](Server.md#gethealth)
- [getHealthRpc](Server.md#gethealthrpc)
- [getSingleTx](Server.md#getsingletx)
- [getTokenPrice](Server.md#gettokenprice)
- [getTransactionReceipt](Server.md#gettransactionreceipt)

## Constructors

### constructor

• **new Server**()

## Methods

### getBridgingStatus

▸ `Static` **getBridgingStatus**(`__namedParameters`): [`CancelablePromise`](../client/CancelablePromise.md)<[`BridgeStatusResponseDTO`](../types.md#bridgestatusresponsedto)\>

**`throws`** ApiError

#### Parameters

| Name                                | Type         | Description                                                               |
| :---------------------------------- | :----------- | :------------------------------------------------------------------------ |
| `__namedParameters`                 | `Object`     | -                                                                         |
| `__namedParameters.bridgeName?`     | `BridgeName` | Name of the bridge used while bridging.                                   |
| `__namedParameters.fromChainId`     | `number`     | ID of source chain, e.g Ethereum Mainnet = 1                              |
| `__namedParameters.toChainId`       | `number`     | ID of destination chain, e.g Ethereum Mainnet = 1                         |
| `__namedParameters.transactionHash` | `string`     | Transaction hash originating from the source chain while bridging assets. |

#### Returns

[`CancelablePromise`](../client/CancelablePromise.md)<[`BridgeStatusResponseDTO`](../types.md#bridgestatusresponsedto)\>

BridgeStatusResponseDTO Returns the status of the bridging transaction if completed or pending.

#### Defined in

[src/client/services/Server.ts:104](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/services/Server.ts#L104)

---

### getGasPrice

▸ `Static` **getGasPrice**(`__namedParameters`): [`CancelablePromise`](../client/CancelablePromise.md)<[`GasPriceResponseDTO`](../types.md#gaspriceresponsedto)\>

**`throws`** ApiError

#### Parameters

| Name                        | Type     | Description                           |
| :-------------------------- | :------- | :------------------------------------ |
| `__namedParameters`         | `Object` | -                                     |
| `__namedParameters.chainId` | `string` | ID of chain, e.g Ethereum Mainnet = 1 |

#### Returns

[`CancelablePromise`](../client/CancelablePromise.md)<[`GasPriceResponseDTO`](../types.md#gaspriceresponsedto)\>

GasPriceResponseDTO Current gas prices for a chain

#### Defined in

[src/client/services/Server.ts:41](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/services/Server.ts#L41)

---

### getHealth

▸ `Static` **getHealth**(): [`CancelablePromise`](../client/CancelablePromise.md)<[`HealthResponseDTO`](../types.md#healthresponsedto)\>

**`throws`** ApiError

#### Returns

[`CancelablePromise`](../client/CancelablePromise.md)<[`HealthResponseDTO`](../types.md#healthresponsedto)\>

HealthResponseDTO Health Check for Fund Movr API

#### Defined in

[src/client/services/Server.ts:19](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/services/Server.ts#L19)

---

### getHealthRpc

▸ `Static` **getHealthRpc**(): [`CancelablePromise`](../client/CancelablePromise.md)<`any`\>

**`throws`** ApiError

#### Returns

[`CancelablePromise`](../client/CancelablePromise.md)<`any`\>

any Health Check for Fund Movr API RPCS

#### Defined in

[src/client/services/Server.ts:30](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/services/Server.ts#L30)

---

### getSingleTx

▸ `Static` **getSingleTx**(`__namedParameters`): [`CancelablePromise`](../client/CancelablePromise.md)<[`SingleTxOutputDTO`](../types.md#singletxoutputdto)\>

**`throws`** ApiError

#### Parameters

| Name                            | Type                                     |
| :------------------------------ | :--------------------------------------- |
| `__namedParameters`             | `Object`                                 |
| `__namedParameters.requestBody` | [`SingleTxDTO`](../types.md#singletxdto) |

#### Returns

[`CancelablePromise`](../client/CancelablePromise.md)<[`SingleTxOutputDTO`](../types.md#singletxoutputdto)\>

SingleTxOutputDTO Get the tx details for the route.

#### Defined in

[src/client/services/Server.ts:84](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/services/Server.ts#L84)

---

### getTokenPrice

▸ `Static` **getTokenPrice**(`__namedParameters`): [`CancelablePromise`](../client/CancelablePromise.md)<[`TokenPriceResponseDTO`](../types.md#tokenpriceresponsedto)\>

**`throws`** ApiError

#### Parameters

| Name                             | Type     | Description                                                     |
| :------------------------------- | :------- | :-------------------------------------------------------------- |
| `__namedParameters`              | `Object` | -                                                               |
| `__namedParameters.chainId`      | `string` | ID of chain, e.g Ethereum Mainnet = 1                           |
| `__namedParameters.tokenAddress` | `string` | Token contract address on network, e.g USDC on Ethereum Mainnet |

#### Returns

[`CancelablePromise`](../client/CancelablePromise.md)<[`TokenPriceResponseDTO`](../types.md#tokenpriceresponsedto)\>

TokenPriceResponseDTO Returns price of token for a given chain

#### Defined in

[src/client/services/Server.ts:60](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/services/Server.ts#L60)

---

### getTransactionReceipt

▸ `Static` **getTransactionReceipt**(`__namedParameters`): [`CancelablePromise`](../client/CancelablePromise.md)<[`TransactionReceiptResponseDTO`](../types.md#transactionreceiptresponsedto)\>

**`throws`** ApiError

#### Parameters

| Name                                | Type     | Description                                                               |
| :---------------------------------- | :------- | :------------------------------------------------------------------------ |
| `__namedParameters`                 | `Object` | -                                                                         |
| `__namedParameters.chainId`         | `string` | ID of source chain, e.g Ethereum Mainnet = 1                              |
| `__namedParameters.transactionHash` | `string` | Transaction hash originating from the source chain while bridging assets. |

#### Returns

[`CancelablePromise`](../client/CancelablePromise.md)<[`TransactionReceiptResponseDTO`](../types.md#transactionreceiptresponsedto)\>

TransactionReceiptResponseDTO Returns the receipt of the transaction.

#### Defined in

[src/client/services/Server.ts:138](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/services/Server.ts#L138)
