
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
  Serializable: 'Serializable'
});

exports.Prisma.CyclistScalarFieldEnum = {
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

exports.Prisma.OwnershipScalarFieldEnum = {
  id: 'id',
  acquired: 'acquired',
  condition: 'condition',
  notes: 'notes',
  ownerId: 'ownerId',
  bicycleId: 'bicycleId',
  wheelId: 'wheelId',
  wheelSetId: 'wheelSetId',
  partId: 'partId'
};

exports.Prisma.BicycleScalarFieldEnum = {
  id: 'id',
  notes: 'notes'
};

exports.Prisma.BicyclePartScalarFieldEnum = {
  id: 'id',
  quantity: 'quantity',
  notes: 'notes',
  bicycleId: 'bicycleId',
  partId: 'partId'
};

exports.Prisma.MakerScalarFieldEnum = {
  id: 'id',
  name: 'name',
  nameShort: 'nameShort',
  nameAbbreviation: 'nameAbbreviation',
  notes: 'notes',
  webAddress: 'webAddress',
  makesParts: 'makesParts',
  makesFrames: 'makesFrames',
  makesTools: 'makesTools',
  makesAccessories: 'makesAccessories',
  makesGear: 'makesGear',
  makesBikes: 'makesBikes',
  makesWheels: 'makesWheels'
};

exports.Prisma.PartScalarFieldEnum = {
  id: 'id',
  categories: 'categories',
  type: 'type',
  designationCode: 'designationCode',
  name: 'name',
  notes: 'notes',
  makerId: 'makerId'
};

exports.Prisma.HubScalarFieldEnum = {
  id: 'id',
  partId: 'partId',
  position: 'position',
  spokeCount: 'spokeCount',
  overLocknutDistance: 'overLocknutDistance',
  flangeDiameterLeft: 'flangeDiameterLeft',
  flangeDiameterRight: 'flangeDiameterRight',
  flangeLeftToCenter: 'flangeLeftToCenter',
  flangeRightToCenter: 'flangeRightToCenter',
  sflangeLeftToOLN: 'sflangeLeftToOLN',
  flangeRightToOLN: 'flangeRightToOLN',
  spokeHoleDiameter: 'spokeHoleDiameter'
};

exports.Prisma.RimScalarFieldEnum = {
  id: 'id',
  partId: 'partId',
  specEffectiveDiameter: 'specEffectiveDiameter',
  specWidthInternal: 'specWidthInternal',
  specWidthExternal: 'specWidthExternal',
  specSectionHeight: 'specSectionHeight'
};

exports.Prisma.CogsetScalarFieldEnum = {
  id: 'id',
  type: 'type',
  cogs: 'cogs',
  notes: 'notes',
  partId: 'partId'
};

exports.Prisma.WheelScalarFieldEnum = {
  id: 'id',
  name: 'name',
  notes: 'notes',
  hubId: 'hubId',
  rimId: 'rimId'
};

exports.Prisma.WheelsetScalarFieldEnum = {
  id: 'id',
  name: 'name',
  notes: 'notes',
  wheelFowardId: 'wheelFowardId',
  wheelBackId: 'wheelBackId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Cyclist: 'Cyclist',
  Ownership: 'Ownership',
  Bicycle: 'Bicycle',
  BicyclePart: 'BicyclePart',
  Maker: 'Maker',
  Part: 'Part',
  Hub: 'Hub',
  Rim: 'Rim',
  Cogset: 'Cogset',
  Wheel: 'Wheel',
  Wheelset: 'Wheelset'
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
