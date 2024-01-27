
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


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

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

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
  isPrimary: 'isPrimary',
  propertyTypeId: 'propertyTypeId',
  propertyGroupId: 'propertyGroupId'
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

exports.Prisma.PropertyTypeMembershipScalarFieldEnum = {
  id: 'id',
  propertyTypeId: 'propertyTypeId',
  partTypeId: 'partTypeId'
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
  isPrimary: 'isPrimary',
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
  partGroupId: 'partGroupId'
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
  PropertyTypeMembership: 'PropertyTypeMembership',
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
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
