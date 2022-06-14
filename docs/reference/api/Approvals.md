# Approvals

## Table of contents

### Constructors

- [constructor](Approvals.md#constructor)

### Methods

- [fetchApprovals](Approvals.md#fetchapprovals)
- [fetchApprovalsCalldata](Approvals.md#fetchapprovalscalldata)

## Constructors

### constructor

• **new Approvals**()

## Methods

### fetchApprovals

▸ `Static` **fetchApprovals**(`__namedParameters`): [`CancelablePromise`](../client/CancelablePromise.md)<[`ApprovalOutputDTO`](../types.md#approvaloutputdto)\>

**`throws`** ApiError

#### Parameters

| Name                                | Type     | Description                                       |
| :---------------------------------- | :------- | :------------------------------------------------ |
| `__namedParameters`                 | `Object` | -                                                 |
| `__namedParameters.allowanceTarget` | `string` | Address whose spending allowance is to be checked |
| `__namedParameters.chainId`         | `number` | ID of chain, e.g Ethereum Mainnet = 1             |
| `__namedParameters.owner`           | `string` | Wallet address of token holder                    |
| `__namedParameters.tokenAddress`    | `string` | Contract address of token                         |

#### Returns

[`CancelablePromise`](../client/CancelablePromise.md)<[`ApprovalOutputDTO`](../types.md#approvaloutputdto)\>

ApprovalOutputDTO Gives approval values of given tokens for a given owner & chainId

#### Defined in

[src/client/services/Approvals.ts:13](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/services/Approvals.ts#L13)

---

### fetchApprovalsCalldata

▸ `Static` **fetchApprovalsCalldata**(`__namedParameters`): [`CancelablePromise`](../client/CancelablePromise.md)<[`ApprovalTxOutputDTO`](../types.md#approvaltxoutputdto)\>

**`throws`** ApiError

#### Parameters

| Name                                | Type     | Description                                           |
| :---------------------------------- | :------- | :---------------------------------------------------- |
| `__namedParameters`                 | `Object` | -                                                     |
| `__namedParameters.allowanceTarget` | `string` | Address whose spending allowance is to be checked     |
| `__namedParameters.amount`          | `string` | Amount of tokens to approve, e.g 10 USDC (6 decimals) |
| `__namedParameters.chainId`         | `number` | ID of chain, e.g Ethereum Mainnet = 1                 |
| `__namedParameters.owner`           | `string` | Wallet address of token holder                        |
| `__namedParameters.tokenAddress`    | `string` | Contract address of token                             |

#### Returns

[`CancelablePromise`](../client/CancelablePromise.md)<[`ApprovalTxOutputDTO`](../types.md#approvaltxoutputdto)\>

ApprovalTxOutputDTO Return the Approval Tx Data for the given params.

#### Defined in

[src/client/services/Approvals.ts:47](https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/client/services/Approvals.ts#L47)
