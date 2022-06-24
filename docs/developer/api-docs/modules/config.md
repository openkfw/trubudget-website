# config
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / config

## Table of contents

### Variables

- [config](config.md#config)

### Functions

- [default](config.md#default)
- [isProductionEnvironment](config.md#isproductionenvironment)

## Variables

### config

• `Const` **config**: [`Config`](../interfaces/Config.md)

#### Defined in

[src/config.ts:77](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/config.ts#L77)

## Functions

### default

▸ **default**(): [`Config`](../interfaces/Config.md)

Gets the configuration used to start the API

**`notexported`**

#### Returns

[`Config`](../interfaces/Config.md)

the configuration [Config](../interfaces/Config.md)

#### Defined in

[src/config.ts:168](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/config.ts#L168)

___

### isProductionEnvironment

▸ **isProductionEnvironment**(): `boolean`

Checks if a production environment is running

#### Returns

`boolean`

true if the current environment is a production environment. otherwise false

#### Defined in

[src/config.ts:194](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/config.ts#L194)
