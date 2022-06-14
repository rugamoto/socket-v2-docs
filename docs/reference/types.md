# Types

- [ActiveRouteResponse](types.md#activerouteresponse)
- [ActiveRoutesOutputDTO](types.md#activeroutesoutputdto)
- [ApprovalData](types.md#approvaldata)
- [ApprovalOutputDTO](types.md#approvaloutputdto)
- [ApprovalTxOutputDTO](types.md#approvaltxoutputdto)
- [Balance](types.md#balance)
- [BalanceResult](types.md#balanceresult)
- [BridgeDetails](types.md#bridgedetails)
- [BridgeStatusResponse](types.md#bridgestatusresponse)
- [BridgeStatusResponseDTO](types.md#bridgestatusresponsedto)
- [ChainDetails](types.md#chaindetails)
- [ChainGasBalances](types.md#chaingasbalances)
- [GasPriceResponseDTO](types.md#gaspriceresponsedto)
- [GasTokenDetails](types.md#gastokendetails)
- [HealthResponseDTO](types.md#healthresponsedto)
- [MinGasBalances](types.md#mingasbalances)
- [NextTxOutputDTO](types.md#nexttxoutputdto)
- [OpenAPIConfig](types.md#openapiconfig)
- [QuoteOutputDTO](types.md#quoteoutputdto)
- [Route](types.md#route)
- [RouteStatusOutputDTO](types.md#routestatusoutputdto)
- [SingleTxDTO](types.md#singletxdto)
- [SingleTxOutputDTO](types.md#singletxoutputdto)
- [SingleTxResponse](types.md#singletxresponse)
- [StartActiveRouteInputDTO](types.md#startactiverouteinputdto)
- [SupportedBridgesOutputDTO](types.md#supportedbridgesoutputdto)
- [SupportedChainsOutputDTO](types.md#supportedchainsoutputdto)
- [TokenAsset](types.md#tokenasset)
- [TokenBalanceReponseDTO](types.md#tokenbalancereponsedto)
- [TokenListOutputDTO](types.md#tokenlistoutputdto)
- [TokenPriceResponseDTO](types.md#tokenpriceresponsedto)
- [TransactionReceiptResponseDTO](types.md#transactionreceiptresponsedto)

### Variables

- [OpenAPI](types.md#openapi)

## Type Aliases

### ActiveRouteResponse

Ƭ **ActiveRouteResponse**: `Object`

#### Type declaration

| Name                 | Type                                | Description                                   |
| :------------------- | :---------------------------------- | :-------------------------------------------- |
| `activeRouteId`      | `number`                            | Id of the Active Route.                       |
| `createdAt`          | `string`                            | Timestamp of Route start.                     |
| `currentUserTxIndex` | `number`                            | Index of current tx in userTxs array.         |
| `fromAmount`         | `string`                            | Amount of sending tokens.                     |
| `fromAsset`          | [`TokenAsset`](types.md#tokenasset) | -                                             |
| `fromAssetAddress`   | `string`                            | Address of token on source chain.             |
| `fromChainId`        | `number`                            | Id of source chain.                           |
| `routeStatus`        | `ActiveRouteStatus`                 | Status of the Active Route.                   |
| `toAmount`           | `string`                            | Approximate amount of receiving tokens.       |
| `toAsset`            | [`TokenAsset`](types.md#tokenasset) | -                                             |
| `toAssetAddress`     | `string`                            | Address of token on destination chain.        |
| `toChainId`          | `number`                            | Id of destination chain.                      |
| `totalUserTx`        | `number`                            | Total number of txs required in Active Route. |
| `updatedAt`          | `string`                            | Timestamp of last route update.               |
| `userAddress`        | `string`                            | Address of user doing the Active Route.       |
| `userTxs`            | `UserTx`[]                          | Array of user txs.                            |

#### Defined in

[src/client/models/ActiveRouteResponse.ts:9](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/ActiveRouteResponse.ts#L9)

---

### ActiveRoutesOutputDTO

Ƭ **ActiveRoutesOutputDTO**: `Object`

#### Type declaration

| Name                             | Type                                                                                                                                                              | Description             |
| :------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------- |
| `result`                         | { `activeRoutes`: [`ActiveRouteResponse`](types.md#activerouteresponse)[] ; `pagination`: { `limit`: `number` ; `offset`: `number` ; `totalRecords`: `number` } } | -                       |
| `result.activeRoutes`            | [`ActiveRouteResponse`](types.md#activerouteresponse)[]                                                                                                           | -                       |
| `result.pagination`              | { `limit`: `number` ; `offset`: `number` ; `totalRecords`: `number` }                                                                                             | -                       |
| `result.pagination.limit`        | `number`                                                                                                                                                          | -                       |
| `result.pagination.offset`       | `number`                                                                                                                                                          | -                       |
| `result.pagination.totalRecords` | `number`                                                                                                                                                          | -                       |
| `success`                        | `boolean`                                                                                                                                                         | Status of API response. |

#### Defined in

[src/client/models/ActiveRoutesOutputDTO.ts:3](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/ActiveRoutesOutputDTO.ts#L3)

---

### ApprovalData

Ƭ **ApprovalData**: `Object`

#### Type declaration

| Name                    | Type     | Description                                      |
| :---------------------- | :------- | :----------------------------------------------- |
| `allowanceTarget`       | `string` | Contract address that needs approval.            |
| `approvalTokenAddress`  | `string` | Address of token for which approval is required. |
| `minimumApprovalAmount` | `string` | Minimum amount of approval needed.               |
| `owner`                 | `string` | Address of owner.                                |

#### Defined in

[src/client/models/ApprovalData.ts:1](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/ApprovalData.ts#L1)

---

### ApprovalOutputDTO

Ƭ **ApprovalOutputDTO**: `Object`

#### Type declaration

| Name                  | Type                                             |
| :-------------------- | :----------------------------------------------- |
| `result`              | { `tokenAddress`: `string` ; `value`: `string` } |
| `result.tokenAddress` | `string`                                         |
| `result.value`        | `string`                                         |
| `success`             | `boolean`                                        |

#### Defined in

[src/client/models/ApprovalOutputDTO.ts:1](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/ApprovalOutputDTO.ts#L1)

---

### ApprovalTxOutputDTO

Ƭ **ApprovalTxOutputDTO**: `Object`

#### Type declaration

| Name           | Type                                                        |
| :------------- | :---------------------------------------------------------- |
| `result`       | { `data?`: `string` ; `from?`: `string` ; `to?`: `string` } |
| `result.data?` | `string`                                                    |
| `result.from?` | `string`                                                    |
| `result.to?`   | `string`                                                    |
| `success`      | `boolean`                                                   |

#### Defined in

[src/client/models/ApprovalTxOutputDTO.ts:1](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/ApprovalTxOutputDTO.ts#L1)

---

### Balance

Ƭ **Balance**: `Object`

#### Type declaration

| Name      | Type                                        |
| :-------- | :------------------------------------------ |
| `result`  | [`BalanceResult`](types.md#balanceresult)[] |
| `success` | `boolean`                                   |

#### Defined in

[src/client/models/Balance.ts:3](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/Balance.ts#L3)

---

### BalanceResult

Ƭ **BalanceResult**: `Object`

#### Type declaration

| Name       | Type     |
| :--------- | :------- |
| `address`  | `string` |
| `amount`   | `number` |
| `chainId`  | `number` |
| `currency` | `string` |
| `decimals` | `number` |
| `name`     | `string` |
| `price`    | `number` |
| `symbol`   | `string` |

#### Defined in

[src/client/models/BalanceResult.ts:1](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/BalanceResult.ts#L1)

---

### BridgeDetails

Ƭ **BridgeDetails**: `Object`

#### Type declaration

| Name          | Type         | Description                          |
| :------------ | :----------- | :----------------------------------- |
| `displayName` | `string`     | Display name of bridge.              |
| `icon?`       | `string`     | URL for icon of bridge.              |
| `name`        | `BridgeName` | Name of bridge.                      |
| `serviceTime` | `number`     | Approx time for bridging in seconds. |

#### Defined in

[src/client/models/BridgeDetails.ts:1](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/BridgeDetails.ts#L1)

---

### BridgeStatusResponse

Ƭ **BridgeStatusResponse**: `Object`

#### Type declaration

| Name                          | Type       | Description                                       |
| :---------------------------- | :--------- | :------------------------------------------------ |
| `destinationTransactionHash?` | `string`   | Destination Transaction hash.                     |
| `destinationTxStatus`         | `TxStatus` | Status of destination transaction while bridging. |
| `fromChainId`                 | `number`   | Source Chain Id                                   |
| `sourceTx`                    | `string`   | Source Transaction.                               |
| `sourceTxStatus`              | `TxStatus` | Status of source transaction while bridging.      |
| `toChainId`                   | `number`   | Destination Chain Id.                             |

#### Defined in

[src/client/models/BridgeStatusResponse.ts:3](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/BridgeStatusResponse.ts#L3)

---

### BridgeStatusResponseDTO

Ƭ **BridgeStatusResponseDTO**: `Object`

#### Type declaration

| Name      | Type                                                    | Description    |
| :-------- | :------------------------------------------------------ | :------------- |
| `result`  | [`BridgeStatusResponse`](types.md#bridgestatusresponse) | -              |
| `success` | `boolean`                                               | Status of API. |

#### Defined in

[src/client/models/BridgeStatusResponseDTO.ts:3](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/BridgeStatusResponseDTO.ts#L3)

---

### ChainDetails

Ƭ **ChainDetails**: `Object`

#### Type declaration

| Name               | Type                                          | Description                                                        |
| :----------------- | :-------------------------------------------- | :----------------------------------------------------------------- |
| `chainId`          | `number`                                      | Id of chain.                                                       |
| `currency`         | [`GasTokenDetails`](types.md#gastokendetails) | -                                                                  |
| `explorers`        | `string`[]                                    | -                                                                  |
| `icon`             | `string`                                      | URL for icon of chain.                                             |
| `isL1`             | `boolean`                                     | Flag indicating whether the chain is L1.                           |
| `name`             | `string`                                      | Name of chain.                                                     |
| `receivingEnabled` | `boolean`                                     | Flag indicating whether receiving of tokens is supported to chain. |
| `rpcs`             | `string`[]                                    | -                                                                  |
| `sendingEnabled`   | `boolean`                                     | Flag indicating whether sending of tokens is supported from chain. |

#### Defined in

[src/client/models/ChainDetails.ts:3](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/ChainDetails.ts#L3)

---

### ChainGasBalances

Ƭ **ChainGasBalances**: `any`

#### Defined in

[src/client/models/ChainGasBalances.ts:1](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/ChainGasBalances.ts#L1)

---

### GasPriceResponseDTO

Ƭ **GasPriceResponseDTO**: `Object`

#### Type declaration

| Name                              | Type                                                                                                                                                                                                                                                            |
| :-------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `result`                          | { `chainId?`: `number` ; `fast?`: { `estimatedSeconds?`: `number` ; `gasPrice?`: `number` } ; `normal?`: { `estimatedSeconds?`: `number` ; `gasPrice?`: `number` } ; `slow?`: { `estimatedSeconds?`: `number` ; `gasPrice?`: `number` } ; `txType?`: `number` } |
| `result.chainId?`                 | `number`                                                                                                                                                                                                                                                        |
| `result.fast?`                    | { `estimatedSeconds?`: `number` ; `gasPrice?`: `number` }                                                                                                                                                                                                       |
| `result.fast.estimatedSeconds?`   | `number`                                                                                                                                                                                                                                                        |
| `result.fast.gasPrice?`           | `number`                                                                                                                                                                                                                                                        |
| `result.normal?`                  | { `estimatedSeconds?`: `number` ; `gasPrice?`: `number` }                                                                                                                                                                                                       |
| `result.normal.estimatedSeconds?` | `number`                                                                                                                                                                                                                                                        |
| `result.normal.gasPrice?`         | `number`                                                                                                                                                                                                                                                        |
| `result.slow?`                    | { `estimatedSeconds?`: `number` ; `gasPrice?`: `number` }                                                                                                                                                                                                       |
| `result.slow.estimatedSeconds?`   | `number`                                                                                                                                                                                                                                                        |
| `result.slow.gasPrice?`           | `number`                                                                                                                                                                                                                                                        |
| `result.txType?`                  | `number`                                                                                                                                                                                                                                                        |
| `success`                         | `boolean`                                                                                                                                                                                                                                                       |

#### Defined in

[src/client/models/GasPriceResponseDTO.ts:1](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/GasPriceResponseDTO.ts#L1)

---

### GasTokenDetails

Ƭ **GasTokenDetails**: `Object`

#### Type declaration

| Name                      | Type     | Description                                               |
| :------------------------ | :------- | :-------------------------------------------------------- |
| `address`                 | `string` | Address of gas token.                                     |
| `decimals`                | `number` | Decimals of gas token.                                    |
| `icon`                    | `string` | URL for icon of gas token.                                |
| `minNativeCurrencyForGas` | `string` | Minimum amount to be left for gas while using max amount. |
| `name`                    | `string` | Name of gas token.                                        |
| `symbol`                  | `string` | Symbol of gas token.                                      |

#### Defined in

[src/client/models/GasTokenDetails.ts:1](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/GasTokenDetails.ts#L1)

---

### HealthResponseDTO

Ƭ **HealthResponseDTO**: `Object`

#### Type declaration

| Name | Type      |
| :--- | :-------- |
| `ok` | `boolean` |

#### Defined in

[src/client/models/HealthResponseDTO.ts:1](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/HealthResponseDTO.ts#L1)

---

### MinGasBalances

Ƭ **MinGasBalances**: `any`

#### Defined in

[src/client/models/MinGasBalances.ts:1](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/MinGasBalances.ts#L1)

---

### NextTxOutputDTO

Ƭ **NextTxOutputDTO**: `Object`

#### Type declaration

| Name     | Type                                             | Description    |
| :------- | :----------------------------------------------- | :------------- |
| `result` | [`NextTxResponse`](interfaces/NextTxResponse.md) | -              |
| `status` | `boolean`                                        | Status of API. |

#### Defined in

[src/client/models/NextTxOutputDTO.ts:3](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/NextTxOutputDTO.ts#L3)

---

### OpenAPIConfig

Ƭ **OpenAPIConfig**: `Object`

#### Type declaration

| Name               | Type                                       |
| :----------------- | :----------------------------------------- |
| `API_KEY?`         | `string` \| `Resolver`<`string`\>          |
| `BASE`             | `string`                                   |
| `CREDENTIALS`      | `"include"` \| `"omit"` \| `"same-origin"` |
| `HEADERS?`         | `Headers` \| `Resolver`<`Headers`\>        |
| `PASSWORD?`        | `string` \| `Resolver`<`string`\>          |
| `TOKEN?`           | `string` \| `Resolver`<`string`\>          |
| `USERNAME?`        | `string` \| `Resolver`<`string`\>          |
| `VERSION`          | `string`                                   |
| `WITH_CREDENTIALS` | `boolean`                                  |
| `ENCODE_PATH?`     | (`path`: `string`) => `string`             |

#### Defined in

[src/client/core/OpenAPI.ts:6](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/core/OpenAPI.ts#L6)

---

### QuoteOutputDTO

Ƭ **QuoteOutputDTO**: `Object`

#### Type declaration

| Name      | Type      | Description    |
| :-------- | :-------- | :------------- |
| `result`  | `Quote`   | -              |
| `success` | `boolean` | Status of API. |

#### Defined in

[src/client/models/QuoteOutputDTO.ts:12](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/QuoteOutputDTO.ts#L12)

---

### Route

Ƭ **Route**: `Object`

#### Type declaration

| Name                 | Type                                            | Description                                                        |
| :------------------- | :---------------------------------------------- | :----------------------------------------------------------------- |
| `chainGasBalances`   | [`ChainGasBalances`](types.md#chaingasbalances) | -                                                                  |
| `fromAmount`         | `string`                                        | Sending token amount.                                              |
| `minimumGasBalances` | [`MinGasBalances`](types.md#mingasbalances)     | -                                                                  |
| `recipient`          | `string`                                        | Address of user receiving the amount.                              |
| `routeId`            | `string`                                        | Unique id for each route.                                          |
| `sender`             | `string`                                        | Address of user making the transactions.                           |
| `serviceTime`        | `number`                                        | Estimate of total time in seconds, excluding the transaction time. |
| `toAmount`           | `string`                                        | Approximate receiving token amount.                                |
| `totalGasFeesInUsd`  | `number`                                        | Combined USD gas fees for all transactions in the route.           |
| `totalUserTx`        | `number`                                        | Total number of transactions for the route.                        |
| `usedBridgeNames`    | `BridgeName`[]                                  | Array of bridges used in the route                                 |
| `userTxs`            | `UserTx`[]                                      | Array of user transactions.                                        |

#### Defined in

[src/client/models/Route.ts:6](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/Route.ts#L6)

---

### RouteStatusOutputDTO

Ƭ **RouteStatusOutputDTO**: `Object`

#### Type declaration

| Name     | Type                       | Description    |
| :------- | :------------------------- | :------------- |
| `result` | `PrepareActiveRouteStatus` | -              |
| `status` | `boolean`                  | Status of API. |

#### Defined in

[src/client/models/RouteStatusOutputDTO.ts:12](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/RouteStatusOutputDTO.ts#L12)

---

### SingleTxDTO

Ƭ **SingleTxDTO**: `Object`

#### Type declaration

| Name    | Type                      |
| :------ | :------------------------ |
| `route` | [`Route`](types.md#route) |

#### Defined in

[src/client/models/SingleTxDTO.ts:3](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/SingleTxDTO.ts#L3)

---

### SingleTxOutputDTO

Ƭ **SingleTxOutputDTO**: `Object`

#### Type declaration

| Name     | Type                                            | Description    |
| :------- | :---------------------------------------------- | :------------- |
| `result` | [`SingleTxResponse`](types.md#singletxresponse) | -              |
| `status` | `boolean`                                       | Status of API. |

#### Defined in

[src/client/models/SingleTxOutputDTO.ts:3](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/SingleTxOutputDTO.ts#L3)

---

### SingleTxResponse

Ƭ **SingleTxResponse**: `Object`

#### Type declaration

| Name           | Type                                              | Description                                      |
| :------------- | :------------------------------------------------ | :----------------------------------------------- |
| `approvalData` | [`ApprovalData`](types.md#approvaldata) \| `null` | -                                                |
| `chainId`      | `ChainId`                                         | Id of chain where transaction has to be sent.    |
| `totalUserTx`  | `number`                                          | Total number of transactions in Active Route.    |
| `txData`       | `string`                                          | Calldata for transaction.                        |
| `txTarget`     | `string`                                          | Address to which transaction has to be sent.     |
| `txType`       | `TxType`                                          | Type of transaction.                             |
| `userTxType`   | `UserTxType`                                      | Type of user transaction.                        |
| `value`        | `string`                                          | Native token amount to be sent with transaction. |

#### Defined in

[src/client/models/SingleTxResponse.ts:6](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/SingleTxResponse.ts#L6)

---

### StartActiveRouteInputDTO

Ƭ **StartActiveRouteInputDTO**: `Object`

#### Type declaration

| Name                     | Type                      | Description                                                                                                                                                                   |
| :----------------------- | :------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fromAssetAddress`       | `string`                  | Token address on source chain.                                                                                                                                                |
| `fromChainId`            | `number`                  | Chain id of source chain.                                                                                                                                                     |
| `includeFirstTxDetails?` | `boolean`                 | Include the tx details for the first user transaction. If true it will return the txData txType etc. If false, it will only return the active route Id of the selected route. |
| `route`                  | [`Route`](types.md#route) | Selected route by the user to bridge tokens from one chain to another.                                                                                                        |
| `toAssetAddress`         | `string`                  | Token address on destination chain.                                                                                                                                           |
| `toChainId`              | `number`                  | Chain id of destination chain.                                                                                                                                                |

#### Defined in

[src/client/models/StartActiveRouteInputDTO.ts:3](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/StartActiveRouteInputDTO.ts#L3)

---

### SupportedBridgesOutputDTO

Ƭ **SupportedBridgesOutputDTO**: `Object`

#### Type declaration

| Name      | Type                                        | Description    |
| :-------- | :------------------------------------------ | :------------- |
| `result`  | [`BridgeDetails`](types.md#bridgedetails)[] | -              |
| `success` | `boolean`                                   | Status of API. |

#### Defined in

[src/client/models/SupportedBridgesOutputDTO.ts:3](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/SupportedBridgesOutputDTO.ts#L3)

---

### SupportedChainsOutputDTO

Ƭ **SupportedChainsOutputDTO**: `Object`

#### Type declaration

| Name      | Type                                      | Description    |
| :-------- | :---------------------------------------- | :------------- |
| `result`  | [`ChainDetails`](types.md#chaindetails)[] | -              |
| `success` | `boolean`                                 | Status of API. |

#### Defined in

[src/client/models/SupportedChainsOutputDTO.ts:3](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/SupportedChainsOutputDTO.ts#L3)

---

### TokenAsset

Ƭ **TokenAsset**: `Object`

#### Type declaration

| Name               | Type     | Description               |
| :----------------- | :------- | :------------------------ |
| `address`          | `string` | Address of token.         |
| `chainAgnosticId?` | `string` | Unique Id over all chains |
| `chainId`          | `number` | Chain id of the token     |
| `decimals?`        | `number` | Decimal used for token.   |
| `icon?`            | `string` | URL for icon of token.    |
| `logoURI?`         | `string` | URL for icon of token.    |
| `name?`            | `string` | Name of token.            |
| `symbol`           | `string` | Symbol of token.          |

#### Defined in

[src/client/models/TokenAsset.ts:1](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/TokenAsset.ts#L1)

---

### TokenBalanceReponseDTO

Ƭ **TokenBalanceReponseDTO**: `Object`

#### Type declaration

| Name                   | Type                                                                                                                                                                                         |
| :--------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `result`               | { `balance?`: `string` ; `chainId?`: `number` ; `decimals?`: `number` ; `icon?`: `string` ; `name?`: `string` ; `symbol?`: `string` ; `tokenAddress?`: `string` ; `userAddress?`: `string` } |
| `result.balance?`      | `string`                                                                                                                                                                                     |
| `result.chainId?`      | `number`                                                                                                                                                                                     |
| `result.decimals?`     | `number`                                                                                                                                                                                     |
| `result.icon?`         | `string`                                                                                                                                                                                     |
| `result.name?`         | `string`                                                                                                                                                                                     |
| `result.symbol?`       | `string`                                                                                                                                                                                     |
| `result.tokenAddress?` | `string`                                                                                                                                                                                     |
| `result.userAddress?`  | `string`                                                                                                                                                                                     |
| `success`              | `boolean`                                                                                                                                                                                    |

#### Defined in

[src/client/models/TokenBalanceReponseDTO.ts:1](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/TokenBalanceReponseDTO.ts#L1)

---

### TokenListOutputDTO

Ƭ **TokenListOutputDTO**: `Object`

#### Type declaration

| Name      | Type                                  | Description    |
| :-------- | :------------------------------------ | :------------- |
| `result`  | [`TokenAsset`](types.md#tokenasset)[] | -              |
| `success` | `boolean`                             | Status of API. |

#### Defined in

[src/client/models/TokenListOutputDTO.ts:3](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/TokenListOutputDTO.ts#L3)

---

### TokenPriceResponseDTO

Ƭ **TokenPriceResponseDTO**: `Object`

#### Type declaration

| Name                   | Type                                                                                                   |
| :--------------------- | :----------------------------------------------------------------------------------------------------- |
| `result`               | { `chainId?`: `number` ; `currency?`: `string` ; `tokenAddress?`: `string` ; `tokenPrice?`: `number` } |
| `result.chainId?`      | `number`                                                                                               |
| `result.currency?`     | `string`                                                                                               |
| `result.tokenAddress?` | `string`                                                                                               |
| `result.tokenPrice?`   | `number`                                                                                               |
| `success`              | `boolean`                                                                                              |

#### Defined in

[src/client/models/TokenPriceResponseDTO.ts:1](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/TokenPriceResponseDTO.ts#L1)

---

### TransactionReceiptResponseDTO

Ƭ **TransactionReceiptResponseDTO**: `Object`

#### Type declaration

| Name      | Type      | Description    |
| :-------- | :-------- | :------------- |
| `result`  | `any`     | -              |
| `success` | `boolean` | Status of API. |

#### Defined in

[src/client/models/TransactionReceiptResponseDTO.ts:1](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/TransactionReceiptResponseDTO.ts#L1)

## Variables

### OpenAPI

• `Const` **OpenAPI**: [`OpenAPIConfig`](types.md#openapiconfig)

#### Defined in

[src/client/core/OpenAPI.ts:19](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/core/OpenAPI.ts#L19)
