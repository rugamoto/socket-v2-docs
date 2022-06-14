# NextTxResponse

## Hierarchy

- **`NextTxResponse`**

  ↳ [`SocketTx`](../sdk/SocketTx.md)

## Table of contents

### Properties

- [activeRouteId](NextTxResponse.md#activerouteid)
- [approvalData](NextTxResponse.md#approvaldata)
- [chainId](NextTxResponse.md#chainid)
- [totalUserTx](NextTxResponse.md#totalusertx)
- [txData](NextTxResponse.md#txdata)
- [txTarget](NextTxResponse.md#txtarget)
- [txType](NextTxResponse.md#txtype)
- [userTxIndex](NextTxResponse.md#usertxindex)
- [userTxType](NextTxResponse.md#usertxtype)
- [value](NextTxResponse.md#value)

## Properties

### activeRouteId

• **activeRouteId**: `number`

Id of Active Route.

#### Defined in

[src/client/models/NextTxResponse.ts:9](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/NextTxResponse.ts#L9)

---

### approvalData

• **approvalData**: `null` \| [`ApprovalData`](../types.md#approvaldata)

#### Defined in

[src/client/models/NextTxResponse.ts:43](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/NextTxResponse.ts#L43)

---

### chainId

• **chainId**: `number`

Id of chain where transaction has to be sent.

#### Defined in

[src/client/models/NextTxResponse.ts:21](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/NextTxResponse.ts#L21)

---

### totalUserTx

• **totalUserTx**: `number`

Total number of transactions in Active Route.

#### Defined in

[src/client/models/NextTxResponse.ts:42](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/NextTxResponse.ts#L42)

---

### txData

• **txData**: `string`

Calldata for transaction.

#### Defined in

[src/client/models/NextTxResponse.ts:25](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/NextTxResponse.ts#L25)

---

### txTarget

• **txTarget**: `string`

Address to which transaction has to be sent.

#### Defined in

[src/client/models/NextTxResponse.ts:17](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/NextTxResponse.ts#L17)

---

### txType

• **txType**: `TxType`

Type of transaction.

#### Defined in

[src/client/models/NextTxResponse.ts:29](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/NextTxResponse.ts#L29)

---

### userTxIndex

• **userTxIndex**: `number`

Index of transaction in Active Route. Index of the object in the userTxs array.

#### Defined in

[src/client/models/NextTxResponse.ts:38](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/NextTxResponse.ts#L38)

---

### userTxType

• **userTxType**: `UserTxType`

Type of user transaction.

#### Defined in

[src/client/models/NextTxResponse.ts:13](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/NextTxResponse.ts#L13)

---

### value

• **value**: `string`

Native token amount to be sent with transaction.

#### Defined in

[src/client/models/NextTxResponse.ts:34](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/models/NextTxResponse.ts#L34)
