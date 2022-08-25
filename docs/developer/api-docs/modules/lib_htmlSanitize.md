# lib/htmlSanitize
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / lib/htmlSanitize

## Table of contents

### Functions

- [htmlStrip](lib_htmlSanitize.md#htmlstrip)

## Functions

### htmlStrip

▸ **htmlStrip**(`joi`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `joi` | `any` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `base` | `StringSchema` |
| `language` | { `htmlStrip`: `string` = "remove all html tags from string" } |
| `language.htmlStrip` | `string` |
| `name` | `string` |
| `rules` | { `name`: `string` = "htmlStrip"; `validate`: (`params`: `any`, `value`: `any`, `state`: `any`, `options`: `any`) => `any`  }[] |

#### Defined in

[src/lib/htmlSanitize.ts:4](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/lib/htmlSanitize.ts#L4)
