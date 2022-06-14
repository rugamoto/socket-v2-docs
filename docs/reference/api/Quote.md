# Quote

## Table of contents

### Constructors

- [constructor](Quote.md#constructor)

### Methods

- [getQuote](Quote.md#getquote)

## Constructors

### constructor

• **new Quote**()

## Methods

### getQuote

▸ `Static` **getQuote**(`quoteRequest`): [`CancelablePromise`](../client/CancelablePromise.md)<[`QuoteOutputDTO`](../types.md#quoteoutputdto)\>

**`throws`** ApiError

#### Parameters

| Name           | Type           |
| :------------- | :------------- |
| `quoteRequest` | `QuoteRequest` |

#### Returns

[`CancelablePromise`](../client/CancelablePromise.md)<[`QuoteOutputDTO`](../types.md#quoteoutputdto)\>

QuoteOutputDTO Returns all the possible routes for bridging tokens from one chain to another. One of the routes can be selected and passed in to start the route.

#### Defined in

[src/client/services/Quote.ts:13](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/services/Quote.ts#L13)
