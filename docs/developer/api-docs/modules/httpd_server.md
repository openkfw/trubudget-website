# httpd/server
[Api Code Documentation](../README.md) / [Exports](../modules.md) / httpd/server

## Table of contents

### Functions

- [addGroupsPreHandler](httpd_server.md#addgroupsprehandler)
- [createBasicApp](httpd_server.md#createbasicapp)

## Functions

### addGroupsPreHandler

▸ **addGroupsPreHandler**(`server`, `conn`, `groupsFn`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `server` | `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\> |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `groupsFn` | (`conn`: [`ConnToken`](service_conn.md#conntoken), `ctx`: [`Ctx`](../interfaces/lib_ctx.Ctx.md), `serviceUser`: [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md), `targetUserId`: `string`) => `Promise`\<[`Type`](result.md#type)\<[`Group`](../interfaces/service_domain_organization_group.Group.md)[]\>\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/httpd/server.ts:118](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/httpd/server.ts#L118)

___

### createBasicApp

▸ **createBasicApp**(`jwt`, `urlPrefix`, `apiPort`, `accessControlAllowOrigin`, `rateLimit`): `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `jwt` | [`JwtConfig`](../interfaces/config.JwtConfig.md) |
| `urlPrefix` | `string` |
| `apiPort` | `number` |
| `accessControlAllowOrigin` | `string` |
| `rateLimit` | `undefined` \| `number` |

#### Returns

`FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

#### Defined in

[src/httpd/server.ts:205](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/httpd/server.ts#L205)
