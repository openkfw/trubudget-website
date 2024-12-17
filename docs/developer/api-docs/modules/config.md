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

[src/config.ts:141](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/config.ts#L141)

## Functions

### default

▸ **default**(): `Config`

Gets the configuration used to start the API

#### Returns

`Config`

the configuration Config

**`Not Exported`**

#### Defined in

[src/config.ts:220](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/config.ts#L220)

___

### isProductionEnvironment

▸ **isProductionEnvironment**(): `boolean`

Checks if a production environment is running

#### Returns

`boolean`

true if the current environment is a production environment. otherwise false

#### Defined in

[src/config.ts:228](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/config.ts#L228)
