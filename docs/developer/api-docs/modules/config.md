# config
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / config

## Table of contents

### Interfaces

- [JwtConfig](../interfaces/config.JwtConfig.md)

### Variables

- [config](config.md#config)

### Functions

- [default](config.md#default)
- [isProductionEnvironment](config.md#isproductionenvironment)

## Variables

### config

• `Const` **config**: `Config`

#### Defined in

[src/config.ts:136](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/config.ts#L136)

## Functions

### default

▸ **default**(): `Config`

Gets the configuration used to start the API

#### Returns

`Config`

the configuration Config

**`Not Exported`**

#### Defined in

[src/config.ts:270](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/config.ts#L270)

___

### isProductionEnvironment

▸ **isProductionEnvironment**(): `boolean`

Checks if a production environment is running

#### Returns

`boolean`

true if the current environment is a production environment. otherwise false

#### Defined in

[src/config.ts:309](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/config.ts#L309)
