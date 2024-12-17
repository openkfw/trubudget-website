# service
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service

## Table of contents

### References

- [ConnToken](service.md#conntoken)
- [Event](service.md#event)
- [Issuer](service.md#issuer)
- [throwUnsupportedEventVersion](service.md#throwunsupportedeventversion)

### Functions

- [assignWorkflowitem](service.md#assignworkflowitem)
- [closeWorkflowitem](service.md#closeworkflowitem)
- [getWorkflowitemOrdering](service.md#getworkflowitemordering)
- [grantGlobalPermission](service.md#grantglobalpermission)
- [init](service.md#init)
- [revokeGlobalPermission](service.md#revokeglobalpermission)
- [updateWorkflowitem](service.md#updateworkflowitem)

## References

### ConnToken

Re-exports [ConnToken](service_conn.md#conntoken)

___

### Event

Re-exports [Event](../interfaces/service_event.Event.md)

___

### Issuer

Re-exports [Issuer](../interfaces/service_issuer.Issuer.md)

___

### throwUnsupportedEventVersion

Re-exports [throwUnsupportedEventVersion](service_event.md#throwunsupportedeventversion)

## Functions

### assignWorkflowitem

▸ **assignWorkflowitem**(`conn`, `issuer`, `newAssignee`, `projectId`, `subprojectId`, `workflowitemId`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `issuer` | [`Issuer`](../interfaces/service_issuer.Issuer.md) |
| `newAssignee` | `string` |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `workflowitemId` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/service/index.ts:287](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/index.ts#L287)

___

### closeWorkflowitem

▸ **closeWorkflowitem**(`conn`, `issuer`, `projectId`, `subprojectId`, `workflowitemId`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `issuer` | [`Issuer`](../interfaces/service_issuer.Issuer.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `workflowitemId` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/service/index.ts:228](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/index.ts#L228)

___

### getWorkflowitemOrdering

▸ **getWorkflowitemOrdering**(`conn`, `projectId`, `subprojectId`): `Promise`\<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `projectId` | `string` |
| `subprojectId` | `string` |

#### Returns

`Promise`\<`string`[]\>

#### Defined in

[src/service/index.ts:186](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/index.ts#L186)

___

### grantGlobalPermission

▸ **grantGlobalPermission**(`conn`, `issuer`, `grantee`, `intent`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `issuer` | [`Issuer`](../interfaces/service_issuer.Issuer.md) |
| `grantee` | `string` |
| `intent` | [`default`](authz_intents.md#default) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/service/index.ts:62](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/index.ts#L62)

___

### init

▸ **init**(`rpcSettings`): [`ConnToken`](service_conn.md#conntoken)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpcSettings` | [`ConnectionSettings`](../interfaces/service_RpcClient_h.ConnectionSettings.md) |

#### Returns

[`ConnToken`](service_conn.md#conntoken)

#### Defined in

[src/service/index.ts:50](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/index.ts#L50)

___

### revokeGlobalPermission

▸ **revokeGlobalPermission**(`conn`, `issuer`, `recipient`, `intent`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `issuer` | [`Issuer`](../interfaces/service_issuer.Issuer.md) |
| `recipient` | `string` |
| `intent` | [`default`](authz_intents.md#default) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/service/index.ts:111](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/index.ts#L111)

___

### updateWorkflowitem

▸ **updateWorkflowitem**(`conn`, `issuer`, `projectId`, `subprojectId`, `workflowitemId`, `data`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `issuer` | [`Issuer`](../interfaces/service_issuer.Issuer.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `workflowitemId` | `string` |
| `data` | `Update` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/service/index.ts:257](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/index.ts#L257)
