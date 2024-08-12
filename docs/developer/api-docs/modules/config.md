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

[src/config.ts:130](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/config.ts#L130)

## Functions

### default

▸ **default**(): `Config`

Gets the configuration used to start the API

#### Returns

`Config`

the configuration Config

**`Not Exported`**

#### Defined in

[src/config.ts:259](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/config.ts#L259)

___

### isProductionEnvironment

▸ **isProductionEnvironment**(): `boolean`

Checks if a production environment is running

#### Returns

`boolean`

true if the current environment is a production environment. otherwise false

#### Defined in

[src/config.ts:298](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/config.ts#L298)
