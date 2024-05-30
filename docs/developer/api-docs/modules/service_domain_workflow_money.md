# service/domain/workflow/money
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/money

## Table of contents

### Type Aliases

- [CurrencyCode](service_domain_workflow_money.md#currencycode)
- [MoneyAmount](service_domain_workflow_money.md#moneyamount)

### Variables

- [amountTypeSchema](service_domain_workflow_money.md#amounttypeschema)
- [conversionRateSchema](service_domain_workflow_money.md#conversionrateschema)
- [currencyCodeSchema](service_domain_workflow_money.md#currencycodeschema)
- [moneyAmountSchema](service_domain_workflow_money.md#moneyamountschema)

### Functions

- [isAmountOfMoney](service_domain_workflow_money.md#isamountofmoney)

## Type Aliases

### CurrencyCode

Ƭ **CurrencyCode**: `string`

#### Defined in

[src/service/domain/workflow/money.ts:295](https://github.com/openkfw/TruBudget/blob/d07ad94/api/src/service/domain/workflow/money.ts#L295)

___

### MoneyAmount

Ƭ **MoneyAmount**: `string`

#### Defined in

[src/service/domain/workflow/money.ts:3](https://github.com/openkfw/TruBudget/blob/d07ad94/api/src/service/domain/workflow/money.ts#L3)

## Variables

### amountTypeSchema

• `Const` **amountTypeSchema**: `StringSchema`\<`string`\>

#### Defined in

[src/service/domain/workflow/money.ts:297](https://github.com/openkfw/TruBudget/blob/d07ad94/api/src/service/domain/workflow/money.ts#L297)

___

### conversionRateSchema

• `Const` **conversionRateSchema**: `StringSchema`\<`string`\>

#### Defined in

[src/service/domain/workflow/money.ts:14](https://github.com/openkfw/TruBudget/blob/d07ad94/api/src/service/domain/workflow/money.ts#L14)

___

### currencyCodeSchema

• `Const` **currencyCodeSchema**: `StringSchema`\<`string`\>

#### Defined in

[src/service/domain/workflow/money.ts:296](https://github.com/openkfw/TruBudget/blob/d07ad94/api/src/service/domain/workflow/money.ts#L296)

___

### moneyAmountSchema

• `Const` **moneyAmountSchema**: `StringSchema`\<`string`\>

#### Defined in

[src/service/domain/workflow/money.ts:4](https://github.com/openkfw/TruBudget/blob/d07ad94/api/src/service/domain/workflow/money.ts#L4)

## Functions

### isAmountOfMoney

▸ **isAmountOfMoney**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`boolean`

#### Defined in

[src/service/domain/workflow/money.ts:9](https://github.com/openkfw/TruBudget/blob/d07ad94/api/src/service/domain/workflow/money.ts#L9)
