
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
 * Model Claim
 * 
 */
export type Claim = $Result.DefaultSelection<Prisma.$ClaimPayload>
/**
 * Model Producer
 * 
 */
export type Producer = $Result.DefaultSelection<Prisma.$ProducerPayload>
/**
 * Model BrandMember
 * 
 */
export type BrandMember = $Result.DefaultSelection<Prisma.$BrandMemberPayload>
/**
 * Model BrandLabel
 * 
 */
export type BrandLabel = $Result.DefaultSelection<Prisma.$BrandLabelPayload>
/**
 * Model ItemType
 * 
 */
export type ItemType = $Result.DefaultSelection<Prisma.$ItemTypePayload>
/**
 * Model PropertyGroup
 * 
 */
export type PropertyGroup = $Result.DefaultSelection<Prisma.$PropertyGroupPayload>
/**
 * Model Property
 * 
 */
export type Property = $Result.DefaultSelection<Prisma.$PropertyPayload>
/**
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>
/**
 * Model ItemProperty
 * 
 */
export type ItemProperty = $Result.DefaultSelection<Prisma.$ItemPropertyPayload>
/**
 * Model Assembly
 * 
 */
export type Assembly = $Result.DefaultSelection<Prisma.$AssemblyPayload>

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
   * `prisma.claim`: Exposes CRUD operations for the **Claim** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Claims
    * const claims = await prisma.claim.findMany()
    * ```
    */
  get claim(): Prisma.ClaimDelegate<ExtArgs>;

  /**
   * `prisma.producer`: Exposes CRUD operations for the **Producer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Producers
    * const producers = await prisma.producer.findMany()
    * ```
    */
  get producer(): Prisma.ProducerDelegate<ExtArgs>;

  /**
   * `prisma.brandMember`: Exposes CRUD operations for the **BrandMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BrandMembers
    * const brandMembers = await prisma.brandMember.findMany()
    * ```
    */
  get brandMember(): Prisma.BrandMemberDelegate<ExtArgs>;

  /**
   * `prisma.brandLabel`: Exposes CRUD operations for the **BrandLabel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BrandLabels
    * const brandLabels = await prisma.brandLabel.findMany()
    * ```
    */
  get brandLabel(): Prisma.BrandLabelDelegate<ExtArgs>;

  /**
   * `prisma.itemType`: Exposes CRUD operations for the **ItemType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemTypes
    * const itemTypes = await prisma.itemType.findMany()
    * ```
    */
  get itemType(): Prisma.ItemTypeDelegate<ExtArgs>;

  /**
   * `prisma.propertyGroup`: Exposes CRUD operations for the **PropertyGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PropertyGroups
    * const propertyGroups = await prisma.propertyGroup.findMany()
    * ```
    */
  get propertyGroup(): Prisma.PropertyGroupDelegate<ExtArgs>;

  /**
   * `prisma.property`: Exposes CRUD operations for the **Property** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Properties
    * const properties = await prisma.property.findMany()
    * ```
    */
  get property(): Prisma.PropertyDelegate<ExtArgs>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs>;

  /**
   * `prisma.itemProperty`: Exposes CRUD operations for the **ItemProperty** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemProperties
    * const itemProperties = await prisma.itemProperty.findMany()
    * ```
    */
  get itemProperty(): Prisma.ItemPropertyDelegate<ExtArgs>;

  /**
   * `prisma.assembly`: Exposes CRUD operations for the **Assembly** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assemblies
    * const assemblies = await prisma.assembly.findMany()
    * ```
    */
  get assembly(): Prisma.AssemblyDelegate<ExtArgs>;
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
    Claim: 'Claim',
    Producer: 'Producer',
    BrandMember: 'BrandMember',
    BrandLabel: 'BrandLabel',
    ItemType: 'ItemType',
    PropertyGroup: 'PropertyGroup',
    Property: 'Property',
    Item: 'Item',
    ItemProperty: 'ItemProperty',
    Assembly: 'Assembly'
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
      modelProps: 'cyclist' | 'claim' | 'producer' | 'brandMember' | 'brandLabel' | 'itemType' | 'propertyGroup' | 'property' | 'item' | 'itemProperty' | 'assembly'
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
          createMany: {
            args: Prisma.CyclistCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
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
      Claim: {
        payload: Prisma.$ClaimPayload<ExtArgs>
        fields: Prisma.ClaimFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClaimFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClaimFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>
          }
          findFirst: {
            args: Prisma.ClaimFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClaimFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>
          }
          findMany: {
            args: Prisma.ClaimFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>[]
          }
          create: {
            args: Prisma.ClaimCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>
          }
          createMany: {
            args: Prisma.ClaimCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ClaimDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>
          }
          update: {
            args: Prisma.ClaimUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>
          }
          deleteMany: {
            args: Prisma.ClaimDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ClaimUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ClaimUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>
          }
          aggregate: {
            args: Prisma.ClaimAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateClaim>
          }
          groupBy: {
            args: Prisma.ClaimGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ClaimGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClaimCountArgs<ExtArgs>,
            result: $Utils.Optional<ClaimCountAggregateOutputType> | number
          }
        }
      }
      Producer: {
        payload: Prisma.$ProducerPayload<ExtArgs>
        fields: Prisma.ProducerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProducerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProducerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProducerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProducerPayload>
          }
          findFirst: {
            args: Prisma.ProducerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProducerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProducerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProducerPayload>
          }
          findMany: {
            args: Prisma.ProducerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProducerPayload>[]
          }
          create: {
            args: Prisma.ProducerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProducerPayload>
          }
          createMany: {
            args: Prisma.ProducerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProducerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProducerPayload>
          }
          update: {
            args: Prisma.ProducerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProducerPayload>
          }
          deleteMany: {
            args: Prisma.ProducerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProducerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProducerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProducerPayload>
          }
          aggregate: {
            args: Prisma.ProducerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProducer>
          }
          groupBy: {
            args: Prisma.ProducerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProducerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProducerCountArgs<ExtArgs>,
            result: $Utils.Optional<ProducerCountAggregateOutputType> | number
          }
        }
      }
      BrandMember: {
        payload: Prisma.$BrandMemberPayload<ExtArgs>
        fields: Prisma.BrandMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrandMemberFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrandMemberFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandMemberPayload>
          }
          findFirst: {
            args: Prisma.BrandMemberFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrandMemberFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandMemberPayload>
          }
          findMany: {
            args: Prisma.BrandMemberFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandMemberPayload>[]
          }
          create: {
            args: Prisma.BrandMemberCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandMemberPayload>
          }
          createMany: {
            args: Prisma.BrandMemberCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BrandMemberDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandMemberPayload>
          }
          update: {
            args: Prisma.BrandMemberUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandMemberPayload>
          }
          deleteMany: {
            args: Prisma.BrandMemberDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BrandMemberUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BrandMemberUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandMemberPayload>
          }
          aggregate: {
            args: Prisma.BrandMemberAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBrandMember>
          }
          groupBy: {
            args: Prisma.BrandMemberGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BrandMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.BrandMemberCountArgs<ExtArgs>,
            result: $Utils.Optional<BrandMemberCountAggregateOutputType> | number
          }
        }
      }
      BrandLabel: {
        payload: Prisma.$BrandLabelPayload<ExtArgs>
        fields: Prisma.BrandLabelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrandLabelFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandLabelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrandLabelFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandLabelPayload>
          }
          findFirst: {
            args: Prisma.BrandLabelFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandLabelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrandLabelFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandLabelPayload>
          }
          findMany: {
            args: Prisma.BrandLabelFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandLabelPayload>[]
          }
          create: {
            args: Prisma.BrandLabelCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandLabelPayload>
          }
          createMany: {
            args: Prisma.BrandLabelCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BrandLabelDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandLabelPayload>
          }
          update: {
            args: Prisma.BrandLabelUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandLabelPayload>
          }
          deleteMany: {
            args: Prisma.BrandLabelDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BrandLabelUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BrandLabelUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandLabelPayload>
          }
          aggregate: {
            args: Prisma.BrandLabelAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBrandLabel>
          }
          groupBy: {
            args: Prisma.BrandLabelGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BrandLabelGroupByOutputType>[]
          }
          count: {
            args: Prisma.BrandLabelCountArgs<ExtArgs>,
            result: $Utils.Optional<BrandLabelCountAggregateOutputType> | number
          }
        }
      }
      ItemType: {
        payload: Prisma.$ItemTypePayload<ExtArgs>
        fields: Prisma.ItemTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemTypeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemTypeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemTypePayload>
          }
          findFirst: {
            args: Prisma.ItemTypeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemTypeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemTypePayload>
          }
          findMany: {
            args: Prisma.ItemTypeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemTypePayload>[]
          }
          create: {
            args: Prisma.ItemTypeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemTypePayload>
          }
          createMany: {
            args: Prisma.ItemTypeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ItemTypeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemTypePayload>
          }
          update: {
            args: Prisma.ItemTypeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemTypePayload>
          }
          deleteMany: {
            args: Prisma.ItemTypeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ItemTypeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ItemTypeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemTypePayload>
          }
          aggregate: {
            args: Prisma.ItemTypeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateItemType>
          }
          groupBy: {
            args: Prisma.ItemTypeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ItemTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemTypeCountArgs<ExtArgs>,
            result: $Utils.Optional<ItemTypeCountAggregateOutputType> | number
          }
        }
      }
      PropertyGroup: {
        payload: Prisma.$PropertyGroupPayload<ExtArgs>
        fields: Prisma.PropertyGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyGroupFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropertyGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyGroupFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropertyGroupPayload>
          }
          findFirst: {
            args: Prisma.PropertyGroupFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropertyGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyGroupFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropertyGroupPayload>
          }
          findMany: {
            args: Prisma.PropertyGroupFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropertyGroupPayload>[]
          }
          create: {
            args: Prisma.PropertyGroupCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropertyGroupPayload>
          }
          createMany: {
            args: Prisma.PropertyGroupCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PropertyGroupDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropertyGroupPayload>
          }
          update: {
            args: Prisma.PropertyGroupUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropertyGroupPayload>
          }
          deleteMany: {
            args: Prisma.PropertyGroupDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyGroupUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PropertyGroupUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropertyGroupPayload>
          }
          aggregate: {
            args: Prisma.PropertyGroupAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePropertyGroup>
          }
          groupBy: {
            args: Prisma.PropertyGroupGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PropertyGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyGroupCountArgs<ExtArgs>,
            result: $Utils.Optional<PropertyGroupCountAggregateOutputType> | number
          }
        }
      }
      Property: {
        payload: Prisma.$PropertyPayload<ExtArgs>
        fields: Prisma.PropertyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findFirst: {
            args: Prisma.PropertyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findMany: {
            args: Prisma.PropertyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          create: {
            args: Prisma.PropertyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          createMany: {
            args: Prisma.PropertyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PropertyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          update: {
            args: Prisma.PropertyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          deleteMany: {
            args: Prisma.PropertyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PropertyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          aggregate: {
            args: Prisma.PropertyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProperty>
          }
          groupBy: {
            args: Prisma.PropertyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PropertyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyCountArgs<ExtArgs>,
            result: $Utils.Optional<PropertyCountAggregateOutputType> | number
          }
        }
      }
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>
        fields: Prisma.ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>,
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
      ItemProperty: {
        payload: Prisma.$ItemPropertyPayload<ExtArgs>
        fields: Prisma.ItemPropertyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemPropertyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPropertyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemPropertyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPropertyPayload>
          }
          findFirst: {
            args: Prisma.ItemPropertyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPropertyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemPropertyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPropertyPayload>
          }
          findMany: {
            args: Prisma.ItemPropertyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPropertyPayload>[]
          }
          create: {
            args: Prisma.ItemPropertyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPropertyPayload>
          }
          createMany: {
            args: Prisma.ItemPropertyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ItemPropertyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPropertyPayload>
          }
          update: {
            args: Prisma.ItemPropertyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPropertyPayload>
          }
          deleteMany: {
            args: Prisma.ItemPropertyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ItemPropertyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ItemPropertyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPropertyPayload>
          }
          aggregate: {
            args: Prisma.ItemPropertyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateItemProperty>
          }
          groupBy: {
            args: Prisma.ItemPropertyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ItemPropertyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemPropertyCountArgs<ExtArgs>,
            result: $Utils.Optional<ItemPropertyCountAggregateOutputType> | number
          }
        }
      }
      Assembly: {
        payload: Prisma.$AssemblyPayload<ExtArgs>
        fields: Prisma.AssemblyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssemblyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssemblyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssemblyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssemblyPayload>
          }
          findFirst: {
            args: Prisma.AssemblyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssemblyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssemblyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssemblyPayload>
          }
          findMany: {
            args: Prisma.AssemblyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssemblyPayload>[]
          }
          create: {
            args: Prisma.AssemblyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssemblyPayload>
          }
          createMany: {
            args: Prisma.AssemblyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AssemblyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssemblyPayload>
          }
          update: {
            args: Prisma.AssemblyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssemblyPayload>
          }
          deleteMany: {
            args: Prisma.AssemblyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AssemblyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AssemblyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssemblyPayload>
          }
          aggregate: {
            args: Prisma.AssemblyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAssembly>
          }
          groupBy: {
            args: Prisma.AssemblyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AssemblyGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssemblyCountArgs<ExtArgs>,
            result: $Utils.Optional<AssemblyCountAggregateOutputType> | number
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
    claims: number
  }

  export type CyclistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    claims?: boolean | CyclistCountOutputTypeCountClaimsArgs
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
  export type CyclistCountOutputTypeCountClaimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaimWhereInput
  }



  /**
   * Count Type ProducerCountOutputType
   */

  export type ProducerCountOutputType = {
    labelMemberships: number
  }

  export type ProducerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    labelMemberships?: boolean | ProducerCountOutputTypeCountLabelMembershipsArgs
  }

  // Custom InputTypes

  /**
   * ProducerCountOutputType without action
   */
  export type ProducerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProducerCountOutputType
     */
    select?: ProducerCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProducerCountOutputType without action
   */
  export type ProducerCountOutputTypeCountLabelMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandMemberWhereInput
  }



  /**
   * Count Type BrandLabelCountOutputType
   */

  export type BrandLabelCountOutputType = {
    labelMemberships: number
    items: number
  }

  export type BrandLabelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    labelMemberships?: boolean | BrandLabelCountOutputTypeCountLabelMembershipsArgs
    items?: boolean | BrandLabelCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes

  /**
   * BrandLabelCountOutputType without action
   */
  export type BrandLabelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandLabelCountOutputType
     */
    select?: BrandLabelCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * BrandLabelCountOutputType without action
   */
  export type BrandLabelCountOutputTypeCountLabelMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandMemberWhereInput
  }


  /**
   * BrandLabelCountOutputType without action
   */
  export type BrandLabelCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
  }



  /**
   * Count Type ItemTypeCountOutputType
   */

  export type ItemTypeCountOutputType = {
    propertyGroups: number
  }

  export type ItemTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    propertyGroups?: boolean | ItemTypeCountOutputTypeCountPropertyGroupsArgs
  }

  // Custom InputTypes

  /**
   * ItemTypeCountOutputType without action
   */
  export type ItemTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemTypeCountOutputType
     */
    select?: ItemTypeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ItemTypeCountOutputType without action
   */
  export type ItemTypeCountOutputTypeCountPropertyGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyGroupWhereInput
  }



  /**
   * Count Type PropertyGroupCountOutputType
   */

  export type PropertyGroupCountOutputType = {
    properties: number
  }

  export type PropertyGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | PropertyGroupCountOutputTypeCountPropertiesArgs
  }

  // Custom InputTypes

  /**
   * PropertyGroupCountOutputType without action
   */
  export type PropertyGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyGroupCountOutputType
     */
    select?: PropertyGroupCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PropertyGroupCountOutputType without action
   */
  export type PropertyGroupCountOutputTypeCountPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
  }



  /**
   * Count Type PropertyCountOutputType
   */

  export type PropertyCountOutputType = {
    itemProperties: number
  }

  export type PropertyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itemProperties?: boolean | PropertyCountOutputTypeCountItemPropertiesArgs
  }

  // Custom InputTypes

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCountOutputType
     */
    select?: PropertyCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountItemPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemPropertyWhereInput
  }



  /**
   * Count Type ItemCountOutputType
   */

  export type ItemCountOutputType = {
    properties: number
    inClaims: number
    hasAssemblyItems: number
    inAssemblies: number
  }

  export type ItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | ItemCountOutputTypeCountPropertiesArgs
    inClaims?: boolean | ItemCountOutputTypeCountInClaimsArgs
    hasAssemblyItems?: boolean | ItemCountOutputTypeCountHasAssemblyItemsArgs
    inAssemblies?: boolean | ItemCountOutputTypeCountInAssembliesArgs
  }

  // Custom InputTypes

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCountOutputType
     */
    select?: ItemCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemPropertyWhereInput
  }


  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountInClaimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaimWhereInput
  }


  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountHasAssemblyItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssemblyWhereInput
  }


  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountInAssembliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssemblyWhereInput
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
    claims?: boolean | Cyclist$claimsArgs<ExtArgs>
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
    claims?: boolean | Cyclist$claimsArgs<ExtArgs>
    _count?: boolean | CyclistCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CyclistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cyclist"
    objects: {
      claims: Prisma.$ClaimPayload<ExtArgs>[]
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
     * Create many Cyclists.
     *     @param {CyclistCreateManyArgs} args - Arguments to create many Cyclists.
     *     @example
     *     // Create many Cyclists
     *     const cyclist = await prisma.cyclist.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CyclistCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CyclistCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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

    claims<T extends Cyclist$claimsArgs<ExtArgs> = {}>(args?: Subset<T, Cyclist$claimsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Cyclist createMany
   */
  export type CyclistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cyclists.
     */
    data: CyclistCreateManyInput | CyclistCreateManyInput[]
    skipDuplicates?: boolean
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
   * Cyclist.claims
   */
  export type Cyclist$claimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClaimInclude<ExtArgs> | null
    where?: ClaimWhereInput
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    cursor?: ClaimWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
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
   * Model Claim
   */

  export type AggregateClaim = {
    _count: ClaimCountAggregateOutputType | null
    _avg: ClaimAvgAggregateOutputType | null
    _sum: ClaimSumAggregateOutputType | null
    _min: ClaimMinAggregateOutputType | null
    _max: ClaimMaxAggregateOutputType | null
  }

  export type ClaimAvgAggregateOutputType = {
    id: number | null
    ownerId: number | null
    itemId: number | null
  }

  export type ClaimSumAggregateOutputType = {
    id: number | null
    ownerId: number | null
    itemId: number | null
  }

  export type ClaimMinAggregateOutputType = {
    id: number | null
    claimType: string | null
    acquired: Date | null
    condition: string | null
    notes: string | null
    ownerId: number | null
    itemId: number | null
  }

  export type ClaimMaxAggregateOutputType = {
    id: number | null
    claimType: string | null
    acquired: Date | null
    condition: string | null
    notes: string | null
    ownerId: number | null
    itemId: number | null
  }

  export type ClaimCountAggregateOutputType = {
    id: number
    claimType: number
    acquired: number
    condition: number
    notes: number
    ownerId: number
    itemId: number
    _all: number
  }


  export type ClaimAvgAggregateInputType = {
    id?: true
    ownerId?: true
    itemId?: true
  }

  export type ClaimSumAggregateInputType = {
    id?: true
    ownerId?: true
    itemId?: true
  }

  export type ClaimMinAggregateInputType = {
    id?: true
    claimType?: true
    acquired?: true
    condition?: true
    notes?: true
    ownerId?: true
    itemId?: true
  }

  export type ClaimMaxAggregateInputType = {
    id?: true
    claimType?: true
    acquired?: true
    condition?: true
    notes?: true
    ownerId?: true
    itemId?: true
  }

  export type ClaimCountAggregateInputType = {
    id?: true
    claimType?: true
    acquired?: true
    condition?: true
    notes?: true
    ownerId?: true
    itemId?: true
    _all?: true
  }

  export type ClaimAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Claim to aggregate.
     */
    where?: ClaimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Claims to fetch.
     */
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClaimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Claims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Claims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Claims
    **/
    _count?: true | ClaimCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClaimAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClaimSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClaimMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClaimMaxAggregateInputType
  }

  export type GetClaimAggregateType<T extends ClaimAggregateArgs> = {
        [P in keyof T & keyof AggregateClaim]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClaim[P]>
      : GetScalarType<T[P], AggregateClaim[P]>
  }




  export type ClaimGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaimWhereInput
    orderBy?: ClaimOrderByWithAggregationInput | ClaimOrderByWithAggregationInput[]
    by: ClaimScalarFieldEnum[] | ClaimScalarFieldEnum
    having?: ClaimScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClaimCountAggregateInputType | true
    _avg?: ClaimAvgAggregateInputType
    _sum?: ClaimSumAggregateInputType
    _min?: ClaimMinAggregateInputType
    _max?: ClaimMaxAggregateInputType
  }

  export type ClaimGroupByOutputType = {
    id: number
    claimType: string | null
    acquired: Date | null
    condition: string | null
    notes: string | null
    ownerId: number | null
    itemId: number | null
    _count: ClaimCountAggregateOutputType | null
    _avg: ClaimAvgAggregateOutputType | null
    _sum: ClaimSumAggregateOutputType | null
    _min: ClaimMinAggregateOutputType | null
    _max: ClaimMaxAggregateOutputType | null
  }

  type GetClaimGroupByPayload<T extends ClaimGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClaimGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClaimGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClaimGroupByOutputType[P]>
            : GetScalarType<T[P], ClaimGroupByOutputType[P]>
        }
      >
    >


  export type ClaimSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    claimType?: boolean
    acquired?: boolean
    condition?: boolean
    notes?: boolean
    ownerId?: boolean
    itemId?: boolean
    owner?: boolean | Claim$ownerArgs<ExtArgs>
    item?: boolean | Claim$itemArgs<ExtArgs>
  }, ExtArgs["result"]["claim"]>

  export type ClaimSelectScalar = {
    id?: boolean
    claimType?: boolean
    acquired?: boolean
    condition?: boolean
    notes?: boolean
    ownerId?: boolean
    itemId?: boolean
  }

  export type ClaimInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | Claim$ownerArgs<ExtArgs>
    item?: boolean | Claim$itemArgs<ExtArgs>
  }


  export type $ClaimPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Claim"
    objects: {
      owner: Prisma.$CyclistPayload<ExtArgs> | null
      item: Prisma.$ItemPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      claimType: string | null
      acquired: Date | null
      condition: string | null
      notes: string | null
      ownerId: number | null
      itemId: number | null
    }, ExtArgs["result"]["claim"]>
    composites: {}
  }


  type ClaimGetPayload<S extends boolean | null | undefined | ClaimDefaultArgs> = $Result.GetResult<Prisma.$ClaimPayload, S>

  type ClaimCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClaimFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ClaimCountAggregateInputType | true
    }

  export interface ClaimDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Claim'], meta: { name: 'Claim' } }
    /**
     * Find zero or one Claim that matches the filter.
     * @param {ClaimFindUniqueArgs} args - Arguments to find a Claim
     * @example
     * // Get one Claim
     * const claim = await prisma.claim.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ClaimFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ClaimFindUniqueArgs<ExtArgs>>
    ): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Claim that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ClaimFindUniqueOrThrowArgs} args - Arguments to find a Claim
     * @example
     * // Get one Claim
     * const claim = await prisma.claim.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ClaimFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClaimFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Claim that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimFindFirstArgs} args - Arguments to find a Claim
     * @example
     * // Get one Claim
     * const claim = await prisma.claim.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ClaimFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ClaimFindFirstArgs<ExtArgs>>
    ): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Claim that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimFindFirstOrThrowArgs} args - Arguments to find a Claim
     * @example
     * // Get one Claim
     * const claim = await prisma.claim.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ClaimFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClaimFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Claims that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Claims
     * const claims = await prisma.claim.findMany()
     * 
     * // Get first 10 Claims
     * const claims = await prisma.claim.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const claimWithIdOnly = await prisma.claim.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ClaimFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClaimFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Claim.
     * @param {ClaimCreateArgs} args - Arguments to create a Claim.
     * @example
     * // Create one Claim
     * const Claim = await prisma.claim.create({
     *   data: {
     *     // ... data to create a Claim
     *   }
     * })
     * 
    **/
    create<T extends ClaimCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ClaimCreateArgs<ExtArgs>>
    ): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Claims.
     *     @param {ClaimCreateManyArgs} args - Arguments to create many Claims.
     *     @example
     *     // Create many Claims
     *     const claim = await prisma.claim.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ClaimCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClaimCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Claim.
     * @param {ClaimDeleteArgs} args - Arguments to delete one Claim.
     * @example
     * // Delete one Claim
     * const Claim = await prisma.claim.delete({
     *   where: {
     *     // ... filter to delete one Claim
     *   }
     * })
     * 
    **/
    delete<T extends ClaimDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ClaimDeleteArgs<ExtArgs>>
    ): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Claim.
     * @param {ClaimUpdateArgs} args - Arguments to update one Claim.
     * @example
     * // Update one Claim
     * const claim = await prisma.claim.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ClaimUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ClaimUpdateArgs<ExtArgs>>
    ): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Claims.
     * @param {ClaimDeleteManyArgs} args - Arguments to filter Claims to delete.
     * @example
     * // Delete a few Claims
     * const { count } = await prisma.claim.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ClaimDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClaimDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Claims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Claims
     * const claim = await prisma.claim.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ClaimUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ClaimUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Claim.
     * @param {ClaimUpsertArgs} args - Arguments to update or create a Claim.
     * @example
     * // Update or create a Claim
     * const claim = await prisma.claim.upsert({
     *   create: {
     *     // ... data to create a Claim
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Claim we want to update
     *   }
     * })
    **/
    upsert<T extends ClaimUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ClaimUpsertArgs<ExtArgs>>
    ): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Claims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimCountArgs} args - Arguments to filter Claims to count.
     * @example
     * // Count the number of Claims
     * const count = await prisma.claim.count({
     *   where: {
     *     // ... the filter for the Claims we want to count
     *   }
     * })
    **/
    count<T extends ClaimCountArgs>(
      args?: Subset<T, ClaimCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClaimCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Claim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClaimAggregateArgs>(args: Subset<T, ClaimAggregateArgs>): Prisma.PrismaPromise<GetClaimAggregateType<T>>

    /**
     * Group by Claim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimGroupByArgs} args - Group by arguments.
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
      T extends ClaimGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClaimGroupByArgs['orderBy'] }
        : { orderBy?: ClaimGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClaimGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClaimGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Claim model
   */
  readonly fields: ClaimFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Claim.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClaimClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    owner<T extends Claim$ownerArgs<ExtArgs> = {}>(args?: Subset<T, Claim$ownerArgs<ExtArgs>>): Prisma__CyclistClient<$Result.GetResult<Prisma.$CyclistPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    item<T extends Claim$itemArgs<ExtArgs> = {}>(args?: Subset<T, Claim$itemArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

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
   * Fields of the Claim model
   */ 
  interface ClaimFieldRefs {
    readonly id: FieldRef<"Claim", 'Int'>
    readonly claimType: FieldRef<"Claim", 'String'>
    readonly acquired: FieldRef<"Claim", 'DateTime'>
    readonly condition: FieldRef<"Claim", 'String'>
    readonly notes: FieldRef<"Claim", 'String'>
    readonly ownerId: FieldRef<"Claim", 'Int'>
    readonly itemId: FieldRef<"Claim", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Claim findUnique
   */
  export type ClaimFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * Filter, which Claim to fetch.
     */
    where: ClaimWhereUniqueInput
  }


  /**
   * Claim findUniqueOrThrow
   */
  export type ClaimFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * Filter, which Claim to fetch.
     */
    where: ClaimWhereUniqueInput
  }


  /**
   * Claim findFirst
   */
  export type ClaimFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * Filter, which Claim to fetch.
     */
    where?: ClaimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Claims to fetch.
     */
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Claims.
     */
    cursor?: ClaimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Claims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Claims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Claims.
     */
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }


  /**
   * Claim findFirstOrThrow
   */
  export type ClaimFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * Filter, which Claim to fetch.
     */
    where?: ClaimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Claims to fetch.
     */
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Claims.
     */
    cursor?: ClaimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Claims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Claims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Claims.
     */
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }


  /**
   * Claim findMany
   */
  export type ClaimFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * Filter, which Claims to fetch.
     */
    where?: ClaimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Claims to fetch.
     */
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Claims.
     */
    cursor?: ClaimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Claims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Claims.
     */
    skip?: number
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }


  /**
   * Claim create
   */
  export type ClaimCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * The data needed to create a Claim.
     */
    data?: XOR<ClaimCreateInput, ClaimUncheckedCreateInput>
  }


  /**
   * Claim createMany
   */
  export type ClaimCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Claims.
     */
    data: ClaimCreateManyInput | ClaimCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Claim update
   */
  export type ClaimUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * The data needed to update a Claim.
     */
    data: XOR<ClaimUpdateInput, ClaimUncheckedUpdateInput>
    /**
     * Choose, which Claim to update.
     */
    where: ClaimWhereUniqueInput
  }


  /**
   * Claim updateMany
   */
  export type ClaimUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Claims.
     */
    data: XOR<ClaimUpdateManyMutationInput, ClaimUncheckedUpdateManyInput>
    /**
     * Filter which Claims to update
     */
    where?: ClaimWhereInput
  }


  /**
   * Claim upsert
   */
  export type ClaimUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * The filter to search for the Claim to update in case it exists.
     */
    where: ClaimWhereUniqueInput
    /**
     * In case the Claim found by the `where` argument doesn't exist, create a new Claim with this data.
     */
    create: XOR<ClaimCreateInput, ClaimUncheckedCreateInput>
    /**
     * In case the Claim was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClaimUpdateInput, ClaimUncheckedUpdateInput>
  }


  /**
   * Claim delete
   */
  export type ClaimDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * Filter which Claim to delete.
     */
    where: ClaimWhereUniqueInput
  }


  /**
   * Claim deleteMany
   */
  export type ClaimDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Claims to delete
     */
    where?: ClaimWhereInput
  }


  /**
   * Claim.owner
   */
  export type Claim$ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Claim.item
   */
  export type Claim$itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
    where?: ItemWhereInput
  }


  /**
   * Claim without action
   */
  export type ClaimDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClaimInclude<ExtArgs> | null
  }



  /**
   * Model Producer
   */

  export type AggregateProducer = {
    _count: ProducerCountAggregateOutputType | null
    _avg: ProducerAvgAggregateOutputType | null
    _sum: ProducerSumAggregateOutputType | null
    _min: ProducerMinAggregateOutputType | null
    _max: ProducerMaxAggregateOutputType | null
  }

  export type ProducerAvgAggregateOutputType = {
    id: number | null
  }

  export type ProducerSumAggregateOutputType = {
    id: number | null
  }

  export type ProducerMinAggregateOutputType = {
    id: number | null
    name: string | null
    nameShort: string | null
    nameAbbreviation: string | null
    notes: string | null
    webAddress: string | null
  }

  export type ProducerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    nameShort: string | null
    nameAbbreviation: string | null
    notes: string | null
    webAddress: string | null
  }

  export type ProducerCountAggregateOutputType = {
    id: number
    name: number
    nameShort: number
    nameAbbreviation: number
    notes: number
    webAddress: number
    _all: number
  }


  export type ProducerAvgAggregateInputType = {
    id?: true
  }

  export type ProducerSumAggregateInputType = {
    id?: true
  }

  export type ProducerMinAggregateInputType = {
    id?: true
    name?: true
    nameShort?: true
    nameAbbreviation?: true
    notes?: true
    webAddress?: true
  }

  export type ProducerMaxAggregateInputType = {
    id?: true
    name?: true
    nameShort?: true
    nameAbbreviation?: true
    notes?: true
    webAddress?: true
  }

  export type ProducerCountAggregateInputType = {
    id?: true
    name?: true
    nameShort?: true
    nameAbbreviation?: true
    notes?: true
    webAddress?: true
    _all?: true
  }

  export type ProducerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Producer to aggregate.
     */
    where?: ProducerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Producers to fetch.
     */
    orderBy?: ProducerOrderByWithRelationInput | ProducerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProducerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Producers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Producers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Producers
    **/
    _count?: true | ProducerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProducerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProducerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProducerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProducerMaxAggregateInputType
  }

  export type GetProducerAggregateType<T extends ProducerAggregateArgs> = {
        [P in keyof T & keyof AggregateProducer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducer[P]>
      : GetScalarType<T[P], AggregateProducer[P]>
  }




  export type ProducerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProducerWhereInput
    orderBy?: ProducerOrderByWithAggregationInput | ProducerOrderByWithAggregationInput[]
    by: ProducerScalarFieldEnum[] | ProducerScalarFieldEnum
    having?: ProducerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProducerCountAggregateInputType | true
    _avg?: ProducerAvgAggregateInputType
    _sum?: ProducerSumAggregateInputType
    _min?: ProducerMinAggregateInputType
    _max?: ProducerMaxAggregateInputType
  }

  export type ProducerGroupByOutputType = {
    id: number
    name: string | null
    nameShort: string | null
    nameAbbreviation: string | null
    notes: string | null
    webAddress: string | null
    _count: ProducerCountAggregateOutputType | null
    _avg: ProducerAvgAggregateOutputType | null
    _sum: ProducerSumAggregateOutputType | null
    _min: ProducerMinAggregateOutputType | null
    _max: ProducerMaxAggregateOutputType | null
  }

  type GetProducerGroupByPayload<T extends ProducerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProducerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProducerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProducerGroupByOutputType[P]>
            : GetScalarType<T[P], ProducerGroupByOutputType[P]>
        }
      >
    >


  export type ProducerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nameShort?: boolean
    nameAbbreviation?: boolean
    notes?: boolean
    webAddress?: boolean
    labelMemberships?: boolean | Producer$labelMembershipsArgs<ExtArgs>
    _count?: boolean | ProducerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["producer"]>

  export type ProducerSelectScalar = {
    id?: boolean
    name?: boolean
    nameShort?: boolean
    nameAbbreviation?: boolean
    notes?: boolean
    webAddress?: boolean
  }

  export type ProducerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    labelMemberships?: boolean | Producer$labelMembershipsArgs<ExtArgs>
    _count?: boolean | ProducerCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ProducerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Producer"
    objects: {
      labelMemberships: Prisma.$BrandMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      nameShort: string | null
      nameAbbreviation: string | null
      notes: string | null
      webAddress: string | null
    }, ExtArgs["result"]["producer"]>
    composites: {}
  }


  type ProducerGetPayload<S extends boolean | null | undefined | ProducerDefaultArgs> = $Result.GetResult<Prisma.$ProducerPayload, S>

  type ProducerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProducerFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ProducerCountAggregateInputType | true
    }

  export interface ProducerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Producer'], meta: { name: 'Producer' } }
    /**
     * Find zero or one Producer that matches the filter.
     * @param {ProducerFindUniqueArgs} args - Arguments to find a Producer
     * @example
     * // Get one Producer
     * const producer = await prisma.producer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProducerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProducerFindUniqueArgs<ExtArgs>>
    ): Prisma__ProducerClient<$Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Producer that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProducerFindUniqueOrThrowArgs} args - Arguments to find a Producer
     * @example
     * // Get one Producer
     * const producer = await prisma.producer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProducerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProducerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProducerClient<$Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Producer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProducerFindFirstArgs} args - Arguments to find a Producer
     * @example
     * // Get one Producer
     * const producer = await prisma.producer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProducerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProducerFindFirstArgs<ExtArgs>>
    ): Prisma__ProducerClient<$Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Producer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProducerFindFirstOrThrowArgs} args - Arguments to find a Producer
     * @example
     * // Get one Producer
     * const producer = await prisma.producer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProducerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProducerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProducerClient<$Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Producers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProducerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Producers
     * const producers = await prisma.producer.findMany()
     * 
     * // Get first 10 Producers
     * const producers = await prisma.producer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const producerWithIdOnly = await prisma.producer.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProducerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProducerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Producer.
     * @param {ProducerCreateArgs} args - Arguments to create a Producer.
     * @example
     * // Create one Producer
     * const Producer = await prisma.producer.create({
     *   data: {
     *     // ... data to create a Producer
     *   }
     * })
     * 
    **/
    create<T extends ProducerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProducerCreateArgs<ExtArgs>>
    ): Prisma__ProducerClient<$Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Producers.
     *     @param {ProducerCreateManyArgs} args - Arguments to create many Producers.
     *     @example
     *     // Create many Producers
     *     const producer = await prisma.producer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProducerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProducerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Producer.
     * @param {ProducerDeleteArgs} args - Arguments to delete one Producer.
     * @example
     * // Delete one Producer
     * const Producer = await prisma.producer.delete({
     *   where: {
     *     // ... filter to delete one Producer
     *   }
     * })
     * 
    **/
    delete<T extends ProducerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProducerDeleteArgs<ExtArgs>>
    ): Prisma__ProducerClient<$Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Producer.
     * @param {ProducerUpdateArgs} args - Arguments to update one Producer.
     * @example
     * // Update one Producer
     * const producer = await prisma.producer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProducerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProducerUpdateArgs<ExtArgs>>
    ): Prisma__ProducerClient<$Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Producers.
     * @param {ProducerDeleteManyArgs} args - Arguments to filter Producers to delete.
     * @example
     * // Delete a few Producers
     * const { count } = await prisma.producer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProducerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProducerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Producers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProducerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Producers
     * const producer = await prisma.producer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProducerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProducerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Producer.
     * @param {ProducerUpsertArgs} args - Arguments to update or create a Producer.
     * @example
     * // Update or create a Producer
     * const producer = await prisma.producer.upsert({
     *   create: {
     *     // ... data to create a Producer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Producer we want to update
     *   }
     * })
    **/
    upsert<T extends ProducerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProducerUpsertArgs<ExtArgs>>
    ): Prisma__ProducerClient<$Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Producers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProducerCountArgs} args - Arguments to filter Producers to count.
     * @example
     * // Count the number of Producers
     * const count = await prisma.producer.count({
     *   where: {
     *     // ... the filter for the Producers we want to count
     *   }
     * })
    **/
    count<T extends ProducerCountArgs>(
      args?: Subset<T, ProducerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProducerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Producer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProducerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProducerAggregateArgs>(args: Subset<T, ProducerAggregateArgs>): Prisma.PrismaPromise<GetProducerAggregateType<T>>

    /**
     * Group by Producer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProducerGroupByArgs} args - Group by arguments.
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
      T extends ProducerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProducerGroupByArgs['orderBy'] }
        : { orderBy?: ProducerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProducerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProducerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Producer model
   */
  readonly fields: ProducerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Producer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProducerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    labelMemberships<T extends Producer$labelMembershipsArgs<ExtArgs> = {}>(args?: Subset<T, Producer$labelMembershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandMemberPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Producer model
   */ 
  interface ProducerFieldRefs {
    readonly id: FieldRef<"Producer", 'Int'>
    readonly name: FieldRef<"Producer", 'String'>
    readonly nameShort: FieldRef<"Producer", 'String'>
    readonly nameAbbreviation: FieldRef<"Producer", 'String'>
    readonly notes: FieldRef<"Producer", 'String'>
    readonly webAddress: FieldRef<"Producer", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Producer findUnique
   */
  export type ProducerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producer
     */
    select?: ProducerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProducerInclude<ExtArgs> | null
    /**
     * Filter, which Producer to fetch.
     */
    where: ProducerWhereUniqueInput
  }


  /**
   * Producer findUniqueOrThrow
   */
  export type ProducerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producer
     */
    select?: ProducerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProducerInclude<ExtArgs> | null
    /**
     * Filter, which Producer to fetch.
     */
    where: ProducerWhereUniqueInput
  }


  /**
   * Producer findFirst
   */
  export type ProducerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producer
     */
    select?: ProducerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProducerInclude<ExtArgs> | null
    /**
     * Filter, which Producer to fetch.
     */
    where?: ProducerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Producers to fetch.
     */
    orderBy?: ProducerOrderByWithRelationInput | ProducerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Producers.
     */
    cursor?: ProducerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Producers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Producers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Producers.
     */
    distinct?: ProducerScalarFieldEnum | ProducerScalarFieldEnum[]
  }


  /**
   * Producer findFirstOrThrow
   */
  export type ProducerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producer
     */
    select?: ProducerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProducerInclude<ExtArgs> | null
    /**
     * Filter, which Producer to fetch.
     */
    where?: ProducerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Producers to fetch.
     */
    orderBy?: ProducerOrderByWithRelationInput | ProducerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Producers.
     */
    cursor?: ProducerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Producers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Producers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Producers.
     */
    distinct?: ProducerScalarFieldEnum | ProducerScalarFieldEnum[]
  }


  /**
   * Producer findMany
   */
  export type ProducerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producer
     */
    select?: ProducerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProducerInclude<ExtArgs> | null
    /**
     * Filter, which Producers to fetch.
     */
    where?: ProducerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Producers to fetch.
     */
    orderBy?: ProducerOrderByWithRelationInput | ProducerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Producers.
     */
    cursor?: ProducerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Producers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Producers.
     */
    skip?: number
    distinct?: ProducerScalarFieldEnum | ProducerScalarFieldEnum[]
  }


  /**
   * Producer create
   */
  export type ProducerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producer
     */
    select?: ProducerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProducerInclude<ExtArgs> | null
    /**
     * The data needed to create a Producer.
     */
    data?: XOR<ProducerCreateInput, ProducerUncheckedCreateInput>
  }


  /**
   * Producer createMany
   */
  export type ProducerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Producers.
     */
    data: ProducerCreateManyInput | ProducerCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Producer update
   */
  export type ProducerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producer
     */
    select?: ProducerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProducerInclude<ExtArgs> | null
    /**
     * The data needed to update a Producer.
     */
    data: XOR<ProducerUpdateInput, ProducerUncheckedUpdateInput>
    /**
     * Choose, which Producer to update.
     */
    where: ProducerWhereUniqueInput
  }


  /**
   * Producer updateMany
   */
  export type ProducerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Producers.
     */
    data: XOR<ProducerUpdateManyMutationInput, ProducerUncheckedUpdateManyInput>
    /**
     * Filter which Producers to update
     */
    where?: ProducerWhereInput
  }


  /**
   * Producer upsert
   */
  export type ProducerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producer
     */
    select?: ProducerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProducerInclude<ExtArgs> | null
    /**
     * The filter to search for the Producer to update in case it exists.
     */
    where: ProducerWhereUniqueInput
    /**
     * In case the Producer found by the `where` argument doesn't exist, create a new Producer with this data.
     */
    create: XOR<ProducerCreateInput, ProducerUncheckedCreateInput>
    /**
     * In case the Producer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProducerUpdateInput, ProducerUncheckedUpdateInput>
  }


  /**
   * Producer delete
   */
  export type ProducerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producer
     */
    select?: ProducerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProducerInclude<ExtArgs> | null
    /**
     * Filter which Producer to delete.
     */
    where: ProducerWhereUniqueInput
  }


  /**
   * Producer deleteMany
   */
  export type ProducerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Producers to delete
     */
    where?: ProducerWhereInput
  }


  /**
   * Producer.labelMemberships
   */
  export type Producer$labelMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandMember
     */
    select?: BrandMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandMemberInclude<ExtArgs> | null
    where?: BrandMemberWhereInput
    orderBy?: BrandMemberOrderByWithRelationInput | BrandMemberOrderByWithRelationInput[]
    cursor?: BrandMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BrandMemberScalarFieldEnum | BrandMemberScalarFieldEnum[]
  }


  /**
   * Producer without action
   */
  export type ProducerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producer
     */
    select?: ProducerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProducerInclude<ExtArgs> | null
  }



  /**
   * Model BrandMember
   */

  export type AggregateBrandMember = {
    _count: BrandMemberCountAggregateOutputType | null
    _avg: BrandMemberAvgAggregateOutputType | null
    _sum: BrandMemberSumAggregateOutputType | null
    _min: BrandMemberMinAggregateOutputType | null
    _max: BrandMemberMaxAggregateOutputType | null
  }

  export type BrandMemberAvgAggregateOutputType = {
    id: number | null
    brandLabelId: number | null
    producerId: number | null
  }

  export type BrandMemberSumAggregateOutputType = {
    id: number | null
    brandLabelId: number | null
    producerId: number | null
  }

  export type BrandMemberMinAggregateOutputType = {
    id: number | null
    brandLabelId: number | null
    producerId: number | null
  }

  export type BrandMemberMaxAggregateOutputType = {
    id: number | null
    brandLabelId: number | null
    producerId: number | null
  }

  export type BrandMemberCountAggregateOutputType = {
    id: number
    brandLabelId: number
    producerId: number
    _all: number
  }


  export type BrandMemberAvgAggregateInputType = {
    id?: true
    brandLabelId?: true
    producerId?: true
  }

  export type BrandMemberSumAggregateInputType = {
    id?: true
    brandLabelId?: true
    producerId?: true
  }

  export type BrandMemberMinAggregateInputType = {
    id?: true
    brandLabelId?: true
    producerId?: true
  }

  export type BrandMemberMaxAggregateInputType = {
    id?: true
    brandLabelId?: true
    producerId?: true
  }

  export type BrandMemberCountAggregateInputType = {
    id?: true
    brandLabelId?: true
    producerId?: true
    _all?: true
  }

  export type BrandMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BrandMember to aggregate.
     */
    where?: BrandMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrandMembers to fetch.
     */
    orderBy?: BrandMemberOrderByWithRelationInput | BrandMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrandMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrandMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrandMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BrandMembers
    **/
    _count?: true | BrandMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BrandMemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BrandMemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrandMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrandMemberMaxAggregateInputType
  }

  export type GetBrandMemberAggregateType<T extends BrandMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateBrandMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrandMember[P]>
      : GetScalarType<T[P], AggregateBrandMember[P]>
  }




  export type BrandMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandMemberWhereInput
    orderBy?: BrandMemberOrderByWithAggregationInput | BrandMemberOrderByWithAggregationInput[]
    by: BrandMemberScalarFieldEnum[] | BrandMemberScalarFieldEnum
    having?: BrandMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrandMemberCountAggregateInputType | true
    _avg?: BrandMemberAvgAggregateInputType
    _sum?: BrandMemberSumAggregateInputType
    _min?: BrandMemberMinAggregateInputType
    _max?: BrandMemberMaxAggregateInputType
  }

  export type BrandMemberGroupByOutputType = {
    id: number
    brandLabelId: number | null
    producerId: number | null
    _count: BrandMemberCountAggregateOutputType | null
    _avg: BrandMemberAvgAggregateOutputType | null
    _sum: BrandMemberSumAggregateOutputType | null
    _min: BrandMemberMinAggregateOutputType | null
    _max: BrandMemberMaxAggregateOutputType | null
  }

  type GetBrandMemberGroupByPayload<T extends BrandMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrandMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrandMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrandMemberGroupByOutputType[P]>
            : GetScalarType<T[P], BrandMemberGroupByOutputType[P]>
        }
      >
    >


  export type BrandMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brandLabelId?: boolean
    producerId?: boolean
    brandLabel?: boolean | BrandMember$brandLabelArgs<ExtArgs>
    producer?: boolean | BrandMember$producerArgs<ExtArgs>
  }, ExtArgs["result"]["brandMember"]>

  export type BrandMemberSelectScalar = {
    id?: boolean
    brandLabelId?: boolean
    producerId?: boolean
  }

  export type BrandMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brandLabel?: boolean | BrandMember$brandLabelArgs<ExtArgs>
    producer?: boolean | BrandMember$producerArgs<ExtArgs>
  }


  export type $BrandMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BrandMember"
    objects: {
      brandLabel: Prisma.$BrandLabelPayload<ExtArgs> | null
      producer: Prisma.$ProducerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      brandLabelId: number | null
      producerId: number | null
    }, ExtArgs["result"]["brandMember"]>
    composites: {}
  }


  type BrandMemberGetPayload<S extends boolean | null | undefined | BrandMemberDefaultArgs> = $Result.GetResult<Prisma.$BrandMemberPayload, S>

  type BrandMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BrandMemberFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: BrandMemberCountAggregateInputType | true
    }

  export interface BrandMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BrandMember'], meta: { name: 'BrandMember' } }
    /**
     * Find zero or one BrandMember that matches the filter.
     * @param {BrandMemberFindUniqueArgs} args - Arguments to find a BrandMember
     * @example
     * // Get one BrandMember
     * const brandMember = await prisma.brandMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BrandMemberFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BrandMemberFindUniqueArgs<ExtArgs>>
    ): Prisma__BrandMemberClient<$Result.GetResult<Prisma.$BrandMemberPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one BrandMember that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BrandMemberFindUniqueOrThrowArgs} args - Arguments to find a BrandMember
     * @example
     * // Get one BrandMember
     * const brandMember = await prisma.brandMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BrandMemberFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandMemberFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BrandMemberClient<$Result.GetResult<Prisma.$BrandMemberPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first BrandMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandMemberFindFirstArgs} args - Arguments to find a BrandMember
     * @example
     * // Get one BrandMember
     * const brandMember = await prisma.brandMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BrandMemberFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandMemberFindFirstArgs<ExtArgs>>
    ): Prisma__BrandMemberClient<$Result.GetResult<Prisma.$BrandMemberPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first BrandMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandMemberFindFirstOrThrowArgs} args - Arguments to find a BrandMember
     * @example
     * // Get one BrandMember
     * const brandMember = await prisma.brandMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BrandMemberFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandMemberFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BrandMemberClient<$Result.GetResult<Prisma.$BrandMemberPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more BrandMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandMemberFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BrandMembers
     * const brandMembers = await prisma.brandMember.findMany()
     * 
     * // Get first 10 BrandMembers
     * const brandMembers = await prisma.brandMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brandMemberWithIdOnly = await prisma.brandMember.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BrandMemberFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandMemberFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandMemberPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a BrandMember.
     * @param {BrandMemberCreateArgs} args - Arguments to create a BrandMember.
     * @example
     * // Create one BrandMember
     * const BrandMember = await prisma.brandMember.create({
     *   data: {
     *     // ... data to create a BrandMember
     *   }
     * })
     * 
    **/
    create<T extends BrandMemberCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BrandMemberCreateArgs<ExtArgs>>
    ): Prisma__BrandMemberClient<$Result.GetResult<Prisma.$BrandMemberPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many BrandMembers.
     *     @param {BrandMemberCreateManyArgs} args - Arguments to create many BrandMembers.
     *     @example
     *     // Create many BrandMembers
     *     const brandMember = await prisma.brandMember.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BrandMemberCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandMemberCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BrandMember.
     * @param {BrandMemberDeleteArgs} args - Arguments to delete one BrandMember.
     * @example
     * // Delete one BrandMember
     * const BrandMember = await prisma.brandMember.delete({
     *   where: {
     *     // ... filter to delete one BrandMember
     *   }
     * })
     * 
    **/
    delete<T extends BrandMemberDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BrandMemberDeleteArgs<ExtArgs>>
    ): Prisma__BrandMemberClient<$Result.GetResult<Prisma.$BrandMemberPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one BrandMember.
     * @param {BrandMemberUpdateArgs} args - Arguments to update one BrandMember.
     * @example
     * // Update one BrandMember
     * const brandMember = await prisma.brandMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BrandMemberUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BrandMemberUpdateArgs<ExtArgs>>
    ): Prisma__BrandMemberClient<$Result.GetResult<Prisma.$BrandMemberPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more BrandMembers.
     * @param {BrandMemberDeleteManyArgs} args - Arguments to filter BrandMembers to delete.
     * @example
     * // Delete a few BrandMembers
     * const { count } = await prisma.brandMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BrandMemberDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandMemberDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BrandMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BrandMembers
     * const brandMember = await prisma.brandMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BrandMemberUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BrandMemberUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BrandMember.
     * @param {BrandMemberUpsertArgs} args - Arguments to update or create a BrandMember.
     * @example
     * // Update or create a BrandMember
     * const brandMember = await prisma.brandMember.upsert({
     *   create: {
     *     // ... data to create a BrandMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BrandMember we want to update
     *   }
     * })
    **/
    upsert<T extends BrandMemberUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BrandMemberUpsertArgs<ExtArgs>>
    ): Prisma__BrandMemberClient<$Result.GetResult<Prisma.$BrandMemberPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of BrandMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandMemberCountArgs} args - Arguments to filter BrandMembers to count.
     * @example
     * // Count the number of BrandMembers
     * const count = await prisma.brandMember.count({
     *   where: {
     *     // ... the filter for the BrandMembers we want to count
     *   }
     * })
    **/
    count<T extends BrandMemberCountArgs>(
      args?: Subset<T, BrandMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrandMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BrandMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BrandMemberAggregateArgs>(args: Subset<T, BrandMemberAggregateArgs>): Prisma.PrismaPromise<GetBrandMemberAggregateType<T>>

    /**
     * Group by BrandMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandMemberGroupByArgs} args - Group by arguments.
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
      T extends BrandMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrandMemberGroupByArgs['orderBy'] }
        : { orderBy?: BrandMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BrandMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BrandMember model
   */
  readonly fields: BrandMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BrandMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrandMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    brandLabel<T extends BrandMember$brandLabelArgs<ExtArgs> = {}>(args?: Subset<T, BrandMember$brandLabelArgs<ExtArgs>>): Prisma__BrandLabelClient<$Result.GetResult<Prisma.$BrandLabelPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    producer<T extends BrandMember$producerArgs<ExtArgs> = {}>(args?: Subset<T, BrandMember$producerArgs<ExtArgs>>): Prisma__ProducerClient<$Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

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
   * Fields of the BrandMember model
   */ 
  interface BrandMemberFieldRefs {
    readonly id: FieldRef<"BrandMember", 'Int'>
    readonly brandLabelId: FieldRef<"BrandMember", 'Int'>
    readonly producerId: FieldRef<"BrandMember", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * BrandMember findUnique
   */
  export type BrandMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandMember
     */
    select?: BrandMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandMemberInclude<ExtArgs> | null
    /**
     * Filter, which BrandMember to fetch.
     */
    where: BrandMemberWhereUniqueInput
  }


  /**
   * BrandMember findUniqueOrThrow
   */
  export type BrandMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandMember
     */
    select?: BrandMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandMemberInclude<ExtArgs> | null
    /**
     * Filter, which BrandMember to fetch.
     */
    where: BrandMemberWhereUniqueInput
  }


  /**
   * BrandMember findFirst
   */
  export type BrandMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandMember
     */
    select?: BrandMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandMemberInclude<ExtArgs> | null
    /**
     * Filter, which BrandMember to fetch.
     */
    where?: BrandMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrandMembers to fetch.
     */
    orderBy?: BrandMemberOrderByWithRelationInput | BrandMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BrandMembers.
     */
    cursor?: BrandMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrandMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrandMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BrandMembers.
     */
    distinct?: BrandMemberScalarFieldEnum | BrandMemberScalarFieldEnum[]
  }


  /**
   * BrandMember findFirstOrThrow
   */
  export type BrandMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandMember
     */
    select?: BrandMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandMemberInclude<ExtArgs> | null
    /**
     * Filter, which BrandMember to fetch.
     */
    where?: BrandMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrandMembers to fetch.
     */
    orderBy?: BrandMemberOrderByWithRelationInput | BrandMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BrandMembers.
     */
    cursor?: BrandMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrandMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrandMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BrandMembers.
     */
    distinct?: BrandMemberScalarFieldEnum | BrandMemberScalarFieldEnum[]
  }


  /**
   * BrandMember findMany
   */
  export type BrandMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandMember
     */
    select?: BrandMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandMemberInclude<ExtArgs> | null
    /**
     * Filter, which BrandMembers to fetch.
     */
    where?: BrandMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrandMembers to fetch.
     */
    orderBy?: BrandMemberOrderByWithRelationInput | BrandMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BrandMembers.
     */
    cursor?: BrandMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrandMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrandMembers.
     */
    skip?: number
    distinct?: BrandMemberScalarFieldEnum | BrandMemberScalarFieldEnum[]
  }


  /**
   * BrandMember create
   */
  export type BrandMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandMember
     */
    select?: BrandMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a BrandMember.
     */
    data?: XOR<BrandMemberCreateInput, BrandMemberUncheckedCreateInput>
  }


  /**
   * BrandMember createMany
   */
  export type BrandMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BrandMembers.
     */
    data: BrandMemberCreateManyInput | BrandMemberCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * BrandMember update
   */
  export type BrandMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandMember
     */
    select?: BrandMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a BrandMember.
     */
    data: XOR<BrandMemberUpdateInput, BrandMemberUncheckedUpdateInput>
    /**
     * Choose, which BrandMember to update.
     */
    where: BrandMemberWhereUniqueInput
  }


  /**
   * BrandMember updateMany
   */
  export type BrandMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BrandMembers.
     */
    data: XOR<BrandMemberUpdateManyMutationInput, BrandMemberUncheckedUpdateManyInput>
    /**
     * Filter which BrandMembers to update
     */
    where?: BrandMemberWhereInput
  }


  /**
   * BrandMember upsert
   */
  export type BrandMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandMember
     */
    select?: BrandMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the BrandMember to update in case it exists.
     */
    where: BrandMemberWhereUniqueInput
    /**
     * In case the BrandMember found by the `where` argument doesn't exist, create a new BrandMember with this data.
     */
    create: XOR<BrandMemberCreateInput, BrandMemberUncheckedCreateInput>
    /**
     * In case the BrandMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrandMemberUpdateInput, BrandMemberUncheckedUpdateInput>
  }


  /**
   * BrandMember delete
   */
  export type BrandMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandMember
     */
    select?: BrandMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandMemberInclude<ExtArgs> | null
    /**
     * Filter which BrandMember to delete.
     */
    where: BrandMemberWhereUniqueInput
  }


  /**
   * BrandMember deleteMany
   */
  export type BrandMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BrandMembers to delete
     */
    where?: BrandMemberWhereInput
  }


  /**
   * BrandMember.brandLabel
   */
  export type BrandMember$brandLabelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandLabel
     */
    select?: BrandLabelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandLabelInclude<ExtArgs> | null
    where?: BrandLabelWhereInput
  }


  /**
   * BrandMember.producer
   */
  export type BrandMember$producerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producer
     */
    select?: ProducerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProducerInclude<ExtArgs> | null
    where?: ProducerWhereInput
  }


  /**
   * BrandMember without action
   */
  export type BrandMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandMember
     */
    select?: BrandMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandMemberInclude<ExtArgs> | null
  }



  /**
   * Model BrandLabel
   */

  export type AggregateBrandLabel = {
    _count: BrandLabelCountAggregateOutputType | null
    _avg: BrandLabelAvgAggregateOutputType | null
    _sum: BrandLabelSumAggregateOutputType | null
    _min: BrandLabelMinAggregateOutputType | null
    _max: BrandLabelMaxAggregateOutputType | null
  }

  export type BrandLabelAvgAggregateOutputType = {
    id: number | null
  }

  export type BrandLabelSumAggregateOutputType = {
    id: number | null
  }

  export type BrandLabelMinAggregateOutputType = {
    id: number | null
    type: string | null
    name: string | null
  }

  export type BrandLabelMaxAggregateOutputType = {
    id: number | null
    type: string | null
    name: string | null
  }

  export type BrandLabelCountAggregateOutputType = {
    id: number
    type: number
    name: number
    _all: number
  }


  export type BrandLabelAvgAggregateInputType = {
    id?: true
  }

  export type BrandLabelSumAggregateInputType = {
    id?: true
  }

  export type BrandLabelMinAggregateInputType = {
    id?: true
    type?: true
    name?: true
  }

  export type BrandLabelMaxAggregateInputType = {
    id?: true
    type?: true
    name?: true
  }

  export type BrandLabelCountAggregateInputType = {
    id?: true
    type?: true
    name?: true
    _all?: true
  }

  export type BrandLabelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BrandLabel to aggregate.
     */
    where?: BrandLabelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrandLabels to fetch.
     */
    orderBy?: BrandLabelOrderByWithRelationInput | BrandLabelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrandLabelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrandLabels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrandLabels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BrandLabels
    **/
    _count?: true | BrandLabelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BrandLabelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BrandLabelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrandLabelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrandLabelMaxAggregateInputType
  }

  export type GetBrandLabelAggregateType<T extends BrandLabelAggregateArgs> = {
        [P in keyof T & keyof AggregateBrandLabel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrandLabel[P]>
      : GetScalarType<T[P], AggregateBrandLabel[P]>
  }




  export type BrandLabelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandLabelWhereInput
    orderBy?: BrandLabelOrderByWithAggregationInput | BrandLabelOrderByWithAggregationInput[]
    by: BrandLabelScalarFieldEnum[] | BrandLabelScalarFieldEnum
    having?: BrandLabelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrandLabelCountAggregateInputType | true
    _avg?: BrandLabelAvgAggregateInputType
    _sum?: BrandLabelSumAggregateInputType
    _min?: BrandLabelMinAggregateInputType
    _max?: BrandLabelMaxAggregateInputType
  }

  export type BrandLabelGroupByOutputType = {
    id: number
    type: string | null
    name: string | null
    _count: BrandLabelCountAggregateOutputType | null
    _avg: BrandLabelAvgAggregateOutputType | null
    _sum: BrandLabelSumAggregateOutputType | null
    _min: BrandLabelMinAggregateOutputType | null
    _max: BrandLabelMaxAggregateOutputType | null
  }

  type GetBrandLabelGroupByPayload<T extends BrandLabelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrandLabelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrandLabelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrandLabelGroupByOutputType[P]>
            : GetScalarType<T[P], BrandLabelGroupByOutputType[P]>
        }
      >
    >


  export type BrandLabelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    labelMemberships?: boolean | BrandLabel$labelMembershipsArgs<ExtArgs>
    items?: boolean | BrandLabel$itemsArgs<ExtArgs>
    _count?: boolean | BrandLabelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brandLabel"]>

  export type BrandLabelSelectScalar = {
    id?: boolean
    type?: boolean
    name?: boolean
  }

  export type BrandLabelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    labelMemberships?: boolean | BrandLabel$labelMembershipsArgs<ExtArgs>
    items?: boolean | BrandLabel$itemsArgs<ExtArgs>
    _count?: boolean | BrandLabelCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $BrandLabelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BrandLabel"
    objects: {
      labelMemberships: Prisma.$BrandMemberPayload<ExtArgs>[]
      items: Prisma.$ItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string | null
      name: string | null
    }, ExtArgs["result"]["brandLabel"]>
    composites: {}
  }


  type BrandLabelGetPayload<S extends boolean | null | undefined | BrandLabelDefaultArgs> = $Result.GetResult<Prisma.$BrandLabelPayload, S>

  type BrandLabelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BrandLabelFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: BrandLabelCountAggregateInputType | true
    }

  export interface BrandLabelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BrandLabel'], meta: { name: 'BrandLabel' } }
    /**
     * Find zero or one BrandLabel that matches the filter.
     * @param {BrandLabelFindUniqueArgs} args - Arguments to find a BrandLabel
     * @example
     * // Get one BrandLabel
     * const brandLabel = await prisma.brandLabel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BrandLabelFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BrandLabelFindUniqueArgs<ExtArgs>>
    ): Prisma__BrandLabelClient<$Result.GetResult<Prisma.$BrandLabelPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one BrandLabel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BrandLabelFindUniqueOrThrowArgs} args - Arguments to find a BrandLabel
     * @example
     * // Get one BrandLabel
     * const brandLabel = await prisma.brandLabel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BrandLabelFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandLabelFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BrandLabelClient<$Result.GetResult<Prisma.$BrandLabelPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first BrandLabel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandLabelFindFirstArgs} args - Arguments to find a BrandLabel
     * @example
     * // Get one BrandLabel
     * const brandLabel = await prisma.brandLabel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BrandLabelFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandLabelFindFirstArgs<ExtArgs>>
    ): Prisma__BrandLabelClient<$Result.GetResult<Prisma.$BrandLabelPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first BrandLabel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandLabelFindFirstOrThrowArgs} args - Arguments to find a BrandLabel
     * @example
     * // Get one BrandLabel
     * const brandLabel = await prisma.brandLabel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BrandLabelFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandLabelFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BrandLabelClient<$Result.GetResult<Prisma.$BrandLabelPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more BrandLabels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandLabelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BrandLabels
     * const brandLabels = await prisma.brandLabel.findMany()
     * 
     * // Get first 10 BrandLabels
     * const brandLabels = await prisma.brandLabel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brandLabelWithIdOnly = await prisma.brandLabel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BrandLabelFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandLabelFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandLabelPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a BrandLabel.
     * @param {BrandLabelCreateArgs} args - Arguments to create a BrandLabel.
     * @example
     * // Create one BrandLabel
     * const BrandLabel = await prisma.brandLabel.create({
     *   data: {
     *     // ... data to create a BrandLabel
     *   }
     * })
     * 
    **/
    create<T extends BrandLabelCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BrandLabelCreateArgs<ExtArgs>>
    ): Prisma__BrandLabelClient<$Result.GetResult<Prisma.$BrandLabelPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many BrandLabels.
     *     @param {BrandLabelCreateManyArgs} args - Arguments to create many BrandLabels.
     *     @example
     *     // Create many BrandLabels
     *     const brandLabel = await prisma.brandLabel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BrandLabelCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandLabelCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BrandLabel.
     * @param {BrandLabelDeleteArgs} args - Arguments to delete one BrandLabel.
     * @example
     * // Delete one BrandLabel
     * const BrandLabel = await prisma.brandLabel.delete({
     *   where: {
     *     // ... filter to delete one BrandLabel
     *   }
     * })
     * 
    **/
    delete<T extends BrandLabelDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BrandLabelDeleteArgs<ExtArgs>>
    ): Prisma__BrandLabelClient<$Result.GetResult<Prisma.$BrandLabelPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one BrandLabel.
     * @param {BrandLabelUpdateArgs} args - Arguments to update one BrandLabel.
     * @example
     * // Update one BrandLabel
     * const brandLabel = await prisma.brandLabel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BrandLabelUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BrandLabelUpdateArgs<ExtArgs>>
    ): Prisma__BrandLabelClient<$Result.GetResult<Prisma.$BrandLabelPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more BrandLabels.
     * @param {BrandLabelDeleteManyArgs} args - Arguments to filter BrandLabels to delete.
     * @example
     * // Delete a few BrandLabels
     * const { count } = await prisma.brandLabel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BrandLabelDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandLabelDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BrandLabels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandLabelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BrandLabels
     * const brandLabel = await prisma.brandLabel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BrandLabelUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BrandLabelUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BrandLabel.
     * @param {BrandLabelUpsertArgs} args - Arguments to update or create a BrandLabel.
     * @example
     * // Update or create a BrandLabel
     * const brandLabel = await prisma.brandLabel.upsert({
     *   create: {
     *     // ... data to create a BrandLabel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BrandLabel we want to update
     *   }
     * })
    **/
    upsert<T extends BrandLabelUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BrandLabelUpsertArgs<ExtArgs>>
    ): Prisma__BrandLabelClient<$Result.GetResult<Prisma.$BrandLabelPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of BrandLabels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandLabelCountArgs} args - Arguments to filter BrandLabels to count.
     * @example
     * // Count the number of BrandLabels
     * const count = await prisma.brandLabel.count({
     *   where: {
     *     // ... the filter for the BrandLabels we want to count
     *   }
     * })
    **/
    count<T extends BrandLabelCountArgs>(
      args?: Subset<T, BrandLabelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrandLabelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BrandLabel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandLabelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BrandLabelAggregateArgs>(args: Subset<T, BrandLabelAggregateArgs>): Prisma.PrismaPromise<GetBrandLabelAggregateType<T>>

    /**
     * Group by BrandLabel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandLabelGroupByArgs} args - Group by arguments.
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
      T extends BrandLabelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrandLabelGroupByArgs['orderBy'] }
        : { orderBy?: BrandLabelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BrandLabelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandLabelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BrandLabel model
   */
  readonly fields: BrandLabelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BrandLabel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrandLabelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    labelMemberships<T extends BrandLabel$labelMembershipsArgs<ExtArgs> = {}>(args?: Subset<T, BrandLabel$labelMembershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandMemberPayload<ExtArgs>, T, 'findMany'> | Null>;

    items<T extends BrandLabel$itemsArgs<ExtArgs> = {}>(args?: Subset<T, BrandLabel$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the BrandLabel model
   */ 
  interface BrandLabelFieldRefs {
    readonly id: FieldRef<"BrandLabel", 'Int'>
    readonly type: FieldRef<"BrandLabel", 'String'>
    readonly name: FieldRef<"BrandLabel", 'String'>
  }
    

  // Custom InputTypes

  /**
   * BrandLabel findUnique
   */
  export type BrandLabelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandLabel
     */
    select?: BrandLabelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandLabelInclude<ExtArgs> | null
    /**
     * Filter, which BrandLabel to fetch.
     */
    where: BrandLabelWhereUniqueInput
  }


  /**
   * BrandLabel findUniqueOrThrow
   */
  export type BrandLabelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandLabel
     */
    select?: BrandLabelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandLabelInclude<ExtArgs> | null
    /**
     * Filter, which BrandLabel to fetch.
     */
    where: BrandLabelWhereUniqueInput
  }


  /**
   * BrandLabel findFirst
   */
  export type BrandLabelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandLabel
     */
    select?: BrandLabelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandLabelInclude<ExtArgs> | null
    /**
     * Filter, which BrandLabel to fetch.
     */
    where?: BrandLabelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrandLabels to fetch.
     */
    orderBy?: BrandLabelOrderByWithRelationInput | BrandLabelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BrandLabels.
     */
    cursor?: BrandLabelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrandLabels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrandLabels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BrandLabels.
     */
    distinct?: BrandLabelScalarFieldEnum | BrandLabelScalarFieldEnum[]
  }


  /**
   * BrandLabel findFirstOrThrow
   */
  export type BrandLabelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandLabel
     */
    select?: BrandLabelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandLabelInclude<ExtArgs> | null
    /**
     * Filter, which BrandLabel to fetch.
     */
    where?: BrandLabelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrandLabels to fetch.
     */
    orderBy?: BrandLabelOrderByWithRelationInput | BrandLabelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BrandLabels.
     */
    cursor?: BrandLabelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrandLabels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrandLabels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BrandLabels.
     */
    distinct?: BrandLabelScalarFieldEnum | BrandLabelScalarFieldEnum[]
  }


  /**
   * BrandLabel findMany
   */
  export type BrandLabelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandLabel
     */
    select?: BrandLabelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandLabelInclude<ExtArgs> | null
    /**
     * Filter, which BrandLabels to fetch.
     */
    where?: BrandLabelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrandLabels to fetch.
     */
    orderBy?: BrandLabelOrderByWithRelationInput | BrandLabelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BrandLabels.
     */
    cursor?: BrandLabelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrandLabels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrandLabels.
     */
    skip?: number
    distinct?: BrandLabelScalarFieldEnum | BrandLabelScalarFieldEnum[]
  }


  /**
   * BrandLabel create
   */
  export type BrandLabelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandLabel
     */
    select?: BrandLabelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandLabelInclude<ExtArgs> | null
    /**
     * The data needed to create a BrandLabel.
     */
    data?: XOR<BrandLabelCreateInput, BrandLabelUncheckedCreateInput>
  }


  /**
   * BrandLabel createMany
   */
  export type BrandLabelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BrandLabels.
     */
    data: BrandLabelCreateManyInput | BrandLabelCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * BrandLabel update
   */
  export type BrandLabelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandLabel
     */
    select?: BrandLabelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandLabelInclude<ExtArgs> | null
    /**
     * The data needed to update a BrandLabel.
     */
    data: XOR<BrandLabelUpdateInput, BrandLabelUncheckedUpdateInput>
    /**
     * Choose, which BrandLabel to update.
     */
    where: BrandLabelWhereUniqueInput
  }


  /**
   * BrandLabel updateMany
   */
  export type BrandLabelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BrandLabels.
     */
    data: XOR<BrandLabelUpdateManyMutationInput, BrandLabelUncheckedUpdateManyInput>
    /**
     * Filter which BrandLabels to update
     */
    where?: BrandLabelWhereInput
  }


  /**
   * BrandLabel upsert
   */
  export type BrandLabelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandLabel
     */
    select?: BrandLabelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandLabelInclude<ExtArgs> | null
    /**
     * The filter to search for the BrandLabel to update in case it exists.
     */
    where: BrandLabelWhereUniqueInput
    /**
     * In case the BrandLabel found by the `where` argument doesn't exist, create a new BrandLabel with this data.
     */
    create: XOR<BrandLabelCreateInput, BrandLabelUncheckedCreateInput>
    /**
     * In case the BrandLabel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrandLabelUpdateInput, BrandLabelUncheckedUpdateInput>
  }


  /**
   * BrandLabel delete
   */
  export type BrandLabelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandLabel
     */
    select?: BrandLabelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandLabelInclude<ExtArgs> | null
    /**
     * Filter which BrandLabel to delete.
     */
    where: BrandLabelWhereUniqueInput
  }


  /**
   * BrandLabel deleteMany
   */
  export type BrandLabelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BrandLabels to delete
     */
    where?: BrandLabelWhereInput
  }


  /**
   * BrandLabel.labelMemberships
   */
  export type BrandLabel$labelMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandMember
     */
    select?: BrandMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandMemberInclude<ExtArgs> | null
    where?: BrandMemberWhereInput
    orderBy?: BrandMemberOrderByWithRelationInput | BrandMemberOrderByWithRelationInput[]
    cursor?: BrandMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BrandMemberScalarFieldEnum | BrandMemberScalarFieldEnum[]
  }


  /**
   * BrandLabel.items
   */
  export type BrandLabel$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    cursor?: ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }


  /**
   * BrandLabel without action
   */
  export type BrandLabelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandLabel
     */
    select?: BrandLabelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandLabelInclude<ExtArgs> | null
  }



  /**
   * Model ItemType
   */

  export type AggregateItemType = {
    _count: ItemTypeCountAggregateOutputType | null
    _avg: ItemTypeAvgAggregateOutputType | null
    _sum: ItemTypeSumAggregateOutputType | null
    _min: ItemTypeMinAggregateOutputType | null
    _max: ItemTypeMaxAggregateOutputType | null
  }

  export type ItemTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type ItemTypeSumAggregateOutputType = {
    id: number | null
  }

  export type ItemTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ItemTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ItemTypeCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ItemTypeAvgAggregateInputType = {
    id?: true
  }

  export type ItemTypeSumAggregateInputType = {
    id?: true
  }

  export type ItemTypeMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ItemTypeMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ItemTypeCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ItemTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemType to aggregate.
     */
    where?: ItemTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemTypes to fetch.
     */
    orderBy?: ItemTypeOrderByWithRelationInput | ItemTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemTypes
    **/
    _count?: true | ItemTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemTypeMaxAggregateInputType
  }

  export type GetItemTypeAggregateType<T extends ItemTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateItemType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemType[P]>
      : GetScalarType<T[P], AggregateItemType[P]>
  }




  export type ItemTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemTypeWhereInput
    orderBy?: ItemTypeOrderByWithAggregationInput | ItemTypeOrderByWithAggregationInput[]
    by: ItemTypeScalarFieldEnum[] | ItemTypeScalarFieldEnum
    having?: ItemTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemTypeCountAggregateInputType | true
    _avg?: ItemTypeAvgAggregateInputType
    _sum?: ItemTypeSumAggregateInputType
    _min?: ItemTypeMinAggregateInputType
    _max?: ItemTypeMaxAggregateInputType
  }

  export type ItemTypeGroupByOutputType = {
    id: number
    name: string
    _count: ItemTypeCountAggregateOutputType | null
    _avg: ItemTypeAvgAggregateOutputType | null
    _sum: ItemTypeSumAggregateOutputType | null
    _min: ItemTypeMinAggregateOutputType | null
    _max: ItemTypeMaxAggregateOutputType | null
  }

  type GetItemTypeGroupByPayload<T extends ItemTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemTypeGroupByOutputType[P]>
            : GetScalarType<T[P], ItemTypeGroupByOutputType[P]>
        }
      >
    >


  export type ItemTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    propertyGroups?: boolean | ItemType$propertyGroupsArgs<ExtArgs>
    _count?: boolean | ItemTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemType"]>

  export type ItemTypeSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type ItemTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    propertyGroups?: boolean | ItemType$propertyGroupsArgs<ExtArgs>
    _count?: boolean | ItemTypeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ItemTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemType"
    objects: {
      propertyGroups: Prisma.$PropertyGroupPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["itemType"]>
    composites: {}
  }


  type ItemTypeGetPayload<S extends boolean | null | undefined | ItemTypeDefaultArgs> = $Result.GetResult<Prisma.$ItemTypePayload, S>

  type ItemTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ItemTypeFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ItemTypeCountAggregateInputType | true
    }

  export interface ItemTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemType'], meta: { name: 'ItemType' } }
    /**
     * Find zero or one ItemType that matches the filter.
     * @param {ItemTypeFindUniqueArgs} args - Arguments to find a ItemType
     * @example
     * // Get one ItemType
     * const itemType = await prisma.itemType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ItemTypeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ItemTypeFindUniqueArgs<ExtArgs>>
    ): Prisma__ItemTypeClient<$Result.GetResult<Prisma.$ItemTypePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ItemType that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ItemTypeFindUniqueOrThrowArgs} args - Arguments to find a ItemType
     * @example
     * // Get one ItemType
     * const itemType = await prisma.itemType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ItemTypeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemTypeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ItemTypeClient<$Result.GetResult<Prisma.$ItemTypePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ItemType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemTypeFindFirstArgs} args - Arguments to find a ItemType
     * @example
     * // Get one ItemType
     * const itemType = await prisma.itemType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ItemTypeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemTypeFindFirstArgs<ExtArgs>>
    ): Prisma__ItemTypeClient<$Result.GetResult<Prisma.$ItemTypePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ItemType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemTypeFindFirstOrThrowArgs} args - Arguments to find a ItemType
     * @example
     * // Get one ItemType
     * const itemType = await prisma.itemType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ItemTypeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemTypeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ItemTypeClient<$Result.GetResult<Prisma.$ItemTypePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ItemTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemTypeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemTypes
     * const itemTypes = await prisma.itemType.findMany()
     * 
     * // Get first 10 ItemTypes
     * const itemTypes = await prisma.itemType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemTypeWithIdOnly = await prisma.itemType.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ItemTypeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemTypeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemTypePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ItemType.
     * @param {ItemTypeCreateArgs} args - Arguments to create a ItemType.
     * @example
     * // Create one ItemType
     * const ItemType = await prisma.itemType.create({
     *   data: {
     *     // ... data to create a ItemType
     *   }
     * })
     * 
    **/
    create<T extends ItemTypeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ItemTypeCreateArgs<ExtArgs>>
    ): Prisma__ItemTypeClient<$Result.GetResult<Prisma.$ItemTypePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ItemTypes.
     *     @param {ItemTypeCreateManyArgs} args - Arguments to create many ItemTypes.
     *     @example
     *     // Create many ItemTypes
     *     const itemType = await prisma.itemType.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ItemTypeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemTypeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ItemType.
     * @param {ItemTypeDeleteArgs} args - Arguments to delete one ItemType.
     * @example
     * // Delete one ItemType
     * const ItemType = await prisma.itemType.delete({
     *   where: {
     *     // ... filter to delete one ItemType
     *   }
     * })
     * 
    **/
    delete<T extends ItemTypeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ItemTypeDeleteArgs<ExtArgs>>
    ): Prisma__ItemTypeClient<$Result.GetResult<Prisma.$ItemTypePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ItemType.
     * @param {ItemTypeUpdateArgs} args - Arguments to update one ItemType.
     * @example
     * // Update one ItemType
     * const itemType = await prisma.itemType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ItemTypeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ItemTypeUpdateArgs<ExtArgs>>
    ): Prisma__ItemTypeClient<$Result.GetResult<Prisma.$ItemTypePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ItemTypes.
     * @param {ItemTypeDeleteManyArgs} args - Arguments to filter ItemTypes to delete.
     * @example
     * // Delete a few ItemTypes
     * const { count } = await prisma.itemType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ItemTypeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemTypeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemTypes
     * const itemType = await prisma.itemType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ItemTypeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ItemTypeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ItemType.
     * @param {ItemTypeUpsertArgs} args - Arguments to update or create a ItemType.
     * @example
     * // Update or create a ItemType
     * const itemType = await prisma.itemType.upsert({
     *   create: {
     *     // ... data to create a ItemType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemType we want to update
     *   }
     * })
    **/
    upsert<T extends ItemTypeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ItemTypeUpsertArgs<ExtArgs>>
    ): Prisma__ItemTypeClient<$Result.GetResult<Prisma.$ItemTypePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ItemTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemTypeCountArgs} args - Arguments to filter ItemTypes to count.
     * @example
     * // Count the number of ItemTypes
     * const count = await prisma.itemType.count({
     *   where: {
     *     // ... the filter for the ItemTypes we want to count
     *   }
     * })
    **/
    count<T extends ItemTypeCountArgs>(
      args?: Subset<T, ItemTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemTypeAggregateArgs>(args: Subset<T, ItemTypeAggregateArgs>): Prisma.PrismaPromise<GetItemTypeAggregateType<T>>

    /**
     * Group by ItemType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemTypeGroupByArgs} args - Group by arguments.
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
      T extends ItemTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemTypeGroupByArgs['orderBy'] }
        : { orderBy?: ItemTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ItemTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemType model
   */
  readonly fields: ItemTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    propertyGroups<T extends ItemType$propertyGroupsArgs<ExtArgs> = {}>(args?: Subset<T, ItemType$propertyGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyGroupPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the ItemType model
   */ 
  interface ItemTypeFieldRefs {
    readonly id: FieldRef<"ItemType", 'Int'>
    readonly name: FieldRef<"ItemType", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ItemType findUnique
   */
  export type ItemTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemType
     */
    select?: ItemTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemTypeInclude<ExtArgs> | null
    /**
     * Filter, which ItemType to fetch.
     */
    where: ItemTypeWhereUniqueInput
  }


  /**
   * ItemType findUniqueOrThrow
   */
  export type ItemTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemType
     */
    select?: ItemTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemTypeInclude<ExtArgs> | null
    /**
     * Filter, which ItemType to fetch.
     */
    where: ItemTypeWhereUniqueInput
  }


  /**
   * ItemType findFirst
   */
  export type ItemTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemType
     */
    select?: ItemTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemTypeInclude<ExtArgs> | null
    /**
     * Filter, which ItemType to fetch.
     */
    where?: ItemTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemTypes to fetch.
     */
    orderBy?: ItemTypeOrderByWithRelationInput | ItemTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemTypes.
     */
    cursor?: ItemTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemTypes.
     */
    distinct?: ItemTypeScalarFieldEnum | ItemTypeScalarFieldEnum[]
  }


  /**
   * ItemType findFirstOrThrow
   */
  export type ItemTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemType
     */
    select?: ItemTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemTypeInclude<ExtArgs> | null
    /**
     * Filter, which ItemType to fetch.
     */
    where?: ItemTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemTypes to fetch.
     */
    orderBy?: ItemTypeOrderByWithRelationInput | ItemTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemTypes.
     */
    cursor?: ItemTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemTypes.
     */
    distinct?: ItemTypeScalarFieldEnum | ItemTypeScalarFieldEnum[]
  }


  /**
   * ItemType findMany
   */
  export type ItemTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemType
     */
    select?: ItemTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemTypeInclude<ExtArgs> | null
    /**
     * Filter, which ItemTypes to fetch.
     */
    where?: ItemTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemTypes to fetch.
     */
    orderBy?: ItemTypeOrderByWithRelationInput | ItemTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemTypes.
     */
    cursor?: ItemTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemTypes.
     */
    skip?: number
    distinct?: ItemTypeScalarFieldEnum | ItemTypeScalarFieldEnum[]
  }


  /**
   * ItemType create
   */
  export type ItemTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemType
     */
    select?: ItemTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemType.
     */
    data: XOR<ItemTypeCreateInput, ItemTypeUncheckedCreateInput>
  }


  /**
   * ItemType createMany
   */
  export type ItemTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemTypes.
     */
    data: ItemTypeCreateManyInput | ItemTypeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ItemType update
   */
  export type ItemTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemType
     */
    select?: ItemTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemType.
     */
    data: XOR<ItemTypeUpdateInput, ItemTypeUncheckedUpdateInput>
    /**
     * Choose, which ItemType to update.
     */
    where: ItemTypeWhereUniqueInput
  }


  /**
   * ItemType updateMany
   */
  export type ItemTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemTypes.
     */
    data: XOR<ItemTypeUpdateManyMutationInput, ItemTypeUncheckedUpdateManyInput>
    /**
     * Filter which ItemTypes to update
     */
    where?: ItemTypeWhereInput
  }


  /**
   * ItemType upsert
   */
  export type ItemTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemType
     */
    select?: ItemTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemType to update in case it exists.
     */
    where: ItemTypeWhereUniqueInput
    /**
     * In case the ItemType found by the `where` argument doesn't exist, create a new ItemType with this data.
     */
    create: XOR<ItemTypeCreateInput, ItemTypeUncheckedCreateInput>
    /**
     * In case the ItemType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemTypeUpdateInput, ItemTypeUncheckedUpdateInput>
  }


  /**
   * ItemType delete
   */
  export type ItemTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemType
     */
    select?: ItemTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemTypeInclude<ExtArgs> | null
    /**
     * Filter which ItemType to delete.
     */
    where: ItemTypeWhereUniqueInput
  }


  /**
   * ItemType deleteMany
   */
  export type ItemTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemTypes to delete
     */
    where?: ItemTypeWhereInput
  }


  /**
   * ItemType.propertyGroups
   */
  export type ItemType$propertyGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyGroup
     */
    select?: PropertyGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PropertyGroupInclude<ExtArgs> | null
    where?: PropertyGroupWhereInput
    orderBy?: PropertyGroupOrderByWithRelationInput | PropertyGroupOrderByWithRelationInput[]
    cursor?: PropertyGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyGroupScalarFieldEnum | PropertyGroupScalarFieldEnum[]
  }


  /**
   * ItemType without action
   */
  export type ItemTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemType
     */
    select?: ItemTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemTypeInclude<ExtArgs> | null
  }



  /**
   * Model PropertyGroup
   */

  export type AggregatePropertyGroup = {
    _count: PropertyGroupCountAggregateOutputType | null
    _avg: PropertyGroupAvgAggregateOutputType | null
    _sum: PropertyGroupSumAggregateOutputType | null
    _min: PropertyGroupMinAggregateOutputType | null
    _max: PropertyGroupMaxAggregateOutputType | null
  }

  export type PropertyGroupAvgAggregateOutputType = {
    id: number | null
    order: number | null
    itemTypeId: number | null
  }

  export type PropertyGroupSumAggregateOutputType = {
    id: number | null
    order: number | null
    itemTypeId: number | null
  }

  export type PropertyGroupMinAggregateOutputType = {
    id: number | null
    order: number | null
    name: string | null
    itemTypeId: number | null
  }

  export type PropertyGroupMaxAggregateOutputType = {
    id: number | null
    order: number | null
    name: string | null
    itemTypeId: number | null
  }

  export type PropertyGroupCountAggregateOutputType = {
    id: number
    order: number
    name: number
    itemTypeId: number
    _all: number
  }


  export type PropertyGroupAvgAggregateInputType = {
    id?: true
    order?: true
    itemTypeId?: true
  }

  export type PropertyGroupSumAggregateInputType = {
    id?: true
    order?: true
    itemTypeId?: true
  }

  export type PropertyGroupMinAggregateInputType = {
    id?: true
    order?: true
    name?: true
    itemTypeId?: true
  }

  export type PropertyGroupMaxAggregateInputType = {
    id?: true
    order?: true
    name?: true
    itemTypeId?: true
  }

  export type PropertyGroupCountAggregateInputType = {
    id?: true
    order?: true
    name?: true
    itemTypeId?: true
    _all?: true
  }

  export type PropertyGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyGroup to aggregate.
     */
    where?: PropertyGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyGroups to fetch.
     */
    orderBy?: PropertyGroupOrderByWithRelationInput | PropertyGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PropertyGroups
    **/
    _count?: true | PropertyGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyGroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertyGroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyGroupMaxAggregateInputType
  }

  export type GetPropertyGroupAggregateType<T extends PropertyGroupAggregateArgs> = {
        [P in keyof T & keyof AggregatePropertyGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropertyGroup[P]>
      : GetScalarType<T[P], AggregatePropertyGroup[P]>
  }




  export type PropertyGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyGroupWhereInput
    orderBy?: PropertyGroupOrderByWithAggregationInput | PropertyGroupOrderByWithAggregationInput[]
    by: PropertyGroupScalarFieldEnum[] | PropertyGroupScalarFieldEnum
    having?: PropertyGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyGroupCountAggregateInputType | true
    _avg?: PropertyGroupAvgAggregateInputType
    _sum?: PropertyGroupSumAggregateInputType
    _min?: PropertyGroupMinAggregateInputType
    _max?: PropertyGroupMaxAggregateInputType
  }

  export type PropertyGroupGroupByOutputType = {
    id: number
    order: number | null
    name: string
    itemTypeId: number | null
    _count: PropertyGroupCountAggregateOutputType | null
    _avg: PropertyGroupAvgAggregateOutputType | null
    _sum: PropertyGroupSumAggregateOutputType | null
    _min: PropertyGroupMinAggregateOutputType | null
    _max: PropertyGroupMaxAggregateOutputType | null
  }

  type GetPropertyGroupGroupByPayload<T extends PropertyGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyGroupGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyGroupGroupByOutputType[P]>
        }
      >
    >


  export type PropertyGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    name?: boolean
    itemTypeId?: boolean
    itemType?: boolean | PropertyGroup$itemTypeArgs<ExtArgs>
    properties?: boolean | PropertyGroup$propertiesArgs<ExtArgs>
    _count?: boolean | PropertyGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyGroup"]>

  export type PropertyGroupSelectScalar = {
    id?: boolean
    order?: boolean
    name?: boolean
    itemTypeId?: boolean
  }

  export type PropertyGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itemType?: boolean | PropertyGroup$itemTypeArgs<ExtArgs>
    properties?: boolean | PropertyGroup$propertiesArgs<ExtArgs>
    _count?: boolean | PropertyGroupCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PropertyGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PropertyGroup"
    objects: {
      itemType: Prisma.$ItemTypePayload<ExtArgs> | null
      properties: Prisma.$PropertyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      order: number | null
      name: string
      itemTypeId: number | null
    }, ExtArgs["result"]["propertyGroup"]>
    composites: {}
  }


  type PropertyGroupGetPayload<S extends boolean | null | undefined | PropertyGroupDefaultArgs> = $Result.GetResult<Prisma.$PropertyGroupPayload, S>

  type PropertyGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PropertyGroupFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PropertyGroupCountAggregateInputType | true
    }

  export interface PropertyGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PropertyGroup'], meta: { name: 'PropertyGroup' } }
    /**
     * Find zero or one PropertyGroup that matches the filter.
     * @param {PropertyGroupFindUniqueArgs} args - Arguments to find a PropertyGroup
     * @example
     * // Get one PropertyGroup
     * const propertyGroup = await prisma.propertyGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PropertyGroupFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PropertyGroupFindUniqueArgs<ExtArgs>>
    ): Prisma__PropertyGroupClient<$Result.GetResult<Prisma.$PropertyGroupPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PropertyGroup that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PropertyGroupFindUniqueOrThrowArgs} args - Arguments to find a PropertyGroup
     * @example
     * // Get one PropertyGroup
     * const propertyGroup = await prisma.propertyGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PropertyGroupFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PropertyGroupFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PropertyGroupClient<$Result.GetResult<Prisma.$PropertyGroupPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PropertyGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyGroupFindFirstArgs} args - Arguments to find a PropertyGroup
     * @example
     * // Get one PropertyGroup
     * const propertyGroup = await prisma.propertyGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PropertyGroupFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PropertyGroupFindFirstArgs<ExtArgs>>
    ): Prisma__PropertyGroupClient<$Result.GetResult<Prisma.$PropertyGroupPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PropertyGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyGroupFindFirstOrThrowArgs} args - Arguments to find a PropertyGroup
     * @example
     * // Get one PropertyGroup
     * const propertyGroup = await prisma.propertyGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PropertyGroupFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PropertyGroupFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PropertyGroupClient<$Result.GetResult<Prisma.$PropertyGroupPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PropertyGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyGroupFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PropertyGroups
     * const propertyGroups = await prisma.propertyGroup.findMany()
     * 
     * // Get first 10 PropertyGroups
     * const propertyGroups = await prisma.propertyGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyGroupWithIdOnly = await prisma.propertyGroup.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PropertyGroupFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PropertyGroupFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyGroupPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PropertyGroup.
     * @param {PropertyGroupCreateArgs} args - Arguments to create a PropertyGroup.
     * @example
     * // Create one PropertyGroup
     * const PropertyGroup = await prisma.propertyGroup.create({
     *   data: {
     *     // ... data to create a PropertyGroup
     *   }
     * })
     * 
    **/
    create<T extends PropertyGroupCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PropertyGroupCreateArgs<ExtArgs>>
    ): Prisma__PropertyGroupClient<$Result.GetResult<Prisma.$PropertyGroupPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PropertyGroups.
     *     @param {PropertyGroupCreateManyArgs} args - Arguments to create many PropertyGroups.
     *     @example
     *     // Create many PropertyGroups
     *     const propertyGroup = await prisma.propertyGroup.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PropertyGroupCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PropertyGroupCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PropertyGroup.
     * @param {PropertyGroupDeleteArgs} args - Arguments to delete one PropertyGroup.
     * @example
     * // Delete one PropertyGroup
     * const PropertyGroup = await prisma.propertyGroup.delete({
     *   where: {
     *     // ... filter to delete one PropertyGroup
     *   }
     * })
     * 
    **/
    delete<T extends PropertyGroupDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PropertyGroupDeleteArgs<ExtArgs>>
    ): Prisma__PropertyGroupClient<$Result.GetResult<Prisma.$PropertyGroupPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PropertyGroup.
     * @param {PropertyGroupUpdateArgs} args - Arguments to update one PropertyGroup.
     * @example
     * // Update one PropertyGroup
     * const propertyGroup = await prisma.propertyGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PropertyGroupUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PropertyGroupUpdateArgs<ExtArgs>>
    ): Prisma__PropertyGroupClient<$Result.GetResult<Prisma.$PropertyGroupPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PropertyGroups.
     * @param {PropertyGroupDeleteManyArgs} args - Arguments to filter PropertyGroups to delete.
     * @example
     * // Delete a few PropertyGroups
     * const { count } = await prisma.propertyGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PropertyGroupDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PropertyGroupDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PropertyGroups
     * const propertyGroup = await prisma.propertyGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PropertyGroupUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PropertyGroupUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PropertyGroup.
     * @param {PropertyGroupUpsertArgs} args - Arguments to update or create a PropertyGroup.
     * @example
     * // Update or create a PropertyGroup
     * const propertyGroup = await prisma.propertyGroup.upsert({
     *   create: {
     *     // ... data to create a PropertyGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PropertyGroup we want to update
     *   }
     * })
    **/
    upsert<T extends PropertyGroupUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PropertyGroupUpsertArgs<ExtArgs>>
    ): Prisma__PropertyGroupClient<$Result.GetResult<Prisma.$PropertyGroupPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PropertyGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyGroupCountArgs} args - Arguments to filter PropertyGroups to count.
     * @example
     * // Count the number of PropertyGroups
     * const count = await prisma.propertyGroup.count({
     *   where: {
     *     // ... the filter for the PropertyGroups we want to count
     *   }
     * })
    **/
    count<T extends PropertyGroupCountArgs>(
      args?: Subset<T, PropertyGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PropertyGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PropertyGroupAggregateArgs>(args: Subset<T, PropertyGroupAggregateArgs>): Prisma.PrismaPromise<GetPropertyGroupAggregateType<T>>

    /**
     * Group by PropertyGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyGroupGroupByArgs} args - Group by arguments.
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
      T extends PropertyGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyGroupGroupByArgs['orderBy'] }
        : { orderBy?: PropertyGroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PropertyGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PropertyGroup model
   */
  readonly fields: PropertyGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PropertyGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    itemType<T extends PropertyGroup$itemTypeArgs<ExtArgs> = {}>(args?: Subset<T, PropertyGroup$itemTypeArgs<ExtArgs>>): Prisma__ItemTypeClient<$Result.GetResult<Prisma.$ItemTypePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    properties<T extends PropertyGroup$propertiesArgs<ExtArgs> = {}>(args?: Subset<T, PropertyGroup$propertiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the PropertyGroup model
   */ 
  interface PropertyGroupFieldRefs {
    readonly id: FieldRef<"PropertyGroup", 'Int'>
    readonly order: FieldRef<"PropertyGroup", 'Int'>
    readonly name: FieldRef<"PropertyGroup", 'String'>
    readonly itemTypeId: FieldRef<"PropertyGroup", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * PropertyGroup findUnique
   */
  export type PropertyGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyGroup
     */
    select?: PropertyGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PropertyGroupInclude<ExtArgs> | null
    /**
     * Filter, which PropertyGroup to fetch.
     */
    where: PropertyGroupWhereUniqueInput
  }


  /**
   * PropertyGroup findUniqueOrThrow
   */
  export type PropertyGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyGroup
     */
    select?: PropertyGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PropertyGroupInclude<ExtArgs> | null
    /**
     * Filter, which PropertyGroup to fetch.
     */
    where: PropertyGroupWhereUniqueInput
  }


  /**
   * PropertyGroup findFirst
   */
  export type PropertyGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyGroup
     */
    select?: PropertyGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PropertyGroupInclude<ExtArgs> | null
    /**
     * Filter, which PropertyGroup to fetch.
     */
    where?: PropertyGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyGroups to fetch.
     */
    orderBy?: PropertyGroupOrderByWithRelationInput | PropertyGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyGroups.
     */
    cursor?: PropertyGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyGroups.
     */
    distinct?: PropertyGroupScalarFieldEnum | PropertyGroupScalarFieldEnum[]
  }


  /**
   * PropertyGroup findFirstOrThrow
   */
  export type PropertyGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyGroup
     */
    select?: PropertyGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PropertyGroupInclude<ExtArgs> | null
    /**
     * Filter, which PropertyGroup to fetch.
     */
    where?: PropertyGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyGroups to fetch.
     */
    orderBy?: PropertyGroupOrderByWithRelationInput | PropertyGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyGroups.
     */
    cursor?: PropertyGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyGroups.
     */
    distinct?: PropertyGroupScalarFieldEnum | PropertyGroupScalarFieldEnum[]
  }


  /**
   * PropertyGroup findMany
   */
  export type PropertyGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyGroup
     */
    select?: PropertyGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PropertyGroupInclude<ExtArgs> | null
    /**
     * Filter, which PropertyGroups to fetch.
     */
    where?: PropertyGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyGroups to fetch.
     */
    orderBy?: PropertyGroupOrderByWithRelationInput | PropertyGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PropertyGroups.
     */
    cursor?: PropertyGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyGroups.
     */
    skip?: number
    distinct?: PropertyGroupScalarFieldEnum | PropertyGroupScalarFieldEnum[]
  }


  /**
   * PropertyGroup create
   */
  export type PropertyGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyGroup
     */
    select?: PropertyGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PropertyGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a PropertyGroup.
     */
    data: XOR<PropertyGroupCreateInput, PropertyGroupUncheckedCreateInput>
  }


  /**
   * PropertyGroup createMany
   */
  export type PropertyGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PropertyGroups.
     */
    data: PropertyGroupCreateManyInput | PropertyGroupCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * PropertyGroup update
   */
  export type PropertyGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyGroup
     */
    select?: PropertyGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PropertyGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a PropertyGroup.
     */
    data: XOR<PropertyGroupUpdateInput, PropertyGroupUncheckedUpdateInput>
    /**
     * Choose, which PropertyGroup to update.
     */
    where: PropertyGroupWhereUniqueInput
  }


  /**
   * PropertyGroup updateMany
   */
  export type PropertyGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PropertyGroups.
     */
    data: XOR<PropertyGroupUpdateManyMutationInput, PropertyGroupUncheckedUpdateManyInput>
    /**
     * Filter which PropertyGroups to update
     */
    where?: PropertyGroupWhereInput
  }


  /**
   * PropertyGroup upsert
   */
  export type PropertyGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyGroup
     */
    select?: PropertyGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PropertyGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the PropertyGroup to update in case it exists.
     */
    where: PropertyGroupWhereUniqueInput
    /**
     * In case the PropertyGroup found by the `where` argument doesn't exist, create a new PropertyGroup with this data.
     */
    create: XOR<PropertyGroupCreateInput, PropertyGroupUncheckedCreateInput>
    /**
     * In case the PropertyGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyGroupUpdateInput, PropertyGroupUncheckedUpdateInput>
  }


  /**
   * PropertyGroup delete
   */
  export type PropertyGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyGroup
     */
    select?: PropertyGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PropertyGroupInclude<ExtArgs> | null
    /**
     * Filter which PropertyGroup to delete.
     */
    where: PropertyGroupWhereUniqueInput
  }


  /**
   * PropertyGroup deleteMany
   */
  export type PropertyGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyGroups to delete
     */
    where?: PropertyGroupWhereInput
  }


  /**
   * PropertyGroup.itemType
   */
  export type PropertyGroup$itemTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemType
     */
    select?: ItemTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemTypeInclude<ExtArgs> | null
    where?: ItemTypeWhereInput
  }


  /**
   * PropertyGroup.properties
   */
  export type PropertyGroup$propertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    cursor?: PropertyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }


  /**
   * PropertyGroup without action
   */
  export type PropertyGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyGroup
     */
    select?: PropertyGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PropertyGroupInclude<ExtArgs> | null
  }



  /**
   * Model Property
   */

  export type AggregateProperty = {
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  export type PropertyAvgAggregateOutputType = {
    id: number | null
    order: number | null
    groupId: number | null
  }

  export type PropertySumAggregateOutputType = {
    id: number | null
    order: number | null
    groupId: number | null
  }

  export type PropertyMinAggregateOutputType = {
    id: number | null
    order: number | null
    name: string | null
    variation: string | null
    groupId: number | null
  }

  export type PropertyMaxAggregateOutputType = {
    id: number | null
    order: number | null
    name: string | null
    variation: string | null
    groupId: number | null
  }

  export type PropertyCountAggregateOutputType = {
    id: number
    order: number
    name: number
    variation: number
    groupId: number
    _all: number
  }


  export type PropertyAvgAggregateInputType = {
    id?: true
    order?: true
    groupId?: true
  }

  export type PropertySumAggregateInputType = {
    id?: true
    order?: true
    groupId?: true
  }

  export type PropertyMinAggregateInputType = {
    id?: true
    order?: true
    name?: true
    variation?: true
    groupId?: true
  }

  export type PropertyMaxAggregateInputType = {
    id?: true
    order?: true
    name?: true
    variation?: true
    groupId?: true
  }

  export type PropertyCountAggregateInputType = {
    id?: true
    order?: true
    name?: true
    variation?: true
    groupId?: true
    _all?: true
  }

  export type PropertyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Property to aggregate.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Properties
    **/
    _count?: true | PropertyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyMaxAggregateInputType
  }

  export type GetPropertyAggregateType<T extends PropertyAggregateArgs> = {
        [P in keyof T & keyof AggregateProperty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProperty[P]>
      : GetScalarType<T[P], AggregateProperty[P]>
  }




  export type PropertyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithAggregationInput | PropertyOrderByWithAggregationInput[]
    by: PropertyScalarFieldEnum[] | PropertyScalarFieldEnum
    having?: PropertyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyCountAggregateInputType | true
    _avg?: PropertyAvgAggregateInputType
    _sum?: PropertySumAggregateInputType
    _min?: PropertyMinAggregateInputType
    _max?: PropertyMaxAggregateInputType
  }

  export type PropertyGroupByOutputType = {
    id: number
    order: number | null
    name: string | null
    variation: string | null
    groupId: number | null
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  type GetPropertyGroupByPayload<T extends PropertyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyGroupByOutputType[P]>
        }
      >
    >


  export type PropertySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    name?: boolean
    variation?: boolean
    groupId?: boolean
    group?: boolean | Property$groupArgs<ExtArgs>
    itemProperties?: boolean | Property$itemPropertiesArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectScalar = {
    id?: boolean
    order?: boolean
    name?: boolean
    variation?: boolean
    groupId?: boolean
  }

  export type PropertyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | Property$groupArgs<ExtArgs>
    itemProperties?: boolean | Property$itemPropertiesArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PropertyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Property"
    objects: {
      group: Prisma.$PropertyGroupPayload<ExtArgs> | null
      itemProperties: Prisma.$ItemPropertyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      order: number | null
      name: string | null
      variation: string | null
      groupId: number | null
    }, ExtArgs["result"]["property"]>
    composites: {}
  }


  type PropertyGetPayload<S extends boolean | null | undefined | PropertyDefaultArgs> = $Result.GetResult<Prisma.$PropertyPayload, S>

  type PropertyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PropertyFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PropertyCountAggregateInputType | true
    }

  export interface PropertyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Property'], meta: { name: 'Property' } }
    /**
     * Find zero or one Property that matches the filter.
     * @param {PropertyFindUniqueArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PropertyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PropertyFindUniqueArgs<ExtArgs>>
    ): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Property that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PropertyFindUniqueOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PropertyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PropertyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Property that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PropertyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PropertyFindFirstArgs<ExtArgs>>
    ): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Property that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PropertyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PropertyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Properties
     * const properties = await prisma.property.findMany()
     * 
     * // Get first 10 Properties
     * const properties = await prisma.property.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyWithIdOnly = await prisma.property.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PropertyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PropertyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Property.
     * @param {PropertyCreateArgs} args - Arguments to create a Property.
     * @example
     * // Create one Property
     * const Property = await prisma.property.create({
     *   data: {
     *     // ... data to create a Property
     *   }
     * })
     * 
    **/
    create<T extends PropertyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PropertyCreateArgs<ExtArgs>>
    ): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Properties.
     *     @param {PropertyCreateManyArgs} args - Arguments to create many Properties.
     *     @example
     *     // Create many Properties
     *     const property = await prisma.property.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PropertyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PropertyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Property.
     * @param {PropertyDeleteArgs} args - Arguments to delete one Property.
     * @example
     * // Delete one Property
     * const Property = await prisma.property.delete({
     *   where: {
     *     // ... filter to delete one Property
     *   }
     * })
     * 
    **/
    delete<T extends PropertyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PropertyDeleteArgs<ExtArgs>>
    ): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Property.
     * @param {PropertyUpdateArgs} args - Arguments to update one Property.
     * @example
     * // Update one Property
     * const property = await prisma.property.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PropertyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PropertyUpdateArgs<ExtArgs>>
    ): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Properties.
     * @param {PropertyDeleteManyArgs} args - Arguments to filter Properties to delete.
     * @example
     * // Delete a few Properties
     * const { count } = await prisma.property.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PropertyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PropertyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PropertyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PropertyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Property.
     * @param {PropertyUpsertArgs} args - Arguments to update or create a Property.
     * @example
     * // Update or create a Property
     * const property = await prisma.property.upsert({
     *   create: {
     *     // ... data to create a Property
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Property we want to update
     *   }
     * })
    **/
    upsert<T extends PropertyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PropertyUpsertArgs<ExtArgs>>
    ): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCountArgs} args - Arguments to filter Properties to count.
     * @example
     * // Count the number of Properties
     * const count = await prisma.property.count({
     *   where: {
     *     // ... the filter for the Properties we want to count
     *   }
     * })
    **/
    count<T extends PropertyCountArgs>(
      args?: Subset<T, PropertyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PropertyAggregateArgs>(args: Subset<T, PropertyAggregateArgs>): Prisma.PrismaPromise<GetPropertyAggregateType<T>>

    /**
     * Group by Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyGroupByArgs} args - Group by arguments.
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
      T extends PropertyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyGroupByArgs['orderBy'] }
        : { orderBy?: PropertyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PropertyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Property model
   */
  readonly fields: PropertyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Property.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    group<T extends Property$groupArgs<ExtArgs> = {}>(args?: Subset<T, Property$groupArgs<ExtArgs>>): Prisma__PropertyGroupClient<$Result.GetResult<Prisma.$PropertyGroupPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    itemProperties<T extends Property$itemPropertiesArgs<ExtArgs> = {}>(args?: Subset<T, Property$itemPropertiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPropertyPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Property model
   */ 
  interface PropertyFieldRefs {
    readonly id: FieldRef<"Property", 'Int'>
    readonly order: FieldRef<"Property", 'Int'>
    readonly name: FieldRef<"Property", 'String'>
    readonly variation: FieldRef<"Property", 'String'>
    readonly groupId: FieldRef<"Property", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Property findUnique
   */
  export type PropertyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }


  /**
   * Property findUniqueOrThrow
   */
  export type PropertyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }


  /**
   * Property findFirst
   */
  export type PropertyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }


  /**
   * Property findFirstOrThrow
   */
  export type PropertyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }


  /**
   * Property findMany
   */
  export type PropertyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Properties to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }


  /**
   * Property create
   */
  export type PropertyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to create a Property.
     */
    data?: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
  }


  /**
   * Property createMany
   */
  export type PropertyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Property update
   */
  export type PropertyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to update a Property.
     */
    data: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
    /**
     * Choose, which Property to update.
     */
    where: PropertyWhereUniqueInput
  }


  /**
   * Property updateMany
   */
  export type PropertyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
  }


  /**
   * Property upsert
   */
  export type PropertyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The filter to search for the Property to update in case it exists.
     */
    where: PropertyWhereUniqueInput
    /**
     * In case the Property found by the `where` argument doesn't exist, create a new Property with this data.
     */
    create: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
    /**
     * In case the Property was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
  }


  /**
   * Property delete
   */
  export type PropertyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter which Property to delete.
     */
    where: PropertyWhereUniqueInput
  }


  /**
   * Property deleteMany
   */
  export type PropertyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Properties to delete
     */
    where?: PropertyWhereInput
  }


  /**
   * Property.group
   */
  export type Property$groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyGroup
     */
    select?: PropertyGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PropertyGroupInclude<ExtArgs> | null
    where?: PropertyGroupWhereInput
  }


  /**
   * Property.itemProperties
   */
  export type Property$itemPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemProperty
     */
    select?: ItemPropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemPropertyInclude<ExtArgs> | null
    where?: ItemPropertyWhereInput
    orderBy?: ItemPropertyOrderByWithRelationInput | ItemPropertyOrderByWithRelationInput[]
    cursor?: ItemPropertyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemPropertyScalarFieldEnum | ItemPropertyScalarFieldEnum[]
  }


  /**
   * Property without action
   */
  export type PropertyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PropertyInclude<ExtArgs> | null
  }



  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    id: number | null
    weight: Decimal | null
    brandLabelId: number | null
  }

  export type ItemSumAggregateOutputType = {
    id: number | null
    weight: Decimal | null
    brandLabelId: number | null
  }

  export type ItemMinAggregateOutputType = {
    id: number | null
    type: string | null
    name: string | null
    notes: string | null
    weight: Decimal | null
    weightUnit: string | null
    brandLabelId: number | null
  }

  export type ItemMaxAggregateOutputType = {
    id: number | null
    type: string | null
    name: string | null
    notes: string | null
    weight: Decimal | null
    weightUnit: string | null
    brandLabelId: number | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    type: number
    name: number
    notes: number
    weight: number
    weightUnit: number
    brandLabelId: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    id?: true
    weight?: true
    brandLabelId?: true
  }

  export type ItemSumAggregateInputType = {
    id?: true
    weight?: true
    brandLabelId?: true
  }

  export type ItemMinAggregateInputType = {
    id?: true
    type?: true
    name?: true
    notes?: true
    weight?: true
    weightUnit?: true
    brandLabelId?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    type?: true
    name?: true
    notes?: true
    weight?: true
    weightUnit?: true
    brandLabelId?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    type?: true
    name?: true
    notes?: true
    weight?: true
    weightUnit?: true
    brandLabelId?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithAggregationInput | ItemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    id: number
    type: string | null
    name: string | null
    notes: string | null
    weight: Decimal | null
    weightUnit: string | null
    brandLabelId: number | null
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    notes?: boolean
    weight?: boolean
    weightUnit?: boolean
    brandLabelId?: boolean
    brandLabel?: boolean | Item$brandLabelArgs<ExtArgs>
    properties?: boolean | Item$propertiesArgs<ExtArgs>
    inClaims?: boolean | Item$inClaimsArgs<ExtArgs>
    hasAssemblyItems?: boolean | Item$hasAssemblyItemsArgs<ExtArgs>
    inAssemblies?: boolean | Item$inAssembliesArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectScalar = {
    id?: boolean
    type?: boolean
    name?: boolean
    notes?: boolean
    weight?: boolean
    weightUnit?: boolean
    brandLabelId?: boolean
  }

  export type ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brandLabel?: boolean | Item$brandLabelArgs<ExtArgs>
    properties?: boolean | Item$propertiesArgs<ExtArgs>
    inClaims?: boolean | Item$inClaimsArgs<ExtArgs>
    hasAssemblyItems?: boolean | Item$hasAssemblyItemsArgs<ExtArgs>
    inAssemblies?: boolean | Item$inAssembliesArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {
      brandLabel: Prisma.$BrandLabelPayload<ExtArgs> | null
      properties: Prisma.$ItemPropertyPayload<ExtArgs>[]
      inClaims: Prisma.$ClaimPayload<ExtArgs>[]
      hasAssemblyItems: Prisma.$AssemblyPayload<ExtArgs>[]
      inAssemblies: Prisma.$AssemblyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string | null
      name: string | null
      notes: string | null
      weight: Prisma.Decimal | null
      weightUnit: string | null
      brandLabelId: number | null
    }, ExtArgs["result"]["item"]>
    composites: {}
  }


  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = $Result.GetResult<Prisma.$ItemPayload, S>

  type ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ItemCountAggregateInputType | true
    }

  export interface ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item'], meta: { name: 'Item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ItemFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>
    ): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Item that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ItemFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>
    ): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ItemFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
    **/
    create<T extends ItemCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ItemCreateArgs<ExtArgs>>
    ): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Items.
     *     @param {ItemCreateManyArgs} args - Arguments to create many Items.
     *     @example
     *     // Create many Items
     *     const item = await prisma.item.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ItemCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
    **/
    delete<T extends ItemDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>
    ): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ItemUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>
    ): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ItemDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ItemUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
    **/
    upsert<T extends ItemUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>
    ): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
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
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item model
   */
  readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    brandLabel<T extends Item$brandLabelArgs<ExtArgs> = {}>(args?: Subset<T, Item$brandLabelArgs<ExtArgs>>): Prisma__BrandLabelClient<$Result.GetResult<Prisma.$BrandLabelPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    properties<T extends Item$propertiesArgs<ExtArgs> = {}>(args?: Subset<T, Item$propertiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPropertyPayload<ExtArgs>, T, 'findMany'> | Null>;

    inClaims<T extends Item$inClaimsArgs<ExtArgs> = {}>(args?: Subset<T, Item$inClaimsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, 'findMany'> | Null>;

    hasAssemblyItems<T extends Item$hasAssemblyItemsArgs<ExtArgs> = {}>(args?: Subset<T, Item$hasAssemblyItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssemblyPayload<ExtArgs>, T, 'findMany'> | Null>;

    inAssemblies<T extends Item$inAssembliesArgs<ExtArgs> = {}>(args?: Subset<T, Item$inAssembliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssemblyPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Item model
   */ 
  interface ItemFieldRefs {
    readonly id: FieldRef<"Item", 'Int'>
    readonly type: FieldRef<"Item", 'String'>
    readonly name: FieldRef<"Item", 'String'>
    readonly notes: FieldRef<"Item", 'String'>
    readonly weight: FieldRef<"Item", 'Decimal'>
    readonly weightUnit: FieldRef<"Item", 'String'>
    readonly brandLabelId: FieldRef<"Item", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }


  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }


  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }


  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }


  /**
   * Item findMany
   */
  export type ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }


  /**
   * Item create
   */
  export type ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to create a Item.
     */
    data?: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }


  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Item update
   */
  export type ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput
  }


  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
  }


  /**
   * Item upsert
   */
  export type ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }


  /**
   * Item delete
   */
  export type ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput
  }


  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput
  }


  /**
   * Item.brandLabel
   */
  export type Item$brandLabelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandLabel
     */
    select?: BrandLabelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandLabelInclude<ExtArgs> | null
    where?: BrandLabelWhereInput
  }


  /**
   * Item.properties
   */
  export type Item$propertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemProperty
     */
    select?: ItemPropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemPropertyInclude<ExtArgs> | null
    where?: ItemPropertyWhereInput
    orderBy?: ItemPropertyOrderByWithRelationInput | ItemPropertyOrderByWithRelationInput[]
    cursor?: ItemPropertyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemPropertyScalarFieldEnum | ItemPropertyScalarFieldEnum[]
  }


  /**
   * Item.inClaims
   */
  export type Item$inClaimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClaimInclude<ExtArgs> | null
    where?: ClaimWhereInput
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    cursor?: ClaimWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }


  /**
   * Item.hasAssemblyItems
   */
  export type Item$hasAssemblyItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assembly
     */
    select?: AssemblySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssemblyInclude<ExtArgs> | null
    where?: AssemblyWhereInput
    orderBy?: AssemblyOrderByWithRelationInput | AssemblyOrderByWithRelationInput[]
    cursor?: AssemblyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssemblyScalarFieldEnum | AssemblyScalarFieldEnum[]
  }


  /**
   * Item.inAssemblies
   */
  export type Item$inAssembliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assembly
     */
    select?: AssemblySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssemblyInclude<ExtArgs> | null
    where?: AssemblyWhereInput
    orderBy?: AssemblyOrderByWithRelationInput | AssemblyOrderByWithRelationInput[]
    cursor?: AssemblyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssemblyScalarFieldEnum | AssemblyScalarFieldEnum[]
  }


  /**
   * Item without action
   */
  export type ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
  }



  /**
   * Model ItemProperty
   */

  export type AggregateItemProperty = {
    _count: ItemPropertyCountAggregateOutputType | null
    _avg: ItemPropertyAvgAggregateOutputType | null
    _sum: ItemPropertySumAggregateOutputType | null
    _min: ItemPropertyMinAggregateOutputType | null
    _max: ItemPropertyMaxAggregateOutputType | null
  }

  export type ItemPropertyAvgAggregateOutputType = {
    id: number | null
    itemId: number | null
    propertyId: number | null
  }

  export type ItemPropertySumAggregateOutputType = {
    id: number | null
    itemId: number | null
    propertyId: number | null
  }

  export type ItemPropertyMinAggregateOutputType = {
    id: number | null
    itemId: number | null
    propertyId: number | null
    value: string | null
  }

  export type ItemPropertyMaxAggregateOutputType = {
    id: number | null
    itemId: number | null
    propertyId: number | null
    value: string | null
  }

  export type ItemPropertyCountAggregateOutputType = {
    id: number
    itemId: number
    propertyId: number
    value: number
    _all: number
  }


  export type ItemPropertyAvgAggregateInputType = {
    id?: true
    itemId?: true
    propertyId?: true
  }

  export type ItemPropertySumAggregateInputType = {
    id?: true
    itemId?: true
    propertyId?: true
  }

  export type ItemPropertyMinAggregateInputType = {
    id?: true
    itemId?: true
    propertyId?: true
    value?: true
  }

  export type ItemPropertyMaxAggregateInputType = {
    id?: true
    itemId?: true
    propertyId?: true
    value?: true
  }

  export type ItemPropertyCountAggregateInputType = {
    id?: true
    itemId?: true
    propertyId?: true
    value?: true
    _all?: true
  }

  export type ItemPropertyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemProperty to aggregate.
     */
    where?: ItemPropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemProperties to fetch.
     */
    orderBy?: ItemPropertyOrderByWithRelationInput | ItemPropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemPropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemProperties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemProperties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemProperties
    **/
    _count?: true | ItemPropertyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemPropertyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemPropertySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemPropertyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemPropertyMaxAggregateInputType
  }

  export type GetItemPropertyAggregateType<T extends ItemPropertyAggregateArgs> = {
        [P in keyof T & keyof AggregateItemProperty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemProperty[P]>
      : GetScalarType<T[P], AggregateItemProperty[P]>
  }




  export type ItemPropertyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemPropertyWhereInput
    orderBy?: ItemPropertyOrderByWithAggregationInput | ItemPropertyOrderByWithAggregationInput[]
    by: ItemPropertyScalarFieldEnum[] | ItemPropertyScalarFieldEnum
    having?: ItemPropertyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemPropertyCountAggregateInputType | true
    _avg?: ItemPropertyAvgAggregateInputType
    _sum?: ItemPropertySumAggregateInputType
    _min?: ItemPropertyMinAggregateInputType
    _max?: ItemPropertyMaxAggregateInputType
  }

  export type ItemPropertyGroupByOutputType = {
    id: number
    itemId: number | null
    propertyId: number | null
    value: string | null
    _count: ItemPropertyCountAggregateOutputType | null
    _avg: ItemPropertyAvgAggregateOutputType | null
    _sum: ItemPropertySumAggregateOutputType | null
    _min: ItemPropertyMinAggregateOutputType | null
    _max: ItemPropertyMaxAggregateOutputType | null
  }

  type GetItemPropertyGroupByPayload<T extends ItemPropertyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemPropertyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemPropertyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemPropertyGroupByOutputType[P]>
            : GetScalarType<T[P], ItemPropertyGroupByOutputType[P]>
        }
      >
    >


  export type ItemPropertySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemId?: boolean
    propertyId?: boolean
    value?: boolean
    item?: boolean | ItemProperty$itemArgs<ExtArgs>
    property?: boolean | ItemProperty$propertyArgs<ExtArgs>
  }, ExtArgs["result"]["itemProperty"]>

  export type ItemPropertySelectScalar = {
    id?: boolean
    itemId?: boolean
    propertyId?: boolean
    value?: boolean
  }

  export type ItemPropertyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemProperty$itemArgs<ExtArgs>
    property?: boolean | ItemProperty$propertyArgs<ExtArgs>
  }


  export type $ItemPropertyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemProperty"
    objects: {
      item: Prisma.$ItemPayload<ExtArgs> | null
      property: Prisma.$PropertyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      itemId: number | null
      propertyId: number | null
      value: string | null
    }, ExtArgs["result"]["itemProperty"]>
    composites: {}
  }


  type ItemPropertyGetPayload<S extends boolean | null | undefined | ItemPropertyDefaultArgs> = $Result.GetResult<Prisma.$ItemPropertyPayload, S>

  type ItemPropertyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ItemPropertyFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ItemPropertyCountAggregateInputType | true
    }

  export interface ItemPropertyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemProperty'], meta: { name: 'ItemProperty' } }
    /**
     * Find zero or one ItemProperty that matches the filter.
     * @param {ItemPropertyFindUniqueArgs} args - Arguments to find a ItemProperty
     * @example
     * // Get one ItemProperty
     * const itemProperty = await prisma.itemProperty.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ItemPropertyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ItemPropertyFindUniqueArgs<ExtArgs>>
    ): Prisma__ItemPropertyClient<$Result.GetResult<Prisma.$ItemPropertyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ItemProperty that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ItemPropertyFindUniqueOrThrowArgs} args - Arguments to find a ItemProperty
     * @example
     * // Get one ItemProperty
     * const itemProperty = await prisma.itemProperty.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ItemPropertyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemPropertyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ItemPropertyClient<$Result.GetResult<Prisma.$ItemPropertyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ItemProperty that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPropertyFindFirstArgs} args - Arguments to find a ItemProperty
     * @example
     * // Get one ItemProperty
     * const itemProperty = await prisma.itemProperty.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ItemPropertyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemPropertyFindFirstArgs<ExtArgs>>
    ): Prisma__ItemPropertyClient<$Result.GetResult<Prisma.$ItemPropertyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ItemProperty that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPropertyFindFirstOrThrowArgs} args - Arguments to find a ItemProperty
     * @example
     * // Get one ItemProperty
     * const itemProperty = await prisma.itemProperty.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ItemPropertyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemPropertyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ItemPropertyClient<$Result.GetResult<Prisma.$ItemPropertyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ItemProperties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPropertyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemProperties
     * const itemProperties = await prisma.itemProperty.findMany()
     * 
     * // Get first 10 ItemProperties
     * const itemProperties = await prisma.itemProperty.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemPropertyWithIdOnly = await prisma.itemProperty.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ItemPropertyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemPropertyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPropertyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ItemProperty.
     * @param {ItemPropertyCreateArgs} args - Arguments to create a ItemProperty.
     * @example
     * // Create one ItemProperty
     * const ItemProperty = await prisma.itemProperty.create({
     *   data: {
     *     // ... data to create a ItemProperty
     *   }
     * })
     * 
    **/
    create<T extends ItemPropertyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ItemPropertyCreateArgs<ExtArgs>>
    ): Prisma__ItemPropertyClient<$Result.GetResult<Prisma.$ItemPropertyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ItemProperties.
     *     @param {ItemPropertyCreateManyArgs} args - Arguments to create many ItemProperties.
     *     @example
     *     // Create many ItemProperties
     *     const itemProperty = await prisma.itemProperty.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ItemPropertyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemPropertyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ItemProperty.
     * @param {ItemPropertyDeleteArgs} args - Arguments to delete one ItemProperty.
     * @example
     * // Delete one ItemProperty
     * const ItemProperty = await prisma.itemProperty.delete({
     *   where: {
     *     // ... filter to delete one ItemProperty
     *   }
     * })
     * 
    **/
    delete<T extends ItemPropertyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ItemPropertyDeleteArgs<ExtArgs>>
    ): Prisma__ItemPropertyClient<$Result.GetResult<Prisma.$ItemPropertyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ItemProperty.
     * @param {ItemPropertyUpdateArgs} args - Arguments to update one ItemProperty.
     * @example
     * // Update one ItemProperty
     * const itemProperty = await prisma.itemProperty.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ItemPropertyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ItemPropertyUpdateArgs<ExtArgs>>
    ): Prisma__ItemPropertyClient<$Result.GetResult<Prisma.$ItemPropertyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ItemProperties.
     * @param {ItemPropertyDeleteManyArgs} args - Arguments to filter ItemProperties to delete.
     * @example
     * // Delete a few ItemProperties
     * const { count } = await prisma.itemProperty.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ItemPropertyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemPropertyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemProperties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPropertyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemProperties
     * const itemProperty = await prisma.itemProperty.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ItemPropertyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ItemPropertyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ItemProperty.
     * @param {ItemPropertyUpsertArgs} args - Arguments to update or create a ItemProperty.
     * @example
     * // Update or create a ItemProperty
     * const itemProperty = await prisma.itemProperty.upsert({
     *   create: {
     *     // ... data to create a ItemProperty
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemProperty we want to update
     *   }
     * })
    **/
    upsert<T extends ItemPropertyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ItemPropertyUpsertArgs<ExtArgs>>
    ): Prisma__ItemPropertyClient<$Result.GetResult<Prisma.$ItemPropertyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ItemProperties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPropertyCountArgs} args - Arguments to filter ItemProperties to count.
     * @example
     * // Count the number of ItemProperties
     * const count = await prisma.itemProperty.count({
     *   where: {
     *     // ... the filter for the ItemProperties we want to count
     *   }
     * })
    **/
    count<T extends ItemPropertyCountArgs>(
      args?: Subset<T, ItemPropertyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemPropertyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemProperty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPropertyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemPropertyAggregateArgs>(args: Subset<T, ItemPropertyAggregateArgs>): Prisma.PrismaPromise<GetItemPropertyAggregateType<T>>

    /**
     * Group by ItemProperty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPropertyGroupByArgs} args - Group by arguments.
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
      T extends ItemPropertyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemPropertyGroupByArgs['orderBy'] }
        : { orderBy?: ItemPropertyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ItemPropertyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemPropertyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemProperty model
   */
  readonly fields: ItemPropertyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemProperty.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemPropertyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    item<T extends ItemProperty$itemArgs<ExtArgs> = {}>(args?: Subset<T, ItemProperty$itemArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    property<T extends ItemProperty$propertyArgs<ExtArgs> = {}>(args?: Subset<T, ItemProperty$propertyArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

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
   * Fields of the ItemProperty model
   */ 
  interface ItemPropertyFieldRefs {
    readonly id: FieldRef<"ItemProperty", 'Int'>
    readonly itemId: FieldRef<"ItemProperty", 'Int'>
    readonly propertyId: FieldRef<"ItemProperty", 'Int'>
    readonly value: FieldRef<"ItemProperty", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ItemProperty findUnique
   */
  export type ItemPropertyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemProperty
     */
    select?: ItemPropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemPropertyInclude<ExtArgs> | null
    /**
     * Filter, which ItemProperty to fetch.
     */
    where: ItemPropertyWhereUniqueInput
  }


  /**
   * ItemProperty findUniqueOrThrow
   */
  export type ItemPropertyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemProperty
     */
    select?: ItemPropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemPropertyInclude<ExtArgs> | null
    /**
     * Filter, which ItemProperty to fetch.
     */
    where: ItemPropertyWhereUniqueInput
  }


  /**
   * ItemProperty findFirst
   */
  export type ItemPropertyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemProperty
     */
    select?: ItemPropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemPropertyInclude<ExtArgs> | null
    /**
     * Filter, which ItemProperty to fetch.
     */
    where?: ItemPropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemProperties to fetch.
     */
    orderBy?: ItemPropertyOrderByWithRelationInput | ItemPropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemProperties.
     */
    cursor?: ItemPropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemProperties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemProperties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemProperties.
     */
    distinct?: ItemPropertyScalarFieldEnum | ItemPropertyScalarFieldEnum[]
  }


  /**
   * ItemProperty findFirstOrThrow
   */
  export type ItemPropertyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemProperty
     */
    select?: ItemPropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemPropertyInclude<ExtArgs> | null
    /**
     * Filter, which ItemProperty to fetch.
     */
    where?: ItemPropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemProperties to fetch.
     */
    orderBy?: ItemPropertyOrderByWithRelationInput | ItemPropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemProperties.
     */
    cursor?: ItemPropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemProperties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemProperties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemProperties.
     */
    distinct?: ItemPropertyScalarFieldEnum | ItemPropertyScalarFieldEnum[]
  }


  /**
   * ItemProperty findMany
   */
  export type ItemPropertyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemProperty
     */
    select?: ItemPropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemPropertyInclude<ExtArgs> | null
    /**
     * Filter, which ItemProperties to fetch.
     */
    where?: ItemPropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemProperties to fetch.
     */
    orderBy?: ItemPropertyOrderByWithRelationInput | ItemPropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemProperties.
     */
    cursor?: ItemPropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemProperties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemProperties.
     */
    skip?: number
    distinct?: ItemPropertyScalarFieldEnum | ItemPropertyScalarFieldEnum[]
  }


  /**
   * ItemProperty create
   */
  export type ItemPropertyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemProperty
     */
    select?: ItemPropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemPropertyInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemProperty.
     */
    data?: XOR<ItemPropertyCreateInput, ItemPropertyUncheckedCreateInput>
  }


  /**
   * ItemProperty createMany
   */
  export type ItemPropertyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemProperties.
     */
    data: ItemPropertyCreateManyInput | ItemPropertyCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ItemProperty update
   */
  export type ItemPropertyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemProperty
     */
    select?: ItemPropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemPropertyInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemProperty.
     */
    data: XOR<ItemPropertyUpdateInput, ItemPropertyUncheckedUpdateInput>
    /**
     * Choose, which ItemProperty to update.
     */
    where: ItemPropertyWhereUniqueInput
  }


  /**
   * ItemProperty updateMany
   */
  export type ItemPropertyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemProperties.
     */
    data: XOR<ItemPropertyUpdateManyMutationInput, ItemPropertyUncheckedUpdateManyInput>
    /**
     * Filter which ItemProperties to update
     */
    where?: ItemPropertyWhereInput
  }


  /**
   * ItemProperty upsert
   */
  export type ItemPropertyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemProperty
     */
    select?: ItemPropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemPropertyInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemProperty to update in case it exists.
     */
    where: ItemPropertyWhereUniqueInput
    /**
     * In case the ItemProperty found by the `where` argument doesn't exist, create a new ItemProperty with this data.
     */
    create: XOR<ItemPropertyCreateInput, ItemPropertyUncheckedCreateInput>
    /**
     * In case the ItemProperty was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemPropertyUpdateInput, ItemPropertyUncheckedUpdateInput>
  }


  /**
   * ItemProperty delete
   */
  export type ItemPropertyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemProperty
     */
    select?: ItemPropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemPropertyInclude<ExtArgs> | null
    /**
     * Filter which ItemProperty to delete.
     */
    where: ItemPropertyWhereUniqueInput
  }


  /**
   * ItemProperty deleteMany
   */
  export type ItemPropertyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemProperties to delete
     */
    where?: ItemPropertyWhereInput
  }


  /**
   * ItemProperty.item
   */
  export type ItemProperty$itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
    where?: ItemWhereInput
  }


  /**
   * ItemProperty.property
   */
  export type ItemProperty$propertyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
  }


  /**
   * ItemProperty without action
   */
  export type ItemPropertyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemProperty
     */
    select?: ItemPropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemPropertyInclude<ExtArgs> | null
  }



  /**
   * Model Assembly
   */

  export type AggregateAssembly = {
    _count: AssemblyCountAggregateOutputType | null
    _avg: AssemblyAvgAggregateOutputType | null
    _sum: AssemblySumAggregateOutputType | null
    _min: AssemblyMinAggregateOutputType | null
    _max: AssemblyMaxAggregateOutputType | null
  }

  export type AssemblyAvgAggregateOutputType = {
    id: number | null
    assemblyItemId: number | null
    itemId: number | null
  }

  export type AssemblySumAggregateOutputType = {
    id: number | null
    assemblyItemId: number | null
    itemId: number | null
  }

  export type AssemblyMinAggregateOutputType = {
    id: number | null
    assemblyItemId: number | null
    itemId: number | null
  }

  export type AssemblyMaxAggregateOutputType = {
    id: number | null
    assemblyItemId: number | null
    itemId: number | null
  }

  export type AssemblyCountAggregateOutputType = {
    id: number
    assemblyItemId: number
    itemId: number
    _all: number
  }


  export type AssemblyAvgAggregateInputType = {
    id?: true
    assemblyItemId?: true
    itemId?: true
  }

  export type AssemblySumAggregateInputType = {
    id?: true
    assemblyItemId?: true
    itemId?: true
  }

  export type AssemblyMinAggregateInputType = {
    id?: true
    assemblyItemId?: true
    itemId?: true
  }

  export type AssemblyMaxAggregateInputType = {
    id?: true
    assemblyItemId?: true
    itemId?: true
  }

  export type AssemblyCountAggregateInputType = {
    id?: true
    assemblyItemId?: true
    itemId?: true
    _all?: true
  }

  export type AssemblyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assembly to aggregate.
     */
    where?: AssemblyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assemblies to fetch.
     */
    orderBy?: AssemblyOrderByWithRelationInput | AssemblyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssemblyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assemblies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assemblies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assemblies
    **/
    _count?: true | AssemblyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssemblyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssemblySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssemblyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssemblyMaxAggregateInputType
  }

  export type GetAssemblyAggregateType<T extends AssemblyAggregateArgs> = {
        [P in keyof T & keyof AggregateAssembly]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssembly[P]>
      : GetScalarType<T[P], AggregateAssembly[P]>
  }




  export type AssemblyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssemblyWhereInput
    orderBy?: AssemblyOrderByWithAggregationInput | AssemblyOrderByWithAggregationInput[]
    by: AssemblyScalarFieldEnum[] | AssemblyScalarFieldEnum
    having?: AssemblyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssemblyCountAggregateInputType | true
    _avg?: AssemblyAvgAggregateInputType
    _sum?: AssemblySumAggregateInputType
    _min?: AssemblyMinAggregateInputType
    _max?: AssemblyMaxAggregateInputType
  }

  export type AssemblyGroupByOutputType = {
    id: number
    assemblyItemId: number | null
    itemId: number | null
    _count: AssemblyCountAggregateOutputType | null
    _avg: AssemblyAvgAggregateOutputType | null
    _sum: AssemblySumAggregateOutputType | null
    _min: AssemblyMinAggregateOutputType | null
    _max: AssemblyMaxAggregateOutputType | null
  }

  type GetAssemblyGroupByPayload<T extends AssemblyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssemblyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssemblyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssemblyGroupByOutputType[P]>
            : GetScalarType<T[P], AssemblyGroupByOutputType[P]>
        }
      >
    >


  export type AssemblySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assemblyItemId?: boolean
    itemId?: boolean
    assemblyItem?: boolean | Assembly$assemblyItemArgs<ExtArgs>
    item?: boolean | Assembly$itemArgs<ExtArgs>
  }, ExtArgs["result"]["assembly"]>

  export type AssemblySelectScalar = {
    id?: boolean
    assemblyItemId?: boolean
    itemId?: boolean
  }

  export type AssemblyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assemblyItem?: boolean | Assembly$assemblyItemArgs<ExtArgs>
    item?: boolean | Assembly$itemArgs<ExtArgs>
  }


  export type $AssemblyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Assembly"
    objects: {
      assemblyItem: Prisma.$ItemPayload<ExtArgs> | null
      item: Prisma.$ItemPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      assemblyItemId: number | null
      itemId: number | null
    }, ExtArgs["result"]["assembly"]>
    composites: {}
  }


  type AssemblyGetPayload<S extends boolean | null | undefined | AssemblyDefaultArgs> = $Result.GetResult<Prisma.$AssemblyPayload, S>

  type AssemblyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AssemblyFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: AssemblyCountAggregateInputType | true
    }

  export interface AssemblyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Assembly'], meta: { name: 'Assembly' } }
    /**
     * Find zero or one Assembly that matches the filter.
     * @param {AssemblyFindUniqueArgs} args - Arguments to find a Assembly
     * @example
     * // Get one Assembly
     * const assembly = await prisma.assembly.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AssemblyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AssemblyFindUniqueArgs<ExtArgs>>
    ): Prisma__AssemblyClient<$Result.GetResult<Prisma.$AssemblyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Assembly that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AssemblyFindUniqueOrThrowArgs} args - Arguments to find a Assembly
     * @example
     * // Get one Assembly
     * const assembly = await prisma.assembly.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AssemblyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AssemblyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AssemblyClient<$Result.GetResult<Prisma.$AssemblyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Assembly that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssemblyFindFirstArgs} args - Arguments to find a Assembly
     * @example
     * // Get one Assembly
     * const assembly = await prisma.assembly.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AssemblyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AssemblyFindFirstArgs<ExtArgs>>
    ): Prisma__AssemblyClient<$Result.GetResult<Prisma.$AssemblyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Assembly that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssemblyFindFirstOrThrowArgs} args - Arguments to find a Assembly
     * @example
     * // Get one Assembly
     * const assembly = await prisma.assembly.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AssemblyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AssemblyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AssemblyClient<$Result.GetResult<Prisma.$AssemblyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Assemblies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssemblyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assemblies
     * const assemblies = await prisma.assembly.findMany()
     * 
     * // Get first 10 Assemblies
     * const assemblies = await prisma.assembly.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assemblyWithIdOnly = await prisma.assembly.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AssemblyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AssemblyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssemblyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Assembly.
     * @param {AssemblyCreateArgs} args - Arguments to create a Assembly.
     * @example
     * // Create one Assembly
     * const Assembly = await prisma.assembly.create({
     *   data: {
     *     // ... data to create a Assembly
     *   }
     * })
     * 
    **/
    create<T extends AssemblyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AssemblyCreateArgs<ExtArgs>>
    ): Prisma__AssemblyClient<$Result.GetResult<Prisma.$AssemblyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Assemblies.
     *     @param {AssemblyCreateManyArgs} args - Arguments to create many Assemblies.
     *     @example
     *     // Create many Assemblies
     *     const assembly = await prisma.assembly.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AssemblyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AssemblyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Assembly.
     * @param {AssemblyDeleteArgs} args - Arguments to delete one Assembly.
     * @example
     * // Delete one Assembly
     * const Assembly = await prisma.assembly.delete({
     *   where: {
     *     // ... filter to delete one Assembly
     *   }
     * })
     * 
    **/
    delete<T extends AssemblyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AssemblyDeleteArgs<ExtArgs>>
    ): Prisma__AssemblyClient<$Result.GetResult<Prisma.$AssemblyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Assembly.
     * @param {AssemblyUpdateArgs} args - Arguments to update one Assembly.
     * @example
     * // Update one Assembly
     * const assembly = await prisma.assembly.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AssemblyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AssemblyUpdateArgs<ExtArgs>>
    ): Prisma__AssemblyClient<$Result.GetResult<Prisma.$AssemblyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Assemblies.
     * @param {AssemblyDeleteManyArgs} args - Arguments to filter Assemblies to delete.
     * @example
     * // Delete a few Assemblies
     * const { count } = await prisma.assembly.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AssemblyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AssemblyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assemblies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssemblyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assemblies
     * const assembly = await prisma.assembly.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AssemblyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AssemblyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Assembly.
     * @param {AssemblyUpsertArgs} args - Arguments to update or create a Assembly.
     * @example
     * // Update or create a Assembly
     * const assembly = await prisma.assembly.upsert({
     *   create: {
     *     // ... data to create a Assembly
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assembly we want to update
     *   }
     * })
    **/
    upsert<T extends AssemblyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AssemblyUpsertArgs<ExtArgs>>
    ): Prisma__AssemblyClient<$Result.GetResult<Prisma.$AssemblyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Assemblies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssemblyCountArgs} args - Arguments to filter Assemblies to count.
     * @example
     * // Count the number of Assemblies
     * const count = await prisma.assembly.count({
     *   where: {
     *     // ... the filter for the Assemblies we want to count
     *   }
     * })
    **/
    count<T extends AssemblyCountArgs>(
      args?: Subset<T, AssemblyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssemblyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assembly.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssemblyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssemblyAggregateArgs>(args: Subset<T, AssemblyAggregateArgs>): Prisma.PrismaPromise<GetAssemblyAggregateType<T>>

    /**
     * Group by Assembly.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssemblyGroupByArgs} args - Group by arguments.
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
      T extends AssemblyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssemblyGroupByArgs['orderBy'] }
        : { orderBy?: AssemblyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AssemblyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssemblyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Assembly model
   */
  readonly fields: AssemblyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Assembly.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssemblyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    assemblyItem<T extends Assembly$assemblyItemArgs<ExtArgs> = {}>(args?: Subset<T, Assembly$assemblyItemArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    item<T extends Assembly$itemArgs<ExtArgs> = {}>(args?: Subset<T, Assembly$itemArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

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
   * Fields of the Assembly model
   */ 
  interface AssemblyFieldRefs {
    readonly id: FieldRef<"Assembly", 'Int'>
    readonly assemblyItemId: FieldRef<"Assembly", 'Int'>
    readonly itemId: FieldRef<"Assembly", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Assembly findUnique
   */
  export type AssemblyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assembly
     */
    select?: AssemblySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssemblyInclude<ExtArgs> | null
    /**
     * Filter, which Assembly to fetch.
     */
    where: AssemblyWhereUniqueInput
  }


  /**
   * Assembly findUniqueOrThrow
   */
  export type AssemblyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assembly
     */
    select?: AssemblySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssemblyInclude<ExtArgs> | null
    /**
     * Filter, which Assembly to fetch.
     */
    where: AssemblyWhereUniqueInput
  }


  /**
   * Assembly findFirst
   */
  export type AssemblyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assembly
     */
    select?: AssemblySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssemblyInclude<ExtArgs> | null
    /**
     * Filter, which Assembly to fetch.
     */
    where?: AssemblyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assemblies to fetch.
     */
    orderBy?: AssemblyOrderByWithRelationInput | AssemblyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assemblies.
     */
    cursor?: AssemblyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assemblies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assemblies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assemblies.
     */
    distinct?: AssemblyScalarFieldEnum | AssemblyScalarFieldEnum[]
  }


  /**
   * Assembly findFirstOrThrow
   */
  export type AssemblyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assembly
     */
    select?: AssemblySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssemblyInclude<ExtArgs> | null
    /**
     * Filter, which Assembly to fetch.
     */
    where?: AssemblyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assemblies to fetch.
     */
    orderBy?: AssemblyOrderByWithRelationInput | AssemblyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assemblies.
     */
    cursor?: AssemblyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assemblies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assemblies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assemblies.
     */
    distinct?: AssemblyScalarFieldEnum | AssemblyScalarFieldEnum[]
  }


  /**
   * Assembly findMany
   */
  export type AssemblyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assembly
     */
    select?: AssemblySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssemblyInclude<ExtArgs> | null
    /**
     * Filter, which Assemblies to fetch.
     */
    where?: AssemblyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assemblies to fetch.
     */
    orderBy?: AssemblyOrderByWithRelationInput | AssemblyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assemblies.
     */
    cursor?: AssemblyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assemblies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assemblies.
     */
    skip?: number
    distinct?: AssemblyScalarFieldEnum | AssemblyScalarFieldEnum[]
  }


  /**
   * Assembly create
   */
  export type AssemblyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assembly
     */
    select?: AssemblySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssemblyInclude<ExtArgs> | null
    /**
     * The data needed to create a Assembly.
     */
    data?: XOR<AssemblyCreateInput, AssemblyUncheckedCreateInput>
  }


  /**
   * Assembly createMany
   */
  export type AssemblyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assemblies.
     */
    data: AssemblyCreateManyInput | AssemblyCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Assembly update
   */
  export type AssemblyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assembly
     */
    select?: AssemblySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssemblyInclude<ExtArgs> | null
    /**
     * The data needed to update a Assembly.
     */
    data: XOR<AssemblyUpdateInput, AssemblyUncheckedUpdateInput>
    /**
     * Choose, which Assembly to update.
     */
    where: AssemblyWhereUniqueInput
  }


  /**
   * Assembly updateMany
   */
  export type AssemblyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assemblies.
     */
    data: XOR<AssemblyUpdateManyMutationInput, AssemblyUncheckedUpdateManyInput>
    /**
     * Filter which Assemblies to update
     */
    where?: AssemblyWhereInput
  }


  /**
   * Assembly upsert
   */
  export type AssemblyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assembly
     */
    select?: AssemblySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssemblyInclude<ExtArgs> | null
    /**
     * The filter to search for the Assembly to update in case it exists.
     */
    where: AssemblyWhereUniqueInput
    /**
     * In case the Assembly found by the `where` argument doesn't exist, create a new Assembly with this data.
     */
    create: XOR<AssemblyCreateInput, AssemblyUncheckedCreateInput>
    /**
     * In case the Assembly was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssemblyUpdateInput, AssemblyUncheckedUpdateInput>
  }


  /**
   * Assembly delete
   */
  export type AssemblyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assembly
     */
    select?: AssemblySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssemblyInclude<ExtArgs> | null
    /**
     * Filter which Assembly to delete.
     */
    where: AssemblyWhereUniqueInput
  }


  /**
   * Assembly deleteMany
   */
  export type AssemblyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assemblies to delete
     */
    where?: AssemblyWhereInput
  }


  /**
   * Assembly.assemblyItem
   */
  export type Assembly$assemblyItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
    where?: ItemWhereInput
  }


  /**
   * Assembly.item
   */
  export type Assembly$itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
    where?: ItemWhereInput
  }


  /**
   * Assembly without action
   */
  export type AssemblyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assembly
     */
    select?: AssemblySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssemblyInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
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


  export const ClaimScalarFieldEnum: {
    id: 'id',
    claimType: 'claimType',
    acquired: 'acquired',
    condition: 'condition',
    notes: 'notes',
    ownerId: 'ownerId',
    itemId: 'itemId'
  };

  export type ClaimScalarFieldEnum = (typeof ClaimScalarFieldEnum)[keyof typeof ClaimScalarFieldEnum]


  export const ProducerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    nameShort: 'nameShort',
    nameAbbreviation: 'nameAbbreviation',
    notes: 'notes',
    webAddress: 'webAddress'
  };

  export type ProducerScalarFieldEnum = (typeof ProducerScalarFieldEnum)[keyof typeof ProducerScalarFieldEnum]


  export const BrandMemberScalarFieldEnum: {
    id: 'id',
    brandLabelId: 'brandLabelId',
    producerId: 'producerId'
  };

  export type BrandMemberScalarFieldEnum = (typeof BrandMemberScalarFieldEnum)[keyof typeof BrandMemberScalarFieldEnum]


  export const BrandLabelScalarFieldEnum: {
    id: 'id',
    type: 'type',
    name: 'name'
  };

  export type BrandLabelScalarFieldEnum = (typeof BrandLabelScalarFieldEnum)[keyof typeof BrandLabelScalarFieldEnum]


  export const ItemTypeScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ItemTypeScalarFieldEnum = (typeof ItemTypeScalarFieldEnum)[keyof typeof ItemTypeScalarFieldEnum]


  export const PropertyGroupScalarFieldEnum: {
    id: 'id',
    order: 'order',
    name: 'name',
    itemTypeId: 'itemTypeId'
  };

  export type PropertyGroupScalarFieldEnum = (typeof PropertyGroupScalarFieldEnum)[keyof typeof PropertyGroupScalarFieldEnum]


  export const PropertyScalarFieldEnum: {
    id: 'id',
    order: 'order',
    name: 'name',
    variation: 'variation',
    groupId: 'groupId'
  };

  export type PropertyScalarFieldEnum = (typeof PropertyScalarFieldEnum)[keyof typeof PropertyScalarFieldEnum]


  export const ItemScalarFieldEnum: {
    id: 'id',
    type: 'type',
    name: 'name',
    notes: 'notes',
    weight: 'weight',
    weightUnit: 'weightUnit',
    brandLabelId: 'brandLabelId'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const ItemPropertyScalarFieldEnum: {
    id: 'id',
    itemId: 'itemId',
    propertyId: 'propertyId',
    value: 'value'
  };

  export type ItemPropertyScalarFieldEnum = (typeof ItemPropertyScalarFieldEnum)[keyof typeof ItemPropertyScalarFieldEnum]


  export const AssemblyScalarFieldEnum: {
    id: 'id',
    assemblyItemId: 'assemblyItemId',
    itemId: 'itemId'
  };

  export type AssemblyScalarFieldEnum = (typeof AssemblyScalarFieldEnum)[keyof typeof AssemblyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
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
    claims?: ClaimListRelationFilter
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
    claims?: ClaimOrderByRelationAggregateInput
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
    claims?: ClaimListRelationFilter
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

  export type ClaimWhereInput = {
    AND?: ClaimWhereInput | ClaimWhereInput[]
    OR?: ClaimWhereInput[]
    NOT?: ClaimWhereInput | ClaimWhereInput[]
    id?: IntFilter<"Claim"> | number
    claimType?: StringNullableFilter<"Claim"> | string | null
    acquired?: DateTimeNullableFilter<"Claim"> | Date | string | null
    condition?: StringNullableFilter<"Claim"> | string | null
    notes?: StringNullableFilter<"Claim"> | string | null
    ownerId?: IntNullableFilter<"Claim"> | number | null
    itemId?: IntNullableFilter<"Claim"> | number | null
    owner?: XOR<CyclistNullableRelationFilter, CyclistWhereInput> | null
    item?: XOR<ItemNullableRelationFilter, ItemWhereInput> | null
  }

  export type ClaimOrderByWithRelationInput = {
    id?: SortOrder
    claimType?: SortOrderInput | SortOrder
    acquired?: SortOrderInput | SortOrder
    condition?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    ownerId?: SortOrderInput | SortOrder
    itemId?: SortOrderInput | SortOrder
    owner?: CyclistOrderByWithRelationInput
    item?: ItemOrderByWithRelationInput
  }

  export type ClaimWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClaimWhereInput | ClaimWhereInput[]
    OR?: ClaimWhereInput[]
    NOT?: ClaimWhereInput | ClaimWhereInput[]
    claimType?: StringNullableFilter<"Claim"> | string | null
    acquired?: DateTimeNullableFilter<"Claim"> | Date | string | null
    condition?: StringNullableFilter<"Claim"> | string | null
    notes?: StringNullableFilter<"Claim"> | string | null
    ownerId?: IntNullableFilter<"Claim"> | number | null
    itemId?: IntNullableFilter<"Claim"> | number | null
    owner?: XOR<CyclistNullableRelationFilter, CyclistWhereInput> | null
    item?: XOR<ItemNullableRelationFilter, ItemWhereInput> | null
  }, "id">

  export type ClaimOrderByWithAggregationInput = {
    id?: SortOrder
    claimType?: SortOrderInput | SortOrder
    acquired?: SortOrderInput | SortOrder
    condition?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    ownerId?: SortOrderInput | SortOrder
    itemId?: SortOrderInput | SortOrder
    _count?: ClaimCountOrderByAggregateInput
    _avg?: ClaimAvgOrderByAggregateInput
    _max?: ClaimMaxOrderByAggregateInput
    _min?: ClaimMinOrderByAggregateInput
    _sum?: ClaimSumOrderByAggregateInput
  }

  export type ClaimScalarWhereWithAggregatesInput = {
    AND?: ClaimScalarWhereWithAggregatesInput | ClaimScalarWhereWithAggregatesInput[]
    OR?: ClaimScalarWhereWithAggregatesInput[]
    NOT?: ClaimScalarWhereWithAggregatesInput | ClaimScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Claim"> | number
    claimType?: StringNullableWithAggregatesFilter<"Claim"> | string | null
    acquired?: DateTimeNullableWithAggregatesFilter<"Claim"> | Date | string | null
    condition?: StringNullableWithAggregatesFilter<"Claim"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Claim"> | string | null
    ownerId?: IntNullableWithAggregatesFilter<"Claim"> | number | null
    itemId?: IntNullableWithAggregatesFilter<"Claim"> | number | null
  }

  export type ProducerWhereInput = {
    AND?: ProducerWhereInput | ProducerWhereInput[]
    OR?: ProducerWhereInput[]
    NOT?: ProducerWhereInput | ProducerWhereInput[]
    id?: IntFilter<"Producer"> | number
    name?: StringNullableFilter<"Producer"> | string | null
    nameShort?: StringNullableFilter<"Producer"> | string | null
    nameAbbreviation?: StringNullableFilter<"Producer"> | string | null
    notes?: StringNullableFilter<"Producer"> | string | null
    webAddress?: StringNullableFilter<"Producer"> | string | null
    labelMemberships?: BrandMemberListRelationFilter
  }

  export type ProducerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    nameShort?: SortOrderInput | SortOrder
    nameAbbreviation?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    webAddress?: SortOrderInput | SortOrder
    labelMemberships?: BrandMemberOrderByRelationAggregateInput
  }

  export type ProducerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProducerWhereInput | ProducerWhereInput[]
    OR?: ProducerWhereInput[]
    NOT?: ProducerWhereInput | ProducerWhereInput[]
    name?: StringNullableFilter<"Producer"> | string | null
    nameShort?: StringNullableFilter<"Producer"> | string | null
    nameAbbreviation?: StringNullableFilter<"Producer"> | string | null
    notes?: StringNullableFilter<"Producer"> | string | null
    webAddress?: StringNullableFilter<"Producer"> | string | null
    labelMemberships?: BrandMemberListRelationFilter
  }, "id">

  export type ProducerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    nameShort?: SortOrderInput | SortOrder
    nameAbbreviation?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    webAddress?: SortOrderInput | SortOrder
    _count?: ProducerCountOrderByAggregateInput
    _avg?: ProducerAvgOrderByAggregateInput
    _max?: ProducerMaxOrderByAggregateInput
    _min?: ProducerMinOrderByAggregateInput
    _sum?: ProducerSumOrderByAggregateInput
  }

  export type ProducerScalarWhereWithAggregatesInput = {
    AND?: ProducerScalarWhereWithAggregatesInput | ProducerScalarWhereWithAggregatesInput[]
    OR?: ProducerScalarWhereWithAggregatesInput[]
    NOT?: ProducerScalarWhereWithAggregatesInput | ProducerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Producer"> | number
    name?: StringNullableWithAggregatesFilter<"Producer"> | string | null
    nameShort?: StringNullableWithAggregatesFilter<"Producer"> | string | null
    nameAbbreviation?: StringNullableWithAggregatesFilter<"Producer"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Producer"> | string | null
    webAddress?: StringNullableWithAggregatesFilter<"Producer"> | string | null
  }

  export type BrandMemberWhereInput = {
    AND?: BrandMemberWhereInput | BrandMemberWhereInput[]
    OR?: BrandMemberWhereInput[]
    NOT?: BrandMemberWhereInput | BrandMemberWhereInput[]
    id?: IntFilter<"BrandMember"> | number
    brandLabelId?: IntNullableFilter<"BrandMember"> | number | null
    producerId?: IntNullableFilter<"BrandMember"> | number | null
    brandLabel?: XOR<BrandLabelNullableRelationFilter, BrandLabelWhereInput> | null
    producer?: XOR<ProducerNullableRelationFilter, ProducerWhereInput> | null
  }

  export type BrandMemberOrderByWithRelationInput = {
    id?: SortOrder
    brandLabelId?: SortOrderInput | SortOrder
    producerId?: SortOrderInput | SortOrder
    brandLabel?: BrandLabelOrderByWithRelationInput
    producer?: ProducerOrderByWithRelationInput
  }

  export type BrandMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BrandMemberWhereInput | BrandMemberWhereInput[]
    OR?: BrandMemberWhereInput[]
    NOT?: BrandMemberWhereInput | BrandMemberWhereInput[]
    brandLabelId?: IntNullableFilter<"BrandMember"> | number | null
    producerId?: IntNullableFilter<"BrandMember"> | number | null
    brandLabel?: XOR<BrandLabelNullableRelationFilter, BrandLabelWhereInput> | null
    producer?: XOR<ProducerNullableRelationFilter, ProducerWhereInput> | null
  }, "id">

  export type BrandMemberOrderByWithAggregationInput = {
    id?: SortOrder
    brandLabelId?: SortOrderInput | SortOrder
    producerId?: SortOrderInput | SortOrder
    _count?: BrandMemberCountOrderByAggregateInput
    _avg?: BrandMemberAvgOrderByAggregateInput
    _max?: BrandMemberMaxOrderByAggregateInput
    _min?: BrandMemberMinOrderByAggregateInput
    _sum?: BrandMemberSumOrderByAggregateInput
  }

  export type BrandMemberScalarWhereWithAggregatesInput = {
    AND?: BrandMemberScalarWhereWithAggregatesInput | BrandMemberScalarWhereWithAggregatesInput[]
    OR?: BrandMemberScalarWhereWithAggregatesInput[]
    NOT?: BrandMemberScalarWhereWithAggregatesInput | BrandMemberScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BrandMember"> | number
    brandLabelId?: IntNullableWithAggregatesFilter<"BrandMember"> | number | null
    producerId?: IntNullableWithAggregatesFilter<"BrandMember"> | number | null
  }

  export type BrandLabelWhereInput = {
    AND?: BrandLabelWhereInput | BrandLabelWhereInput[]
    OR?: BrandLabelWhereInput[]
    NOT?: BrandLabelWhereInput | BrandLabelWhereInput[]
    id?: IntFilter<"BrandLabel"> | number
    type?: StringNullableFilter<"BrandLabel"> | string | null
    name?: StringNullableFilter<"BrandLabel"> | string | null
    labelMemberships?: BrandMemberListRelationFilter
    items?: ItemListRelationFilter
  }

  export type BrandLabelOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    labelMemberships?: BrandMemberOrderByRelationAggregateInput
    items?: ItemOrderByRelationAggregateInput
  }

  export type BrandLabelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BrandLabelWhereInput | BrandLabelWhereInput[]
    OR?: BrandLabelWhereInput[]
    NOT?: BrandLabelWhereInput | BrandLabelWhereInput[]
    type?: StringNullableFilter<"BrandLabel"> | string | null
    name?: StringNullableFilter<"BrandLabel"> | string | null
    labelMemberships?: BrandMemberListRelationFilter
    items?: ItemListRelationFilter
  }, "id">

  export type BrandLabelOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    _count?: BrandLabelCountOrderByAggregateInput
    _avg?: BrandLabelAvgOrderByAggregateInput
    _max?: BrandLabelMaxOrderByAggregateInput
    _min?: BrandLabelMinOrderByAggregateInput
    _sum?: BrandLabelSumOrderByAggregateInput
  }

  export type BrandLabelScalarWhereWithAggregatesInput = {
    AND?: BrandLabelScalarWhereWithAggregatesInput | BrandLabelScalarWhereWithAggregatesInput[]
    OR?: BrandLabelScalarWhereWithAggregatesInput[]
    NOT?: BrandLabelScalarWhereWithAggregatesInput | BrandLabelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BrandLabel"> | number
    type?: StringNullableWithAggregatesFilter<"BrandLabel"> | string | null
    name?: StringNullableWithAggregatesFilter<"BrandLabel"> | string | null
  }

  export type ItemTypeWhereInput = {
    AND?: ItemTypeWhereInput | ItemTypeWhereInput[]
    OR?: ItemTypeWhereInput[]
    NOT?: ItemTypeWhereInput | ItemTypeWhereInput[]
    id?: IntFilter<"ItemType"> | number
    name?: StringFilter<"ItemType"> | string
    propertyGroups?: PropertyGroupListRelationFilter
  }

  export type ItemTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    propertyGroups?: PropertyGroupOrderByRelationAggregateInput
  }

  export type ItemTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ItemTypeWhereInput | ItemTypeWhereInput[]
    OR?: ItemTypeWhereInput[]
    NOT?: ItemTypeWhereInput | ItemTypeWhereInput[]
    propertyGroups?: PropertyGroupListRelationFilter
  }, "id" | "name">

  export type ItemTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: ItemTypeCountOrderByAggregateInput
    _avg?: ItemTypeAvgOrderByAggregateInput
    _max?: ItemTypeMaxOrderByAggregateInput
    _min?: ItemTypeMinOrderByAggregateInput
    _sum?: ItemTypeSumOrderByAggregateInput
  }

  export type ItemTypeScalarWhereWithAggregatesInput = {
    AND?: ItemTypeScalarWhereWithAggregatesInput | ItemTypeScalarWhereWithAggregatesInput[]
    OR?: ItemTypeScalarWhereWithAggregatesInput[]
    NOT?: ItemTypeScalarWhereWithAggregatesInput | ItemTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ItemType"> | number
    name?: StringWithAggregatesFilter<"ItemType"> | string
  }

  export type PropertyGroupWhereInput = {
    AND?: PropertyGroupWhereInput | PropertyGroupWhereInput[]
    OR?: PropertyGroupWhereInput[]
    NOT?: PropertyGroupWhereInput | PropertyGroupWhereInput[]
    id?: IntFilter<"PropertyGroup"> | number
    order?: IntNullableFilter<"PropertyGroup"> | number | null
    name?: StringFilter<"PropertyGroup"> | string
    itemTypeId?: IntNullableFilter<"PropertyGroup"> | number | null
    itemType?: XOR<ItemTypeNullableRelationFilter, ItemTypeWhereInput> | null
    properties?: PropertyListRelationFilter
  }

  export type PropertyGroupOrderByWithRelationInput = {
    id?: SortOrder
    order?: SortOrderInput | SortOrder
    name?: SortOrder
    itemTypeId?: SortOrderInput | SortOrder
    itemType?: ItemTypeOrderByWithRelationInput
    properties?: PropertyOrderByRelationAggregateInput
  }

  export type PropertyGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: PropertyGroupWhereInput | PropertyGroupWhereInput[]
    OR?: PropertyGroupWhereInput[]
    NOT?: PropertyGroupWhereInput | PropertyGroupWhereInput[]
    order?: IntNullableFilter<"PropertyGroup"> | number | null
    itemTypeId?: IntNullableFilter<"PropertyGroup"> | number | null
    itemType?: XOR<ItemTypeNullableRelationFilter, ItemTypeWhereInput> | null
    properties?: PropertyListRelationFilter
  }, "id" | "name">

  export type PropertyGroupOrderByWithAggregationInput = {
    id?: SortOrder
    order?: SortOrderInput | SortOrder
    name?: SortOrder
    itemTypeId?: SortOrderInput | SortOrder
    _count?: PropertyGroupCountOrderByAggregateInput
    _avg?: PropertyGroupAvgOrderByAggregateInput
    _max?: PropertyGroupMaxOrderByAggregateInput
    _min?: PropertyGroupMinOrderByAggregateInput
    _sum?: PropertyGroupSumOrderByAggregateInput
  }

  export type PropertyGroupScalarWhereWithAggregatesInput = {
    AND?: PropertyGroupScalarWhereWithAggregatesInput | PropertyGroupScalarWhereWithAggregatesInput[]
    OR?: PropertyGroupScalarWhereWithAggregatesInput[]
    NOT?: PropertyGroupScalarWhereWithAggregatesInput | PropertyGroupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PropertyGroup"> | number
    order?: IntNullableWithAggregatesFilter<"PropertyGroup"> | number | null
    name?: StringWithAggregatesFilter<"PropertyGroup"> | string
    itemTypeId?: IntNullableWithAggregatesFilter<"PropertyGroup"> | number | null
  }

  export type PropertyWhereInput = {
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    id?: IntFilter<"Property"> | number
    order?: IntNullableFilter<"Property"> | number | null
    name?: StringNullableFilter<"Property"> | string | null
    variation?: StringNullableFilter<"Property"> | string | null
    groupId?: IntNullableFilter<"Property"> | number | null
    group?: XOR<PropertyGroupNullableRelationFilter, PropertyGroupWhereInput> | null
    itemProperties?: ItemPropertyListRelationFilter
  }

  export type PropertyOrderByWithRelationInput = {
    id?: SortOrder
    order?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    variation?: SortOrderInput | SortOrder
    groupId?: SortOrderInput | SortOrder
    group?: PropertyGroupOrderByWithRelationInput
    itemProperties?: ItemPropertyOrderByRelationAggregateInput
  }

  export type PropertyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    order?: IntNullableFilter<"Property"> | number | null
    name?: StringNullableFilter<"Property"> | string | null
    variation?: StringNullableFilter<"Property"> | string | null
    groupId?: IntNullableFilter<"Property"> | number | null
    group?: XOR<PropertyGroupNullableRelationFilter, PropertyGroupWhereInput> | null
    itemProperties?: ItemPropertyListRelationFilter
  }, "id">

  export type PropertyOrderByWithAggregationInput = {
    id?: SortOrder
    order?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    variation?: SortOrderInput | SortOrder
    groupId?: SortOrderInput | SortOrder
    _count?: PropertyCountOrderByAggregateInput
    _avg?: PropertyAvgOrderByAggregateInput
    _max?: PropertyMaxOrderByAggregateInput
    _min?: PropertyMinOrderByAggregateInput
    _sum?: PropertySumOrderByAggregateInput
  }

  export type PropertyScalarWhereWithAggregatesInput = {
    AND?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    OR?: PropertyScalarWhereWithAggregatesInput[]
    NOT?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Property"> | number
    order?: IntNullableWithAggregatesFilter<"Property"> | number | null
    name?: StringNullableWithAggregatesFilter<"Property"> | string | null
    variation?: StringNullableWithAggregatesFilter<"Property"> | string | null
    groupId?: IntNullableWithAggregatesFilter<"Property"> | number | null
  }

  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    id?: IntFilter<"Item"> | number
    type?: StringNullableFilter<"Item"> | string | null
    name?: StringNullableFilter<"Item"> | string | null
    notes?: StringNullableFilter<"Item"> | string | null
    weight?: DecimalNullableFilter<"Item"> | Decimal | DecimalJsLike | number | string | null
    weightUnit?: StringNullableFilter<"Item"> | string | null
    brandLabelId?: IntNullableFilter<"Item"> | number | null
    brandLabel?: XOR<BrandLabelNullableRelationFilter, BrandLabelWhereInput> | null
    properties?: ItemPropertyListRelationFilter
    inClaims?: ClaimListRelationFilter
    hasAssemblyItems?: AssemblyListRelationFilter
    inAssemblies?: AssemblyListRelationFilter
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    weightUnit?: SortOrderInput | SortOrder
    brandLabelId?: SortOrderInput | SortOrder
    brandLabel?: BrandLabelOrderByWithRelationInput
    properties?: ItemPropertyOrderByRelationAggregateInput
    inClaims?: ClaimOrderByRelationAggregateInput
    hasAssemblyItems?: AssemblyOrderByRelationAggregateInput
    inAssemblies?: AssemblyOrderByRelationAggregateInput
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    type?: StringNullableFilter<"Item"> | string | null
    name?: StringNullableFilter<"Item"> | string | null
    notes?: StringNullableFilter<"Item"> | string | null
    weight?: DecimalNullableFilter<"Item"> | Decimal | DecimalJsLike | number | string | null
    weightUnit?: StringNullableFilter<"Item"> | string | null
    brandLabelId?: IntNullableFilter<"Item"> | number | null
    brandLabel?: XOR<BrandLabelNullableRelationFilter, BrandLabelWhereInput> | null
    properties?: ItemPropertyListRelationFilter
    inClaims?: ClaimListRelationFilter
    hasAssemblyItems?: AssemblyListRelationFilter
    inAssemblies?: AssemblyListRelationFilter
  }, "id">

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    weightUnit?: SortOrderInput | SortOrder
    brandLabelId?: SortOrderInput | SortOrder
    _count?: ItemCountOrderByAggregateInput
    _avg?: ItemAvgOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
    _sum?: ItemSumOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    OR?: ItemScalarWhereWithAggregatesInput[]
    NOT?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Item"> | number
    type?: StringNullableWithAggregatesFilter<"Item"> | string | null
    name?: StringNullableWithAggregatesFilter<"Item"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Item"> | string | null
    weight?: DecimalNullableWithAggregatesFilter<"Item"> | Decimal | DecimalJsLike | number | string | null
    weightUnit?: StringNullableWithAggregatesFilter<"Item"> | string | null
    brandLabelId?: IntNullableWithAggregatesFilter<"Item"> | number | null
  }

  export type ItemPropertyWhereInput = {
    AND?: ItemPropertyWhereInput | ItemPropertyWhereInput[]
    OR?: ItemPropertyWhereInput[]
    NOT?: ItemPropertyWhereInput | ItemPropertyWhereInput[]
    id?: IntFilter<"ItemProperty"> | number
    itemId?: IntNullableFilter<"ItemProperty"> | number | null
    propertyId?: IntNullableFilter<"ItemProperty"> | number | null
    value?: StringNullableFilter<"ItemProperty"> | string | null
    item?: XOR<ItemNullableRelationFilter, ItemWhereInput> | null
    property?: XOR<PropertyNullableRelationFilter, PropertyWhereInput> | null
  }

  export type ItemPropertyOrderByWithRelationInput = {
    id?: SortOrder
    itemId?: SortOrderInput | SortOrder
    propertyId?: SortOrderInput | SortOrder
    value?: SortOrderInput | SortOrder
    item?: ItemOrderByWithRelationInput
    property?: PropertyOrderByWithRelationInput
  }

  export type ItemPropertyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    itemId?: number
    AND?: ItemPropertyWhereInput | ItemPropertyWhereInput[]
    OR?: ItemPropertyWhereInput[]
    NOT?: ItemPropertyWhereInput | ItemPropertyWhereInput[]
    propertyId?: IntNullableFilter<"ItemProperty"> | number | null
    value?: StringNullableFilter<"ItemProperty"> | string | null
    item?: XOR<ItemNullableRelationFilter, ItemWhereInput> | null
    property?: XOR<PropertyNullableRelationFilter, PropertyWhereInput> | null
  }, "id" | "itemId">

  export type ItemPropertyOrderByWithAggregationInput = {
    id?: SortOrder
    itemId?: SortOrderInput | SortOrder
    propertyId?: SortOrderInput | SortOrder
    value?: SortOrderInput | SortOrder
    _count?: ItemPropertyCountOrderByAggregateInput
    _avg?: ItemPropertyAvgOrderByAggregateInput
    _max?: ItemPropertyMaxOrderByAggregateInput
    _min?: ItemPropertyMinOrderByAggregateInput
    _sum?: ItemPropertySumOrderByAggregateInput
  }

  export type ItemPropertyScalarWhereWithAggregatesInput = {
    AND?: ItemPropertyScalarWhereWithAggregatesInput | ItemPropertyScalarWhereWithAggregatesInput[]
    OR?: ItemPropertyScalarWhereWithAggregatesInput[]
    NOT?: ItemPropertyScalarWhereWithAggregatesInput | ItemPropertyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ItemProperty"> | number
    itemId?: IntNullableWithAggregatesFilter<"ItemProperty"> | number | null
    propertyId?: IntNullableWithAggregatesFilter<"ItemProperty"> | number | null
    value?: StringNullableWithAggregatesFilter<"ItemProperty"> | string | null
  }

  export type AssemblyWhereInput = {
    AND?: AssemblyWhereInput | AssemblyWhereInput[]
    OR?: AssemblyWhereInput[]
    NOT?: AssemblyWhereInput | AssemblyWhereInput[]
    id?: IntFilter<"Assembly"> | number
    assemblyItemId?: IntNullableFilter<"Assembly"> | number | null
    itemId?: IntNullableFilter<"Assembly"> | number | null
    assemblyItem?: XOR<ItemNullableRelationFilter, ItemWhereInput> | null
    item?: XOR<ItemNullableRelationFilter, ItemWhereInput> | null
  }

  export type AssemblyOrderByWithRelationInput = {
    id?: SortOrder
    assemblyItemId?: SortOrderInput | SortOrder
    itemId?: SortOrderInput | SortOrder
    assemblyItem?: ItemOrderByWithRelationInput
    item?: ItemOrderByWithRelationInput
  }

  export type AssemblyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AssemblyWhereInput | AssemblyWhereInput[]
    OR?: AssemblyWhereInput[]
    NOT?: AssemblyWhereInput | AssemblyWhereInput[]
    assemblyItemId?: IntNullableFilter<"Assembly"> | number | null
    itemId?: IntNullableFilter<"Assembly"> | number | null
    assemblyItem?: XOR<ItemNullableRelationFilter, ItemWhereInput> | null
    item?: XOR<ItemNullableRelationFilter, ItemWhereInput> | null
  }, "id">

  export type AssemblyOrderByWithAggregationInput = {
    id?: SortOrder
    assemblyItemId?: SortOrderInput | SortOrder
    itemId?: SortOrderInput | SortOrder
    _count?: AssemblyCountOrderByAggregateInput
    _avg?: AssemblyAvgOrderByAggregateInput
    _max?: AssemblyMaxOrderByAggregateInput
    _min?: AssemblyMinOrderByAggregateInput
    _sum?: AssemblySumOrderByAggregateInput
  }

  export type AssemblyScalarWhereWithAggregatesInput = {
    AND?: AssemblyScalarWhereWithAggregatesInput | AssemblyScalarWhereWithAggregatesInput[]
    OR?: AssemblyScalarWhereWithAggregatesInput[]
    NOT?: AssemblyScalarWhereWithAggregatesInput | AssemblyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Assembly"> | number
    assemblyItemId?: IntNullableWithAggregatesFilter<"Assembly"> | number | null
    itemId?: IntNullableWithAggregatesFilter<"Assembly"> | number | null
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
    claims?: ClaimCreateNestedManyWithoutOwnerInput
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
    claims?: ClaimUncheckedCreateNestedManyWithoutOwnerInput
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
    claims?: ClaimUpdateManyWithoutOwnerNestedInput
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
    claims?: ClaimUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type CyclistCreateManyInput = {
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

  export type ClaimCreateInput = {
    claimType?: string | null
    acquired?: Date | string | null
    condition?: string | null
    notes?: string | null
    owner?: CyclistCreateNestedOneWithoutClaimsInput
    item?: ItemCreateNestedOneWithoutInClaimsInput
  }

  export type ClaimUncheckedCreateInput = {
    id?: number
    claimType?: string | null
    acquired?: Date | string | null
    condition?: string | null
    notes?: string | null
    ownerId?: number | null
    itemId?: number | null
  }

  export type ClaimUpdateInput = {
    claimType?: NullableStringFieldUpdateOperationsInput | string | null
    acquired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: CyclistUpdateOneWithoutClaimsNestedInput
    item?: ItemUpdateOneWithoutInClaimsNestedInput
  }

  export type ClaimUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    claimType?: NullableStringFieldUpdateOperationsInput | string | null
    acquired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    itemId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ClaimCreateManyInput = {
    id?: number
    claimType?: string | null
    acquired?: Date | string | null
    condition?: string | null
    notes?: string | null
    ownerId?: number | null
    itemId?: number | null
  }

  export type ClaimUpdateManyMutationInput = {
    claimType?: NullableStringFieldUpdateOperationsInput | string | null
    acquired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClaimUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    claimType?: NullableStringFieldUpdateOperationsInput | string | null
    acquired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    itemId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProducerCreateInput = {
    name?: string | null
    nameShort?: string | null
    nameAbbreviation?: string | null
    notes?: string | null
    webAddress?: string | null
    labelMemberships?: BrandMemberCreateNestedManyWithoutProducerInput
  }

  export type ProducerUncheckedCreateInput = {
    id?: number
    name?: string | null
    nameShort?: string | null
    nameAbbreviation?: string | null
    notes?: string | null
    webAddress?: string | null
    labelMemberships?: BrandMemberUncheckedCreateNestedManyWithoutProducerInput
  }

  export type ProducerUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nameShort?: NullableStringFieldUpdateOperationsInput | string | null
    nameAbbreviation?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    webAddress?: NullableStringFieldUpdateOperationsInput | string | null
    labelMemberships?: BrandMemberUpdateManyWithoutProducerNestedInput
  }

  export type ProducerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nameShort?: NullableStringFieldUpdateOperationsInput | string | null
    nameAbbreviation?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    webAddress?: NullableStringFieldUpdateOperationsInput | string | null
    labelMemberships?: BrandMemberUncheckedUpdateManyWithoutProducerNestedInput
  }

  export type ProducerCreateManyInput = {
    id?: number
    name?: string | null
    nameShort?: string | null
    nameAbbreviation?: string | null
    notes?: string | null
    webAddress?: string | null
  }

  export type ProducerUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nameShort?: NullableStringFieldUpdateOperationsInput | string | null
    nameAbbreviation?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    webAddress?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProducerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nameShort?: NullableStringFieldUpdateOperationsInput | string | null
    nameAbbreviation?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    webAddress?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BrandMemberCreateInput = {
    brandLabel?: BrandLabelCreateNestedOneWithoutLabelMembershipsInput
    producer?: ProducerCreateNestedOneWithoutLabelMembershipsInput
  }

  export type BrandMemberUncheckedCreateInput = {
    id?: number
    brandLabelId?: number | null
    producerId?: number | null
  }

  export type BrandMemberUpdateInput = {
    brandLabel?: BrandLabelUpdateOneWithoutLabelMembershipsNestedInput
    producer?: ProducerUpdateOneWithoutLabelMembershipsNestedInput
  }

  export type BrandMemberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    brandLabelId?: NullableIntFieldUpdateOperationsInput | number | null
    producerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BrandMemberCreateManyInput = {
    id?: number
    brandLabelId?: number | null
    producerId?: number | null
  }

  export type BrandMemberUpdateManyMutationInput = {

  }

  export type BrandMemberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    brandLabelId?: NullableIntFieldUpdateOperationsInput | number | null
    producerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BrandLabelCreateInput = {
    type?: string | null
    name?: string | null
    labelMemberships?: BrandMemberCreateNestedManyWithoutBrandLabelInput
    items?: ItemCreateNestedManyWithoutBrandLabelInput
  }

  export type BrandLabelUncheckedCreateInput = {
    id?: number
    type?: string | null
    name?: string | null
    labelMemberships?: BrandMemberUncheckedCreateNestedManyWithoutBrandLabelInput
    items?: ItemUncheckedCreateNestedManyWithoutBrandLabelInput
  }

  export type BrandLabelUpdateInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    labelMemberships?: BrandMemberUpdateManyWithoutBrandLabelNestedInput
    items?: ItemUpdateManyWithoutBrandLabelNestedInput
  }

  export type BrandLabelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    labelMemberships?: BrandMemberUncheckedUpdateManyWithoutBrandLabelNestedInput
    items?: ItemUncheckedUpdateManyWithoutBrandLabelNestedInput
  }

  export type BrandLabelCreateManyInput = {
    id?: number
    type?: string | null
    name?: string | null
  }

  export type BrandLabelUpdateManyMutationInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BrandLabelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ItemTypeCreateInput = {
    name: string
    propertyGroups?: PropertyGroupCreateNestedManyWithoutItemTypeInput
  }

  export type ItemTypeUncheckedCreateInput = {
    id?: number
    name: string
    propertyGroups?: PropertyGroupUncheckedCreateNestedManyWithoutItemTypeInput
  }

  export type ItemTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    propertyGroups?: PropertyGroupUpdateManyWithoutItemTypeNestedInput
  }

  export type ItemTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    propertyGroups?: PropertyGroupUncheckedUpdateManyWithoutItemTypeNestedInput
  }

  export type ItemTypeCreateManyInput = {
    id?: number
    name: string
  }

  export type ItemTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ItemTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PropertyGroupCreateInput = {
    order?: number | null
    name: string
    itemType?: ItemTypeCreateNestedOneWithoutPropertyGroupsInput
    properties?: PropertyCreateNestedManyWithoutGroupInput
  }

  export type PropertyGroupUncheckedCreateInput = {
    id?: number
    order?: number | null
    name: string
    itemTypeId?: number | null
    properties?: PropertyUncheckedCreateNestedManyWithoutGroupInput
  }

  export type PropertyGroupUpdateInput = {
    order?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    itemType?: ItemTypeUpdateOneWithoutPropertyGroupsNestedInput
    properties?: PropertyUpdateManyWithoutGroupNestedInput
  }

  export type PropertyGroupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    order?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    itemTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    properties?: PropertyUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type PropertyGroupCreateManyInput = {
    id?: number
    order?: number | null
    name: string
    itemTypeId?: number | null
  }

  export type PropertyGroupUpdateManyMutationInput = {
    order?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PropertyGroupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    order?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    itemTypeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PropertyCreateInput = {
    order?: number | null
    name?: string | null
    variation?: string | null
    group?: PropertyGroupCreateNestedOneWithoutPropertiesInput
    itemProperties?: ItemPropertyCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateInput = {
    id?: number
    order?: number | null
    name?: string | null
    variation?: string | null
    groupId?: number | null
    itemProperties?: ItemPropertyUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUpdateInput = {
    order?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    variation?: NullableStringFieldUpdateOperationsInput | string | null
    group?: PropertyGroupUpdateOneWithoutPropertiesNestedInput
    itemProperties?: ItemPropertyUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    order?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    variation?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    itemProperties?: ItemPropertyUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateManyInput = {
    id?: number
    order?: number | null
    name?: string | null
    variation?: string | null
    groupId?: number | null
  }

  export type PropertyUpdateManyMutationInput = {
    order?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    variation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PropertyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    order?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    variation?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ItemCreateInput = {
    type?: string | null
    name?: string | null
    notes?: string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    weightUnit?: string | null
    brandLabel?: BrandLabelCreateNestedOneWithoutItemsInput
    properties?: ItemPropertyCreateNestedManyWithoutItemInput
    inClaims?: ClaimCreateNestedManyWithoutItemInput
    hasAssemblyItems?: AssemblyCreateNestedManyWithoutAssemblyItemInput
    inAssemblies?: AssemblyCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateInput = {
    id?: number
    type?: string | null
    name?: string | null
    notes?: string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    weightUnit?: string | null
    brandLabelId?: number | null
    properties?: ItemPropertyUncheckedCreateNestedManyWithoutItemInput
    inClaims?: ClaimUncheckedCreateNestedManyWithoutItemInput
    hasAssemblyItems?: AssemblyUncheckedCreateNestedManyWithoutAssemblyItemInput
    inAssemblies?: AssemblyUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemUpdateInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weightUnit?: NullableStringFieldUpdateOperationsInput | string | null
    brandLabel?: BrandLabelUpdateOneWithoutItemsNestedInput
    properties?: ItemPropertyUpdateManyWithoutItemNestedInput
    inClaims?: ClaimUpdateManyWithoutItemNestedInput
    hasAssemblyItems?: AssemblyUpdateManyWithoutAssemblyItemNestedInput
    inAssemblies?: AssemblyUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weightUnit?: NullableStringFieldUpdateOperationsInput | string | null
    brandLabelId?: NullableIntFieldUpdateOperationsInput | number | null
    properties?: ItemPropertyUncheckedUpdateManyWithoutItemNestedInput
    inClaims?: ClaimUncheckedUpdateManyWithoutItemNestedInput
    hasAssemblyItems?: AssemblyUncheckedUpdateManyWithoutAssemblyItemNestedInput
    inAssemblies?: AssemblyUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemCreateManyInput = {
    id?: number
    type?: string | null
    name?: string | null
    notes?: string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    weightUnit?: string | null
    brandLabelId?: number | null
  }

  export type ItemUpdateManyMutationInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weightUnit?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weightUnit?: NullableStringFieldUpdateOperationsInput | string | null
    brandLabelId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ItemPropertyCreateInput = {
    value?: string | null
    item?: ItemCreateNestedOneWithoutPropertiesInput
    property?: PropertyCreateNestedOneWithoutItemPropertiesInput
  }

  export type ItemPropertyUncheckedCreateInput = {
    id?: number
    itemId?: number | null
    propertyId?: number | null
    value?: string | null
  }

  export type ItemPropertyUpdateInput = {
    value?: NullableStringFieldUpdateOperationsInput | string | null
    item?: ItemUpdateOneWithoutPropertiesNestedInput
    property?: PropertyUpdateOneWithoutItemPropertiesNestedInput
  }

  export type ItemPropertyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemId?: NullableIntFieldUpdateOperationsInput | number | null
    propertyId?: NullableIntFieldUpdateOperationsInput | number | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ItemPropertyCreateManyInput = {
    id?: number
    itemId?: number | null
    propertyId?: number | null
    value?: string | null
  }

  export type ItemPropertyUpdateManyMutationInput = {
    value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ItemPropertyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemId?: NullableIntFieldUpdateOperationsInput | number | null
    propertyId?: NullableIntFieldUpdateOperationsInput | number | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AssemblyCreateInput = {
    assemblyItem?: ItemCreateNestedOneWithoutHasAssemblyItemsInput
    item?: ItemCreateNestedOneWithoutInAssembliesInput
  }

  export type AssemblyUncheckedCreateInput = {
    id?: number
    assemblyItemId?: number | null
    itemId?: number | null
  }

  export type AssemblyUpdateInput = {
    assemblyItem?: ItemUpdateOneWithoutHasAssemblyItemsNestedInput
    item?: ItemUpdateOneWithoutInAssembliesNestedInput
  }

  export type AssemblyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    assemblyItemId?: NullableIntFieldUpdateOperationsInput | number | null
    itemId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AssemblyCreateManyInput = {
    id?: number
    assemblyItemId?: number | null
    itemId?: number | null
  }

  export type AssemblyUpdateManyMutationInput = {

  }

  export type AssemblyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    assemblyItemId?: NullableIntFieldUpdateOperationsInput | number | null
    itemId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ClaimListRelationFilter = {
    every?: ClaimWhereInput
    some?: ClaimWhereInput
    none?: ClaimWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ClaimOrderByRelationAggregateInput = {
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type ItemNullableRelationFilter = {
    is?: ItemWhereInput | null
    isNot?: ItemWhereInput | null
  }

  export type ClaimCountOrderByAggregateInput = {
    id?: SortOrder
    claimType?: SortOrder
    acquired?: SortOrder
    condition?: SortOrder
    notes?: SortOrder
    ownerId?: SortOrder
    itemId?: SortOrder
  }

  export type ClaimAvgOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    itemId?: SortOrder
  }

  export type ClaimMaxOrderByAggregateInput = {
    id?: SortOrder
    claimType?: SortOrder
    acquired?: SortOrder
    condition?: SortOrder
    notes?: SortOrder
    ownerId?: SortOrder
    itemId?: SortOrder
  }

  export type ClaimMinOrderByAggregateInput = {
    id?: SortOrder
    claimType?: SortOrder
    acquired?: SortOrder
    condition?: SortOrder
    notes?: SortOrder
    ownerId?: SortOrder
    itemId?: SortOrder
  }

  export type ClaimSumOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    itemId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type BrandMemberListRelationFilter = {
    every?: BrandMemberWhereInput
    some?: BrandMemberWhereInput
    none?: BrandMemberWhereInput
  }

  export type BrandMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProducerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nameShort?: SortOrder
    nameAbbreviation?: SortOrder
    notes?: SortOrder
    webAddress?: SortOrder
  }

  export type ProducerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProducerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nameShort?: SortOrder
    nameAbbreviation?: SortOrder
    notes?: SortOrder
    webAddress?: SortOrder
  }

  export type ProducerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nameShort?: SortOrder
    nameAbbreviation?: SortOrder
    notes?: SortOrder
    webAddress?: SortOrder
  }

  export type ProducerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BrandLabelNullableRelationFilter = {
    is?: BrandLabelWhereInput | null
    isNot?: BrandLabelWhereInput | null
  }

  export type ProducerNullableRelationFilter = {
    is?: ProducerWhereInput | null
    isNot?: ProducerWhereInput | null
  }

  export type BrandMemberCountOrderByAggregateInput = {
    id?: SortOrder
    brandLabelId?: SortOrder
    producerId?: SortOrder
  }

  export type BrandMemberAvgOrderByAggregateInput = {
    id?: SortOrder
    brandLabelId?: SortOrder
    producerId?: SortOrder
  }

  export type BrandMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    brandLabelId?: SortOrder
    producerId?: SortOrder
  }

  export type BrandMemberMinOrderByAggregateInput = {
    id?: SortOrder
    brandLabelId?: SortOrder
    producerId?: SortOrder
  }

  export type BrandMemberSumOrderByAggregateInput = {
    id?: SortOrder
    brandLabelId?: SortOrder
    producerId?: SortOrder
  }

  export type ItemListRelationFilter = {
    every?: ItemWhereInput
    some?: ItemWhereInput
    none?: ItemWhereInput
  }

  export type ItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BrandLabelCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
  }

  export type BrandLabelAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BrandLabelMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
  }

  export type BrandLabelMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
  }

  export type BrandLabelSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PropertyGroupListRelationFilter = {
    every?: PropertyGroupWhereInput
    some?: PropertyGroupWhereInput
    none?: PropertyGroupWhereInput
  }

  export type PropertyGroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ItemTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ItemTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ItemTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ItemTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ItemTypeNullableRelationFilter = {
    is?: ItemTypeWhereInput | null
    isNot?: ItemTypeWhereInput | null
  }

  export type PropertyListRelationFilter = {
    every?: PropertyWhereInput
    some?: PropertyWhereInput
    none?: PropertyWhereInput
  }

  export type PropertyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyGroupCountOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    name?: SortOrder
    itemTypeId?: SortOrder
  }

  export type PropertyGroupAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    itemTypeId?: SortOrder
  }

  export type PropertyGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    name?: SortOrder
    itemTypeId?: SortOrder
  }

  export type PropertyGroupMinOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    name?: SortOrder
    itemTypeId?: SortOrder
  }

  export type PropertyGroupSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    itemTypeId?: SortOrder
  }

  export type PropertyGroupNullableRelationFilter = {
    is?: PropertyGroupWhereInput | null
    isNot?: PropertyGroupWhereInput | null
  }

  export type ItemPropertyListRelationFilter = {
    every?: ItemPropertyWhereInput
    some?: ItemPropertyWhereInput
    none?: ItemPropertyWhereInput
  }

  export type ItemPropertyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyCountOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    name?: SortOrder
    variation?: SortOrder
    groupId?: SortOrder
  }

  export type PropertyAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    groupId?: SortOrder
  }

  export type PropertyMaxOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    name?: SortOrder
    variation?: SortOrder
    groupId?: SortOrder
  }

  export type PropertyMinOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    name?: SortOrder
    variation?: SortOrder
    groupId?: SortOrder
  }

  export type PropertySumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    groupId?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type AssemblyListRelationFilter = {
    every?: AssemblyWhereInput
    some?: AssemblyWhereInput
    none?: AssemblyWhereInput
  }

  export type AssemblyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    notes?: SortOrder
    weight?: SortOrder
    weightUnit?: SortOrder
    brandLabelId?: SortOrder
  }

  export type ItemAvgOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
    brandLabelId?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    notes?: SortOrder
    weight?: SortOrder
    weightUnit?: SortOrder
    brandLabelId?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    notes?: SortOrder
    weight?: SortOrder
    weightUnit?: SortOrder
    brandLabelId?: SortOrder
  }

  export type ItemSumOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
    brandLabelId?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type PropertyNullableRelationFilter = {
    is?: PropertyWhereInput | null
    isNot?: PropertyWhereInput | null
  }

  export type ItemPropertyCountOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    propertyId?: SortOrder
    value?: SortOrder
  }

  export type ItemPropertyAvgOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    propertyId?: SortOrder
  }

  export type ItemPropertyMaxOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    propertyId?: SortOrder
    value?: SortOrder
  }

  export type ItemPropertyMinOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    propertyId?: SortOrder
    value?: SortOrder
  }

  export type ItemPropertySumOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    propertyId?: SortOrder
  }

  export type AssemblyCountOrderByAggregateInput = {
    id?: SortOrder
    assemblyItemId?: SortOrder
    itemId?: SortOrder
  }

  export type AssemblyAvgOrderByAggregateInput = {
    id?: SortOrder
    assemblyItemId?: SortOrder
    itemId?: SortOrder
  }

  export type AssemblyMaxOrderByAggregateInput = {
    id?: SortOrder
    assemblyItemId?: SortOrder
    itemId?: SortOrder
  }

  export type AssemblyMinOrderByAggregateInput = {
    id?: SortOrder
    assemblyItemId?: SortOrder
    itemId?: SortOrder
  }

  export type AssemblySumOrderByAggregateInput = {
    id?: SortOrder
    assemblyItemId?: SortOrder
    itemId?: SortOrder
  }

  export type ClaimCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ClaimCreateWithoutOwnerInput, ClaimUncheckedCreateWithoutOwnerInput> | ClaimCreateWithoutOwnerInput[] | ClaimUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutOwnerInput | ClaimCreateOrConnectWithoutOwnerInput[]
    createMany?: ClaimCreateManyOwnerInputEnvelope
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
  }

  export type ClaimUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ClaimCreateWithoutOwnerInput, ClaimUncheckedCreateWithoutOwnerInput> | ClaimCreateWithoutOwnerInput[] | ClaimUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutOwnerInput | ClaimCreateOrConnectWithoutOwnerInput[]
    createMany?: ClaimCreateManyOwnerInputEnvelope
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
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

  export type ClaimUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ClaimCreateWithoutOwnerInput, ClaimUncheckedCreateWithoutOwnerInput> | ClaimCreateWithoutOwnerInput[] | ClaimUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutOwnerInput | ClaimCreateOrConnectWithoutOwnerInput[]
    upsert?: ClaimUpsertWithWhereUniqueWithoutOwnerInput | ClaimUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ClaimCreateManyOwnerInputEnvelope
    set?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    disconnect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    delete?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    update?: ClaimUpdateWithWhereUniqueWithoutOwnerInput | ClaimUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ClaimUpdateManyWithWhereWithoutOwnerInput | ClaimUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClaimUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ClaimCreateWithoutOwnerInput, ClaimUncheckedCreateWithoutOwnerInput> | ClaimCreateWithoutOwnerInput[] | ClaimUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutOwnerInput | ClaimCreateOrConnectWithoutOwnerInput[]
    upsert?: ClaimUpsertWithWhereUniqueWithoutOwnerInput | ClaimUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ClaimCreateManyOwnerInputEnvelope
    set?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    disconnect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    delete?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    update?: ClaimUpdateWithWhereUniqueWithoutOwnerInput | ClaimUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ClaimUpdateManyWithWhereWithoutOwnerInput | ClaimUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
  }

  export type CyclistCreateNestedOneWithoutClaimsInput = {
    create?: XOR<CyclistCreateWithoutClaimsInput, CyclistUncheckedCreateWithoutClaimsInput>
    connectOrCreate?: CyclistCreateOrConnectWithoutClaimsInput
    connect?: CyclistWhereUniqueInput
  }

  export type ItemCreateNestedOneWithoutInClaimsInput = {
    create?: XOR<ItemCreateWithoutInClaimsInput, ItemUncheckedCreateWithoutInClaimsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutInClaimsInput
    connect?: ItemWhereUniqueInput
  }

  export type CyclistUpdateOneWithoutClaimsNestedInput = {
    create?: XOR<CyclistCreateWithoutClaimsInput, CyclistUncheckedCreateWithoutClaimsInput>
    connectOrCreate?: CyclistCreateOrConnectWithoutClaimsInput
    upsert?: CyclistUpsertWithoutClaimsInput
    disconnect?: CyclistWhereInput | boolean
    delete?: CyclistWhereInput | boolean
    connect?: CyclistWhereUniqueInput
    update?: XOR<XOR<CyclistUpdateToOneWithWhereWithoutClaimsInput, CyclistUpdateWithoutClaimsInput>, CyclistUncheckedUpdateWithoutClaimsInput>
  }

  export type ItemUpdateOneWithoutInClaimsNestedInput = {
    create?: XOR<ItemCreateWithoutInClaimsInput, ItemUncheckedCreateWithoutInClaimsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutInClaimsInput
    upsert?: ItemUpsertWithoutInClaimsInput
    disconnect?: ItemWhereInput | boolean
    delete?: ItemWhereInput | boolean
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutInClaimsInput, ItemUpdateWithoutInClaimsInput>, ItemUncheckedUpdateWithoutInClaimsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BrandMemberCreateNestedManyWithoutProducerInput = {
    create?: XOR<BrandMemberCreateWithoutProducerInput, BrandMemberUncheckedCreateWithoutProducerInput> | BrandMemberCreateWithoutProducerInput[] | BrandMemberUncheckedCreateWithoutProducerInput[]
    connectOrCreate?: BrandMemberCreateOrConnectWithoutProducerInput | BrandMemberCreateOrConnectWithoutProducerInput[]
    createMany?: BrandMemberCreateManyProducerInputEnvelope
    connect?: BrandMemberWhereUniqueInput | BrandMemberWhereUniqueInput[]
  }

  export type BrandMemberUncheckedCreateNestedManyWithoutProducerInput = {
    create?: XOR<BrandMemberCreateWithoutProducerInput, BrandMemberUncheckedCreateWithoutProducerInput> | BrandMemberCreateWithoutProducerInput[] | BrandMemberUncheckedCreateWithoutProducerInput[]
    connectOrCreate?: BrandMemberCreateOrConnectWithoutProducerInput | BrandMemberCreateOrConnectWithoutProducerInput[]
    createMany?: BrandMemberCreateManyProducerInputEnvelope
    connect?: BrandMemberWhereUniqueInput | BrandMemberWhereUniqueInput[]
  }

  export type BrandMemberUpdateManyWithoutProducerNestedInput = {
    create?: XOR<BrandMemberCreateWithoutProducerInput, BrandMemberUncheckedCreateWithoutProducerInput> | BrandMemberCreateWithoutProducerInput[] | BrandMemberUncheckedCreateWithoutProducerInput[]
    connectOrCreate?: BrandMemberCreateOrConnectWithoutProducerInput | BrandMemberCreateOrConnectWithoutProducerInput[]
    upsert?: BrandMemberUpsertWithWhereUniqueWithoutProducerInput | BrandMemberUpsertWithWhereUniqueWithoutProducerInput[]
    createMany?: BrandMemberCreateManyProducerInputEnvelope
    set?: BrandMemberWhereUniqueInput | BrandMemberWhereUniqueInput[]
    disconnect?: BrandMemberWhereUniqueInput | BrandMemberWhereUniqueInput[]
    delete?: BrandMemberWhereUniqueInput | BrandMemberWhereUniqueInput[]
    connect?: BrandMemberWhereUniqueInput | BrandMemberWhereUniqueInput[]
    update?: BrandMemberUpdateWithWhereUniqueWithoutProducerInput | BrandMemberUpdateWithWhereUniqueWithoutProducerInput[]
    updateMany?: BrandMemberUpdateManyWithWhereWithoutProducerInput | BrandMemberUpdateManyWithWhereWithoutProducerInput[]
    deleteMany?: BrandMemberScalarWhereInput | BrandMemberScalarWhereInput[]
  }

  export type BrandMemberUncheckedUpdateManyWithoutProducerNestedInput = {
    create?: XOR<BrandMemberCreateWithoutProducerInput, BrandMemberUncheckedCreateWithoutProducerInput> | BrandMemberCreateWithoutProducerInput[] | BrandMemberUncheckedCreateWithoutProducerInput[]
    connectOrCreate?: BrandMemberCreateOrConnectWithoutProducerInput | BrandMemberCreateOrConnectWithoutProducerInput[]
    upsert?: BrandMemberUpsertWithWhereUniqueWithoutProducerInput | BrandMemberUpsertWithWhereUniqueWithoutProducerInput[]
    createMany?: BrandMemberCreateManyProducerInputEnvelope
    set?: BrandMemberWhereUniqueInput | BrandMemberWhereUniqueInput[]
    disconnect?: BrandMemberWhereUniqueInput | BrandMemberWhereUniqueInput[]
    delete?: BrandMemberWhereUniqueInput | BrandMemberWhereUniqueInput[]
    connect?: BrandMemberWhereUniqueInput | BrandMemberWhereUniqueInput[]
    update?: BrandMemberUpdateWithWhereUniqueWithoutProducerInput | BrandMemberUpdateWithWhereUniqueWithoutProducerInput[]
    updateMany?: BrandMemberUpdateManyWithWhereWithoutProducerInput | BrandMemberUpdateManyWithWhereWithoutProducerInput[]
    deleteMany?: BrandMemberScalarWhereInput | BrandMemberScalarWhereInput[]
  }

  export type BrandLabelCreateNestedOneWithoutLabelMembershipsInput = {
    create?: XOR<BrandLabelCreateWithoutLabelMembershipsInput, BrandLabelUncheckedCreateWithoutLabelMembershipsInput>
    connectOrCreate?: BrandLabelCreateOrConnectWithoutLabelMembershipsInput
    connect?: BrandLabelWhereUniqueInput
  }

  export type ProducerCreateNestedOneWithoutLabelMembershipsInput = {
    create?: XOR<ProducerCreateWithoutLabelMembershipsInput, ProducerUncheckedCreateWithoutLabelMembershipsInput>
    connectOrCreate?: ProducerCreateOrConnectWithoutLabelMembershipsInput
    connect?: ProducerWhereUniqueInput
  }

  export type BrandLabelUpdateOneWithoutLabelMembershipsNestedInput = {
    create?: XOR<BrandLabelCreateWithoutLabelMembershipsInput, BrandLabelUncheckedCreateWithoutLabelMembershipsInput>
    connectOrCreate?: BrandLabelCreateOrConnectWithoutLabelMembershipsInput
    upsert?: BrandLabelUpsertWithoutLabelMembershipsInput
    disconnect?: BrandLabelWhereInput | boolean
    delete?: BrandLabelWhereInput | boolean
    connect?: BrandLabelWhereUniqueInput
    update?: XOR<XOR<BrandLabelUpdateToOneWithWhereWithoutLabelMembershipsInput, BrandLabelUpdateWithoutLabelMembershipsInput>, BrandLabelUncheckedUpdateWithoutLabelMembershipsInput>
  }

  export type ProducerUpdateOneWithoutLabelMembershipsNestedInput = {
    create?: XOR<ProducerCreateWithoutLabelMembershipsInput, ProducerUncheckedCreateWithoutLabelMembershipsInput>
    connectOrCreate?: ProducerCreateOrConnectWithoutLabelMembershipsInput
    upsert?: ProducerUpsertWithoutLabelMembershipsInput
    disconnect?: ProducerWhereInput | boolean
    delete?: ProducerWhereInput | boolean
    connect?: ProducerWhereUniqueInput
    update?: XOR<XOR<ProducerUpdateToOneWithWhereWithoutLabelMembershipsInput, ProducerUpdateWithoutLabelMembershipsInput>, ProducerUncheckedUpdateWithoutLabelMembershipsInput>
  }

  export type BrandMemberCreateNestedManyWithoutBrandLabelInput = {
    create?: XOR<BrandMemberCreateWithoutBrandLabelInput, BrandMemberUncheckedCreateWithoutBrandLabelInput> | BrandMemberCreateWithoutBrandLabelInput[] | BrandMemberUncheckedCreateWithoutBrandLabelInput[]
    connectOrCreate?: BrandMemberCreateOrConnectWithoutBrandLabelInput | BrandMemberCreateOrConnectWithoutBrandLabelInput[]
    createMany?: BrandMemberCreateManyBrandLabelInputEnvelope
    connect?: BrandMemberWhereUniqueInput | BrandMemberWhereUniqueInput[]
  }

  export type ItemCreateNestedManyWithoutBrandLabelInput = {
    create?: XOR<ItemCreateWithoutBrandLabelInput, ItemUncheckedCreateWithoutBrandLabelInput> | ItemCreateWithoutBrandLabelInput[] | ItemUncheckedCreateWithoutBrandLabelInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutBrandLabelInput | ItemCreateOrConnectWithoutBrandLabelInput[]
    createMany?: ItemCreateManyBrandLabelInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type BrandMemberUncheckedCreateNestedManyWithoutBrandLabelInput = {
    create?: XOR<BrandMemberCreateWithoutBrandLabelInput, BrandMemberUncheckedCreateWithoutBrandLabelInput> | BrandMemberCreateWithoutBrandLabelInput[] | BrandMemberUncheckedCreateWithoutBrandLabelInput[]
    connectOrCreate?: BrandMemberCreateOrConnectWithoutBrandLabelInput | BrandMemberCreateOrConnectWithoutBrandLabelInput[]
    createMany?: BrandMemberCreateManyBrandLabelInputEnvelope
    connect?: BrandMemberWhereUniqueInput | BrandMemberWhereUniqueInput[]
  }

  export type ItemUncheckedCreateNestedManyWithoutBrandLabelInput = {
    create?: XOR<ItemCreateWithoutBrandLabelInput, ItemUncheckedCreateWithoutBrandLabelInput> | ItemCreateWithoutBrandLabelInput[] | ItemUncheckedCreateWithoutBrandLabelInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutBrandLabelInput | ItemCreateOrConnectWithoutBrandLabelInput[]
    createMany?: ItemCreateManyBrandLabelInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type BrandMemberUpdateManyWithoutBrandLabelNestedInput = {
    create?: XOR<BrandMemberCreateWithoutBrandLabelInput, BrandMemberUncheckedCreateWithoutBrandLabelInput> | BrandMemberCreateWithoutBrandLabelInput[] | BrandMemberUncheckedCreateWithoutBrandLabelInput[]
    connectOrCreate?: BrandMemberCreateOrConnectWithoutBrandLabelInput | BrandMemberCreateOrConnectWithoutBrandLabelInput[]
    upsert?: BrandMemberUpsertWithWhereUniqueWithoutBrandLabelInput | BrandMemberUpsertWithWhereUniqueWithoutBrandLabelInput[]
    createMany?: BrandMemberCreateManyBrandLabelInputEnvelope
    set?: BrandMemberWhereUniqueInput | BrandMemberWhereUniqueInput[]
    disconnect?: BrandMemberWhereUniqueInput | BrandMemberWhereUniqueInput[]
    delete?: BrandMemberWhereUniqueInput | BrandMemberWhereUniqueInput[]
    connect?: BrandMemberWhereUniqueInput | BrandMemberWhereUniqueInput[]
    update?: BrandMemberUpdateWithWhereUniqueWithoutBrandLabelInput | BrandMemberUpdateWithWhereUniqueWithoutBrandLabelInput[]
    updateMany?: BrandMemberUpdateManyWithWhereWithoutBrandLabelInput | BrandMemberUpdateManyWithWhereWithoutBrandLabelInput[]
    deleteMany?: BrandMemberScalarWhereInput | BrandMemberScalarWhereInput[]
  }

  export type ItemUpdateManyWithoutBrandLabelNestedInput = {
    create?: XOR<ItemCreateWithoutBrandLabelInput, ItemUncheckedCreateWithoutBrandLabelInput> | ItemCreateWithoutBrandLabelInput[] | ItemUncheckedCreateWithoutBrandLabelInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutBrandLabelInput | ItemCreateOrConnectWithoutBrandLabelInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutBrandLabelInput | ItemUpsertWithWhereUniqueWithoutBrandLabelInput[]
    createMany?: ItemCreateManyBrandLabelInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutBrandLabelInput | ItemUpdateWithWhereUniqueWithoutBrandLabelInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutBrandLabelInput | ItemUpdateManyWithWhereWithoutBrandLabelInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type BrandMemberUncheckedUpdateManyWithoutBrandLabelNestedInput = {
    create?: XOR<BrandMemberCreateWithoutBrandLabelInput, BrandMemberUncheckedCreateWithoutBrandLabelInput> | BrandMemberCreateWithoutBrandLabelInput[] | BrandMemberUncheckedCreateWithoutBrandLabelInput[]
    connectOrCreate?: BrandMemberCreateOrConnectWithoutBrandLabelInput | BrandMemberCreateOrConnectWithoutBrandLabelInput[]
    upsert?: BrandMemberUpsertWithWhereUniqueWithoutBrandLabelInput | BrandMemberUpsertWithWhereUniqueWithoutBrandLabelInput[]
    createMany?: BrandMemberCreateManyBrandLabelInputEnvelope
    set?: BrandMemberWhereUniqueInput | BrandMemberWhereUniqueInput[]
    disconnect?: BrandMemberWhereUniqueInput | BrandMemberWhereUniqueInput[]
    delete?: BrandMemberWhereUniqueInput | BrandMemberWhereUniqueInput[]
    connect?: BrandMemberWhereUniqueInput | BrandMemberWhereUniqueInput[]
    update?: BrandMemberUpdateWithWhereUniqueWithoutBrandLabelInput | BrandMemberUpdateWithWhereUniqueWithoutBrandLabelInput[]
    updateMany?: BrandMemberUpdateManyWithWhereWithoutBrandLabelInput | BrandMemberUpdateManyWithWhereWithoutBrandLabelInput[]
    deleteMany?: BrandMemberScalarWhereInput | BrandMemberScalarWhereInput[]
  }

  export type ItemUncheckedUpdateManyWithoutBrandLabelNestedInput = {
    create?: XOR<ItemCreateWithoutBrandLabelInput, ItemUncheckedCreateWithoutBrandLabelInput> | ItemCreateWithoutBrandLabelInput[] | ItemUncheckedCreateWithoutBrandLabelInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutBrandLabelInput | ItemCreateOrConnectWithoutBrandLabelInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutBrandLabelInput | ItemUpsertWithWhereUniqueWithoutBrandLabelInput[]
    createMany?: ItemCreateManyBrandLabelInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutBrandLabelInput | ItemUpdateWithWhereUniqueWithoutBrandLabelInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutBrandLabelInput | ItemUpdateManyWithWhereWithoutBrandLabelInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type PropertyGroupCreateNestedManyWithoutItemTypeInput = {
    create?: XOR<PropertyGroupCreateWithoutItemTypeInput, PropertyGroupUncheckedCreateWithoutItemTypeInput> | PropertyGroupCreateWithoutItemTypeInput[] | PropertyGroupUncheckedCreateWithoutItemTypeInput[]
    connectOrCreate?: PropertyGroupCreateOrConnectWithoutItemTypeInput | PropertyGroupCreateOrConnectWithoutItemTypeInput[]
    createMany?: PropertyGroupCreateManyItemTypeInputEnvelope
    connect?: PropertyGroupWhereUniqueInput | PropertyGroupWhereUniqueInput[]
  }

  export type PropertyGroupUncheckedCreateNestedManyWithoutItemTypeInput = {
    create?: XOR<PropertyGroupCreateWithoutItemTypeInput, PropertyGroupUncheckedCreateWithoutItemTypeInput> | PropertyGroupCreateWithoutItemTypeInput[] | PropertyGroupUncheckedCreateWithoutItemTypeInput[]
    connectOrCreate?: PropertyGroupCreateOrConnectWithoutItemTypeInput | PropertyGroupCreateOrConnectWithoutItemTypeInput[]
    createMany?: PropertyGroupCreateManyItemTypeInputEnvelope
    connect?: PropertyGroupWhereUniqueInput | PropertyGroupWhereUniqueInput[]
  }

  export type PropertyGroupUpdateManyWithoutItemTypeNestedInput = {
    create?: XOR<PropertyGroupCreateWithoutItemTypeInput, PropertyGroupUncheckedCreateWithoutItemTypeInput> | PropertyGroupCreateWithoutItemTypeInput[] | PropertyGroupUncheckedCreateWithoutItemTypeInput[]
    connectOrCreate?: PropertyGroupCreateOrConnectWithoutItemTypeInput | PropertyGroupCreateOrConnectWithoutItemTypeInput[]
    upsert?: PropertyGroupUpsertWithWhereUniqueWithoutItemTypeInput | PropertyGroupUpsertWithWhereUniqueWithoutItemTypeInput[]
    createMany?: PropertyGroupCreateManyItemTypeInputEnvelope
    set?: PropertyGroupWhereUniqueInput | PropertyGroupWhereUniqueInput[]
    disconnect?: PropertyGroupWhereUniqueInput | PropertyGroupWhereUniqueInput[]
    delete?: PropertyGroupWhereUniqueInput | PropertyGroupWhereUniqueInput[]
    connect?: PropertyGroupWhereUniqueInput | PropertyGroupWhereUniqueInput[]
    update?: PropertyGroupUpdateWithWhereUniqueWithoutItemTypeInput | PropertyGroupUpdateWithWhereUniqueWithoutItemTypeInput[]
    updateMany?: PropertyGroupUpdateManyWithWhereWithoutItemTypeInput | PropertyGroupUpdateManyWithWhereWithoutItemTypeInput[]
    deleteMany?: PropertyGroupScalarWhereInput | PropertyGroupScalarWhereInput[]
  }

  export type PropertyGroupUncheckedUpdateManyWithoutItemTypeNestedInput = {
    create?: XOR<PropertyGroupCreateWithoutItemTypeInput, PropertyGroupUncheckedCreateWithoutItemTypeInput> | PropertyGroupCreateWithoutItemTypeInput[] | PropertyGroupUncheckedCreateWithoutItemTypeInput[]
    connectOrCreate?: PropertyGroupCreateOrConnectWithoutItemTypeInput | PropertyGroupCreateOrConnectWithoutItemTypeInput[]
    upsert?: PropertyGroupUpsertWithWhereUniqueWithoutItemTypeInput | PropertyGroupUpsertWithWhereUniqueWithoutItemTypeInput[]
    createMany?: PropertyGroupCreateManyItemTypeInputEnvelope
    set?: PropertyGroupWhereUniqueInput | PropertyGroupWhereUniqueInput[]
    disconnect?: PropertyGroupWhereUniqueInput | PropertyGroupWhereUniqueInput[]
    delete?: PropertyGroupWhereUniqueInput | PropertyGroupWhereUniqueInput[]
    connect?: PropertyGroupWhereUniqueInput | PropertyGroupWhereUniqueInput[]
    update?: PropertyGroupUpdateWithWhereUniqueWithoutItemTypeInput | PropertyGroupUpdateWithWhereUniqueWithoutItemTypeInput[]
    updateMany?: PropertyGroupUpdateManyWithWhereWithoutItemTypeInput | PropertyGroupUpdateManyWithWhereWithoutItemTypeInput[]
    deleteMany?: PropertyGroupScalarWhereInput | PropertyGroupScalarWhereInput[]
  }

  export type ItemTypeCreateNestedOneWithoutPropertyGroupsInput = {
    create?: XOR<ItemTypeCreateWithoutPropertyGroupsInput, ItemTypeUncheckedCreateWithoutPropertyGroupsInput>
    connectOrCreate?: ItemTypeCreateOrConnectWithoutPropertyGroupsInput
    connect?: ItemTypeWhereUniqueInput
  }

  export type PropertyCreateNestedManyWithoutGroupInput = {
    create?: XOR<PropertyCreateWithoutGroupInput, PropertyUncheckedCreateWithoutGroupInput> | PropertyCreateWithoutGroupInput[] | PropertyUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutGroupInput | PropertyCreateOrConnectWithoutGroupInput[]
    createMany?: PropertyCreateManyGroupInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type PropertyUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<PropertyCreateWithoutGroupInput, PropertyUncheckedCreateWithoutGroupInput> | PropertyCreateWithoutGroupInput[] | PropertyUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutGroupInput | PropertyCreateOrConnectWithoutGroupInput[]
    createMany?: PropertyCreateManyGroupInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type ItemTypeUpdateOneWithoutPropertyGroupsNestedInput = {
    create?: XOR<ItemTypeCreateWithoutPropertyGroupsInput, ItemTypeUncheckedCreateWithoutPropertyGroupsInput>
    connectOrCreate?: ItemTypeCreateOrConnectWithoutPropertyGroupsInput
    upsert?: ItemTypeUpsertWithoutPropertyGroupsInput
    disconnect?: ItemTypeWhereInput | boolean
    delete?: ItemTypeWhereInput | boolean
    connect?: ItemTypeWhereUniqueInput
    update?: XOR<XOR<ItemTypeUpdateToOneWithWhereWithoutPropertyGroupsInput, ItemTypeUpdateWithoutPropertyGroupsInput>, ItemTypeUncheckedUpdateWithoutPropertyGroupsInput>
  }

  export type PropertyUpdateManyWithoutGroupNestedInput = {
    create?: XOR<PropertyCreateWithoutGroupInput, PropertyUncheckedCreateWithoutGroupInput> | PropertyCreateWithoutGroupInput[] | PropertyUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutGroupInput | PropertyCreateOrConnectWithoutGroupInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutGroupInput | PropertyUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: PropertyCreateManyGroupInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutGroupInput | PropertyUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutGroupInput | PropertyUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type PropertyUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<PropertyCreateWithoutGroupInput, PropertyUncheckedCreateWithoutGroupInput> | PropertyCreateWithoutGroupInput[] | PropertyUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutGroupInput | PropertyCreateOrConnectWithoutGroupInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutGroupInput | PropertyUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: PropertyCreateManyGroupInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutGroupInput | PropertyUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutGroupInput | PropertyUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type PropertyGroupCreateNestedOneWithoutPropertiesInput = {
    create?: XOR<PropertyGroupCreateWithoutPropertiesInput, PropertyGroupUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: PropertyGroupCreateOrConnectWithoutPropertiesInput
    connect?: PropertyGroupWhereUniqueInput
  }

  export type ItemPropertyCreateNestedManyWithoutPropertyInput = {
    create?: XOR<ItemPropertyCreateWithoutPropertyInput, ItemPropertyUncheckedCreateWithoutPropertyInput> | ItemPropertyCreateWithoutPropertyInput[] | ItemPropertyUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ItemPropertyCreateOrConnectWithoutPropertyInput | ItemPropertyCreateOrConnectWithoutPropertyInput[]
    createMany?: ItemPropertyCreateManyPropertyInputEnvelope
    connect?: ItemPropertyWhereUniqueInput | ItemPropertyWhereUniqueInput[]
  }

  export type ItemPropertyUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<ItemPropertyCreateWithoutPropertyInput, ItemPropertyUncheckedCreateWithoutPropertyInput> | ItemPropertyCreateWithoutPropertyInput[] | ItemPropertyUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ItemPropertyCreateOrConnectWithoutPropertyInput | ItemPropertyCreateOrConnectWithoutPropertyInput[]
    createMany?: ItemPropertyCreateManyPropertyInputEnvelope
    connect?: ItemPropertyWhereUniqueInput | ItemPropertyWhereUniqueInput[]
  }

  export type PropertyGroupUpdateOneWithoutPropertiesNestedInput = {
    create?: XOR<PropertyGroupCreateWithoutPropertiesInput, PropertyGroupUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: PropertyGroupCreateOrConnectWithoutPropertiesInput
    upsert?: PropertyGroupUpsertWithoutPropertiesInput
    disconnect?: PropertyGroupWhereInput | boolean
    delete?: PropertyGroupWhereInput | boolean
    connect?: PropertyGroupWhereUniqueInput
    update?: XOR<XOR<PropertyGroupUpdateToOneWithWhereWithoutPropertiesInput, PropertyGroupUpdateWithoutPropertiesInput>, PropertyGroupUncheckedUpdateWithoutPropertiesInput>
  }

  export type ItemPropertyUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<ItemPropertyCreateWithoutPropertyInput, ItemPropertyUncheckedCreateWithoutPropertyInput> | ItemPropertyCreateWithoutPropertyInput[] | ItemPropertyUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ItemPropertyCreateOrConnectWithoutPropertyInput | ItemPropertyCreateOrConnectWithoutPropertyInput[]
    upsert?: ItemPropertyUpsertWithWhereUniqueWithoutPropertyInput | ItemPropertyUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: ItemPropertyCreateManyPropertyInputEnvelope
    set?: ItemPropertyWhereUniqueInput | ItemPropertyWhereUniqueInput[]
    disconnect?: ItemPropertyWhereUniqueInput | ItemPropertyWhereUniqueInput[]
    delete?: ItemPropertyWhereUniqueInput | ItemPropertyWhereUniqueInput[]
    connect?: ItemPropertyWhereUniqueInput | ItemPropertyWhereUniqueInput[]
    update?: ItemPropertyUpdateWithWhereUniqueWithoutPropertyInput | ItemPropertyUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: ItemPropertyUpdateManyWithWhereWithoutPropertyInput | ItemPropertyUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: ItemPropertyScalarWhereInput | ItemPropertyScalarWhereInput[]
  }

  export type ItemPropertyUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<ItemPropertyCreateWithoutPropertyInput, ItemPropertyUncheckedCreateWithoutPropertyInput> | ItemPropertyCreateWithoutPropertyInput[] | ItemPropertyUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ItemPropertyCreateOrConnectWithoutPropertyInput | ItemPropertyCreateOrConnectWithoutPropertyInput[]
    upsert?: ItemPropertyUpsertWithWhereUniqueWithoutPropertyInput | ItemPropertyUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: ItemPropertyCreateManyPropertyInputEnvelope
    set?: ItemPropertyWhereUniqueInput | ItemPropertyWhereUniqueInput[]
    disconnect?: ItemPropertyWhereUniqueInput | ItemPropertyWhereUniqueInput[]
    delete?: ItemPropertyWhereUniqueInput | ItemPropertyWhereUniqueInput[]
    connect?: ItemPropertyWhereUniqueInput | ItemPropertyWhereUniqueInput[]
    update?: ItemPropertyUpdateWithWhereUniqueWithoutPropertyInput | ItemPropertyUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: ItemPropertyUpdateManyWithWhereWithoutPropertyInput | ItemPropertyUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: ItemPropertyScalarWhereInput | ItemPropertyScalarWhereInput[]
  }

  export type BrandLabelCreateNestedOneWithoutItemsInput = {
    create?: XOR<BrandLabelCreateWithoutItemsInput, BrandLabelUncheckedCreateWithoutItemsInput>
    connectOrCreate?: BrandLabelCreateOrConnectWithoutItemsInput
    connect?: BrandLabelWhereUniqueInput
  }

  export type ItemPropertyCreateNestedManyWithoutItemInput = {
    create?: XOR<ItemPropertyCreateWithoutItemInput, ItemPropertyUncheckedCreateWithoutItemInput> | ItemPropertyCreateWithoutItemInput[] | ItemPropertyUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemPropertyCreateOrConnectWithoutItemInput | ItemPropertyCreateOrConnectWithoutItemInput[]
    createMany?: ItemPropertyCreateManyItemInputEnvelope
    connect?: ItemPropertyWhereUniqueInput | ItemPropertyWhereUniqueInput[]
  }

  export type ClaimCreateNestedManyWithoutItemInput = {
    create?: XOR<ClaimCreateWithoutItemInput, ClaimUncheckedCreateWithoutItemInput> | ClaimCreateWithoutItemInput[] | ClaimUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutItemInput | ClaimCreateOrConnectWithoutItemInput[]
    createMany?: ClaimCreateManyItemInputEnvelope
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
  }

  export type AssemblyCreateNestedManyWithoutAssemblyItemInput = {
    create?: XOR<AssemblyCreateWithoutAssemblyItemInput, AssemblyUncheckedCreateWithoutAssemblyItemInput> | AssemblyCreateWithoutAssemblyItemInput[] | AssemblyUncheckedCreateWithoutAssemblyItemInput[]
    connectOrCreate?: AssemblyCreateOrConnectWithoutAssemblyItemInput | AssemblyCreateOrConnectWithoutAssemblyItemInput[]
    createMany?: AssemblyCreateManyAssemblyItemInputEnvelope
    connect?: AssemblyWhereUniqueInput | AssemblyWhereUniqueInput[]
  }

  export type AssemblyCreateNestedManyWithoutItemInput = {
    create?: XOR<AssemblyCreateWithoutItemInput, AssemblyUncheckedCreateWithoutItemInput> | AssemblyCreateWithoutItemInput[] | AssemblyUncheckedCreateWithoutItemInput[]
    connectOrCreate?: AssemblyCreateOrConnectWithoutItemInput | AssemblyCreateOrConnectWithoutItemInput[]
    createMany?: AssemblyCreateManyItemInputEnvelope
    connect?: AssemblyWhereUniqueInput | AssemblyWhereUniqueInput[]
  }

  export type ItemPropertyUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<ItemPropertyCreateWithoutItemInput, ItemPropertyUncheckedCreateWithoutItemInput> | ItemPropertyCreateWithoutItemInput[] | ItemPropertyUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemPropertyCreateOrConnectWithoutItemInput | ItemPropertyCreateOrConnectWithoutItemInput[]
    createMany?: ItemPropertyCreateManyItemInputEnvelope
    connect?: ItemPropertyWhereUniqueInput | ItemPropertyWhereUniqueInput[]
  }

  export type ClaimUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<ClaimCreateWithoutItemInput, ClaimUncheckedCreateWithoutItemInput> | ClaimCreateWithoutItemInput[] | ClaimUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutItemInput | ClaimCreateOrConnectWithoutItemInput[]
    createMany?: ClaimCreateManyItemInputEnvelope
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
  }

  export type AssemblyUncheckedCreateNestedManyWithoutAssemblyItemInput = {
    create?: XOR<AssemblyCreateWithoutAssemblyItemInput, AssemblyUncheckedCreateWithoutAssemblyItemInput> | AssemblyCreateWithoutAssemblyItemInput[] | AssemblyUncheckedCreateWithoutAssemblyItemInput[]
    connectOrCreate?: AssemblyCreateOrConnectWithoutAssemblyItemInput | AssemblyCreateOrConnectWithoutAssemblyItemInput[]
    createMany?: AssemblyCreateManyAssemblyItemInputEnvelope
    connect?: AssemblyWhereUniqueInput | AssemblyWhereUniqueInput[]
  }

  export type AssemblyUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<AssemblyCreateWithoutItemInput, AssemblyUncheckedCreateWithoutItemInput> | AssemblyCreateWithoutItemInput[] | AssemblyUncheckedCreateWithoutItemInput[]
    connectOrCreate?: AssemblyCreateOrConnectWithoutItemInput | AssemblyCreateOrConnectWithoutItemInput[]
    createMany?: AssemblyCreateManyItemInputEnvelope
    connect?: AssemblyWhereUniqueInput | AssemblyWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BrandLabelUpdateOneWithoutItemsNestedInput = {
    create?: XOR<BrandLabelCreateWithoutItemsInput, BrandLabelUncheckedCreateWithoutItemsInput>
    connectOrCreate?: BrandLabelCreateOrConnectWithoutItemsInput
    upsert?: BrandLabelUpsertWithoutItemsInput
    disconnect?: BrandLabelWhereInput | boolean
    delete?: BrandLabelWhereInput | boolean
    connect?: BrandLabelWhereUniqueInput
    update?: XOR<XOR<BrandLabelUpdateToOneWithWhereWithoutItemsInput, BrandLabelUpdateWithoutItemsInput>, BrandLabelUncheckedUpdateWithoutItemsInput>
  }

  export type ItemPropertyUpdateManyWithoutItemNestedInput = {
    create?: XOR<ItemPropertyCreateWithoutItemInput, ItemPropertyUncheckedCreateWithoutItemInput> | ItemPropertyCreateWithoutItemInput[] | ItemPropertyUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemPropertyCreateOrConnectWithoutItemInput | ItemPropertyCreateOrConnectWithoutItemInput[]
    upsert?: ItemPropertyUpsertWithWhereUniqueWithoutItemInput | ItemPropertyUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ItemPropertyCreateManyItemInputEnvelope
    set?: ItemPropertyWhereUniqueInput | ItemPropertyWhereUniqueInput[]
    disconnect?: ItemPropertyWhereUniqueInput | ItemPropertyWhereUniqueInput[]
    delete?: ItemPropertyWhereUniqueInput | ItemPropertyWhereUniqueInput[]
    connect?: ItemPropertyWhereUniqueInput | ItemPropertyWhereUniqueInput[]
    update?: ItemPropertyUpdateWithWhereUniqueWithoutItemInput | ItemPropertyUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ItemPropertyUpdateManyWithWhereWithoutItemInput | ItemPropertyUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ItemPropertyScalarWhereInput | ItemPropertyScalarWhereInput[]
  }

  export type ClaimUpdateManyWithoutItemNestedInput = {
    create?: XOR<ClaimCreateWithoutItemInput, ClaimUncheckedCreateWithoutItemInput> | ClaimCreateWithoutItemInput[] | ClaimUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutItemInput | ClaimCreateOrConnectWithoutItemInput[]
    upsert?: ClaimUpsertWithWhereUniqueWithoutItemInput | ClaimUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ClaimCreateManyItemInputEnvelope
    set?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    disconnect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    delete?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    update?: ClaimUpdateWithWhereUniqueWithoutItemInput | ClaimUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ClaimUpdateManyWithWhereWithoutItemInput | ClaimUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
  }

  export type AssemblyUpdateManyWithoutAssemblyItemNestedInput = {
    create?: XOR<AssemblyCreateWithoutAssemblyItemInput, AssemblyUncheckedCreateWithoutAssemblyItemInput> | AssemblyCreateWithoutAssemblyItemInput[] | AssemblyUncheckedCreateWithoutAssemblyItemInput[]
    connectOrCreate?: AssemblyCreateOrConnectWithoutAssemblyItemInput | AssemblyCreateOrConnectWithoutAssemblyItemInput[]
    upsert?: AssemblyUpsertWithWhereUniqueWithoutAssemblyItemInput | AssemblyUpsertWithWhereUniqueWithoutAssemblyItemInput[]
    createMany?: AssemblyCreateManyAssemblyItemInputEnvelope
    set?: AssemblyWhereUniqueInput | AssemblyWhereUniqueInput[]
    disconnect?: AssemblyWhereUniqueInput | AssemblyWhereUniqueInput[]
    delete?: AssemblyWhereUniqueInput | AssemblyWhereUniqueInput[]
    connect?: AssemblyWhereUniqueInput | AssemblyWhereUniqueInput[]
    update?: AssemblyUpdateWithWhereUniqueWithoutAssemblyItemInput | AssemblyUpdateWithWhereUniqueWithoutAssemblyItemInput[]
    updateMany?: AssemblyUpdateManyWithWhereWithoutAssemblyItemInput | AssemblyUpdateManyWithWhereWithoutAssemblyItemInput[]
    deleteMany?: AssemblyScalarWhereInput | AssemblyScalarWhereInput[]
  }

  export type AssemblyUpdateManyWithoutItemNestedInput = {
    create?: XOR<AssemblyCreateWithoutItemInput, AssemblyUncheckedCreateWithoutItemInput> | AssemblyCreateWithoutItemInput[] | AssemblyUncheckedCreateWithoutItemInput[]
    connectOrCreate?: AssemblyCreateOrConnectWithoutItemInput | AssemblyCreateOrConnectWithoutItemInput[]
    upsert?: AssemblyUpsertWithWhereUniqueWithoutItemInput | AssemblyUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: AssemblyCreateManyItemInputEnvelope
    set?: AssemblyWhereUniqueInput | AssemblyWhereUniqueInput[]
    disconnect?: AssemblyWhereUniqueInput | AssemblyWhereUniqueInput[]
    delete?: AssemblyWhereUniqueInput | AssemblyWhereUniqueInput[]
    connect?: AssemblyWhereUniqueInput | AssemblyWhereUniqueInput[]
    update?: AssemblyUpdateWithWhereUniqueWithoutItemInput | AssemblyUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: AssemblyUpdateManyWithWhereWithoutItemInput | AssemblyUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: AssemblyScalarWhereInput | AssemblyScalarWhereInput[]
  }

  export type ItemPropertyUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<ItemPropertyCreateWithoutItemInput, ItemPropertyUncheckedCreateWithoutItemInput> | ItemPropertyCreateWithoutItemInput[] | ItemPropertyUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemPropertyCreateOrConnectWithoutItemInput | ItemPropertyCreateOrConnectWithoutItemInput[]
    upsert?: ItemPropertyUpsertWithWhereUniqueWithoutItemInput | ItemPropertyUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ItemPropertyCreateManyItemInputEnvelope
    set?: ItemPropertyWhereUniqueInput | ItemPropertyWhereUniqueInput[]
    disconnect?: ItemPropertyWhereUniqueInput | ItemPropertyWhereUniqueInput[]
    delete?: ItemPropertyWhereUniqueInput | ItemPropertyWhereUniqueInput[]
    connect?: ItemPropertyWhereUniqueInput | ItemPropertyWhereUniqueInput[]
    update?: ItemPropertyUpdateWithWhereUniqueWithoutItemInput | ItemPropertyUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ItemPropertyUpdateManyWithWhereWithoutItemInput | ItemPropertyUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ItemPropertyScalarWhereInput | ItemPropertyScalarWhereInput[]
  }

  export type ClaimUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<ClaimCreateWithoutItemInput, ClaimUncheckedCreateWithoutItemInput> | ClaimCreateWithoutItemInput[] | ClaimUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutItemInput | ClaimCreateOrConnectWithoutItemInput[]
    upsert?: ClaimUpsertWithWhereUniqueWithoutItemInput | ClaimUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ClaimCreateManyItemInputEnvelope
    set?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    disconnect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    delete?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    update?: ClaimUpdateWithWhereUniqueWithoutItemInput | ClaimUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ClaimUpdateManyWithWhereWithoutItemInput | ClaimUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
  }

  export type AssemblyUncheckedUpdateManyWithoutAssemblyItemNestedInput = {
    create?: XOR<AssemblyCreateWithoutAssemblyItemInput, AssemblyUncheckedCreateWithoutAssemblyItemInput> | AssemblyCreateWithoutAssemblyItemInput[] | AssemblyUncheckedCreateWithoutAssemblyItemInput[]
    connectOrCreate?: AssemblyCreateOrConnectWithoutAssemblyItemInput | AssemblyCreateOrConnectWithoutAssemblyItemInput[]
    upsert?: AssemblyUpsertWithWhereUniqueWithoutAssemblyItemInput | AssemblyUpsertWithWhereUniqueWithoutAssemblyItemInput[]
    createMany?: AssemblyCreateManyAssemblyItemInputEnvelope
    set?: AssemblyWhereUniqueInput | AssemblyWhereUniqueInput[]
    disconnect?: AssemblyWhereUniqueInput | AssemblyWhereUniqueInput[]
    delete?: AssemblyWhereUniqueInput | AssemblyWhereUniqueInput[]
    connect?: AssemblyWhereUniqueInput | AssemblyWhereUniqueInput[]
    update?: AssemblyUpdateWithWhereUniqueWithoutAssemblyItemInput | AssemblyUpdateWithWhereUniqueWithoutAssemblyItemInput[]
    updateMany?: AssemblyUpdateManyWithWhereWithoutAssemblyItemInput | AssemblyUpdateManyWithWhereWithoutAssemblyItemInput[]
    deleteMany?: AssemblyScalarWhereInput | AssemblyScalarWhereInput[]
  }

  export type AssemblyUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<AssemblyCreateWithoutItemInput, AssemblyUncheckedCreateWithoutItemInput> | AssemblyCreateWithoutItemInput[] | AssemblyUncheckedCreateWithoutItemInput[]
    connectOrCreate?: AssemblyCreateOrConnectWithoutItemInput | AssemblyCreateOrConnectWithoutItemInput[]
    upsert?: AssemblyUpsertWithWhereUniqueWithoutItemInput | AssemblyUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: AssemblyCreateManyItemInputEnvelope
    set?: AssemblyWhereUniqueInput | AssemblyWhereUniqueInput[]
    disconnect?: AssemblyWhereUniqueInput | AssemblyWhereUniqueInput[]
    delete?: AssemblyWhereUniqueInput | AssemblyWhereUniqueInput[]
    connect?: AssemblyWhereUniqueInput | AssemblyWhereUniqueInput[]
    update?: AssemblyUpdateWithWhereUniqueWithoutItemInput | AssemblyUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: AssemblyUpdateManyWithWhereWithoutItemInput | AssemblyUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: AssemblyScalarWhereInput | AssemblyScalarWhereInput[]
  }

  export type ItemCreateNestedOneWithoutPropertiesInput = {
    create?: XOR<ItemCreateWithoutPropertiesInput, ItemUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: ItemCreateOrConnectWithoutPropertiesInput
    connect?: ItemWhereUniqueInput
  }

  export type PropertyCreateNestedOneWithoutItemPropertiesInput = {
    create?: XOR<PropertyCreateWithoutItemPropertiesInput, PropertyUncheckedCreateWithoutItemPropertiesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutItemPropertiesInput
    connect?: PropertyWhereUniqueInput
  }

  export type ItemUpdateOneWithoutPropertiesNestedInput = {
    create?: XOR<ItemCreateWithoutPropertiesInput, ItemUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: ItemCreateOrConnectWithoutPropertiesInput
    upsert?: ItemUpsertWithoutPropertiesInput
    disconnect?: ItemWhereInput | boolean
    delete?: ItemWhereInput | boolean
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutPropertiesInput, ItemUpdateWithoutPropertiesInput>, ItemUncheckedUpdateWithoutPropertiesInput>
  }

  export type PropertyUpdateOneWithoutItemPropertiesNestedInput = {
    create?: XOR<PropertyCreateWithoutItemPropertiesInput, PropertyUncheckedCreateWithoutItemPropertiesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutItemPropertiesInput
    upsert?: PropertyUpsertWithoutItemPropertiesInput
    disconnect?: PropertyWhereInput | boolean
    delete?: PropertyWhereInput | boolean
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutItemPropertiesInput, PropertyUpdateWithoutItemPropertiesInput>, PropertyUncheckedUpdateWithoutItemPropertiesInput>
  }

  export type ItemCreateNestedOneWithoutHasAssemblyItemsInput = {
    create?: XOR<ItemCreateWithoutHasAssemblyItemsInput, ItemUncheckedCreateWithoutHasAssemblyItemsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutHasAssemblyItemsInput
    connect?: ItemWhereUniqueInput
  }

  export type ItemCreateNestedOneWithoutInAssembliesInput = {
    create?: XOR<ItemCreateWithoutInAssembliesInput, ItemUncheckedCreateWithoutInAssembliesInput>
    connectOrCreate?: ItemCreateOrConnectWithoutInAssembliesInput
    connect?: ItemWhereUniqueInput
  }

  export type ItemUpdateOneWithoutHasAssemblyItemsNestedInput = {
    create?: XOR<ItemCreateWithoutHasAssemblyItemsInput, ItemUncheckedCreateWithoutHasAssemblyItemsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutHasAssemblyItemsInput
    upsert?: ItemUpsertWithoutHasAssemblyItemsInput
    disconnect?: ItemWhereInput | boolean
    delete?: ItemWhereInput | boolean
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutHasAssemblyItemsInput, ItemUpdateWithoutHasAssemblyItemsInput>, ItemUncheckedUpdateWithoutHasAssemblyItemsInput>
  }

  export type ItemUpdateOneWithoutInAssembliesNestedInput = {
    create?: XOR<ItemCreateWithoutInAssembliesInput, ItemUncheckedCreateWithoutInAssembliesInput>
    connectOrCreate?: ItemCreateOrConnectWithoutInAssembliesInput
    upsert?: ItemUpsertWithoutInAssembliesInput
    disconnect?: ItemWhereInput | boolean
    delete?: ItemWhereInput | boolean
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutInAssembliesInput, ItemUpdateWithoutInAssembliesInput>, ItemUncheckedUpdateWithoutInAssembliesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type ClaimCreateWithoutOwnerInput = {
    claimType?: string | null
    acquired?: Date | string | null
    condition?: string | null
    notes?: string | null
    item?: ItemCreateNestedOneWithoutInClaimsInput
  }

  export type ClaimUncheckedCreateWithoutOwnerInput = {
    id?: number
    claimType?: string | null
    acquired?: Date | string | null
    condition?: string | null
    notes?: string | null
    itemId?: number | null
  }

  export type ClaimCreateOrConnectWithoutOwnerInput = {
    where: ClaimWhereUniqueInput
    create: XOR<ClaimCreateWithoutOwnerInput, ClaimUncheckedCreateWithoutOwnerInput>
  }

  export type ClaimCreateManyOwnerInputEnvelope = {
    data: ClaimCreateManyOwnerInput | ClaimCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type ClaimUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ClaimWhereUniqueInput
    update: XOR<ClaimUpdateWithoutOwnerInput, ClaimUncheckedUpdateWithoutOwnerInput>
    create: XOR<ClaimCreateWithoutOwnerInput, ClaimUncheckedCreateWithoutOwnerInput>
  }

  export type ClaimUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ClaimWhereUniqueInput
    data: XOR<ClaimUpdateWithoutOwnerInput, ClaimUncheckedUpdateWithoutOwnerInput>
  }

  export type ClaimUpdateManyWithWhereWithoutOwnerInput = {
    where: ClaimScalarWhereInput
    data: XOR<ClaimUpdateManyMutationInput, ClaimUncheckedUpdateManyWithoutOwnerInput>
  }

  export type ClaimScalarWhereInput = {
    AND?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
    OR?: ClaimScalarWhereInput[]
    NOT?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
    id?: IntFilter<"Claim"> | number
    claimType?: StringNullableFilter<"Claim"> | string | null
    acquired?: DateTimeNullableFilter<"Claim"> | Date | string | null
    condition?: StringNullableFilter<"Claim"> | string | null
    notes?: StringNullableFilter<"Claim"> | string | null
    ownerId?: IntNullableFilter<"Claim"> | number | null
    itemId?: IntNullableFilter<"Claim"> | number | null
  }

  export type CyclistCreateWithoutClaimsInput = {
    name?: string | null
    nameLast?: string | null
    nameFirst?: string | null
    providerId: string
    provider?: string | null
    roles?: string | null
    registered?: Date | string | null
    lastLogIn?: Date | string | null
  }

  export type CyclistUncheckedCreateWithoutClaimsInput = {
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

  export type CyclistCreateOrConnectWithoutClaimsInput = {
    where: CyclistWhereUniqueInput
    create: XOR<CyclistCreateWithoutClaimsInput, CyclistUncheckedCreateWithoutClaimsInput>
  }

  export type ItemCreateWithoutInClaimsInput = {
    type?: string | null
    name?: string | null
    notes?: string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    weightUnit?: string | null
    brandLabel?: BrandLabelCreateNestedOneWithoutItemsInput
    properties?: ItemPropertyCreateNestedManyWithoutItemInput
    hasAssemblyItems?: AssemblyCreateNestedManyWithoutAssemblyItemInput
    inAssemblies?: AssemblyCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutInClaimsInput = {
    id?: number
    type?: string | null
    name?: string | null
    notes?: string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    weightUnit?: string | null
    brandLabelId?: number | null
    properties?: ItemPropertyUncheckedCreateNestedManyWithoutItemInput
    hasAssemblyItems?: AssemblyUncheckedCreateNestedManyWithoutAssemblyItemInput
    inAssemblies?: AssemblyUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutInClaimsInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutInClaimsInput, ItemUncheckedCreateWithoutInClaimsInput>
  }

  export type CyclistUpsertWithoutClaimsInput = {
    update: XOR<CyclistUpdateWithoutClaimsInput, CyclistUncheckedUpdateWithoutClaimsInput>
    create: XOR<CyclistCreateWithoutClaimsInput, CyclistUncheckedCreateWithoutClaimsInput>
    where?: CyclistWhereInput
  }

  export type CyclistUpdateToOneWithWhereWithoutClaimsInput = {
    where?: CyclistWhereInput
    data: XOR<CyclistUpdateWithoutClaimsInput, CyclistUncheckedUpdateWithoutClaimsInput>
  }

  export type CyclistUpdateWithoutClaimsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nameLast?: NullableStringFieldUpdateOperationsInput | string | null
    nameFirst?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: NullableStringFieldUpdateOperationsInput | string | null
    registered?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CyclistUncheckedUpdateWithoutClaimsInput = {
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

  export type ItemUpsertWithoutInClaimsInput = {
    update: XOR<ItemUpdateWithoutInClaimsInput, ItemUncheckedUpdateWithoutInClaimsInput>
    create: XOR<ItemCreateWithoutInClaimsInput, ItemUncheckedCreateWithoutInClaimsInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutInClaimsInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutInClaimsInput, ItemUncheckedUpdateWithoutInClaimsInput>
  }

  export type ItemUpdateWithoutInClaimsInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weightUnit?: NullableStringFieldUpdateOperationsInput | string | null
    brandLabel?: BrandLabelUpdateOneWithoutItemsNestedInput
    properties?: ItemPropertyUpdateManyWithoutItemNestedInput
    hasAssemblyItems?: AssemblyUpdateManyWithoutAssemblyItemNestedInput
    inAssemblies?: AssemblyUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutInClaimsInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weightUnit?: NullableStringFieldUpdateOperationsInput | string | null
    brandLabelId?: NullableIntFieldUpdateOperationsInput | number | null
    properties?: ItemPropertyUncheckedUpdateManyWithoutItemNestedInput
    hasAssemblyItems?: AssemblyUncheckedUpdateManyWithoutAssemblyItemNestedInput
    inAssemblies?: AssemblyUncheckedUpdateManyWithoutItemNestedInput
  }

  export type BrandMemberCreateWithoutProducerInput = {
    brandLabel?: BrandLabelCreateNestedOneWithoutLabelMembershipsInput
  }

  export type BrandMemberUncheckedCreateWithoutProducerInput = {
    id?: number
    brandLabelId?: number | null
  }

  export type BrandMemberCreateOrConnectWithoutProducerInput = {
    where: BrandMemberWhereUniqueInput
    create: XOR<BrandMemberCreateWithoutProducerInput, BrandMemberUncheckedCreateWithoutProducerInput>
  }

  export type BrandMemberCreateManyProducerInputEnvelope = {
    data: BrandMemberCreateManyProducerInput | BrandMemberCreateManyProducerInput[]
    skipDuplicates?: boolean
  }

  export type BrandMemberUpsertWithWhereUniqueWithoutProducerInput = {
    where: BrandMemberWhereUniqueInput
    update: XOR<BrandMemberUpdateWithoutProducerInput, BrandMemberUncheckedUpdateWithoutProducerInput>
    create: XOR<BrandMemberCreateWithoutProducerInput, BrandMemberUncheckedCreateWithoutProducerInput>
  }

  export type BrandMemberUpdateWithWhereUniqueWithoutProducerInput = {
    where: BrandMemberWhereUniqueInput
    data: XOR<BrandMemberUpdateWithoutProducerInput, BrandMemberUncheckedUpdateWithoutProducerInput>
  }

  export type BrandMemberUpdateManyWithWhereWithoutProducerInput = {
    where: BrandMemberScalarWhereInput
    data: XOR<BrandMemberUpdateManyMutationInput, BrandMemberUncheckedUpdateManyWithoutProducerInput>
  }

  export type BrandMemberScalarWhereInput = {
    AND?: BrandMemberScalarWhereInput | BrandMemberScalarWhereInput[]
    OR?: BrandMemberScalarWhereInput[]
    NOT?: BrandMemberScalarWhereInput | BrandMemberScalarWhereInput[]
    id?: IntFilter<"BrandMember"> | number
    brandLabelId?: IntNullableFilter<"BrandMember"> | number | null
    producerId?: IntNullableFilter<"BrandMember"> | number | null
  }

  export type BrandLabelCreateWithoutLabelMembershipsInput = {
    type?: string | null
    name?: string | null
    items?: ItemCreateNestedManyWithoutBrandLabelInput
  }

  export type BrandLabelUncheckedCreateWithoutLabelMembershipsInput = {
    id?: number
    type?: string | null
    name?: string | null
    items?: ItemUncheckedCreateNestedManyWithoutBrandLabelInput
  }

  export type BrandLabelCreateOrConnectWithoutLabelMembershipsInput = {
    where: BrandLabelWhereUniqueInput
    create: XOR<BrandLabelCreateWithoutLabelMembershipsInput, BrandLabelUncheckedCreateWithoutLabelMembershipsInput>
  }

  export type ProducerCreateWithoutLabelMembershipsInput = {
    name?: string | null
    nameShort?: string | null
    nameAbbreviation?: string | null
    notes?: string | null
    webAddress?: string | null
  }

  export type ProducerUncheckedCreateWithoutLabelMembershipsInput = {
    id?: number
    name?: string | null
    nameShort?: string | null
    nameAbbreviation?: string | null
    notes?: string | null
    webAddress?: string | null
  }

  export type ProducerCreateOrConnectWithoutLabelMembershipsInput = {
    where: ProducerWhereUniqueInput
    create: XOR<ProducerCreateWithoutLabelMembershipsInput, ProducerUncheckedCreateWithoutLabelMembershipsInput>
  }

  export type BrandLabelUpsertWithoutLabelMembershipsInput = {
    update: XOR<BrandLabelUpdateWithoutLabelMembershipsInput, BrandLabelUncheckedUpdateWithoutLabelMembershipsInput>
    create: XOR<BrandLabelCreateWithoutLabelMembershipsInput, BrandLabelUncheckedCreateWithoutLabelMembershipsInput>
    where?: BrandLabelWhereInput
  }

  export type BrandLabelUpdateToOneWithWhereWithoutLabelMembershipsInput = {
    where?: BrandLabelWhereInput
    data: XOR<BrandLabelUpdateWithoutLabelMembershipsInput, BrandLabelUncheckedUpdateWithoutLabelMembershipsInput>
  }

  export type BrandLabelUpdateWithoutLabelMembershipsInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    items?: ItemUpdateManyWithoutBrandLabelNestedInput
  }

  export type BrandLabelUncheckedUpdateWithoutLabelMembershipsInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    items?: ItemUncheckedUpdateManyWithoutBrandLabelNestedInput
  }

  export type ProducerUpsertWithoutLabelMembershipsInput = {
    update: XOR<ProducerUpdateWithoutLabelMembershipsInput, ProducerUncheckedUpdateWithoutLabelMembershipsInput>
    create: XOR<ProducerCreateWithoutLabelMembershipsInput, ProducerUncheckedCreateWithoutLabelMembershipsInput>
    where?: ProducerWhereInput
  }

  export type ProducerUpdateToOneWithWhereWithoutLabelMembershipsInput = {
    where?: ProducerWhereInput
    data: XOR<ProducerUpdateWithoutLabelMembershipsInput, ProducerUncheckedUpdateWithoutLabelMembershipsInput>
  }

  export type ProducerUpdateWithoutLabelMembershipsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nameShort?: NullableStringFieldUpdateOperationsInput | string | null
    nameAbbreviation?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    webAddress?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProducerUncheckedUpdateWithoutLabelMembershipsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nameShort?: NullableStringFieldUpdateOperationsInput | string | null
    nameAbbreviation?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    webAddress?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BrandMemberCreateWithoutBrandLabelInput = {
    producer?: ProducerCreateNestedOneWithoutLabelMembershipsInput
  }

  export type BrandMemberUncheckedCreateWithoutBrandLabelInput = {
    id?: number
    producerId?: number | null
  }

  export type BrandMemberCreateOrConnectWithoutBrandLabelInput = {
    where: BrandMemberWhereUniqueInput
    create: XOR<BrandMemberCreateWithoutBrandLabelInput, BrandMemberUncheckedCreateWithoutBrandLabelInput>
  }

  export type BrandMemberCreateManyBrandLabelInputEnvelope = {
    data: BrandMemberCreateManyBrandLabelInput | BrandMemberCreateManyBrandLabelInput[]
    skipDuplicates?: boolean
  }

  export type ItemCreateWithoutBrandLabelInput = {
    type?: string | null
    name?: string | null
    notes?: string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    weightUnit?: string | null
    properties?: ItemPropertyCreateNestedManyWithoutItemInput
    inClaims?: ClaimCreateNestedManyWithoutItemInput
    hasAssemblyItems?: AssemblyCreateNestedManyWithoutAssemblyItemInput
    inAssemblies?: AssemblyCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutBrandLabelInput = {
    id?: number
    type?: string | null
    name?: string | null
    notes?: string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    weightUnit?: string | null
    properties?: ItemPropertyUncheckedCreateNestedManyWithoutItemInput
    inClaims?: ClaimUncheckedCreateNestedManyWithoutItemInput
    hasAssemblyItems?: AssemblyUncheckedCreateNestedManyWithoutAssemblyItemInput
    inAssemblies?: AssemblyUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutBrandLabelInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutBrandLabelInput, ItemUncheckedCreateWithoutBrandLabelInput>
  }

  export type ItemCreateManyBrandLabelInputEnvelope = {
    data: ItemCreateManyBrandLabelInput | ItemCreateManyBrandLabelInput[]
    skipDuplicates?: boolean
  }

  export type BrandMemberUpsertWithWhereUniqueWithoutBrandLabelInput = {
    where: BrandMemberWhereUniqueInput
    update: XOR<BrandMemberUpdateWithoutBrandLabelInput, BrandMemberUncheckedUpdateWithoutBrandLabelInput>
    create: XOR<BrandMemberCreateWithoutBrandLabelInput, BrandMemberUncheckedCreateWithoutBrandLabelInput>
  }

  export type BrandMemberUpdateWithWhereUniqueWithoutBrandLabelInput = {
    where: BrandMemberWhereUniqueInput
    data: XOR<BrandMemberUpdateWithoutBrandLabelInput, BrandMemberUncheckedUpdateWithoutBrandLabelInput>
  }

  export type BrandMemberUpdateManyWithWhereWithoutBrandLabelInput = {
    where: BrandMemberScalarWhereInput
    data: XOR<BrandMemberUpdateManyMutationInput, BrandMemberUncheckedUpdateManyWithoutBrandLabelInput>
  }

  export type ItemUpsertWithWhereUniqueWithoutBrandLabelInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutBrandLabelInput, ItemUncheckedUpdateWithoutBrandLabelInput>
    create: XOR<ItemCreateWithoutBrandLabelInput, ItemUncheckedCreateWithoutBrandLabelInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutBrandLabelInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutBrandLabelInput, ItemUncheckedUpdateWithoutBrandLabelInput>
  }

  export type ItemUpdateManyWithWhereWithoutBrandLabelInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutBrandLabelInput>
  }

  export type ItemScalarWhereInput = {
    AND?: ItemScalarWhereInput | ItemScalarWhereInput[]
    OR?: ItemScalarWhereInput[]
    NOT?: ItemScalarWhereInput | ItemScalarWhereInput[]
    id?: IntFilter<"Item"> | number
    type?: StringNullableFilter<"Item"> | string | null
    name?: StringNullableFilter<"Item"> | string | null
    notes?: StringNullableFilter<"Item"> | string | null
    weight?: DecimalNullableFilter<"Item"> | Decimal | DecimalJsLike | number | string | null
    weightUnit?: StringNullableFilter<"Item"> | string | null
    brandLabelId?: IntNullableFilter<"Item"> | number | null
  }

  export type PropertyGroupCreateWithoutItemTypeInput = {
    order?: number | null
    name: string
    properties?: PropertyCreateNestedManyWithoutGroupInput
  }

  export type PropertyGroupUncheckedCreateWithoutItemTypeInput = {
    id?: number
    order?: number | null
    name: string
    properties?: PropertyUncheckedCreateNestedManyWithoutGroupInput
  }

  export type PropertyGroupCreateOrConnectWithoutItemTypeInput = {
    where: PropertyGroupWhereUniqueInput
    create: XOR<PropertyGroupCreateWithoutItemTypeInput, PropertyGroupUncheckedCreateWithoutItemTypeInput>
  }

  export type PropertyGroupCreateManyItemTypeInputEnvelope = {
    data: PropertyGroupCreateManyItemTypeInput | PropertyGroupCreateManyItemTypeInput[]
    skipDuplicates?: boolean
  }

  export type PropertyGroupUpsertWithWhereUniqueWithoutItemTypeInput = {
    where: PropertyGroupWhereUniqueInput
    update: XOR<PropertyGroupUpdateWithoutItemTypeInput, PropertyGroupUncheckedUpdateWithoutItemTypeInput>
    create: XOR<PropertyGroupCreateWithoutItemTypeInput, PropertyGroupUncheckedCreateWithoutItemTypeInput>
  }

  export type PropertyGroupUpdateWithWhereUniqueWithoutItemTypeInput = {
    where: PropertyGroupWhereUniqueInput
    data: XOR<PropertyGroupUpdateWithoutItemTypeInput, PropertyGroupUncheckedUpdateWithoutItemTypeInput>
  }

  export type PropertyGroupUpdateManyWithWhereWithoutItemTypeInput = {
    where: PropertyGroupScalarWhereInput
    data: XOR<PropertyGroupUpdateManyMutationInput, PropertyGroupUncheckedUpdateManyWithoutItemTypeInput>
  }

  export type PropertyGroupScalarWhereInput = {
    AND?: PropertyGroupScalarWhereInput | PropertyGroupScalarWhereInput[]
    OR?: PropertyGroupScalarWhereInput[]
    NOT?: PropertyGroupScalarWhereInput | PropertyGroupScalarWhereInput[]
    id?: IntFilter<"PropertyGroup"> | number
    order?: IntNullableFilter<"PropertyGroup"> | number | null
    name?: StringFilter<"PropertyGroup"> | string
    itemTypeId?: IntNullableFilter<"PropertyGroup"> | number | null
  }

  export type ItemTypeCreateWithoutPropertyGroupsInput = {
    name: string
  }

  export type ItemTypeUncheckedCreateWithoutPropertyGroupsInput = {
    id?: number
    name: string
  }

  export type ItemTypeCreateOrConnectWithoutPropertyGroupsInput = {
    where: ItemTypeWhereUniqueInput
    create: XOR<ItemTypeCreateWithoutPropertyGroupsInput, ItemTypeUncheckedCreateWithoutPropertyGroupsInput>
  }

  export type PropertyCreateWithoutGroupInput = {
    order?: number | null
    name?: string | null
    variation?: string | null
    itemProperties?: ItemPropertyCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutGroupInput = {
    id?: number
    order?: number | null
    name?: string | null
    variation?: string | null
    itemProperties?: ItemPropertyUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutGroupInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutGroupInput, PropertyUncheckedCreateWithoutGroupInput>
  }

  export type PropertyCreateManyGroupInputEnvelope = {
    data: PropertyCreateManyGroupInput | PropertyCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type ItemTypeUpsertWithoutPropertyGroupsInput = {
    update: XOR<ItemTypeUpdateWithoutPropertyGroupsInput, ItemTypeUncheckedUpdateWithoutPropertyGroupsInput>
    create: XOR<ItemTypeCreateWithoutPropertyGroupsInput, ItemTypeUncheckedCreateWithoutPropertyGroupsInput>
    where?: ItemTypeWhereInput
  }

  export type ItemTypeUpdateToOneWithWhereWithoutPropertyGroupsInput = {
    where?: ItemTypeWhereInput
    data: XOR<ItemTypeUpdateWithoutPropertyGroupsInput, ItemTypeUncheckedUpdateWithoutPropertyGroupsInput>
  }

  export type ItemTypeUpdateWithoutPropertyGroupsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ItemTypeUncheckedUpdateWithoutPropertyGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PropertyUpsertWithWhereUniqueWithoutGroupInput = {
    where: PropertyWhereUniqueInput
    update: XOR<PropertyUpdateWithoutGroupInput, PropertyUncheckedUpdateWithoutGroupInput>
    create: XOR<PropertyCreateWithoutGroupInput, PropertyUncheckedCreateWithoutGroupInput>
  }

  export type PropertyUpdateWithWhereUniqueWithoutGroupInput = {
    where: PropertyWhereUniqueInput
    data: XOR<PropertyUpdateWithoutGroupInput, PropertyUncheckedUpdateWithoutGroupInput>
  }

  export type PropertyUpdateManyWithWhereWithoutGroupInput = {
    where: PropertyScalarWhereInput
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyWithoutGroupInput>
  }

  export type PropertyScalarWhereInput = {
    AND?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    OR?: PropertyScalarWhereInput[]
    NOT?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    id?: IntFilter<"Property"> | number
    order?: IntNullableFilter<"Property"> | number | null
    name?: StringNullableFilter<"Property"> | string | null
    variation?: StringNullableFilter<"Property"> | string | null
    groupId?: IntNullableFilter<"Property"> | number | null
  }

  export type PropertyGroupCreateWithoutPropertiesInput = {
    order?: number | null
    name: string
    itemType?: ItemTypeCreateNestedOneWithoutPropertyGroupsInput
  }

  export type PropertyGroupUncheckedCreateWithoutPropertiesInput = {
    id?: number
    order?: number | null
    name: string
    itemTypeId?: number | null
  }

  export type PropertyGroupCreateOrConnectWithoutPropertiesInput = {
    where: PropertyGroupWhereUniqueInput
    create: XOR<PropertyGroupCreateWithoutPropertiesInput, PropertyGroupUncheckedCreateWithoutPropertiesInput>
  }

  export type ItemPropertyCreateWithoutPropertyInput = {
    value?: string | null
    item?: ItemCreateNestedOneWithoutPropertiesInput
  }

  export type ItemPropertyUncheckedCreateWithoutPropertyInput = {
    id?: number
    itemId?: number | null
    value?: string | null
  }

  export type ItemPropertyCreateOrConnectWithoutPropertyInput = {
    where: ItemPropertyWhereUniqueInput
    create: XOR<ItemPropertyCreateWithoutPropertyInput, ItemPropertyUncheckedCreateWithoutPropertyInput>
  }

  export type ItemPropertyCreateManyPropertyInputEnvelope = {
    data: ItemPropertyCreateManyPropertyInput | ItemPropertyCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type PropertyGroupUpsertWithoutPropertiesInput = {
    update: XOR<PropertyGroupUpdateWithoutPropertiesInput, PropertyGroupUncheckedUpdateWithoutPropertiesInput>
    create: XOR<PropertyGroupCreateWithoutPropertiesInput, PropertyGroupUncheckedCreateWithoutPropertiesInput>
    where?: PropertyGroupWhereInput
  }

  export type PropertyGroupUpdateToOneWithWhereWithoutPropertiesInput = {
    where?: PropertyGroupWhereInput
    data: XOR<PropertyGroupUpdateWithoutPropertiesInput, PropertyGroupUncheckedUpdateWithoutPropertiesInput>
  }

  export type PropertyGroupUpdateWithoutPropertiesInput = {
    order?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    itemType?: ItemTypeUpdateOneWithoutPropertyGroupsNestedInput
  }

  export type PropertyGroupUncheckedUpdateWithoutPropertiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    order?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    itemTypeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ItemPropertyUpsertWithWhereUniqueWithoutPropertyInput = {
    where: ItemPropertyWhereUniqueInput
    update: XOR<ItemPropertyUpdateWithoutPropertyInput, ItemPropertyUncheckedUpdateWithoutPropertyInput>
    create: XOR<ItemPropertyCreateWithoutPropertyInput, ItemPropertyUncheckedCreateWithoutPropertyInput>
  }

  export type ItemPropertyUpdateWithWhereUniqueWithoutPropertyInput = {
    where: ItemPropertyWhereUniqueInput
    data: XOR<ItemPropertyUpdateWithoutPropertyInput, ItemPropertyUncheckedUpdateWithoutPropertyInput>
  }

  export type ItemPropertyUpdateManyWithWhereWithoutPropertyInput = {
    where: ItemPropertyScalarWhereInput
    data: XOR<ItemPropertyUpdateManyMutationInput, ItemPropertyUncheckedUpdateManyWithoutPropertyInput>
  }

  export type ItemPropertyScalarWhereInput = {
    AND?: ItemPropertyScalarWhereInput | ItemPropertyScalarWhereInput[]
    OR?: ItemPropertyScalarWhereInput[]
    NOT?: ItemPropertyScalarWhereInput | ItemPropertyScalarWhereInput[]
    id?: IntFilter<"ItemProperty"> | number
    itemId?: IntNullableFilter<"ItemProperty"> | number | null
    propertyId?: IntNullableFilter<"ItemProperty"> | number | null
    value?: StringNullableFilter<"ItemProperty"> | string | null
  }

  export type BrandLabelCreateWithoutItemsInput = {
    type?: string | null
    name?: string | null
    labelMemberships?: BrandMemberCreateNestedManyWithoutBrandLabelInput
  }

  export type BrandLabelUncheckedCreateWithoutItemsInput = {
    id?: number
    type?: string | null
    name?: string | null
    labelMemberships?: BrandMemberUncheckedCreateNestedManyWithoutBrandLabelInput
  }

  export type BrandLabelCreateOrConnectWithoutItemsInput = {
    where: BrandLabelWhereUniqueInput
    create: XOR<BrandLabelCreateWithoutItemsInput, BrandLabelUncheckedCreateWithoutItemsInput>
  }

  export type ItemPropertyCreateWithoutItemInput = {
    value?: string | null
    property?: PropertyCreateNestedOneWithoutItemPropertiesInput
  }

  export type ItemPropertyUncheckedCreateWithoutItemInput = {
    id?: number
    propertyId?: number | null
    value?: string | null
  }

  export type ItemPropertyCreateOrConnectWithoutItemInput = {
    where: ItemPropertyWhereUniqueInput
    create: XOR<ItemPropertyCreateWithoutItemInput, ItemPropertyUncheckedCreateWithoutItemInput>
  }

  export type ItemPropertyCreateManyItemInputEnvelope = {
    data: ItemPropertyCreateManyItemInput | ItemPropertyCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type ClaimCreateWithoutItemInput = {
    claimType?: string | null
    acquired?: Date | string | null
    condition?: string | null
    notes?: string | null
    owner?: CyclistCreateNestedOneWithoutClaimsInput
  }

  export type ClaimUncheckedCreateWithoutItemInput = {
    id?: number
    claimType?: string | null
    acquired?: Date | string | null
    condition?: string | null
    notes?: string | null
    ownerId?: number | null
  }

  export type ClaimCreateOrConnectWithoutItemInput = {
    where: ClaimWhereUniqueInput
    create: XOR<ClaimCreateWithoutItemInput, ClaimUncheckedCreateWithoutItemInput>
  }

  export type ClaimCreateManyItemInputEnvelope = {
    data: ClaimCreateManyItemInput | ClaimCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type AssemblyCreateWithoutAssemblyItemInput = {
    item?: ItemCreateNestedOneWithoutInAssembliesInput
  }

  export type AssemblyUncheckedCreateWithoutAssemblyItemInput = {
    id?: number
    itemId?: number | null
  }

  export type AssemblyCreateOrConnectWithoutAssemblyItemInput = {
    where: AssemblyWhereUniqueInput
    create: XOR<AssemblyCreateWithoutAssemblyItemInput, AssemblyUncheckedCreateWithoutAssemblyItemInput>
  }

  export type AssemblyCreateManyAssemblyItemInputEnvelope = {
    data: AssemblyCreateManyAssemblyItemInput | AssemblyCreateManyAssemblyItemInput[]
    skipDuplicates?: boolean
  }

  export type AssemblyCreateWithoutItemInput = {
    assemblyItem?: ItemCreateNestedOneWithoutHasAssemblyItemsInput
  }

  export type AssemblyUncheckedCreateWithoutItemInput = {
    id?: number
    assemblyItemId?: number | null
  }

  export type AssemblyCreateOrConnectWithoutItemInput = {
    where: AssemblyWhereUniqueInput
    create: XOR<AssemblyCreateWithoutItemInput, AssemblyUncheckedCreateWithoutItemInput>
  }

  export type AssemblyCreateManyItemInputEnvelope = {
    data: AssemblyCreateManyItemInput | AssemblyCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type BrandLabelUpsertWithoutItemsInput = {
    update: XOR<BrandLabelUpdateWithoutItemsInput, BrandLabelUncheckedUpdateWithoutItemsInput>
    create: XOR<BrandLabelCreateWithoutItemsInput, BrandLabelUncheckedCreateWithoutItemsInput>
    where?: BrandLabelWhereInput
  }

  export type BrandLabelUpdateToOneWithWhereWithoutItemsInput = {
    where?: BrandLabelWhereInput
    data: XOR<BrandLabelUpdateWithoutItemsInput, BrandLabelUncheckedUpdateWithoutItemsInput>
  }

  export type BrandLabelUpdateWithoutItemsInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    labelMemberships?: BrandMemberUpdateManyWithoutBrandLabelNestedInput
  }

  export type BrandLabelUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    labelMemberships?: BrandMemberUncheckedUpdateManyWithoutBrandLabelNestedInput
  }

  export type ItemPropertyUpsertWithWhereUniqueWithoutItemInput = {
    where: ItemPropertyWhereUniqueInput
    update: XOR<ItemPropertyUpdateWithoutItemInput, ItemPropertyUncheckedUpdateWithoutItemInput>
    create: XOR<ItemPropertyCreateWithoutItemInput, ItemPropertyUncheckedCreateWithoutItemInput>
  }

  export type ItemPropertyUpdateWithWhereUniqueWithoutItemInput = {
    where: ItemPropertyWhereUniqueInput
    data: XOR<ItemPropertyUpdateWithoutItemInput, ItemPropertyUncheckedUpdateWithoutItemInput>
  }

  export type ItemPropertyUpdateManyWithWhereWithoutItemInput = {
    where: ItemPropertyScalarWhereInput
    data: XOR<ItemPropertyUpdateManyMutationInput, ItemPropertyUncheckedUpdateManyWithoutItemInput>
  }

  export type ClaimUpsertWithWhereUniqueWithoutItemInput = {
    where: ClaimWhereUniqueInput
    update: XOR<ClaimUpdateWithoutItemInput, ClaimUncheckedUpdateWithoutItemInput>
    create: XOR<ClaimCreateWithoutItemInput, ClaimUncheckedCreateWithoutItemInput>
  }

  export type ClaimUpdateWithWhereUniqueWithoutItemInput = {
    where: ClaimWhereUniqueInput
    data: XOR<ClaimUpdateWithoutItemInput, ClaimUncheckedUpdateWithoutItemInput>
  }

  export type ClaimUpdateManyWithWhereWithoutItemInput = {
    where: ClaimScalarWhereInput
    data: XOR<ClaimUpdateManyMutationInput, ClaimUncheckedUpdateManyWithoutItemInput>
  }

  export type AssemblyUpsertWithWhereUniqueWithoutAssemblyItemInput = {
    where: AssemblyWhereUniqueInput
    update: XOR<AssemblyUpdateWithoutAssemblyItemInput, AssemblyUncheckedUpdateWithoutAssemblyItemInput>
    create: XOR<AssemblyCreateWithoutAssemblyItemInput, AssemblyUncheckedCreateWithoutAssemblyItemInput>
  }

  export type AssemblyUpdateWithWhereUniqueWithoutAssemblyItemInput = {
    where: AssemblyWhereUniqueInput
    data: XOR<AssemblyUpdateWithoutAssemblyItemInput, AssemblyUncheckedUpdateWithoutAssemblyItemInput>
  }

  export type AssemblyUpdateManyWithWhereWithoutAssemblyItemInput = {
    where: AssemblyScalarWhereInput
    data: XOR<AssemblyUpdateManyMutationInput, AssemblyUncheckedUpdateManyWithoutAssemblyItemInput>
  }

  export type AssemblyScalarWhereInput = {
    AND?: AssemblyScalarWhereInput | AssemblyScalarWhereInput[]
    OR?: AssemblyScalarWhereInput[]
    NOT?: AssemblyScalarWhereInput | AssemblyScalarWhereInput[]
    id?: IntFilter<"Assembly"> | number
    assemblyItemId?: IntNullableFilter<"Assembly"> | number | null
    itemId?: IntNullableFilter<"Assembly"> | number | null
  }

  export type AssemblyUpsertWithWhereUniqueWithoutItemInput = {
    where: AssemblyWhereUniqueInput
    update: XOR<AssemblyUpdateWithoutItemInput, AssemblyUncheckedUpdateWithoutItemInput>
    create: XOR<AssemblyCreateWithoutItemInput, AssemblyUncheckedCreateWithoutItemInput>
  }

  export type AssemblyUpdateWithWhereUniqueWithoutItemInput = {
    where: AssemblyWhereUniqueInput
    data: XOR<AssemblyUpdateWithoutItemInput, AssemblyUncheckedUpdateWithoutItemInput>
  }

  export type AssemblyUpdateManyWithWhereWithoutItemInput = {
    where: AssemblyScalarWhereInput
    data: XOR<AssemblyUpdateManyMutationInput, AssemblyUncheckedUpdateManyWithoutItemInput>
  }

  export type ItemCreateWithoutPropertiesInput = {
    type?: string | null
    name?: string | null
    notes?: string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    weightUnit?: string | null
    brandLabel?: BrandLabelCreateNestedOneWithoutItemsInput
    inClaims?: ClaimCreateNestedManyWithoutItemInput
    hasAssemblyItems?: AssemblyCreateNestedManyWithoutAssemblyItemInput
    inAssemblies?: AssemblyCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutPropertiesInput = {
    id?: number
    type?: string | null
    name?: string | null
    notes?: string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    weightUnit?: string | null
    brandLabelId?: number | null
    inClaims?: ClaimUncheckedCreateNestedManyWithoutItemInput
    hasAssemblyItems?: AssemblyUncheckedCreateNestedManyWithoutAssemblyItemInput
    inAssemblies?: AssemblyUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutPropertiesInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutPropertiesInput, ItemUncheckedCreateWithoutPropertiesInput>
  }

  export type PropertyCreateWithoutItemPropertiesInput = {
    order?: number | null
    name?: string | null
    variation?: string | null
    group?: PropertyGroupCreateNestedOneWithoutPropertiesInput
  }

  export type PropertyUncheckedCreateWithoutItemPropertiesInput = {
    id?: number
    order?: number | null
    name?: string | null
    variation?: string | null
    groupId?: number | null
  }

  export type PropertyCreateOrConnectWithoutItemPropertiesInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutItemPropertiesInput, PropertyUncheckedCreateWithoutItemPropertiesInput>
  }

  export type ItemUpsertWithoutPropertiesInput = {
    update: XOR<ItemUpdateWithoutPropertiesInput, ItemUncheckedUpdateWithoutPropertiesInput>
    create: XOR<ItemCreateWithoutPropertiesInput, ItemUncheckedCreateWithoutPropertiesInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutPropertiesInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutPropertiesInput, ItemUncheckedUpdateWithoutPropertiesInput>
  }

  export type ItemUpdateWithoutPropertiesInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weightUnit?: NullableStringFieldUpdateOperationsInput | string | null
    brandLabel?: BrandLabelUpdateOneWithoutItemsNestedInput
    inClaims?: ClaimUpdateManyWithoutItemNestedInput
    hasAssemblyItems?: AssemblyUpdateManyWithoutAssemblyItemNestedInput
    inAssemblies?: AssemblyUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutPropertiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weightUnit?: NullableStringFieldUpdateOperationsInput | string | null
    brandLabelId?: NullableIntFieldUpdateOperationsInput | number | null
    inClaims?: ClaimUncheckedUpdateManyWithoutItemNestedInput
    hasAssemblyItems?: AssemblyUncheckedUpdateManyWithoutAssemblyItemNestedInput
    inAssemblies?: AssemblyUncheckedUpdateManyWithoutItemNestedInput
  }

  export type PropertyUpsertWithoutItemPropertiesInput = {
    update: XOR<PropertyUpdateWithoutItemPropertiesInput, PropertyUncheckedUpdateWithoutItemPropertiesInput>
    create: XOR<PropertyCreateWithoutItemPropertiesInput, PropertyUncheckedCreateWithoutItemPropertiesInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutItemPropertiesInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutItemPropertiesInput, PropertyUncheckedUpdateWithoutItemPropertiesInput>
  }

  export type PropertyUpdateWithoutItemPropertiesInput = {
    order?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    variation?: NullableStringFieldUpdateOperationsInput | string | null
    group?: PropertyGroupUpdateOneWithoutPropertiesNestedInput
  }

  export type PropertyUncheckedUpdateWithoutItemPropertiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    order?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    variation?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ItemCreateWithoutHasAssemblyItemsInput = {
    type?: string | null
    name?: string | null
    notes?: string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    weightUnit?: string | null
    brandLabel?: BrandLabelCreateNestedOneWithoutItemsInput
    properties?: ItemPropertyCreateNestedManyWithoutItemInput
    inClaims?: ClaimCreateNestedManyWithoutItemInput
    inAssemblies?: AssemblyCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutHasAssemblyItemsInput = {
    id?: number
    type?: string | null
    name?: string | null
    notes?: string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    weightUnit?: string | null
    brandLabelId?: number | null
    properties?: ItemPropertyUncheckedCreateNestedManyWithoutItemInput
    inClaims?: ClaimUncheckedCreateNestedManyWithoutItemInput
    inAssemblies?: AssemblyUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutHasAssemblyItemsInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutHasAssemblyItemsInput, ItemUncheckedCreateWithoutHasAssemblyItemsInput>
  }

  export type ItemCreateWithoutInAssembliesInput = {
    type?: string | null
    name?: string | null
    notes?: string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    weightUnit?: string | null
    brandLabel?: BrandLabelCreateNestedOneWithoutItemsInput
    properties?: ItemPropertyCreateNestedManyWithoutItemInput
    inClaims?: ClaimCreateNestedManyWithoutItemInput
    hasAssemblyItems?: AssemblyCreateNestedManyWithoutAssemblyItemInput
  }

  export type ItemUncheckedCreateWithoutInAssembliesInput = {
    id?: number
    type?: string | null
    name?: string | null
    notes?: string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    weightUnit?: string | null
    brandLabelId?: number | null
    properties?: ItemPropertyUncheckedCreateNestedManyWithoutItemInput
    inClaims?: ClaimUncheckedCreateNestedManyWithoutItemInput
    hasAssemblyItems?: AssemblyUncheckedCreateNestedManyWithoutAssemblyItemInput
  }

  export type ItemCreateOrConnectWithoutInAssembliesInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutInAssembliesInput, ItemUncheckedCreateWithoutInAssembliesInput>
  }

  export type ItemUpsertWithoutHasAssemblyItemsInput = {
    update: XOR<ItemUpdateWithoutHasAssemblyItemsInput, ItemUncheckedUpdateWithoutHasAssemblyItemsInput>
    create: XOR<ItemCreateWithoutHasAssemblyItemsInput, ItemUncheckedCreateWithoutHasAssemblyItemsInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutHasAssemblyItemsInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutHasAssemblyItemsInput, ItemUncheckedUpdateWithoutHasAssemblyItemsInput>
  }

  export type ItemUpdateWithoutHasAssemblyItemsInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weightUnit?: NullableStringFieldUpdateOperationsInput | string | null
    brandLabel?: BrandLabelUpdateOneWithoutItemsNestedInput
    properties?: ItemPropertyUpdateManyWithoutItemNestedInput
    inClaims?: ClaimUpdateManyWithoutItemNestedInput
    inAssemblies?: AssemblyUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutHasAssemblyItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weightUnit?: NullableStringFieldUpdateOperationsInput | string | null
    brandLabelId?: NullableIntFieldUpdateOperationsInput | number | null
    properties?: ItemPropertyUncheckedUpdateManyWithoutItemNestedInput
    inClaims?: ClaimUncheckedUpdateManyWithoutItemNestedInput
    inAssemblies?: AssemblyUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemUpsertWithoutInAssembliesInput = {
    update: XOR<ItemUpdateWithoutInAssembliesInput, ItemUncheckedUpdateWithoutInAssembliesInput>
    create: XOR<ItemCreateWithoutInAssembliesInput, ItemUncheckedCreateWithoutInAssembliesInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutInAssembliesInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutInAssembliesInput, ItemUncheckedUpdateWithoutInAssembliesInput>
  }

  export type ItemUpdateWithoutInAssembliesInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weightUnit?: NullableStringFieldUpdateOperationsInput | string | null
    brandLabel?: BrandLabelUpdateOneWithoutItemsNestedInput
    properties?: ItemPropertyUpdateManyWithoutItemNestedInput
    inClaims?: ClaimUpdateManyWithoutItemNestedInput
    hasAssemblyItems?: AssemblyUpdateManyWithoutAssemblyItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutInAssembliesInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weightUnit?: NullableStringFieldUpdateOperationsInput | string | null
    brandLabelId?: NullableIntFieldUpdateOperationsInput | number | null
    properties?: ItemPropertyUncheckedUpdateManyWithoutItemNestedInput
    inClaims?: ClaimUncheckedUpdateManyWithoutItemNestedInput
    hasAssemblyItems?: AssemblyUncheckedUpdateManyWithoutAssemblyItemNestedInput
  }

  export type ClaimCreateManyOwnerInput = {
    id?: number
    claimType?: string | null
    acquired?: Date | string | null
    condition?: string | null
    notes?: string | null
    itemId?: number | null
  }

  export type ClaimUpdateWithoutOwnerInput = {
    claimType?: NullableStringFieldUpdateOperationsInput | string | null
    acquired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    item?: ItemUpdateOneWithoutInClaimsNestedInput
  }

  export type ClaimUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    claimType?: NullableStringFieldUpdateOperationsInput | string | null
    acquired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    itemId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ClaimUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    claimType?: NullableStringFieldUpdateOperationsInput | string | null
    acquired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    itemId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BrandMemberCreateManyProducerInput = {
    id?: number
    brandLabelId?: number | null
  }

  export type BrandMemberUpdateWithoutProducerInput = {
    brandLabel?: BrandLabelUpdateOneWithoutLabelMembershipsNestedInput
  }

  export type BrandMemberUncheckedUpdateWithoutProducerInput = {
    id?: IntFieldUpdateOperationsInput | number
    brandLabelId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BrandMemberUncheckedUpdateManyWithoutProducerInput = {
    id?: IntFieldUpdateOperationsInput | number
    brandLabelId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BrandMemberCreateManyBrandLabelInput = {
    id?: number
    producerId?: number | null
  }

  export type ItemCreateManyBrandLabelInput = {
    id?: number
    type?: string | null
    name?: string | null
    notes?: string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    weightUnit?: string | null
  }

  export type BrandMemberUpdateWithoutBrandLabelInput = {
    producer?: ProducerUpdateOneWithoutLabelMembershipsNestedInput
  }

  export type BrandMemberUncheckedUpdateWithoutBrandLabelInput = {
    id?: IntFieldUpdateOperationsInput | number
    producerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BrandMemberUncheckedUpdateManyWithoutBrandLabelInput = {
    id?: IntFieldUpdateOperationsInput | number
    producerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ItemUpdateWithoutBrandLabelInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weightUnit?: NullableStringFieldUpdateOperationsInput | string | null
    properties?: ItemPropertyUpdateManyWithoutItemNestedInput
    inClaims?: ClaimUpdateManyWithoutItemNestedInput
    hasAssemblyItems?: AssemblyUpdateManyWithoutAssemblyItemNestedInput
    inAssemblies?: AssemblyUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutBrandLabelInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weightUnit?: NullableStringFieldUpdateOperationsInput | string | null
    properties?: ItemPropertyUncheckedUpdateManyWithoutItemNestedInput
    inClaims?: ClaimUncheckedUpdateManyWithoutItemNestedInput
    hasAssemblyItems?: AssemblyUncheckedUpdateManyWithoutAssemblyItemNestedInput
    inAssemblies?: AssemblyUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateManyWithoutBrandLabelInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weightUnit?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PropertyGroupCreateManyItemTypeInput = {
    id?: number
    order?: number | null
    name: string
  }

  export type PropertyGroupUpdateWithoutItemTypeInput = {
    order?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    properties?: PropertyUpdateManyWithoutGroupNestedInput
  }

  export type PropertyGroupUncheckedUpdateWithoutItemTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    order?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    properties?: PropertyUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type PropertyGroupUncheckedUpdateManyWithoutItemTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    order?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PropertyCreateManyGroupInput = {
    id?: number
    order?: number | null
    name?: string | null
    variation?: string | null
  }

  export type PropertyUpdateWithoutGroupInput = {
    order?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    variation?: NullableStringFieldUpdateOperationsInput | string | null
    itemProperties?: ItemPropertyUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    order?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    variation?: NullableStringFieldUpdateOperationsInput | string | null
    itemProperties?: ItemPropertyUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateManyWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    order?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    variation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ItemPropertyCreateManyPropertyInput = {
    id?: number
    itemId?: number | null
    value?: string | null
  }

  export type ItemPropertyUpdateWithoutPropertyInput = {
    value?: NullableStringFieldUpdateOperationsInput | string | null
    item?: ItemUpdateOneWithoutPropertiesNestedInput
  }

  export type ItemPropertyUncheckedUpdateWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemId?: NullableIntFieldUpdateOperationsInput | number | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ItemPropertyUncheckedUpdateManyWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemId?: NullableIntFieldUpdateOperationsInput | number | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ItemPropertyCreateManyItemInput = {
    id?: number
    propertyId?: number | null
    value?: string | null
  }

  export type ClaimCreateManyItemInput = {
    id?: number
    claimType?: string | null
    acquired?: Date | string | null
    condition?: string | null
    notes?: string | null
    ownerId?: number | null
  }

  export type AssemblyCreateManyAssemblyItemInput = {
    id?: number
    itemId?: number | null
  }

  export type AssemblyCreateManyItemInput = {
    id?: number
    assemblyItemId?: number | null
  }

  export type ItemPropertyUpdateWithoutItemInput = {
    value?: NullableStringFieldUpdateOperationsInput | string | null
    property?: PropertyUpdateOneWithoutItemPropertiesNestedInput
  }

  export type ItemPropertyUncheckedUpdateWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: NullableIntFieldUpdateOperationsInput | number | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ItemPropertyUncheckedUpdateManyWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: NullableIntFieldUpdateOperationsInput | number | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClaimUpdateWithoutItemInput = {
    claimType?: NullableStringFieldUpdateOperationsInput | string | null
    acquired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: CyclistUpdateOneWithoutClaimsNestedInput
  }

  export type ClaimUncheckedUpdateWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    claimType?: NullableStringFieldUpdateOperationsInput | string | null
    acquired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ClaimUncheckedUpdateManyWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    claimType?: NullableStringFieldUpdateOperationsInput | string | null
    acquired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AssemblyUpdateWithoutAssemblyItemInput = {
    item?: ItemUpdateOneWithoutInAssembliesNestedInput
  }

  export type AssemblyUncheckedUpdateWithoutAssemblyItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AssemblyUncheckedUpdateManyWithoutAssemblyItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AssemblyUpdateWithoutItemInput = {
    assemblyItem?: ItemUpdateOneWithoutHasAssemblyItemsNestedInput
  }

  export type AssemblyUncheckedUpdateWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    assemblyItemId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AssemblyUncheckedUpdateManyWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    assemblyItemId?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CyclistCountOutputTypeDefaultArgs instead
     */
    export type CyclistCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CyclistCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProducerCountOutputTypeDefaultArgs instead
     */
    export type ProducerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProducerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BrandLabelCountOutputTypeDefaultArgs instead
     */
    export type BrandLabelCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BrandLabelCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ItemTypeCountOutputTypeDefaultArgs instead
     */
    export type ItemTypeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ItemTypeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PropertyGroupCountOutputTypeDefaultArgs instead
     */
    export type PropertyGroupCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PropertyGroupCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PropertyCountOutputTypeDefaultArgs instead
     */
    export type PropertyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PropertyCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ItemCountOutputTypeDefaultArgs instead
     */
    export type ItemCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ItemCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CyclistDefaultArgs instead
     */
    export type CyclistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CyclistDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClaimDefaultArgs instead
     */
    export type ClaimArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClaimDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProducerDefaultArgs instead
     */
    export type ProducerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProducerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BrandMemberDefaultArgs instead
     */
    export type BrandMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BrandMemberDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BrandLabelDefaultArgs instead
     */
    export type BrandLabelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BrandLabelDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ItemTypeDefaultArgs instead
     */
    export type ItemTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ItemTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PropertyGroupDefaultArgs instead
     */
    export type PropertyGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PropertyGroupDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PropertyDefaultArgs instead
     */
    export type PropertyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PropertyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ItemDefaultArgs instead
     */
    export type ItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ItemPropertyDefaultArgs instead
     */
    export type ItemPropertyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ItemPropertyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AssemblyDefaultArgs instead
     */
    export type AssemblyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AssemblyDefaultArgs<ExtArgs>

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