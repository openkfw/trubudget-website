# lib/htmlSanitize
[Api Code Documentation](../README.md) / [Exports](../modules.md) / lib/htmlSanitize

## Table of contents

### Variables

- [htmlStrip](lib_htmlSanitize.md#htmlstrip)

## Variables

### htmlStrip

• `Const` **htmlStrip**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `base` | `StringSchema`\<`string`\> |
| `messages` | \{ `string.htmlStrip`: `string` = "remove all html tags from string" } |
| `messages.string.htmlStrip` | `string` |
| `rules` | \{ `htmlStrip`: \{ `validate`: (`value`: `any`, `helpers`: `any`) => `string`  }  } |
| `rules.htmlStrip` | \{ `validate`: (`value`: `any`, `helpers`: `any`) => `string`  } |
| `rules.htmlStrip.validate` | [object Object] |
| `type` | `string` |

#### Defined in

[src/lib/htmlSanitize.ts:4](https://github.com/openkfw/TruBudget/blob/92640998/api/src/lib/htmlSanitize.ts#L4)
