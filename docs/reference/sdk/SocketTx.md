# SocketTx

An entity representing the transaction prompted by the socket api

## Hierarchy

- [`NextTxResponse`](../interfaces/NextTxResponse.md)

  ↳ **`SocketTx`**

## Table of contents

### Constructors

- [constructor](SocketTx.md#constructor)

### Properties

- [activeRouteId](SocketTx.md#activerouteid)
- [approvalChecked](SocketTx.md#approvalchecked)
- [approvalData](SocketTx.md#approvaldata)
- [chainId](SocketTx.md#chainid)
- [done](SocketTx.md#done)
- [hash](SocketTx.md#hash)
- [statusCheckInterval](SocketTx.md#statuscheckinterval)
- [totalUserTx](SocketTx.md#totalusertx)
- [txData](SocketTx.md#txdata)
- [txTarget](SocketTx.md#txtarget)
- [txType](SocketTx.md#txtype)
- [userTxIndex](SocketTx.md#usertxindex)
- [userTxType](SocketTx.md#usertxtype)
- [value](SocketTx.md#value)

### Methods

- [approvalRequired](SocketTx.md#approvalrequired)
- [getApproveTransaction](SocketTx.md#getapprovetransaction)
- [getSendTransaction](SocketTx.md#getsendtransaction)
- [submit](SocketTx.md#submit)
- [updateActiveRoute](SocketTx.md#updateactiveroute)

## Constructors

### constructor

• **new SocketTx**(`nextTx`, `statusCheckInterval?`)

#### Parameters

| Name                  | Type                                                | Default value | Description                                                              |
| :-------------------- | :-------------------------------------------------- | :------------ | :----------------------------------------------------------------------- |
| `nextTx`              | [`NextTxResponse`](../interfaces/NextTxResponse.md) | `undefined`   | The api object for the next transaction                                  |
| `statusCheckInterval` | `number`                                            | `10000`       | How often in ms to poll for status updates when checking the transaction |

#### Inherited from

NextTxResponse.constructor

#### Defined in

[src/socketTx.ts:34](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/socketTx.ts#L34)

## Properties

### activeRouteId

• **activeRouteId**: `number`

Id of Active Route.

#### Inherited from

[NextTxResponse](../interfaces/NextTxResponse.md).[activeRouteId](../interfaces/NextTxResponse.md#activerouteid)

#### Defined in

[src/client/models/NextTxResponse.ts:9](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/NextTxResponse.ts#L9)

---

### approvalChecked

• **approvalChecked**: `boolean` = `false`

If the approval has been checked

#### Defined in

[src/socketTx.ts:20](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/socketTx.ts#L20)

---

### approvalData

• **approvalData**: `null` \| [`ApprovalData`](../types.md#approvaldata)

#### Inherited from

[NextTxResponse](../interfaces/NextTxResponse.md).[approvalData](../interfaces/NextTxResponse.md#approvaldata)

#### Defined in

[src/client/models/NextTxResponse.ts:43](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/NextTxResponse.ts#L43)

---

### chainId

• **chainId**: `number`

Id of chain where transaction has to be sent.

#### Inherited from

[NextTxResponse](../interfaces/NextTxResponse.md).[chainId](../interfaces/NextTxResponse.md#chainid)

#### Defined in

[src/client/models/NextTxResponse.ts:21](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/NextTxResponse.ts#L21)

---

### done

• **done**: `boolean` = `false`

If the transaction is done

#### Defined in

[src/socketTx.ts:24](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/socketTx.ts#L24)

---

### hash

• **hash**: `undefined` \| `string`

Hash associated with this socket transaction step

#### Defined in

[src/socketTx.ts:28](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/socketTx.ts#L28)

---

### statusCheckInterval

• **statusCheckInterval**: `number`

How often in ms to poll for status updates when checking the transaction

#### Defined in

[src/socketTx.ts:16](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/socketTx.ts#L16)

---

### totalUserTx

• **totalUserTx**: `number`

Total number of transactions in Active Route.

#### Inherited from

[NextTxResponse](../interfaces/NextTxResponse.md).[totalUserTx](../interfaces/NextTxResponse.md#totalusertx)

#### Defined in

[src/client/models/NextTxResponse.ts:42](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/NextTxResponse.ts#L42)

---

### txData

• **txData**: `string`

Calldata for transaction.

#### Inherited from

[NextTxResponse](../interfaces/NextTxResponse.md).[txData](../interfaces/NextTxResponse.md#txdata)

#### Defined in

[src/client/models/NextTxResponse.ts:25](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/NextTxResponse.ts#L25)

---

### txTarget

• **txTarget**: `string`

Address to which transaction has to be sent.

#### Inherited from

[NextTxResponse](../interfaces/NextTxResponse.md).[txTarget](../interfaces/NextTxResponse.md#txtarget)

#### Defined in

[src/client/models/NextTxResponse.ts:17](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/NextTxResponse.ts#L17)

---

### txType

• **txType**: `TxType`

Type of transaction.

#### Inherited from

[NextTxResponse](../interfaces/NextTxResponse.md).[txType](../interfaces/NextTxResponse.md#txtype)

#### Defined in

[src/client/models/NextTxResponse.ts:29](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/NextTxResponse.ts#L29)

---

### userTxIndex

• **userTxIndex**: `number`

Index of transaction in Active Route. Index of the object in the userTxs array.

#### Inherited from

[NextTxResponse](../interfaces/NextTxResponse.md).[userTxIndex](../interfaces/NextTxResponse.md#usertxindex)

#### Defined in

[src/client/models/NextTxResponse.ts:38](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/NextTxResponse.ts#L38)

---

### userTxType

• **userTxType**: `UserTxType`

Type of user transaction.

#### Inherited from

[NextTxResponse](../interfaces/NextTxResponse.md).[userTxType](../interfaces/NextTxResponse.md#usertxtype)

#### Defined in

[src/client/models/NextTxResponse.ts:13](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/NextTxResponse.ts#L13)

---

### value

• **value**: `string`

Native token amount to be sent with transaction.

#### Inherited from

[NextTxResponse](../interfaces/NextTxResponse.md).[value](../interfaces/NextTxResponse.md#value)

#### Defined in

[src/client/models/NextTxResponse.ts:34](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/NextTxResponse.ts#L34)

## Methods

### approvalRequired

▸ **approvalRequired**(): `Promise`<`boolean`\>

Whether an approval transaction is required.

#### Returns

`Promise`<`boolean`\>

True if required, otherwise false.

#### Defined in

[src/socketTx.ts:43](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/socketTx.ts#L43)

---

### getApproveTransaction

▸ **getApproveTransaction**(): `Promise`<`null` \| { `data?`: `string` ; `from?`: `string` ; `to?`: `string` }\>

Get the apporval transaction data if it is required

#### Returns

`Promise`<`null` \| { `data?`: `string` ; `from?`: `string` ; `to?`: `string` }\>

Apporval data to be sent if required, otherwise null

#### Defined in

[src/socketTx.ts:65](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/socketTx.ts#L65)

---

### getSendTransaction

▸ **getSendTransaction**(): `Promise`<{ `data`: `string` ; `to`: `string` ; `value`: `string` }\>

Get the transaction data

#### Returns

`Promise`<{ `data`: `string` ; `to`: `string` ; `value`: `string` }\>

Send transaction data

#### Defined in

[src/socketTx.ts:92](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/socketTx.ts#L92)

---

### submit

▸ **submit**(`hash`): `Promise`<`COMPLETED`\>

Submit the hash for this transaction and wait until it is marked as complete

#### Parameters

| Name   | Type     | Description                                  |
| :----- | :------- | :------------------------------------------- |
| `hash` | `string` | The hash for this transaction on the network |

#### Returns

`Promise`<`COMPLETED`\>

Returns the final status "COMPLETED" once the transaction is complete

#### Defined in

[src/socketTx.ts:126](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/socketTx.ts#L126)

---

### updateActiveRoute

▸ `Private` **updateActiveRoute**(`hash`): `Promise`<`PrepareActiveRouteStatus`\>

Get the latest status for the transaction

#### Parameters

| Name   | Type     | Description                                  |
| :----- | :------- | :------------------------------------------- |
| `hash` | `string` | The hash for this transaction on the network |

#### Returns

`Promise`<`PrepareActiveRouteStatus`\>

The current status

#### Defined in

[src/socketTx.ts:111](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/socketTx.ts#L111)
