
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/library')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.7.1
 * Query Engine version: 0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5
 */
Prisma.prismaVersion = {
  client: "5.7.1",
  engine: "0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  nameLast: 'nameLast',
  nameFirst: 'nameFirst',
  providerId: 'providerId',
  provider: 'provider',
  roles: 'roles',
  registered: 'registered',
  lastLogIn: 'lastLogIn'
};

exports.Prisma.ClaimScalarFieldEnum = {
  id: 'id',
  claimType: 'claimType',
  acquired: 'acquired',
  condition: 'condition',
  notes: 'notes',
  ownerId: 'ownerId',
  partId: 'partId'
};

exports.Prisma.BrandScalarFieldEnum = {
  id: 'id',
  name: 'name',
  nameShort: 'nameShort',
  nameAbbreviation: 'nameAbbreviation',
  notes: 'notes',
  webAddress: 'webAddress'
};

exports.Prisma.BrandMemberScalarFieldEnum = {
  id: 'id',
  productLineId: 'productLineId',
  brandId: 'brandId'
};

exports.Prisma.ProductLineScalarFieldEnum = {
  id: 'id',
  type: 'type',
  name: 'name',
  nameShort: 'nameShort',
  nameAbbreviation: 'nameAbbreviation',
  notes: 'notes',
  webAddress: 'webAddress'
};

exports.Prisma.PropertyGroupScalarFieldEnum = {
  id: 'id',
  order: 'order',
  name: 'name',
  description: 'description'
};

exports.Prisma.PropertyGroupMembershipScalarFieldEnum = {
  id: 'id',
  partTypeId: 'partTypeId',
  propertyTypeId: 'propertyTypeId',
  groupId: 'groupId'
};

exports.Prisma.PropertyTypeScalarFieldEnum = {
  id: 'id',
  order: 'order',
  name: 'name',
  description: 'description',
  valueDataType: 'valueDataType',
  valueDataTypeModifier: 'valueDataTypeModifier',
  variation: 'variation'
};

exports.Prisma.PropertyLookupScalarFieldEnum = {
  id: 'id',
  value: 'value',
  propertyTypeId: 'propertyTypeId'
};

exports.Prisma.PartClassScalarFieldEnum = {
  id: 'id',
  order: 'order',
  name: 'name'
};

exports.Prisma.PartClassMembershipScalarFieldEnum = {
  id: 'id',
  partClassId: 'partClassId',
  partTypeId: 'partTypeId'
};

exports.Prisma.PartTypeScalarFieldEnum = {
  id: 'id',
  order: 'order',
  name: 'name',
  description: 'description'
};

exports.Prisma.PartGroupScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.PartGroupMembershipScalarFieldEnum = {
  id: 'id',
  partId: 'partId',
  groupId: 'groupId'
};

exports.Prisma.PartScalarFieldEnum = {
  id: 'id',
  type: 'type',
  name: 'name',
  notes: 'notes',
  weight: 'weight',
  weightUnit: 'weightUnit',
  productLineId: 'productLineId'
};

exports.Prisma.PropertyScalarFieldEnum = {
  id: 'id',
  itemId: 'itemId',
  value: 'value',
  valueDataMethod: 'valueDataMethod',
  propertyTypeId: 'propertyTypeId'
};

exports.Prisma.WheelSpokeScalarFieldEnum = {
  id: 'id',
  quantity: 'quantity',
  length: 'length',
  tensionApplied: 'tensionApplied',
  tensionUnit: 'tensionUnit',
  preparation: 'preparation',
  notes: 'notes',
  spokeId: 'spokeId',
  wheelId: 'wheelId'
};

exports.Prisma.WheelScalarFieldEnum = {
  id: 'id',
  name: 'name',
  notes: 'notes',
  hubId: 'hubId',
  rimId: 'rimId'
};

