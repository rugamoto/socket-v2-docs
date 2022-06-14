# Socket

The Socket represents the socket sdk. This is the starting point for interacting
with the socket SDK. It allows you to retrieve routes and start the execution of trades based on quotes

It includes direct access to the socket api.

## Table of contents

### Constructors

- [constructor](Socket.md#constructor)

### Properties

- [client](Socket.md#client)
- [options](Socket.md#options)

### Methods

- [assertTxDone](Socket.md#asserttxdone)
- [continue](Socket.md#continue)
- [executor](Socket.md#executor)
- [getAllQuotes](Socket.md#getallquotes)
- [getBestQuote](Socket.md#getbestquote)
- [getTokenList](Socket.md#gettokenlist)
- [start](Socket.md#start)

## Constructors

### constructor

• **new Socket**(`options`)

#### Parameters

| Name      | Type                                              | Description        |
| :-------- | :------------------------------------------------ | :----------------- |
| `options` | [`SocketOptions`](../interfaces/SocketOptions.md) | Socket sdk options |

#### Defined in

[src/socket.ts:46](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/socket.ts#L46)

## Properties

### client

• **client**: `Object`

API client for accessing the socket api directly

#### Type declaration

| Name         | Type                                        |
| :----------- | :------------------------------------------ |
| `approvals`  | typeof [`Approvals`](../api/Approvals.md)   |
| `balances`   | typeof [`Balances`](../api/Balances.md)     |
| `quote`      | typeof [`Quote`](../api/Quote.md)           |
| `routes`     | typeof [`Routes`](../api/Routes.md)         |
| `server`     | typeof [`Server`](../api/Server.md)         |
| `supported`  | typeof [`Supported`](../api/Supported.md)   |
| `tokenLists` | typeof [`TokenLists`](../api/TokenLists.md) |

#### Defined in

[src/socket.ts:32](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/socket.ts#L32)

---

### options

• **options**: [`SocketOptions`](../interfaces/SocketOptions.md)

The api options

#### Defined in

[src/socket.ts:27](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/socket.ts#L27)

## Methods

### assertTxDone

▸ `Private` **assertTxDone**(`socketTx?`): `void`

Asserts that the transaction object has been marked done

#### Parameters

| Name        | Type                      | Description            |
| :---------- | :------------------------ | :--------------------- |
| `socketTx?` | [`SocketTx`](SocketTx.md) | The socket transaction |

#### Returns

`void`

#### Defined in

[src/socket.ts:126](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/socket.ts#L126)

---

### continue

▸ **continue**(`activeRouteId`): `Promise`<`AsyncGenerator`<[`SocketTx`](SocketTx.md), `void`, `string`\>\>

Continue an active route

#### Parameters

| Name            | Type     | Description                                          |
| :-------------- | :------- | :--------------------------------------------------- |
| `activeRouteId` | `number` | The active route id of the desired route to continue |

#### Returns

`Promise`<`AsyncGenerator`<[`SocketTx`](SocketTx.md), `void`, `string`\>\>

An iterator that will yield each transaction required in the route

#### Defined in

[src/socket.ts:191](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/socket.ts#L191)

---

### executor

▸ `Private` **executor**(`initialTx`, `activeRoute?`): `AsyncGenerator`<[`SocketTx`](SocketTx.md), `void`, `string`\>

Returns a generator that yields each transaction for a route in sequence

#### Parameters

| Name           | Type                                                     | Description                                                     |
| :------------- | :------------------------------------------------------- | :-------------------------------------------------------------- |
| `initialTx`    | [`NextTxResponse`](../interfaces/NextTxResponse.md)      | The first transaction to execute                                |
| `activeRoute?` | [`ActiveRouteResponse`](../types.md#activerouteresponse) | The active route object if this executor is for an active route |

#### Returns

`AsyncGenerator`<[`SocketTx`](SocketTx.md), `void`, `string`\>

#### Defined in

[src/socket.ts:139](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/socket.ts#L139)

---

### getAllQuotes

▸ **getAllQuotes**(`params`, `preferences?`): `Promise`<[`SocketQuote`](../interfaces/SocketQuote.md)[]\>

#### Parameters

| Name           | Type                                          | Description                                                        |
| :------------- | :-------------------------------------------- | :----------------------------------------------------------------- |
| `params`       | [`QuoteParams`](../interfaces/QuoteParams.md) | The parameters of the quote                                        |
| `preferences?` | `QuotePreferences`                            | Additional route preferences for retrieving the quote from the api |

#### Returns

`Promise`<[`SocketQuote`](../interfaces/SocketQuote.md)[]\>

All quotes found

#### Defined in

[src/socket.ts:94](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/socket.ts#L94)

---

### getBestQuote

▸ **getBestQuote**(`params`, `preferences?`): `Promise`<`null` \| [`SocketQuote`](../interfaces/SocketQuote.md)\>

#### Parameters

| Name           | Type                                          | Description                                                        |
| :------------- | :-------------------------------------------- | :----------------------------------------------------------------- |
| `params`       | [`QuoteParams`](../interfaces/QuoteParams.md) | The parameters of the quote                                        |
| `preferences?` | `QuotePreferences`                            | Additional route preferences for retrieving the quote from the api |

#### Returns

`Promise`<`null` \| [`SocketQuote`](../interfaces/SocketQuote.md)\>

The best quote if found or null

#### Defined in

[src/socket.ts:83](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/socket.ts#L83)

---

### getTokenList

▸ **getTokenList**(`options`): `Promise`<{ `from`: [`TokenAsset`](../types.md#tokenasset)[] = fromTokenList.result; `to`: [`TokenAsset`](../types.md#tokenasset)[] = toTokenList.result }\>

#### Parameters

| Name                  | Type     | Description                        |
| :-------------------- | :------- | :--------------------------------- |
| `options`             | `Object` |                                    |
| `options.fromChainId` | `number` | The source chain id e.g. 0x1       |
| `options.toChainId`   | `number` | The destination chain id e.g. 0x56 |

#### Returns

`Promise`<{ `from`: [`TokenAsset`](../types.md#tokenasset)[] = fromTokenList.result; `to`: [`TokenAsset`](../types.md#tokenasset)[] = toTokenList.result }\>

The `from` and `to` token lists

#### Defined in

[src/socket.ts:59](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/socket.ts#L59)

---

### start

▸ **start**(`quote`): `Promise`<`AsyncGenerator`<[`SocketTx`](SocketTx.md), `void`, `string`\>\>

Start executing a socket quote/route.

#### Parameters

| Name    | Type                                          |
| :------ | :-------------------------------------------- |
| `quote` | [`SocketQuote`](../interfaces/SocketQuote.md) |

#### Returns

`Promise`<`AsyncGenerator`<[`SocketTx`](SocketTx.md), `void`, `string`\>\>

An iterator that will yield each transaction required in the route

#### Defined in

[src/socket.ts:169](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/socket.ts#L169)
