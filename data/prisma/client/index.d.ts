
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Cyclist
 * 
 */
export type Cyclist = $Result.DefaultSelection<Prisma.$CyclistPayload>
/**
 * Model Ownership
 * 
 */
export type Ownership = $Result.DefaultSelection<Prisma.$OwnershipPayload>
/**
 * Model Bicycle
 * 
 */
export type Bicycle = $Result.DefaultSelection<Prisma.$BicyclePayload>
/**
 * Model BicyclePart
 * 
 */
export type BicyclePart = $Result.DefaultSelection<Prisma.$BicyclePartPayload>
/**
 * Model Maker
 * 
 */
export type Maker = $Result.DefaultSelection<Prisma.$MakerPayload>
/**
 * Model Part
 * 
 */
export type Part = $Result.DefaultSelection<Prisma.$PartPayload>
/**
 * Model Hub
 * 
 */
export type Hub = $Result.DefaultSelection<Prisma.$HubPayload>
/**
 * Model Rim
 * 
 */
export type Rim = $Result.DefaultSelection<Prisma.$RimPayload>
/**
 * Model Cogset
 * 
 */
export type Cogset = $Result.DefaultSelection<Prisma.$CogsetPayload>
/**
 * Model Wheel
 * 
 */
export type Wheel = $Result.DefaultSelection<Prisma.$WheelPayload>
/**
 * Model Wheelset
 * 
 */
export type Wheelset = $Result.DefaultSelection<Prisma.$WheelsetPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cyclists
 * const cyclists = await prisma.cyclist.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Cyclists
   * const cyclists = await prisma.cyclist.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.cyclist`: Exposes CRUD operations for the **Cyclist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cyclists
    * const cyclists = await prisma.cyclist.findMany()
    * ```
    */
  get cyclist(): Prisma.CyclistDelegate<ExtArgs>;

  /**
   * `prisma.ownership`: Exposes CRUD operations for the **Ownership** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ownerships
    * const ownerships = await prisma.ownership.findMany()
    * ```
    */
  get ownership(): Prisma.OwnershipDelegate<ExtArgs>;

  /**
   * `prisma.bicycle`: Exposes CRUD operations for the **Bicycle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bicycles
    * const bicycles = await prisma.bicycle.findMany()
    * ```
    */
  get bicycle(): Prisma.BicycleDelegate<ExtArgs>;

  /**
   * `prisma.bicyclePart`: Exposes CRUD operations for the **BicyclePart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BicycleParts
    * const bicycleParts = await prisma.bicyclePart.findMany()
    * ```
    */
  get bicyclePart(): Prisma.BicyclePartDelegate<ExtArgs>;

  /**
   * `prisma.maker`: Exposes CRUD operations for the **Maker** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Makers
    * const makers = await prisma.maker.findMany()
    * ```
    */
  get maker(): Prisma.MakerDelegate<ExtArgs>;

  /**
   * `prisma.part`: Exposes CRUD operations for the **Part** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parts
    * const parts = await prisma.part.findMany()
    * ```
    */
  get part(): Prisma.PartDelegate<ExtArgs>;

  /**
   * `prisma.hub`: Exposes CRUD operations for the **Hub** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hubs
    * const hubs = await prisma.hub.findMany()
    * ```
    */
  get hub(): Prisma.HubDelegate<ExtArgs>;

  /**
   * `prisma.rim`: Exposes CRUD operations for the **Rim** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rims
    * const rims = await prisma.rim.findMany()
    * ```
    */
  get rim(): Prisma.RimDelegate<ExtArgs>;

  /**
   * `prisma.cogset`: Exposes CRUD operations for the **Cogset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cogsets
    * const cogsets = await prisma.cogset.findMany()
    * ```
    */
  get cogset(): Prisma.CogsetDelegate<ExtArgs>;

  /**
   * `prisma.wheel`: Exposes CRUD operations for the **Wheel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wheels
    * const wheels = await prisma.wheel.findMany()
    * ```
    */
  get wheel(): Prisma.WheelDelegate<ExtArgs>;

  /**
   * `prisma.wheelset`: Exposes CRUD operations for the **Wheelset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wheelsets
    * const wheelsets = await prisma.wheelset.findMany()
    * ```
    */
  get wheelset(): Prisma.WheelsetDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.7.1
   * Query Engine version: 0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'cyclist' | 'ownership' | 'bicycle' | 'bicyclePart' | 'maker' | 'part' | 'hub' | 'rim' | 'cogset' | 'wheel' | 'wheelset'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Cyclist: {
        payload: Prisma.$CyclistPayload<ExtArgs>
        fields: Prisma.CyclistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CyclistFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CyclistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CyclistFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CyclistPayload>
          }
          findFirst: {
            args: Prisma.CyclistFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CyclistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CyclistFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CyclistPayload>
          }
          findMany: {
            args: Prisma.CyclistFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CyclistPayload>[]
          }
          create: {
            args: Prisma.CyclistCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CyclistPayload>
          }
          delete: {
            args: Prisma.CyclistDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CyclistPayload>
          }
          update: {
            args: Prisma.CyclistUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CyclistPayload>
          }
          deleteMany: {
            args: Prisma.CyclistDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CyclistUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CyclistUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CyclistPayload>
          }
          aggregate: {
            args: Prisma.CyclistAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCyclist>
          }
          groupBy: {
            args: Prisma.CyclistGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CyclistGroupByOutputType>[]
          }
          count: {
            args: Prisma.CyclistCountArgs<ExtArgs>,
            result: $Utils.Optional<CyclistCountAggregateOutputType> | number
          }
        }
      }
      Ownership: {
        payload: Prisma.$OwnershipPayload<ExtArgs>
        fields: Prisma.OwnershipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OwnershipFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OwnershipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OwnershipFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OwnershipPayload>
          }
          findFirst: {
            args: Prisma.OwnershipFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OwnershipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OwnershipFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OwnershipPayload>
          }
          findMany: {
            args: Prisma.OwnershipFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OwnershipPayload>[]
          }
          create: {
            args: Prisma.OwnershipCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OwnershipPayload>
          }
          delete: {
            args: Prisma.OwnershipDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OwnershipPayload>
          }
          update: {
            args: Prisma.OwnershipUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OwnershipPayload>
          }
          deleteMany: {
            args: Prisma.OwnershipDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OwnershipUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OwnershipUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OwnershipPayload>
          }
          aggregate: {
            args: Prisma.OwnershipAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOwnership>
          }
          groupBy: {
            args: Prisma.OwnershipGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OwnershipGroupByOutputType>[]
          }
          count: {
            args: Prisma.OwnershipCountArgs<ExtArgs>,
            result: $Utils.Optional<OwnershipCountAggregateOutputType> | number
          }
        }
      }
      Bicycle: {
        payload: Prisma.$BicyclePayload<ExtArgs>
        fields: Prisma.BicycleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BicycleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BicyclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BicycleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BicyclePayload>
          }
          findFirst: {
            args: Prisma.BicycleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BicyclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BicycleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BicyclePayload>
          }
          findMany: {
            args: Prisma.BicycleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BicyclePayload>[]
          }
          create: {
            args: Prisma.BicycleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BicyclePayload>
          }
          delete: {
            args: Prisma.BicycleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BicyclePayload>
          }
          update: {
            args: Prisma.BicycleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BicyclePayload>
          }
          deleteMany: {
            args: Prisma.BicycleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BicycleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BicycleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BicyclePayload>
          }
          aggregate: {
            args: Prisma.BicycleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBicycle>
          }
          groupBy: {
            args: Prisma.BicycleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BicycleGroupByOutputType>[]
          }
          count: {
            args: Prisma.BicycleCountArgs<ExtArgs>,
            result: $Utils.Optional<BicycleCountAggregateOutputType> | number
          }
        }
      }
      BicyclePart: {
        payload: Prisma.$BicyclePartPayload<ExtArgs>
        fields: Prisma.BicyclePartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BicyclePartFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BicyclePartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BicyclePartFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BicyclePartPayload>
          }
          findFirst: {
            args: Prisma.BicyclePartFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BicyclePartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BicyclePartFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BicyclePartPayload>
          }
          findMany: {
            args: Prisma.BicyclePartFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BicyclePartPayload>[]
          }
          create: {
            args: Prisma.BicyclePartCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BicyclePartPayload>
          }
          delete: {
            args: Prisma.BicyclePartDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BicyclePartPayload>
          }
          update: {
            args: Prisma.BicyclePartUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BicyclePartPayload>
          }
          deleteMany: {
            args: Prisma.BicyclePartDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BicyclePartUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BicyclePartUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BicyclePartPayload>
          }
          aggregate: {
            args: Prisma.BicyclePartAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBicyclePart>
          }
          groupBy: {
            args: Prisma.BicyclePartGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BicyclePartGroupByOutputType>[]
          }
          count: {
            args: Prisma.BicyclePartCountArgs<ExtArgs>,
            result: $Utils.Optional<BicyclePartCountAggregateOutputType> | number
          }
        }
      }
      Maker: {
        payload: Prisma.$MakerPayload<ExtArgs>
        fields: Prisma.MakerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MakerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MakerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MakerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MakerPayload>
          }
          findFirst: {
            args: Prisma.MakerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MakerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MakerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MakerPayload>
          }
          findMany: {
            args: Prisma.MakerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MakerPayload>[]
          }
          create: {
            args: Prisma.MakerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MakerPayload>
          }
          delete: {
            args: Prisma.MakerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MakerPayload>
          }
          update: {
            args: Prisma.MakerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MakerPayload>
          }
          deleteMany: {
            args: Prisma.MakerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MakerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MakerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MakerPayload>
          }
          aggregate: {
            args: Prisma.MakerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMaker>
          }
          groupBy: {
            args: Prisma.MakerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MakerGroupByOutputType>[]
          }
          count: {
            args: Prisma.MakerCountArgs<ExtArgs>,
            result: $Utils.Optional<MakerCountAggregateOutputType> | number
          }
        }
      }
      Part: {
        payload: Prisma.$PartPayload<ExtArgs>
        fields: Prisma.PartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          findFirst: {
            args: Prisma.PartFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          findMany: {
            args: Prisma.PartFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PartPayload>[]
          }
          create: {
            args: Prisma.PartCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          delete: {
            args: Prisma.PartDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          update: {
            args: Prisma.PartUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          deleteMany: {
            args: Prisma.PartDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PartUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PartUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          aggregate: {
            args: Prisma.PartAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePart>
          }
          groupBy: {
            args: Prisma.PartGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PartGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartCountArgs<ExtArgs>,
            result: $Utils.Optional<PartCountAggregateOutputType> | number
          }
        }
      }
      Hub: {
        payload: Prisma.$HubPayload<ExtArgs>
        fields: Prisma.HubFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HubFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HubPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HubFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HubPayload>
          }
          findFirst: {
            args: Prisma.HubFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HubPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HubFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HubPayload>
          }
          findMany: {
            args: Prisma.HubFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HubPayload>[]
          }
          create: {
            args: Prisma.HubCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HubPayload>
          }
          delete: {
            args: Prisma.HubDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HubPayload>
          }
          update: {
            args: Prisma.HubUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HubPayload>
          }
          deleteMany: {
            args: Prisma.HubDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.HubUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.HubUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HubPayload>
          }
          aggregate: {
            args: Prisma.HubAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateHub>
          }
          groupBy: {
            args: Prisma.HubGroupByArgs<ExtArgs>,
            result: $Utils.Optional<HubGroupByOutputType>[]
          }
          count: {
            args: Prisma.HubCountArgs<ExtArgs>,
            result: $Utils.Optional<HubCountAggregateOutputType> | number
          }
        }
      }
      Rim: {
        payload: Prisma.$RimPayload<ExtArgs>
        fields: Prisma.RimFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RimFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RimPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RimFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RimPayload>
          }
          findFirst: {
            args: Prisma.RimFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RimPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RimFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RimPayload>
          }
          findMany: {
            args: Prisma.RimFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RimPayload>[]
          }
          create: {
            args: Prisma.RimCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RimPayload>
          }
          delete: {
            args: Prisma.RimDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RimPayload>
          }
          update: {
            args: Prisma.RimUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RimPayload>
          }
          deleteMany: {
            args: Prisma.RimDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RimUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RimUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RimPayload>
          }
          aggregate: {
            args: Prisma.RimAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRim>
          }
          groupBy: {
            args: Prisma.RimGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RimGroupByOutputType>[]
          }
          count: {
            args: Prisma.RimCountArgs<ExtArgs>,
            result: $Utils.Optional<RimCountAggregateOutputType> | number
          }
        }
      }
      Cogset: {
        payload: Prisma.$CogsetPayload<ExtArgs>
        fields: Prisma.CogsetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CogsetFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CogsetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CogsetFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CogsetPayload>
          }
          findFirst: {
            args: Prisma.CogsetFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CogsetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CogsetFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CogsetPayload>
          }
          findMany: {
            args: Prisma.CogsetFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CogsetPayload>[]
          }
          create: {
            args: Prisma.CogsetCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CogsetPayload>
          }
          delete: {
            args: Prisma.CogsetDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CogsetPayload>
          }
          update: {
            args: Prisma.CogsetUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CogsetPayload>
          }
          deleteMany: {
            args: Prisma.CogsetDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CogsetUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CogsetUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CogsetPayload>
          }
          aggregate: {
            args: Prisma.CogsetAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCogset>
          }
          groupBy: {
            args: Prisma.CogsetGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CogsetGroupByOutputType>[]
          }
          count: {
            args: Prisma.CogsetCountArgs<ExtArgs>,
            result: $Utils.Optional<CogsetCountAggregateOutputType> | number
          }
        }
      }
      Wheel: {
        payload: Prisma.$WheelPayload<ExtArgs>
        fields: Prisma.WheelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WheelFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WheelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WheelFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WheelPayload>
          }
          findFirst: {
            args: Prisma.WheelFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WheelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WheelFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WheelPayload>
          }
          findMany: {
            args: Prisma.WheelFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WheelPayload>[]
          }
          create: {
            args: Prisma.WheelCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WheelPayload>
          }
          delete: {
            args: Prisma.WheelDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WheelPayload>
          }
          update: {
            args: Prisma.WheelUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WheelPayload>
          }
          deleteMany: {
            args: Prisma.WheelDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.WheelUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.WheelUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WheelPayload>
          }
          aggregate: {
            args: Prisma.WheelAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWheel>
          }
          groupBy: {
            args: Prisma.WheelGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WheelGroupByOutputType>[]
          }
          count: {
            args: Prisma.WheelCountArgs<ExtArgs>,
            result: $Utils.Optional<WheelCountAggregateOutputType> | number
          }
        }
      }
      Wheelset: {
        payload: Prisma.$WheelsetPayload<ExtArgs>
        fields: Prisma.WheelsetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WheelsetFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WheelsetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WheelsetFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WheelsetPayload>
          }
          findFirst: {
            args: Prisma.WheelsetFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WheelsetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WheelsetFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WheelsetPayload>
          }
          findMany: {
            args: Prisma.WheelsetFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WheelsetPayload>[]
          }
          create: {
            args: Prisma.WheelsetCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WheelsetPayload>
          }
          delete: {
            args: Prisma.WheelsetDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WheelsetPayload>
          }
          update: {
            args: Prisma.WheelsetUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WheelsetPayload>
          }
          deleteMany: {
            args: Prisma.WheelsetDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.WheelsetUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.WheelsetUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WheelsetPayload>
          }
          aggregate: {
            args: Prisma.WheelsetAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWheelset>
          }
          groupBy: {
            args: Prisma.WheelsetGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WheelsetGroupByOutputType>[]
          }
          count: {
            args: Prisma.WheelsetCountArgs<ExtArgs>,
            result: $Utils.Optional<WheelsetCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CyclistCountOutputType
   */

  export type CyclistCountOutputType = {
    owns: number
  }

  export type CyclistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owns?: boolean | CyclistCountOutputTypeCountOwnsArgs
  }

  // Custom InputTypes

  /**
   * CyclistCountOutputType without action
   */
  export type CyclistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CyclistCountOutputType
     */
    select?: CyclistCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CyclistCountOutputType without action
   */
  export type CyclistCountOutputTypeCountOwnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OwnershipWhereInput
  }



  /**
   * Count Type BicycleCountOutputType
   */

  export type BicycleCountOutputType = {
    parts: number
    owners: number
  }

  export type BicycleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parts?: boolean | BicycleCountOutputTypeCountPartsArgs
    owners?: boolean | BicycleCountOutputTypeCountOwnersArgs
  }

  // Custom InputTypes

  /**
   * BicycleCountOutputType without action
   */
  export type BicycleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BicycleCountOutputType
     */
    select?: BicycleCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * BicycleCountOutputType without action
   */
  export type BicycleCountOutputTypeCountPartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BicyclePartWhereInput
  }


  /**
   * BicycleCountOutputType without action
   */
  export type BicycleCountOutputTypeCountOwnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OwnershipWhereInput
  }



  /**
   * Count Type MakerCountOutputType
   */

  export type MakerCountOutputType = {
    parts: number
  }

  export type MakerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parts?: boolean | MakerCountOutputTypeCountPartsArgs
  }

  // Custom InputTypes

  /**
   * MakerCountOutputType without action
   */
  export type MakerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MakerCountOutputType
     */
    select?: MakerCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * MakerCountOutputType without action
   */
  export type MakerCountOutputTypeCountPartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartWhereInput
  }



  /**
   * Count Type PartCountOutputType
   */

  export type PartCountOutputType = {
    owners: number
    bicycles: number
  }

  export type PartCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owners?: boolean | PartCountOutputTypeCountOwnersArgs
    bicycles?: boolean | PartCountOutputTypeCountBicyclesArgs
  }

  // Custom InputTypes

  /**
   * PartCountOutputType without action
   */
  export type PartCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartCountOutputType
     */
    select?: PartCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PartCountOutputType without action
   */
  export type PartCountOutputTypeCountOwnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OwnershipWhereInput
  }


  /**
   * PartCountOutputType without action
   */
  export type PartCountOutputTypeCountBicyclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BicyclePartWhereInput
  }



  /**
   * Count Type HubCountOutputType
   */

  export type HubCountOutputType = {
    wheels: number
  }

  export type HubCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wheels?: boolean | HubCountOutputTypeCountWheelsArgs
  }

  // Custom InputTypes

  /**
   * HubCountOutputType without action
   */
  export type HubCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HubCountOutputType
     */
    select?: HubCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * HubCountOutputType without action
   */
  export type HubCountOutputTypeCountWheelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WheelWhereInput
  }



  /**
   * Count Type RimCountOutputType
   */

  export type RimCountOutputType = {
    wheels: number
  }

  export type RimCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wheels?: boolean | RimCountOutputTypeCountWheelsArgs
  }

  // Custom InputTypes

  /**
   * RimCountOutputType without action
   */
  export type RimCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RimCountOutputType
     */
    select?: RimCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * RimCountOutputType without action
   */
  export type RimCountOutputTypeCountWheelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WheelWhereInput
  }



  /**
   * Count Type WheelCountOutputType
   */

  export type WheelCountOutputType = {
    wheelsFoward: number
    wheelsBack: number
    owners: number
  }

  export type WheelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wheelsFoward?: boolean | WheelCountOutputTypeCountWheelsFowardArgs
    wheelsBack?: boolean | WheelCountOutputTypeCountWheelsBackArgs
    owners?: boolean | WheelCountOutputTypeCountOwnersArgs
  }

  // Custom InputTypes

  /**
   * WheelCountOutputType without action
   */
  export type WheelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WheelCountOutputType
     */
    select?: WheelCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * WheelCountOutputType without action
   */
  export type WheelCountOutputTypeCountWheelsFowardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WheelsetWhereInput
  }


  /**
   * WheelCountOutputType without action
   */
  export type WheelCountOutputTypeCountWheelsBackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WheelsetWhereInput
  }


  /**
   * WheelCountOutputType without action
   */
  export type WheelCountOutputTypeCountOwnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OwnershipWhereInput
  }



  /**
   * Count Type WheelsetCountOutputType
   */

  export type WheelsetCountOutputType = {
    owners: number
  }

  export type WheelsetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owners?: boolean | WheelsetCountOutputTypeCountOwnersArgs
  }

  // Custom InputTypes

  /**
   * WheelsetCountOutputType without action
   */
  export type WheelsetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WheelsetCountOutputType
     */
    select?: WheelsetCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * WheelsetCountOutputType without action
   */
  export type WheelsetCountOutputTypeCountOwnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OwnershipWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Cyclist
   */

  export type AggregateCyclist = {
    _count: CyclistCountAggregateOutputType | null
    _avg: CyclistAvgAggregateOutputType | null
    _sum: CyclistSumAggregateOutputType | null
    _min: CyclistMinAggregateOutputType | null
    _max: CyclistMaxAggregateOutputType | null
  }

  export type CyclistAvgAggregateOutputType = {
    id: number | null
  }

  export type CyclistSumAggregateOutputType = {
    id: number | null
  }

  export type CyclistMinAggregateOutputType = {
    id: number | null
    name: string | null
    nameLast: string | null
    nameFirst: string | null
    providerId: string | null
    provider: string | null
    roles: string | null
    registered: Date | null
    lastLogIn: Date | null
  }

  export type CyclistMaxAggregateOutputType = {
    id: number | null
    name: string | null
    nameLast: string | null
    nameFirst: string | null
    providerId: string | null
    provider: string | null
    roles: string | null
    registered: Date | null
    lastLogIn: Date | null
  }

  export type CyclistCountAggregateOutputType = {
    id: number
    name: number
    nameLast: number
    nameFirst: number
    providerId: number
    provider: number
    roles: number
    registered: number
    lastLogIn: number
    _all: number
  }


  export type CyclistAvgAggregateInputType = {
    id?: true
  }

  export type CyclistSumAggregateInputType = {
    id?: true
  }

  export type CyclistMinAggregateInputType = {
    id?: true
    name?: true
    nameLast?: true
    nameFirst?: true
    providerId?: true
    provider?: true
    roles?: true
    registered?: true
    lastLogIn?: true
  }

  export type CyclistMaxAggregateInputType = {
    id?: true
    name?: true
    nameLast?: true
    nameFirst?: true
    providerId?: true
    provider?: true
    roles?: true
    registered?: true
    lastLogIn?: true
  }

  export type CyclistCountAggregateInputType = {
    id?: true
    name?: true
    nameLast?: true
    nameFirst?: true
    providerId?: true
    provider?: true
    roles?: true
    registered?: true
    lastLogIn?: true
    _all?: true
  }

  export type CyclistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cyclist to aggregate.
     */
    where?: CyclistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cyclists to fetch.
     */
    orderBy?: CyclistOrderByWithRelationInput | CyclistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CyclistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cyclists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cyclists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cyclists
    **/
    _count?: true | CyclistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CyclistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CyclistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CyclistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CyclistMaxAggregateInputType
  }

  export type GetCyclistAggregateType<T extends CyclistAggregateArgs> = {
        [P in keyof T & keyof AggregateCyclist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCyclist[P]>
      : GetScalarType<T[P], AggregateCyclist[P]>
  }




  export type CyclistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CyclistWhereInput
    orderBy?: CyclistOrderByWithAggregationInput | CyclistOrderByWithAggregationInput[]
    by: CyclistScalarFieldEnum[] | CyclistScalarFieldEnum
    having?: CyclistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CyclistCountAggregateInputType | true
    _avg?: CyclistAvgAggregateInputType
    _sum?: CyclistSumAggregateInputType
    _min?: CyclistMinAggregateInputType
    _max?: CyclistMaxAggregateInputType
  }

  export type CyclistGroupByOutputType = {
    id: number
    name: string | null
    nameLast: string | null
    nameFirst: string | null
    providerId: string
    provider: string | null
    roles: string | null
    registered: Date | null
    lastLogIn: Date | null
    _count: CyclistCountAggregateOutputType | null
    _avg: CyclistAvgAggregateOutputType | null
    _sum: CyclistSumAggregateOutputType | null
    _min: CyclistMinAggregateOutputType | null
    _max: CyclistMaxAggregateOutputType | null
  }

  type GetCyclistGroupByPayload<T extends CyclistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CyclistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CyclistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CyclistGroupByOutputType[P]>
            : GetScalarType<T[P], CyclistGroupByOutputType[P]>
        }
      >
    >


  export type CyclistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nameLast?: boolean
    nameFirst?: boolean
    providerId?: boolean
    provider?: boolean
    roles?: boolean
    registered?: boolean
    lastLogIn?: boolean
    owns?: boolean | Cyclist$ownsArgs<ExtArgs>
    _count?: boolean | CyclistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cyclist"]>

  export type CyclistSelectScalar = {
    id?: boolean
    name?: boolean
    nameLast?: boolean
    nameFirst?: boolean
    providerId?: boolean
    provider?: boolean
    roles?: boolean
    registered?: boolean
    lastLogIn?: boolean
  }

  export type CyclistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owns?: boolean | Cyclist$ownsArgs<ExtArgs>
    _count?: boolean | CyclistCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CyclistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cyclist"
    objects: {
      owns: Prisma.$OwnershipPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      nameLast: string | null
      nameFirst: string | null
      providerId: string
      provider: string | null
      roles: string | null
      registered: Date | null
      lastLogIn: Date | null
    }, ExtArgs["result"]["cyclist"]>
    composites: {}
  }


  type CyclistGetPayload<S extends boolean | null | undefined | CyclistDefaultArgs> = $Result.GetResult<Prisma.$CyclistPayload, S>

  type CyclistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CyclistFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CyclistCountAggregateInputType | true
    }

  export interface CyclistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cyclist'], meta: { name: 'Cyclist' } }
    /**
     * Find zero or one Cyclist that matches the filter.
     * @param {CyclistFindUniqueArgs} args - Arguments to find a Cyclist
     * @example
     * // Get one Cyclist
     * const cyclist = await prisma.cyclist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CyclistFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CyclistFindUniqueArgs<ExtArgs>>
    ): Prisma__CyclistClient<$Result.GetResult<Prisma.$CyclistPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Cyclist that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CyclistFindUniqueOrThrowArgs} args - Arguments to find a Cyclist
     * @example
     * // Get one Cyclist
     * const cyclist = await prisma.cyclist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CyclistFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CyclistFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CyclistClient<$Result.GetResult<Prisma.$CyclistPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Cyclist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CyclistFindFirstArgs} args - Arguments to find a Cyclist
     * @example
     * // Get one Cyclist
     * const cyclist = await prisma.cyclist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CyclistFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CyclistFindFirstArgs<ExtArgs>>
    ): Prisma__CyclistClient<$Result.GetResult<Prisma.$CyclistPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Cyclist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CyclistFindFirstOrThrowArgs} args - Arguments to find a Cyclist
     * @example
     * // Get one Cyclist
     * const cyclist = await prisma.cyclist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CyclistFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CyclistFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CyclistClient<$Result.GetResult<Prisma.$CyclistPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Cyclists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CyclistFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cyclists
     * const cyclists = await prisma.cyclist.findMany()
     * 
     * // Get first 10 Cyclists
     * const cyclists = await prisma.cyclist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cyclistWithIdOnly = await prisma.cyclist.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CyclistFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CyclistFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CyclistPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Cyclist.
     * @param {CyclistCreateArgs} args - Arguments to create a Cyclist.
     * @example
     * // Create one Cyclist
     * const Cyclist = await prisma.cyclist.create({
     *   data: {
     *     // ... data to create a Cyclist
     *   }
     * })
     * 
    **/
    create<T extends CyclistCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CyclistCreateArgs<ExtArgs>>
    ): Prisma__CyclistClient<$Result.GetResult<Prisma.$CyclistPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Cyclist.
     * @param {CyclistDeleteArgs} args - Arguments to delete one Cyclist.
     * @example
     * // Delete one Cyclist
     * const Cyclist = await prisma.cyclist.delete({
     *   where: {
     *     // ... filter to delete one Cyclist
     *   }
     * })
     * 
    **/
    delete<T extends CyclistDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CyclistDeleteArgs<ExtArgs>>
    ): Prisma__CyclistClient<$Result.GetResult<Prisma.$CyclistPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Cyclist.
     * @param {CyclistUpdateArgs} args - Arguments to update one Cyclist.
     * @example
     * // Update one Cyclist
     * const cyclist = await prisma.cyclist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CyclistUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CyclistUpdateArgs<ExtArgs>>
    ): Prisma__CyclistClient<$Result.GetResult<Prisma.$CyclistPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Cyclists.
     * @param {CyclistDeleteManyArgs} args - Arguments to filter Cyclists to delete.
     * @example
     * // Delete a few Cyclists
     * const { count } = await prisma.cyclist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CyclistDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CyclistDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cyclists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CyclistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cyclists
     * const cyclist = await prisma.cyclist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CyclistUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CyclistUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cyclist.
     * @param {CyclistUpsertArgs} args - Arguments to update or create a Cyclist.
     * @example
     * // Update or create a Cyclist
     * const cyclist = await prisma.cyclist.upsert({
     *   create: {
     *     // ... data to create a Cyclist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cyclist we want to update
     *   }
     * })
    **/
    upsert<T extends CyclistUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CyclistUpsertArgs<ExtArgs>>
    ): Prisma__CyclistClient<$Result.GetResult<Prisma.$CyclistPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Cyclists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CyclistCountArgs} args - Arguments to filter Cyclists to count.
     * @example
     * // Count the number of Cyclists
     * const count = await prisma.cyclist.count({
     *   where: {
     *     // ... the filter for the Cyclists we want to count
     *   }
     * })
    **/
    count<T extends CyclistCountArgs>(
      args?: Subset<T, CyclistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CyclistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cyclist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CyclistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CyclistAggregateArgs>(args: Subset<T, CyclistAggregateArgs>): Prisma.PrismaPromise<GetCyclistAggregateType<T>>

    /**
     * Group by Cyclist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CyclistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CyclistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CyclistGroupByArgs['orderBy'] }
        : { orderBy?: CyclistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CyclistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCyclistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cyclist model
   */
  readonly fields: CyclistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cyclist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CyclistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    owns<T extends Cyclist$ownsArgs<ExtArgs> = {}>(args?: Subset<T, Cyclist$ownsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnershipPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Cyclist model
   */ 
  interface CyclistFieldRefs {
    readonly id: FieldRef<"Cyclist", 'Int'>
    readonly name: FieldRef<"Cyclist", 'String'>
    readonly nameLast: FieldRef<"Cyclist", 'String'>
    readonly nameFirst: FieldRef<"Cyclist", 'String'>
    readonly providerId: FieldRef<"Cyclist", 'String'>
    readonly provider: FieldRef<"Cyclist", 'String'>
    readonly roles: FieldRef<"Cyclist", 'String'>
    readonly registered: FieldRef<"Cyclist", 'DateTime'>
    readonly lastLogIn: FieldRef<"Cyclist", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Cyclist findUnique
   */
  export type CyclistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cyclist
     */
    select?: CyclistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CyclistInclude<ExtArgs> | null
    /**
     * Filter, which Cyclist to fetch.
     */
    where: CyclistWhereUniqueInput
  }


  /**
   * Cyclist findUniqueOrThrow
   */
  export type CyclistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cyclist
     */
    select?: CyclistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CyclistInclude<ExtArgs> | null
    /**
     * Filter, which Cyclist to fetch.
     */
    where: CyclistWhereUniqueInput
  }


  /**
   * Cyclist findFirst
   */
  export type CyclistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cyclist
     */
    select?: CyclistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CyclistInclude<ExtArgs> | null
    /**
     * Filter, which Cyclist to fetch.
     */
    where?: CyclistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cyclists to fetch.
     */
    orderBy?: CyclistOrderByWithRelationInput | CyclistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cyclists.
     */
    cursor?: CyclistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cyclists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cyclists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cyclists.
     */
    distinct?: CyclistScalarFieldEnum | CyclistScalarFieldEnum[]
  }


  /**
   * Cyclist findFirstOrThrow
   */
  export type CyclistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cyclist
     */
    select?: CyclistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CyclistInclude<ExtArgs> | null
    /**
     * Filter, which Cyclist to fetch.
     */
    where?: CyclistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cyclists to fetch.
     */
    orderBy?: CyclistOrderByWithRelationInput | CyclistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cyclists.
     */
    cursor?: CyclistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cyclists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cyclists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cyclists.
     */
    distinct?: CyclistScalarFieldEnum | CyclistScalarFieldEnum[]
  }


  /**
   * Cyclist findMany
   */
  export type CyclistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cyclist
     */
    select?: CyclistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CyclistInclude<ExtArgs> | null
    /**
     * Filter, which Cyclists to fetch.
     */
    where?: CyclistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cyclists to fetch.
     */
    orderBy?: CyclistOrderByWithRelationInput | CyclistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cyclists.
     */
    cursor?: CyclistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cyclists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cyclists.
     */
    skip?: number
    distinct?: CyclistScalarFieldEnum | CyclistScalarFieldEnum[]
  }


  /**
   * Cyclist create
   */
  export type CyclistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cyclist
     */
    select?: CyclistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CyclistInclude<ExtArgs> | null
    /**
     * The data needed to create a Cyclist.
     */
    data: XOR<CyclistCreateInput, CyclistUncheckedCreateInput>
  }


  /**
   * Cyclist update
   */
  export type CyclistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cyclist
     */
    select?: CyclistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CyclistInclude<ExtArgs> | null
    /**
     * The data needed to update a Cyclist.
     */
    data: XOR<CyclistUpdateInput, CyclistUncheckedUpdateInput>
    /**
     * Choose, which Cyclist to update.
     */
    where: CyclistWhereUniqueInput
  }


  /**
   * Cyclist updateMany
   */
  export type CyclistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cyclists.
     */
    data: XOR<CyclistUpdateManyMutationInput, CyclistUncheckedUpdateManyInput>
    /**
     * Filter which Cyclists to update
     */
    where?: CyclistWhereInput
  }


  /**
   * Cyclist upsert
   */
  export type CyclistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cyclist
     */
    select?: CyclistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CyclistInclude<ExtArgs> | null
    /**
     * The filter to search for the Cyclist to update in case it exists.
     */
    where: CyclistWhereUniqueInput
    /**
     * In case the Cyclist found by the `where` argument doesn't exist, create a new Cyclist with this data.
     */
    create: XOR<CyclistCreateInput, CyclistUncheckedCreateInput>
    /**
     * In case the Cyclist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CyclistUpdateInput, CyclistUncheckedUpdateInput>
  }


  /**
   * Cyclist delete
   */
  export type CyclistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cyclist
     */
    select?: CyclistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CyclistInclude<ExtArgs> | null
    /**
     * Filter which Cyclist to delete.
     */
    where: CyclistWhereUniqueInput
  }


  /**
   * Cyclist deleteMany
   */
  export type CyclistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cyclists to delete
     */
    where?: CyclistWhereInput
  }


  /**
   * Cyclist.owns
   */
  export type Cyclist$ownsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ownership
     */
    select?: OwnershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OwnershipInclude<ExtArgs> | null
    where?: OwnershipWhereInput
    orderBy?: OwnershipOrderByWithRelationInput | OwnershipOrderByWithRelationInput[]
    cursor?: OwnershipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OwnershipScalarFieldEnum | OwnershipScalarFieldEnum[]
  }


  /**
   * Cyclist without action
   */
  export type CyclistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cyclist
     */
    select?: CyclistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CyclistInclude<ExtArgs> | null
  }



  /**
   * Model Ownership
   */

  export type AggregateOwnership = {
    _count: OwnershipCountAggregateOutputType | null
    _avg: OwnershipAvgAggregateOutputType | null
    _sum: OwnershipSumAggregateOutputType | null
    _min: OwnershipMinAggregateOutputType | null
    _max: OwnershipMaxAggregateOutputType | null
  }

  export type OwnershipAvgAggregateOutputType = {
    id: number | null
    ownerId: number | null
    bicycleId: number | null
    wheelId: number | null
    wheelSetId: number | null
    partId: number | null
  }

  export type OwnershipSumAggregateOutputType = {
    id: number | null
    ownerId: number | null
    bicycleId: number | null
    wheelId: number | null
    wheelSetId: number | null
    partId: number | null
  }

  export type OwnershipMinAggregateOutputType = {
    id: number | null
    acquired: Date | null
    condition: string | null
    notes: string | null
    ownerId: number | null
    bicycleId: number | null
    wheelId: number | null
    wheelSetId: number | null
    partId: number | null
  }

  export type OwnershipMaxAggregateOutputType = {
    id: number | null
    acquired: Date | null
    condition: string | null
    notes: string | null
    ownerId: number | null
    bicycleId: number | null
    wheelId: number | null
    wheelSetId: number | null
    partId: number | null
  }

  export type OwnershipCountAggregateOutputType = {
    id: number
    acquired: number
    condition: number
    notes: number
    ownerId: number
    bicycleId: number
    wheelId: number
    wheelSetId: number
    partId: number
    _all: number
  }


  export type OwnershipAvgAggregateInputType = {
    id?: true
    ownerId?: true
    bicycleId?: true
    wheelId?: true
    wheelSetId?: true
    partId?: true
  }

  export type OwnershipSumAggregateInputType = {
    id?: true
    ownerId?: true
    bicycleId?: true
    wheelId?: true
    wheelSetId?: true
    partId?: true
  }

  export type OwnershipMinAggregateInputType = {
    id?: true
    acquired?: true
    condition?: true
    notes?: true
    ownerId?: true
    bicycleId?: true
    wheelId?: true
    wheelSetId?: true
    partId?: true
  }

  export type OwnershipMaxAggregateInputType = {
    id?: true
    acquired?: true
    condition?: true
    notes?: true
    ownerId?: true
    bicycleId?: true
    wheelId?: true
    wheelSetId?: true
    partId?: true
  }

  export type OwnershipCountAggregateInputType = {
    id?: true
    acquired?: true
    condition?: true
    notes?: true
    ownerId?: true
    bicycleId?: true
    wheelId?: true
    wheelSetId?: true
    partId?: true
    _all?: true
  }

  export type OwnershipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ownership to aggregate.
     */
    where?: OwnershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ownerships to fetch.
     */
    orderBy?: OwnershipOrderByWithRelationInput | OwnershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OwnershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ownerships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ownerships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ownerships
    **/
    _count?: true | OwnershipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OwnershipAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OwnershipSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OwnershipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OwnershipMaxAggregateInputType
  }

  export type GetOwnershipAggregateType<T extends OwnershipAggregateArgs> = {
        [P in keyof T & keyof AggregateOwnership]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOwnership[P]>
      : GetScalarType<T[P], AggregateOwnership[P]>
  }




  export type OwnershipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OwnershipWhereInput
    orderBy?: OwnershipOrderByWithAggregationInput | OwnershipOrderByWithAggregationInput[]
    by: OwnershipScalarFieldEnum[] | OwnershipScalarFieldEnum
    having?: OwnershipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OwnershipCountAggregateInputType | true
    _avg?: OwnershipAvgAggregateInputType
    _sum?: OwnershipSumAggregateInputType
    _min?: OwnershipMinAggregateInputType
    _max?: OwnershipMaxAggregateInputType
  }

  export type OwnershipGroupByOutputType = {
    id: number
    acquired: Date | null
    condition: string | null
    notes: string | null
    ownerId: number | null
    bicycleId: number | null
    wheelId: number | null
    wheelSetId: number | null
    partId: number | null
    _count: OwnershipCountAggregateOutputType | null
    _avg: OwnershipAvgAggregateOutputType | null
    _sum: OwnershipSumAggregateOutputType | null
    _min: OwnershipMinAggregateOutputType | null
    _max: OwnershipMaxAggregateOutputType | null
  }

  type GetOwnershipGroupByPayload<T extends OwnershipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OwnershipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OwnershipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OwnershipGroupByOutputType[P]>
            : GetScalarType<T[P], OwnershipGroupByOutputType[P]>
        }
      >
    >


  export type OwnershipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    acquired?: boolean
    condition?: boolean
    notes?: boolean
    ownerId?: boolean
    bicycleId?: boolean
    wheelId?: boolean
    wheelSetId?: boolean
    partId?: boolean
    owner?: boolean | Ownership$ownerArgs<ExtArgs>
    bicycle?: boolean | Ownership$bicycleArgs<ExtArgs>
    wheel?: boolean | Ownership$wheelArgs<ExtArgs>
    wheelSet?: boolean | Ownership$wheelSetArgs<ExtArgs>
    part?: boolean | Ownership$partArgs<ExtArgs>
  }, ExtArgs["result"]["ownership"]>

  export type OwnershipSelectScalar = {
    id?: boolean
    acquired?: boolean
    condition?: boolean
    notes?: boolean
    ownerId?: boolean
    bicycleId?: boolean
    wheelId?: boolean
    wheelSetId?: boolean
    partId?: boolean
  }

  export type OwnershipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | Ownership$ownerArgs<ExtArgs>
    bicycle?: boolean | Ownership$bicycleArgs<ExtArgs>
    wheel?: boolean | Ownership$wheelArgs<ExtArgs>
    wheelSet?: boolean | Ownership$wheelSetArgs<ExtArgs>
    part?: boolean | Ownership$partArgs<ExtArgs>
  }


  export type $OwnershipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ownership"
    objects: {
      owner: Prisma.$CyclistPayload<ExtArgs> | null
      bicycle: Prisma.$BicyclePayload<ExtArgs> | null
      wheel: Prisma.$WheelPayload<ExtArgs> | null
      wheelSet: Prisma.$WheelsetPayload<ExtArgs> | null
      part: Prisma.$PartPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      acquired: Date | null
      condition: string | null
      notes: string | null
      ownerId: number | null
      bicycleId: number | null
      wheelId: number | null
      wheelSetId: number | null
      partId: number | null
    }, ExtArgs["result"]["ownership"]>
    composites: {}
  }


  type OwnershipGetPayload<S extends boolean | null | undefined | OwnershipDefaultArgs> = $Result.GetResult<Prisma.$OwnershipPayload, S>

  type OwnershipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OwnershipFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: OwnershipCountAggregateInputType | true
    }

  export interface OwnershipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ownership'], meta: { name: 'Ownership' } }
    /**
     * Find zero or one Ownership that matches the filter.
     * @param {OwnershipFindUniqueArgs} args - Arguments to find a Ownership
     * @example
     * // Get one Ownership
     * const ownership = await prisma.ownership.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OwnershipFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OwnershipFindUniqueArgs<ExtArgs>>
    ): Prisma__OwnershipClient<$Result.GetResult<Prisma.$OwnershipPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Ownership that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OwnershipFindUniqueOrThrowArgs} args - Arguments to find a Ownership
     * @example
     * // Get one Ownership
     * const ownership = await prisma.ownership.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OwnershipFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OwnershipFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OwnershipClient<$Result.GetResult<Prisma.$OwnershipPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Ownership that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnershipFindFirstArgs} args - Arguments to find a Ownership
     * @example
     * // Get one Ownership
     * const ownership = await prisma.ownership.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OwnershipFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OwnershipFindFirstArgs<ExtArgs>>
    ): Prisma__OwnershipClient<$Result.GetResult<Prisma.$OwnershipPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Ownership that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnershipFindFirstOrThrowArgs} args - Arguments to find a Ownership
     * @example
     * // Get one Ownership
     * const ownership = await prisma.ownership.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OwnershipFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OwnershipFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OwnershipClient<$Result.GetResult<Prisma.$OwnershipPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Ownerships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnershipFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ownerships
     * const ownerships = await prisma.ownership.findMany()
     * 
     * // Get first 10 Ownerships
     * const ownerships = await prisma.ownership.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ownershipWithIdOnly = await prisma.ownership.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OwnershipFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OwnershipFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnershipPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Ownership.
     * @param {OwnershipCreateArgs} args - Arguments to create a Ownership.
     * @example
     * // Create one Ownership
     * const Ownership = await prisma.ownership.create({
     *   data: {
     *     // ... data to create a Ownership
     *   }
     * })
     * 
    **/
    create<T extends OwnershipCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OwnershipCreateArgs<ExtArgs>>
    ): Prisma__OwnershipClient<$Result.GetResult<Prisma.$OwnershipPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Ownership.
     * @param {OwnershipDeleteArgs} args - Arguments to delete one Ownership.
     * @example
     * // Delete one Ownership
     * const Ownership = await prisma.ownership.delete({
     *   where: {
     *     // ... filter to delete one Ownership
     *   }
     * })
     * 
    **/
    delete<T extends OwnershipDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OwnershipDeleteArgs<ExtArgs>>
    ): Prisma__OwnershipClient<$Result.GetResult<Prisma.$OwnershipPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Ownership.
     * @param {OwnershipUpdateArgs} args - Arguments to update one Ownership.
     * @example
     * // Update one Ownership
     * const ownership = await prisma.ownership.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OwnershipUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OwnershipUpdateArgs<ExtArgs>>
    ): Prisma__OwnershipClient<$Result.GetResult<Prisma.$OwnershipPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Ownerships.
     * @param {OwnershipDeleteManyArgs} args - Arguments to filter Ownerships to delete.
     * @example
     * // Delete a few Ownerships
     * const { count } = await prisma.ownership.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OwnershipDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OwnershipDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ownerships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnershipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ownerships
     * const ownership = await prisma.ownership.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OwnershipUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OwnershipUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ownership.
     * @param {OwnershipUpsertArgs} args - Arguments to update or create a Ownership.
     * @example
     * // Update or create a Ownership
     * const ownership = await prisma.ownership.upsert({
     *   create: {
     *     // ... data to create a Ownership
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ownership we want to update
     *   }
     * })
    **/
    upsert<T extends OwnershipUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OwnershipUpsertArgs<ExtArgs>>
    ): Prisma__OwnershipClient<$Result.GetResult<Prisma.$OwnershipPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Ownerships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnershipCountArgs} args - Arguments to filter Ownerships to count.
     * @example
     * // Count the number of Ownerships
     * const count = await prisma.ownership.count({
     *   where: {
     *     // ... the filter for the Ownerships we want to count
     *   }
     * })
    **/
    count<T extends OwnershipCountArgs>(
      args?: Subset<T, OwnershipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OwnershipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ownership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnershipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OwnershipAggregateArgs>(args: Subset<T, OwnershipAggregateArgs>): Prisma.PrismaPromise<GetOwnershipAggregateType<T>>

    /**
     * Group by Ownership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnershipGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OwnershipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OwnershipGroupByArgs['orderBy'] }
        : { orderBy?: OwnershipGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OwnershipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOwnershipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ownership model
   */
  readonly fields: OwnershipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ownership.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OwnershipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    owner<T extends Ownership$ownerArgs<ExtArgs> = {}>(args?: Subset<T, Ownership$ownerArgs<ExtArgs>>): Prisma__CyclistClient<$Result.GetResult<Prisma.$CyclistPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    bicycle<T extends Ownership$bicycleArgs<ExtArgs> = {}>(args?: Subset<T, Ownership$bicycleArgs<ExtArgs>>): Prisma__BicycleClient<$Result.GetResult<Prisma.$BicyclePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    wheel<T extends Ownership$wheelArgs<ExtArgs> = {}>(args?: Subset<T, Ownership$wheelArgs<ExtArgs>>): Prisma__WheelClient<$Result.GetResult<Prisma.$WheelPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    wheelSet<T extends Ownership$wheelSetArgs<ExtArgs> = {}>(args?: Subset<T, Ownership$wheelSetArgs<ExtArgs>>): Prisma__WheelsetClient<$Result.GetResult<Prisma.$WheelsetPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    part<T extends Ownership$partArgs<ExtArgs> = {}>(args?: Subset<T, Ownership$partArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Ownership model
   */ 
  interface OwnershipFieldRefs {
    readonly id: FieldRef<"Ownership", 'Int'>
    readonly acquired: FieldRef<"Ownership", 'DateTime'>
    readonly condition: FieldRef<"Ownership", 'String'>
    readonly notes: FieldRef<"Ownership", 'String'>
    readonly ownerId: FieldRef<"Ownership", 'Int'>
    readonly bicycleId: FieldRef<"Ownership", 'Int'>
    readonly wheelId: FieldRef<"Ownership", 'Int'>
    readonly wheelSetId: FieldRef<"Ownership", 'Int'>
    readonly partId: FieldRef<"Ownership", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Ownership findUnique
   */
  export type OwnershipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ownership
     */
    select?: OwnershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OwnershipInclude<ExtArgs> | null
    /**
     * Filter, which Ownership to fetch.
     */
    where: OwnershipWhereUniqueInput
  }


  /**
   * Ownership findUniqueOrThrow
   */
  export type OwnershipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ownership
     */
    select?: OwnershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OwnershipInclude<ExtArgs> | null
    /**
     * Filter, which Ownership to fetch.
     */
    where: OwnershipWhereUniqueInput
  }


  /**
   * Ownership findFirst
   */
  export type OwnershipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ownership
     */
    select?: OwnershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OwnershipInclude<ExtArgs> | null
    /**
     * Filter, which Ownership to fetch.
     */
    where?: OwnershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ownerships to fetch.
     */
    orderBy?: OwnershipOrderByWithRelationInput | OwnershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ownerships.
     */
    cursor?: OwnershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ownerships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ownerships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ownerships.
     */
    distinct?: OwnershipScalarFieldEnum | OwnershipScalarFieldEnum[]
  }


  /**
   * Ownership findFirstOrThrow
   */
  export type OwnershipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ownership
     */
    select?: OwnershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OwnershipInclude<ExtArgs> | null
    /**
     * Filter, which Ownership to fetch.
     */
    where?: OwnershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ownerships to fetch.
     */
    orderBy?: OwnershipOrderByWithRelationInput | OwnershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ownerships.
     */
    cursor?: OwnershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ownerships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ownerships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ownerships.
     */
    distinct?: OwnershipScalarFieldEnum | OwnershipScalarFieldEnum[]
  }


  /**
   * Ownership findMany
   */
  export type OwnershipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ownership
     */
    select?: OwnershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OwnershipInclude<ExtArgs> | null
    /**
     * Filter, which Ownerships to fetch.
     */
    where?: OwnershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ownerships to fetch.
     */
    orderBy?: OwnershipOrderByWithRelationInput | OwnershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ownerships.
     */
    cursor?: OwnershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ownerships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ownerships.
     */
    skip?: number
    distinct?: OwnershipScalarFieldEnum | OwnershipScalarFieldEnum[]
  }


  /**
   * Ownership create
   */
  export type OwnershipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ownership
     */
    select?: OwnershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OwnershipInclude<ExtArgs> | null
    /**
     * The data needed to create a Ownership.
     */
    data?: XOR<OwnershipCreateInput, OwnershipUncheckedCreateInput>
  }


  /**
   * Ownership update
   */
  export type OwnershipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ownership
     */
    select?: OwnershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OwnershipInclude<ExtArgs> | null
    /**
     * The data needed to update a Ownership.
     */
    data: XOR<OwnershipUpdateInput, OwnershipUncheckedUpdateInput>
    /**
     * Choose, which Ownership to update.
     */
    where: OwnershipWhereUniqueInput
  }


  /**
   * Ownership updateMany
   */
  export type OwnershipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ownerships.
     */
    data: XOR<OwnershipUpdateManyMutationInput, OwnershipUncheckedUpdateManyInput>
    /**
     * Filter which Ownerships to update
     */
    where?: OwnershipWhereInput
  }


  /**
   * Ownership upsert
   */
  export type OwnershipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ownership
     */
    select?: OwnershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OwnershipInclude<ExtArgs> | null
    /**
     * The filter to search for the Ownership to update in case it exists.
     */
    where: OwnershipWhereUniqueInput
    /**
     * In case the Ownership found by the `where` argument doesn't exist, create a new Ownership with this data.
     */
    create: XOR<OwnershipCreateInput, OwnershipUncheckedCreateInput>
    /**
     * In case the Ownership was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OwnershipUpdateInput, OwnershipUncheckedUpdateInput>
  }


  /**
   * Ownership delete
   */
  export type OwnershipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ownership
     */
    select?: OwnershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OwnershipInclude<ExtArgs> | null
    /**
     * Filter which Ownership to delete.
     */
    where: OwnershipWhereUniqueInput
  }


  /**
   * Ownership deleteMany
   */
  export type OwnershipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ownerships to delete
     */
    where?: OwnershipWhereInput
  }


  /**
   * Ownership.owner
   */
  export type Ownership$ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cyclist
     */
    select?: CyclistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CyclistInclude<ExtArgs> | null
    where?: CyclistWhereInput
  }


  /**
   * Ownership.bicycle
   */
  export type Ownership$bicycleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bicycle
     */
    select?: BicycleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BicycleInclude<ExtArgs> | null
    where?: BicycleWhereInput
  }


  /**
   * Ownership.wheel
   */
  export type Ownership$wheelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wheel
     */
    select?: WheelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WheelInclude<ExtArgs> | null
    where?: WheelWhereInput
  }


  /**
   * Ownership.wheelSet
   */
  export type Ownership$wheelSetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wheelset
     */
    select?: WheelsetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WheelsetInclude<ExtArgs> | null
    where?: WheelsetWhereInput
  }


  /**
   * Ownership.part
   */
  export type Ownership$partArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartInclude<ExtArgs> | null
    where?: PartWhereInput
  }


  /**
   * Ownership without action
   */
  export type OwnershipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ownership
     */
    select?: OwnershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OwnershipInclude<ExtArgs> | null
  }



  /**
   * Model Bicycle
   */

  export type AggregateBicycle = {
    _count: BicycleCountAggregateOutputType | null
    _avg: BicycleAvgAggregateOutputType | null
    _sum: BicycleSumAggregateOutputType | null
    _min: BicycleMinAggregateOutputType | null
    _max: BicycleMaxAggregateOutputType | null
  }

  export type BicycleAvgAggregateOutputType = {
    id: number | null
  }

  export type BicycleSumAggregateOutputType = {
    id: number | null
  }

  export type BicycleMinAggregateOutputType = {
    id: number | null
    notes: string | null
  }

  export type BicycleMaxAggregateOutputType = {
    id: number | null
    notes: string | null
  }

  export type BicycleCountAggregateOutputType = {
    id: number
    notes: number
    _all: number
  }


  export type BicycleAvgAggregateInputType = {
    id?: true
  }

  export type BicycleSumAggregateInputType = {
    id?: true
  }

  export type BicycleMinAggregateInputType = {
    id?: true
    notes?: true
  }

  export type BicycleMaxAggregateInputType = {
    id?: true
    notes?: true
  }

  export type BicycleCountAggregateInputType = {
    id?: true
    notes?: true
    _all?: true
  }

  export type BicycleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bicycle to aggregate.
     */
    where?: BicycleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bicycles to fetch.
     */
    orderBy?: BicycleOrderByWithRelationInput | BicycleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BicycleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bicycles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bicycles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bicycles
    **/
    _count?: true | BicycleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BicycleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BicycleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BicycleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BicycleMaxAggregateInputType
  }

  export type GetBicycleAggregateType<T extends BicycleAggregateArgs> = {
        [P in keyof T & keyof AggregateBicycle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBicycle[P]>
      : GetScalarType<T[P], AggregateBicycle[P]>
  }




  export type BicycleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BicycleWhereInput
    orderBy?: BicycleOrderByWithAggregationInput | BicycleOrderByWithAggregationInput[]
    by: BicycleScalarFieldEnum[] | BicycleScalarFieldEnum
    having?: BicycleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BicycleCountAggregateInputType | true
    _avg?: BicycleAvgAggregateInputType
    _sum?: BicycleSumAggregateInputType
    _min?: BicycleMinAggregateInputType
    _max?: BicycleMaxAggregateInputType
  }

  export type BicycleGroupByOutputType = {
    id: number
    notes: string | null
    _count: BicycleCountAggregateOutputType | null
    _avg: BicycleAvgAggregateOutputType | null
    _sum: BicycleSumAggregateOutputType | null
    _min: BicycleMinAggregateOutputType | null
    _max: BicycleMaxAggregateOutputType | null
  }

  type GetBicycleGroupByPayload<T extends BicycleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BicycleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BicycleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BicycleGroupByOutputType[P]>
            : GetScalarType<T[P], BicycleGroupByOutputType[P]>
        }
      >
    >


  export type BicycleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    notes?: boolean
    parts?: boolean | Bicycle$partsArgs<ExtArgs>
    owners?: boolean | Bicycle$ownersArgs<ExtArgs>
    _count?: boolean | BicycleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bicycle"]>

  export type BicycleSelectScalar = {
    id?: boolean
    notes?: boolean
  }

  export type BicycleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parts?: boolean | Bicycle$partsArgs<ExtArgs>
    owners?: boolean | Bicycle$ownersArgs<ExtArgs>
    _count?: boolean | BicycleCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $BicyclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bicycle"
    objects: {
      parts: Prisma.$BicyclePartPayload<ExtArgs>[]
      owners: Prisma.$OwnershipPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      notes: string | null
    }, ExtArgs["result"]["bicycle"]>
    composites: {}
  }


  type BicycleGetPayload<S extends boolean | null | undefined | BicycleDefaultArgs> = $Result.GetResult<Prisma.$BicyclePayload, S>

  type BicycleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BicycleFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: BicycleCountAggregateInputType | true
    }

  export interface BicycleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bicycle'], meta: { name: 'Bicycle' } }
    /**
     * Find zero or one Bicycle that matches the filter.
     * @param {BicycleFindUniqueArgs} args - Arguments to find a Bicycle
     * @example
     * // Get one Bicycle
     * const bicycle = await prisma.bicycle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BicycleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BicycleFindUniqueArgs<ExtArgs>>
    ): Prisma__BicycleClient<$Result.GetResult<Prisma.$BicyclePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Bicycle that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BicycleFindUniqueOrThrowArgs} args - Arguments to find a Bicycle
     * @example
     * // Get one Bicycle
     * const bicycle = await prisma.bicycle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BicycleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BicycleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BicycleClient<$Result.GetResult<Prisma.$BicyclePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Bicycle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BicycleFindFirstArgs} args - Arguments to find a Bicycle
     * @example
     * // Get one Bicycle
     * const bicycle = await prisma.bicycle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BicycleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BicycleFindFirstArgs<ExtArgs>>
    ): Prisma__BicycleClient<$Result.GetResult<Prisma.$BicyclePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Bicycle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BicycleFindFirstOrThrowArgs} args - Arguments to find a Bicycle
     * @example
     * // Get one Bicycle
     * const bicycle = await prisma.bicycle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BicycleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BicycleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BicycleClient<$Result.GetResult<Prisma.$BicyclePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Bicycles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BicycleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bicycles
     * const bicycles = await prisma.bicycle.findMany()
     * 
     * // Get first 10 Bicycles
     * const bicycles = await prisma.bicycle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bicycleWithIdOnly = await prisma.bicycle.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BicycleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BicycleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BicyclePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Bicycle.
     * @param {BicycleCreateArgs} args - Arguments to create a Bicycle.
     * @example
     * // Create one Bicycle
     * const Bicycle = await prisma.bicycle.create({
     *   data: {
     *     // ... data to create a Bicycle
     *   }
     * })
     * 
    **/
    create<T extends BicycleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BicycleCreateArgs<ExtArgs>>
    ): Prisma__BicycleClient<$Result.GetResult<Prisma.$BicyclePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Bicycle.
     * @param {BicycleDeleteArgs} args - Arguments to delete one Bicycle.
     * @example
     * // Delete one Bicycle
     * const Bicycle = await prisma.bicycle.delete({
     *   where: {
     *     // ... filter to delete one Bicycle
     *   }
     * })
     * 
    **/
    delete<T extends BicycleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BicycleDeleteArgs<ExtArgs>>
    ): Prisma__BicycleClient<$Result.GetResult<Prisma.$BicyclePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Bicycle.
     * @param {BicycleUpdateArgs} args - Arguments to update one Bicycle.
     * @example
     * // Update one Bicycle
     * const bicycle = await prisma.bicycle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BicycleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BicycleUpdateArgs<ExtArgs>>
    ): Prisma__BicycleClient<$Result.GetResult<Prisma.$BicyclePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Bicycles.
     * @param {BicycleDeleteManyArgs} args - Arguments to filter Bicycles to delete.
     * @example
     * // Delete a few Bicycles
     * const { count } = await prisma.bicycle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BicycleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BicycleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bicycles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BicycleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bicycles
     * const bicycle = await prisma.bicycle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BicycleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BicycleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bicycle.
     * @param {BicycleUpsertArgs} args - Arguments to update or create a Bicycle.
     * @example
     * // Update or create a Bicycle
     * const bicycle = await prisma.bicycle.upsert({
     *   create: {
     *     // ... data to create a Bicycle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bicycle we want to update
     *   }
     * })
    **/
    upsert<T extends BicycleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BicycleUpsertArgs<ExtArgs>>
    ): Prisma__BicycleClient<$Result.GetResult<Prisma.$BicyclePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Bicycles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BicycleCountArgs} args - Arguments to filter Bicycles to count.
     * @example
     * // Count the number of Bicycles
     * const count = await prisma.bicycle.count({
     *   where: {
     *     // ... the filter for the Bicycles we want to count
     *   }
     * })
    **/
    count<T extends BicycleCountArgs>(
      args?: Subset<T, BicycleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BicycleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bicycle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BicycleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BicycleAggregateArgs>(args: Subset<T, BicycleAggregateArgs>): Prisma.PrismaPromise<GetBicycleAggregateType<T>>

    /**
     * Group by Bicycle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BicycleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BicycleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BicycleGroupByArgs['orderBy'] }
        : { orderBy?: BicycleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BicycleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBicycleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bicycle model
   */
  readonly fields: BicycleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bicycle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BicycleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    parts<T extends Bicycle$partsArgs<ExtArgs> = {}>(args?: Subset<T, Bicycle$partsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BicyclePartPayload<ExtArgs>, T, 'findMany'> | Null>;

    owners<T extends Bicycle$ownersArgs<ExtArgs> = {}>(args?: Subset<T, Bicycle$ownersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnershipPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Bicycle model
   */ 
  interface BicycleFieldRefs {
    readonly id: FieldRef<"Bicycle", 'Int'>
    readonly notes: FieldRef<"Bicycle", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Bicycle findUnique
   */
  export type BicycleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bicycle
     */
    select?: BicycleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BicycleInclude<ExtArgs> | null
    /**
     * Filter, which Bicycle to fetch.
     */
    where: BicycleWhereUniqueInput
  }


  /**
   * Bicycle findUniqueOrThrow
   */
  export type BicycleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bicycle
     */
    select?: BicycleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BicycleInclude<ExtArgs> | null
    /**
     * Filter, which Bicycle to fetch.
     */
    where: BicycleWhereUniqueInput
  }


  /**
   * Bicycle findFirst
   */
  export type BicycleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bicycle
     */
    select?: BicycleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BicycleInclude<ExtArgs> | null
    /**
     * Filter, which Bicycle to fetch.
     */
    where?: BicycleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bicycles to fetch.
     */
    orderBy?: BicycleOrderByWithRelationInput | BicycleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bicycles.
     */
    cursor?: BicycleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bicycles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bicycles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bicycles.
     */
    distinct?: BicycleScalarFieldEnum | BicycleScalarFieldEnum[]
  }


  /**
   * Bicycle findFirstOrThrow
   */
  export type BicycleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bicycle
     */
    select?: BicycleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BicycleInclude<ExtArgs> | null
    /**
     * Filter, which Bicycle to fetch.
     */
    where?: BicycleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bicycles to fetch.
     */
    orderBy?: BicycleOrderByWithRelationInput | BicycleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bicycles.
     */
    cursor?: BicycleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bicycles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bicycles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bicycles.
     */
    distinct?: BicycleScalarFieldEnum | BicycleScalarFieldEnum[]
  }


  /**
   * Bicycle findMany
   */
  export type BicycleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bicycle
     */
    select?: BicycleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BicycleInclude<ExtArgs> | null
    /**
     * Filter, which Bicycles to fetch.
     */
    where?: BicycleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bicycles to fetch.
     */
    orderBy?: BicycleOrderByWithRelationInput | BicycleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bicycles.
     */
    cursor?: BicycleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bicycles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bicycles.
     */
    skip?: number
    distinct?: BicycleScalarFieldEnum | BicycleScalarFieldEnum[]
  }


  /**
   * Bicycle create
   */
  export type BicycleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bicycle
     */
    select?: BicycleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BicycleInclude<ExtArgs> | null
    /**
     * The data needed to create a Bicycle.
     */
    data?: XOR<BicycleCreateInput, BicycleUncheckedCreateInput>
  }


  /**
   * Bicycle update
   */
  export type BicycleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bicycle
     */
    select?: BicycleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BicycleInclude<ExtArgs> | null
    /**
     * The data needed to update a Bicycle.
     */
    data: XOR<BicycleUpdateInput, BicycleUncheckedUpdateInput>
    /**
     * Choose, which Bicycle to update.
     */
    where: BicycleWhereUniqueInput
  }


  /**
   * Bicycle updateMany
   */
  export type BicycleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bicycles.
     */
    data: XOR<BicycleUpdateManyMutationInput, BicycleUncheckedUpdateManyInput>
    /**
     * Filter which Bicycles to update
     */
    where?: BicycleWhereInput
  }


  /**
   * Bicycle upsert
   */
  export type BicycleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bicycle
     */
    select?: BicycleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BicycleInclude<ExtArgs> | null
    /**
     * The filter to search for the Bicycle to update in case it exists.
     */
    where: BicycleWhereUniqueInput
    /**
     * In case the Bicycle found by the `where` argument doesn't exist, create a new Bicycle with this data.
     */
    create: XOR<BicycleCreateInput, BicycleUncheckedCreateInput>
    /**
     * In case the Bicycle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BicycleUpdateInput, BicycleUncheckedUpdateInput>
  }


  /**
   * Bicycle delete
   */
  export type BicycleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bicycle
     */
    select?: BicycleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BicycleInclude<ExtArgs> | null
    /**
     * Filter which Bicycle to delete.
     */
    where: BicycleWhereUniqueInput
  }


  /**
   * Bicycle deleteMany
   */
  export type BicycleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bicycles to delete
     */
    where?: BicycleWhereInput
  }


  /**
   * Bicycle.parts
   */
  export type Bicycle$partsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BicyclePart
     */
    select?: BicyclePartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BicyclePartInclude<ExtArgs> | null
    where?: BicyclePartWhereInput
    orderBy?: BicyclePartOrderByWithRelationInput | BicyclePartOrderByWithRelationInput[]
    cursor?: BicyclePartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BicyclePartScalarFieldEnum | BicyclePartScalarFieldEnum[]
  }


  /**
   * Bicycle.owners
   */
  export type Bicycle$ownersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ownership
     */
    select?: OwnershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OwnershipInclude<ExtArgs> | null
    where?: OwnershipWhereInput
    orderBy?: OwnershipOrderByWithRelationInput | OwnershipOrderByWithRelationInput[]
    cursor?: OwnershipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OwnershipScalarFieldEnum | OwnershipScalarFieldEnum[]
  }


  /**
   * Bicycle without action
   */
  export type BicycleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bicycle
     */
    select?: BicycleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BicycleInclude<ExtArgs> | null
  }



  /**
   * Model BicyclePart
   */

  export type AggregateBicyclePart = {
    _count: BicyclePartCountAggregateOutputType | null
    _avg: BicyclePartAvgAggregateOutputType | null
    _sum: BicyclePartSumAggregateOutputType | null
    _min: BicyclePartMinAggregateOutputType | null
    _max: BicyclePartMaxAggregateOutputType | null
  }

  export type BicyclePartAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
    bicycleId: number | null
    partId: number | null
  }

  export type BicyclePartSumAggregateOutputType = {
    id: number | null
    quantity: number | null
    bicycleId: number | null
    partId: number | null
  }

  export type BicyclePartMinAggregateOutputType = {
    id: number | null
    quantity: number | null
    notes: string | null
    bicycleId: number | null
    partId: number | null
  }

  export type BicyclePartMaxAggregateOutputType = {
    id: number | null
    quantity: number | null
    notes: string | null
    bicycleId: number | null
    partId: number | null
  }

  export type BicyclePartCountAggregateOutputType = {
    id: number
    quantity: number
    notes: number
    bicycleId: number
    partId: number
    _all: number
  }


  export type BicyclePartAvgAggregateInputType = {
    id?: true
    quantity?: true
    bicycleId?: true
    partId?: true
  }

  export type BicyclePartSumAggregateInputType = {
    id?: true
    quantity?: true
    bicycleId?: true
    partId?: true
  }

  export type BicyclePartMinAggregateInputType = {
    id?: true
    quantity?: true
    notes?: true
    bicycleId?: true
    partId?: true
  }

  export type BicyclePartMaxAggregateInputType = {
    id?: true
    quantity?: true
    notes?: true
    bicycleId?: true
    partId?: true
  }

  export type BicyclePartCountAggregateInputType = {
    id?: true
    quantity?: true
    notes?: true
    bicycleId?: true
    partId?: true
    _all?: true
  }

  export type BicyclePartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BicyclePart to aggregate.
     */
    where?: BicyclePartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BicycleParts to fetch.
     */
    orderBy?: BicyclePartOrderByWithRelationInput | BicyclePartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BicyclePartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BicycleParts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BicycleParts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BicycleParts
    **/
    _count?: true | BicyclePartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BicyclePartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BicyclePartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BicyclePartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BicyclePartMaxAggregateInputType
  }

  export type GetBicyclePartAggregateType<T extends BicyclePartAggregateArgs> = {
        [P in keyof T & keyof AggregateBicyclePart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBicyclePart[P]>
      : GetScalarType<T[P], AggregateBicyclePart[P]>
  }




  export type BicyclePartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BicyclePartWhereInput
    orderBy?: BicyclePartOrderByWithAggregationInput | BicyclePartOrderByWithAggregationInput[]
    by: BicyclePartScalarFieldEnum[] | BicyclePartScalarFieldEnum
    having?: BicyclePartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BicyclePartCountAggregateInputType | true
    _avg?: BicyclePartAvgAggregateInputType
    _sum?: BicyclePartSumAggregateInputType
    _min?: BicyclePartMinAggregateInputType
    _max?: BicyclePartMaxAggregateInputType
  }

  export type BicyclePartGroupByOutputType = {
    id: number
    quantity: number | null
    notes: string | null
    bicycleId: number | null
    partId: number | null
    _count: BicyclePartCountAggregateOutputType | null
    _avg: BicyclePartAvgAggregateOutputType | null
    _sum: BicyclePartSumAggregateOutputType | null
    _min: BicyclePartMinAggregateOutputType | null
    _max: BicyclePartMaxAggregateOutputType | null
  }

  type GetBicyclePartGroupByPayload<T extends BicyclePartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BicyclePartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BicyclePartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BicyclePartGroupByOutputType[P]>
            : GetScalarType<T[P], BicyclePartGroupByOutputType[P]>
        }
      >
    >


  export type BicyclePartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    notes?: boolean
    bicycleId?: boolean
    partId?: boolean
    bicycle?: boolean | BicyclePart$bicycleArgs<ExtArgs>
    part?: boolean | BicyclePart$partArgs<ExtArgs>
  }, ExtArgs["result"]["bicyclePart"]>

  export type BicyclePartSelectScalar = {
    id?: boolean
    quantity?: boolean
    notes?: boolean
    bicycleId?: boolean
    partId?: boolean
  }

  export type BicyclePartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bicycle?: boolean | BicyclePart$bicycleArgs<ExtArgs>
    part?: boolean | BicyclePart$partArgs<ExtArgs>
  }


  export type $BicyclePartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BicyclePart"
    objects: {
      bicycle: Prisma.$BicyclePayload<ExtArgs> | null
      part: Prisma.$PartPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quantity: number | null
      notes: string | null
      bicycleId: number | null
      partId: number | null
    }, ExtArgs["result"]["bicyclePart"]>
    composites: {}
  }


  type BicyclePartGetPayload<S extends boolean | null | undefined | BicyclePartDefaultArgs> = $Result.GetResult<Prisma.$BicyclePartPayload, S>

  type BicyclePartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BicyclePartFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: BicyclePartCountAggregateInputType | true
    }

  export interface BicyclePartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BicyclePart'], meta: { name: 'BicyclePart' } }
    /**
     * Find zero or one BicyclePart that matches the filter.
     * @param {BicyclePartFindUniqueArgs} args - Arguments to find a BicyclePart
     * @example
     * // Get one BicyclePart
     * const bicyclePart = await prisma.bicyclePart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BicyclePartFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BicyclePartFindUniqueArgs<ExtArgs>>
    ): Prisma__BicyclePartClient<$Result.GetResult<Prisma.$BicyclePartPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one BicyclePart that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BicyclePartFindUniqueOrThrowArgs} args - Arguments to find a BicyclePart
     * @example
     * // Get one BicyclePart
     * const bicyclePart = await prisma.bicyclePart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BicyclePartFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BicyclePartFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BicyclePartClient<$Result.GetResult<Prisma.$BicyclePartPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first BicyclePart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BicyclePartFindFirstArgs} args - Arguments to find a BicyclePart
     * @example
     * // Get one BicyclePart
     * const bicyclePart = await prisma.bicyclePart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BicyclePartFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BicyclePartFindFirstArgs<ExtArgs>>
    ): Prisma__BicyclePartClient<$Result.GetResult<Prisma.$BicyclePartPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first BicyclePart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BicyclePartFindFirstOrThrowArgs} args - Arguments to find a BicyclePart
     * @example
     * // Get one BicyclePart
     * const bicyclePart = await prisma.bicyclePart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BicyclePartFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BicyclePartFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BicyclePartClient<$Result.GetResult<Prisma.$BicyclePartPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more BicycleParts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BicyclePartFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BicycleParts
     * const bicycleParts = await prisma.bicyclePart.findMany()
     * 
     * // Get first 10 BicycleParts
     * const bicycleParts = await prisma.bicyclePart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bicyclePartWithIdOnly = await prisma.bicyclePart.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BicyclePartFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BicyclePartFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BicyclePartPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a BicyclePart.
     * @param {BicyclePartCreateArgs} args - Arguments to create a BicyclePart.
     * @example
     * // Create one BicyclePart
     * const BicyclePart = await prisma.bicyclePart.create({
     *   data: {
     *     // ... data to create a BicyclePart
     *   }
     * })
     * 
    **/
    create<T extends BicyclePartCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BicyclePartCreateArgs<ExtArgs>>
    ): Prisma__BicyclePartClient<$Result.GetResult<Prisma.$BicyclePartPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a BicyclePart.
     * @param {BicyclePartDeleteArgs} args - Arguments to delete one BicyclePart.
     * @example
     * // Delete one BicyclePart
     * const BicyclePart = await prisma.bicyclePart.delete({
     *   where: {
     *     // ... filter to delete one BicyclePart
     *   }
     * })
     * 
    **/
    delete<T extends BicyclePartDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BicyclePartDeleteArgs<ExtArgs>>
    ): Prisma__BicyclePartClient<$Result.GetResult<Prisma.$BicyclePartPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one BicyclePart.
     * @param {BicyclePartUpdateArgs} args - Arguments to update one BicyclePart.
     * @example
     * // Update one BicyclePart
     * const bicyclePart = await prisma.bicyclePart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BicyclePartUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BicyclePartUpdateArgs<ExtArgs>>
    ): Prisma__BicyclePartClient<$Result.GetResult<Prisma.$BicyclePartPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more BicycleParts.
     * @param {BicyclePartDeleteManyArgs} args - Arguments to filter BicycleParts to delete.
     * @example
     * // Delete a few BicycleParts
     * const { count } = await prisma.bicyclePart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BicyclePartDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BicyclePartDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BicycleParts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BicyclePartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BicycleParts
     * const bicyclePart = await prisma.bicyclePart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BicyclePartUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BicyclePartUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BicyclePart.
     * @param {BicyclePartUpsertArgs} args - Arguments to update or create a BicyclePart.
     * @example
     * // Update or create a BicyclePart
     * const bicyclePart = await prisma.bicyclePart.upsert({
     *   create: {
     *     // ... data to create a BicyclePart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BicyclePart we want to update
     *   }
     * })
    **/
    upsert<T extends BicyclePartUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BicyclePartUpsertArgs<ExtArgs>>
    ): Prisma__BicyclePartClient<$Result.GetResult<Prisma.$BicyclePartPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of BicycleParts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BicyclePartCountArgs} args - Arguments to filter BicycleParts to count.
     * @example
     * // Count the number of BicycleParts
     * const count = await prisma.bicyclePart.count({
     *   where: {
     *     // ... the filter for the BicycleParts we want to count
     *   }
     * })
    **/
    count<T extends BicyclePartCountArgs>(
      args?: Subset<T, BicyclePartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BicyclePartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BicyclePart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BicyclePartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BicyclePartAggregateArgs>(args: Subset<T, BicyclePartAggregateArgs>): Prisma.PrismaPromise<GetBicyclePartAggregateType<T>>

    /**
     * Group by BicyclePart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BicyclePartGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BicyclePartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BicyclePartGroupByArgs['orderBy'] }
        : { orderBy?: BicyclePartGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BicyclePartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBicyclePartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BicyclePart model
   */
  readonly fields: BicyclePartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BicyclePart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BicyclePartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    bicycle<T extends BicyclePart$bicycleArgs<ExtArgs> = {}>(args?: Subset<T, BicyclePart$bicycleArgs<ExtArgs>>): Prisma__BicycleClient<$Result.GetResult<Prisma.$BicyclePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    part<T extends BicyclePart$partArgs<ExtArgs> = {}>(args?: Subset<T, BicyclePart$partArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the BicyclePart model
   */ 
  interface BicyclePartFieldRefs {
    readonly id: FieldRef<"BicyclePart", 'Int'>
    readonly quantity: FieldRef<"BicyclePart", 'Int'>
    readonly notes: FieldRef<"BicyclePart", 'String'>
    readonly bicycleId: FieldRef<"BicyclePart", 'Int'>
    readonly partId: FieldRef<"BicyclePart", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * BicyclePart findUnique
   */
  export type BicyclePartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BicyclePart
     */
    select?: BicyclePartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BicyclePartInclude<ExtArgs> | null
    /**
     * Filter, which BicyclePart to fetch.
     */
    where: BicyclePartWhereUniqueInput
  }


  /**
   * BicyclePart findUniqueOrThrow
   */
  export type BicyclePartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BicyclePart
     */
    select?: BicyclePartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BicyclePartInclude<ExtArgs> | null
    /**
     * Filter, which BicyclePart to fetch.
     */
    where: BicyclePartWhereUniqueInput
  }


  /**
   * BicyclePart findFirst
   */
  export type BicyclePartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BicyclePart
     */
    select?: BicyclePartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BicyclePartInclude<ExtArgs> | null
    /**
     * Filter, which BicyclePart to fetch.
     */
    where?: BicyclePartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BicycleParts to fetch.
     */
    orderBy?: BicyclePartOrderByWithRelationInput | BicyclePartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BicycleParts.
     */
    cursor?: BicyclePartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BicycleParts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BicycleParts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BicycleParts.
     */
    distinct?: BicyclePartScalarFieldEnum | BicyclePartScalarFieldEnum[]
  }


  /**
   * BicyclePart findFirstOrThrow
   */
  export type BicyclePartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BicyclePart
     */
    select?: BicyclePartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BicyclePartInclude<ExtArgs> | null
    /**
     * Filter, which BicyclePart to fetch.
     */
    where?: BicyclePartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BicycleParts to fetch.
     */
    orderBy?: BicyclePartOrderByWithRelationInput | BicyclePartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BicycleParts.
     */
    cursor?: BicyclePartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BicycleParts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BicycleParts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BicycleParts.
     */
    distinct?: BicyclePartScalarFieldEnum | BicyclePartScalarFieldEnum[]
  }


  /**
   * BicyclePart findMany
   */
  export type BicyclePartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BicyclePart
     */
    select?: BicyclePartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BicyclePartInclude<ExtArgs> | null
    /**
     * Filter, which BicycleParts to fetch.
     */
    where?: BicyclePartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BicycleParts to fetch.
     */
    orderBy?: BicyclePartOrderByWithRelationInput | BicyclePartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BicycleParts.
     */
    cursor?: BicyclePartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BicycleParts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BicycleParts.
     */
    skip?: number
    distinct?: BicyclePartScalarFieldEnum | BicyclePartScalarFieldEnum[]
  }


  /**
   * BicyclePart create
   */
  export type BicyclePartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BicyclePart
     */
    select?: BicyclePartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BicyclePartInclude<ExtArgs> | null
    /**
     * The data needed to create a BicyclePart.
     */
    data?: XOR<BicyclePartCreateInput, BicyclePartUncheckedCreateInput>
  }


  /**
   * BicyclePart update
   */
  export type BicyclePartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BicyclePart
     */
    select?: BicyclePartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BicyclePartInclude<ExtArgs> | null
    /**
     * The data needed to update a BicyclePart.
     */
    data: XOR<BicyclePartUpdateInput, BicyclePartUncheckedUpdateInput>
    /**
     * Choose, which BicyclePart to update.
     */
    where: BicyclePartWhereUniqueInput
  }


  /**
   * BicyclePart updateMany
   */
  export type BicyclePartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BicycleParts.
     */
    data: XOR<BicyclePartUpdateManyMutationInput, BicyclePartUncheckedUpdateManyInput>
    /**
     * Filter which BicycleParts to update
     */
    where?: BicyclePartWhereInput
  }


  /**
   * BicyclePart upsert
   */
  export type BicyclePartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BicyclePart
     */
    select?: BicyclePartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BicyclePartInclude<ExtArgs> | null
    /**
     * The filter to search for the BicyclePart to update in case it exists.
     */
    where: BicyclePartWhereUniqueInput
    /**
     * In case the BicyclePart found by the `where` argument doesn't exist, create a new BicyclePart with this data.
     */
    create: XOR<BicyclePartCreateInput, BicyclePartUncheckedCreateInput>
    /**
     * In case the BicyclePart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BicyclePartUpdateInput, BicyclePartUncheckedUpdateInput>
  }


  /**
   * BicyclePart delete
   */
  export type BicyclePartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BicyclePart
     */
    select?: BicyclePartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BicyclePartInclude<ExtArgs> | null
    /**
     * Filter which BicyclePart to delete.
     */
    where: BicyclePartWhereUniqueInput
  }


  /**
   * BicyclePart deleteMany
   */
  export type BicyclePartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BicycleParts to delete
     */
    where?: BicyclePartWhereInput
  }


  /**
   * BicyclePart.bicycle
   */
  export type BicyclePart$bicycleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bicycle
     */
    select?: BicycleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BicycleInclude<ExtArgs> | null
    where?: BicycleWhereInput
  }


  /**
   * BicyclePart.part
   */
  export type BicyclePart$partArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartInclude<ExtArgs> | null
    where?: PartWhereInput
  }


  /**
   * BicyclePart without action
   */
  export type BicyclePartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BicyclePart
     */
    select?: BicyclePartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BicyclePartInclude<ExtArgs> | null
  }



  /**
   * Model Maker
   */

  export type AggregateMaker = {
    _count: MakerCountAggregateOutputType | null
    _avg: MakerAvgAggregateOutputType | null
    _sum: MakerSumAggregateOutputType | null
    _min: MakerMinAggregateOutputType | null
    _max: MakerMaxAggregateOutputType | null
  }

  export type MakerAvgAggregateOutputType = {
    id: number | null
  }

  export type MakerSumAggregateOutputType = {
    id: number | null
  }

  export type MakerMinAggregateOutputType = {
    id: number | null
    name: string | null
    nameShort: string | null
    nameAbbreviation: string | null
    notes: string | null
  }

  export type MakerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    nameShort: string | null
    nameAbbreviation: string | null
    notes: string | null
  }

  export type MakerCountAggregateOutputType = {
    id: number
    name: number
    nameShort: number
    nameAbbreviation: number
    notes: number
    _all: number
  }


  export type MakerAvgAggregateInputType = {
    id?: true
  }

  export type MakerSumAggregateInputType = {
    id?: true
  }

  export type MakerMinAggregateInputType = {
    id?: true
    name?: true
    nameShort?: true
    nameAbbreviation?: true
    notes?: true
  }

  export type MakerMaxAggregateInputType = {
    id?: true
    name?: true
    nameShort?: true
    nameAbbreviation?: true
    notes?: true
  }

  export type MakerCountAggregateInputType = {
    id?: true
    name?: true
    nameShort?: true
    nameAbbreviation?: true
    notes?: true
    _all?: true
  }

  export type MakerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Maker to aggregate.
     */
    where?: MakerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Makers to fetch.
     */
    orderBy?: MakerOrderByWithRelationInput | MakerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MakerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Makers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Makers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Makers
    **/
    _count?: true | MakerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MakerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MakerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MakerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MakerMaxAggregateInputType
  }

  export type GetMakerAggregateType<T extends MakerAggregateArgs> = {
        [P in keyof T & keyof AggregateMaker]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaker[P]>
      : GetScalarType<T[P], AggregateMaker[P]>
  }




  export type MakerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MakerWhereInput
    orderBy?: MakerOrderByWithAggregationInput | MakerOrderByWithAggregationInput[]
    by: MakerScalarFieldEnum[] | MakerScalarFieldEnum
    having?: MakerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MakerCountAggregateInputType | true
    _avg?: MakerAvgAggregateInputType
    _sum?: MakerSumAggregateInputType
    _min?: MakerMinAggregateInputType
    _max?: MakerMaxAggregateInputType
  }

  export type MakerGroupByOutputType = {
    id: number
    name: string | null
    nameShort: string | null
    nameAbbreviation: string | null
    notes: string | null
    _count: MakerCountAggregateOutputType | null
    _avg: MakerAvgAggregateOutputType | null
    _sum: MakerSumAggregateOutputType | null
    _min: MakerMinAggregateOutputType | null
    _max: MakerMaxAggregateOutputType | null
  }

  type GetMakerGroupByPayload<T extends MakerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MakerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MakerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MakerGroupByOutputType[P]>
            : GetScalarType<T[P], MakerGroupByOutputType[P]>
        }
      >
    >


  export type MakerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nameShort?: boolean
    nameAbbreviation?: boolean
    notes?: boolean
    parts?: boolean | Maker$partsArgs<ExtArgs>
    _count?: boolean | MakerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maker"]>

  export type MakerSelectScalar = {
    id?: boolean
    name?: boolean
    nameShort?: boolean
    nameAbbreviation?: boolean
    notes?: boolean
  }

  export type MakerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parts?: boolean | Maker$partsArgs<ExtArgs>
    _count?: boolean | MakerCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $MakerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Maker"
    objects: {
      parts: Prisma.$PartPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      nameShort: string | null
      nameAbbreviation: string | null
      notes: string | null
    }, ExtArgs["result"]["maker"]>
    composites: {}
  }


  type MakerGetPayload<S extends boolean | null | undefined | MakerDefaultArgs> = $Result.GetResult<Prisma.$MakerPayload, S>

  type MakerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MakerFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: MakerCountAggregateInputType | true
    }

  export interface MakerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Maker'], meta: { name: 'Maker' } }
    /**
     * Find zero or one Maker that matches the filter.
     * @param {MakerFindUniqueArgs} args - Arguments to find a Maker
     * @example
     * // Get one Maker
     * const maker = await prisma.maker.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MakerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MakerFindUniqueArgs<ExtArgs>>
    ): Prisma__MakerClient<$Result.GetResult<Prisma.$MakerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Maker that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MakerFindUniqueOrThrowArgs} args - Arguments to find a Maker
     * @example
     * // Get one Maker
     * const maker = await prisma.maker.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MakerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MakerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MakerClient<$Result.GetResult<Prisma.$MakerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Maker that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakerFindFirstArgs} args - Arguments to find a Maker
     * @example
     * // Get one Maker
     * const maker = await prisma.maker.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MakerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MakerFindFirstArgs<ExtArgs>>
    ): Prisma__MakerClient<$Result.GetResult<Prisma.$MakerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Maker that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakerFindFirstOrThrowArgs} args - Arguments to find a Maker
     * @example
     * // Get one Maker
     * const maker = await prisma.maker.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MakerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MakerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MakerClient<$Result.GetResult<Prisma.$MakerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Makers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Makers
     * const makers = await prisma.maker.findMany()
     * 
     * // Get first 10 Makers
     * const makers = await prisma.maker.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const makerWithIdOnly = await prisma.maker.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MakerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MakerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MakerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Maker.
     * @param {MakerCreateArgs} args - Arguments to create a Maker.
     * @example
     * // Create one Maker
     * const Maker = await prisma.maker.create({
     *   data: {
     *     // ... data to create a Maker
     *   }
     * })
     * 
    **/
    create<T extends MakerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MakerCreateArgs<ExtArgs>>
    ): Prisma__MakerClient<$Result.GetResult<Prisma.$MakerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Maker.
     * @param {MakerDeleteArgs} args - Arguments to delete one Maker.
     * @example
     * // Delete one Maker
     * const Maker = await prisma.maker.delete({
     *   where: {
     *     // ... filter to delete one Maker
     *   }
     * })
     * 
    **/
    delete<T extends MakerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MakerDeleteArgs<ExtArgs>>
    ): Prisma__MakerClient<$Result.GetResult<Prisma.$MakerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Maker.
     * @param {MakerUpdateArgs} args - Arguments to update one Maker.
     * @example
     * // Update one Maker
     * const maker = await prisma.maker.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MakerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MakerUpdateArgs<ExtArgs>>
    ): Prisma__MakerClient<$Result.GetResult<Prisma.$MakerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Makers.
     * @param {MakerDeleteManyArgs} args - Arguments to filter Makers to delete.
     * @example
     * // Delete a few Makers
     * const { count } = await prisma.maker.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MakerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MakerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Makers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Makers
     * const maker = await prisma.maker.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MakerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MakerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Maker.
     * @param {MakerUpsertArgs} args - Arguments to update or create a Maker.
     * @example
     * // Update or create a Maker
     * const maker = await prisma.maker.upsert({
     *   create: {
     *     // ... data to create a Maker
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Maker we want to update
     *   }
     * })
    **/
    upsert<T extends MakerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MakerUpsertArgs<ExtArgs>>
    ): Prisma__MakerClient<$Result.GetResult<Prisma.$MakerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Makers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakerCountArgs} args - Arguments to filter Makers to count.
     * @example
     * // Count the number of Makers
     * const count = await prisma.maker.count({
     *   where: {
     *     // ... the filter for the Makers we want to count
     *   }
     * })
    **/
    count<T extends MakerCountArgs>(
      args?: Subset<T, MakerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MakerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Maker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MakerAggregateArgs>(args: Subset<T, MakerAggregateArgs>): Prisma.PrismaPromise<GetMakerAggregateType<T>>

    /**
     * Group by Maker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MakerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MakerGroupByArgs['orderBy'] }
        : { orderBy?: MakerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MakerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMakerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Maker model
   */
  readonly fields: MakerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Maker.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MakerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    parts<T extends Maker$partsArgs<ExtArgs> = {}>(args?: Subset<T, Maker$partsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Maker model
   */ 
  interface MakerFieldRefs {
    readonly id: FieldRef<"Maker", 'Int'>
    readonly name: FieldRef<"Maker", 'String'>
    readonly nameShort: FieldRef<"Maker", 'String'>
    readonly nameAbbreviation: FieldRef<"Maker", 'String'>
    readonly notes: FieldRef<"Maker", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Maker findUnique
   */
  export type MakerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maker
     */
    select?: MakerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MakerInclude<ExtArgs> | null
    /**
     * Filter, which Maker to fetch.
     */
    where: MakerWhereUniqueInput
  }


  /**
   * Maker findUniqueOrThrow
   */
  export type MakerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maker
     */
    select?: MakerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MakerInclude<ExtArgs> | null
    /**
     * Filter, which Maker to fetch.
     */
    where: MakerWhereUniqueInput
  }


  /**
   * Maker findFirst
   */
  export type MakerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maker
     */
    select?: MakerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MakerInclude<ExtArgs> | null
    /**
     * Filter, which Maker to fetch.
     */
    where?: MakerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Makers to fetch.
     */
    orderBy?: MakerOrderByWithRelationInput | MakerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Makers.
     */
    cursor?: MakerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Makers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Makers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Makers.
     */
    distinct?: MakerScalarFieldEnum | MakerScalarFieldEnum[]
  }


  /**
   * Maker findFirstOrThrow
   */
  export type MakerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maker
     */
    select?: MakerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MakerInclude<ExtArgs> | null
    /**
     * Filter, which Maker to fetch.
     */
    where?: MakerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Makers to fetch.
     */
    orderBy?: MakerOrderByWithRelationInput | MakerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Makers.
     */
    cursor?: MakerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Makers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Makers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Makers.
     */
    distinct?: MakerScalarFieldEnum | MakerScalarFieldEnum[]
  }


  /**
   * Maker findMany
   */
  export type MakerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maker
     */
    select?: MakerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MakerInclude<ExtArgs> | null
    /**
     * Filter, which Makers to fetch.
     */
    where?: MakerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Makers to fetch.
     */
    orderBy?: MakerOrderByWithRelationInput | MakerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Makers.
     */
    cursor?: MakerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Makers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Makers.
     */
    skip?: number
    distinct?: MakerScalarFieldEnum | MakerScalarFieldEnum[]
  }


  /**
   * Maker create
   */
  export type MakerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maker
     */
    select?: MakerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MakerInclude<ExtArgs> | null
    /**
     * The data needed to create a Maker.
     */
    data?: XOR<MakerCreateInput, MakerUncheckedCreateInput>
  }


  /**
   * Maker update
   */
  export type MakerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maker
     */
    select?: MakerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MakerInclude<ExtArgs> | null
    /**
     * The data needed to update a Maker.
     */
    data: XOR<MakerUpdateInput, MakerUncheckedUpdateInput>
    /**
     * Choose, which Maker to update.
     */
    where: MakerWhereUniqueInput
  }


  /**
   * Maker updateMany
   */
  export type MakerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Makers.
     */
    data: XOR<MakerUpdateManyMutationInput, MakerUncheckedUpdateManyInput>
    /**
     * Filter which Makers to update
     */
    where?: MakerWhereInput
  }


  /**
   * Maker upsert
   */
  export type MakerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maker
     */
    select?: MakerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MakerInclude<ExtArgs> | null
    /**
     * The filter to search for the Maker to update in case it exists.
     */
    where: MakerWhereUniqueInput
    /**
     * In case the Maker found by the `where` argument doesn't exist, create a new Maker with this data.
     */
    create: XOR<MakerCreateInput, MakerUncheckedCreateInput>
    /**
     * In case the Maker was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MakerUpdateInput, MakerUncheckedUpdateInput>
  }


  /**
   * Maker delete
   */
  export type MakerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maker
     */
    select?: MakerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MakerInclude<ExtArgs> | null
    /**
     * Filter which Maker to delete.
     */
    where: MakerWhereUniqueInput
  }


  /**
   * Maker deleteMany
   */
  export type MakerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Makers to delete
     */
    where?: MakerWhereInput
  }


  /**
   * Maker.parts
   */
  export type Maker$partsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartInclude<ExtArgs> | null
    where?: PartWhereInput
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    cursor?: PartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartScalarFieldEnum | PartScalarFieldEnum[]
  }


  /**
   * Maker without action
   */
  export type MakerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maker
     */
    select?: MakerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MakerInclude<ExtArgs> | null
  }



  /**
   * Model Part
   */

  export type AggregatePart = {
    _count: PartCountAggregateOutputType | null
    _avg: PartAvgAggregateOutputType | null
    _sum: PartSumAggregateOutputType | null
    _min: PartMinAggregateOutputType | null
    _max: PartMaxAggregateOutputType | null
  }

  export type PartAvgAggregateOutputType = {
    id: number | null
    makerId: number | null
  }

  export type PartSumAggregateOutputType = {
    id: number | null
    makerId: number | null
  }

  export type PartMinAggregateOutputType = {
    id: number | null
    categories: string | null
    type: string | null
    designationCode: string | null
    name: string | null
    notes: string | null
    makerId: number | null
  }

  export type PartMaxAggregateOutputType = {
    id: number | null
    categories: string | null
    type: string | null
    designationCode: string | null
    name: string | null
    notes: string | null
    makerId: number | null
  }

  export type PartCountAggregateOutputType = {
    id: number
    categories: number
    type: number
    designationCode: number
    name: number
    notes: number
    makerId: number
    _all: number
  }


  export type PartAvgAggregateInputType = {
    id?: true
    makerId?: true
  }

  export type PartSumAggregateInputType = {
    id?: true
    makerId?: true
  }

  export type PartMinAggregateInputType = {
    id?: true
    categories?: true
    type?: true
    designationCode?: true
    name?: true
    notes?: true
    makerId?: true
  }

  export type PartMaxAggregateInputType = {
    id?: true
    categories?: true
    type?: true
    designationCode?: true
    name?: true
    notes?: true
    makerId?: true
  }

  export type PartCountAggregateInputType = {
    id?: true
    categories?: true
    type?: true
    designationCode?: true
    name?: true
    notes?: true
    makerId?: true
    _all?: true
  }

  export type PartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Part to aggregate.
     */
    where?: PartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parts to fetch.
     */
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parts
    **/
    _count?: true | PartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartMaxAggregateInputType
  }

  export type GetPartAggregateType<T extends PartAggregateArgs> = {
        [P in keyof T & keyof AggregatePart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePart[P]>
      : GetScalarType<T[P], AggregatePart[P]>
  }




  export type PartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartWhereInput
    orderBy?: PartOrderByWithAggregationInput | PartOrderByWithAggregationInput[]
    by: PartScalarFieldEnum[] | PartScalarFieldEnum
    having?: PartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartCountAggregateInputType | true
    _avg?: PartAvgAggregateInputType
    _sum?: PartSumAggregateInputType
    _min?: PartMinAggregateInputType
    _max?: PartMaxAggregateInputType
  }

  export type PartGroupByOutputType = {
    id: number
    categories: string | null
    type: string | null
    designationCode: string | null
    name: string | null
    notes: string | null
    makerId: number | null
    _count: PartCountAggregateOutputType | null
    _avg: PartAvgAggregateOutputType | null
    _sum: PartSumAggregateOutputType | null
    _min: PartMinAggregateOutputType | null
    _max: PartMaxAggregateOutputType | null
  }

  type GetPartGroupByPayload<T extends PartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartGroupByOutputType[P]>
            : GetScalarType<T[P], PartGroupByOutputType[P]>
        }
      >
    >


  export type PartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categories?: boolean
    type?: boolean
    designationCode?: boolean
    name?: boolean
    notes?: boolean
    makerId?: boolean
    maker?: boolean | Part$makerArgs<ExtArgs>
    owners?: boolean | Part$ownersArgs<ExtArgs>
    bicycles?: boolean | Part$bicyclesArgs<ExtArgs>
    hub?: boolean | Part$hubArgs<ExtArgs>
    rim?: boolean | Part$rimArgs<ExtArgs>
    cogset?: boolean | Part$cogsetArgs<ExtArgs>
    _count?: boolean | PartCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["part"]>

  export type PartSelectScalar = {
    id?: boolean
    categories?: boolean
    type?: boolean
    designationCode?: boolean
    name?: boolean
    notes?: boolean
    makerId?: boolean
  }

  export type PartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    maker?: boolean | Part$makerArgs<ExtArgs>
    owners?: boolean | Part$ownersArgs<ExtArgs>
    bicycles?: boolean | Part$bicyclesArgs<ExtArgs>
    hub?: boolean | Part$hubArgs<ExtArgs>
    rim?: boolean | Part$rimArgs<ExtArgs>
    cogset?: boolean | Part$cogsetArgs<ExtArgs>
    _count?: boolean | PartCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Part"
    objects: {
      maker: Prisma.$MakerPayload<ExtArgs> | null
      owners: Prisma.$OwnershipPayload<ExtArgs>[]
      bicycles: Prisma.$BicyclePartPayload<ExtArgs>[]
      hub: Prisma.$HubPayload<ExtArgs> | null
      rim: Prisma.$RimPayload<ExtArgs> | null
      cogset: Prisma.$CogsetPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      categories: string | null
      type: string | null
      designationCode: string | null
      name: string | null
      notes: string | null
      makerId: number | null
    }, ExtArgs["result"]["part"]>
    composites: {}
  }


  type PartGetPayload<S extends boolean | null | undefined | PartDefaultArgs> = $Result.GetResult<Prisma.$PartPayload, S>

  type PartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PartFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PartCountAggregateInputType | true
    }

  export interface PartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Part'], meta: { name: 'Part' } }
    /**
     * Find zero or one Part that matches the filter.
     * @param {PartFindUniqueArgs} args - Arguments to find a Part
     * @example
     * // Get one Part
     * const part = await prisma.part.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PartFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PartFindUniqueArgs<ExtArgs>>
    ): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Part that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PartFindUniqueOrThrowArgs} args - Arguments to find a Part
     * @example
     * // Get one Part
     * const part = await prisma.part.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PartFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PartFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Part that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartFindFirstArgs} args - Arguments to find a Part
     * @example
     * // Get one Part
     * const part = await prisma.part.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PartFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PartFindFirstArgs<ExtArgs>>
    ): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Part that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartFindFirstOrThrowArgs} args - Arguments to find a Part
     * @example
     * // Get one Part
     * const part = await prisma.part.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PartFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PartFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Parts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parts
     * const parts = await prisma.part.findMany()
     * 
     * // Get first 10 Parts
     * const parts = await prisma.part.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partWithIdOnly = await prisma.part.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PartFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PartFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Part.
     * @param {PartCreateArgs} args - Arguments to create a Part.
     * @example
     * // Create one Part
     * const Part = await prisma.part.create({
     *   data: {
     *     // ... data to create a Part
     *   }
     * })
     * 
    **/
    create<T extends PartCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PartCreateArgs<ExtArgs>>
    ): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Part.
     * @param {PartDeleteArgs} args - Arguments to delete one Part.
     * @example
     * // Delete one Part
     * const Part = await prisma.part.delete({
     *   where: {
     *     // ... filter to delete one Part
     *   }
     * })
     * 
    **/
    delete<T extends PartDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PartDeleteArgs<ExtArgs>>
    ): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Part.
     * @param {PartUpdateArgs} args - Arguments to update one Part.
     * @example
     * // Update one Part
     * const part = await prisma.part.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PartUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PartUpdateArgs<ExtArgs>>
    ): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Parts.
     * @param {PartDeleteManyArgs} args - Arguments to filter Parts to delete.
     * @example
     * // Delete a few Parts
     * const { count } = await prisma.part.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PartDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PartDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parts
     * const part = await prisma.part.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PartUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PartUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Part.
     * @param {PartUpsertArgs} args - Arguments to update or create a Part.
     * @example
     * // Update or create a Part
     * const part = await prisma.part.upsert({
     *   create: {
     *     // ... data to create a Part
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Part we want to update
     *   }
     * })
    **/
    upsert<T extends PartUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PartUpsertArgs<ExtArgs>>
    ): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Parts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartCountArgs} args - Arguments to filter Parts to count.
     * @example
     * // Count the number of Parts
     * const count = await prisma.part.count({
     *   where: {
     *     // ... the filter for the Parts we want to count
     *   }
     * })
    **/
    count<T extends PartCountArgs>(
      args?: Subset<T, PartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Part.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PartAggregateArgs>(args: Subset<T, PartAggregateArgs>): Prisma.PrismaPromise<GetPartAggregateType<T>>

    /**
     * Group by Part.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartGroupByArgs['orderBy'] }
        : { orderBy?: PartGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Part model
   */
  readonly fields: PartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Part.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    maker<T extends Part$makerArgs<ExtArgs> = {}>(args?: Subset<T, Part$makerArgs<ExtArgs>>): Prisma__MakerClient<$Result.GetResult<Prisma.$MakerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    owners<T extends Part$ownersArgs<ExtArgs> = {}>(args?: Subset<T, Part$ownersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnershipPayload<ExtArgs>, T, 'findMany'> | Null>;

    bicycles<T extends Part$bicyclesArgs<ExtArgs> = {}>(args?: Subset<T, Part$bicyclesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BicyclePartPayload<ExtArgs>, T, 'findMany'> | Null>;

    hub<T extends Part$hubArgs<ExtArgs> = {}>(args?: Subset<T, Part$hubArgs<ExtArgs>>): Prisma__HubClient<$Result.GetResult<Prisma.$HubPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    rim<T extends Part$rimArgs<ExtArgs> = {}>(args?: Subset<T, Part$rimArgs<ExtArgs>>): Prisma__RimClient<$Result.GetResult<Prisma.$RimPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    cogset<T extends Part$cogsetArgs<ExtArgs> = {}>(args?: Subset<T, Part$cogsetArgs<ExtArgs>>): Prisma__CogsetClient<$Result.GetResult<Prisma.$CogsetPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Part model
   */ 
  interface PartFieldRefs {
    readonly id: FieldRef<"Part", 'Int'>
    readonly categories: FieldRef<"Part", 'String'>
    readonly type: FieldRef<"Part", 'String'>
    readonly designationCode: FieldRef<"Part", 'String'>
    readonly name: FieldRef<"Part", 'String'>
    readonly notes: FieldRef<"Part", 'String'>
    readonly makerId: FieldRef<"Part", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Part findUnique
   */
  export type PartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * Filter, which Part to fetch.
     */
    where: PartWhereUniqueInput
  }


  /**
   * Part findUniqueOrThrow
   */
  export type PartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * Filter, which Part to fetch.
     */
    where: PartWhereUniqueInput
  }


  /**
   * Part findFirst
   */
  export type PartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * Filter, which Part to fetch.
     */
    where?: PartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parts to fetch.
     */
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parts.
     */
    cursor?: PartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parts.
     */
    distinct?: PartScalarFieldEnum | PartScalarFieldEnum[]
  }


  /**
   * Part findFirstOrThrow
   */
  export type PartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * Filter, which Part to fetch.
     */
    where?: PartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parts to fetch.
     */
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parts.
     */
    cursor?: PartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parts.
     */
    distinct?: PartScalarFieldEnum | PartScalarFieldEnum[]
  }


  /**
   * Part findMany
   */
  export type PartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * Filter, which Parts to fetch.
     */
    where?: PartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parts to fetch.
     */
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parts.
     */
    cursor?: PartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parts.
     */
    skip?: number
    distinct?: PartScalarFieldEnum | PartScalarFieldEnum[]
  }


  /**
   * Part create
   */
  export type PartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * The data needed to create a Part.
     */
    data?: XOR<PartCreateInput, PartUncheckedCreateInput>
  }


  /**
   * Part update
   */
  export type PartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * The data needed to update a Part.
     */
    data: XOR<PartUpdateInput, PartUncheckedUpdateInput>
    /**
     * Choose, which Part to update.
     */
    where: PartWhereUniqueInput
  }


  /**
   * Part updateMany
   */
  export type PartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parts.
     */
    data: XOR<PartUpdateManyMutationInput, PartUncheckedUpdateManyInput>
    /**
     * Filter which Parts to update
     */
    where?: PartWhereInput
  }


  /**
   * Part upsert
   */
  export type PartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * The filter to search for the Part to update in case it exists.
     */
    where: PartWhereUniqueInput
    /**
     * In case the Part found by the `where` argument doesn't exist, create a new Part with this data.
     */
    create: XOR<PartCreateInput, PartUncheckedCreateInput>
    /**
     * In case the Part was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartUpdateInput, PartUncheckedUpdateInput>
  }


  /**
   * Part delete
   */
  export type PartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * Filter which Part to delete.
     */
    where: PartWhereUniqueInput
  }


  /**
   * Part deleteMany
   */
  export type PartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parts to delete
     */
    where?: PartWhereInput
  }


  /**
   * Part.maker
   */
  export type Part$makerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maker
     */
    select?: MakerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MakerInclude<ExtArgs> | null
    where?: MakerWhereInput
  }


  /**
   * Part.owners
   */
  export type Part$ownersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ownership
     */
    select?: OwnershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OwnershipInclude<ExtArgs> | null
    where?: OwnershipWhereInput
    orderBy?: OwnershipOrderByWithRelationInput | OwnershipOrderByWithRelationInput[]
    cursor?: OwnershipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OwnershipScalarFieldEnum | OwnershipScalarFieldEnum[]
  }


  /**
   * Part.bicycles
   */
  export type Part$bicyclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BicyclePart
     */
    select?: BicyclePartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BicyclePartInclude<ExtArgs> | null
    where?: BicyclePartWhereInput
    orderBy?: BicyclePartOrderByWithRelationInput | BicyclePartOrderByWithRelationInput[]
    cursor?: BicyclePartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BicyclePartScalarFieldEnum | BicyclePartScalarFieldEnum[]
  }


  /**
   * Part.hub
   */
  export type Part$hubArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hub
     */
    select?: HubSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HubInclude<ExtArgs> | null
    where?: HubWhereInput
  }


  /**
   * Part.rim
   */
  export type Part$rimArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rim
     */
    select?: RimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RimInclude<ExtArgs> | null
    where?: RimWhereInput
  }


  /**
   * Part.cogset
   */
  export type Part$cogsetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cogset
     */
    select?: CogsetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CogsetInclude<ExtArgs> | null
    where?: CogsetWhereInput
  }


  /**
   * Part without action
   */
  export type PartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartInclude<ExtArgs> | null
  }



  /**
   * Model Hub
   */

  export type AggregateHub = {
    _count: HubCountAggregateOutputType | null
    _avg: HubAvgAggregateOutputType | null
    _sum: HubSumAggregateOutputType | null
    _min: HubMinAggregateOutputType | null
    _max: HubMaxAggregateOutputType | null
  }

  export type HubAvgAggregateOutputType = {
    id: number | null
    partId: number | null
    spokeCount: number | null
    overLocknutDistance: number | null
    flangeDiameterLeft: number | null
    flangeDiameterRight: number | null
    flangeLeftToCenter: number | null
    flangeRightToCenter: number | null
    sflangeLeftToOLN: number | null
    flangeRightToOLN: number | null
    spokeHoleDiameter: number | null
  }

  export type HubSumAggregateOutputType = {
    id: number | null
    partId: number | null
    spokeCount: number | null
    overLocknutDistance: number | null
    flangeDiameterLeft: number | null
    flangeDiameterRight: number | null
    flangeLeftToCenter: number | null
    flangeRightToCenter: number | null
    sflangeLeftToOLN: number | null
    flangeRightToOLN: number | null
    spokeHoleDiameter: number | null
  }

  export type HubMinAggregateOutputType = {
    id: number | null
    partId: number | null
    position: string | null
    spokeCount: number | null
    overLocknutDistance: number | null
    flangeDiameterLeft: number | null
    flangeDiameterRight: number | null
    flangeLeftToCenter: number | null
    flangeRightToCenter: number | null
    sflangeLeftToOLN: number | null
    flangeRightToOLN: number | null
    spokeHoleDiameter: number | null
  }

  export type HubMaxAggregateOutputType = {
    id: number | null
    partId: number | null
    position: string | null
    spokeCount: number | null
    overLocknutDistance: number | null
    flangeDiameterLeft: number | null
    flangeDiameterRight: number | null
    flangeLeftToCenter: number | null
    flangeRightToCenter: number | null
    sflangeLeftToOLN: number | null
    flangeRightToOLN: number | null
    spokeHoleDiameter: number | null
  }

  export type HubCountAggregateOutputType = {
    id: number
    partId: number
    position: number
    spokeCount: number
    overLocknutDistance: number
    flangeDiameterLeft: number
    flangeDiameterRight: number
    flangeLeftToCenter: number
    flangeRightToCenter: number
    sflangeLeftToOLN: number
    flangeRightToOLN: number
    spokeHoleDiameter: number
    _all: number
  }


  export type HubAvgAggregateInputType = {
    id?: true
    partId?: true
    spokeCount?: true
    overLocknutDistance?: true
    flangeDiameterLeft?: true
    flangeDiameterRight?: true
    flangeLeftToCenter?: true
    flangeRightToCenter?: true
    sflangeLeftToOLN?: true
    flangeRightToOLN?: true
    spokeHoleDiameter?: true
  }

  export type HubSumAggregateInputType = {
    id?: true
    partId?: true
    spokeCount?: true
    overLocknutDistance?: true
    flangeDiameterLeft?: true
    flangeDiameterRight?: true
    flangeLeftToCenter?: true
    flangeRightToCenter?: true
    sflangeLeftToOLN?: true
    flangeRightToOLN?: true
    spokeHoleDiameter?: true
  }

  export type HubMinAggregateInputType = {
    id?: true
    partId?: true
    position?: true
    spokeCount?: true
    overLocknutDistance?: true
    flangeDiameterLeft?: true
    flangeDiameterRight?: true
    flangeLeftToCenter?: true
    flangeRightToCenter?: true
    sflangeLeftToOLN?: true
    flangeRightToOLN?: true
    spokeHoleDiameter?: true
  }

  export type HubMaxAggregateInputType = {
    id?: true
    partId?: true
    position?: true
    spokeCount?: true
    overLocknutDistance?: true
    flangeDiameterLeft?: true
    flangeDiameterRight?: true
    flangeLeftToCenter?: true
    flangeRightToCenter?: true
    sflangeLeftToOLN?: true
    flangeRightToOLN?: true
    spokeHoleDiameter?: true
  }

  export type HubCountAggregateInputType = {
    id?: true
    partId?: true
    position?: true
    spokeCount?: true
    overLocknutDistance?: true
    flangeDiameterLeft?: true
    flangeDiameterRight?: true
    flangeLeftToCenter?: true
    flangeRightToCenter?: true
    sflangeLeftToOLN?: true
    flangeRightToOLN?: true
    spokeHoleDiameter?: true
    _all?: true
  }

  export type HubAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hub to aggregate.
     */
    where?: HubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hubs to fetch.
     */
    orderBy?: HubOrderByWithRelationInput | HubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hubs
    **/
    _count?: true | HubCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HubAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HubSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HubMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HubMaxAggregateInputType
  }

  export type GetHubAggregateType<T extends HubAggregateArgs> = {
        [P in keyof T & keyof AggregateHub]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHub[P]>
      : GetScalarType<T[P], AggregateHub[P]>
  }




  export type HubGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HubWhereInput
    orderBy?: HubOrderByWithAggregationInput | HubOrderByWithAggregationInput[]
    by: HubScalarFieldEnum[] | HubScalarFieldEnum
    having?: HubScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HubCountAggregateInputType | true
    _avg?: HubAvgAggregateInputType
    _sum?: HubSumAggregateInputType
    _min?: HubMinAggregateInputType
    _max?: HubMaxAggregateInputType
  }

  export type HubGroupByOutputType = {
    id: number
    partId: number | null
    position: string | null
    spokeCount: number | null
    overLocknutDistance: number | null
    flangeDiameterLeft: number | null
    flangeDiameterRight: number | null
    flangeLeftToCenter: number | null
    flangeRightToCenter: number | null
    sflangeLeftToOLN: number | null
    flangeRightToOLN: number | null
    spokeHoleDiameter: number | null
    _count: HubCountAggregateOutputType | null
    _avg: HubAvgAggregateOutputType | null
    _sum: HubSumAggregateOutputType | null
    _min: HubMinAggregateOutputType | null
    _max: HubMaxAggregateOutputType | null
  }

  type GetHubGroupByPayload<T extends HubGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HubGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HubGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HubGroupByOutputType[P]>
            : GetScalarType<T[P], HubGroupByOutputType[P]>
        }
      >
    >


  export type HubSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    partId?: boolean
    position?: boolean
    spokeCount?: boolean
    overLocknutDistance?: boolean
    flangeDiameterLeft?: boolean
    flangeDiameterRight?: boolean
    flangeLeftToCenter?: boolean
    flangeRightToCenter?: boolean
    sflangeLeftToOLN?: boolean
    flangeRightToOLN?: boolean
    spokeHoleDiameter?: boolean
    part?: boolean | Hub$partArgs<ExtArgs>
    wheels?: boolean | Hub$wheelsArgs<ExtArgs>
    _count?: boolean | HubCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hub"]>

  export type HubSelectScalar = {
    id?: boolean
    partId?: boolean
    position?: boolean
    spokeCount?: boolean
    overLocknutDistance?: boolean
    flangeDiameterLeft?: boolean
    flangeDiameterRight?: boolean
    flangeLeftToCenter?: boolean
    flangeRightToCenter?: boolean
    sflangeLeftToOLN?: boolean
    flangeRightToOLN?: boolean
    spokeHoleDiameter?: boolean
  }

  export type HubInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    part?: boolean | Hub$partArgs<ExtArgs>
    wheels?: boolean | Hub$wheelsArgs<ExtArgs>
    _count?: boolean | HubCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $HubPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hub"
    objects: {
      part: Prisma.$PartPayload<ExtArgs> | null
      wheels: Prisma.$WheelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      partId: number | null
      position: string | null
      spokeCount: number | null
      overLocknutDistance: number | null
      flangeDiameterLeft: number | null
      flangeDiameterRight: number | null
      flangeLeftToCenter: number | null
      flangeRightToCenter: number | null
      sflangeLeftToOLN: number | null
      flangeRightToOLN: number | null
      spokeHoleDiameter: number | null
    }, ExtArgs["result"]["hub"]>
    composites: {}
  }


  type HubGetPayload<S extends boolean | null | undefined | HubDefaultArgs> = $Result.GetResult<Prisma.$HubPayload, S>

  type HubCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HubFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: HubCountAggregateInputType | true
    }

  export interface HubDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hub'], meta: { name: 'Hub' } }
    /**
     * Find zero or one Hub that matches the filter.
     * @param {HubFindUniqueArgs} args - Arguments to find a Hub
     * @example
     * // Get one Hub
     * const hub = await prisma.hub.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HubFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, HubFindUniqueArgs<ExtArgs>>
    ): Prisma__HubClient<$Result.GetResult<Prisma.$HubPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Hub that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HubFindUniqueOrThrowArgs} args - Arguments to find a Hub
     * @example
     * // Get one Hub
     * const hub = await prisma.hub.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HubFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HubFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__HubClient<$Result.GetResult<Prisma.$HubPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Hub that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HubFindFirstArgs} args - Arguments to find a Hub
     * @example
     * // Get one Hub
     * const hub = await prisma.hub.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HubFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, HubFindFirstArgs<ExtArgs>>
    ): Prisma__HubClient<$Result.GetResult<Prisma.$HubPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Hub that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HubFindFirstOrThrowArgs} args - Arguments to find a Hub
     * @example
     * // Get one Hub
     * const hub = await prisma.hub.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HubFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HubFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__HubClient<$Result.GetResult<Prisma.$HubPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Hubs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HubFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hubs
     * const hubs = await prisma.hub.findMany()
     * 
     * // Get first 10 Hubs
     * const hubs = await prisma.hub.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hubWithIdOnly = await prisma.hub.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HubFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HubFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HubPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Hub.
     * @param {HubCreateArgs} args - Arguments to create a Hub.
     * @example
     * // Create one Hub
     * const Hub = await prisma.hub.create({
     *   data: {
     *     // ... data to create a Hub
     *   }
     * })
     * 
    **/
    create<T extends HubCreateArgs<ExtArgs>>(
      args: SelectSubset<T, HubCreateArgs<ExtArgs>>
    ): Prisma__HubClient<$Result.GetResult<Prisma.$HubPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Hub.
     * @param {HubDeleteArgs} args - Arguments to delete one Hub.
     * @example
     * // Delete one Hub
     * const Hub = await prisma.hub.delete({
     *   where: {
     *     // ... filter to delete one Hub
     *   }
     * })
     * 
    **/
    delete<T extends HubDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, HubDeleteArgs<ExtArgs>>
    ): Prisma__HubClient<$Result.GetResult<Prisma.$HubPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Hub.
     * @param {HubUpdateArgs} args - Arguments to update one Hub.
     * @example
     * // Update one Hub
     * const hub = await prisma.hub.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HubUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, HubUpdateArgs<ExtArgs>>
    ): Prisma__HubClient<$Result.GetResult<Prisma.$HubPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Hubs.
     * @param {HubDeleteManyArgs} args - Arguments to filter Hubs to delete.
     * @example
     * // Delete a few Hubs
     * const { count } = await prisma.hub.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HubDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HubDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HubUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hubs
     * const hub = await prisma.hub.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HubUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, HubUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hub.
     * @param {HubUpsertArgs} args - Arguments to update or create a Hub.
     * @example
     * // Update or create a Hub
     * const hub = await prisma.hub.upsert({
     *   create: {
     *     // ... data to create a Hub
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hub we want to update
     *   }
     * })
    **/
    upsert<T extends HubUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, HubUpsertArgs<ExtArgs>>
    ): Prisma__HubClient<$Result.GetResult<Prisma.$HubPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Hubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HubCountArgs} args - Arguments to filter Hubs to count.
     * @example
     * // Count the number of Hubs
     * const count = await prisma.hub.count({
     *   where: {
     *     // ... the filter for the Hubs we want to count
     *   }
     * })
    **/
    count<T extends HubCountArgs>(
      args?: Subset<T, HubCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HubCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hub.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HubAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HubAggregateArgs>(args: Subset<T, HubAggregateArgs>): Prisma.PrismaPromise<GetHubAggregateType<T>>

    /**
     * Group by Hub.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HubGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HubGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HubGroupByArgs['orderBy'] }
        : { orderBy?: HubGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HubGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHubGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hub model
   */
  readonly fields: HubFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hub.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HubClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    part<T extends Hub$partArgs<ExtArgs> = {}>(args?: Subset<T, Hub$partArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    wheels<T extends Hub$wheelsArgs<ExtArgs> = {}>(args?: Subset<T, Hub$wheelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WheelPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Hub model
   */ 
  interface HubFieldRefs {
    readonly id: FieldRef<"Hub", 'Int'>
    readonly partId: FieldRef<"Hub", 'Int'>
    readonly position: FieldRef<"Hub", 'String'>
    readonly spokeCount: FieldRef<"Hub", 'Int'>
    readonly overLocknutDistance: FieldRef<"Hub", 'Float'>
    readonly flangeDiameterLeft: FieldRef<"Hub", 'Float'>
    readonly flangeDiameterRight: FieldRef<"Hub", 'Float'>
    readonly flangeLeftToCenter: FieldRef<"Hub", 'Float'>
    readonly flangeRightToCenter: FieldRef<"Hub", 'Float'>
    readonly sflangeLeftToOLN: FieldRef<"Hub", 'Float'>
    readonly flangeRightToOLN: FieldRef<"Hub", 'Float'>
    readonly spokeHoleDiameter: FieldRef<"Hub", 'Float'>
  }
    

  // Custom InputTypes

  /**
   * Hub findUnique
   */
  export type HubFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hub
     */
    select?: HubSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HubInclude<ExtArgs> | null
    /**
     * Filter, which Hub to fetch.
     */
    where: HubWhereUniqueInput
  }


  /**
   * Hub findUniqueOrThrow
   */
  export type HubFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hub
     */
    select?: HubSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HubInclude<ExtArgs> | null
    /**
     * Filter, which Hub to fetch.
     */
    where: HubWhereUniqueInput
  }


  /**
   * Hub findFirst
   */
  export type HubFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hub
     */
    select?: HubSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HubInclude<ExtArgs> | null
    /**
     * Filter, which Hub to fetch.
     */
    where?: HubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hubs to fetch.
     */
    orderBy?: HubOrderByWithRelationInput | HubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hubs.
     */
    cursor?: HubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hubs.
     */
    distinct?: HubScalarFieldEnum | HubScalarFieldEnum[]
  }


  /**
   * Hub findFirstOrThrow
   */
  export type HubFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hub
     */
    select?: HubSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HubInclude<ExtArgs> | null
    /**
     * Filter, which Hub to fetch.
     */
    where?: HubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hubs to fetch.
     */
    orderBy?: HubOrderByWithRelationInput | HubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hubs.
     */
    cursor?: HubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hubs.
     */
    distinct?: HubScalarFieldEnum | HubScalarFieldEnum[]
  }


  /**
   * Hub findMany
   */
  export type HubFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hub
     */
    select?: HubSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HubInclude<ExtArgs> | null
    /**
     * Filter, which Hubs to fetch.
     */
    where?: HubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hubs to fetch.
     */
    orderBy?: HubOrderByWithRelationInput | HubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hubs.
     */
    cursor?: HubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hubs.
     */
    skip?: number
    distinct?: HubScalarFieldEnum | HubScalarFieldEnum[]
  }


  /**
   * Hub create
   */
  export type HubCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hub
     */
    select?: HubSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HubInclude<ExtArgs> | null
    /**
     * The data needed to create a Hub.
     */
    data?: XOR<HubCreateInput, HubUncheckedCreateInput>
  }


  /**
   * Hub update
   */
  export type HubUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hub
     */
    select?: HubSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HubInclude<ExtArgs> | null
    /**
     * The data needed to update a Hub.
     */
    data: XOR<HubUpdateInput, HubUncheckedUpdateInput>
    /**
     * Choose, which Hub to update.
     */
    where: HubWhereUniqueInput
  }


  /**
   * Hub updateMany
   */
  export type HubUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hubs.
     */
    data: XOR<HubUpdateManyMutationInput, HubUncheckedUpdateManyInput>
    /**
     * Filter which Hubs to update
     */
    where?: HubWhereInput
  }


  /**
   * Hub upsert
   */
  export type HubUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hub
     */
    select?: HubSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HubInclude<ExtArgs> | null
    /**
     * The filter to search for the Hub to update in case it exists.
     */
    where: HubWhereUniqueInput
    /**
     * In case the Hub found by the `where` argument doesn't exist, create a new Hub with this data.
     */
    create: XOR<HubCreateInput, HubUncheckedCreateInput>
    /**
     * In case the Hub was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HubUpdateInput, HubUncheckedUpdateInput>
  }


  /**
   * Hub delete
   */
  export type HubDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hub
     */
    select?: HubSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HubInclude<ExtArgs> | null
    /**
     * Filter which Hub to delete.
     */
    where: HubWhereUniqueInput
  }


  /**
   * Hub deleteMany
   */
  export type HubDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hubs to delete
     */
    where?: HubWhereInput
  }


  /**
   * Hub.part
   */
  export type Hub$partArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartInclude<ExtArgs> | null
    where?: PartWhereInput
  }


  /**
   * Hub.wheels
   */
  export type Hub$wheelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wheel
     */
    select?: WheelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WheelInclude<ExtArgs> | null
    where?: WheelWhereInput
    orderBy?: WheelOrderByWithRelationInput | WheelOrderByWithRelationInput[]
    cursor?: WheelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WheelScalarFieldEnum | WheelScalarFieldEnum[]
  }


  /**
   * Hub without action
   */
  export type HubDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hub
     */
    select?: HubSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HubInclude<ExtArgs> | null
  }



  /**
   * Model Rim
   */

  export type AggregateRim = {
    _count: RimCountAggregateOutputType | null
    _avg: RimAvgAggregateOutputType | null
    _sum: RimSumAggregateOutputType | null
    _min: RimMinAggregateOutputType | null
    _max: RimMaxAggregateOutputType | null
  }

  export type RimAvgAggregateOutputType = {
    id: number | null
    partId: number | null
    specEffectiveDiameter: number | null
    specWidthInternal: number | null
    specWidthExternal: number | null
    specSectionHeight: number | null
  }

  export type RimSumAggregateOutputType = {
    id: number | null
    partId: number | null
    specEffectiveDiameter: number | null
    specWidthInternal: number | null
    specWidthExternal: number | null
    specSectionHeight: number | null
  }

  export type RimMinAggregateOutputType = {
    id: number | null
    partId: number | null
    specEffectiveDiameter: number | null
    specWidthInternal: number | null
    specWidthExternal: number | null
    specSectionHeight: number | null
  }

  export type RimMaxAggregateOutputType = {
    id: number | null
    partId: number | null
    specEffectiveDiameter: number | null
    specWidthInternal: number | null
    specWidthExternal: number | null
    specSectionHeight: number | null
  }

  export type RimCountAggregateOutputType = {
    id: number
    partId: number
    specEffectiveDiameter: number
    specWidthInternal: number
    specWidthExternal: number
    specSectionHeight: number
    _all: number
  }


  export type RimAvgAggregateInputType = {
    id?: true
    partId?: true
    specEffectiveDiameter?: true
    specWidthInternal?: true
    specWidthExternal?: true
    specSectionHeight?: true
  }

  export type RimSumAggregateInputType = {
    id?: true
    partId?: true
    specEffectiveDiameter?: true
    specWidthInternal?: true
    specWidthExternal?: true
    specSectionHeight?: true
  }

  export type RimMinAggregateInputType = {
    id?: true
    partId?: true
    specEffectiveDiameter?: true
    specWidthInternal?: true
    specWidthExternal?: true
    specSectionHeight?: true
  }

  export type RimMaxAggregateInputType = {
    id?: true
    partId?: true
    specEffectiveDiameter?: true
    specWidthInternal?: true
    specWidthExternal?: true
    specSectionHeight?: true
  }

  export type RimCountAggregateInputType = {
    id?: true
    partId?: true
    specEffectiveDiameter?: true
    specWidthInternal?: true
    specWidthExternal?: true
    specSectionHeight?: true
    _all?: true
  }

  export type RimAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rim to aggregate.
     */
    where?: RimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rims to fetch.
     */
    orderBy?: RimOrderByWithRelationInput | RimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rims
    **/
    _count?: true | RimCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RimAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RimSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RimMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RimMaxAggregateInputType
  }

  export type GetRimAggregateType<T extends RimAggregateArgs> = {
        [P in keyof T & keyof AggregateRim]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRim[P]>
      : GetScalarType<T[P], AggregateRim[P]>
  }




  export type RimGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RimWhereInput
    orderBy?: RimOrderByWithAggregationInput | RimOrderByWithAggregationInput[]
    by: RimScalarFieldEnum[] | RimScalarFieldEnum
    having?: RimScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RimCountAggregateInputType | true
    _avg?: RimAvgAggregateInputType
    _sum?: RimSumAggregateInputType
    _min?: RimMinAggregateInputType
    _max?: RimMaxAggregateInputType
  }

  export type RimGroupByOutputType = {
    id: number
    partId: number | null
    specEffectiveDiameter: number | null
    specWidthInternal: number | null
    specWidthExternal: number | null
    specSectionHeight: number | null
    _count: RimCountAggregateOutputType | null
    _avg: RimAvgAggregateOutputType | null
    _sum: RimSumAggregateOutputType | null
    _min: RimMinAggregateOutputType | null
    _max: RimMaxAggregateOutputType | null
  }

  type GetRimGroupByPayload<T extends RimGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RimGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RimGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RimGroupByOutputType[P]>
            : GetScalarType<T[P], RimGroupByOutputType[P]>
        }
      >
    >


  export type RimSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    partId?: boolean
    specEffectiveDiameter?: boolean
    specWidthInternal?: boolean
    specWidthExternal?: boolean
    specSectionHeight?: boolean
    part?: boolean | Rim$partArgs<ExtArgs>
    wheels?: boolean | Rim$wheelsArgs<ExtArgs>
    _count?: boolean | RimCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rim"]>

  export type RimSelectScalar = {
    id?: boolean
    partId?: boolean
    specEffectiveDiameter?: boolean
    specWidthInternal?: boolean
    specWidthExternal?: boolean
    specSectionHeight?: boolean
  }

  export type RimInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    part?: boolean | Rim$partArgs<ExtArgs>
    wheels?: boolean | Rim$wheelsArgs<ExtArgs>
    _count?: boolean | RimCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $RimPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rim"
    objects: {
      part: Prisma.$PartPayload<ExtArgs> | null
      wheels: Prisma.$WheelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      partId: number | null
      specEffectiveDiameter: number | null
      specWidthInternal: number | null
      specWidthExternal: number | null
      specSectionHeight: number | null
    }, ExtArgs["result"]["rim"]>
    composites: {}
  }


  type RimGetPayload<S extends boolean | null | undefined | RimDefaultArgs> = $Result.GetResult<Prisma.$RimPayload, S>

  type RimCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RimFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: RimCountAggregateInputType | true
    }

  export interface RimDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rim'], meta: { name: 'Rim' } }
    /**
     * Find zero or one Rim that matches the filter.
     * @param {RimFindUniqueArgs} args - Arguments to find a Rim
     * @example
     * // Get one Rim
     * const rim = await prisma.rim.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RimFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RimFindUniqueArgs<ExtArgs>>
    ): Prisma__RimClient<$Result.GetResult<Prisma.$RimPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Rim that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RimFindUniqueOrThrowArgs} args - Arguments to find a Rim
     * @example
     * // Get one Rim
     * const rim = await prisma.rim.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RimFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RimFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RimClient<$Result.GetResult<Prisma.$RimPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Rim that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RimFindFirstArgs} args - Arguments to find a Rim
     * @example
     * // Get one Rim
     * const rim = await prisma.rim.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RimFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RimFindFirstArgs<ExtArgs>>
    ): Prisma__RimClient<$Result.GetResult<Prisma.$RimPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Rim that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RimFindFirstOrThrowArgs} args - Arguments to find a Rim
     * @example
     * // Get one Rim
     * const rim = await prisma.rim.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RimFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RimFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RimClient<$Result.GetResult<Prisma.$RimPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Rims that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RimFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rims
     * const rims = await prisma.rim.findMany()
     * 
     * // Get first 10 Rims
     * const rims = await prisma.rim.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rimWithIdOnly = await prisma.rim.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RimFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RimFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RimPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Rim.
     * @param {RimCreateArgs} args - Arguments to create a Rim.
     * @example
     * // Create one Rim
     * const Rim = await prisma.rim.create({
     *   data: {
     *     // ... data to create a Rim
     *   }
     * })
     * 
    **/
    create<T extends RimCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RimCreateArgs<ExtArgs>>
    ): Prisma__RimClient<$Result.GetResult<Prisma.$RimPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Rim.
     * @param {RimDeleteArgs} args - Arguments to delete one Rim.
     * @example
     * // Delete one Rim
     * const Rim = await prisma.rim.delete({
     *   where: {
     *     // ... filter to delete one Rim
     *   }
     * })
     * 
    **/
    delete<T extends RimDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RimDeleteArgs<ExtArgs>>
    ): Prisma__RimClient<$Result.GetResult<Prisma.$RimPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Rim.
     * @param {RimUpdateArgs} args - Arguments to update one Rim.
     * @example
     * // Update one Rim
     * const rim = await prisma.rim.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RimUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RimUpdateArgs<ExtArgs>>
    ): Prisma__RimClient<$Result.GetResult<Prisma.$RimPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Rims.
     * @param {RimDeleteManyArgs} args - Arguments to filter Rims to delete.
     * @example
     * // Delete a few Rims
     * const { count } = await prisma.rim.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RimDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RimDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RimUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rims
     * const rim = await prisma.rim.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RimUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RimUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rim.
     * @param {RimUpsertArgs} args - Arguments to update or create a Rim.
     * @example
     * // Update or create a Rim
     * const rim = await prisma.rim.upsert({
     *   create: {
     *     // ... data to create a Rim
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rim we want to update
     *   }
     * })
    **/
    upsert<T extends RimUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RimUpsertArgs<ExtArgs>>
    ): Prisma__RimClient<$Result.GetResult<Prisma.$RimPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Rims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RimCountArgs} args - Arguments to filter Rims to count.
     * @example
     * // Count the number of Rims
     * const count = await prisma.rim.count({
     *   where: {
     *     // ... the filter for the Rims we want to count
     *   }
     * })
    **/
    count<T extends RimCountArgs>(
      args?: Subset<T, RimCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RimCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RimAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RimAggregateArgs>(args: Subset<T, RimAggregateArgs>): Prisma.PrismaPromise<GetRimAggregateType<T>>

    /**
     * Group by Rim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RimGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RimGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RimGroupByArgs['orderBy'] }
        : { orderBy?: RimGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RimGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRimGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rim model
   */
  readonly fields: RimFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rim.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RimClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    part<T extends Rim$partArgs<ExtArgs> = {}>(args?: Subset<T, Rim$partArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    wheels<T extends Rim$wheelsArgs<ExtArgs> = {}>(args?: Subset<T, Rim$wheelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WheelPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Rim model
   */ 
  interface RimFieldRefs {
    readonly id: FieldRef<"Rim", 'Int'>
    readonly partId: FieldRef<"Rim", 'Int'>
    readonly specEffectiveDiameter: FieldRef<"Rim", 'Float'>
    readonly specWidthInternal: FieldRef<"Rim", 'Float'>
    readonly specWidthExternal: FieldRef<"Rim", 'Float'>
    readonly specSectionHeight: FieldRef<"Rim", 'Float'>
  }
    

  // Custom InputTypes

  /**
   * Rim findUnique
   */
  export type RimFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rim
     */
    select?: RimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RimInclude<ExtArgs> | null
    /**
     * Filter, which Rim to fetch.
     */
    where: RimWhereUniqueInput
  }


  /**
   * Rim findUniqueOrThrow
   */
  export type RimFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rim
     */
    select?: RimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RimInclude<ExtArgs> | null
    /**
     * Filter, which Rim to fetch.
     */
    where: RimWhereUniqueInput
  }


  /**
   * Rim findFirst
   */
  export type RimFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rim
     */
    select?: RimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RimInclude<ExtArgs> | null
    /**
     * Filter, which Rim to fetch.
     */
    where?: RimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rims to fetch.
     */
    orderBy?: RimOrderByWithRelationInput | RimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rims.
     */
    cursor?: RimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rims.
     */
    distinct?: RimScalarFieldEnum | RimScalarFieldEnum[]
  }


  /**
   * Rim findFirstOrThrow
   */
  export type RimFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rim
     */
    select?: RimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RimInclude<ExtArgs> | null
    /**
     * Filter, which Rim to fetch.
     */
    where?: RimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rims to fetch.
     */
    orderBy?: RimOrderByWithRelationInput | RimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rims.
     */
    cursor?: RimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rims.
     */
    distinct?: RimScalarFieldEnum | RimScalarFieldEnum[]
  }


  /**
   * Rim findMany
   */
  export type RimFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rim
     */
    select?: RimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RimInclude<ExtArgs> | null
    /**
     * Filter, which Rims to fetch.
     */
    where?: RimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rims to fetch.
     */
    orderBy?: RimOrderByWithRelationInput | RimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rims.
     */
    cursor?: RimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rims.
     */
    skip?: number
    distinct?: RimScalarFieldEnum | RimScalarFieldEnum[]
  }


  /**
   * Rim create
   */
  export type RimCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rim
     */
    select?: RimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RimInclude<ExtArgs> | null
    /**
     * The data needed to create a Rim.
     */
    data?: XOR<RimCreateInput, RimUncheckedCreateInput>
  }


  /**
   * Rim update
   */
  export type RimUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rim
     */
    select?: RimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RimInclude<ExtArgs> | null
    /**
     * The data needed to update a Rim.
     */
    data: XOR<RimUpdateInput, RimUncheckedUpdateInput>
    /**
     * Choose, which Rim to update.
     */
    where: RimWhereUniqueInput
  }


  /**
   * Rim updateMany
   */
  export type RimUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rims.
     */
    data: XOR<RimUpdateManyMutationInput, RimUncheckedUpdateManyInput>
    /**
     * Filter which Rims to update
     */
    where?: RimWhereInput
  }


  /**
   * Rim upsert
   */
  export type RimUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rim
     */
    select?: RimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RimInclude<ExtArgs> | null
    /**
     * The filter to search for the Rim to update in case it exists.
     */
    where: RimWhereUniqueInput
    /**
     * In case the Rim found by the `where` argument doesn't exist, create a new Rim with this data.
     */
    create: XOR<RimCreateInput, RimUncheckedCreateInput>
    /**
     * In case the Rim was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RimUpdateInput, RimUncheckedUpdateInput>
  }


  /**
   * Rim delete
   */
  export type RimDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rim
     */
    select?: RimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RimInclude<ExtArgs> | null
    /**
     * Filter which Rim to delete.
     */
    where: RimWhereUniqueInput
  }


  /**
   * Rim deleteMany
   */
  export type RimDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rims to delete
     */
    where?: RimWhereInput
  }


  /**
   * Rim.part
   */
  export type Rim$partArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartInclude<ExtArgs> | null
    where?: PartWhereInput
  }


  /**
   * Rim.wheels
   */
  export type Rim$wheelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wheel
     */
    select?: WheelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WheelInclude<ExtArgs> | null
    where?: WheelWhereInput
    orderBy?: WheelOrderByWithRelationInput | WheelOrderByWithRelationInput[]
    cursor?: WheelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WheelScalarFieldEnum | WheelScalarFieldEnum[]
  }


  /**
   * Rim without action
   */
  export type RimDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rim
     */
    select?: RimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RimInclude<ExtArgs> | null
  }



  /**
   * Model Cogset
   */

  export type AggregateCogset = {
    _count: CogsetCountAggregateOutputType | null
    _avg: CogsetAvgAggregateOutputType | null
    _sum: CogsetSumAggregateOutputType | null
    _min: CogsetMinAggregateOutputType | null
    _max: CogsetMaxAggregateOutputType | null
  }

  export type CogsetAvgAggregateOutputType = {
    id: number | null
    partId: number | null
  }

  export type CogsetSumAggregateOutputType = {
    id: number | null
    partId: number | null
  }

  export type CogsetMinAggregateOutputType = {
    id: number | null
    type: string | null
    cogs: string | null
    notes: string | null
    partId: number | null
  }

  export type CogsetMaxAggregateOutputType = {
    id: number | null
    type: string | null
    cogs: string | null
    notes: string | null
    partId: number | null
  }

  export type CogsetCountAggregateOutputType = {
    id: number
    type: number
    cogs: number
    notes: number
    partId: number
    _all: number
  }


  export type CogsetAvgAggregateInputType = {
    id?: true
    partId?: true
  }

  export type CogsetSumAggregateInputType = {
    id?: true
    partId?: true
  }

  export type CogsetMinAggregateInputType = {
    id?: true
    type?: true
    cogs?: true
    notes?: true
    partId?: true
  }

  export type CogsetMaxAggregateInputType = {
    id?: true
    type?: true
    cogs?: true
    notes?: true
    partId?: true
  }

  export type CogsetCountAggregateInputType = {
    id?: true
    type?: true
    cogs?: true
    notes?: true
    partId?: true
    _all?: true
  }

  export type CogsetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cogset to aggregate.
     */
    where?: CogsetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cogsets to fetch.
     */
    orderBy?: CogsetOrderByWithRelationInput | CogsetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CogsetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cogsets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cogsets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cogsets
    **/
    _count?: true | CogsetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CogsetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CogsetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CogsetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CogsetMaxAggregateInputType
  }

  export type GetCogsetAggregateType<T extends CogsetAggregateArgs> = {
        [P in keyof T & keyof AggregateCogset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCogset[P]>
      : GetScalarType<T[P], AggregateCogset[P]>
  }




  export type CogsetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CogsetWhereInput
    orderBy?: CogsetOrderByWithAggregationInput | CogsetOrderByWithAggregationInput[]
    by: CogsetScalarFieldEnum[] | CogsetScalarFieldEnum
    having?: CogsetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CogsetCountAggregateInputType | true
    _avg?: CogsetAvgAggregateInputType
    _sum?: CogsetSumAggregateInputType
    _min?: CogsetMinAggregateInputType
    _max?: CogsetMaxAggregateInputType
  }

  export type CogsetGroupByOutputType = {
    id: number
    type: string | null
    cogs: string | null
    notes: string | null
    partId: number | null
    _count: CogsetCountAggregateOutputType | null
    _avg: CogsetAvgAggregateOutputType | null
    _sum: CogsetSumAggregateOutputType | null
    _min: CogsetMinAggregateOutputType | null
    _max: CogsetMaxAggregateOutputType | null
  }

  type GetCogsetGroupByPayload<T extends CogsetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CogsetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CogsetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CogsetGroupByOutputType[P]>
            : GetScalarType<T[P], CogsetGroupByOutputType[P]>
        }
      >
    >


  export type CogsetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    cogs?: boolean
    notes?: boolean
    partId?: boolean
    part?: boolean | Cogset$partArgs<ExtArgs>
  }, ExtArgs["result"]["cogset"]>

  export type CogsetSelectScalar = {
    id?: boolean
    type?: boolean
    cogs?: boolean
    notes?: boolean
    partId?: boolean
  }

  export type CogsetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    part?: boolean | Cogset$partArgs<ExtArgs>
  }


  export type $CogsetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cogset"
    objects: {
      part: Prisma.$PartPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string | null
      cogs: string | null
      notes: string | null
      partId: number | null
    }, ExtArgs["result"]["cogset"]>
    composites: {}
  }


  type CogsetGetPayload<S extends boolean | null | undefined | CogsetDefaultArgs> = $Result.GetResult<Prisma.$CogsetPayload, S>

  type CogsetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CogsetFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CogsetCountAggregateInputType | true
    }

  export interface CogsetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cogset'], meta: { name: 'Cogset' } }
    /**
     * Find zero or one Cogset that matches the filter.
     * @param {CogsetFindUniqueArgs} args - Arguments to find a Cogset
     * @example
     * // Get one Cogset
     * const cogset = await prisma.cogset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CogsetFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CogsetFindUniqueArgs<ExtArgs>>
    ): Prisma__CogsetClient<$Result.GetResult<Prisma.$CogsetPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Cogset that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CogsetFindUniqueOrThrowArgs} args - Arguments to find a Cogset
     * @example
     * // Get one Cogset
     * const cogset = await prisma.cogset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CogsetFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CogsetFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CogsetClient<$Result.GetResult<Prisma.$CogsetPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Cogset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CogsetFindFirstArgs} args - Arguments to find a Cogset
     * @example
     * // Get one Cogset
     * const cogset = await prisma.cogset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CogsetFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CogsetFindFirstArgs<ExtArgs>>
    ): Prisma__CogsetClient<$Result.GetResult<Prisma.$CogsetPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Cogset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CogsetFindFirstOrThrowArgs} args - Arguments to find a Cogset
     * @example
     * // Get one Cogset
     * const cogset = await prisma.cogset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CogsetFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CogsetFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CogsetClient<$Result.GetResult<Prisma.$CogsetPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Cogsets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CogsetFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cogsets
     * const cogsets = await prisma.cogset.findMany()
     * 
     * // Get first 10 Cogsets
     * const cogsets = await prisma.cogset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cogsetWithIdOnly = await prisma.cogset.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CogsetFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CogsetFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CogsetPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Cogset.
     * @param {CogsetCreateArgs} args - Arguments to create a Cogset.
     * @example
     * // Create one Cogset
     * const Cogset = await prisma.cogset.create({
     *   data: {
     *     // ... data to create a Cogset
     *   }
     * })
     * 
    **/
    create<T extends CogsetCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CogsetCreateArgs<ExtArgs>>
    ): Prisma__CogsetClient<$Result.GetResult<Prisma.$CogsetPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Cogset.
     * @param {CogsetDeleteArgs} args - Arguments to delete one Cogset.
     * @example
     * // Delete one Cogset
     * const Cogset = await prisma.cogset.delete({
     *   where: {
     *     // ... filter to delete one Cogset
     *   }
     * })
     * 
    **/
    delete<T extends CogsetDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CogsetDeleteArgs<ExtArgs>>
    ): Prisma__CogsetClient<$Result.GetResult<Prisma.$CogsetPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Cogset.
     * @param {CogsetUpdateArgs} args - Arguments to update one Cogset.
     * @example
     * // Update one Cogset
     * const cogset = await prisma.cogset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CogsetUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CogsetUpdateArgs<ExtArgs>>
    ): Prisma__CogsetClient<$Result.GetResult<Prisma.$CogsetPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Cogsets.
     * @param {CogsetDeleteManyArgs} args - Arguments to filter Cogsets to delete.
     * @example
     * // Delete a few Cogsets
     * const { count } = await prisma.cogset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CogsetDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CogsetDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cogsets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CogsetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cogsets
     * const cogset = await prisma.cogset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CogsetUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CogsetUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cogset.
     * @param {CogsetUpsertArgs} args - Arguments to update or create a Cogset.
     * @example
     * // Update or create a Cogset
     * const cogset = await prisma.cogset.upsert({
     *   create: {
     *     // ... data to create a Cogset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cogset we want to update
     *   }
     * })
    **/
    upsert<T extends CogsetUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CogsetUpsertArgs<ExtArgs>>
    ): Prisma__CogsetClient<$Result.GetResult<Prisma.$CogsetPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Cogsets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CogsetCountArgs} args - Arguments to filter Cogsets to count.
     * @example
     * // Count the number of Cogsets
     * const count = await prisma.cogset.count({
     *   where: {
     *     // ... the filter for the Cogsets we want to count
     *   }
     * })
    **/
    count<T extends CogsetCountArgs>(
      args?: Subset<T, CogsetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CogsetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cogset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CogsetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CogsetAggregateArgs>(args: Subset<T, CogsetAggregateArgs>): Prisma.PrismaPromise<GetCogsetAggregateType<T>>

    /**
     * Group by Cogset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CogsetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CogsetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CogsetGroupByArgs['orderBy'] }
        : { orderBy?: CogsetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CogsetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCogsetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cogset model
   */
  readonly fields: CogsetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cogset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CogsetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    part<T extends Cogset$partArgs<ExtArgs> = {}>(args?: Subset<T, Cogset$partArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Cogset model
   */ 
  interface CogsetFieldRefs {
    readonly id: FieldRef<"Cogset", 'Int'>
    readonly type: FieldRef<"Cogset", 'String'>
    readonly cogs: FieldRef<"Cogset", 'String'>
    readonly notes: FieldRef<"Cogset", 'String'>
    readonly partId: FieldRef<"Cogset", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Cogset findUnique
   */
  export type CogsetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cogset
     */
    select?: CogsetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CogsetInclude<ExtArgs> | null
    /**
     * Filter, which Cogset to fetch.
     */
    where: CogsetWhereUniqueInput
  }


  /**
   * Cogset findUniqueOrThrow
   */
  export type CogsetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cogset
     */
    select?: CogsetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CogsetInclude<ExtArgs> | null
    /**
     * Filter, which Cogset to fetch.
     */
    where: CogsetWhereUniqueInput
  }


  /**
   * Cogset findFirst
   */
  export type CogsetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cogset
     */
    select?: CogsetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CogsetInclude<ExtArgs> | null
    /**
     * Filter, which Cogset to fetch.
     */
    where?: CogsetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cogsets to fetch.
     */
    orderBy?: CogsetOrderByWithRelationInput | CogsetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cogsets.
     */
    cursor?: CogsetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cogsets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cogsets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cogsets.
     */
    distinct?: CogsetScalarFieldEnum | CogsetScalarFieldEnum[]
  }


  /**
   * Cogset findFirstOrThrow
   */
  export type CogsetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cogset
     */
    select?: CogsetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CogsetInclude<ExtArgs> | null
    /**
     * Filter, which Cogset to fetch.
     */
    where?: CogsetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cogsets to fetch.
     */
    orderBy?: CogsetOrderByWithRelationInput | CogsetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cogsets.
     */
    cursor?: CogsetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cogsets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cogsets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cogsets.
     */
    distinct?: CogsetScalarFieldEnum | CogsetScalarFieldEnum[]
  }


  /**
   * Cogset findMany
   */
  export type CogsetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cogset
     */
    select?: CogsetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CogsetInclude<ExtArgs> | null
    /**
     * Filter, which Cogsets to fetch.
     */
    where?: CogsetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cogsets to fetch.
     */
    orderBy?: CogsetOrderByWithRelationInput | CogsetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cogsets.
     */
    cursor?: CogsetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cogsets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cogsets.
     */
    skip?: number
    distinct?: CogsetScalarFieldEnum | CogsetScalarFieldEnum[]
  }


  /**
   * Cogset create
   */
  export type CogsetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cogset
     */
    select?: CogsetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CogsetInclude<ExtArgs> | null
    /**
     * The data needed to create a Cogset.
     */
    data?: XOR<CogsetCreateInput, CogsetUncheckedCreateInput>
  }


  /**
   * Cogset update
   */
  export type CogsetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cogset
     */
    select?: CogsetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CogsetInclude<ExtArgs> | null
    /**
     * The data needed to update a Cogset.
     */
    data: XOR<CogsetUpdateInput, CogsetUncheckedUpdateInput>
    /**
     * Choose, which Cogset to update.
     */
    where: CogsetWhereUniqueInput
  }


  /**
   * Cogset updateMany
   */
  export type CogsetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cogsets.
     */
    data: XOR<CogsetUpdateManyMutationInput, CogsetUncheckedUpdateManyInput>
    /**
     * Filter which Cogsets to update
     */
    where?: CogsetWhereInput
  }


  /**
   * Cogset upsert
   */
  export type CogsetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cogset
     */
    select?: CogsetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CogsetInclude<ExtArgs> | null
    /**
     * The filter to search for the Cogset to update in case it exists.
     */
    where: CogsetWhereUniqueInput
    /**
     * In case the Cogset found by the `where` argument doesn't exist, create a new Cogset with this data.
     */
    create: XOR<CogsetCreateInput, CogsetUncheckedCreateInput>
    /**
     * In case the Cogset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CogsetUpdateInput, CogsetUncheckedUpdateInput>
  }


  /**
   * Cogset delete
   */
  export type CogsetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cogset
     */
    select?: CogsetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CogsetInclude<ExtArgs> | null
    /**
     * Filter which Cogset to delete.
     */
    where: CogsetWhereUniqueInput
  }


  /**
   * Cogset deleteMany
   */
  export type CogsetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cogsets to delete
     */
    where?: CogsetWhereInput
  }


  /**
   * Cogset.part
   */
  export type Cogset$partArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartInclude<ExtArgs> | null
    where?: PartWhereInput
  }


  /**
   * Cogset without action
   */
  export type CogsetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cogset
     */
    select?: CogsetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CogsetInclude<ExtArgs> | null
  }



  /**
   * Model Wheel
   */

  export type AggregateWheel = {
    _count: WheelCountAggregateOutputType | null
    _avg: WheelAvgAggregateOutputType | null
    _sum: WheelSumAggregateOutputType | null
    _min: WheelMinAggregateOutputType | null
    _max: WheelMaxAggregateOutputType | null
  }

  export type WheelAvgAggregateOutputType = {
    id: number | null
    hubId: number | null
    rimId: number | null
  }

  export type WheelSumAggregateOutputType = {
    id: number | null
    hubId: number | null
    rimId: number | null
  }

  export type WheelMinAggregateOutputType = {
    id: number | null
    name: string | null
    notes: string | null
    hubId: number | null
    rimId: number | null
  }

  export type WheelMaxAggregateOutputType = {
    id: number | null
    name: string | null
    notes: string | null
    hubId: number | null
    rimId: number | null
  }

  export type WheelCountAggregateOutputType = {
    id: number
    name: number
    notes: number
    hubId: number
    rimId: number
    _all: number
  }


  export type WheelAvgAggregateInputType = {
    id?: true
    hubId?: true
    rimId?: true
  }

  export type WheelSumAggregateInputType = {
    id?: true
    hubId?: true
    rimId?: true
  }

  export type WheelMinAggregateInputType = {
    id?: true
    name?: true
    notes?: true
    hubId?: true
    rimId?: true
  }

  export type WheelMaxAggregateInputType = {
    id?: true
    name?: true
    notes?: true
    hubId?: true
    rimId?: true
  }

  export type WheelCountAggregateInputType = {
    id?: true
    name?: true
    notes?: true
    hubId?: true
    rimId?: true
    _all?: true
  }

  export type WheelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wheel to aggregate.
     */
    where?: WheelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wheels to fetch.
     */
    orderBy?: WheelOrderByWithRelationInput | WheelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WheelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wheels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wheels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Wheels
    **/
    _count?: true | WheelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WheelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WheelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WheelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WheelMaxAggregateInputType
  }

  export type GetWheelAggregateType<T extends WheelAggregateArgs> = {
        [P in keyof T & keyof AggregateWheel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWheel[P]>
      : GetScalarType<T[P], AggregateWheel[P]>
  }




  export type WheelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WheelWhereInput
    orderBy?: WheelOrderByWithAggregationInput | WheelOrderByWithAggregationInput[]
    by: WheelScalarFieldEnum[] | WheelScalarFieldEnum
    having?: WheelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WheelCountAggregateInputType | true
    _avg?: WheelAvgAggregateInputType
    _sum?: WheelSumAggregateInputType
    _min?: WheelMinAggregateInputType
    _max?: WheelMaxAggregateInputType
  }

  export type WheelGroupByOutputType = {
    id: number
    name: string | null
    notes: string | null
    hubId: number | null
    rimId: number | null
    _count: WheelCountAggregateOutputType | null
    _avg: WheelAvgAggregateOutputType | null
    _sum: WheelSumAggregateOutputType | null
    _min: WheelMinAggregateOutputType | null
    _max: WheelMaxAggregateOutputType | null
  }

  type GetWheelGroupByPayload<T extends WheelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WheelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WheelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WheelGroupByOutputType[P]>
            : GetScalarType<T[P], WheelGroupByOutputType[P]>
        }
      >
    >


  export type WheelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    notes?: boolean
    hubId?: boolean
    rimId?: boolean
    hub?: boolean | Wheel$hubArgs<ExtArgs>
    rim?: boolean | Wheel$rimArgs<ExtArgs>
    wheelsFoward?: boolean | Wheel$wheelsFowardArgs<ExtArgs>
    wheelsBack?: boolean | Wheel$wheelsBackArgs<ExtArgs>
    owners?: boolean | Wheel$ownersArgs<ExtArgs>
    _count?: boolean | WheelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wheel"]>

  export type WheelSelectScalar = {
    id?: boolean
    name?: boolean
    notes?: boolean
    hubId?: boolean
    rimId?: boolean
  }

  export type WheelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hub?: boolean | Wheel$hubArgs<ExtArgs>
    rim?: boolean | Wheel$rimArgs<ExtArgs>
    wheelsFoward?: boolean | Wheel$wheelsFowardArgs<ExtArgs>
    wheelsBack?: boolean | Wheel$wheelsBackArgs<ExtArgs>
    owners?: boolean | Wheel$ownersArgs<ExtArgs>
    _count?: boolean | WheelCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $WheelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Wheel"
    objects: {
      hub: Prisma.$HubPayload<ExtArgs> | null
      rim: Prisma.$RimPayload<ExtArgs> | null
      wheelsFoward: Prisma.$WheelsetPayload<ExtArgs>[]
      wheelsBack: Prisma.$WheelsetPayload<ExtArgs>[]
      owners: Prisma.$OwnershipPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      notes: string | null
      hubId: number | null
      rimId: number | null
    }, ExtArgs["result"]["wheel"]>
    composites: {}
  }


  type WheelGetPayload<S extends boolean | null | undefined | WheelDefaultArgs> = $Result.GetResult<Prisma.$WheelPayload, S>

  type WheelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WheelFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: WheelCountAggregateInputType | true
    }

  export interface WheelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Wheel'], meta: { name: 'Wheel' } }
    /**
     * Find zero or one Wheel that matches the filter.
     * @param {WheelFindUniqueArgs} args - Arguments to find a Wheel
     * @example
     * // Get one Wheel
     * const wheel = await prisma.wheel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WheelFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, WheelFindUniqueArgs<ExtArgs>>
    ): Prisma__WheelClient<$Result.GetResult<Prisma.$WheelPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Wheel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WheelFindUniqueOrThrowArgs} args - Arguments to find a Wheel
     * @example
     * // Get one Wheel
     * const wheel = await prisma.wheel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WheelFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WheelFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__WheelClient<$Result.GetResult<Prisma.$WheelPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Wheel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WheelFindFirstArgs} args - Arguments to find a Wheel
     * @example
     * // Get one Wheel
     * const wheel = await prisma.wheel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WheelFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, WheelFindFirstArgs<ExtArgs>>
    ): Prisma__WheelClient<$Result.GetResult<Prisma.$WheelPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Wheel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WheelFindFirstOrThrowArgs} args - Arguments to find a Wheel
     * @example
     * // Get one Wheel
     * const wheel = await prisma.wheel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WheelFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WheelFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__WheelClient<$Result.GetResult<Prisma.$WheelPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Wheels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WheelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wheels
     * const wheels = await prisma.wheel.findMany()
     * 
     * // Get first 10 Wheels
     * const wheels = await prisma.wheel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wheelWithIdOnly = await prisma.wheel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WheelFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WheelFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WheelPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Wheel.
     * @param {WheelCreateArgs} args - Arguments to create a Wheel.
     * @example
     * // Create one Wheel
     * const Wheel = await prisma.wheel.create({
     *   data: {
     *     // ... data to create a Wheel
     *   }
     * })
     * 
    **/
    create<T extends WheelCreateArgs<ExtArgs>>(
      args: SelectSubset<T, WheelCreateArgs<ExtArgs>>
    ): Prisma__WheelClient<$Result.GetResult<Prisma.$WheelPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Wheel.
     * @param {WheelDeleteArgs} args - Arguments to delete one Wheel.
     * @example
     * // Delete one Wheel
     * const Wheel = await prisma.wheel.delete({
     *   where: {
     *     // ... filter to delete one Wheel
     *   }
     * })
     * 
    **/
    delete<T extends WheelDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, WheelDeleteArgs<ExtArgs>>
    ): Prisma__WheelClient<$Result.GetResult<Prisma.$WheelPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Wheel.
     * @param {WheelUpdateArgs} args - Arguments to update one Wheel.
     * @example
     * // Update one Wheel
     * const wheel = await prisma.wheel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WheelUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, WheelUpdateArgs<ExtArgs>>
    ): Prisma__WheelClient<$Result.GetResult<Prisma.$WheelPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Wheels.
     * @param {WheelDeleteManyArgs} args - Arguments to filter Wheels to delete.
     * @example
     * // Delete a few Wheels
     * const { count } = await prisma.wheel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WheelDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WheelDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wheels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WheelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wheels
     * const wheel = await prisma.wheel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WheelUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, WheelUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Wheel.
     * @param {WheelUpsertArgs} args - Arguments to update or create a Wheel.
     * @example
     * // Update or create a Wheel
     * const wheel = await prisma.wheel.upsert({
     *   create: {
     *     // ... data to create a Wheel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wheel we want to update
     *   }
     * })
    **/
    upsert<T extends WheelUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, WheelUpsertArgs<ExtArgs>>
    ): Prisma__WheelClient<$Result.GetResult<Prisma.$WheelPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Wheels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WheelCountArgs} args - Arguments to filter Wheels to count.
     * @example
     * // Count the number of Wheels
     * const count = await prisma.wheel.count({
     *   where: {
     *     // ... the filter for the Wheels we want to count
     *   }
     * })
    **/
    count<T extends WheelCountArgs>(
      args?: Subset<T, WheelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WheelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wheel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WheelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WheelAggregateArgs>(args: Subset<T, WheelAggregateArgs>): Prisma.PrismaPromise<GetWheelAggregateType<T>>

    /**
     * Group by Wheel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WheelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WheelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WheelGroupByArgs['orderBy'] }
        : { orderBy?: WheelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WheelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWheelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Wheel model
   */
  readonly fields: WheelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Wheel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WheelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    hub<T extends Wheel$hubArgs<ExtArgs> = {}>(args?: Subset<T, Wheel$hubArgs<ExtArgs>>): Prisma__HubClient<$Result.GetResult<Prisma.$HubPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    rim<T extends Wheel$rimArgs<ExtArgs> = {}>(args?: Subset<T, Wheel$rimArgs<ExtArgs>>): Prisma__RimClient<$Result.GetResult<Prisma.$RimPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    wheelsFoward<T extends Wheel$wheelsFowardArgs<ExtArgs> = {}>(args?: Subset<T, Wheel$wheelsFowardArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WheelsetPayload<ExtArgs>, T, 'findMany'> | Null>;

    wheelsBack<T extends Wheel$wheelsBackArgs<ExtArgs> = {}>(args?: Subset<T, Wheel$wheelsBackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WheelsetPayload<ExtArgs>, T, 'findMany'> | Null>;

    owners<T extends Wheel$ownersArgs<ExtArgs> = {}>(args?: Subset<T, Wheel$ownersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnershipPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Wheel model
   */ 
  interface WheelFieldRefs {
    readonly id: FieldRef<"Wheel", 'Int'>
    readonly name: FieldRef<"Wheel", 'String'>
    readonly notes: FieldRef<"Wheel", 'String'>
    readonly hubId: FieldRef<"Wheel", 'Int'>
    readonly rimId: FieldRef<"Wheel", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Wheel findUnique
   */
  export type WheelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wheel
     */
    select?: WheelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WheelInclude<ExtArgs> | null
    /**
     * Filter, which Wheel to fetch.
     */
    where: WheelWhereUniqueInput
  }


  /**
   * Wheel findUniqueOrThrow
   */
  export type WheelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wheel
     */
    select?: WheelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WheelInclude<ExtArgs> | null
    /**
     * Filter, which Wheel to fetch.
     */
    where: WheelWhereUniqueInput
  }


  /**
   * Wheel findFirst
   */
  export type WheelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wheel
     */
    select?: WheelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WheelInclude<ExtArgs> | null
    /**
     * Filter, which Wheel to fetch.
     */
    where?: WheelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wheels to fetch.
     */
    orderBy?: WheelOrderByWithRelationInput | WheelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wheels.
     */
    cursor?: WheelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wheels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wheels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wheels.
     */
    distinct?: WheelScalarFieldEnum | WheelScalarFieldEnum[]
  }


  /**
   * Wheel findFirstOrThrow
   */
  export type WheelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wheel
     */
    select?: WheelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WheelInclude<ExtArgs> | null
    /**
     * Filter, which Wheel to fetch.
     */
    where?: WheelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wheels to fetch.
     */
    orderBy?: WheelOrderByWithRelationInput | WheelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wheels.
     */
    cursor?: WheelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wheels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wheels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wheels.
     */
    distinct?: WheelScalarFieldEnum | WheelScalarFieldEnum[]
  }


  /**
   * Wheel findMany
   */
  export type WheelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wheel
     */
    select?: WheelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WheelInclude<ExtArgs> | null
    /**
     * Filter, which Wheels to fetch.
     */
    where?: WheelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wheels to fetch.
     */
    orderBy?: WheelOrderByWithRelationInput | WheelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Wheels.
     */
    cursor?: WheelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wheels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wheels.
     */
    skip?: number
    distinct?: WheelScalarFieldEnum | WheelScalarFieldEnum[]
  }


  /**
   * Wheel create
   */
  export type WheelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wheel
     */
    select?: WheelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WheelInclude<ExtArgs> | null
    /**
     * The data needed to create a Wheel.
     */
    data?: XOR<WheelCreateInput, WheelUncheckedCreateInput>
  }


  /**
   * Wheel update
   */
  export type WheelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wheel
     */
    select?: WheelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WheelInclude<ExtArgs> | null
    /**
     * The data needed to update a Wheel.
     */
    data: XOR<WheelUpdateInput, WheelUncheckedUpdateInput>
    /**
     * Choose, which Wheel to update.
     */
    where: WheelWhereUniqueInput
  }


  /**
   * Wheel updateMany
   */
  export type WheelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Wheels.
     */
    data: XOR<WheelUpdateManyMutationInput, WheelUncheckedUpdateManyInput>
    /**
     * Filter which Wheels to update
     */
    where?: WheelWhereInput
  }


  /**
   * Wheel upsert
   */
  export type WheelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wheel
     */
    select?: WheelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WheelInclude<ExtArgs> | null
    /**
     * The filter to search for the Wheel to update in case it exists.
     */
    where: WheelWhereUniqueInput
    /**
     * In case the Wheel found by the `where` argument doesn't exist, create a new Wheel with this data.
     */
    create: XOR<WheelCreateInput, WheelUncheckedCreateInput>
    /**
     * In case the Wheel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WheelUpdateInput, WheelUncheckedUpdateInput>
  }


  /**
   * Wheel delete
   */
  export type WheelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wheel
     */
    select?: WheelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WheelInclude<ExtArgs> | null
    /**
     * Filter which Wheel to delete.
     */
    where: WheelWhereUniqueInput
  }


  /**
   * Wheel deleteMany
   */
  export type WheelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wheels to delete
     */
    where?: WheelWhereInput
  }


  /**
   * Wheel.hub
   */
  export type Wheel$hubArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hub
     */
    select?: HubSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HubInclude<ExtArgs> | null
    where?: HubWhereInput
  }


  /**
   * Wheel.rim
   */
  export type Wheel$rimArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rim
     */
    select?: RimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RimInclude<ExtArgs> | null
    where?: RimWhereInput
  }


  /**
   * Wheel.wheelsFoward
   */
  export type Wheel$wheelsFowardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wheelset
     */
    select?: WheelsetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WheelsetInclude<ExtArgs> | null
    where?: WheelsetWhereInput
    orderBy?: WheelsetOrderByWithRelationInput | WheelsetOrderByWithRelationInput[]
    cursor?: WheelsetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WheelsetScalarFieldEnum | WheelsetScalarFieldEnum[]
  }


  /**
   * Wheel.wheelsBack
   */
  export type Wheel$wheelsBackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wheelset
     */
    select?: WheelsetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WheelsetInclude<ExtArgs> | null
    where?: WheelsetWhereInput
    orderBy?: WheelsetOrderByWithRelationInput | WheelsetOrderByWithRelationInput[]
    cursor?: WheelsetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WheelsetScalarFieldEnum | WheelsetScalarFieldEnum[]
  }


  /**
   * Wheel.owners
   */
  export type Wheel$ownersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ownership
     */
    select?: OwnershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OwnershipInclude<ExtArgs> | null
    where?: OwnershipWhereInput
    orderBy?: OwnershipOrderByWithRelationInput | OwnershipOrderByWithRelationInput[]
    cursor?: OwnershipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OwnershipScalarFieldEnum | OwnershipScalarFieldEnum[]
  }


  /**
   * Wheel without action
   */
  export type WheelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wheel
     */
    select?: WheelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WheelInclude<ExtArgs> | null
  }



  /**
   * Model Wheelset
   */

  export type AggregateWheelset = {
    _count: WheelsetCountAggregateOutputType | null
    _avg: WheelsetAvgAggregateOutputType | null
    _sum: WheelsetSumAggregateOutputType | null
    _min: WheelsetMinAggregateOutputType | null
    _max: WheelsetMaxAggregateOutputType | null
  }

  export type WheelsetAvgAggregateOutputType = {
    id: number | null
    wheelFowardId: number | null
    wheelBackId: number | null
  }

  export type WheelsetSumAggregateOutputType = {
    id: number | null
    wheelFowardId: number | null
    wheelBackId: number | null
  }

  export type WheelsetMinAggregateOutputType = {
    id: number | null
    name: string | null
    notes: string | null
    wheelFowardId: number | null
    wheelBackId: number | null
  }

  export type WheelsetMaxAggregateOutputType = {
    id: number | null
    name: string | null
    notes: string | null
    wheelFowardId: number | null
    wheelBackId: number | null
  }

  export type WheelsetCountAggregateOutputType = {
    id: number
    name: number
    notes: number
    wheelFowardId: number
    wheelBackId: number
    _all: number
  }


  export type WheelsetAvgAggregateInputType = {
    id?: true
    wheelFowardId?: true
    wheelBackId?: true
  }

  export type WheelsetSumAggregateInputType = {
    id?: true
    wheelFowardId?: true
    wheelBackId?: true
  }

  export type WheelsetMinAggregateInputType = {
    id?: true
    name?: true
    notes?: true
    wheelFowardId?: true
    wheelBackId?: true
  }

  export type WheelsetMaxAggregateInputType = {
    id?: true
    name?: true
    notes?: true
    wheelFowardId?: true
    wheelBackId?: true
  }

  export type WheelsetCountAggregateInputType = {
    id?: true
    name?: true
    notes?: true
    wheelFowardId?: true
    wheelBackId?: true
    _all?: true
  }

  export type WheelsetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wheelset to aggregate.
     */
    where?: WheelsetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wheelsets to fetch.
     */
    orderBy?: WheelsetOrderByWithRelationInput | WheelsetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WheelsetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wheelsets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wheelsets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Wheelsets
    **/
    _count?: true | WheelsetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WheelsetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WheelsetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WheelsetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WheelsetMaxAggregateInputType
  }

  export type GetWheelsetAggregateType<T extends WheelsetAggregateArgs> = {
        [P in keyof T & keyof AggregateWheelset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWheelset[P]>
      : GetScalarType<T[P], AggregateWheelset[P]>
  }




  export type WheelsetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WheelsetWhereInput
    orderBy?: WheelsetOrderByWithAggregationInput | WheelsetOrderByWithAggregationInput[]
    by: WheelsetScalarFieldEnum[] | WheelsetScalarFieldEnum
    having?: WheelsetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WheelsetCountAggregateInputType | true
    _avg?: WheelsetAvgAggregateInputType
    _sum?: WheelsetSumAggregateInputType
    _min?: WheelsetMinAggregateInputType
    _max?: WheelsetMaxAggregateInputType
  }

  export type WheelsetGroupByOutputType = {
    id: number
    name: string | null
    notes: string | null
    wheelFowardId: number | null
    wheelBackId: number | null
    _count: WheelsetCountAggregateOutputType | null
    _avg: WheelsetAvgAggregateOutputType | null
    _sum: WheelsetSumAggregateOutputType | null
    _min: WheelsetMinAggregateOutputType | null
    _max: WheelsetMaxAggregateOutputType | null
  }

  type GetWheelsetGroupByPayload<T extends WheelsetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WheelsetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WheelsetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WheelsetGroupByOutputType[P]>
            : GetScalarType<T[P], WheelsetGroupByOutputType[P]>
        }
      >
    >


  export type WheelsetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    notes?: boolean
    wheelFowardId?: boolean
    wheelBackId?: boolean
    wheelFoward?: boolean | Wheelset$wheelFowardArgs<ExtArgs>
    wheelBack?: boolean | Wheelset$wheelBackArgs<ExtArgs>
    owners?: boolean | Wheelset$ownersArgs<ExtArgs>
    _count?: boolean | WheelsetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wheelset"]>

  export type WheelsetSelectScalar = {
    id?: boolean
    name?: boolean
    notes?: boolean
    wheelFowardId?: boolean
    wheelBackId?: boolean
  }

  export type WheelsetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wheelFoward?: boolean | Wheelset$wheelFowardArgs<ExtArgs>
    wheelBack?: boolean | Wheelset$wheelBackArgs<ExtArgs>
    owners?: boolean | Wheelset$ownersArgs<ExtArgs>
    _count?: boolean | WheelsetCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $WheelsetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Wheelset"
    objects: {
      wheelFoward: Prisma.$WheelPayload<ExtArgs> | null
      wheelBack: Prisma.$WheelPayload<ExtArgs> | null
      owners: Prisma.$OwnershipPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      notes: string | null
      wheelFowardId: number | null
      wheelBackId: number | null
    }, ExtArgs["result"]["wheelset"]>
    composites: {}
  }


  type WheelsetGetPayload<S extends boolean | null | undefined | WheelsetDefaultArgs> = $Result.GetResult<Prisma.$WheelsetPayload, S>

  type WheelsetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WheelsetFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: WheelsetCountAggregateInputType | true
    }

  export interface WheelsetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Wheelset'], meta: { name: 'Wheelset' } }
    /**
     * Find zero or one Wheelset that matches the filter.
     * @param {WheelsetFindUniqueArgs} args - Arguments to find a Wheelset
     * @example
     * // Get one Wheelset
     * const wheelset = await prisma.wheelset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WheelsetFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, WheelsetFindUniqueArgs<ExtArgs>>
    ): Prisma__WheelsetClient<$Result.GetResult<Prisma.$WheelsetPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Wheelset that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WheelsetFindUniqueOrThrowArgs} args - Arguments to find a Wheelset
     * @example
     * // Get one Wheelset
     * const wheelset = await prisma.wheelset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WheelsetFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WheelsetFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__WheelsetClient<$Result.GetResult<Prisma.$WheelsetPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Wheelset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WheelsetFindFirstArgs} args - Arguments to find a Wheelset
     * @example
     * // Get one Wheelset
     * const wheelset = await prisma.wheelset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WheelsetFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, WheelsetFindFirstArgs<ExtArgs>>
    ): Prisma__WheelsetClient<$Result.GetResult<Prisma.$WheelsetPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Wheelset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WheelsetFindFirstOrThrowArgs} args - Arguments to find a Wheelset
     * @example
     * // Get one Wheelset
     * const wheelset = await prisma.wheelset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WheelsetFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WheelsetFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__WheelsetClient<$Result.GetResult<Prisma.$WheelsetPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Wheelsets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WheelsetFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wheelsets
     * const wheelsets = await prisma.wheelset.findMany()
     * 
     * // Get first 10 Wheelsets
     * const wheelsets = await prisma.wheelset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wheelsetWithIdOnly = await prisma.wheelset.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WheelsetFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WheelsetFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WheelsetPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Wheelset.
     * @param {WheelsetCreateArgs} args - Arguments to create a Wheelset.
     * @example
     * // Create one Wheelset
     * const Wheelset = await prisma.wheelset.create({
     *   data: {
     *     // ... data to create a Wheelset
     *   }
     * })
     * 
    **/
    create<T extends WheelsetCreateArgs<ExtArgs>>(
      args: SelectSubset<T, WheelsetCreateArgs<ExtArgs>>
    ): Prisma__WheelsetClient<$Result.GetResult<Prisma.$WheelsetPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Wheelset.
     * @param {WheelsetDeleteArgs} args - Arguments to delete one Wheelset.
     * @example
     * // Delete one Wheelset
     * const Wheelset = await prisma.wheelset.delete({
     *   where: {
     *     // ... filter to delete one Wheelset
     *   }
     * })
     * 
    **/
    delete<T extends WheelsetDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, WheelsetDeleteArgs<ExtArgs>>
    ): Prisma__WheelsetClient<$Result.GetResult<Prisma.$WheelsetPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Wheelset.
     * @param {WheelsetUpdateArgs} args - Arguments to update one Wheelset.
     * @example
     * // Update one Wheelset
     * const wheelset = await prisma.wheelset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WheelsetUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, WheelsetUpdateArgs<ExtArgs>>
    ): Prisma__WheelsetClient<$Result.GetResult<Prisma.$WheelsetPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Wheelsets.
     * @param {WheelsetDeleteManyArgs} args - Arguments to filter Wheelsets to delete.
     * @example
     * // Delete a few Wheelsets
     * const { count } = await prisma.wheelset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WheelsetDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WheelsetDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wheelsets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WheelsetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wheelsets
     * const wheelset = await prisma.wheelset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WheelsetUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, WheelsetUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Wheelset.
     * @param {WheelsetUpsertArgs} args - Arguments to update or create a Wheelset.
     * @example
     * // Update or create a Wheelset
     * const wheelset = await prisma.wheelset.upsert({
     *   create: {
     *     // ... data to create a Wheelset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wheelset we want to update
     *   }
     * })
    **/
    upsert<T extends WheelsetUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, WheelsetUpsertArgs<ExtArgs>>
    ): Prisma__WheelsetClient<$Result.GetResult<Prisma.$WheelsetPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Wheelsets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WheelsetCountArgs} args - Arguments to filter Wheelsets to count.
     * @example
     * // Count the number of Wheelsets
     * const count = await prisma.wheelset.count({
     *   where: {
     *     // ... the filter for the Wheelsets we want to count
     *   }
     * })
    **/
    count<T extends WheelsetCountArgs>(
      args?: Subset<T, WheelsetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WheelsetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wheelset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WheelsetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WheelsetAggregateArgs>(args: Subset<T, WheelsetAggregateArgs>): Prisma.PrismaPromise<GetWheelsetAggregateType<T>>

    /**
     * Group by Wheelset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WheelsetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WheelsetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WheelsetGroupByArgs['orderBy'] }
        : { orderBy?: WheelsetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WheelsetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWheelsetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Wheelset model
   */
  readonly fields: WheelsetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Wheelset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WheelsetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    wheelFoward<T extends Wheelset$wheelFowardArgs<ExtArgs> = {}>(args?: Subset<T, Wheelset$wheelFowardArgs<ExtArgs>>): Prisma__WheelClient<$Result.GetResult<Prisma.$WheelPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    wheelBack<T extends Wheelset$wheelBackArgs<ExtArgs> = {}>(args?: Subset<T, Wheelset$wheelBackArgs<ExtArgs>>): Prisma__WheelClient<$Result.GetResult<Prisma.$WheelPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    owners<T extends Wheelset$ownersArgs<ExtArgs> = {}>(args?: Subset<T, Wheelset$ownersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnershipPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Wheelset model
   */ 
  interface WheelsetFieldRefs {
    readonly id: FieldRef<"Wheelset", 'Int'>
    readonly name: FieldRef<"Wheelset", 'String'>
    readonly notes: FieldRef<"Wheelset", 'String'>
    readonly wheelFowardId: FieldRef<"Wheelset", 'Int'>
    readonly wheelBackId: FieldRef<"Wheelset", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Wheelset findUnique
   */
  export type WheelsetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wheelset
     */
    select?: WheelsetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WheelsetInclude<ExtArgs> | null
    /**
     * Filter, which Wheelset to fetch.
     */
    where: WheelsetWhereUniqueInput
  }


  /**
   * Wheelset findUniqueOrThrow
   */
  export type WheelsetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wheelset
     */
    select?: WheelsetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WheelsetInclude<ExtArgs> | null
    /**
     * Filter, which Wheelset to fetch.
     */
    where: WheelsetWhereUniqueInput
  }


  /**
   * Wheelset findFirst
   */
  export type WheelsetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wheelset
     */
    select?: WheelsetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WheelsetInclude<ExtArgs> | null
    /**
     * Filter, which Wheelset to fetch.
     */
    where?: WheelsetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wheelsets to fetch.
     */
    orderBy?: WheelsetOrderByWithRelationInput | WheelsetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wheelsets.
     */
    cursor?: WheelsetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wheelsets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wheelsets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wheelsets.
     */
    distinct?: WheelsetScalarFieldEnum | WheelsetScalarFieldEnum[]
  }


  /**
   * Wheelset findFirstOrThrow
   */
  export type WheelsetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wheelset
     */
    select?: WheelsetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WheelsetInclude<ExtArgs> | null
    /**
     * Filter, which Wheelset to fetch.
     */
    where?: WheelsetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wheelsets to fetch.
     */
    orderBy?: WheelsetOrderByWithRelationInput | WheelsetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wheelsets.
     */
    cursor?: WheelsetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wheelsets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wheelsets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wheelsets.
     */
    distinct?: WheelsetScalarFieldEnum | WheelsetScalarFieldEnum[]
  }


  /**
   * Wheelset findMany
   */
  export type WheelsetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wheelset
     */
    select?: WheelsetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WheelsetInclude<ExtArgs> | null
    /**
     * Filter, which Wheelsets to fetch.
     */
    where?: WheelsetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wheelsets to fetch.
     */
    orderBy?: WheelsetOrderByWithRelationInput | WheelsetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Wheelsets.
     */
    cursor?: WheelsetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wheelsets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wheelsets.
     */
    skip?: number
    distinct?: WheelsetScalarFieldEnum | WheelsetScalarFieldEnum[]
  }


  /**
   * Wheelset create
   */
  export type WheelsetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wheelset
     */
    select?: WheelsetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WheelsetInclude<ExtArgs> | null
    /**
     * The data needed to create a Wheelset.
     */
    data?: XOR<WheelsetCreateInput, WheelsetUncheckedCreateInput>
  }


  /**
   * Wheelset update
   */
  export type WheelsetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wheelset
     */
    select?: WheelsetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WheelsetInclude<ExtArgs> | null
    /**
     * The data needed to update a Wheelset.
     */
    data: XOR<WheelsetUpdateInput, WheelsetUncheckedUpdateInput>
    /**
     * Choose, which Wheelset to update.
     */
    where: WheelsetWhereUniqueInput
  }


  /**
   * Wheelset updateMany
   */
  export type WheelsetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Wheelsets.
     */
    data: XOR<WheelsetUpdateManyMutationInput, WheelsetUncheckedUpdateManyInput>
    /**
     * Filter which Wheelsets to update
     */
    where?: WheelsetWhereInput
  }


  /**
   * Wheelset upsert
   */
  export type WheelsetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wheelset
     */
    select?: WheelsetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WheelsetInclude<ExtArgs> | null
    /**
     * The filter to search for the Wheelset to update in case it exists.
     */
    where: WheelsetWhereUniqueInput
    /**
     * In case the Wheelset found by the `where` argument doesn't exist, create a new Wheelset with this data.
     */
    create: XOR<WheelsetCreateInput, WheelsetUncheckedCreateInput>
    /**
     * In case the Wheelset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WheelsetUpdateInput, WheelsetUncheckedUpdateInput>
  }


  /**
   * Wheelset delete
   */
  export type WheelsetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wheelset
     */
    select?: WheelsetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WheelsetInclude<ExtArgs> | null
    /**
     * Filter which Wheelset to delete.
     */
    where: WheelsetWhereUniqueInput
  }


  /**
   * Wheelset deleteMany
   */
  export type WheelsetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wheelsets to delete
     */
    where?: WheelsetWhereInput
  }


  /**
   * Wheelset.wheelFoward
   */
  export type Wheelset$wheelFowardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wheel
     */
    select?: WheelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WheelInclude<ExtArgs> | null
    where?: WheelWhereInput
  }


  /**
   * Wheelset.wheelBack
   */
  export type Wheelset$wheelBackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wheel
     */
    select?: WheelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WheelInclude<ExtArgs> | null
    where?: WheelWhereInput
  }


  /**
   * Wheelset.owners
   */
  export type Wheelset$ownersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ownership
     */
    select?: OwnershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OwnershipInclude<ExtArgs> | null
    where?: OwnershipWhereInput
    orderBy?: OwnershipOrderByWithRelationInput | OwnershipOrderByWithRelationInput[]
    cursor?: OwnershipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OwnershipScalarFieldEnum | OwnershipScalarFieldEnum[]
  }


  /**
   * Wheelset without action
   */
  export type WheelsetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wheelset
     */
    select?: WheelsetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WheelsetInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CyclistScalarFieldEnum: {
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

  export type CyclistScalarFieldEnum = (typeof CyclistScalarFieldEnum)[keyof typeof CyclistScalarFieldEnum]


  export const OwnershipScalarFieldEnum: {
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

  export type OwnershipScalarFieldEnum = (typeof OwnershipScalarFieldEnum)[keyof typeof OwnershipScalarFieldEnum]


  export const BicycleScalarFieldEnum: {
    id: 'id',
    notes: 'notes'
  };

  export type BicycleScalarFieldEnum = (typeof BicycleScalarFieldEnum)[keyof typeof BicycleScalarFieldEnum]


  export const BicyclePartScalarFieldEnum: {
    id: 'id',
    quantity: 'quantity',
    notes: 'notes',
    bicycleId: 'bicycleId',
    partId: 'partId'
  };

  export type BicyclePartScalarFieldEnum = (typeof BicyclePartScalarFieldEnum)[keyof typeof BicyclePartScalarFieldEnum]


  export const MakerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    nameShort: 'nameShort',
    nameAbbreviation: 'nameAbbreviation',
    notes: 'notes'
  };

  export type MakerScalarFieldEnum = (typeof MakerScalarFieldEnum)[keyof typeof MakerScalarFieldEnum]


  export const PartScalarFieldEnum: {
    id: 'id',
    categories: 'categories',
    type: 'type',
    designationCode: 'designationCode',
    name: 'name',
    notes: 'notes',
    makerId: 'makerId'
  };

  export type PartScalarFieldEnum = (typeof PartScalarFieldEnum)[keyof typeof PartScalarFieldEnum]


  export const HubScalarFieldEnum: {
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

  export type HubScalarFieldEnum = (typeof HubScalarFieldEnum)[keyof typeof HubScalarFieldEnum]


  export const RimScalarFieldEnum: {
    id: 'id',
    partId: 'partId',
    specEffectiveDiameter: 'specEffectiveDiameter',
    specWidthInternal: 'specWidthInternal',
    specWidthExternal: 'specWidthExternal',
    specSectionHeight: 'specSectionHeight'
  };

  export type RimScalarFieldEnum = (typeof RimScalarFieldEnum)[keyof typeof RimScalarFieldEnum]


  export const CogsetScalarFieldEnum: {
    id: 'id',
    type: 'type',
    cogs: 'cogs',
    notes: 'notes',
    partId: 'partId'
  };

  export type CogsetScalarFieldEnum = (typeof CogsetScalarFieldEnum)[keyof typeof CogsetScalarFieldEnum]


  export const WheelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    notes: 'notes',
    hubId: 'hubId',
    rimId: 'rimId'
  };

  export type WheelScalarFieldEnum = (typeof WheelScalarFieldEnum)[keyof typeof WheelScalarFieldEnum]


  export const WheelsetScalarFieldEnum: {
    id: 'id',
    name: 'name',
    notes: 'notes',
    wheelFowardId: 'wheelFowardId',
    wheelBackId: 'wheelBackId'
  };

  export type WheelsetScalarFieldEnum = (typeof WheelsetScalarFieldEnum)[keyof typeof WheelsetScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type CyclistWhereInput = {
    AND?: CyclistWhereInput | CyclistWhereInput[]
    OR?: CyclistWhereInput[]
    NOT?: CyclistWhereInput | CyclistWhereInput[]
    id?: IntFilter<"Cyclist"> | number
    name?: StringNullableFilter<"Cyclist"> | string | null
    nameLast?: StringNullableFilter<"Cyclist"> | string | null
    nameFirst?: StringNullableFilter<"Cyclist"> | string | null
    providerId?: StringFilter<"Cyclist"> | string
    provider?: StringNullableFilter<"Cyclist"> | string | null
    roles?: StringNullableFilter<"Cyclist"> | string | null
    registered?: DateTimeNullableFilter<"Cyclist"> | Date | string | null
    lastLogIn?: DateTimeNullableFilter<"Cyclist"> | Date | string | null
    owns?: OwnershipListRelationFilter
  }

  export type CyclistOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    nameLast?: SortOrderInput | SortOrder
    nameFirst?: SortOrderInput | SortOrder
    providerId?: SortOrder
    provider?: SortOrderInput | SortOrder
    roles?: SortOrderInput | SortOrder
    registered?: SortOrderInput | SortOrder
    lastLogIn?: SortOrderInput | SortOrder
    owns?: OwnershipOrderByRelationAggregateInput
  }

  export type CyclistWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    providerId?: string
    AND?: CyclistWhereInput | CyclistWhereInput[]
    OR?: CyclistWhereInput[]
    NOT?: CyclistWhereInput | CyclistWhereInput[]
    name?: StringNullableFilter<"Cyclist"> | string | null
    nameLast?: StringNullableFilter<"Cyclist"> | string | null
    nameFirst?: StringNullableFilter<"Cyclist"> | string | null
    provider?: StringNullableFilter<"Cyclist"> | string | null
    roles?: StringNullableFilter<"Cyclist"> | string | null
    registered?: DateTimeNullableFilter<"Cyclist"> | Date | string | null
    lastLogIn?: DateTimeNullableFilter<"Cyclist"> | Date | string | null
    owns?: OwnershipListRelationFilter
  }, "id" | "providerId">

  export type CyclistOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    nameLast?: SortOrderInput | SortOrder
    nameFirst?: SortOrderInput | SortOrder
    providerId?: SortOrder
    provider?: SortOrderInput | SortOrder
    roles?: SortOrderInput | SortOrder
    registered?: SortOrderInput | SortOrder
    lastLogIn?: SortOrderInput | SortOrder
    _count?: CyclistCountOrderByAggregateInput
    _avg?: CyclistAvgOrderByAggregateInput
    _max?: CyclistMaxOrderByAggregateInput
    _min?: CyclistMinOrderByAggregateInput
    _sum?: CyclistSumOrderByAggregateInput
  }

  export type CyclistScalarWhereWithAggregatesInput = {
    AND?: CyclistScalarWhereWithAggregatesInput | CyclistScalarWhereWithAggregatesInput[]
    OR?: CyclistScalarWhereWithAggregatesInput[]
    NOT?: CyclistScalarWhereWithAggregatesInput | CyclistScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cyclist"> | number
    name?: StringNullableWithAggregatesFilter<"Cyclist"> | string | null
    nameLast?: StringNullableWithAggregatesFilter<"Cyclist"> | string | null
    nameFirst?: StringNullableWithAggregatesFilter<"Cyclist"> | string | null
    providerId?: StringWithAggregatesFilter<"Cyclist"> | string
    provider?: StringNullableWithAggregatesFilter<"Cyclist"> | string | null
    roles?: StringNullableWithAggregatesFilter<"Cyclist"> | string | null
    registered?: DateTimeNullableWithAggregatesFilter<"Cyclist"> | Date | string | null
    lastLogIn?: DateTimeNullableWithAggregatesFilter<"Cyclist"> | Date | string | null
  }

  export type OwnershipWhereInput = {
    AND?: OwnershipWhereInput | OwnershipWhereInput[]
    OR?: OwnershipWhereInput[]
    NOT?: OwnershipWhereInput | OwnershipWhereInput[]
    id?: IntFilter<"Ownership"> | number
    acquired?: DateTimeNullableFilter<"Ownership"> | Date | string | null
    condition?: StringNullableFilter<"Ownership"> | string | null
    notes?: StringNullableFilter<"Ownership"> | string | null
    ownerId?: IntNullableFilter<"Ownership"> | number | null
    bicycleId?: IntNullableFilter<"Ownership"> | number | null
    wheelId?: IntNullableFilter<"Ownership"> | number | null
    wheelSetId?: IntNullableFilter<"Ownership"> | number | null
    partId?: IntNullableFilter<"Ownership"> | number | null
    owner?: XOR<CyclistNullableRelationFilter, CyclistWhereInput> | null
    bicycle?: XOR<BicycleNullableRelationFilter, BicycleWhereInput> | null
    wheel?: XOR<WheelNullableRelationFilter, WheelWhereInput> | null
    wheelSet?: XOR<WheelsetNullableRelationFilter, WheelsetWhereInput> | null
    part?: XOR<PartNullableRelationFilter, PartWhereInput> | null
  }

  export type OwnershipOrderByWithRelationInput = {
    id?: SortOrder
    acquired?: SortOrderInput | SortOrder
    condition?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    ownerId?: SortOrderInput | SortOrder
    bicycleId?: SortOrderInput | SortOrder
    wheelId?: SortOrderInput | SortOrder
    wheelSetId?: SortOrderInput | SortOrder
    partId?: SortOrderInput | SortOrder
    owner?: CyclistOrderByWithRelationInput
    bicycle?: BicycleOrderByWithRelationInput
    wheel?: WheelOrderByWithRelationInput
    wheelSet?: WheelsetOrderByWithRelationInput
    part?: PartOrderByWithRelationInput
  }

  export type OwnershipWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OwnershipWhereInput | OwnershipWhereInput[]
    OR?: OwnershipWhereInput[]
    NOT?: OwnershipWhereInput | OwnershipWhereInput[]
    acquired?: DateTimeNullableFilter<"Ownership"> | Date | string | null
    condition?: StringNullableFilter<"Ownership"> | string | null
    notes?: StringNullableFilter<"Ownership"> | string | null
    ownerId?: IntNullableFilter<"Ownership"> | number | null
    bicycleId?: IntNullableFilter<"Ownership"> | number | null
    wheelId?: IntNullableFilter<"Ownership"> | number | null
    wheelSetId?: IntNullableFilter<"Ownership"> | number | null
    partId?: IntNullableFilter<"Ownership"> | number | null
    owner?: XOR<CyclistNullableRelationFilter, CyclistWhereInput> | null
    bicycle?: XOR<BicycleNullableRelationFilter, BicycleWhereInput> | null
    wheel?: XOR<WheelNullableRelationFilter, WheelWhereInput> | null
    wheelSet?: XOR<WheelsetNullableRelationFilter, WheelsetWhereInput> | null
    part?: XOR<PartNullableRelationFilter, PartWhereInput> | null
  }, "id">

  export type OwnershipOrderByWithAggregationInput = {
    id?: SortOrder
    acquired?: SortOrderInput | SortOrder
    condition?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    ownerId?: SortOrderInput | SortOrder
    bicycleId?: SortOrderInput | SortOrder
    wheelId?: SortOrderInput | SortOrder
    wheelSetId?: SortOrderInput | SortOrder
    partId?: SortOrderInput | SortOrder
    _count?: OwnershipCountOrderByAggregateInput
    _avg?: OwnershipAvgOrderByAggregateInput
    _max?: OwnershipMaxOrderByAggregateInput
    _min?: OwnershipMinOrderByAggregateInput
    _sum?: OwnershipSumOrderByAggregateInput
  }

  export type OwnershipScalarWhereWithAggregatesInput = {
    AND?: OwnershipScalarWhereWithAggregatesInput | OwnershipScalarWhereWithAggregatesInput[]
    OR?: OwnershipScalarWhereWithAggregatesInput[]
    NOT?: OwnershipScalarWhereWithAggregatesInput | OwnershipScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ownership"> | number
    acquired?: DateTimeNullableWithAggregatesFilter<"Ownership"> | Date | string | null
    condition?: StringNullableWithAggregatesFilter<"Ownership"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Ownership"> | string | null
    ownerId?: IntNullableWithAggregatesFilter<"Ownership"> | number | null
    bicycleId?: IntNullableWithAggregatesFilter<"Ownership"> | number | null
    wheelId?: IntNullableWithAggregatesFilter<"Ownership"> | number | null
    wheelSetId?: IntNullableWithAggregatesFilter<"Ownership"> | number | null
    partId?: IntNullableWithAggregatesFilter<"Ownership"> | number | null
  }

  export type BicycleWhereInput = {
    AND?: BicycleWhereInput | BicycleWhereInput[]
    OR?: BicycleWhereInput[]
    NOT?: BicycleWhereInput | BicycleWhereInput[]
    id?: IntFilter<"Bicycle"> | number
    notes?: StringNullableFilter<"Bicycle"> | string | null
    parts?: BicyclePartListRelationFilter
    owners?: OwnershipListRelationFilter
  }

  export type BicycleOrderByWithRelationInput = {
    id?: SortOrder
    notes?: SortOrderInput | SortOrder
    parts?: BicyclePartOrderByRelationAggregateInput
    owners?: OwnershipOrderByRelationAggregateInput
  }

  export type BicycleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BicycleWhereInput | BicycleWhereInput[]
    OR?: BicycleWhereInput[]
    NOT?: BicycleWhereInput | BicycleWhereInput[]
    notes?: StringNullableFilter<"Bicycle"> | string | null
    parts?: BicyclePartListRelationFilter
    owners?: OwnershipListRelationFilter
  }, "id">

  export type BicycleOrderByWithAggregationInput = {
    id?: SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: BicycleCountOrderByAggregateInput
    _avg?: BicycleAvgOrderByAggregateInput
    _max?: BicycleMaxOrderByAggregateInput
    _min?: BicycleMinOrderByAggregateInput
    _sum?: BicycleSumOrderByAggregateInput
  }

  export type BicycleScalarWhereWithAggregatesInput = {
    AND?: BicycleScalarWhereWithAggregatesInput | BicycleScalarWhereWithAggregatesInput[]
    OR?: BicycleScalarWhereWithAggregatesInput[]
    NOT?: BicycleScalarWhereWithAggregatesInput | BicycleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Bicycle"> | number
    notes?: StringNullableWithAggregatesFilter<"Bicycle"> | string | null
  }

  export type BicyclePartWhereInput = {
    AND?: BicyclePartWhereInput | BicyclePartWhereInput[]
    OR?: BicyclePartWhereInput[]
    NOT?: BicyclePartWhereInput | BicyclePartWhereInput[]
    id?: IntFilter<"BicyclePart"> | number
    quantity?: IntNullableFilter<"BicyclePart"> | number | null
    notes?: StringNullableFilter<"BicyclePart"> | string | null
    bicycleId?: IntNullableFilter<"BicyclePart"> | number | null
    partId?: IntNullableFilter<"BicyclePart"> | number | null
    bicycle?: XOR<BicycleNullableRelationFilter, BicycleWhereInput> | null
    part?: XOR<PartNullableRelationFilter, PartWhereInput> | null
  }

  export type BicyclePartOrderByWithRelationInput = {
    id?: SortOrder
    quantity?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    bicycleId?: SortOrderInput | SortOrder
    partId?: SortOrderInput | SortOrder
    bicycle?: BicycleOrderByWithRelationInput
    part?: PartOrderByWithRelationInput
  }

  export type BicyclePartWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BicyclePartWhereInput | BicyclePartWhereInput[]
    OR?: BicyclePartWhereInput[]
    NOT?: BicyclePartWhereInput | BicyclePartWhereInput[]
    quantity?: IntNullableFilter<"BicyclePart"> | number | null
    notes?: StringNullableFilter<"BicyclePart"> | string | null
    bicycleId?: IntNullableFilter<"BicyclePart"> | number | null
    partId?: IntNullableFilter<"BicyclePart"> | number | null
    bicycle?: XOR<BicycleNullableRelationFilter, BicycleWhereInput> | null
    part?: XOR<PartNullableRelationFilter, PartWhereInput> | null
  }, "id">

  export type BicyclePartOrderByWithAggregationInput = {
    id?: SortOrder
    quantity?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    bicycleId?: SortOrderInput | SortOrder
    partId?: SortOrderInput | SortOrder
    _count?: BicyclePartCountOrderByAggregateInput
    _avg?: BicyclePartAvgOrderByAggregateInput
    _max?: BicyclePartMaxOrderByAggregateInput
    _min?: BicyclePartMinOrderByAggregateInput
    _sum?: BicyclePartSumOrderByAggregateInput
  }

  export type BicyclePartScalarWhereWithAggregatesInput = {
    AND?: BicyclePartScalarWhereWithAggregatesInput | BicyclePartScalarWhereWithAggregatesInput[]
    OR?: BicyclePartScalarWhereWithAggregatesInput[]
    NOT?: BicyclePartScalarWhereWithAggregatesInput | BicyclePartScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BicyclePart"> | number
    quantity?: IntNullableWithAggregatesFilter<"BicyclePart"> | number | null
    notes?: StringNullableWithAggregatesFilter<"BicyclePart"> | string | null
    bicycleId?: IntNullableWithAggregatesFilter<"BicyclePart"> | number | null
    partId?: IntNullableWithAggregatesFilter<"BicyclePart"> | number | null
  }

  export type MakerWhereInput = {
    AND?: MakerWhereInput | MakerWhereInput[]
    OR?: MakerWhereInput[]
    NOT?: MakerWhereInput | MakerWhereInput[]
    id?: IntFilter<"Maker"> | number
    name?: StringNullableFilter<"Maker"> | string | null
    nameShort?: StringNullableFilter<"Maker"> | string | null
    nameAbbreviation?: StringNullableFilter<"Maker"> | string | null
    notes?: StringNullableFilter<"Maker"> | string | null
    parts?: PartListRelationFilter
  }

  export type MakerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    nameShort?: SortOrderInput | SortOrder
    nameAbbreviation?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    parts?: PartOrderByRelationAggregateInput
  }

  export type MakerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MakerWhereInput | MakerWhereInput[]
    OR?: MakerWhereInput[]
    NOT?: MakerWhereInput | MakerWhereInput[]
    name?: StringNullableFilter<"Maker"> | string | null
    nameShort?: StringNullableFilter<"Maker"> | string | null
    nameAbbreviation?: StringNullableFilter<"Maker"> | string | null
    notes?: StringNullableFilter<"Maker"> | string | null
    parts?: PartListRelationFilter
  }, "id">

  export type MakerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    nameShort?: SortOrderInput | SortOrder
    nameAbbreviation?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: MakerCountOrderByAggregateInput
    _avg?: MakerAvgOrderByAggregateInput
    _max?: MakerMaxOrderByAggregateInput
    _min?: MakerMinOrderByAggregateInput
    _sum?: MakerSumOrderByAggregateInput
  }

  export type MakerScalarWhereWithAggregatesInput = {
    AND?: MakerScalarWhereWithAggregatesInput | MakerScalarWhereWithAggregatesInput[]
    OR?: MakerScalarWhereWithAggregatesInput[]
    NOT?: MakerScalarWhereWithAggregatesInput | MakerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Maker"> | number
    name?: StringNullableWithAggregatesFilter<"Maker"> | string | null
    nameShort?: StringNullableWithAggregatesFilter<"Maker"> | string | null
    nameAbbreviation?: StringNullableWithAggregatesFilter<"Maker"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Maker"> | string | null
  }

  export type PartWhereInput = {
    AND?: PartWhereInput | PartWhereInput[]
    OR?: PartWhereInput[]
    NOT?: PartWhereInput | PartWhereInput[]
    id?: IntFilter<"Part"> | number
    categories?: StringNullableFilter<"Part"> | string | null
    type?: StringNullableFilter<"Part"> | string | null
    designationCode?: StringNullableFilter<"Part"> | string | null
    name?: StringNullableFilter<"Part"> | string | null
    notes?: StringNullableFilter<"Part"> | string | null
    makerId?: IntNullableFilter<"Part"> | number | null
    maker?: XOR<MakerNullableRelationFilter, MakerWhereInput> | null
    owners?: OwnershipListRelationFilter
    bicycles?: BicyclePartListRelationFilter
    hub?: XOR<HubNullableRelationFilter, HubWhereInput> | null
    rim?: XOR<RimNullableRelationFilter, RimWhereInput> | null
    cogset?: XOR<CogsetNullableRelationFilter, CogsetWhereInput> | null
  }

  export type PartOrderByWithRelationInput = {
    id?: SortOrder
    categories?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    designationCode?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    makerId?: SortOrderInput | SortOrder
    maker?: MakerOrderByWithRelationInput
    owners?: OwnershipOrderByRelationAggregateInput
    bicycles?: BicyclePartOrderByRelationAggregateInput
    hub?: HubOrderByWithRelationInput
    rim?: RimOrderByWithRelationInput
    cogset?: CogsetOrderByWithRelationInput
  }

  export type PartWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PartWhereInput | PartWhereInput[]
    OR?: PartWhereInput[]
    NOT?: PartWhereInput | PartWhereInput[]
    categories?: StringNullableFilter<"Part"> | string | null
    type?: StringNullableFilter<"Part"> | string | null
    designationCode?: StringNullableFilter<"Part"> | string | null
    name?: StringNullableFilter<"Part"> | string | null
    notes?: StringNullableFilter<"Part"> | string | null
    makerId?: IntNullableFilter<"Part"> | number | null
    maker?: XOR<MakerNullableRelationFilter, MakerWhereInput> | null
    owners?: OwnershipListRelationFilter
    bicycles?: BicyclePartListRelationFilter
    hub?: XOR<HubNullableRelationFilter, HubWhereInput> | null
    rim?: XOR<RimNullableRelationFilter, RimWhereInput> | null
    cogset?: XOR<CogsetNullableRelationFilter, CogsetWhereInput> | null
  }, "id">

  export type PartOrderByWithAggregationInput = {
    id?: SortOrder
    categories?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    designationCode?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    makerId?: SortOrderInput | SortOrder
    _count?: PartCountOrderByAggregateInput
    _avg?: PartAvgOrderByAggregateInput
    _max?: PartMaxOrderByAggregateInput
    _min?: PartMinOrderByAggregateInput
    _sum?: PartSumOrderByAggregateInput
  }

  export type PartScalarWhereWithAggregatesInput = {
    AND?: PartScalarWhereWithAggregatesInput | PartScalarWhereWithAggregatesInput[]
    OR?: PartScalarWhereWithAggregatesInput[]
    NOT?: PartScalarWhereWithAggregatesInput | PartScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Part"> | number
    categories?: StringNullableWithAggregatesFilter<"Part"> | string | null
    type?: StringNullableWithAggregatesFilter<"Part"> | string | null
    designationCode?: StringNullableWithAggregatesFilter<"Part"> | string | null
    name?: StringNullableWithAggregatesFilter<"Part"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Part"> | string | null
    makerId?: IntNullableWithAggregatesFilter<"Part"> | number | null
  }

  export type HubWhereInput = {
    AND?: HubWhereInput | HubWhereInput[]
    OR?: HubWhereInput[]
    NOT?: HubWhereInput | HubWhereInput[]
    id?: IntFilter<"Hub"> | number
    partId?: IntNullableFilter<"Hub"> | number | null
    position?: StringNullableFilter<"Hub"> | string | null
    spokeCount?: IntNullableFilter<"Hub"> | number | null
    overLocknutDistance?: FloatNullableFilter<"Hub"> | number | null
    flangeDiameterLeft?: FloatNullableFilter<"Hub"> | number | null
    flangeDiameterRight?: FloatNullableFilter<"Hub"> | number | null
    flangeLeftToCenter?: FloatNullableFilter<"Hub"> | number | null
    flangeRightToCenter?: FloatNullableFilter<"Hub"> | number | null
    sflangeLeftToOLN?: FloatNullableFilter<"Hub"> | number | null
    flangeRightToOLN?: FloatNullableFilter<"Hub"> | number | null
    spokeHoleDiameter?: FloatNullableFilter<"Hub"> | number | null
    part?: XOR<PartNullableRelationFilter, PartWhereInput> | null
    wheels?: WheelListRelationFilter
  }

  export type HubOrderByWithRelationInput = {
    id?: SortOrder
    partId?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    spokeCount?: SortOrderInput | SortOrder
    overLocknutDistance?: SortOrderInput | SortOrder
    flangeDiameterLeft?: SortOrderInput | SortOrder
    flangeDiameterRight?: SortOrderInput | SortOrder
    flangeLeftToCenter?: SortOrderInput | SortOrder
    flangeRightToCenter?: SortOrderInput | SortOrder
    sflangeLeftToOLN?: SortOrderInput | SortOrder
    flangeRightToOLN?: SortOrderInput | SortOrder
    spokeHoleDiameter?: SortOrderInput | SortOrder
    part?: PartOrderByWithRelationInput
    wheels?: WheelOrderByRelationAggregateInput
  }

  export type HubWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    partId?: number
    AND?: HubWhereInput | HubWhereInput[]
    OR?: HubWhereInput[]
    NOT?: HubWhereInput | HubWhereInput[]
    position?: StringNullableFilter<"Hub"> | string | null
    spokeCount?: IntNullableFilter<"Hub"> | number | null
    overLocknutDistance?: FloatNullableFilter<"Hub"> | number | null
    flangeDiameterLeft?: FloatNullableFilter<"Hub"> | number | null
    flangeDiameterRight?: FloatNullableFilter<"Hub"> | number | null
    flangeLeftToCenter?: FloatNullableFilter<"Hub"> | number | null
    flangeRightToCenter?: FloatNullableFilter<"Hub"> | number | null
    sflangeLeftToOLN?: FloatNullableFilter<"Hub"> | number | null
    flangeRightToOLN?: FloatNullableFilter<"Hub"> | number | null
    spokeHoleDiameter?: FloatNullableFilter<"Hub"> | number | null
    part?: XOR<PartNullableRelationFilter, PartWhereInput> | null
    wheels?: WheelListRelationFilter
  }, "id" | "partId">

  export type HubOrderByWithAggregationInput = {
    id?: SortOrder
    partId?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    spokeCount?: SortOrderInput | SortOrder
    overLocknutDistance?: SortOrderInput | SortOrder
    flangeDiameterLeft?: SortOrderInput | SortOrder
    flangeDiameterRight?: SortOrderInput | SortOrder
    flangeLeftToCenter?: SortOrderInput | SortOrder
    flangeRightToCenter?: SortOrderInput | SortOrder
    sflangeLeftToOLN?: SortOrderInput | SortOrder
    flangeRightToOLN?: SortOrderInput | SortOrder
    spokeHoleDiameter?: SortOrderInput | SortOrder
    _count?: HubCountOrderByAggregateInput
    _avg?: HubAvgOrderByAggregateInput
    _max?: HubMaxOrderByAggregateInput
    _min?: HubMinOrderByAggregateInput
    _sum?: HubSumOrderByAggregateInput
  }

  export type HubScalarWhereWithAggregatesInput = {
    AND?: HubScalarWhereWithAggregatesInput | HubScalarWhereWithAggregatesInput[]
    OR?: HubScalarWhereWithAggregatesInput[]
    NOT?: HubScalarWhereWithAggregatesInput | HubScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Hub"> | number
    partId?: IntNullableWithAggregatesFilter<"Hub"> | number | null
    position?: StringNullableWithAggregatesFilter<"Hub"> | string | null
    spokeCount?: IntNullableWithAggregatesFilter<"Hub"> | number | null
    overLocknutDistance?: FloatNullableWithAggregatesFilter<"Hub"> | number | null
    flangeDiameterLeft?: FloatNullableWithAggregatesFilter<"Hub"> | number | null
    flangeDiameterRight?: FloatNullableWithAggregatesFilter<"Hub"> | number | null
    flangeLeftToCenter?: FloatNullableWithAggregatesFilter<"Hub"> | number | null
    flangeRightToCenter?: FloatNullableWithAggregatesFilter<"Hub"> | number | null
    sflangeLeftToOLN?: FloatNullableWithAggregatesFilter<"Hub"> | number | null
    flangeRightToOLN?: FloatNullableWithAggregatesFilter<"Hub"> | number | null
    spokeHoleDiameter?: FloatNullableWithAggregatesFilter<"Hub"> | number | null
  }

  export type RimWhereInput = {
    AND?: RimWhereInput | RimWhereInput[]
    OR?: RimWhereInput[]
    NOT?: RimWhereInput | RimWhereInput[]
    id?: IntFilter<"Rim"> | number
    partId?: IntNullableFilter<"Rim"> | number | null
    specEffectiveDiameter?: FloatNullableFilter<"Rim"> | number | null
    specWidthInternal?: FloatNullableFilter<"Rim"> | number | null
    specWidthExternal?: FloatNullableFilter<"Rim"> | number | null
    specSectionHeight?: FloatNullableFilter<"Rim"> | number | null
    part?: XOR<PartNullableRelationFilter, PartWhereInput> | null
    wheels?: WheelListRelationFilter
  }

  export type RimOrderByWithRelationInput = {
    id?: SortOrder
    partId?: SortOrderInput | SortOrder
    specEffectiveDiameter?: SortOrderInput | SortOrder
    specWidthInternal?: SortOrderInput | SortOrder
    specWidthExternal?: SortOrderInput | SortOrder
    specSectionHeight?: SortOrderInput | SortOrder
    part?: PartOrderByWithRelationInput
    wheels?: WheelOrderByRelationAggregateInput
  }

  export type RimWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    partId?: number
    AND?: RimWhereInput | RimWhereInput[]
    OR?: RimWhereInput[]
    NOT?: RimWhereInput | RimWhereInput[]
    specEffectiveDiameter?: FloatNullableFilter<"Rim"> | number | null
    specWidthInternal?: FloatNullableFilter<"Rim"> | number | null
    specWidthExternal?: FloatNullableFilter<"Rim"> | number | null
    specSectionHeight?: FloatNullableFilter<"Rim"> | number | null
    part?: XOR<PartNullableRelationFilter, PartWhereInput> | null
    wheels?: WheelListRelationFilter
  }, "id" | "partId">

  export type RimOrderByWithAggregationInput = {
    id?: SortOrder
    partId?: SortOrderInput | SortOrder
    specEffectiveDiameter?: SortOrderInput | SortOrder
    specWidthInternal?: SortOrderInput | SortOrder
    specWidthExternal?: SortOrderInput | SortOrder
    specSectionHeight?: SortOrderInput | SortOrder
    _count?: RimCountOrderByAggregateInput
    _avg?: RimAvgOrderByAggregateInput
    _max?: RimMaxOrderByAggregateInput
    _min?: RimMinOrderByAggregateInput
    _sum?: RimSumOrderByAggregateInput
  }

  export type RimScalarWhereWithAggregatesInput = {
    AND?: RimScalarWhereWithAggregatesInput | RimScalarWhereWithAggregatesInput[]
    OR?: RimScalarWhereWithAggregatesInput[]
    NOT?: RimScalarWhereWithAggregatesInput | RimScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rim"> | number
    partId?: IntNullableWithAggregatesFilter<"Rim"> | number | null
    specEffectiveDiameter?: FloatNullableWithAggregatesFilter<"Rim"> | number | null
    specWidthInternal?: FloatNullableWithAggregatesFilter<"Rim"> | number | null
    specWidthExternal?: FloatNullableWithAggregatesFilter<"Rim"> | number | null
    specSectionHeight?: FloatNullableWithAggregatesFilter<"Rim"> | number | null
  }

  export type CogsetWhereInput = {
    AND?: CogsetWhereInput | CogsetWhereInput[]
    OR?: CogsetWhereInput[]
    NOT?: CogsetWhereInput | CogsetWhereInput[]
    id?: IntFilter<"Cogset"> | number
    type?: StringNullableFilter<"Cogset"> | string | null
    cogs?: StringNullableFilter<"Cogset"> | string | null
    notes?: StringNullableFilter<"Cogset"> | string | null
    partId?: IntNullableFilter<"Cogset"> | number | null
    part?: XOR<PartNullableRelationFilter, PartWhereInput> | null
  }

  export type CogsetOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrderInput | SortOrder
    cogs?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    partId?: SortOrderInput | SortOrder
    part?: PartOrderByWithRelationInput
  }

  export type CogsetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    partId?: number
    AND?: CogsetWhereInput | CogsetWhereInput[]
    OR?: CogsetWhereInput[]
    NOT?: CogsetWhereInput | CogsetWhereInput[]
    type?: StringNullableFilter<"Cogset"> | string | null
    cogs?: StringNullableFilter<"Cogset"> | string | null
    notes?: StringNullableFilter<"Cogset"> | string | null
    part?: XOR<PartNullableRelationFilter, PartWhereInput> | null
  }, "id" | "partId">

  export type CogsetOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrderInput | SortOrder
    cogs?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    partId?: SortOrderInput | SortOrder
    _count?: CogsetCountOrderByAggregateInput
    _avg?: CogsetAvgOrderByAggregateInput
    _max?: CogsetMaxOrderByAggregateInput
    _min?: CogsetMinOrderByAggregateInput
    _sum?: CogsetSumOrderByAggregateInput
  }

  export type CogsetScalarWhereWithAggregatesInput = {
    AND?: CogsetScalarWhereWithAggregatesInput | CogsetScalarWhereWithAggregatesInput[]
    OR?: CogsetScalarWhereWithAggregatesInput[]
    NOT?: CogsetScalarWhereWithAggregatesInput | CogsetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cogset"> | number
    type?: StringNullableWithAggregatesFilter<"Cogset"> | string | null
    cogs?: StringNullableWithAggregatesFilter<"Cogset"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Cogset"> | string | null
    partId?: IntNullableWithAggregatesFilter<"Cogset"> | number | null
  }

  export type WheelWhereInput = {
    AND?: WheelWhereInput | WheelWhereInput[]
    OR?: WheelWhereInput[]
    NOT?: WheelWhereInput | WheelWhereInput[]
    id?: IntFilter<"Wheel"> | number
    name?: StringNullableFilter<"Wheel"> | string | null
    notes?: StringNullableFilter<"Wheel"> | string | null
    hubId?: IntNullableFilter<"Wheel"> | number | null
    rimId?: IntNullableFilter<"Wheel"> | number | null
    hub?: XOR<HubNullableRelationFilter, HubWhereInput> | null
    rim?: XOR<RimNullableRelationFilter, RimWhereInput> | null
    wheelsFoward?: WheelsetListRelationFilter
    wheelsBack?: WheelsetListRelationFilter
    owners?: OwnershipListRelationFilter
  }

  export type WheelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    hubId?: SortOrderInput | SortOrder
    rimId?: SortOrderInput | SortOrder
    hub?: HubOrderByWithRelationInput
    rim?: RimOrderByWithRelationInput
    wheelsFoward?: WheelsetOrderByRelationAggregateInput
    wheelsBack?: WheelsetOrderByRelationAggregateInput
    owners?: OwnershipOrderByRelationAggregateInput
  }

  export type WheelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WheelWhereInput | WheelWhereInput[]
    OR?: WheelWhereInput[]
    NOT?: WheelWhereInput | WheelWhereInput[]
    name?: StringNullableFilter<"Wheel"> | string | null
    notes?: StringNullableFilter<"Wheel"> | string | null
    hubId?: IntNullableFilter<"Wheel"> | number | null
    rimId?: IntNullableFilter<"Wheel"> | number | null
    hub?: XOR<HubNullableRelationFilter, HubWhereInput> | null
    rim?: XOR<RimNullableRelationFilter, RimWhereInput> | null
    wheelsFoward?: WheelsetListRelationFilter
    wheelsBack?: WheelsetListRelationFilter
    owners?: OwnershipListRelationFilter
  }, "id">

  export type WheelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    hubId?: SortOrderInput | SortOrder
    rimId?: SortOrderInput | SortOrder
    _count?: WheelCountOrderByAggregateInput
    _avg?: WheelAvgOrderByAggregateInput
    _max?: WheelMaxOrderByAggregateInput
    _min?: WheelMinOrderByAggregateInput
    _sum?: WheelSumOrderByAggregateInput
  }

  export type WheelScalarWhereWithAggregatesInput = {
    AND?: WheelScalarWhereWithAggregatesInput | WheelScalarWhereWithAggregatesInput[]
    OR?: WheelScalarWhereWithAggregatesInput[]
    NOT?: WheelScalarWhereWithAggregatesInput | WheelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Wheel"> | number
    name?: StringNullableWithAggregatesFilter<"Wheel"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Wheel"> | string | null
    hubId?: IntNullableWithAggregatesFilter<"Wheel"> | number | null
    rimId?: IntNullableWithAggregatesFilter<"Wheel"> | number | null
  }

  export type WheelsetWhereInput = {
    AND?: WheelsetWhereInput | WheelsetWhereInput[]
    OR?: WheelsetWhereInput[]
    NOT?: WheelsetWhereInput | WheelsetWhereInput[]
    id?: IntFilter<"Wheelset"> | number
    name?: StringNullableFilter<"Wheelset"> | string | null
    notes?: StringNullableFilter<"Wheelset"> | string | null
    wheelFowardId?: IntNullableFilter<"Wheelset"> | number | null
    wheelBackId?: IntNullableFilter<"Wheelset"> | number | null
    wheelFoward?: XOR<WheelNullableRelationFilter, WheelWhereInput> | null
    wheelBack?: XOR<WheelNullableRelationFilter, WheelWhereInput> | null
    owners?: OwnershipListRelationFilter
  }

  export type WheelsetOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    wheelFowardId?: SortOrderInput | SortOrder
    wheelBackId?: SortOrderInput | SortOrder
    wheelFoward?: WheelOrderByWithRelationInput
    wheelBack?: WheelOrderByWithRelationInput
    owners?: OwnershipOrderByRelationAggregateInput
  }

  export type WheelsetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WheelsetWhereInput | WheelsetWhereInput[]
    OR?: WheelsetWhereInput[]
    NOT?: WheelsetWhereInput | WheelsetWhereInput[]
    name?: StringNullableFilter<"Wheelset"> | string | null
    notes?: StringNullableFilter<"Wheelset"> | string | null
    wheelFowardId?: IntNullableFilter<"Wheelset"> | number | null
    wheelBackId?: IntNullableFilter<"Wheelset"> | number | null
    wheelFoward?: XOR<WheelNullableRelationFilter, WheelWhereInput> | null
    wheelBack?: XOR<WheelNullableRelationFilter, WheelWhereInput> | null
    owners?: OwnershipListRelationFilter
  }, "id">

  export type WheelsetOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    wheelFowardId?: SortOrderInput | SortOrder
    wheelBackId?: SortOrderInput | SortOrder
    _count?: WheelsetCountOrderByAggregateInput
    _avg?: WheelsetAvgOrderByAggregateInput
    _max?: WheelsetMaxOrderByAggregateInput
    _min?: WheelsetMinOrderByAggregateInput
    _sum?: WheelsetSumOrderByAggregateInput
  }

  export type WheelsetScalarWhereWithAggregatesInput = {
    AND?: WheelsetScalarWhereWithAggregatesInput | WheelsetScalarWhereWithAggregatesInput[]
    OR?: WheelsetScalarWhereWithAggregatesInput[]
    NOT?: WheelsetScalarWhereWithAggregatesInput | WheelsetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Wheelset"> | number
    name?: StringNullableWithAggregatesFilter<"Wheelset"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Wheelset"> | string | null
    wheelFowardId?: IntNullableWithAggregatesFilter<"Wheelset"> | number | null
    wheelBackId?: IntNullableWithAggregatesFilter<"Wheelset"> | number | null
  }

  export type CyclistCreateInput = {
    name?: string | null
    nameLast?: string | null
    nameFirst?: string | null
    providerId: string
    provider?: string | null
    roles?: string | null
    registered?: Date | string | null
    lastLogIn?: Date | string | null
    owns?: OwnershipCreateNestedManyWithoutOwnerInput
  }

  export type CyclistUncheckedCreateInput = {
    id?: number
    name?: string | null
    nameLast?: string | null
    nameFirst?: string | null
    providerId: string
    provider?: string | null
    roles?: string | null
    registered?: Date | string | null
    lastLogIn?: Date | string | null
    owns?: OwnershipUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type CyclistUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nameLast?: NullableStringFieldUpdateOperationsInput | string | null
    nameFirst?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: NullableStringFieldUpdateOperationsInput | string | null
    registered?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owns?: OwnershipUpdateManyWithoutOwnerNestedInput
  }

  export type CyclistUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nameLast?: NullableStringFieldUpdateOperationsInput | string | null
    nameFirst?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: NullableStringFieldUpdateOperationsInput | string | null
    registered?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owns?: OwnershipUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type CyclistUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nameLast?: NullableStringFieldUpdateOperationsInput | string | null
    nameFirst?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: NullableStringFieldUpdateOperationsInput | string | null
    registered?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CyclistUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nameLast?: NullableStringFieldUpdateOperationsInput | string | null
    nameFirst?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: NullableStringFieldUpdateOperationsInput | string | null
    registered?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OwnershipCreateInput = {
    acquired?: Date | string | null
    condition?: string | null
    notes?: string | null
    owner?: CyclistCreateNestedOneWithoutOwnsInput
    bicycle?: BicycleCreateNestedOneWithoutOwnersInput
    wheel?: WheelCreateNestedOneWithoutOwnersInput
    wheelSet?: WheelsetCreateNestedOneWithoutOwnersInput
    part?: PartCreateNestedOneWithoutOwnersInput
  }

  export type OwnershipUncheckedCreateInput = {
    id?: number
    acquired?: Date | string | null
    condition?: string | null
    notes?: string | null
    ownerId?: number | null
    bicycleId?: number | null
    wheelId?: number | null
    wheelSetId?: number | null
    partId?: number | null
  }

  export type OwnershipUpdateInput = {
    acquired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: CyclistUpdateOneWithoutOwnsNestedInput
    bicycle?: BicycleUpdateOneWithoutOwnersNestedInput
    wheel?: WheelUpdateOneWithoutOwnersNestedInput
    wheelSet?: WheelsetUpdateOneWithoutOwnersNestedInput
    part?: PartUpdateOneWithoutOwnersNestedInput
  }

  export type OwnershipUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    acquired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    bicycleId?: NullableIntFieldUpdateOperationsInput | number | null
    wheelId?: NullableIntFieldUpdateOperationsInput | number | null
    wheelSetId?: NullableIntFieldUpdateOperationsInput | number | null
    partId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OwnershipUpdateManyMutationInput = {
    acquired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OwnershipUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    acquired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    bicycleId?: NullableIntFieldUpdateOperationsInput | number | null
    wheelId?: NullableIntFieldUpdateOperationsInput | number | null
    wheelSetId?: NullableIntFieldUpdateOperationsInput | number | null
    partId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BicycleCreateInput = {
    notes?: string | null
    parts?: BicyclePartCreateNestedManyWithoutBicycleInput
    owners?: OwnershipCreateNestedManyWithoutBicycleInput
  }

  export type BicycleUncheckedCreateInput = {
    id?: number
    notes?: string | null
    parts?: BicyclePartUncheckedCreateNestedManyWithoutBicycleInput
    owners?: OwnershipUncheckedCreateNestedManyWithoutBicycleInput
  }

  export type BicycleUpdateInput = {
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    parts?: BicyclePartUpdateManyWithoutBicycleNestedInput
    owners?: OwnershipUpdateManyWithoutBicycleNestedInput
  }

  export type BicycleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    parts?: BicyclePartUncheckedUpdateManyWithoutBicycleNestedInput
    owners?: OwnershipUncheckedUpdateManyWithoutBicycleNestedInput
  }

  export type BicycleUpdateManyMutationInput = {
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BicycleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BicyclePartCreateInput = {
    quantity?: number | null
    notes?: string | null
    bicycle?: BicycleCreateNestedOneWithoutPartsInput
    part?: PartCreateNestedOneWithoutBicyclesInput
  }

  export type BicyclePartUncheckedCreateInput = {
    id?: number
    quantity?: number | null
    notes?: string | null
    bicycleId?: number | null
    partId?: number | null
  }

  export type BicyclePartUpdateInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    bicycle?: BicycleUpdateOneWithoutPartsNestedInput
    part?: PartUpdateOneWithoutBicyclesNestedInput
  }

  export type BicyclePartUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    bicycleId?: NullableIntFieldUpdateOperationsInput | number | null
    partId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BicyclePartUpdateManyMutationInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BicyclePartUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    bicycleId?: NullableIntFieldUpdateOperationsInput | number | null
    partId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MakerCreateInput = {
    name?: string | null
    nameShort?: string | null
    nameAbbreviation?: string | null
    notes?: string | null
    parts?: PartCreateNestedManyWithoutMakerInput
  }

  export type MakerUncheckedCreateInput = {
    id?: number
    name?: string | null
    nameShort?: string | null
    nameAbbreviation?: string | null
    notes?: string | null
    parts?: PartUncheckedCreateNestedManyWithoutMakerInput
  }

  export type MakerUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nameShort?: NullableStringFieldUpdateOperationsInput | string | null
    nameAbbreviation?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    parts?: PartUpdateManyWithoutMakerNestedInput
  }

  export type MakerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nameShort?: NullableStringFieldUpdateOperationsInput | string | null
    nameAbbreviation?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    parts?: PartUncheckedUpdateManyWithoutMakerNestedInput
  }

  export type MakerUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nameShort?: NullableStringFieldUpdateOperationsInput | string | null
    nameAbbreviation?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MakerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nameShort?: NullableStringFieldUpdateOperationsInput | string | null
    nameAbbreviation?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PartCreateInput = {
    categories?: string | null
    type?: string | null
    designationCode?: string | null
    name?: string | null
    notes?: string | null
    maker?: MakerCreateNestedOneWithoutPartsInput
    owners?: OwnershipCreateNestedManyWithoutPartInput
    bicycles?: BicyclePartCreateNestedManyWithoutPartInput
    hub?: HubCreateNestedOneWithoutPartInput
    rim?: RimCreateNestedOneWithoutPartInput
    cogset?: CogsetCreateNestedOneWithoutPartInput
  }

  export type PartUncheckedCreateInput = {
    id?: number
    categories?: string | null
    type?: string | null
    designationCode?: string | null
    name?: string | null
    notes?: string | null
    makerId?: number | null
    owners?: OwnershipUncheckedCreateNestedManyWithoutPartInput
    bicycles?: BicyclePartUncheckedCreateNestedManyWithoutPartInput
    hub?: HubUncheckedCreateNestedOneWithoutPartInput
    rim?: RimUncheckedCreateNestedOneWithoutPartInput
    cogset?: CogsetUncheckedCreateNestedOneWithoutPartInput
  }

  export type PartUpdateInput = {
    categories?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    designationCode?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    maker?: MakerUpdateOneWithoutPartsNestedInput
    owners?: OwnershipUpdateManyWithoutPartNestedInput
    bicycles?: BicyclePartUpdateManyWithoutPartNestedInput
    hub?: HubUpdateOneWithoutPartNestedInput
    rim?: RimUpdateOneWithoutPartNestedInput
    cogset?: CogsetUpdateOneWithoutPartNestedInput
  }

  export type PartUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    categories?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    designationCode?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    makerId?: NullableIntFieldUpdateOperationsInput | number | null
    owners?: OwnershipUncheckedUpdateManyWithoutPartNestedInput
    bicycles?: BicyclePartUncheckedUpdateManyWithoutPartNestedInput
    hub?: HubUncheckedUpdateOneWithoutPartNestedInput
    rim?: RimUncheckedUpdateOneWithoutPartNestedInput
    cogset?: CogsetUncheckedUpdateOneWithoutPartNestedInput
  }

  export type PartUpdateManyMutationInput = {
    categories?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    designationCode?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PartUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    categories?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    designationCode?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    makerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HubCreateInput = {
    position?: string | null
    spokeCount?: number | null
    overLocknutDistance?: number | null
    flangeDiameterLeft?: number | null
    flangeDiameterRight?: number | null
    flangeLeftToCenter?: number | null
    flangeRightToCenter?: number | null
    sflangeLeftToOLN?: number | null
    flangeRightToOLN?: number | null
    spokeHoleDiameter?: number | null
    part?: PartCreateNestedOneWithoutHubInput
    wheels?: WheelCreateNestedManyWithoutHubInput
  }

  export type HubUncheckedCreateInput = {
    id?: number
    partId?: number | null
    position?: string | null
    spokeCount?: number | null
    overLocknutDistance?: number | null
    flangeDiameterLeft?: number | null
    flangeDiameterRight?: number | null
    flangeLeftToCenter?: number | null
    flangeRightToCenter?: number | null
    sflangeLeftToOLN?: number | null
    flangeRightToOLN?: number | null
    spokeHoleDiameter?: number | null
    wheels?: WheelUncheckedCreateNestedManyWithoutHubInput
  }

  export type HubUpdateInput = {
    position?: NullableStringFieldUpdateOperationsInput | string | null
    spokeCount?: NullableIntFieldUpdateOperationsInput | number | null
    overLocknutDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    flangeDiameterLeft?: NullableFloatFieldUpdateOperationsInput | number | null
    flangeDiameterRight?: NullableFloatFieldUpdateOperationsInput | number | null
    flangeLeftToCenter?: NullableFloatFieldUpdateOperationsInput | number | null
    flangeRightToCenter?: NullableFloatFieldUpdateOperationsInput | number | null
    sflangeLeftToOLN?: NullableFloatFieldUpdateOperationsInput | number | null
    flangeRightToOLN?: NullableFloatFieldUpdateOperationsInput | number | null
    spokeHoleDiameter?: NullableFloatFieldUpdateOperationsInput | number | null
    part?: PartUpdateOneWithoutHubNestedInput
    wheels?: WheelUpdateManyWithoutHubNestedInput
  }

  export type HubUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    partId?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    spokeCount?: NullableIntFieldUpdateOperationsInput | number | null
    overLocknutDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    flangeDiameterLeft?: NullableFloatFieldUpdateOperationsInput | number | null
    flangeDiameterRight?: NullableFloatFieldUpdateOperationsInput | number | null
    flangeLeftToCenter?: NullableFloatFieldUpdateOperationsInput | number | null
    flangeRightToCenter?: NullableFloatFieldUpdateOperationsInput | number | null
    sflangeLeftToOLN?: NullableFloatFieldUpdateOperationsInput | number | null
    flangeRightToOLN?: NullableFloatFieldUpdateOperationsInput | number | null
    spokeHoleDiameter?: NullableFloatFieldUpdateOperationsInput | number | null
    wheels?: WheelUncheckedUpdateManyWithoutHubNestedInput
  }

  export type HubUpdateManyMutationInput = {
    position?: NullableStringFieldUpdateOperationsInput | string | null
    spokeCount?: NullableIntFieldUpdateOperationsInput | number | null
    overLocknutDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    flangeDiameterLeft?: NullableFloatFieldUpdateOperationsInput | number | null
    flangeDiameterRight?: NullableFloatFieldUpdateOperationsInput | number | null
    flangeLeftToCenter?: NullableFloatFieldUpdateOperationsInput | number | null
    flangeRightToCenter?: NullableFloatFieldUpdateOperationsInput | number | null
    sflangeLeftToOLN?: NullableFloatFieldUpdateOperationsInput | number | null
    flangeRightToOLN?: NullableFloatFieldUpdateOperationsInput | number | null
    spokeHoleDiameter?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type HubUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    partId?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    spokeCount?: NullableIntFieldUpdateOperationsInput | number | null
    overLocknutDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    flangeDiameterLeft?: NullableFloatFieldUpdateOperationsInput | number | null
    flangeDiameterRight?: NullableFloatFieldUpdateOperationsInput | number | null
    flangeLeftToCenter?: NullableFloatFieldUpdateOperationsInput | number | null
    flangeRightToCenter?: NullableFloatFieldUpdateOperationsInput | number | null
    sflangeLeftToOLN?: NullableFloatFieldUpdateOperationsInput | number | null
    flangeRightToOLN?: NullableFloatFieldUpdateOperationsInput | number | null
    spokeHoleDiameter?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type RimCreateInput = {
    specEffectiveDiameter?: number | null
    specWidthInternal?: number | null
    specWidthExternal?: number | null
    specSectionHeight?: number | null
    part?: PartCreateNestedOneWithoutRimInput
    wheels?: WheelCreateNestedManyWithoutRimInput
  }

  export type RimUncheckedCreateInput = {
    id?: number
    partId?: number | null
    specEffectiveDiameter?: number | null
    specWidthInternal?: number | null
    specWidthExternal?: number | null
    specSectionHeight?: number | null
    wheels?: WheelUncheckedCreateNestedManyWithoutRimInput
  }

  export type RimUpdateInput = {
    specEffectiveDiameter?: NullableFloatFieldUpdateOperationsInput | number | null
    specWidthInternal?: NullableFloatFieldUpdateOperationsInput | number | null
    specWidthExternal?: NullableFloatFieldUpdateOperationsInput | number | null
    specSectionHeight?: NullableFloatFieldUpdateOperationsInput | number | null
    part?: PartUpdateOneWithoutRimNestedInput
    wheels?: WheelUpdateManyWithoutRimNestedInput
  }

  export type RimUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    partId?: NullableIntFieldUpdateOperationsInput | number | null
    specEffectiveDiameter?: NullableFloatFieldUpdateOperationsInput | number | null
    specWidthInternal?: NullableFloatFieldUpdateOperationsInput | number | null
    specWidthExternal?: NullableFloatFieldUpdateOperationsInput | number | null
    specSectionHeight?: NullableFloatFieldUpdateOperationsInput | number | null
    wheels?: WheelUncheckedUpdateManyWithoutRimNestedInput
  }

  export type RimUpdateManyMutationInput = {
    specEffectiveDiameter?: NullableFloatFieldUpdateOperationsInput | number | null
    specWidthInternal?: NullableFloatFieldUpdateOperationsInput | number | null
    specWidthExternal?: NullableFloatFieldUpdateOperationsInput | number | null
    specSectionHeight?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type RimUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    partId?: NullableIntFieldUpdateOperationsInput | number | null
    specEffectiveDiameter?: NullableFloatFieldUpdateOperationsInput | number | null
    specWidthInternal?: NullableFloatFieldUpdateOperationsInput | number | null
    specWidthExternal?: NullableFloatFieldUpdateOperationsInput | number | null
    specSectionHeight?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type CogsetCreateInput = {
    type?: string | null
    cogs?: string | null
    notes?: string | null
    part?: PartCreateNestedOneWithoutCogsetInput
  }

  export type CogsetUncheckedCreateInput = {
    id?: number
    type?: string | null
    cogs?: string | null
    notes?: string | null
    partId?: number | null
  }

  export type CogsetUpdateInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
    cogs?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    part?: PartUpdateOneWithoutCogsetNestedInput
  }

  export type CogsetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    cogs?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    partId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CogsetUpdateManyMutationInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
    cogs?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CogsetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    cogs?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    partId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WheelCreateInput = {
    name?: string | null
    notes?: string | null
    hub?: HubCreateNestedOneWithoutWheelsInput
    rim?: RimCreateNestedOneWithoutWheelsInput
    wheelsFoward?: WheelsetCreateNestedManyWithoutWheelFowardInput
    wheelsBack?: WheelsetCreateNestedManyWithoutWheelBackInput
    owners?: OwnershipCreateNestedManyWithoutWheelInput
  }

  export type WheelUncheckedCreateInput = {
    id?: number
    name?: string | null
    notes?: string | null
    hubId?: number | null
    rimId?: number | null
    wheelsFoward?: WheelsetUncheckedCreateNestedManyWithoutWheelFowardInput
    wheelsBack?: WheelsetUncheckedCreateNestedManyWithoutWheelBackInput
    owners?: OwnershipUncheckedCreateNestedManyWithoutWheelInput
  }

  export type WheelUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    hub?: HubUpdateOneWithoutWheelsNestedInput
    rim?: RimUpdateOneWithoutWheelsNestedInput
    wheelsFoward?: WheelsetUpdateManyWithoutWheelFowardNestedInput
    wheelsBack?: WheelsetUpdateManyWithoutWheelBackNestedInput
    owners?: OwnershipUpdateManyWithoutWheelNestedInput
  }

  export type WheelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    hubId?: NullableIntFieldUpdateOperationsInput | number | null
    rimId?: NullableIntFieldUpdateOperationsInput | number | null
    wheelsFoward?: WheelsetUncheckedUpdateManyWithoutWheelFowardNestedInput
    wheelsBack?: WheelsetUncheckedUpdateManyWithoutWheelBackNestedInput
    owners?: OwnershipUncheckedUpdateManyWithoutWheelNestedInput
  }

  export type WheelUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WheelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    hubId?: NullableIntFieldUpdateOperationsInput | number | null
    rimId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WheelsetCreateInput = {
    name?: string | null
    notes?: string | null
    wheelFoward?: WheelCreateNestedOneWithoutWheelsFowardInput
    wheelBack?: WheelCreateNestedOneWithoutWheelsBackInput
    owners?: OwnershipCreateNestedManyWithoutWheelSetInput
  }

  export type WheelsetUncheckedCreateInput = {
    id?: number
    name?: string | null
    notes?: string | null
    wheelFowardId?: number | null
    wheelBackId?: number | null
    owners?: OwnershipUncheckedCreateNestedManyWithoutWheelSetInput
  }

  export type WheelsetUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    wheelFoward?: WheelUpdateOneWithoutWheelsFowardNestedInput
    wheelBack?: WheelUpdateOneWithoutWheelsBackNestedInput
    owners?: OwnershipUpdateManyWithoutWheelSetNestedInput
  }

  export type WheelsetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    wheelFowardId?: NullableIntFieldUpdateOperationsInput | number | null
    wheelBackId?: NullableIntFieldUpdateOperationsInput | number | null
    owners?: OwnershipUncheckedUpdateManyWithoutWheelSetNestedInput
  }

  export type WheelsetUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WheelsetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    wheelFowardId?: NullableIntFieldUpdateOperationsInput | number | null
    wheelBackId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type OwnershipListRelationFilter = {
    every?: OwnershipWhereInput
    some?: OwnershipWhereInput
    none?: OwnershipWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OwnershipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CyclistCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nameLast?: SortOrder
    nameFirst?: SortOrder
    providerId?: SortOrder
    provider?: SortOrder
    roles?: SortOrder
    registered?: SortOrder
    lastLogIn?: SortOrder
  }

  export type CyclistAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CyclistMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nameLast?: SortOrder
    nameFirst?: SortOrder
    providerId?: SortOrder
    provider?: SortOrder
    roles?: SortOrder
    registered?: SortOrder
    lastLogIn?: SortOrder
  }

  export type CyclistMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nameLast?: SortOrder
    nameFirst?: SortOrder
    providerId?: SortOrder
    provider?: SortOrder
    roles?: SortOrder
    registered?: SortOrder
    lastLogIn?: SortOrder
  }

  export type CyclistSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CyclistNullableRelationFilter = {
    is?: CyclistWhereInput | null
    isNot?: CyclistWhereInput | null
  }

  export type BicycleNullableRelationFilter = {
    is?: BicycleWhereInput | null
    isNot?: BicycleWhereInput | null
  }

  export type WheelNullableRelationFilter = {
    is?: WheelWhereInput | null
    isNot?: WheelWhereInput | null
  }

  export type WheelsetNullableRelationFilter = {
    is?: WheelsetWhereInput | null
    isNot?: WheelsetWhereInput | null
  }

  export type PartNullableRelationFilter = {
    is?: PartWhereInput | null
    isNot?: PartWhereInput | null
  }

  export type OwnershipCountOrderByAggregateInput = {
    id?: SortOrder
    acquired?: SortOrder
    condition?: SortOrder
    notes?: SortOrder
    ownerId?: SortOrder
    bicycleId?: SortOrder
    wheelId?: SortOrder
    wheelSetId?: SortOrder
    partId?: SortOrder
  }

  export type OwnershipAvgOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    bicycleId?: SortOrder
    wheelId?: SortOrder
    wheelSetId?: SortOrder
    partId?: SortOrder
  }

  export type OwnershipMaxOrderByAggregateInput = {
    id?: SortOrder
    acquired?: SortOrder
    condition?: SortOrder
    notes?: SortOrder
    ownerId?: SortOrder
    bicycleId?: SortOrder
    wheelId?: SortOrder
    wheelSetId?: SortOrder
    partId?: SortOrder
  }

  export type OwnershipMinOrderByAggregateInput = {
    id?: SortOrder
    acquired?: SortOrder
    condition?: SortOrder
    notes?: SortOrder
    ownerId?: SortOrder
    bicycleId?: SortOrder
    wheelId?: SortOrder
    wheelSetId?: SortOrder
    partId?: SortOrder
  }

  export type OwnershipSumOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    bicycleId?: SortOrder
    wheelId?: SortOrder
    wheelSetId?: SortOrder
    partId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BicyclePartListRelationFilter = {
    every?: BicyclePartWhereInput
    some?: BicyclePartWhereInput
    none?: BicyclePartWhereInput
  }

  export type BicyclePartOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BicycleCountOrderByAggregateInput = {
    id?: SortOrder
    notes?: SortOrder
  }

  export type BicycleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BicycleMaxOrderByAggregateInput = {
    id?: SortOrder
    notes?: SortOrder
  }

  export type BicycleMinOrderByAggregateInput = {
    id?: SortOrder
    notes?: SortOrder
  }

  export type BicycleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BicyclePartCountOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    notes?: SortOrder
    bicycleId?: SortOrder
    partId?: SortOrder
  }

  export type BicyclePartAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    bicycleId?: SortOrder
    partId?: SortOrder
  }

  export type BicyclePartMaxOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    notes?: SortOrder
    bicycleId?: SortOrder
    partId?: SortOrder
  }

  export type BicyclePartMinOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    notes?: SortOrder
    bicycleId?: SortOrder
    partId?: SortOrder
  }

  export type BicyclePartSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    bicycleId?: SortOrder
    partId?: SortOrder
  }

  export type PartListRelationFilter = {
    every?: PartWhereInput
    some?: PartWhereInput
    none?: PartWhereInput
  }

  export type PartOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MakerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nameShort?: SortOrder
    nameAbbreviation?: SortOrder
    notes?: SortOrder
  }

  export type MakerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MakerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nameShort?: SortOrder
    nameAbbreviation?: SortOrder
    notes?: SortOrder
  }

  export type MakerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nameShort?: SortOrder
    nameAbbreviation?: SortOrder
    notes?: SortOrder
  }

  export type MakerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MakerNullableRelationFilter = {
    is?: MakerWhereInput | null
    isNot?: MakerWhereInput | null
  }

  export type HubNullableRelationFilter = {
    is?: HubWhereInput | null
    isNot?: HubWhereInput | null
  }

  export type RimNullableRelationFilter = {
    is?: RimWhereInput | null
    isNot?: RimWhereInput | null
  }

  export type CogsetNullableRelationFilter = {
    is?: CogsetWhereInput | null
    isNot?: CogsetWhereInput | null
  }

  export type PartCountOrderByAggregateInput = {
    id?: SortOrder
    categories?: SortOrder
    type?: SortOrder
    designationCode?: SortOrder
    name?: SortOrder
    notes?: SortOrder
    makerId?: SortOrder
  }

  export type PartAvgOrderByAggregateInput = {
    id?: SortOrder
    makerId?: SortOrder
  }

  export type PartMaxOrderByAggregateInput = {
    id?: SortOrder
    categories?: SortOrder
    type?: SortOrder
    designationCode?: SortOrder
    name?: SortOrder
    notes?: SortOrder
    makerId?: SortOrder
  }

  export type PartMinOrderByAggregateInput = {
    id?: SortOrder
    categories?: SortOrder
    type?: SortOrder
    designationCode?: SortOrder
    name?: SortOrder
    notes?: SortOrder
    makerId?: SortOrder
  }

  export type PartSumOrderByAggregateInput = {
    id?: SortOrder
    makerId?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type WheelListRelationFilter = {
    every?: WheelWhereInput
    some?: WheelWhereInput
    none?: WheelWhereInput
  }

  export type WheelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HubCountOrderByAggregateInput = {
    id?: SortOrder
    partId?: SortOrder
    position?: SortOrder
    spokeCount?: SortOrder
    overLocknutDistance?: SortOrder
    flangeDiameterLeft?: SortOrder
    flangeDiameterRight?: SortOrder
    flangeLeftToCenter?: SortOrder
    flangeRightToCenter?: SortOrder
    sflangeLeftToOLN?: SortOrder
    flangeRightToOLN?: SortOrder
    spokeHoleDiameter?: SortOrder
  }

  export type HubAvgOrderByAggregateInput = {
    id?: SortOrder
    partId?: SortOrder
    spokeCount?: SortOrder
    overLocknutDistance?: SortOrder
    flangeDiameterLeft?: SortOrder
    flangeDiameterRight?: SortOrder
    flangeLeftToCenter?: SortOrder
    flangeRightToCenter?: SortOrder
    sflangeLeftToOLN?: SortOrder
    flangeRightToOLN?: SortOrder
    spokeHoleDiameter?: SortOrder
  }

  export type HubMaxOrderByAggregateInput = {
    id?: SortOrder
    partId?: SortOrder
    position?: SortOrder
    spokeCount?: SortOrder
    overLocknutDistance?: SortOrder
    flangeDiameterLeft?: SortOrder
    flangeDiameterRight?: SortOrder
    flangeLeftToCenter?: SortOrder
    flangeRightToCenter?: SortOrder
    sflangeLeftToOLN?: SortOrder
    flangeRightToOLN?: SortOrder
    spokeHoleDiameter?: SortOrder
  }

  export type HubMinOrderByAggregateInput = {
    id?: SortOrder
    partId?: SortOrder
    position?: SortOrder
    spokeCount?: SortOrder
    overLocknutDistance?: SortOrder
    flangeDiameterLeft?: SortOrder
    flangeDiameterRight?: SortOrder
    flangeLeftToCenter?: SortOrder
    flangeRightToCenter?: SortOrder
    sflangeLeftToOLN?: SortOrder
    flangeRightToOLN?: SortOrder
    spokeHoleDiameter?: SortOrder
  }

  export type HubSumOrderByAggregateInput = {
    id?: SortOrder
    partId?: SortOrder
    spokeCount?: SortOrder
    overLocknutDistance?: SortOrder
    flangeDiameterLeft?: SortOrder
    flangeDiameterRight?: SortOrder
    flangeLeftToCenter?: SortOrder
    flangeRightToCenter?: SortOrder
    sflangeLeftToOLN?: SortOrder
    flangeRightToOLN?: SortOrder
    spokeHoleDiameter?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type RimCountOrderByAggregateInput = {
    id?: SortOrder
    partId?: SortOrder
    specEffectiveDiameter?: SortOrder
    specWidthInternal?: SortOrder
    specWidthExternal?: SortOrder
    specSectionHeight?: SortOrder
  }

  export type RimAvgOrderByAggregateInput = {
    id?: SortOrder
    partId?: SortOrder
    specEffectiveDiameter?: SortOrder
    specWidthInternal?: SortOrder
    specWidthExternal?: SortOrder
    specSectionHeight?: SortOrder
  }

  export type RimMaxOrderByAggregateInput = {
    id?: SortOrder
    partId?: SortOrder
    specEffectiveDiameter?: SortOrder
    specWidthInternal?: SortOrder
    specWidthExternal?: SortOrder
    specSectionHeight?: SortOrder
  }

  export type RimMinOrderByAggregateInput = {
    id?: SortOrder
    partId?: SortOrder
    specEffectiveDiameter?: SortOrder
    specWidthInternal?: SortOrder
    specWidthExternal?: SortOrder
    specSectionHeight?: SortOrder
  }

  export type RimSumOrderByAggregateInput = {
    id?: SortOrder
    partId?: SortOrder
    specEffectiveDiameter?: SortOrder
    specWidthInternal?: SortOrder
    specWidthExternal?: SortOrder
    specSectionHeight?: SortOrder
  }

  export type CogsetCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    cogs?: SortOrder
    notes?: SortOrder
    partId?: SortOrder
  }

  export type CogsetAvgOrderByAggregateInput = {
    id?: SortOrder
    partId?: SortOrder
  }

  export type CogsetMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    cogs?: SortOrder
    notes?: SortOrder
    partId?: SortOrder
  }

  export type CogsetMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    cogs?: SortOrder
    notes?: SortOrder
    partId?: SortOrder
  }

  export type CogsetSumOrderByAggregateInput = {
    id?: SortOrder
    partId?: SortOrder
  }

  export type WheelsetListRelationFilter = {
    every?: WheelsetWhereInput
    some?: WheelsetWhereInput
    none?: WheelsetWhereInput
  }

  export type WheelsetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WheelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    notes?: SortOrder
    hubId?: SortOrder
    rimId?: SortOrder
  }

  export type WheelAvgOrderByAggregateInput = {
    id?: SortOrder
    hubId?: SortOrder
    rimId?: SortOrder
  }

  export type WheelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    notes?: SortOrder
    hubId?: SortOrder
    rimId?: SortOrder
  }

  export type WheelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    notes?: SortOrder
    hubId?: SortOrder
    rimId?: SortOrder
  }

  export type WheelSumOrderByAggregateInput = {
    id?: SortOrder
    hubId?: SortOrder
    rimId?: SortOrder
  }

  export type WheelsetCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    notes?: SortOrder
    wheelFowardId?: SortOrder
    wheelBackId?: SortOrder
  }

  export type WheelsetAvgOrderByAggregateInput = {
    id?: SortOrder
    wheelFowardId?: SortOrder
    wheelBackId?: SortOrder
  }

  export type WheelsetMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    notes?: SortOrder
    wheelFowardId?: SortOrder
    wheelBackId?: SortOrder
  }

  export type WheelsetMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    notes?: SortOrder
    wheelFowardId?: SortOrder
    wheelBackId?: SortOrder
  }

  export type WheelsetSumOrderByAggregateInput = {
    id?: SortOrder
    wheelFowardId?: SortOrder
    wheelBackId?: SortOrder
  }

  export type OwnershipCreateNestedManyWithoutOwnerInput = {
    create?: XOR<OwnershipCreateWithoutOwnerInput, OwnershipUncheckedCreateWithoutOwnerInput> | OwnershipCreateWithoutOwnerInput[] | OwnershipUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: OwnershipCreateOrConnectWithoutOwnerInput | OwnershipCreateOrConnectWithoutOwnerInput[]
    connect?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
  }

  export type OwnershipUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<OwnershipCreateWithoutOwnerInput, OwnershipUncheckedCreateWithoutOwnerInput> | OwnershipCreateWithoutOwnerInput[] | OwnershipUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: OwnershipCreateOrConnectWithoutOwnerInput | OwnershipCreateOrConnectWithoutOwnerInput[]
    connect?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type OwnershipUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<OwnershipCreateWithoutOwnerInput, OwnershipUncheckedCreateWithoutOwnerInput> | OwnershipCreateWithoutOwnerInput[] | OwnershipUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: OwnershipCreateOrConnectWithoutOwnerInput | OwnershipCreateOrConnectWithoutOwnerInput[]
    upsert?: OwnershipUpsertWithWhereUniqueWithoutOwnerInput | OwnershipUpsertWithWhereUniqueWithoutOwnerInput[]
    set?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
    disconnect?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
    delete?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
    connect?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
    update?: OwnershipUpdateWithWhereUniqueWithoutOwnerInput | OwnershipUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: OwnershipUpdateManyWithWhereWithoutOwnerInput | OwnershipUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: OwnershipScalarWhereInput | OwnershipScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OwnershipUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<OwnershipCreateWithoutOwnerInput, OwnershipUncheckedCreateWithoutOwnerInput> | OwnershipCreateWithoutOwnerInput[] | OwnershipUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: OwnershipCreateOrConnectWithoutOwnerInput | OwnershipCreateOrConnectWithoutOwnerInput[]
    upsert?: OwnershipUpsertWithWhereUniqueWithoutOwnerInput | OwnershipUpsertWithWhereUniqueWithoutOwnerInput[]
    set?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
    disconnect?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
    delete?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
    connect?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
    update?: OwnershipUpdateWithWhereUniqueWithoutOwnerInput | OwnershipUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: OwnershipUpdateManyWithWhereWithoutOwnerInput | OwnershipUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: OwnershipScalarWhereInput | OwnershipScalarWhereInput[]
  }

  export type CyclistCreateNestedOneWithoutOwnsInput = {
    create?: XOR<CyclistCreateWithoutOwnsInput, CyclistUncheckedCreateWithoutOwnsInput>
    connectOrCreate?: CyclistCreateOrConnectWithoutOwnsInput
    connect?: CyclistWhereUniqueInput
  }

  export type BicycleCreateNestedOneWithoutOwnersInput = {
    create?: XOR<BicycleCreateWithoutOwnersInput, BicycleUncheckedCreateWithoutOwnersInput>
    connectOrCreate?: BicycleCreateOrConnectWithoutOwnersInput
    connect?: BicycleWhereUniqueInput
  }

  export type WheelCreateNestedOneWithoutOwnersInput = {
    create?: XOR<WheelCreateWithoutOwnersInput, WheelUncheckedCreateWithoutOwnersInput>
    connectOrCreate?: WheelCreateOrConnectWithoutOwnersInput
    connect?: WheelWhereUniqueInput
  }

  export type WheelsetCreateNestedOneWithoutOwnersInput = {
    create?: XOR<WheelsetCreateWithoutOwnersInput, WheelsetUncheckedCreateWithoutOwnersInput>
    connectOrCreate?: WheelsetCreateOrConnectWithoutOwnersInput
    connect?: WheelsetWhereUniqueInput
  }

  export type PartCreateNestedOneWithoutOwnersInput = {
    create?: XOR<PartCreateWithoutOwnersInput, PartUncheckedCreateWithoutOwnersInput>
    connectOrCreate?: PartCreateOrConnectWithoutOwnersInput
    connect?: PartWhereUniqueInput
  }

  export type CyclistUpdateOneWithoutOwnsNestedInput = {
    create?: XOR<CyclistCreateWithoutOwnsInput, CyclistUncheckedCreateWithoutOwnsInput>
    connectOrCreate?: CyclistCreateOrConnectWithoutOwnsInput
    upsert?: CyclistUpsertWithoutOwnsInput
    disconnect?: CyclistWhereInput | boolean
    delete?: CyclistWhereInput | boolean
    connect?: CyclistWhereUniqueInput
    update?: XOR<XOR<CyclistUpdateToOneWithWhereWithoutOwnsInput, CyclistUpdateWithoutOwnsInput>, CyclistUncheckedUpdateWithoutOwnsInput>
  }

  export type BicycleUpdateOneWithoutOwnersNestedInput = {
    create?: XOR<BicycleCreateWithoutOwnersInput, BicycleUncheckedCreateWithoutOwnersInput>
    connectOrCreate?: BicycleCreateOrConnectWithoutOwnersInput
    upsert?: BicycleUpsertWithoutOwnersInput
    disconnect?: BicycleWhereInput | boolean
    delete?: BicycleWhereInput | boolean
    connect?: BicycleWhereUniqueInput
    update?: XOR<XOR<BicycleUpdateToOneWithWhereWithoutOwnersInput, BicycleUpdateWithoutOwnersInput>, BicycleUncheckedUpdateWithoutOwnersInput>
  }

  export type WheelUpdateOneWithoutOwnersNestedInput = {
    create?: XOR<WheelCreateWithoutOwnersInput, WheelUncheckedCreateWithoutOwnersInput>
    connectOrCreate?: WheelCreateOrConnectWithoutOwnersInput
    upsert?: WheelUpsertWithoutOwnersInput
    disconnect?: WheelWhereInput | boolean
    delete?: WheelWhereInput | boolean
    connect?: WheelWhereUniqueInput
    update?: XOR<XOR<WheelUpdateToOneWithWhereWithoutOwnersInput, WheelUpdateWithoutOwnersInput>, WheelUncheckedUpdateWithoutOwnersInput>
  }

  export type WheelsetUpdateOneWithoutOwnersNestedInput = {
    create?: XOR<WheelsetCreateWithoutOwnersInput, WheelsetUncheckedCreateWithoutOwnersInput>
    connectOrCreate?: WheelsetCreateOrConnectWithoutOwnersInput
    upsert?: WheelsetUpsertWithoutOwnersInput
    disconnect?: WheelsetWhereInput | boolean
    delete?: WheelsetWhereInput | boolean
    connect?: WheelsetWhereUniqueInput
    update?: XOR<XOR<WheelsetUpdateToOneWithWhereWithoutOwnersInput, WheelsetUpdateWithoutOwnersInput>, WheelsetUncheckedUpdateWithoutOwnersInput>
  }

  export type PartUpdateOneWithoutOwnersNestedInput = {
    create?: XOR<PartCreateWithoutOwnersInput, PartUncheckedCreateWithoutOwnersInput>
    connectOrCreate?: PartCreateOrConnectWithoutOwnersInput
    upsert?: PartUpsertWithoutOwnersInput
    disconnect?: PartWhereInput | boolean
    delete?: PartWhereInput | boolean
    connect?: PartWhereUniqueInput
    update?: XOR<XOR<PartUpdateToOneWithWhereWithoutOwnersInput, PartUpdateWithoutOwnersInput>, PartUncheckedUpdateWithoutOwnersInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BicyclePartCreateNestedManyWithoutBicycleInput = {
    create?: XOR<BicyclePartCreateWithoutBicycleInput, BicyclePartUncheckedCreateWithoutBicycleInput> | BicyclePartCreateWithoutBicycleInput[] | BicyclePartUncheckedCreateWithoutBicycleInput[]
    connectOrCreate?: BicyclePartCreateOrConnectWithoutBicycleInput | BicyclePartCreateOrConnectWithoutBicycleInput[]
    connect?: BicyclePartWhereUniqueInput | BicyclePartWhereUniqueInput[]
  }

  export type OwnershipCreateNestedManyWithoutBicycleInput = {
    create?: XOR<OwnershipCreateWithoutBicycleInput, OwnershipUncheckedCreateWithoutBicycleInput> | OwnershipCreateWithoutBicycleInput[] | OwnershipUncheckedCreateWithoutBicycleInput[]
    connectOrCreate?: OwnershipCreateOrConnectWithoutBicycleInput | OwnershipCreateOrConnectWithoutBicycleInput[]
    connect?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
  }

  export type BicyclePartUncheckedCreateNestedManyWithoutBicycleInput = {
    create?: XOR<BicyclePartCreateWithoutBicycleInput, BicyclePartUncheckedCreateWithoutBicycleInput> | BicyclePartCreateWithoutBicycleInput[] | BicyclePartUncheckedCreateWithoutBicycleInput[]
    connectOrCreate?: BicyclePartCreateOrConnectWithoutBicycleInput | BicyclePartCreateOrConnectWithoutBicycleInput[]
    connect?: BicyclePartWhereUniqueInput | BicyclePartWhereUniqueInput[]
  }

  export type OwnershipUncheckedCreateNestedManyWithoutBicycleInput = {
    create?: XOR<OwnershipCreateWithoutBicycleInput, OwnershipUncheckedCreateWithoutBicycleInput> | OwnershipCreateWithoutBicycleInput[] | OwnershipUncheckedCreateWithoutBicycleInput[]
    connectOrCreate?: OwnershipCreateOrConnectWithoutBicycleInput | OwnershipCreateOrConnectWithoutBicycleInput[]
    connect?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
  }

  export type BicyclePartUpdateManyWithoutBicycleNestedInput = {
    create?: XOR<BicyclePartCreateWithoutBicycleInput, BicyclePartUncheckedCreateWithoutBicycleInput> | BicyclePartCreateWithoutBicycleInput[] | BicyclePartUncheckedCreateWithoutBicycleInput[]
    connectOrCreate?: BicyclePartCreateOrConnectWithoutBicycleInput | BicyclePartCreateOrConnectWithoutBicycleInput[]
    upsert?: BicyclePartUpsertWithWhereUniqueWithoutBicycleInput | BicyclePartUpsertWithWhereUniqueWithoutBicycleInput[]
    set?: BicyclePartWhereUniqueInput | BicyclePartWhereUniqueInput[]
    disconnect?: BicyclePartWhereUniqueInput | BicyclePartWhereUniqueInput[]
    delete?: BicyclePartWhereUniqueInput | BicyclePartWhereUniqueInput[]
    connect?: BicyclePartWhereUniqueInput | BicyclePartWhereUniqueInput[]
    update?: BicyclePartUpdateWithWhereUniqueWithoutBicycleInput | BicyclePartUpdateWithWhereUniqueWithoutBicycleInput[]
    updateMany?: BicyclePartUpdateManyWithWhereWithoutBicycleInput | BicyclePartUpdateManyWithWhereWithoutBicycleInput[]
    deleteMany?: BicyclePartScalarWhereInput | BicyclePartScalarWhereInput[]
  }

  export type OwnershipUpdateManyWithoutBicycleNestedInput = {
    create?: XOR<OwnershipCreateWithoutBicycleInput, OwnershipUncheckedCreateWithoutBicycleInput> | OwnershipCreateWithoutBicycleInput[] | OwnershipUncheckedCreateWithoutBicycleInput[]
    connectOrCreate?: OwnershipCreateOrConnectWithoutBicycleInput | OwnershipCreateOrConnectWithoutBicycleInput[]
    upsert?: OwnershipUpsertWithWhereUniqueWithoutBicycleInput | OwnershipUpsertWithWhereUniqueWithoutBicycleInput[]
    set?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
    disconnect?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
    delete?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
    connect?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
    update?: OwnershipUpdateWithWhereUniqueWithoutBicycleInput | OwnershipUpdateWithWhereUniqueWithoutBicycleInput[]
    updateMany?: OwnershipUpdateManyWithWhereWithoutBicycleInput | OwnershipUpdateManyWithWhereWithoutBicycleInput[]
    deleteMany?: OwnershipScalarWhereInput | OwnershipScalarWhereInput[]
  }

  export type BicyclePartUncheckedUpdateManyWithoutBicycleNestedInput = {
    create?: XOR<BicyclePartCreateWithoutBicycleInput, BicyclePartUncheckedCreateWithoutBicycleInput> | BicyclePartCreateWithoutBicycleInput[] | BicyclePartUncheckedCreateWithoutBicycleInput[]
    connectOrCreate?: BicyclePartCreateOrConnectWithoutBicycleInput | BicyclePartCreateOrConnectWithoutBicycleInput[]
    upsert?: BicyclePartUpsertWithWhereUniqueWithoutBicycleInput | BicyclePartUpsertWithWhereUniqueWithoutBicycleInput[]
    set?: BicyclePartWhereUniqueInput | BicyclePartWhereUniqueInput[]
    disconnect?: BicyclePartWhereUniqueInput | BicyclePartWhereUniqueInput[]
    delete?: BicyclePartWhereUniqueInput | BicyclePartWhereUniqueInput[]
    connect?: BicyclePartWhereUniqueInput | BicyclePartWhereUniqueInput[]
    update?: BicyclePartUpdateWithWhereUniqueWithoutBicycleInput | BicyclePartUpdateWithWhereUniqueWithoutBicycleInput[]
    updateMany?: BicyclePartUpdateManyWithWhereWithoutBicycleInput | BicyclePartUpdateManyWithWhereWithoutBicycleInput[]
    deleteMany?: BicyclePartScalarWhereInput | BicyclePartScalarWhereInput[]
  }

  export type OwnershipUncheckedUpdateManyWithoutBicycleNestedInput = {
    create?: XOR<OwnershipCreateWithoutBicycleInput, OwnershipUncheckedCreateWithoutBicycleInput> | OwnershipCreateWithoutBicycleInput[] | OwnershipUncheckedCreateWithoutBicycleInput[]
    connectOrCreate?: OwnershipCreateOrConnectWithoutBicycleInput | OwnershipCreateOrConnectWithoutBicycleInput[]
    upsert?: OwnershipUpsertWithWhereUniqueWithoutBicycleInput | OwnershipUpsertWithWhereUniqueWithoutBicycleInput[]
    set?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
    disconnect?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
    delete?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
    connect?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
    update?: OwnershipUpdateWithWhereUniqueWithoutBicycleInput | OwnershipUpdateWithWhereUniqueWithoutBicycleInput[]
    updateMany?: OwnershipUpdateManyWithWhereWithoutBicycleInput | OwnershipUpdateManyWithWhereWithoutBicycleInput[]
    deleteMany?: OwnershipScalarWhereInput | OwnershipScalarWhereInput[]
  }

  export type BicycleCreateNestedOneWithoutPartsInput = {
    create?: XOR<BicycleCreateWithoutPartsInput, BicycleUncheckedCreateWithoutPartsInput>
    connectOrCreate?: BicycleCreateOrConnectWithoutPartsInput
    connect?: BicycleWhereUniqueInput
  }

  export type PartCreateNestedOneWithoutBicyclesInput = {
    create?: XOR<PartCreateWithoutBicyclesInput, PartUncheckedCreateWithoutBicyclesInput>
    connectOrCreate?: PartCreateOrConnectWithoutBicyclesInput
    connect?: PartWhereUniqueInput
  }

  export type BicycleUpdateOneWithoutPartsNestedInput = {
    create?: XOR<BicycleCreateWithoutPartsInput, BicycleUncheckedCreateWithoutPartsInput>
    connectOrCreate?: BicycleCreateOrConnectWithoutPartsInput
    upsert?: BicycleUpsertWithoutPartsInput
    disconnect?: BicycleWhereInput | boolean
    delete?: BicycleWhereInput | boolean
    connect?: BicycleWhereUniqueInput
    update?: XOR<XOR<BicycleUpdateToOneWithWhereWithoutPartsInput, BicycleUpdateWithoutPartsInput>, BicycleUncheckedUpdateWithoutPartsInput>
  }

  export type PartUpdateOneWithoutBicyclesNestedInput = {
    create?: XOR<PartCreateWithoutBicyclesInput, PartUncheckedCreateWithoutBicyclesInput>
    connectOrCreate?: PartCreateOrConnectWithoutBicyclesInput
    upsert?: PartUpsertWithoutBicyclesInput
    disconnect?: PartWhereInput | boolean
    delete?: PartWhereInput | boolean
    connect?: PartWhereUniqueInput
    update?: XOR<XOR<PartUpdateToOneWithWhereWithoutBicyclesInput, PartUpdateWithoutBicyclesInput>, PartUncheckedUpdateWithoutBicyclesInput>
  }

  export type PartCreateNestedManyWithoutMakerInput = {
    create?: XOR<PartCreateWithoutMakerInput, PartUncheckedCreateWithoutMakerInput> | PartCreateWithoutMakerInput[] | PartUncheckedCreateWithoutMakerInput[]
    connectOrCreate?: PartCreateOrConnectWithoutMakerInput | PartCreateOrConnectWithoutMakerInput[]
    connect?: PartWhereUniqueInput | PartWhereUniqueInput[]
  }

  export type PartUncheckedCreateNestedManyWithoutMakerInput = {
    create?: XOR<PartCreateWithoutMakerInput, PartUncheckedCreateWithoutMakerInput> | PartCreateWithoutMakerInput[] | PartUncheckedCreateWithoutMakerInput[]
    connectOrCreate?: PartCreateOrConnectWithoutMakerInput | PartCreateOrConnectWithoutMakerInput[]
    connect?: PartWhereUniqueInput | PartWhereUniqueInput[]
  }

  export type PartUpdateManyWithoutMakerNestedInput = {
    create?: XOR<PartCreateWithoutMakerInput, PartUncheckedCreateWithoutMakerInput> | PartCreateWithoutMakerInput[] | PartUncheckedCreateWithoutMakerInput[]
    connectOrCreate?: PartCreateOrConnectWithoutMakerInput | PartCreateOrConnectWithoutMakerInput[]
    upsert?: PartUpsertWithWhereUniqueWithoutMakerInput | PartUpsertWithWhereUniqueWithoutMakerInput[]
    set?: PartWhereUniqueInput | PartWhereUniqueInput[]
    disconnect?: PartWhereUniqueInput | PartWhereUniqueInput[]
    delete?: PartWhereUniqueInput | PartWhereUniqueInput[]
    connect?: PartWhereUniqueInput | PartWhereUniqueInput[]
    update?: PartUpdateWithWhereUniqueWithoutMakerInput | PartUpdateWithWhereUniqueWithoutMakerInput[]
    updateMany?: PartUpdateManyWithWhereWithoutMakerInput | PartUpdateManyWithWhereWithoutMakerInput[]
    deleteMany?: PartScalarWhereInput | PartScalarWhereInput[]
  }

  export type PartUncheckedUpdateManyWithoutMakerNestedInput = {
    create?: XOR<PartCreateWithoutMakerInput, PartUncheckedCreateWithoutMakerInput> | PartCreateWithoutMakerInput[] | PartUncheckedCreateWithoutMakerInput[]
    connectOrCreate?: PartCreateOrConnectWithoutMakerInput | PartCreateOrConnectWithoutMakerInput[]
    upsert?: PartUpsertWithWhereUniqueWithoutMakerInput | PartUpsertWithWhereUniqueWithoutMakerInput[]
    set?: PartWhereUniqueInput | PartWhereUniqueInput[]
    disconnect?: PartWhereUniqueInput | PartWhereUniqueInput[]
    delete?: PartWhereUniqueInput | PartWhereUniqueInput[]
    connect?: PartWhereUniqueInput | PartWhereUniqueInput[]
    update?: PartUpdateWithWhereUniqueWithoutMakerInput | PartUpdateWithWhereUniqueWithoutMakerInput[]
    updateMany?: PartUpdateManyWithWhereWithoutMakerInput | PartUpdateManyWithWhereWithoutMakerInput[]
    deleteMany?: PartScalarWhereInput | PartScalarWhereInput[]
  }

  export type MakerCreateNestedOneWithoutPartsInput = {
    create?: XOR<MakerCreateWithoutPartsInput, MakerUncheckedCreateWithoutPartsInput>
    connectOrCreate?: MakerCreateOrConnectWithoutPartsInput
    connect?: MakerWhereUniqueInput
  }

  export type OwnershipCreateNestedManyWithoutPartInput = {
    create?: XOR<OwnershipCreateWithoutPartInput, OwnershipUncheckedCreateWithoutPartInput> | OwnershipCreateWithoutPartInput[] | OwnershipUncheckedCreateWithoutPartInput[]
    connectOrCreate?: OwnershipCreateOrConnectWithoutPartInput | OwnershipCreateOrConnectWithoutPartInput[]
    connect?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
  }

  export type BicyclePartCreateNestedManyWithoutPartInput = {
    create?: XOR<BicyclePartCreateWithoutPartInput, BicyclePartUncheckedCreateWithoutPartInput> | BicyclePartCreateWithoutPartInput[] | BicyclePartUncheckedCreateWithoutPartInput[]
    connectOrCreate?: BicyclePartCreateOrConnectWithoutPartInput | BicyclePartCreateOrConnectWithoutPartInput[]
    connect?: BicyclePartWhereUniqueInput | BicyclePartWhereUniqueInput[]
  }

  export type HubCreateNestedOneWithoutPartInput = {
    create?: XOR<HubCreateWithoutPartInput, HubUncheckedCreateWithoutPartInput>
    connectOrCreate?: HubCreateOrConnectWithoutPartInput
    connect?: HubWhereUniqueInput
  }

  export type RimCreateNestedOneWithoutPartInput = {
    create?: XOR<RimCreateWithoutPartInput, RimUncheckedCreateWithoutPartInput>
    connectOrCreate?: RimCreateOrConnectWithoutPartInput
    connect?: RimWhereUniqueInput
  }

  export type CogsetCreateNestedOneWithoutPartInput = {
    create?: XOR<CogsetCreateWithoutPartInput, CogsetUncheckedCreateWithoutPartInput>
    connectOrCreate?: CogsetCreateOrConnectWithoutPartInput
    connect?: CogsetWhereUniqueInput
  }

  export type OwnershipUncheckedCreateNestedManyWithoutPartInput = {
    create?: XOR<OwnershipCreateWithoutPartInput, OwnershipUncheckedCreateWithoutPartInput> | OwnershipCreateWithoutPartInput[] | OwnershipUncheckedCreateWithoutPartInput[]
    connectOrCreate?: OwnershipCreateOrConnectWithoutPartInput | OwnershipCreateOrConnectWithoutPartInput[]
    connect?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
  }

  export type BicyclePartUncheckedCreateNestedManyWithoutPartInput = {
    create?: XOR<BicyclePartCreateWithoutPartInput, BicyclePartUncheckedCreateWithoutPartInput> | BicyclePartCreateWithoutPartInput[] | BicyclePartUncheckedCreateWithoutPartInput[]
    connectOrCreate?: BicyclePartCreateOrConnectWithoutPartInput | BicyclePartCreateOrConnectWithoutPartInput[]
    connect?: BicyclePartWhereUniqueInput | BicyclePartWhereUniqueInput[]
  }

  export type HubUncheckedCreateNestedOneWithoutPartInput = {
    create?: XOR<HubCreateWithoutPartInput, HubUncheckedCreateWithoutPartInput>
    connectOrCreate?: HubCreateOrConnectWithoutPartInput
    connect?: HubWhereUniqueInput
  }

  export type RimUncheckedCreateNestedOneWithoutPartInput = {
    create?: XOR<RimCreateWithoutPartInput, RimUncheckedCreateWithoutPartInput>
    connectOrCreate?: RimCreateOrConnectWithoutPartInput
    connect?: RimWhereUniqueInput
  }

  export type CogsetUncheckedCreateNestedOneWithoutPartInput = {
    create?: XOR<CogsetCreateWithoutPartInput, CogsetUncheckedCreateWithoutPartInput>
    connectOrCreate?: CogsetCreateOrConnectWithoutPartInput
    connect?: CogsetWhereUniqueInput
  }

  export type MakerUpdateOneWithoutPartsNestedInput = {
    create?: XOR<MakerCreateWithoutPartsInput, MakerUncheckedCreateWithoutPartsInput>
    connectOrCreate?: MakerCreateOrConnectWithoutPartsInput
    upsert?: MakerUpsertWithoutPartsInput
    disconnect?: MakerWhereInput | boolean
    delete?: MakerWhereInput | boolean
    connect?: MakerWhereUniqueInput
    update?: XOR<XOR<MakerUpdateToOneWithWhereWithoutPartsInput, MakerUpdateWithoutPartsInput>, MakerUncheckedUpdateWithoutPartsInput>
  }

  export type OwnershipUpdateManyWithoutPartNestedInput = {
    create?: XOR<OwnershipCreateWithoutPartInput, OwnershipUncheckedCreateWithoutPartInput> | OwnershipCreateWithoutPartInput[] | OwnershipUncheckedCreateWithoutPartInput[]
    connectOrCreate?: OwnershipCreateOrConnectWithoutPartInput | OwnershipCreateOrConnectWithoutPartInput[]
    upsert?: OwnershipUpsertWithWhereUniqueWithoutPartInput | OwnershipUpsertWithWhereUniqueWithoutPartInput[]
    set?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
    disconnect?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
    delete?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
    connect?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
    update?: OwnershipUpdateWithWhereUniqueWithoutPartInput | OwnershipUpdateWithWhereUniqueWithoutPartInput[]
    updateMany?: OwnershipUpdateManyWithWhereWithoutPartInput | OwnershipUpdateManyWithWhereWithoutPartInput[]
    deleteMany?: OwnershipScalarWhereInput | OwnershipScalarWhereInput[]
  }

  export type BicyclePartUpdateManyWithoutPartNestedInput = {
    create?: XOR<BicyclePartCreateWithoutPartInput, BicyclePartUncheckedCreateWithoutPartInput> | BicyclePartCreateWithoutPartInput[] | BicyclePartUncheckedCreateWithoutPartInput[]
    connectOrCreate?: BicyclePartCreateOrConnectWithoutPartInput | BicyclePartCreateOrConnectWithoutPartInput[]
    upsert?: BicyclePartUpsertWithWhereUniqueWithoutPartInput | BicyclePartUpsertWithWhereUniqueWithoutPartInput[]
    set?: BicyclePartWhereUniqueInput | BicyclePartWhereUniqueInput[]
    disconnect?: BicyclePartWhereUniqueInput | BicyclePartWhereUniqueInput[]
    delete?: BicyclePartWhereUniqueInput | BicyclePartWhereUniqueInput[]
    connect?: BicyclePartWhereUniqueInput | BicyclePartWhereUniqueInput[]
    update?: BicyclePartUpdateWithWhereUniqueWithoutPartInput | BicyclePartUpdateWithWhereUniqueWithoutPartInput[]
    updateMany?: BicyclePartUpdateManyWithWhereWithoutPartInput | BicyclePartUpdateManyWithWhereWithoutPartInput[]
    deleteMany?: BicyclePartScalarWhereInput | BicyclePartScalarWhereInput[]
  }

  export type HubUpdateOneWithoutPartNestedInput = {
    create?: XOR<HubCreateWithoutPartInput, HubUncheckedCreateWithoutPartInput>
    connectOrCreate?: HubCreateOrConnectWithoutPartInput
    upsert?: HubUpsertWithoutPartInput
    disconnect?: HubWhereInput | boolean
    delete?: HubWhereInput | boolean
    connect?: HubWhereUniqueInput
    update?: XOR<XOR<HubUpdateToOneWithWhereWithoutPartInput, HubUpdateWithoutPartInput>, HubUncheckedUpdateWithoutPartInput>
  }

  export type RimUpdateOneWithoutPartNestedInput = {
    create?: XOR<RimCreateWithoutPartInput, RimUncheckedCreateWithoutPartInput>
    connectOrCreate?: RimCreateOrConnectWithoutPartInput
    upsert?: RimUpsertWithoutPartInput
    disconnect?: RimWhereInput | boolean
    delete?: RimWhereInput | boolean
    connect?: RimWhereUniqueInput
    update?: XOR<XOR<RimUpdateToOneWithWhereWithoutPartInput, RimUpdateWithoutPartInput>, RimUncheckedUpdateWithoutPartInput>
  }

  export type CogsetUpdateOneWithoutPartNestedInput = {
    create?: XOR<CogsetCreateWithoutPartInput, CogsetUncheckedCreateWithoutPartInput>
    connectOrCreate?: CogsetCreateOrConnectWithoutPartInput
    upsert?: CogsetUpsertWithoutPartInput
    disconnect?: CogsetWhereInput | boolean
    delete?: CogsetWhereInput | boolean
    connect?: CogsetWhereUniqueInput
    update?: XOR<XOR<CogsetUpdateToOneWithWhereWithoutPartInput, CogsetUpdateWithoutPartInput>, CogsetUncheckedUpdateWithoutPartInput>
  }

  export type OwnershipUncheckedUpdateManyWithoutPartNestedInput = {
    create?: XOR<OwnershipCreateWithoutPartInput, OwnershipUncheckedCreateWithoutPartInput> | OwnershipCreateWithoutPartInput[] | OwnershipUncheckedCreateWithoutPartInput[]
    connectOrCreate?: OwnershipCreateOrConnectWithoutPartInput | OwnershipCreateOrConnectWithoutPartInput[]
    upsert?: OwnershipUpsertWithWhereUniqueWithoutPartInput | OwnershipUpsertWithWhereUniqueWithoutPartInput[]
    set?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
    disconnect?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
    delete?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
    connect?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
    update?: OwnershipUpdateWithWhereUniqueWithoutPartInput | OwnershipUpdateWithWhereUniqueWithoutPartInput[]
    updateMany?: OwnershipUpdateManyWithWhereWithoutPartInput | OwnershipUpdateManyWithWhereWithoutPartInput[]
    deleteMany?: OwnershipScalarWhereInput | OwnershipScalarWhereInput[]
  }

  export type BicyclePartUncheckedUpdateManyWithoutPartNestedInput = {
    create?: XOR<BicyclePartCreateWithoutPartInput, BicyclePartUncheckedCreateWithoutPartInput> | BicyclePartCreateWithoutPartInput[] | BicyclePartUncheckedCreateWithoutPartInput[]
    connectOrCreate?: BicyclePartCreateOrConnectWithoutPartInput | BicyclePartCreateOrConnectWithoutPartInput[]
    upsert?: BicyclePartUpsertWithWhereUniqueWithoutPartInput | BicyclePartUpsertWithWhereUniqueWithoutPartInput[]
    set?: BicyclePartWhereUniqueInput | BicyclePartWhereUniqueInput[]
    disconnect?: BicyclePartWhereUniqueInput | BicyclePartWhereUniqueInput[]
    delete?: BicyclePartWhereUniqueInput | BicyclePartWhereUniqueInput[]
    connect?: BicyclePartWhereUniqueInput | BicyclePartWhereUniqueInput[]
    update?: BicyclePartUpdateWithWhereUniqueWithoutPartInput | BicyclePartUpdateWithWhereUniqueWithoutPartInput[]
    updateMany?: BicyclePartUpdateManyWithWhereWithoutPartInput | BicyclePartUpdateManyWithWhereWithoutPartInput[]
    deleteMany?: BicyclePartScalarWhereInput | BicyclePartScalarWhereInput[]
  }

  export type HubUncheckedUpdateOneWithoutPartNestedInput = {
    create?: XOR<HubCreateWithoutPartInput, HubUncheckedCreateWithoutPartInput>
    connectOrCreate?: HubCreateOrConnectWithoutPartInput
    upsert?: HubUpsertWithoutPartInput
    disconnect?: HubWhereInput | boolean
    delete?: HubWhereInput | boolean
    connect?: HubWhereUniqueInput
    update?: XOR<XOR<HubUpdateToOneWithWhereWithoutPartInput, HubUpdateWithoutPartInput>, HubUncheckedUpdateWithoutPartInput>
  }

  export type RimUncheckedUpdateOneWithoutPartNestedInput = {
    create?: XOR<RimCreateWithoutPartInput, RimUncheckedCreateWithoutPartInput>
    connectOrCreate?: RimCreateOrConnectWithoutPartInput
    upsert?: RimUpsertWithoutPartInput
    disconnect?: RimWhereInput | boolean
    delete?: RimWhereInput | boolean
    connect?: RimWhereUniqueInput
    update?: XOR<XOR<RimUpdateToOneWithWhereWithoutPartInput, RimUpdateWithoutPartInput>, RimUncheckedUpdateWithoutPartInput>
  }

  export type CogsetUncheckedUpdateOneWithoutPartNestedInput = {
    create?: XOR<CogsetCreateWithoutPartInput, CogsetUncheckedCreateWithoutPartInput>
    connectOrCreate?: CogsetCreateOrConnectWithoutPartInput
    upsert?: CogsetUpsertWithoutPartInput
    disconnect?: CogsetWhereInput | boolean
    delete?: CogsetWhereInput | boolean
    connect?: CogsetWhereUniqueInput
    update?: XOR<XOR<CogsetUpdateToOneWithWhereWithoutPartInput, CogsetUpdateWithoutPartInput>, CogsetUncheckedUpdateWithoutPartInput>
  }

  export type PartCreateNestedOneWithoutHubInput = {
    create?: XOR<PartCreateWithoutHubInput, PartUncheckedCreateWithoutHubInput>
    connectOrCreate?: PartCreateOrConnectWithoutHubInput
    connect?: PartWhereUniqueInput
  }

  export type WheelCreateNestedManyWithoutHubInput = {
    create?: XOR<WheelCreateWithoutHubInput, WheelUncheckedCreateWithoutHubInput> | WheelCreateWithoutHubInput[] | WheelUncheckedCreateWithoutHubInput[]
    connectOrCreate?: WheelCreateOrConnectWithoutHubInput | WheelCreateOrConnectWithoutHubInput[]
    connect?: WheelWhereUniqueInput | WheelWhereUniqueInput[]
  }

  export type WheelUncheckedCreateNestedManyWithoutHubInput = {
    create?: XOR<WheelCreateWithoutHubInput, WheelUncheckedCreateWithoutHubInput> | WheelCreateWithoutHubInput[] | WheelUncheckedCreateWithoutHubInput[]
    connectOrCreate?: WheelCreateOrConnectWithoutHubInput | WheelCreateOrConnectWithoutHubInput[]
    connect?: WheelWhereUniqueInput | WheelWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PartUpdateOneWithoutHubNestedInput = {
    create?: XOR<PartCreateWithoutHubInput, PartUncheckedCreateWithoutHubInput>
    connectOrCreate?: PartCreateOrConnectWithoutHubInput
    upsert?: PartUpsertWithoutHubInput
    disconnect?: PartWhereInput | boolean
    delete?: PartWhereInput | boolean
    connect?: PartWhereUniqueInput
    update?: XOR<XOR<PartUpdateToOneWithWhereWithoutHubInput, PartUpdateWithoutHubInput>, PartUncheckedUpdateWithoutHubInput>
  }

  export type WheelUpdateManyWithoutHubNestedInput = {
    create?: XOR<WheelCreateWithoutHubInput, WheelUncheckedCreateWithoutHubInput> | WheelCreateWithoutHubInput[] | WheelUncheckedCreateWithoutHubInput[]
    connectOrCreate?: WheelCreateOrConnectWithoutHubInput | WheelCreateOrConnectWithoutHubInput[]
    upsert?: WheelUpsertWithWhereUniqueWithoutHubInput | WheelUpsertWithWhereUniqueWithoutHubInput[]
    set?: WheelWhereUniqueInput | WheelWhereUniqueInput[]
    disconnect?: WheelWhereUniqueInput | WheelWhereUniqueInput[]
    delete?: WheelWhereUniqueInput | WheelWhereUniqueInput[]
    connect?: WheelWhereUniqueInput | WheelWhereUniqueInput[]
    update?: WheelUpdateWithWhereUniqueWithoutHubInput | WheelUpdateWithWhereUniqueWithoutHubInput[]
    updateMany?: WheelUpdateManyWithWhereWithoutHubInput | WheelUpdateManyWithWhereWithoutHubInput[]
    deleteMany?: WheelScalarWhereInput | WheelScalarWhereInput[]
  }

  export type WheelUncheckedUpdateManyWithoutHubNestedInput = {
    create?: XOR<WheelCreateWithoutHubInput, WheelUncheckedCreateWithoutHubInput> | WheelCreateWithoutHubInput[] | WheelUncheckedCreateWithoutHubInput[]
    connectOrCreate?: WheelCreateOrConnectWithoutHubInput | WheelCreateOrConnectWithoutHubInput[]
    upsert?: WheelUpsertWithWhereUniqueWithoutHubInput | WheelUpsertWithWhereUniqueWithoutHubInput[]
    set?: WheelWhereUniqueInput | WheelWhereUniqueInput[]
    disconnect?: WheelWhereUniqueInput | WheelWhereUniqueInput[]
    delete?: WheelWhereUniqueInput | WheelWhereUniqueInput[]
    connect?: WheelWhereUniqueInput | WheelWhereUniqueInput[]
    update?: WheelUpdateWithWhereUniqueWithoutHubInput | WheelUpdateWithWhereUniqueWithoutHubInput[]
    updateMany?: WheelUpdateManyWithWhereWithoutHubInput | WheelUpdateManyWithWhereWithoutHubInput[]
    deleteMany?: WheelScalarWhereInput | WheelScalarWhereInput[]
  }

  export type PartCreateNestedOneWithoutRimInput = {
    create?: XOR<PartCreateWithoutRimInput, PartUncheckedCreateWithoutRimInput>
    connectOrCreate?: PartCreateOrConnectWithoutRimInput
    connect?: PartWhereUniqueInput
  }

  export type WheelCreateNestedManyWithoutRimInput = {
    create?: XOR<WheelCreateWithoutRimInput, WheelUncheckedCreateWithoutRimInput> | WheelCreateWithoutRimInput[] | WheelUncheckedCreateWithoutRimInput[]
    connectOrCreate?: WheelCreateOrConnectWithoutRimInput | WheelCreateOrConnectWithoutRimInput[]
    connect?: WheelWhereUniqueInput | WheelWhereUniqueInput[]
  }

  export type WheelUncheckedCreateNestedManyWithoutRimInput = {
    create?: XOR<WheelCreateWithoutRimInput, WheelUncheckedCreateWithoutRimInput> | WheelCreateWithoutRimInput[] | WheelUncheckedCreateWithoutRimInput[]
    connectOrCreate?: WheelCreateOrConnectWithoutRimInput | WheelCreateOrConnectWithoutRimInput[]
    connect?: WheelWhereUniqueInput | WheelWhereUniqueInput[]
  }

  export type PartUpdateOneWithoutRimNestedInput = {
    create?: XOR<PartCreateWithoutRimInput, PartUncheckedCreateWithoutRimInput>
    connectOrCreate?: PartCreateOrConnectWithoutRimInput
    upsert?: PartUpsertWithoutRimInput
    disconnect?: PartWhereInput | boolean
    delete?: PartWhereInput | boolean
    connect?: PartWhereUniqueInput
    update?: XOR<XOR<PartUpdateToOneWithWhereWithoutRimInput, PartUpdateWithoutRimInput>, PartUncheckedUpdateWithoutRimInput>
  }

  export type WheelUpdateManyWithoutRimNestedInput = {
    create?: XOR<WheelCreateWithoutRimInput, WheelUncheckedCreateWithoutRimInput> | WheelCreateWithoutRimInput[] | WheelUncheckedCreateWithoutRimInput[]
    connectOrCreate?: WheelCreateOrConnectWithoutRimInput | WheelCreateOrConnectWithoutRimInput[]
    upsert?: WheelUpsertWithWhereUniqueWithoutRimInput | WheelUpsertWithWhereUniqueWithoutRimInput[]
    set?: WheelWhereUniqueInput | WheelWhereUniqueInput[]
    disconnect?: WheelWhereUniqueInput | WheelWhereUniqueInput[]
    delete?: WheelWhereUniqueInput | WheelWhereUniqueInput[]
    connect?: WheelWhereUniqueInput | WheelWhereUniqueInput[]
    update?: WheelUpdateWithWhereUniqueWithoutRimInput | WheelUpdateWithWhereUniqueWithoutRimInput[]
    updateMany?: WheelUpdateManyWithWhereWithoutRimInput | WheelUpdateManyWithWhereWithoutRimInput[]
    deleteMany?: WheelScalarWhereInput | WheelScalarWhereInput[]
  }

  export type WheelUncheckedUpdateManyWithoutRimNestedInput = {
    create?: XOR<WheelCreateWithoutRimInput, WheelUncheckedCreateWithoutRimInput> | WheelCreateWithoutRimInput[] | WheelUncheckedCreateWithoutRimInput[]
    connectOrCreate?: WheelCreateOrConnectWithoutRimInput | WheelCreateOrConnectWithoutRimInput[]
    upsert?: WheelUpsertWithWhereUniqueWithoutRimInput | WheelUpsertWithWhereUniqueWithoutRimInput[]
    set?: WheelWhereUniqueInput | WheelWhereUniqueInput[]
    disconnect?: WheelWhereUniqueInput | WheelWhereUniqueInput[]
    delete?: WheelWhereUniqueInput | WheelWhereUniqueInput[]
    connect?: WheelWhereUniqueInput | WheelWhereUniqueInput[]
    update?: WheelUpdateWithWhereUniqueWithoutRimInput | WheelUpdateWithWhereUniqueWithoutRimInput[]
    updateMany?: WheelUpdateManyWithWhereWithoutRimInput | WheelUpdateManyWithWhereWithoutRimInput[]
    deleteMany?: WheelScalarWhereInput | WheelScalarWhereInput[]
  }

  export type PartCreateNestedOneWithoutCogsetInput = {
    create?: XOR<PartCreateWithoutCogsetInput, PartUncheckedCreateWithoutCogsetInput>
    connectOrCreate?: PartCreateOrConnectWithoutCogsetInput
    connect?: PartWhereUniqueInput
  }

  export type PartUpdateOneWithoutCogsetNestedInput = {
    create?: XOR<PartCreateWithoutCogsetInput, PartUncheckedCreateWithoutCogsetInput>
    connectOrCreate?: PartCreateOrConnectWithoutCogsetInput
    upsert?: PartUpsertWithoutCogsetInput
    disconnect?: PartWhereInput | boolean
    delete?: PartWhereInput | boolean
    connect?: PartWhereUniqueInput
    update?: XOR<XOR<PartUpdateToOneWithWhereWithoutCogsetInput, PartUpdateWithoutCogsetInput>, PartUncheckedUpdateWithoutCogsetInput>
  }

  export type HubCreateNestedOneWithoutWheelsInput = {
    create?: XOR<HubCreateWithoutWheelsInput, HubUncheckedCreateWithoutWheelsInput>
    connectOrCreate?: HubCreateOrConnectWithoutWheelsInput
    connect?: HubWhereUniqueInput
  }

  export type RimCreateNestedOneWithoutWheelsInput = {
    create?: XOR<RimCreateWithoutWheelsInput, RimUncheckedCreateWithoutWheelsInput>
    connectOrCreate?: RimCreateOrConnectWithoutWheelsInput
    connect?: RimWhereUniqueInput
  }

  export type WheelsetCreateNestedManyWithoutWheelFowardInput = {
    create?: XOR<WheelsetCreateWithoutWheelFowardInput, WheelsetUncheckedCreateWithoutWheelFowardInput> | WheelsetCreateWithoutWheelFowardInput[] | WheelsetUncheckedCreateWithoutWheelFowardInput[]
    connectOrCreate?: WheelsetCreateOrConnectWithoutWheelFowardInput | WheelsetCreateOrConnectWithoutWheelFowardInput[]
    connect?: WheelsetWhereUniqueInput | WheelsetWhereUniqueInput[]
  }

  export type WheelsetCreateNestedManyWithoutWheelBackInput = {
    create?: XOR<WheelsetCreateWithoutWheelBackInput, WheelsetUncheckedCreateWithoutWheelBackInput> | WheelsetCreateWithoutWheelBackInput[] | WheelsetUncheckedCreateWithoutWheelBackInput[]
    connectOrCreate?: WheelsetCreateOrConnectWithoutWheelBackInput | WheelsetCreateOrConnectWithoutWheelBackInput[]
    connect?: WheelsetWhereUniqueInput | WheelsetWhereUniqueInput[]
  }

  export type OwnershipCreateNestedManyWithoutWheelInput = {
    create?: XOR<OwnershipCreateWithoutWheelInput, OwnershipUncheckedCreateWithoutWheelInput> | OwnershipCreateWithoutWheelInput[] | OwnershipUncheckedCreateWithoutWheelInput[]
    connectOrCreate?: OwnershipCreateOrConnectWithoutWheelInput | OwnershipCreateOrConnectWithoutWheelInput[]
    connect?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
  }

  export type WheelsetUncheckedCreateNestedManyWithoutWheelFowardInput = {
    create?: XOR<WheelsetCreateWithoutWheelFowardInput, WheelsetUncheckedCreateWithoutWheelFowardInput> | WheelsetCreateWithoutWheelFowardInput[] | WheelsetUncheckedCreateWithoutWheelFowardInput[]
    connectOrCreate?: WheelsetCreateOrConnectWithoutWheelFowardInput | WheelsetCreateOrConnectWithoutWheelFowardInput[]
    connect?: WheelsetWhereUniqueInput | WheelsetWhereUniqueInput[]
  }

  export type WheelsetUncheckedCreateNestedManyWithoutWheelBackInput = {
    create?: XOR<WheelsetCreateWithoutWheelBackInput, WheelsetUncheckedCreateWithoutWheelBackInput> | WheelsetCreateWithoutWheelBackInput[] | WheelsetUncheckedCreateWithoutWheelBackInput[]
    connectOrCreate?: WheelsetCreateOrConnectWithoutWheelBackInput | WheelsetCreateOrConnectWithoutWheelBackInput[]
    connect?: WheelsetWhereUniqueInput | WheelsetWhereUniqueInput[]
  }

  export type OwnershipUncheckedCreateNestedManyWithoutWheelInput = {
    create?: XOR<OwnershipCreateWithoutWheelInput, OwnershipUncheckedCreateWithoutWheelInput> | OwnershipCreateWithoutWheelInput[] | OwnershipUncheckedCreateWithoutWheelInput[]
    connectOrCreate?: OwnershipCreateOrConnectWithoutWheelInput | OwnershipCreateOrConnectWithoutWheelInput[]
    connect?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
  }

  export type HubUpdateOneWithoutWheelsNestedInput = {
    create?: XOR<HubCreateWithoutWheelsInput, HubUncheckedCreateWithoutWheelsInput>
    connectOrCreate?: HubCreateOrConnectWithoutWheelsInput
    upsert?: HubUpsertWithoutWheelsInput
    disconnect?: HubWhereInput | boolean
    delete?: HubWhereInput | boolean
    connect?: HubWhereUniqueInput
    update?: XOR<XOR<HubUpdateToOneWithWhereWithoutWheelsInput, HubUpdateWithoutWheelsInput>, HubUncheckedUpdateWithoutWheelsInput>
  }

  export type RimUpdateOneWithoutWheelsNestedInput = {
    create?: XOR<RimCreateWithoutWheelsInput, RimUncheckedCreateWithoutWheelsInput>
    connectOrCreate?: RimCreateOrConnectWithoutWheelsInput
    upsert?: RimUpsertWithoutWheelsInput
    disconnect?: RimWhereInput | boolean
    delete?: RimWhereInput | boolean
    connect?: RimWhereUniqueInput
    update?: XOR<XOR<RimUpdateToOneWithWhereWithoutWheelsInput, RimUpdateWithoutWheelsInput>, RimUncheckedUpdateWithoutWheelsInput>
  }

  export type WheelsetUpdateManyWithoutWheelFowardNestedInput = {
    create?: XOR<WheelsetCreateWithoutWheelFowardInput, WheelsetUncheckedCreateWithoutWheelFowardInput> | WheelsetCreateWithoutWheelFowardInput[] | WheelsetUncheckedCreateWithoutWheelFowardInput[]
    connectOrCreate?: WheelsetCreateOrConnectWithoutWheelFowardInput | WheelsetCreateOrConnectWithoutWheelFowardInput[]
    upsert?: WheelsetUpsertWithWhereUniqueWithoutWheelFowardInput | WheelsetUpsertWithWhereUniqueWithoutWheelFowardInput[]
    set?: WheelsetWhereUniqueInput | WheelsetWhereUniqueInput[]
    disconnect?: WheelsetWhereUniqueInput | WheelsetWhereUniqueInput[]
    delete?: WheelsetWhereUniqueInput | WheelsetWhereUniqueInput[]
    connect?: WheelsetWhereUniqueInput | WheelsetWhereUniqueInput[]
    update?: WheelsetUpdateWithWhereUniqueWithoutWheelFowardInput | WheelsetUpdateWithWhereUniqueWithoutWheelFowardInput[]
    updateMany?: WheelsetUpdateManyWithWhereWithoutWheelFowardInput | WheelsetUpdateManyWithWhereWithoutWheelFowardInput[]
    deleteMany?: WheelsetScalarWhereInput | WheelsetScalarWhereInput[]
  }

  export type WheelsetUpdateManyWithoutWheelBackNestedInput = {
    create?: XOR<WheelsetCreateWithoutWheelBackInput, WheelsetUncheckedCreateWithoutWheelBackInput> | WheelsetCreateWithoutWheelBackInput[] | WheelsetUncheckedCreateWithoutWheelBackInput[]
    connectOrCreate?: WheelsetCreateOrConnectWithoutWheelBackInput | WheelsetCreateOrConnectWithoutWheelBackInput[]
    upsert?: WheelsetUpsertWithWhereUniqueWithoutWheelBackInput | WheelsetUpsertWithWhereUniqueWithoutWheelBackInput[]
    set?: WheelsetWhereUniqueInput | WheelsetWhereUniqueInput[]
    disconnect?: WheelsetWhereUniqueInput | WheelsetWhereUniqueInput[]
    delete?: WheelsetWhereUniqueInput | WheelsetWhereUniqueInput[]
    connect?: WheelsetWhereUniqueInput | WheelsetWhereUniqueInput[]
    update?: WheelsetUpdateWithWhereUniqueWithoutWheelBackInput | WheelsetUpdateWithWhereUniqueWithoutWheelBackInput[]
    updateMany?: WheelsetUpdateManyWithWhereWithoutWheelBackInput | WheelsetUpdateManyWithWhereWithoutWheelBackInput[]
    deleteMany?: WheelsetScalarWhereInput | WheelsetScalarWhereInput[]
  }

  export type OwnershipUpdateManyWithoutWheelNestedInput = {
    create?: XOR<OwnershipCreateWithoutWheelInput, OwnershipUncheckedCreateWithoutWheelInput> | OwnershipCreateWithoutWheelInput[] | OwnershipUncheckedCreateWithoutWheelInput[]
    connectOrCreate?: OwnershipCreateOrConnectWithoutWheelInput | OwnershipCreateOrConnectWithoutWheelInput[]
    upsert?: OwnershipUpsertWithWhereUniqueWithoutWheelInput | OwnershipUpsertWithWhereUniqueWithoutWheelInput[]
    set?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
    disconnect?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
    delete?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
    connect?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
    update?: OwnershipUpdateWithWhereUniqueWithoutWheelInput | OwnershipUpdateWithWhereUniqueWithoutWheelInput[]
    updateMany?: OwnershipUpdateManyWithWhereWithoutWheelInput | OwnershipUpdateManyWithWhereWithoutWheelInput[]
    deleteMany?: OwnershipScalarWhereInput | OwnershipScalarWhereInput[]
  }

  export type WheelsetUncheckedUpdateManyWithoutWheelFowardNestedInput = {
    create?: XOR<WheelsetCreateWithoutWheelFowardInput, WheelsetUncheckedCreateWithoutWheelFowardInput> | WheelsetCreateWithoutWheelFowardInput[] | WheelsetUncheckedCreateWithoutWheelFowardInput[]
    connectOrCreate?: WheelsetCreateOrConnectWithoutWheelFowardInput | WheelsetCreateOrConnectWithoutWheelFowardInput[]
    upsert?: WheelsetUpsertWithWhereUniqueWithoutWheelFowardInput | WheelsetUpsertWithWhereUniqueWithoutWheelFowardInput[]
    set?: WheelsetWhereUniqueInput | WheelsetWhereUniqueInput[]
    disconnect?: WheelsetWhereUniqueInput | WheelsetWhereUniqueInput[]
    delete?: WheelsetWhereUniqueInput | WheelsetWhereUniqueInput[]
    connect?: WheelsetWhereUniqueInput | WheelsetWhereUniqueInput[]
    update?: WheelsetUpdateWithWhereUniqueWithoutWheelFowardInput | WheelsetUpdateWithWhereUniqueWithoutWheelFowardInput[]
    updateMany?: WheelsetUpdateManyWithWhereWithoutWheelFowardInput | WheelsetUpdateManyWithWhereWithoutWheelFowardInput[]
    deleteMany?: WheelsetScalarWhereInput | WheelsetScalarWhereInput[]
  }

  export type WheelsetUncheckedUpdateManyWithoutWheelBackNestedInput = {
    create?: XOR<WheelsetCreateWithoutWheelBackInput, WheelsetUncheckedCreateWithoutWheelBackInput> | WheelsetCreateWithoutWheelBackInput[] | WheelsetUncheckedCreateWithoutWheelBackInput[]
    connectOrCreate?: WheelsetCreateOrConnectWithoutWheelBackInput | WheelsetCreateOrConnectWithoutWheelBackInput[]
    upsert?: WheelsetUpsertWithWhereUniqueWithoutWheelBackInput | WheelsetUpsertWithWhereUniqueWithoutWheelBackInput[]
    set?: WheelsetWhereUniqueInput | WheelsetWhereUniqueInput[]
    disconnect?: WheelsetWhereUniqueInput | WheelsetWhereUniqueInput[]
    delete?: WheelsetWhereUniqueInput | WheelsetWhereUniqueInput[]
    connect?: WheelsetWhereUniqueInput | WheelsetWhereUniqueInput[]
    update?: WheelsetUpdateWithWhereUniqueWithoutWheelBackInput | WheelsetUpdateWithWhereUniqueWithoutWheelBackInput[]
    updateMany?: WheelsetUpdateManyWithWhereWithoutWheelBackInput | WheelsetUpdateManyWithWhereWithoutWheelBackInput[]
    deleteMany?: WheelsetScalarWhereInput | WheelsetScalarWhereInput[]
  }

  export type OwnershipUncheckedUpdateManyWithoutWheelNestedInput = {
    create?: XOR<OwnershipCreateWithoutWheelInput, OwnershipUncheckedCreateWithoutWheelInput> | OwnershipCreateWithoutWheelInput[] | OwnershipUncheckedCreateWithoutWheelInput[]
    connectOrCreate?: OwnershipCreateOrConnectWithoutWheelInput | OwnershipCreateOrConnectWithoutWheelInput[]
    upsert?: OwnershipUpsertWithWhereUniqueWithoutWheelInput | OwnershipUpsertWithWhereUniqueWithoutWheelInput[]
    set?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
    disconnect?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
    delete?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
    connect?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
    update?: OwnershipUpdateWithWhereUniqueWithoutWheelInput | OwnershipUpdateWithWhereUniqueWithoutWheelInput[]
    updateMany?: OwnershipUpdateManyWithWhereWithoutWheelInput | OwnershipUpdateManyWithWhereWithoutWheelInput[]
    deleteMany?: OwnershipScalarWhereInput | OwnershipScalarWhereInput[]
  }

  export type WheelCreateNestedOneWithoutWheelsFowardInput = {
    create?: XOR<WheelCreateWithoutWheelsFowardInput, WheelUncheckedCreateWithoutWheelsFowardInput>
    connectOrCreate?: WheelCreateOrConnectWithoutWheelsFowardInput
    connect?: WheelWhereUniqueInput
  }

  export type WheelCreateNestedOneWithoutWheelsBackInput = {
    create?: XOR<WheelCreateWithoutWheelsBackInput, WheelUncheckedCreateWithoutWheelsBackInput>
    connectOrCreate?: WheelCreateOrConnectWithoutWheelsBackInput
    connect?: WheelWhereUniqueInput
  }

  export type OwnershipCreateNestedManyWithoutWheelSetInput = {
    create?: XOR<OwnershipCreateWithoutWheelSetInput, OwnershipUncheckedCreateWithoutWheelSetInput> | OwnershipCreateWithoutWheelSetInput[] | OwnershipUncheckedCreateWithoutWheelSetInput[]
    connectOrCreate?: OwnershipCreateOrConnectWithoutWheelSetInput | OwnershipCreateOrConnectWithoutWheelSetInput[]
    connect?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
  }

  export type OwnershipUncheckedCreateNestedManyWithoutWheelSetInput = {
    create?: XOR<OwnershipCreateWithoutWheelSetInput, OwnershipUncheckedCreateWithoutWheelSetInput> | OwnershipCreateWithoutWheelSetInput[] | OwnershipUncheckedCreateWithoutWheelSetInput[]
    connectOrCreate?: OwnershipCreateOrConnectWithoutWheelSetInput | OwnershipCreateOrConnectWithoutWheelSetInput[]
    connect?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
  }

  export type WheelUpdateOneWithoutWheelsFowardNestedInput = {
    create?: XOR<WheelCreateWithoutWheelsFowardInput, WheelUncheckedCreateWithoutWheelsFowardInput>
    connectOrCreate?: WheelCreateOrConnectWithoutWheelsFowardInput
    upsert?: WheelUpsertWithoutWheelsFowardInput
    disconnect?: WheelWhereInput | boolean
    delete?: WheelWhereInput | boolean
    connect?: WheelWhereUniqueInput
    update?: XOR<XOR<WheelUpdateToOneWithWhereWithoutWheelsFowardInput, WheelUpdateWithoutWheelsFowardInput>, WheelUncheckedUpdateWithoutWheelsFowardInput>
  }

  export type WheelUpdateOneWithoutWheelsBackNestedInput = {
    create?: XOR<WheelCreateWithoutWheelsBackInput, WheelUncheckedCreateWithoutWheelsBackInput>
    connectOrCreate?: WheelCreateOrConnectWithoutWheelsBackInput
    upsert?: WheelUpsertWithoutWheelsBackInput
    disconnect?: WheelWhereInput | boolean
    delete?: WheelWhereInput | boolean
    connect?: WheelWhereUniqueInput
    update?: XOR<XOR<WheelUpdateToOneWithWhereWithoutWheelsBackInput, WheelUpdateWithoutWheelsBackInput>, WheelUncheckedUpdateWithoutWheelsBackInput>
  }

  export type OwnershipUpdateManyWithoutWheelSetNestedInput = {
    create?: XOR<OwnershipCreateWithoutWheelSetInput, OwnershipUncheckedCreateWithoutWheelSetInput> | OwnershipCreateWithoutWheelSetInput[] | OwnershipUncheckedCreateWithoutWheelSetInput[]
    connectOrCreate?: OwnershipCreateOrConnectWithoutWheelSetInput | OwnershipCreateOrConnectWithoutWheelSetInput[]
    upsert?: OwnershipUpsertWithWhereUniqueWithoutWheelSetInput | OwnershipUpsertWithWhereUniqueWithoutWheelSetInput[]
    set?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
    disconnect?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
    delete?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
    connect?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
    update?: OwnershipUpdateWithWhereUniqueWithoutWheelSetInput | OwnershipUpdateWithWhereUniqueWithoutWheelSetInput[]
    updateMany?: OwnershipUpdateManyWithWhereWithoutWheelSetInput | OwnershipUpdateManyWithWhereWithoutWheelSetInput[]
    deleteMany?: OwnershipScalarWhereInput | OwnershipScalarWhereInput[]
  }

  export type OwnershipUncheckedUpdateManyWithoutWheelSetNestedInput = {
    create?: XOR<OwnershipCreateWithoutWheelSetInput, OwnershipUncheckedCreateWithoutWheelSetInput> | OwnershipCreateWithoutWheelSetInput[] | OwnershipUncheckedCreateWithoutWheelSetInput[]
    connectOrCreate?: OwnershipCreateOrConnectWithoutWheelSetInput | OwnershipCreateOrConnectWithoutWheelSetInput[]
    upsert?: OwnershipUpsertWithWhereUniqueWithoutWheelSetInput | OwnershipUpsertWithWhereUniqueWithoutWheelSetInput[]
    set?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
    disconnect?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
    delete?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
    connect?: OwnershipWhereUniqueInput | OwnershipWhereUniqueInput[]
    update?: OwnershipUpdateWithWhereUniqueWithoutWheelSetInput | OwnershipUpdateWithWhereUniqueWithoutWheelSetInput[]
    updateMany?: OwnershipUpdateManyWithWhereWithoutWheelSetInput | OwnershipUpdateManyWithWhereWithoutWheelSetInput[]
    deleteMany?: OwnershipScalarWhereInput | OwnershipScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type OwnershipCreateWithoutOwnerInput = {
    acquired?: Date | string | null
    condition?: string | null
    notes?: string | null
    bicycle?: BicycleCreateNestedOneWithoutOwnersInput
    wheel?: WheelCreateNestedOneWithoutOwnersInput
    wheelSet?: WheelsetCreateNestedOneWithoutOwnersInput
    part?: PartCreateNestedOneWithoutOwnersInput
  }

  export type OwnershipUncheckedCreateWithoutOwnerInput = {
    id?: number
    acquired?: Date | string | null
    condition?: string | null
    notes?: string | null
    bicycleId?: number | null
    wheelId?: number | null
    wheelSetId?: number | null
    partId?: number | null
  }

  export type OwnershipCreateOrConnectWithoutOwnerInput = {
    where: OwnershipWhereUniqueInput
    create: XOR<OwnershipCreateWithoutOwnerInput, OwnershipUncheckedCreateWithoutOwnerInput>
  }

  export type OwnershipUpsertWithWhereUniqueWithoutOwnerInput = {
    where: OwnershipWhereUniqueInput
    update: XOR<OwnershipUpdateWithoutOwnerInput, OwnershipUncheckedUpdateWithoutOwnerInput>
    create: XOR<OwnershipCreateWithoutOwnerInput, OwnershipUncheckedCreateWithoutOwnerInput>
  }

  export type OwnershipUpdateWithWhereUniqueWithoutOwnerInput = {
    where: OwnershipWhereUniqueInput
    data: XOR<OwnershipUpdateWithoutOwnerInput, OwnershipUncheckedUpdateWithoutOwnerInput>
  }

  export type OwnershipUpdateManyWithWhereWithoutOwnerInput = {
    where: OwnershipScalarWhereInput
    data: XOR<OwnershipUpdateManyMutationInput, OwnershipUncheckedUpdateManyWithoutOwnerInput>
  }

  export type OwnershipScalarWhereInput = {
    AND?: OwnershipScalarWhereInput | OwnershipScalarWhereInput[]
    OR?: OwnershipScalarWhereInput[]
    NOT?: OwnershipScalarWhereInput | OwnershipScalarWhereInput[]
    id?: IntFilter<"Ownership"> | number
    acquired?: DateTimeNullableFilter<"Ownership"> | Date | string | null
    condition?: StringNullableFilter<"Ownership"> | string | null
    notes?: StringNullableFilter<"Ownership"> | string | null
    ownerId?: IntNullableFilter<"Ownership"> | number | null
    bicycleId?: IntNullableFilter<"Ownership"> | number | null
    wheelId?: IntNullableFilter<"Ownership"> | number | null
    wheelSetId?: IntNullableFilter<"Ownership"> | number | null
    partId?: IntNullableFilter<"Ownership"> | number | null
  }

  export type CyclistCreateWithoutOwnsInput = {
    name?: string | null
    nameLast?: string | null
    nameFirst?: string | null
    providerId: string
    provider?: string | null
    roles?: string | null
    registered?: Date | string | null
    lastLogIn?: Date | string | null
  }

  export type CyclistUncheckedCreateWithoutOwnsInput = {
    id?: number
    name?: string | null
    nameLast?: string | null
    nameFirst?: string | null
    providerId: string
    provider?: string | null
    roles?: string | null
    registered?: Date | string | null
    lastLogIn?: Date | string | null
  }

  export type CyclistCreateOrConnectWithoutOwnsInput = {
    where: CyclistWhereUniqueInput
    create: XOR<CyclistCreateWithoutOwnsInput, CyclistUncheckedCreateWithoutOwnsInput>
  }

  export type BicycleCreateWithoutOwnersInput = {
    notes?: string | null
    parts?: BicyclePartCreateNestedManyWithoutBicycleInput
  }

  export type BicycleUncheckedCreateWithoutOwnersInput = {
    id?: number
    notes?: string | null
    parts?: BicyclePartUncheckedCreateNestedManyWithoutBicycleInput
  }

  export type BicycleCreateOrConnectWithoutOwnersInput = {
    where: BicycleWhereUniqueInput
    create: XOR<BicycleCreateWithoutOwnersInput, BicycleUncheckedCreateWithoutOwnersInput>
  }

  export type WheelCreateWithoutOwnersInput = {
    name?: string | null
    notes?: string | null
    hub?: HubCreateNestedOneWithoutWheelsInput
    rim?: RimCreateNestedOneWithoutWheelsInput
    wheelsFoward?: WheelsetCreateNestedManyWithoutWheelFowardInput
    wheelsBack?: WheelsetCreateNestedManyWithoutWheelBackInput
  }

  export type WheelUncheckedCreateWithoutOwnersInput = {
    id?: number
    name?: string | null
    notes?: string | null
    hubId?: number | null
    rimId?: number | null
    wheelsFoward?: WheelsetUncheckedCreateNestedManyWithoutWheelFowardInput
    wheelsBack?: WheelsetUncheckedCreateNestedManyWithoutWheelBackInput
  }

  export type WheelCreateOrConnectWithoutOwnersInput = {
    where: WheelWhereUniqueInput
    create: XOR<WheelCreateWithoutOwnersInput, WheelUncheckedCreateWithoutOwnersInput>
  }

  export type WheelsetCreateWithoutOwnersInput = {
    name?: string | null
    notes?: string | null
    wheelFoward?: WheelCreateNestedOneWithoutWheelsFowardInput
    wheelBack?: WheelCreateNestedOneWithoutWheelsBackInput
  }

  export type WheelsetUncheckedCreateWithoutOwnersInput = {
    id?: number
    name?: string | null
    notes?: string | null
    wheelFowardId?: number | null
    wheelBackId?: number | null
  }

  export type WheelsetCreateOrConnectWithoutOwnersInput = {
    where: WheelsetWhereUniqueInput
    create: XOR<WheelsetCreateWithoutOwnersInput, WheelsetUncheckedCreateWithoutOwnersInput>
  }

  export type PartCreateWithoutOwnersInput = {
    categories?: string | null
    type?: string | null
    designationCode?: string | null
    name?: string | null
    notes?: string | null
    maker?: MakerCreateNestedOneWithoutPartsInput
    bicycles?: BicyclePartCreateNestedManyWithoutPartInput
    hub?: HubCreateNestedOneWithoutPartInput
    rim?: RimCreateNestedOneWithoutPartInput
    cogset?: CogsetCreateNestedOneWithoutPartInput
  }

  export type PartUncheckedCreateWithoutOwnersInput = {
    id?: number
    categories?: string | null
    type?: string | null
    designationCode?: string | null
    name?: string | null
    notes?: string | null
    makerId?: number | null
    bicycles?: BicyclePartUncheckedCreateNestedManyWithoutPartInput
    hub?: HubUncheckedCreateNestedOneWithoutPartInput
    rim?: RimUncheckedCreateNestedOneWithoutPartInput
    cogset?: CogsetUncheckedCreateNestedOneWithoutPartInput
  }

  export type PartCreateOrConnectWithoutOwnersInput = {
    where: PartWhereUniqueInput
    create: XOR<PartCreateWithoutOwnersInput, PartUncheckedCreateWithoutOwnersInput>
  }

  export type CyclistUpsertWithoutOwnsInput = {
    update: XOR<CyclistUpdateWithoutOwnsInput, CyclistUncheckedUpdateWithoutOwnsInput>
    create: XOR<CyclistCreateWithoutOwnsInput, CyclistUncheckedCreateWithoutOwnsInput>
    where?: CyclistWhereInput
  }

  export type CyclistUpdateToOneWithWhereWithoutOwnsInput = {
    where?: CyclistWhereInput
    data: XOR<CyclistUpdateWithoutOwnsInput, CyclistUncheckedUpdateWithoutOwnsInput>
  }

  export type CyclistUpdateWithoutOwnsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nameLast?: NullableStringFieldUpdateOperationsInput | string | null
    nameFirst?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: NullableStringFieldUpdateOperationsInput | string | null
    registered?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CyclistUncheckedUpdateWithoutOwnsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nameLast?: NullableStringFieldUpdateOperationsInput | string | null
    nameFirst?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: NullableStringFieldUpdateOperationsInput | string | null
    registered?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BicycleUpsertWithoutOwnersInput = {
    update: XOR<BicycleUpdateWithoutOwnersInput, BicycleUncheckedUpdateWithoutOwnersInput>
    create: XOR<BicycleCreateWithoutOwnersInput, BicycleUncheckedCreateWithoutOwnersInput>
    where?: BicycleWhereInput
  }

  export type BicycleUpdateToOneWithWhereWithoutOwnersInput = {
    where?: BicycleWhereInput
    data: XOR<BicycleUpdateWithoutOwnersInput, BicycleUncheckedUpdateWithoutOwnersInput>
  }

  export type BicycleUpdateWithoutOwnersInput = {
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    parts?: BicyclePartUpdateManyWithoutBicycleNestedInput
  }

  export type BicycleUncheckedUpdateWithoutOwnersInput = {
    id?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    parts?: BicyclePartUncheckedUpdateManyWithoutBicycleNestedInput
  }

  export type WheelUpsertWithoutOwnersInput = {
    update: XOR<WheelUpdateWithoutOwnersInput, WheelUncheckedUpdateWithoutOwnersInput>
    create: XOR<WheelCreateWithoutOwnersInput, WheelUncheckedCreateWithoutOwnersInput>
    where?: WheelWhereInput
  }

  export type WheelUpdateToOneWithWhereWithoutOwnersInput = {
    where?: WheelWhereInput
    data: XOR<WheelUpdateWithoutOwnersInput, WheelUncheckedUpdateWithoutOwnersInput>
  }

  export type WheelUpdateWithoutOwnersInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    hub?: HubUpdateOneWithoutWheelsNestedInput
    rim?: RimUpdateOneWithoutWheelsNestedInput
    wheelsFoward?: WheelsetUpdateManyWithoutWheelFowardNestedInput
    wheelsBack?: WheelsetUpdateManyWithoutWheelBackNestedInput
  }

  export type WheelUncheckedUpdateWithoutOwnersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    hubId?: NullableIntFieldUpdateOperationsInput | number | null
    rimId?: NullableIntFieldUpdateOperationsInput | number | null
    wheelsFoward?: WheelsetUncheckedUpdateManyWithoutWheelFowardNestedInput
    wheelsBack?: WheelsetUncheckedUpdateManyWithoutWheelBackNestedInput
  }

  export type WheelsetUpsertWithoutOwnersInput = {
    update: XOR<WheelsetUpdateWithoutOwnersInput, WheelsetUncheckedUpdateWithoutOwnersInput>
    create: XOR<WheelsetCreateWithoutOwnersInput, WheelsetUncheckedCreateWithoutOwnersInput>
    where?: WheelsetWhereInput
  }

  export type WheelsetUpdateToOneWithWhereWithoutOwnersInput = {
    where?: WheelsetWhereInput
    data: XOR<WheelsetUpdateWithoutOwnersInput, WheelsetUncheckedUpdateWithoutOwnersInput>
  }

  export type WheelsetUpdateWithoutOwnersInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    wheelFoward?: WheelUpdateOneWithoutWheelsFowardNestedInput
    wheelBack?: WheelUpdateOneWithoutWheelsBackNestedInput
  }

  export type WheelsetUncheckedUpdateWithoutOwnersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    wheelFowardId?: NullableIntFieldUpdateOperationsInput | number | null
    wheelBackId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PartUpsertWithoutOwnersInput = {
    update: XOR<PartUpdateWithoutOwnersInput, PartUncheckedUpdateWithoutOwnersInput>
    create: XOR<PartCreateWithoutOwnersInput, PartUncheckedCreateWithoutOwnersInput>
    where?: PartWhereInput
  }

  export type PartUpdateToOneWithWhereWithoutOwnersInput = {
    where?: PartWhereInput
    data: XOR<PartUpdateWithoutOwnersInput, PartUncheckedUpdateWithoutOwnersInput>
  }

  export type PartUpdateWithoutOwnersInput = {
    categories?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    designationCode?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    maker?: MakerUpdateOneWithoutPartsNestedInput
    bicycles?: BicyclePartUpdateManyWithoutPartNestedInput
    hub?: HubUpdateOneWithoutPartNestedInput
    rim?: RimUpdateOneWithoutPartNestedInput
    cogset?: CogsetUpdateOneWithoutPartNestedInput
  }

  export type PartUncheckedUpdateWithoutOwnersInput = {
    id?: IntFieldUpdateOperationsInput | number
    categories?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    designationCode?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    makerId?: NullableIntFieldUpdateOperationsInput | number | null
    bicycles?: BicyclePartUncheckedUpdateManyWithoutPartNestedInput
    hub?: HubUncheckedUpdateOneWithoutPartNestedInput
    rim?: RimUncheckedUpdateOneWithoutPartNestedInput
    cogset?: CogsetUncheckedUpdateOneWithoutPartNestedInput
  }

  export type BicyclePartCreateWithoutBicycleInput = {
    quantity?: number | null
    notes?: string | null
    part?: PartCreateNestedOneWithoutBicyclesInput
  }

  export type BicyclePartUncheckedCreateWithoutBicycleInput = {
    id?: number
    quantity?: number | null
    notes?: string | null
    partId?: number | null
  }

  export type BicyclePartCreateOrConnectWithoutBicycleInput = {
    where: BicyclePartWhereUniqueInput
    create: XOR<BicyclePartCreateWithoutBicycleInput, BicyclePartUncheckedCreateWithoutBicycleInput>
  }

  export type OwnershipCreateWithoutBicycleInput = {
    acquired?: Date | string | null
    condition?: string | null
    notes?: string | null
    owner?: CyclistCreateNestedOneWithoutOwnsInput
    wheel?: WheelCreateNestedOneWithoutOwnersInput
    wheelSet?: WheelsetCreateNestedOneWithoutOwnersInput
    part?: PartCreateNestedOneWithoutOwnersInput
  }

  export type OwnershipUncheckedCreateWithoutBicycleInput = {
    id?: number
    acquired?: Date | string | null
    condition?: string | null
    notes?: string | null
    ownerId?: number | null
    wheelId?: number | null
    wheelSetId?: number | null
    partId?: number | null
  }

  export type OwnershipCreateOrConnectWithoutBicycleInput = {
    where: OwnershipWhereUniqueInput
    create: XOR<OwnershipCreateWithoutBicycleInput, OwnershipUncheckedCreateWithoutBicycleInput>
  }

  export type BicyclePartUpsertWithWhereUniqueWithoutBicycleInput = {
    where: BicyclePartWhereUniqueInput
    update: XOR<BicyclePartUpdateWithoutBicycleInput, BicyclePartUncheckedUpdateWithoutBicycleInput>
    create: XOR<BicyclePartCreateWithoutBicycleInput, BicyclePartUncheckedCreateWithoutBicycleInput>
  }

  export type BicyclePartUpdateWithWhereUniqueWithoutBicycleInput = {
    where: BicyclePartWhereUniqueInput
    data: XOR<BicyclePartUpdateWithoutBicycleInput, BicyclePartUncheckedUpdateWithoutBicycleInput>
  }

  export type BicyclePartUpdateManyWithWhereWithoutBicycleInput = {
    where: BicyclePartScalarWhereInput
    data: XOR<BicyclePartUpdateManyMutationInput, BicyclePartUncheckedUpdateManyWithoutBicycleInput>
  }

  export type BicyclePartScalarWhereInput = {
    AND?: BicyclePartScalarWhereInput | BicyclePartScalarWhereInput[]
    OR?: BicyclePartScalarWhereInput[]
    NOT?: BicyclePartScalarWhereInput | BicyclePartScalarWhereInput[]
    id?: IntFilter<"BicyclePart"> | number
    quantity?: IntNullableFilter<"BicyclePart"> | number | null
    notes?: StringNullableFilter<"BicyclePart"> | string | null
    bicycleId?: IntNullableFilter<"BicyclePart"> | number | null
    partId?: IntNullableFilter<"BicyclePart"> | number | null
  }

  export type OwnershipUpsertWithWhereUniqueWithoutBicycleInput = {
    where: OwnershipWhereUniqueInput
    update: XOR<OwnershipUpdateWithoutBicycleInput, OwnershipUncheckedUpdateWithoutBicycleInput>
    create: XOR<OwnershipCreateWithoutBicycleInput, OwnershipUncheckedCreateWithoutBicycleInput>
  }

  export type OwnershipUpdateWithWhereUniqueWithoutBicycleInput = {
    where: OwnershipWhereUniqueInput
    data: XOR<OwnershipUpdateWithoutBicycleInput, OwnershipUncheckedUpdateWithoutBicycleInput>
  }

  export type OwnershipUpdateManyWithWhereWithoutBicycleInput = {
    where: OwnershipScalarWhereInput
    data: XOR<OwnershipUpdateManyMutationInput, OwnershipUncheckedUpdateManyWithoutBicycleInput>
  }

  export type BicycleCreateWithoutPartsInput = {
    notes?: string | null
    owners?: OwnershipCreateNestedManyWithoutBicycleInput
  }

  export type BicycleUncheckedCreateWithoutPartsInput = {
    id?: number
    notes?: string | null
    owners?: OwnershipUncheckedCreateNestedManyWithoutBicycleInput
  }

  export type BicycleCreateOrConnectWithoutPartsInput = {
    where: BicycleWhereUniqueInput
    create: XOR<BicycleCreateWithoutPartsInput, BicycleUncheckedCreateWithoutPartsInput>
  }

  export type PartCreateWithoutBicyclesInput = {
    categories?: string | null
    type?: string | null
    designationCode?: string | null
    name?: string | null
    notes?: string | null
    maker?: MakerCreateNestedOneWithoutPartsInput
    owners?: OwnershipCreateNestedManyWithoutPartInput
    hub?: HubCreateNestedOneWithoutPartInput
    rim?: RimCreateNestedOneWithoutPartInput
    cogset?: CogsetCreateNestedOneWithoutPartInput
  }

  export type PartUncheckedCreateWithoutBicyclesInput = {
    id?: number
    categories?: string | null
    type?: string | null
    designationCode?: string | null
    name?: string | null
    notes?: string | null
    makerId?: number | null
    owners?: OwnershipUncheckedCreateNestedManyWithoutPartInput
    hub?: HubUncheckedCreateNestedOneWithoutPartInput
    rim?: RimUncheckedCreateNestedOneWithoutPartInput
    cogset?: CogsetUncheckedCreateNestedOneWithoutPartInput
  }

  export type PartCreateOrConnectWithoutBicyclesInput = {
    where: PartWhereUniqueInput
    create: XOR<PartCreateWithoutBicyclesInput, PartUncheckedCreateWithoutBicyclesInput>
  }

  export type BicycleUpsertWithoutPartsInput = {
    update: XOR<BicycleUpdateWithoutPartsInput, BicycleUncheckedUpdateWithoutPartsInput>
    create: XOR<BicycleCreateWithoutPartsInput, BicycleUncheckedCreateWithoutPartsInput>
    where?: BicycleWhereInput
  }

  export type BicycleUpdateToOneWithWhereWithoutPartsInput = {
    where?: BicycleWhereInput
    data: XOR<BicycleUpdateWithoutPartsInput, BicycleUncheckedUpdateWithoutPartsInput>
  }

  export type BicycleUpdateWithoutPartsInput = {
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    owners?: OwnershipUpdateManyWithoutBicycleNestedInput
  }

  export type BicycleUncheckedUpdateWithoutPartsInput = {
    id?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    owners?: OwnershipUncheckedUpdateManyWithoutBicycleNestedInput
  }

  export type PartUpsertWithoutBicyclesInput = {
    update: XOR<PartUpdateWithoutBicyclesInput, PartUncheckedUpdateWithoutBicyclesInput>
    create: XOR<PartCreateWithoutBicyclesInput, PartUncheckedCreateWithoutBicyclesInput>
    where?: PartWhereInput
  }

  export type PartUpdateToOneWithWhereWithoutBicyclesInput = {
    where?: PartWhereInput
    data: XOR<PartUpdateWithoutBicyclesInput, PartUncheckedUpdateWithoutBicyclesInput>
  }

  export type PartUpdateWithoutBicyclesInput = {
    categories?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    designationCode?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    maker?: MakerUpdateOneWithoutPartsNestedInput
    owners?: OwnershipUpdateManyWithoutPartNestedInput
    hub?: HubUpdateOneWithoutPartNestedInput
    rim?: RimUpdateOneWithoutPartNestedInput
    cogset?: CogsetUpdateOneWithoutPartNestedInput
  }

  export type PartUncheckedUpdateWithoutBicyclesInput = {
    id?: IntFieldUpdateOperationsInput | number
    categories?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    designationCode?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    makerId?: NullableIntFieldUpdateOperationsInput | number | null
    owners?: OwnershipUncheckedUpdateManyWithoutPartNestedInput
    hub?: HubUncheckedUpdateOneWithoutPartNestedInput
    rim?: RimUncheckedUpdateOneWithoutPartNestedInput
    cogset?: CogsetUncheckedUpdateOneWithoutPartNestedInput
  }

  export type PartCreateWithoutMakerInput = {
    categories?: string | null
    type?: string | null
    designationCode?: string | null
    name?: string | null
    notes?: string | null
    owners?: OwnershipCreateNestedManyWithoutPartInput
    bicycles?: BicyclePartCreateNestedManyWithoutPartInput
    hub?: HubCreateNestedOneWithoutPartInput
    rim?: RimCreateNestedOneWithoutPartInput
    cogset?: CogsetCreateNestedOneWithoutPartInput
  }

  export type PartUncheckedCreateWithoutMakerInput = {
    id?: number
    categories?: string | null
    type?: string | null
    designationCode?: string | null
    name?: string | null
    notes?: string | null
    owners?: OwnershipUncheckedCreateNestedManyWithoutPartInput
    bicycles?: BicyclePartUncheckedCreateNestedManyWithoutPartInput
    hub?: HubUncheckedCreateNestedOneWithoutPartInput
    rim?: RimUncheckedCreateNestedOneWithoutPartInput
    cogset?: CogsetUncheckedCreateNestedOneWithoutPartInput
  }

  export type PartCreateOrConnectWithoutMakerInput = {
    where: PartWhereUniqueInput
    create: XOR<PartCreateWithoutMakerInput, PartUncheckedCreateWithoutMakerInput>
  }

  export type PartUpsertWithWhereUniqueWithoutMakerInput = {
    where: PartWhereUniqueInput
    update: XOR<PartUpdateWithoutMakerInput, PartUncheckedUpdateWithoutMakerInput>
    create: XOR<PartCreateWithoutMakerInput, PartUncheckedCreateWithoutMakerInput>
  }

  export type PartUpdateWithWhereUniqueWithoutMakerInput = {
    where: PartWhereUniqueInput
    data: XOR<PartUpdateWithoutMakerInput, PartUncheckedUpdateWithoutMakerInput>
  }

  export type PartUpdateManyWithWhereWithoutMakerInput = {
    where: PartScalarWhereInput
    data: XOR<PartUpdateManyMutationInput, PartUncheckedUpdateManyWithoutMakerInput>
  }

  export type PartScalarWhereInput = {
    AND?: PartScalarWhereInput | PartScalarWhereInput[]
    OR?: PartScalarWhereInput[]
    NOT?: PartScalarWhereInput | PartScalarWhereInput[]
    id?: IntFilter<"Part"> | number
    categories?: StringNullableFilter<"Part"> | string | null
    type?: StringNullableFilter<"Part"> | string | null
    designationCode?: StringNullableFilter<"Part"> | string | null
    name?: StringNullableFilter<"Part"> | string | null
    notes?: StringNullableFilter<"Part"> | string | null
    makerId?: IntNullableFilter<"Part"> | number | null
  }

  export type MakerCreateWithoutPartsInput = {
    name?: string | null
    nameShort?: string | null
    nameAbbreviation?: string | null
    notes?: string | null
  }

  export type MakerUncheckedCreateWithoutPartsInput = {
    id?: number
    name?: string | null
    nameShort?: string | null
    nameAbbreviation?: string | null
    notes?: string | null
  }

  export type MakerCreateOrConnectWithoutPartsInput = {
    where: MakerWhereUniqueInput
    create: XOR<MakerCreateWithoutPartsInput, MakerUncheckedCreateWithoutPartsInput>
  }

  export type OwnershipCreateWithoutPartInput = {
    acquired?: Date | string | null
    condition?: string | null
    notes?: string | null
    owner?: CyclistCreateNestedOneWithoutOwnsInput
    bicycle?: BicycleCreateNestedOneWithoutOwnersInput
    wheel?: WheelCreateNestedOneWithoutOwnersInput
    wheelSet?: WheelsetCreateNestedOneWithoutOwnersInput
  }

  export type OwnershipUncheckedCreateWithoutPartInput = {
    id?: number
    acquired?: Date | string | null
    condition?: string | null
    notes?: string | null
    ownerId?: number | null
    bicycleId?: number | null
    wheelId?: number | null
    wheelSetId?: number | null
  }

  export type OwnershipCreateOrConnectWithoutPartInput = {
    where: OwnershipWhereUniqueInput
    create: XOR<OwnershipCreateWithoutPartInput, OwnershipUncheckedCreateWithoutPartInput>
  }

  export type BicyclePartCreateWithoutPartInput = {
    quantity?: number | null
    notes?: string | null
    bicycle?: BicycleCreateNestedOneWithoutPartsInput
  }

  export type BicyclePartUncheckedCreateWithoutPartInput = {
    id?: number
    quantity?: number | null
    notes?: string | null
    bicycleId?: number | null
  }

  export type BicyclePartCreateOrConnectWithoutPartInput = {
    where: BicyclePartWhereUniqueInput
    create: XOR<BicyclePartCreateWithoutPartInput, BicyclePartUncheckedCreateWithoutPartInput>
  }

  export type HubCreateWithoutPartInput = {
    position?: string | null
    spokeCount?: number | null
    overLocknutDistance?: number | null
    flangeDiameterLeft?: number | null
    flangeDiameterRight?: number | null
    flangeLeftToCenter?: number | null
    flangeRightToCenter?: number | null
    sflangeLeftToOLN?: number | null
    flangeRightToOLN?: number | null
    spokeHoleDiameter?: number | null
    wheels?: WheelCreateNestedManyWithoutHubInput
  }

  export type HubUncheckedCreateWithoutPartInput = {
    id?: number
    position?: string | null
    spokeCount?: number | null
    overLocknutDistance?: number | null
    flangeDiameterLeft?: number | null
    flangeDiameterRight?: number | null
    flangeLeftToCenter?: number | null
    flangeRightToCenter?: number | null
    sflangeLeftToOLN?: number | null
    flangeRightToOLN?: number | null
    spokeHoleDiameter?: number | null
    wheels?: WheelUncheckedCreateNestedManyWithoutHubInput
  }

  export type HubCreateOrConnectWithoutPartInput = {
    where: HubWhereUniqueInput
    create: XOR<HubCreateWithoutPartInput, HubUncheckedCreateWithoutPartInput>
  }

  export type RimCreateWithoutPartInput = {
    specEffectiveDiameter?: number | null
    specWidthInternal?: number | null
    specWidthExternal?: number | null
    specSectionHeight?: number | null
    wheels?: WheelCreateNestedManyWithoutRimInput
  }

  export type RimUncheckedCreateWithoutPartInput = {
    id?: number
    specEffectiveDiameter?: number | null
    specWidthInternal?: number | null
    specWidthExternal?: number | null
    specSectionHeight?: number | null
    wheels?: WheelUncheckedCreateNestedManyWithoutRimInput
  }

  export type RimCreateOrConnectWithoutPartInput = {
    where: RimWhereUniqueInput
    create: XOR<RimCreateWithoutPartInput, RimUncheckedCreateWithoutPartInput>
  }

  export type CogsetCreateWithoutPartInput = {
    type?: string | null
    cogs?: string | null
    notes?: string | null
  }

  export type CogsetUncheckedCreateWithoutPartInput = {
    id?: number
    type?: string | null
    cogs?: string | null
    notes?: string | null
  }

  export type CogsetCreateOrConnectWithoutPartInput = {
    where: CogsetWhereUniqueInput
    create: XOR<CogsetCreateWithoutPartInput, CogsetUncheckedCreateWithoutPartInput>
  }

  export type MakerUpsertWithoutPartsInput = {
    update: XOR<MakerUpdateWithoutPartsInput, MakerUncheckedUpdateWithoutPartsInput>
    create: XOR<MakerCreateWithoutPartsInput, MakerUncheckedCreateWithoutPartsInput>
    where?: MakerWhereInput
  }

  export type MakerUpdateToOneWithWhereWithoutPartsInput = {
    where?: MakerWhereInput
    data: XOR<MakerUpdateWithoutPartsInput, MakerUncheckedUpdateWithoutPartsInput>
  }

  export type MakerUpdateWithoutPartsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nameShort?: NullableStringFieldUpdateOperationsInput | string | null
    nameAbbreviation?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MakerUncheckedUpdateWithoutPartsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nameShort?: NullableStringFieldUpdateOperationsInput | string | null
    nameAbbreviation?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OwnershipUpsertWithWhereUniqueWithoutPartInput = {
    where: OwnershipWhereUniqueInput
    update: XOR<OwnershipUpdateWithoutPartInput, OwnershipUncheckedUpdateWithoutPartInput>
    create: XOR<OwnershipCreateWithoutPartInput, OwnershipUncheckedCreateWithoutPartInput>
  }

  export type OwnershipUpdateWithWhereUniqueWithoutPartInput = {
    where: OwnershipWhereUniqueInput
    data: XOR<OwnershipUpdateWithoutPartInput, OwnershipUncheckedUpdateWithoutPartInput>
  }

  export type OwnershipUpdateManyWithWhereWithoutPartInput = {
    where: OwnershipScalarWhereInput
    data: XOR<OwnershipUpdateManyMutationInput, OwnershipUncheckedUpdateManyWithoutPartInput>
  }

  export type BicyclePartUpsertWithWhereUniqueWithoutPartInput = {
    where: BicyclePartWhereUniqueInput
    update: XOR<BicyclePartUpdateWithoutPartInput, BicyclePartUncheckedUpdateWithoutPartInput>
    create: XOR<BicyclePartCreateWithoutPartInput, BicyclePartUncheckedCreateWithoutPartInput>
  }

  export type BicyclePartUpdateWithWhereUniqueWithoutPartInput = {
    where: BicyclePartWhereUniqueInput
    data: XOR<BicyclePartUpdateWithoutPartInput, BicyclePartUncheckedUpdateWithoutPartInput>
  }

  export type BicyclePartUpdateManyWithWhereWithoutPartInput = {
    where: BicyclePartScalarWhereInput
    data: XOR<BicyclePartUpdateManyMutationInput, BicyclePartUncheckedUpdateManyWithoutPartInput>
  }

  export type HubUpsertWithoutPartInput = {
    update: XOR<HubUpdateWithoutPartInput, HubUncheckedUpdateWithoutPartInput>
    create: XOR<HubCreateWithoutPartInput, HubUncheckedCreateWithoutPartInput>
    where?: HubWhereInput
  }

  export type HubUpdateToOneWithWhereWithoutPartInput = {
    where?: HubWhereInput
    data: XOR<HubUpdateWithoutPartInput, HubUncheckedUpdateWithoutPartInput>
  }

  export type HubUpdateWithoutPartInput = {
    position?: NullableStringFieldUpdateOperationsInput | string | null
    spokeCount?: NullableIntFieldUpdateOperationsInput | number | null
    overLocknutDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    flangeDiameterLeft?: NullableFloatFieldUpdateOperationsInput | number | null
    flangeDiameterRight?: NullableFloatFieldUpdateOperationsInput | number | null
    flangeLeftToCenter?: NullableFloatFieldUpdateOperationsInput | number | null
    flangeRightToCenter?: NullableFloatFieldUpdateOperationsInput | number | null
    sflangeLeftToOLN?: NullableFloatFieldUpdateOperationsInput | number | null
    flangeRightToOLN?: NullableFloatFieldUpdateOperationsInput | number | null
    spokeHoleDiameter?: NullableFloatFieldUpdateOperationsInput | number | null
    wheels?: WheelUpdateManyWithoutHubNestedInput
  }

  export type HubUncheckedUpdateWithoutPartInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: NullableStringFieldUpdateOperationsInput | string | null
    spokeCount?: NullableIntFieldUpdateOperationsInput | number | null
    overLocknutDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    flangeDiameterLeft?: NullableFloatFieldUpdateOperationsInput | number | null
    flangeDiameterRight?: NullableFloatFieldUpdateOperationsInput | number | null
    flangeLeftToCenter?: NullableFloatFieldUpdateOperationsInput | number | null
    flangeRightToCenter?: NullableFloatFieldUpdateOperationsInput | number | null
    sflangeLeftToOLN?: NullableFloatFieldUpdateOperationsInput | number | null
    flangeRightToOLN?: NullableFloatFieldUpdateOperationsInput | number | null
    spokeHoleDiameter?: NullableFloatFieldUpdateOperationsInput | number | null
    wheels?: WheelUncheckedUpdateManyWithoutHubNestedInput
  }

  export type RimUpsertWithoutPartInput = {
    update: XOR<RimUpdateWithoutPartInput, RimUncheckedUpdateWithoutPartInput>
    create: XOR<RimCreateWithoutPartInput, RimUncheckedCreateWithoutPartInput>
    where?: RimWhereInput
  }

  export type RimUpdateToOneWithWhereWithoutPartInput = {
    where?: RimWhereInput
    data: XOR<RimUpdateWithoutPartInput, RimUncheckedUpdateWithoutPartInput>
  }

  export type RimUpdateWithoutPartInput = {
    specEffectiveDiameter?: NullableFloatFieldUpdateOperationsInput | number | null
    specWidthInternal?: NullableFloatFieldUpdateOperationsInput | number | null
    specWidthExternal?: NullableFloatFieldUpdateOperationsInput | number | null
    specSectionHeight?: NullableFloatFieldUpdateOperationsInput | number | null
    wheels?: WheelUpdateManyWithoutRimNestedInput
  }

  export type RimUncheckedUpdateWithoutPartInput = {
    id?: IntFieldUpdateOperationsInput | number
    specEffectiveDiameter?: NullableFloatFieldUpdateOperationsInput | number | null
    specWidthInternal?: NullableFloatFieldUpdateOperationsInput | number | null
    specWidthExternal?: NullableFloatFieldUpdateOperationsInput | number | null
    specSectionHeight?: NullableFloatFieldUpdateOperationsInput | number | null
    wheels?: WheelUncheckedUpdateManyWithoutRimNestedInput
  }

  export type CogsetUpsertWithoutPartInput = {
    update: XOR<CogsetUpdateWithoutPartInput, CogsetUncheckedUpdateWithoutPartInput>
    create: XOR<CogsetCreateWithoutPartInput, CogsetUncheckedCreateWithoutPartInput>
    where?: CogsetWhereInput
  }

  export type CogsetUpdateToOneWithWhereWithoutPartInput = {
    where?: CogsetWhereInput
    data: XOR<CogsetUpdateWithoutPartInput, CogsetUncheckedUpdateWithoutPartInput>
  }

  export type CogsetUpdateWithoutPartInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
    cogs?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CogsetUncheckedUpdateWithoutPartInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    cogs?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PartCreateWithoutHubInput = {
    categories?: string | null
    type?: string | null
    designationCode?: string | null
    name?: string | null
    notes?: string | null
    maker?: MakerCreateNestedOneWithoutPartsInput
    owners?: OwnershipCreateNestedManyWithoutPartInput
    bicycles?: BicyclePartCreateNestedManyWithoutPartInput
    rim?: RimCreateNestedOneWithoutPartInput
    cogset?: CogsetCreateNestedOneWithoutPartInput
  }

  export type PartUncheckedCreateWithoutHubInput = {
    id?: number
    categories?: string | null
    type?: string | null
    designationCode?: string | null
    name?: string | null
    notes?: string | null
    makerId?: number | null
    owners?: OwnershipUncheckedCreateNestedManyWithoutPartInput
    bicycles?: BicyclePartUncheckedCreateNestedManyWithoutPartInput
    rim?: RimUncheckedCreateNestedOneWithoutPartInput
    cogset?: CogsetUncheckedCreateNestedOneWithoutPartInput
  }

  export type PartCreateOrConnectWithoutHubInput = {
    where: PartWhereUniqueInput
    create: XOR<PartCreateWithoutHubInput, PartUncheckedCreateWithoutHubInput>
  }

  export type WheelCreateWithoutHubInput = {
    name?: string | null
    notes?: string | null
    rim?: RimCreateNestedOneWithoutWheelsInput
    wheelsFoward?: WheelsetCreateNestedManyWithoutWheelFowardInput
    wheelsBack?: WheelsetCreateNestedManyWithoutWheelBackInput
    owners?: OwnershipCreateNestedManyWithoutWheelInput
  }

  export type WheelUncheckedCreateWithoutHubInput = {
    id?: number
    name?: string | null
    notes?: string | null
    rimId?: number | null
    wheelsFoward?: WheelsetUncheckedCreateNestedManyWithoutWheelFowardInput
    wheelsBack?: WheelsetUncheckedCreateNestedManyWithoutWheelBackInput
    owners?: OwnershipUncheckedCreateNestedManyWithoutWheelInput
  }

  export type WheelCreateOrConnectWithoutHubInput = {
    where: WheelWhereUniqueInput
    create: XOR<WheelCreateWithoutHubInput, WheelUncheckedCreateWithoutHubInput>
  }

  export type PartUpsertWithoutHubInput = {
    update: XOR<PartUpdateWithoutHubInput, PartUncheckedUpdateWithoutHubInput>
    create: XOR<PartCreateWithoutHubInput, PartUncheckedCreateWithoutHubInput>
    where?: PartWhereInput
  }

  export type PartUpdateToOneWithWhereWithoutHubInput = {
    where?: PartWhereInput
    data: XOR<PartUpdateWithoutHubInput, PartUncheckedUpdateWithoutHubInput>
  }

  export type PartUpdateWithoutHubInput = {
    categories?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    designationCode?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    maker?: MakerUpdateOneWithoutPartsNestedInput
    owners?: OwnershipUpdateManyWithoutPartNestedInput
    bicycles?: BicyclePartUpdateManyWithoutPartNestedInput
    rim?: RimUpdateOneWithoutPartNestedInput
    cogset?: CogsetUpdateOneWithoutPartNestedInput
  }

  export type PartUncheckedUpdateWithoutHubInput = {
    id?: IntFieldUpdateOperationsInput | number
    categories?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    designationCode?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    makerId?: NullableIntFieldUpdateOperationsInput | number | null
    owners?: OwnershipUncheckedUpdateManyWithoutPartNestedInput
    bicycles?: BicyclePartUncheckedUpdateManyWithoutPartNestedInput
    rim?: RimUncheckedUpdateOneWithoutPartNestedInput
    cogset?: CogsetUncheckedUpdateOneWithoutPartNestedInput
  }

  export type WheelUpsertWithWhereUniqueWithoutHubInput = {
    where: WheelWhereUniqueInput
    update: XOR<WheelUpdateWithoutHubInput, WheelUncheckedUpdateWithoutHubInput>
    create: XOR<WheelCreateWithoutHubInput, WheelUncheckedCreateWithoutHubInput>
  }

  export type WheelUpdateWithWhereUniqueWithoutHubInput = {
    where: WheelWhereUniqueInput
    data: XOR<WheelUpdateWithoutHubInput, WheelUncheckedUpdateWithoutHubInput>
  }

  export type WheelUpdateManyWithWhereWithoutHubInput = {
    where: WheelScalarWhereInput
    data: XOR<WheelUpdateManyMutationInput, WheelUncheckedUpdateManyWithoutHubInput>
  }

  export type WheelScalarWhereInput = {
    AND?: WheelScalarWhereInput | WheelScalarWhereInput[]
    OR?: WheelScalarWhereInput[]
    NOT?: WheelScalarWhereInput | WheelScalarWhereInput[]
    id?: IntFilter<"Wheel"> | number
    name?: StringNullableFilter<"Wheel"> | string | null
    notes?: StringNullableFilter<"Wheel"> | string | null
    hubId?: IntNullableFilter<"Wheel"> | number | null
    rimId?: IntNullableFilter<"Wheel"> | number | null
  }

  export type PartCreateWithoutRimInput = {
    categories?: string | null
    type?: string | null
    designationCode?: string | null
    name?: string | null
    notes?: string | null
    maker?: MakerCreateNestedOneWithoutPartsInput
    owners?: OwnershipCreateNestedManyWithoutPartInput
    bicycles?: BicyclePartCreateNestedManyWithoutPartInput
    hub?: HubCreateNestedOneWithoutPartInput
    cogset?: CogsetCreateNestedOneWithoutPartInput
  }

  export type PartUncheckedCreateWithoutRimInput = {
    id?: number
    categories?: string | null
    type?: string | null
    designationCode?: string | null
    name?: string | null
    notes?: string | null
    makerId?: number | null
    owners?: OwnershipUncheckedCreateNestedManyWithoutPartInput
    bicycles?: BicyclePartUncheckedCreateNestedManyWithoutPartInput
    hub?: HubUncheckedCreateNestedOneWithoutPartInput
    cogset?: CogsetUncheckedCreateNestedOneWithoutPartInput
  }

  export type PartCreateOrConnectWithoutRimInput = {
    where: PartWhereUniqueInput
    create: XOR<PartCreateWithoutRimInput, PartUncheckedCreateWithoutRimInput>
  }

  export type WheelCreateWithoutRimInput = {
    name?: string | null
    notes?: string | null
    hub?: HubCreateNestedOneWithoutWheelsInput
    wheelsFoward?: WheelsetCreateNestedManyWithoutWheelFowardInput
    wheelsBack?: WheelsetCreateNestedManyWithoutWheelBackInput
    owners?: OwnershipCreateNestedManyWithoutWheelInput
  }

  export type WheelUncheckedCreateWithoutRimInput = {
    id?: number
    name?: string | null
    notes?: string | null
    hubId?: number | null
    wheelsFoward?: WheelsetUncheckedCreateNestedManyWithoutWheelFowardInput
    wheelsBack?: WheelsetUncheckedCreateNestedManyWithoutWheelBackInput
    owners?: OwnershipUncheckedCreateNestedManyWithoutWheelInput
  }

  export type WheelCreateOrConnectWithoutRimInput = {
    where: WheelWhereUniqueInput
    create: XOR<WheelCreateWithoutRimInput, WheelUncheckedCreateWithoutRimInput>
  }

  export type PartUpsertWithoutRimInput = {
    update: XOR<PartUpdateWithoutRimInput, PartUncheckedUpdateWithoutRimInput>
    create: XOR<PartCreateWithoutRimInput, PartUncheckedCreateWithoutRimInput>
    where?: PartWhereInput
  }

  export type PartUpdateToOneWithWhereWithoutRimInput = {
    where?: PartWhereInput
    data: XOR<PartUpdateWithoutRimInput, PartUncheckedUpdateWithoutRimInput>
  }

  export type PartUpdateWithoutRimInput = {
    categories?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    designationCode?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    maker?: MakerUpdateOneWithoutPartsNestedInput
    owners?: OwnershipUpdateManyWithoutPartNestedInput
    bicycles?: BicyclePartUpdateManyWithoutPartNestedInput
    hub?: HubUpdateOneWithoutPartNestedInput
    cogset?: CogsetUpdateOneWithoutPartNestedInput
  }

  export type PartUncheckedUpdateWithoutRimInput = {
    id?: IntFieldUpdateOperationsInput | number
    categories?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    designationCode?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    makerId?: NullableIntFieldUpdateOperationsInput | number | null
    owners?: OwnershipUncheckedUpdateManyWithoutPartNestedInput
    bicycles?: BicyclePartUncheckedUpdateManyWithoutPartNestedInput
    hub?: HubUncheckedUpdateOneWithoutPartNestedInput
    cogset?: CogsetUncheckedUpdateOneWithoutPartNestedInput
  }

  export type WheelUpsertWithWhereUniqueWithoutRimInput = {
    where: WheelWhereUniqueInput
    update: XOR<WheelUpdateWithoutRimInput, WheelUncheckedUpdateWithoutRimInput>
    create: XOR<WheelCreateWithoutRimInput, WheelUncheckedCreateWithoutRimInput>
  }

  export type WheelUpdateWithWhereUniqueWithoutRimInput = {
    where: WheelWhereUniqueInput
    data: XOR<WheelUpdateWithoutRimInput, WheelUncheckedUpdateWithoutRimInput>
  }

  export type WheelUpdateManyWithWhereWithoutRimInput = {
    where: WheelScalarWhereInput
    data: XOR<WheelUpdateManyMutationInput, WheelUncheckedUpdateManyWithoutRimInput>
  }

  export type PartCreateWithoutCogsetInput = {
    categories?: string | null
    type?: string | null
    designationCode?: string | null
    name?: string | null
    notes?: string | null
    maker?: MakerCreateNestedOneWithoutPartsInput
    owners?: OwnershipCreateNestedManyWithoutPartInput
    bicycles?: BicyclePartCreateNestedManyWithoutPartInput
    hub?: HubCreateNestedOneWithoutPartInput
    rim?: RimCreateNestedOneWithoutPartInput
  }

  export type PartUncheckedCreateWithoutCogsetInput = {
    id?: number
    categories?: string | null
    type?: string | null
    designationCode?: string | null
    name?: string | null
    notes?: string | null
    makerId?: number | null
    owners?: OwnershipUncheckedCreateNestedManyWithoutPartInput
    bicycles?: BicyclePartUncheckedCreateNestedManyWithoutPartInput
    hub?: HubUncheckedCreateNestedOneWithoutPartInput
    rim?: RimUncheckedCreateNestedOneWithoutPartInput
  }

  export type PartCreateOrConnectWithoutCogsetInput = {
    where: PartWhereUniqueInput
    create: XOR<PartCreateWithoutCogsetInput, PartUncheckedCreateWithoutCogsetInput>
  }

  export type PartUpsertWithoutCogsetInput = {
    update: XOR<PartUpdateWithoutCogsetInput, PartUncheckedUpdateWithoutCogsetInput>
    create: XOR<PartCreateWithoutCogsetInput, PartUncheckedCreateWithoutCogsetInput>
    where?: PartWhereInput
  }

  export type PartUpdateToOneWithWhereWithoutCogsetInput = {
    where?: PartWhereInput
    data: XOR<PartUpdateWithoutCogsetInput, PartUncheckedUpdateWithoutCogsetInput>
  }

  export type PartUpdateWithoutCogsetInput = {
    categories?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    designationCode?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    maker?: MakerUpdateOneWithoutPartsNestedInput
    owners?: OwnershipUpdateManyWithoutPartNestedInput
    bicycles?: BicyclePartUpdateManyWithoutPartNestedInput
    hub?: HubUpdateOneWithoutPartNestedInput
    rim?: RimUpdateOneWithoutPartNestedInput
  }

  export type PartUncheckedUpdateWithoutCogsetInput = {
    id?: IntFieldUpdateOperationsInput | number
    categories?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    designationCode?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    makerId?: NullableIntFieldUpdateOperationsInput | number | null
    owners?: OwnershipUncheckedUpdateManyWithoutPartNestedInput
    bicycles?: BicyclePartUncheckedUpdateManyWithoutPartNestedInput
    hub?: HubUncheckedUpdateOneWithoutPartNestedInput
    rim?: RimUncheckedUpdateOneWithoutPartNestedInput
  }

  export type HubCreateWithoutWheelsInput = {
    position?: string | null
    spokeCount?: number | null
    overLocknutDistance?: number | null
    flangeDiameterLeft?: number | null
    flangeDiameterRight?: number | null
    flangeLeftToCenter?: number | null
    flangeRightToCenter?: number | null
    sflangeLeftToOLN?: number | null
    flangeRightToOLN?: number | null
    spokeHoleDiameter?: number | null
    part?: PartCreateNestedOneWithoutHubInput
  }

  export type HubUncheckedCreateWithoutWheelsInput = {
    id?: number
    partId?: number | null
    position?: string | null
    spokeCount?: number | null
    overLocknutDistance?: number | null
    flangeDiameterLeft?: number | null
    flangeDiameterRight?: number | null
    flangeLeftToCenter?: number | null
    flangeRightToCenter?: number | null
    sflangeLeftToOLN?: number | null
    flangeRightToOLN?: number | null
    spokeHoleDiameter?: number | null
  }

  export type HubCreateOrConnectWithoutWheelsInput = {
    where: HubWhereUniqueInput
    create: XOR<HubCreateWithoutWheelsInput, HubUncheckedCreateWithoutWheelsInput>
  }

  export type RimCreateWithoutWheelsInput = {
    specEffectiveDiameter?: number | null
    specWidthInternal?: number | null
    specWidthExternal?: number | null
    specSectionHeight?: number | null
    part?: PartCreateNestedOneWithoutRimInput
  }

  export type RimUncheckedCreateWithoutWheelsInput = {
    id?: number
    partId?: number | null
    specEffectiveDiameter?: number | null
    specWidthInternal?: number | null
    specWidthExternal?: number | null
    specSectionHeight?: number | null
  }

  export type RimCreateOrConnectWithoutWheelsInput = {
    where: RimWhereUniqueInput
    create: XOR<RimCreateWithoutWheelsInput, RimUncheckedCreateWithoutWheelsInput>
  }

  export type WheelsetCreateWithoutWheelFowardInput = {
    name?: string | null
    notes?: string | null
    wheelBack?: WheelCreateNestedOneWithoutWheelsBackInput
    owners?: OwnershipCreateNestedManyWithoutWheelSetInput
  }

  export type WheelsetUncheckedCreateWithoutWheelFowardInput = {
    id?: number
    name?: string | null
    notes?: string | null
    wheelBackId?: number | null
    owners?: OwnershipUncheckedCreateNestedManyWithoutWheelSetInput
  }

  export type WheelsetCreateOrConnectWithoutWheelFowardInput = {
    where: WheelsetWhereUniqueInput
    create: XOR<WheelsetCreateWithoutWheelFowardInput, WheelsetUncheckedCreateWithoutWheelFowardInput>
  }

  export type WheelsetCreateWithoutWheelBackInput = {
    name?: string | null
    notes?: string | null
    wheelFoward?: WheelCreateNestedOneWithoutWheelsFowardInput
    owners?: OwnershipCreateNestedManyWithoutWheelSetInput
  }

  export type WheelsetUncheckedCreateWithoutWheelBackInput = {
    id?: number
    name?: string | null
    notes?: string | null
    wheelFowardId?: number | null
    owners?: OwnershipUncheckedCreateNestedManyWithoutWheelSetInput
  }

  export type WheelsetCreateOrConnectWithoutWheelBackInput = {
    where: WheelsetWhereUniqueInput
    create: XOR<WheelsetCreateWithoutWheelBackInput, WheelsetUncheckedCreateWithoutWheelBackInput>
  }

  export type OwnershipCreateWithoutWheelInput = {
    acquired?: Date | string | null
    condition?: string | null
    notes?: string | null
    owner?: CyclistCreateNestedOneWithoutOwnsInput
    bicycle?: BicycleCreateNestedOneWithoutOwnersInput
    wheelSet?: WheelsetCreateNestedOneWithoutOwnersInput
    part?: PartCreateNestedOneWithoutOwnersInput
  }

  export type OwnershipUncheckedCreateWithoutWheelInput = {
    id?: number
    acquired?: Date | string | null
    condition?: string | null
    notes?: string | null
    ownerId?: number | null
    bicycleId?: number | null
    wheelSetId?: number | null
    partId?: number | null
  }

  export type OwnershipCreateOrConnectWithoutWheelInput = {
    where: OwnershipWhereUniqueInput
    create: XOR<OwnershipCreateWithoutWheelInput, OwnershipUncheckedCreateWithoutWheelInput>
  }

  export type HubUpsertWithoutWheelsInput = {
    update: XOR<HubUpdateWithoutWheelsInput, HubUncheckedUpdateWithoutWheelsInput>
    create: XOR<HubCreateWithoutWheelsInput, HubUncheckedCreateWithoutWheelsInput>
    where?: HubWhereInput
  }

  export type HubUpdateToOneWithWhereWithoutWheelsInput = {
    where?: HubWhereInput
    data: XOR<HubUpdateWithoutWheelsInput, HubUncheckedUpdateWithoutWheelsInput>
  }

  export type HubUpdateWithoutWheelsInput = {
    position?: NullableStringFieldUpdateOperationsInput | string | null
    spokeCount?: NullableIntFieldUpdateOperationsInput | number | null
    overLocknutDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    flangeDiameterLeft?: NullableFloatFieldUpdateOperationsInput | number | null
    flangeDiameterRight?: NullableFloatFieldUpdateOperationsInput | number | null
    flangeLeftToCenter?: NullableFloatFieldUpdateOperationsInput | number | null
    flangeRightToCenter?: NullableFloatFieldUpdateOperationsInput | number | null
    sflangeLeftToOLN?: NullableFloatFieldUpdateOperationsInput | number | null
    flangeRightToOLN?: NullableFloatFieldUpdateOperationsInput | number | null
    spokeHoleDiameter?: NullableFloatFieldUpdateOperationsInput | number | null
    part?: PartUpdateOneWithoutHubNestedInput
  }

  export type HubUncheckedUpdateWithoutWheelsInput = {
    id?: IntFieldUpdateOperationsInput | number
    partId?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    spokeCount?: NullableIntFieldUpdateOperationsInput | number | null
    overLocknutDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    flangeDiameterLeft?: NullableFloatFieldUpdateOperationsInput | number | null
    flangeDiameterRight?: NullableFloatFieldUpdateOperationsInput | number | null
    flangeLeftToCenter?: NullableFloatFieldUpdateOperationsInput | number | null
    flangeRightToCenter?: NullableFloatFieldUpdateOperationsInput | number | null
    sflangeLeftToOLN?: NullableFloatFieldUpdateOperationsInput | number | null
    flangeRightToOLN?: NullableFloatFieldUpdateOperationsInput | number | null
    spokeHoleDiameter?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type RimUpsertWithoutWheelsInput = {
    update: XOR<RimUpdateWithoutWheelsInput, RimUncheckedUpdateWithoutWheelsInput>
    create: XOR<RimCreateWithoutWheelsInput, RimUncheckedCreateWithoutWheelsInput>
    where?: RimWhereInput
  }

  export type RimUpdateToOneWithWhereWithoutWheelsInput = {
    where?: RimWhereInput
    data: XOR<RimUpdateWithoutWheelsInput, RimUncheckedUpdateWithoutWheelsInput>
  }

  export type RimUpdateWithoutWheelsInput = {
    specEffectiveDiameter?: NullableFloatFieldUpdateOperationsInput | number | null
    specWidthInternal?: NullableFloatFieldUpdateOperationsInput | number | null
    specWidthExternal?: NullableFloatFieldUpdateOperationsInput | number | null
    specSectionHeight?: NullableFloatFieldUpdateOperationsInput | number | null
    part?: PartUpdateOneWithoutRimNestedInput
  }

  export type RimUncheckedUpdateWithoutWheelsInput = {
    id?: IntFieldUpdateOperationsInput | number
    partId?: NullableIntFieldUpdateOperationsInput | number | null
    specEffectiveDiameter?: NullableFloatFieldUpdateOperationsInput | number | null
    specWidthInternal?: NullableFloatFieldUpdateOperationsInput | number | null
    specWidthExternal?: NullableFloatFieldUpdateOperationsInput | number | null
    specSectionHeight?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type WheelsetUpsertWithWhereUniqueWithoutWheelFowardInput = {
    where: WheelsetWhereUniqueInput
    update: XOR<WheelsetUpdateWithoutWheelFowardInput, WheelsetUncheckedUpdateWithoutWheelFowardInput>
    create: XOR<WheelsetCreateWithoutWheelFowardInput, WheelsetUncheckedCreateWithoutWheelFowardInput>
  }

  export type WheelsetUpdateWithWhereUniqueWithoutWheelFowardInput = {
    where: WheelsetWhereUniqueInput
    data: XOR<WheelsetUpdateWithoutWheelFowardInput, WheelsetUncheckedUpdateWithoutWheelFowardInput>
  }

  export type WheelsetUpdateManyWithWhereWithoutWheelFowardInput = {
    where: WheelsetScalarWhereInput
    data: XOR<WheelsetUpdateManyMutationInput, WheelsetUncheckedUpdateManyWithoutWheelFowardInput>
  }

  export type WheelsetScalarWhereInput = {
    AND?: WheelsetScalarWhereInput | WheelsetScalarWhereInput[]
    OR?: WheelsetScalarWhereInput[]
    NOT?: WheelsetScalarWhereInput | WheelsetScalarWhereInput[]
    id?: IntFilter<"Wheelset"> | number
    name?: StringNullableFilter<"Wheelset"> | string | null
    notes?: StringNullableFilter<"Wheelset"> | string | null
    wheelFowardId?: IntNullableFilter<"Wheelset"> | number | null
    wheelBackId?: IntNullableFilter<"Wheelset"> | number | null
  }

  export type WheelsetUpsertWithWhereUniqueWithoutWheelBackInput = {
    where: WheelsetWhereUniqueInput
    update: XOR<WheelsetUpdateWithoutWheelBackInput, WheelsetUncheckedUpdateWithoutWheelBackInput>
    create: XOR<WheelsetCreateWithoutWheelBackInput, WheelsetUncheckedCreateWithoutWheelBackInput>
  }

  export type WheelsetUpdateWithWhereUniqueWithoutWheelBackInput = {
    where: WheelsetWhereUniqueInput
    data: XOR<WheelsetUpdateWithoutWheelBackInput, WheelsetUncheckedUpdateWithoutWheelBackInput>
  }

  export type WheelsetUpdateManyWithWhereWithoutWheelBackInput = {
    where: WheelsetScalarWhereInput
    data: XOR<WheelsetUpdateManyMutationInput, WheelsetUncheckedUpdateManyWithoutWheelBackInput>
  }

  export type OwnershipUpsertWithWhereUniqueWithoutWheelInput = {
    where: OwnershipWhereUniqueInput
    update: XOR<OwnershipUpdateWithoutWheelInput, OwnershipUncheckedUpdateWithoutWheelInput>
    create: XOR<OwnershipCreateWithoutWheelInput, OwnershipUncheckedCreateWithoutWheelInput>
  }

  export type OwnershipUpdateWithWhereUniqueWithoutWheelInput = {
    where: OwnershipWhereUniqueInput
    data: XOR<OwnershipUpdateWithoutWheelInput, OwnershipUncheckedUpdateWithoutWheelInput>
  }

  export type OwnershipUpdateManyWithWhereWithoutWheelInput = {
    where: OwnershipScalarWhereInput
    data: XOR<OwnershipUpdateManyMutationInput, OwnershipUncheckedUpdateManyWithoutWheelInput>
  }

  export type WheelCreateWithoutWheelsFowardInput = {
    name?: string | null
    notes?: string | null
    hub?: HubCreateNestedOneWithoutWheelsInput
    rim?: RimCreateNestedOneWithoutWheelsInput
    wheelsBack?: WheelsetCreateNestedManyWithoutWheelBackInput
    owners?: OwnershipCreateNestedManyWithoutWheelInput
  }

  export type WheelUncheckedCreateWithoutWheelsFowardInput = {
    id?: number
    name?: string | null
    notes?: string | null
    hubId?: number | null
    rimId?: number | null
    wheelsBack?: WheelsetUncheckedCreateNestedManyWithoutWheelBackInput
    owners?: OwnershipUncheckedCreateNestedManyWithoutWheelInput
  }

  export type WheelCreateOrConnectWithoutWheelsFowardInput = {
    where: WheelWhereUniqueInput
    create: XOR<WheelCreateWithoutWheelsFowardInput, WheelUncheckedCreateWithoutWheelsFowardInput>
  }

  export type WheelCreateWithoutWheelsBackInput = {
    name?: string | null
    notes?: string | null
    hub?: HubCreateNestedOneWithoutWheelsInput
    rim?: RimCreateNestedOneWithoutWheelsInput
    wheelsFoward?: WheelsetCreateNestedManyWithoutWheelFowardInput
    owners?: OwnershipCreateNestedManyWithoutWheelInput
  }

  export type WheelUncheckedCreateWithoutWheelsBackInput = {
    id?: number
    name?: string | null
    notes?: string | null
    hubId?: number | null
    rimId?: number | null
    wheelsFoward?: WheelsetUncheckedCreateNestedManyWithoutWheelFowardInput
    owners?: OwnershipUncheckedCreateNestedManyWithoutWheelInput
  }

  export type WheelCreateOrConnectWithoutWheelsBackInput = {
    where: WheelWhereUniqueInput
    create: XOR<WheelCreateWithoutWheelsBackInput, WheelUncheckedCreateWithoutWheelsBackInput>
  }

  export type OwnershipCreateWithoutWheelSetInput = {
    acquired?: Date | string | null
    condition?: string | null
    notes?: string | null
    owner?: CyclistCreateNestedOneWithoutOwnsInput
    bicycle?: BicycleCreateNestedOneWithoutOwnersInput
    wheel?: WheelCreateNestedOneWithoutOwnersInput
    part?: PartCreateNestedOneWithoutOwnersInput
  }

  export type OwnershipUncheckedCreateWithoutWheelSetInput = {
    id?: number
    acquired?: Date | string | null
    condition?: string | null
    notes?: string | null
    ownerId?: number | null
    bicycleId?: number | null
    wheelId?: number | null
    partId?: number | null
  }

  export type OwnershipCreateOrConnectWithoutWheelSetInput = {
    where: OwnershipWhereUniqueInput
    create: XOR<OwnershipCreateWithoutWheelSetInput, OwnershipUncheckedCreateWithoutWheelSetInput>
  }

  export type WheelUpsertWithoutWheelsFowardInput = {
    update: XOR<WheelUpdateWithoutWheelsFowardInput, WheelUncheckedUpdateWithoutWheelsFowardInput>
    create: XOR<WheelCreateWithoutWheelsFowardInput, WheelUncheckedCreateWithoutWheelsFowardInput>
    where?: WheelWhereInput
  }

  export type WheelUpdateToOneWithWhereWithoutWheelsFowardInput = {
    where?: WheelWhereInput
    data: XOR<WheelUpdateWithoutWheelsFowardInput, WheelUncheckedUpdateWithoutWheelsFowardInput>
  }

  export type WheelUpdateWithoutWheelsFowardInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    hub?: HubUpdateOneWithoutWheelsNestedInput
    rim?: RimUpdateOneWithoutWheelsNestedInput
    wheelsBack?: WheelsetUpdateManyWithoutWheelBackNestedInput
    owners?: OwnershipUpdateManyWithoutWheelNestedInput
  }

  export type WheelUncheckedUpdateWithoutWheelsFowardInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    hubId?: NullableIntFieldUpdateOperationsInput | number | null
    rimId?: NullableIntFieldUpdateOperationsInput | number | null
    wheelsBack?: WheelsetUncheckedUpdateManyWithoutWheelBackNestedInput
    owners?: OwnershipUncheckedUpdateManyWithoutWheelNestedInput
  }

  export type WheelUpsertWithoutWheelsBackInput = {
    update: XOR<WheelUpdateWithoutWheelsBackInput, WheelUncheckedUpdateWithoutWheelsBackInput>
    create: XOR<WheelCreateWithoutWheelsBackInput, WheelUncheckedCreateWithoutWheelsBackInput>
    where?: WheelWhereInput
  }

  export type WheelUpdateToOneWithWhereWithoutWheelsBackInput = {
    where?: WheelWhereInput
    data: XOR<WheelUpdateWithoutWheelsBackInput, WheelUncheckedUpdateWithoutWheelsBackInput>
  }

  export type WheelUpdateWithoutWheelsBackInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    hub?: HubUpdateOneWithoutWheelsNestedInput
    rim?: RimUpdateOneWithoutWheelsNestedInput
    wheelsFoward?: WheelsetUpdateManyWithoutWheelFowardNestedInput
    owners?: OwnershipUpdateManyWithoutWheelNestedInput
  }

  export type WheelUncheckedUpdateWithoutWheelsBackInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    hubId?: NullableIntFieldUpdateOperationsInput | number | null
    rimId?: NullableIntFieldUpdateOperationsInput | number | null
    wheelsFoward?: WheelsetUncheckedUpdateManyWithoutWheelFowardNestedInput
    owners?: OwnershipUncheckedUpdateManyWithoutWheelNestedInput
  }

  export type OwnershipUpsertWithWhereUniqueWithoutWheelSetInput = {
    where: OwnershipWhereUniqueInput
    update: XOR<OwnershipUpdateWithoutWheelSetInput, OwnershipUncheckedUpdateWithoutWheelSetInput>
    create: XOR<OwnershipCreateWithoutWheelSetInput, OwnershipUncheckedCreateWithoutWheelSetInput>
  }

  export type OwnershipUpdateWithWhereUniqueWithoutWheelSetInput = {
    where: OwnershipWhereUniqueInput
    data: XOR<OwnershipUpdateWithoutWheelSetInput, OwnershipUncheckedUpdateWithoutWheelSetInput>
  }

  export type OwnershipUpdateManyWithWhereWithoutWheelSetInput = {
    where: OwnershipScalarWhereInput
    data: XOR<OwnershipUpdateManyMutationInput, OwnershipUncheckedUpdateManyWithoutWheelSetInput>
  }

  export type OwnershipUpdateWithoutOwnerInput = {
    acquired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    bicycle?: BicycleUpdateOneWithoutOwnersNestedInput
    wheel?: WheelUpdateOneWithoutOwnersNestedInput
    wheelSet?: WheelsetUpdateOneWithoutOwnersNestedInput
    part?: PartUpdateOneWithoutOwnersNestedInput
  }

  export type OwnershipUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    acquired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    bicycleId?: NullableIntFieldUpdateOperationsInput | number | null
    wheelId?: NullableIntFieldUpdateOperationsInput | number | null
    wheelSetId?: NullableIntFieldUpdateOperationsInput | number | null
    partId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OwnershipUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    acquired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    bicycleId?: NullableIntFieldUpdateOperationsInput | number | null
    wheelId?: NullableIntFieldUpdateOperationsInput | number | null
    wheelSetId?: NullableIntFieldUpdateOperationsInput | number | null
    partId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BicyclePartUpdateWithoutBicycleInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    part?: PartUpdateOneWithoutBicyclesNestedInput
  }

  export type BicyclePartUncheckedUpdateWithoutBicycleInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    partId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BicyclePartUncheckedUpdateManyWithoutBicycleInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    partId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OwnershipUpdateWithoutBicycleInput = {
    acquired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: CyclistUpdateOneWithoutOwnsNestedInput
    wheel?: WheelUpdateOneWithoutOwnersNestedInput
    wheelSet?: WheelsetUpdateOneWithoutOwnersNestedInput
    part?: PartUpdateOneWithoutOwnersNestedInput
  }

  export type OwnershipUncheckedUpdateWithoutBicycleInput = {
    id?: IntFieldUpdateOperationsInput | number
    acquired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    wheelId?: NullableIntFieldUpdateOperationsInput | number | null
    wheelSetId?: NullableIntFieldUpdateOperationsInput | number | null
    partId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OwnershipUncheckedUpdateManyWithoutBicycleInput = {
    id?: IntFieldUpdateOperationsInput | number
    acquired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    wheelId?: NullableIntFieldUpdateOperationsInput | number | null
    wheelSetId?: NullableIntFieldUpdateOperationsInput | number | null
    partId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PartUpdateWithoutMakerInput = {
    categories?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    designationCode?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    owners?: OwnershipUpdateManyWithoutPartNestedInput
    bicycles?: BicyclePartUpdateManyWithoutPartNestedInput
    hub?: HubUpdateOneWithoutPartNestedInput
    rim?: RimUpdateOneWithoutPartNestedInput
    cogset?: CogsetUpdateOneWithoutPartNestedInput
  }

  export type PartUncheckedUpdateWithoutMakerInput = {
    id?: IntFieldUpdateOperationsInput | number
    categories?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    designationCode?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    owners?: OwnershipUncheckedUpdateManyWithoutPartNestedInput
    bicycles?: BicyclePartUncheckedUpdateManyWithoutPartNestedInput
    hub?: HubUncheckedUpdateOneWithoutPartNestedInput
    rim?: RimUncheckedUpdateOneWithoutPartNestedInput
    cogset?: CogsetUncheckedUpdateOneWithoutPartNestedInput
  }

  export type PartUncheckedUpdateManyWithoutMakerInput = {
    id?: IntFieldUpdateOperationsInput | number
    categories?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    designationCode?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OwnershipUpdateWithoutPartInput = {
    acquired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: CyclistUpdateOneWithoutOwnsNestedInput
    bicycle?: BicycleUpdateOneWithoutOwnersNestedInput
    wheel?: WheelUpdateOneWithoutOwnersNestedInput
    wheelSet?: WheelsetUpdateOneWithoutOwnersNestedInput
  }

  export type OwnershipUncheckedUpdateWithoutPartInput = {
    id?: IntFieldUpdateOperationsInput | number
    acquired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    bicycleId?: NullableIntFieldUpdateOperationsInput | number | null
    wheelId?: NullableIntFieldUpdateOperationsInput | number | null
    wheelSetId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OwnershipUncheckedUpdateManyWithoutPartInput = {
    id?: IntFieldUpdateOperationsInput | number
    acquired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    bicycleId?: NullableIntFieldUpdateOperationsInput | number | null
    wheelId?: NullableIntFieldUpdateOperationsInput | number | null
    wheelSetId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BicyclePartUpdateWithoutPartInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    bicycle?: BicycleUpdateOneWithoutPartsNestedInput
  }

  export type BicyclePartUncheckedUpdateWithoutPartInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    bicycleId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BicyclePartUncheckedUpdateManyWithoutPartInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    bicycleId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WheelUpdateWithoutHubInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    rim?: RimUpdateOneWithoutWheelsNestedInput
    wheelsFoward?: WheelsetUpdateManyWithoutWheelFowardNestedInput
    wheelsBack?: WheelsetUpdateManyWithoutWheelBackNestedInput
    owners?: OwnershipUpdateManyWithoutWheelNestedInput
  }

  export type WheelUncheckedUpdateWithoutHubInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    rimId?: NullableIntFieldUpdateOperationsInput | number | null
    wheelsFoward?: WheelsetUncheckedUpdateManyWithoutWheelFowardNestedInput
    wheelsBack?: WheelsetUncheckedUpdateManyWithoutWheelBackNestedInput
    owners?: OwnershipUncheckedUpdateManyWithoutWheelNestedInput
  }

  export type WheelUncheckedUpdateManyWithoutHubInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    rimId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WheelUpdateWithoutRimInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    hub?: HubUpdateOneWithoutWheelsNestedInput
    wheelsFoward?: WheelsetUpdateManyWithoutWheelFowardNestedInput
    wheelsBack?: WheelsetUpdateManyWithoutWheelBackNestedInput
    owners?: OwnershipUpdateManyWithoutWheelNestedInput
  }

  export type WheelUncheckedUpdateWithoutRimInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    hubId?: NullableIntFieldUpdateOperationsInput | number | null
    wheelsFoward?: WheelsetUncheckedUpdateManyWithoutWheelFowardNestedInput
    wheelsBack?: WheelsetUncheckedUpdateManyWithoutWheelBackNestedInput
    owners?: OwnershipUncheckedUpdateManyWithoutWheelNestedInput
  }

  export type WheelUncheckedUpdateManyWithoutRimInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    hubId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WheelsetUpdateWithoutWheelFowardInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    wheelBack?: WheelUpdateOneWithoutWheelsBackNestedInput
    owners?: OwnershipUpdateManyWithoutWheelSetNestedInput
  }

  export type WheelsetUncheckedUpdateWithoutWheelFowardInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    wheelBackId?: NullableIntFieldUpdateOperationsInput | number | null
    owners?: OwnershipUncheckedUpdateManyWithoutWheelSetNestedInput
  }

  export type WheelsetUncheckedUpdateManyWithoutWheelFowardInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    wheelBackId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WheelsetUpdateWithoutWheelBackInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    wheelFoward?: WheelUpdateOneWithoutWheelsFowardNestedInput
    owners?: OwnershipUpdateManyWithoutWheelSetNestedInput
  }

  export type WheelsetUncheckedUpdateWithoutWheelBackInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    wheelFowardId?: NullableIntFieldUpdateOperationsInput | number | null
    owners?: OwnershipUncheckedUpdateManyWithoutWheelSetNestedInput
  }

  export type WheelsetUncheckedUpdateManyWithoutWheelBackInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    wheelFowardId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OwnershipUpdateWithoutWheelInput = {
    acquired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: CyclistUpdateOneWithoutOwnsNestedInput
    bicycle?: BicycleUpdateOneWithoutOwnersNestedInput
    wheelSet?: WheelsetUpdateOneWithoutOwnersNestedInput
    part?: PartUpdateOneWithoutOwnersNestedInput
  }

  export type OwnershipUncheckedUpdateWithoutWheelInput = {
    id?: IntFieldUpdateOperationsInput | number
    acquired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    bicycleId?: NullableIntFieldUpdateOperationsInput | number | null
    wheelSetId?: NullableIntFieldUpdateOperationsInput | number | null
    partId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OwnershipUncheckedUpdateManyWithoutWheelInput = {
    id?: IntFieldUpdateOperationsInput | number
    acquired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    bicycleId?: NullableIntFieldUpdateOperationsInput | number | null
    wheelSetId?: NullableIntFieldUpdateOperationsInput | number | null
    partId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OwnershipUpdateWithoutWheelSetInput = {
    acquired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: CyclistUpdateOneWithoutOwnsNestedInput
    bicycle?: BicycleUpdateOneWithoutOwnersNestedInput
    wheel?: WheelUpdateOneWithoutOwnersNestedInput
    part?: PartUpdateOneWithoutOwnersNestedInput
  }

  export type OwnershipUncheckedUpdateWithoutWheelSetInput = {
    id?: IntFieldUpdateOperationsInput | number
    acquired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    bicycleId?: NullableIntFieldUpdateOperationsInput | number | null
    wheelId?: NullableIntFieldUpdateOperationsInput | number | null
    partId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OwnershipUncheckedUpdateManyWithoutWheelSetInput = {
    id?: IntFieldUpdateOperationsInput | number
    acquired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    bicycleId?: NullableIntFieldUpdateOperationsInput | number | null
    wheelId?: NullableIntFieldUpdateOperationsInput | number | null
    partId?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CyclistCountOutputTypeDefaultArgs instead
     */
    export type CyclistCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CyclistCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BicycleCountOutputTypeDefaultArgs instead
     */
    export type BicycleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BicycleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MakerCountOutputTypeDefaultArgs instead
     */
    export type MakerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MakerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PartCountOutputTypeDefaultArgs instead
     */
    export type PartCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PartCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HubCountOutputTypeDefaultArgs instead
     */
    export type HubCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HubCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RimCountOutputTypeDefaultArgs instead
     */
    export type RimCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RimCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WheelCountOutputTypeDefaultArgs instead
     */
    export type WheelCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WheelCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WheelsetCountOutputTypeDefaultArgs instead
     */
    export type WheelsetCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WheelsetCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CyclistDefaultArgs instead
     */
    export type CyclistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CyclistDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OwnershipDefaultArgs instead
     */
    export type OwnershipArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OwnershipDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BicycleDefaultArgs instead
     */
    export type BicycleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BicycleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BicyclePartDefaultArgs instead
     */
    export type BicyclePartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BicyclePartDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MakerDefaultArgs instead
     */
    export type MakerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MakerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PartDefaultArgs instead
     */
    export type PartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PartDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HubDefaultArgs instead
     */
    export type HubArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HubDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RimDefaultArgs instead
     */
    export type RimArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RimDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CogsetDefaultArgs instead
     */
    export type CogsetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CogsetDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WheelDefaultArgs instead
     */
    export type WheelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WheelDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WheelsetDefaultArgs instead
     */
    export type WheelsetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WheelsetDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}