exports.Prisma.BuildPartScalarFieldEnum = {
  id: 'id',
  buildId: 'buildId',
  partId: 'partId'
};

exports.Prisma.BuildScalarFieldEnum = {
  id: 'id',
  name: 'name',
  status: 'status',
  notes: 'notes'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  User: 'User',
  Claim: 'Claim',
  Brand: 'Brand',
  BrandMember: 'BrandMember',
  ProductLine: 'ProductLine',
  PropertyGroup: 'PropertyGroup',
  PropertyGroupMembership: 'PropertyGroupMembership',
  PropertyType: 'PropertyType',
  PropertyLookup: 'PropertyLookup',
  PartClass: 'PartClass',
  PartClassMembership: 'PartClassMembership',
  PartType: 'PartType',
  PartGroup: 'PartGroup',
  PartGroupMembership: 'PartGroupMembership',
  Part: 'Part',
  Property: 'Property',
  WheelSpoke: 'WheelSpoke',
  Wheel: 'Wheel',
  BuildPart: 'BuildPart',
  Build: 'Build'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/mykohl/Documents/GitHub/CycleOps/data/prisma/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env"
  },
  "relativePath": "..",
  "clientVersion": "5.7.1",
  "engineVersion": "0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgPSAiLi9jbGllbnQiCn0KCmRhdGFzb3VyY2UgZGIgewogIHByb3ZpZGVyID0gInBvc3RncmVzcWwiCiAgdXJsID0gZW52KCJEQVRBQkFTRV9VUkwiKQp9Cgptb2RlbCBVc2VyIHsKICBpZCBJbnQgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBuYW1lIFN0cmluZz8KICBuYW1lTGFzdCBTdHJpbmc/CiAgbmFtZUZpcnN0IFN0cmluZz8KICBwcm92aWRlcklkIFN0cmluZyBAdW5pcXVlCiAgcHJvdmlkZXIgU3RyaW5nPwogIHJvbGVzIFN0cmluZz8KICByZWdpc3RlcmVkIERhdGVUaW1lPwogIGxhc3RMb2dJbiBEYXRlVGltZT8KICBjbGFpbXMgQ2xhaW1bXQoJQEBtYXAoIkN5Y2xpc3QiKQp9Cgptb2RlbCBDbGFpbSB7CiAgaWQgSW50IEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgY2xhaW1UeXBlIFN0cmluZz8KICBhY3F1aXJlZCBEYXRlVGltZT8KICBjb25kaXRpb24gU3RyaW5nPwogIG5vdGVzIFN0cmluZz8KICBvd25lciBVc2VyPyBAcmVsYXRpb24oZmllbGRzOiBbb3duZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgb3duZXJJZCBJbnQ/CiAgcGFydCBQYXJ0PyBAcmVsYXRpb24oZmllbGRzOiBbcGFydElkXSwgcmVmZXJlbmNlczogW2lkXSkKICBwYXJ0SWQgSW50Pwp9Cgptb2RlbCBCcmFuZCB7CiAgaWQgSW50IEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgbmFtZSBTdHJpbmc/CiAgbmFtZVNob3J0IFN0cmluZz8KICBuYW1lQWJicmV2aWF0aW9uIFN0cmluZz8KICBub3RlcyBTdHJpbmc/CiAgd2ViQWRkcmVzcyBTdHJpbmc/CiAgbGFiZWxNZW1iZXJzaGlwcyBCcmFuZE1lbWJlcltdCn0KCm1vZGVsIEJyYW5kTWVtYmVyIHsKICBpZCBJbnQgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBwcm9kdWN0TGluZSBQcm9kdWN0TGluZT8gQHJlbGF0aW9uKGZpZWxkczogW3Byb2R1Y3RMaW5lSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIHByb2R1Y3RMaW5lSWQgSW50PwogIGJyYW5kIEJyYW5kPyBAcmVsYXRpb24oZmllbGRzOiBbYnJhbmRJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgYnJhbmRJZCBJbnQ/Cn0KCm1vZGVsIFByb2R1Y3RMaW5lIHsKICBpZCBJbnQgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICB0eXBlIFN0cmluZz8KICBuYW1lIFN0cmluZz8KICBuYW1lU2hvcnQgU3RyaW5nPwogIG5hbWVBYmJyZXZpYXRpb24gU3RyaW5nPwogIG5vdGVzIFN0cmluZz8KICB3ZWJBZGRyZXNzIFN0cmluZz8KICBsYWJlbE1lbWJlcnNoaXBzIEJyYW5kTWVtYmVyW10KICBpdGVtcyBQYXJ0W10KfQoKbW9kZWwgUHJvcGVydHlHcm91cCB7CiAgaWQgSW50IEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgb3JkZXIgSW50PwogIG5hbWUgU3RyaW5nIEB1bmlxdWUKICBkZXNjcmlwdGlvbiBTdHJpbmc/CiAgcHJvcGVydHlUeXBlcyBQcm9wZXJ0eUdyb3VwTWVtYmVyc2hpcFtdCn0KCm1vZGVsIFByb3BlcnR5R3JvdXBNZW1iZXJzaGlwIHsKICBpZCBJbnQgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBwYXJ0VHlwZSBQYXJ0VHlwZT8gQHJlbGF0aW9uKGZpZWxkczogW3BhcnRUeXBlSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIHBhcnRUeXBlSWQgSW50PwogIHByb3BlcnR5VHlwZSBQcm9wZXJ0eVR5cGU/IEByZWxhdGlvbihmaWVsZHM6IFtwcm9wZXJ0eVR5cGVJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgcHJvcGVydHlUeXBlSWQgSW50PwogIGdyb3VwIFByb3BlcnR5R3JvdXA/IEByZWxhdGlvbihmaWVsZHM6IFtncm91cElkXSwgcmVmZXJlbmNlczogW2lkXSkKICBncm91cElkIEludD8KfQoKbW9kZWwgUHJvcGVydHlUeXBlIHsKICBpZCBJbnQgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBvcmRlciBJbnQ/CiAgbmFtZSBTdHJpbmc/CiAgZGVzY3JpcHRpb24gU3RyaW5nPwogIHZhbHVlRGF0YVR5cGUgU3RyaW5nPwogIHZhbHVlRGF0YVR5cGVNb2RpZmllciBTdHJpbmc/CiAgdmFyaWF0aW9uIFN0cmluZz8KICBncm91cHMgUHJvcGVydHlHcm91cE1lbWJlcnNoaXBbXQogIHByb3BlcnRpZXMgUHJvcGVydHlbXQogIGxvb2t1cFZhbHVlcyBQcm9wZXJ0eUxvb2t1cFtdCn0KCm1vZGVsIFByb3BlcnR5TG9va3VwIHsKICBpZCBJbnQgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICB2YWx1ZSBTdHJpbmc/CiAgCiAgcHJvcGVydHlUeXBlIFByb3BlcnR5VHlwZT8gQHJlbGF0aW9uKGZpZWxkczogW3Byb3BlcnR5VHlwZUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICBwcm9wZXJ0eVR5cGVJZCBJbnQ/Cn0KCm1vZGVsIFBhcnRDbGFzcyB7CiAgaWQgSW50IEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgb3JkZXIgSW50PwogIG5hbWUgU3RyaW5nIEB1bmlxdWUKICBwYXJ0VHlwZXMgUGFydENsYXNzTWVtYmVyc2hpcFtdCn0KCm1vZGVsIFBhcnRDbGFzc01lbWJlcnNoaXAgewogIGlkIEludCBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIHBhcnRDbGFzcyBQYXJ0Q2xhc3M/IEByZWxhdGlvbihmaWVsZHM6IFtwYXJ0Q2xhc3NJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgcGFydENsYXNzSWQgSW50PwogIHBhcnRUeXBlIFBhcnRUeXBlPyBAcmVsYXRpb24oZmllbGRzOiBbcGFydFR5cGVJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgcGFydFR5cGVJZCBJbnQ/Cn0KCm1vZGVsIFBhcnRUeXBlIHsKICBpZCBJbnQgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBvcmRlciBJbnQ/CiAgbmFtZSBTdHJpbmcgQHVuaXF1ZQogIGRlc2NyaXB0aW9uIFN0cmluZz8KICBwcm9wZXJ0eVR5cGVzIFByb3BlcnR5R3JvdXBNZW1iZXJzaGlwW10KICBjbGFzc2VzIFBhcnRDbGFzc01lbWJlcnNoaXBbXQp9Cgptb2RlbCBQYXJ0R3JvdXAgewogIGlkIEludCBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIG5hbWUgU3RyaW5nPwogIHBhcnRzIFBhcnRHcm91cE1lbWJlcnNoaXBbXQp9Cgptb2RlbCBQYXJ0R3JvdXBNZW1iZXJzaGlwIHsKICBpZCBJbnQgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBwYXJ0IFBhcnQ/IEByZWxhdGlvbihmaWVsZHM6IFtwYXJ0SWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIHBhcnRJZCBJbnQ/CiAgZ3JvdXAgUGFydEdyb3VwPyBAcmVsYXRpb24oZmllbGRzOiBbZ3JvdXBJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgZ3JvdXBJZCBJbnQ/Cn0KCm1vZGVsIFBhcnQgewogIGlkIEludCBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIHR5cGUgU3RyaW5nPwogIG5hbWUgU3RyaW5nPwogIG5vdGVzIFN0cmluZz8KICB3ZWlnaHQgRGVjaW1hbD8KICB3ZWlnaHRVbml0IFN0cmluZz8KICBwcm9kdWN0TGluZSBQcm9kdWN0TGluZT8gQHJlbGF0aW9uKGZpZWxkczogW3Byb2R1Y3RMaW5lSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIHByb2R1Y3RMaW5lSWQgSW50PwogIHdoZWVsSHVicyBXaGVlbFtdIEByZWxhdGlvbigiaHViIikKICB3aGVlbFJpbXMgV2hlZWxbXSBAcmVsYXRpb24oInJpbSIpCiAgd2hlZWxTcG9rZXMgV2hlZWxTcG9rZVtdIEByZWxhdGlvbigic3Bva2UiKQogIHByb3BlcnRpZXMgUHJvcGVydHlbXQogIGNsYWltcyBDbGFpbVtdCiAgZ3JvdXBzIFBhcnRHcm91cE1lbWJlcnNoaXBbXQogIGJ1aWxkcyBCdWlsZFBhcnRbXQp9Cgptb2RlbCBQcm9wZXJ0eSB7CiAgaWQgSW50IEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgcGFydCBQYXJ0PyBAcmVsYXRpb24oZmllbGRzOiBbaXRlbUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICBpdGVtSWQgSW50PyBAdW5pcXVlCiAgdmFsdWUgU3RyaW5nPwogIHZhbHVlRGF0YU1ldGhvZCBTdHJpbmc/CiAgcHJvcGVydHlUeXBlIFByb3BlcnR5VHlwZT8gQHJlbGF0aW9uKGZpZWxkczogW3Byb3BlcnR5VHlwZUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICBwcm9wZXJ0eVR5cGVJZCBJbnQ/Cn0KCm1vZGVsIFdoZWVsU3Bva2UgewogIGlkIEludCBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIHF1YW50aXR5IEludD8KICBsZW5ndGggRGVjaW1hbD8KICB0ZW5zaW9uQXBwbGllZCBEZWNpbWFsPwogIHRlbnNpb25Vbml0IFN0cmluZz8KICBwcmVwYXJhdGlvbiBTdHJpbmc/CiAgbm90ZXMgU3RyaW5nPwogIHNwb2tlIFBhcnQ/IEByZWxhdGlvbihuYW1lOiAic3Bva2UiLCBmaWVsZHM6IFtzcG9rZUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICBzcG9rZUlkIEludD8KICB3aGVlbCBXaGVlbD8gQHJlbGF0aW9uKG5hbWU6ICJ3aGVlbCIsIGZpZWxkczogW3doZWVsSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIHdoZWVsSWQgSW50Pwp9Cgptb2RlbCBXaGVlbCB7CiAgaWQgSW50IEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgbmFtZSBTdHJpbmc/CiAgbm90ZXMgU3RyaW5nPwogIGh1YiBQYXJ0PyBAcmVsYXRpb24obmFtZTogImh1YiIsIGZpZWxkczogW2h1YklkXSwgcmVmZXJlbmNlczogW2lkXSkKICBodWJJZCBJbnQ/CiAgcmltIFBhcnQ/IEByZWxhdGlvbihuYW1lOiAicmltIiwgZmllbGRzOiBbcmltSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIHJpbUlkIEludD8KICBzcG9rZXMgV2hlZWxTcG9rZVtdIEByZWxhdGlvbigid2hlZWwiKQp9Cgptb2RlbCBCdWlsZFBhcnQgewogIGlkIEludCBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIGJ1aWxkIEJ1aWxkPyBAcmVsYXRpb24oZmllbGRzOiBbYnVpbGRJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgYnVpbGRJZCBJbnQ/CiAgcGFydCBQYXJ0PyBAcmVsYXRpb24oZmllbGRzOiBbcGFydElkXSwgcmVmZXJlbmNlczogW2lkXSkKICBwYXJ0SWQgSW50Pwp9Cgptb2RlbCBCdWlsZCB7CiAgaWQgSW50IEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgbmFtZSBTdHJpbmc/CiAgc3RhdHVzIFN0cmluZz8KICBub3RlcyBTdHJpbmc/CiAgcGFydHMgQnVpbGRQYXJ0W10KfQ==",
  "inlineSchemaHash": "6d6736d9324a15c2116f20e81f4211f08bc40897bba516f1494d5985665f7244"
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "client",
    "",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":\"Cyclist\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nameLast\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nameFirst\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"provider\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roles\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"registered\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastLogIn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"claims\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Claim\",\"relationName\":\"ClaimToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Claim\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"claimType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"acquired\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"condition\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"owner\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"ClaimToUser\",\"relationFromFields\":[\"ownerId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ownerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"part\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Part\",\"relationName\":\"ClaimToPart\",\"relationFromFields\":[\"partId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"partId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Brand\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nameShort\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nameAbbreviation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"webAddress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"labelMemberships\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BrandMember\",\"relationName\":\"BrandToBrandMember\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"BrandMember\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productLine\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductLine\",\"relationName\":\"BrandMemberToProductLine\",\"relationFromFields\":[\"productLineId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productLineId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brand\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brand\",\"relationName\":\"BrandToBrandMember\",\"relationFromFields\":[\"brandId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brandId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProductLine\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nameShort\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nameAbbreviation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"webAddress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"labelMemberships\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BrandMember\",\"relationName\":\"BrandMemberToProductLine\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"items\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Part\",\"relationName\":\"PartToProductLine\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PropertyGroup\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"propertyTypes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PropertyGroupMembership\",\"relationName\":\"PropertyGroupToPropertyGroupMembership\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PropertyGroupMembership\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"partType\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PartType\",\"relationName\":\"PartTypeToPropertyGroupMembership\",\"relationFromFields\":[\"partTypeId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"partTypeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"propertyType\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PropertyType\",\"relationName\":\"PropertyGroupMembershipToPropertyType\",\"relationFromFields\":[\"propertyTypeId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"propertyTypeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"group\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PropertyGroup\",\"relationName\":\"PropertyGroupToPropertyGroupMembership\",\"relationFromFields\":[\"groupId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"groupId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PropertyType\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"valueDataType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"valueDataTypeModifier\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"variation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"groups\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PropertyGroupMembership\",\"relationName\":\"PropertyGroupMembershipToPropertyType\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"properties\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Property\",\"relationName\":\"PropertyToPropertyType\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lookupValues\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PropertyLookup\",\"relationName\":\"PropertyLookupToPropertyType\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PropertyLookup\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"propertyType\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PropertyType\",\"relationName\":\"PropertyLookupToPropertyType\",\"relationFromFields\":[\"propertyTypeId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"propertyTypeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PartClass\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"partTypes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PartClassMembership\",\"relationName\":\"PartClassToPartClassMembership\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PartClassMembership\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"partClass\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PartClass\",\"relationName\":\"PartClassToPartClassMembership\",\"relationFromFields\":[\"partClassId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"partClassId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"partType\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PartType\",\"relationName\":\"PartClassMembershipToPartType\",\"relationFromFields\":[\"partTypeId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"partTypeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PartType\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"propertyTypes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PropertyGroupMembership\",\"relationName\":\"PartTypeToPropertyGroupMembership\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"classes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PartClassMembership\",\"relationName\":\"PartClassMembershipToPartType\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PartGroup\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PartGroupMembership\",\"relationName\":\"PartGroupToPartGroupMembership\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PartGroupMembership\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"part\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Part\",\"relationName\":\"PartToPartGroupMembership\",\"relationFromFields\":[\"partId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"partId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"group\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PartGroup\",\"relationName\":\"PartGroupToPartGroupMembership\",\"relationFromFields\":[\"groupId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"groupId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Part\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"weight\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"weightUnit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productLine\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductLine\",\"relationName\":\"PartToProductLine\",\"relationFromFields\":[\"productLineId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productLineId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wheelHubs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Wheel\",\"relationName\":\"hub\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wheelRims\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Wheel\",\"relationName\":\"rim\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wheelSpokes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"WheelSpoke\",\"relationName\":\"spoke\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"properties\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Property\",\"relationName\":\"PartToProperty\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"claims\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Claim\",\"relationName\":\"ClaimToPart\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"groups\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PartGroupMembership\",\"relationName\":\"PartToPartGroupMembership\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"builds\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BuildPart\",\"relationName\":\"BuildPartToPart\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Property\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"part\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Part\",\"relationName\":\"PartToProperty\",\"relationFromFields\":[\"itemId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"itemId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"valueDataMethod\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"propertyType\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PropertyType\",\"relationName\":\"PropertyToPropertyType\",\"relationFromFields\":[\"propertyTypeId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"propertyTypeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"WheelSpoke\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quantity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"length\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tensionApplied\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tensionUnit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"preparation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"spoke\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Part\",\"relationName\":\"spoke\",\"relationFromFields\":[\"spokeId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"spokeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wheel\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Wheel\",\"relationName\":\"wheel\",\"relationFromFields\":[\"wheelId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wheelId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Wheel\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hub\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Part\",\"relationName\":\"hub\",\"relationFromFields\":[\"hubId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hubId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rim\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Part\",\"relationName\":\"rim\",\"relationFromFields\":[\"rimId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rimId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"spokes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"WheelSpoke\",\"relationName\":\"wheel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"BuildPart\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"build\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Build\",\"relationName\":\"BuildToBuildPart\",\"relationFromFields\":[\"buildId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"buildId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"part\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Part\",\"relationName\":\"BuildPartToPart\",\"relationFromFields\":[\"partId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"partId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Build\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BuildPart\",\"relationName\":\"BuildToBuildPart\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined


const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-darwin-arm64.dylib.node");
path.join(process.cwd(), "client/libquery_engine-darwin-arm64.dylib.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "client/schema.prisma")
