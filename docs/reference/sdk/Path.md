# Path

The Path object represents a trade from a source token to a destination token.

## Table of contents

### Constructors

- [constructor](Path.md#constructor)

### Properties

- [fromToken](Path.md#fromtoken)
- [toToken](Path.md#totoken)

## Constructors

### constructor

• **new Path**(`options`)

#### Parameters

| Name                | Type                                   | Description              |
| :------------------ | :------------------------------------- | :----------------------- |
| `options`           | `Object`                               | The options for the path |
| `options.fromToken` | [`TokenAsset`](../types.md#tokenasset) | The source token         |
| `options.toToken`   | [`TokenAsset`](../types.md#tokenasset) | The destination token    |

#### Defined in

[src/path.ts:22](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/path.ts#L22)

## Properties

### fromToken

• **fromToken**: [`TokenAsset`](../types.md#tokenasset)

The source token

#### Defined in

[src/path.ts:10](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/path.ts#L10)

---

### toToken

• **toToken**: [`TokenAsset`](../types.md#tokenasset)

The destination token

#### Defined in

[src/path.ts:14](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/path.ts#L14)
