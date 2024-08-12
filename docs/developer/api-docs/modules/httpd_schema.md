# httpd/schema
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / httpd/schema

## Table of contents

### Interfaces

- [Schema](../interfaces/httpd_schema.Schema.md)
- [SwaggerSchema](../interfaces/httpd_schema.SwaggerSchema.md)

### Functions

- [getSchema](httpd_schema.md#getschema)
- [getSchemaWithoutAuth](httpd_schema.md#getschemawithoutauth)

## Functions

### getSchema

▸ **getSchema**(`server`, `id`): [`Schema`](../interfaces/httpd_schema.Schema.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `server` | `any` |
| `id` | `any` |

#### Returns

[`Schema`](../interfaces/httpd_schema.Schema.md)

#### Defined in

[src/httpd/schema.ts:547](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/httpd/schema.ts#L547)

___

### getSchemaWithoutAuth

▸ **getSchemaWithoutAuth**(`id`): [`Schema`](../interfaces/httpd_schema.Schema.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `any` |

#### Returns

[`Schema`](../interfaces/httpd_schema.Schema.md)

#### Defined in

[src/httpd/schema.ts:554](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/httpd/schema.ts#L554)
