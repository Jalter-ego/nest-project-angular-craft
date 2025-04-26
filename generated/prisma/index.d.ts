
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Figma
 * 
 */
export type Figma = $Result.DefaultSelection<Prisma.$FigmaPayload>
/**
 * Model Rectangle
 * 
 */
export type Rectangle = $Result.DefaultSelection<Prisma.$RectanglePayload>
/**
 * Model Circle
 * 
 */
export type Circle = $Result.DefaultSelection<Prisma.$CirclePayload>
/**
 * Model Text
 * 
 */
export type Text = $Result.DefaultSelection<Prisma.$TextPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.figma`: Exposes CRUD operations for the **Figma** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Figmas
    * const figmas = await prisma.figma.findMany()
    * ```
    */
  get figma(): Prisma.FigmaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rectangle`: Exposes CRUD operations for the **Rectangle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rectangles
    * const rectangles = await prisma.rectangle.findMany()
    * ```
    */
  get rectangle(): Prisma.RectangleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.circle`: Exposes CRUD operations for the **Circle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Circles
    * const circles = await prisma.circle.findMany()
    * ```
    */
  get circle(): Prisma.CircleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.text`: Exposes CRUD operations for the **Text** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Texts
    * const texts = await prisma.text.findMany()
    * ```
    */
  get text(): Prisma.TextDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Figma: 'Figma',
    Rectangle: 'Rectangle',
    Circle: 'Circle',
    Text: 'Text'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "figma" | "rectangle" | "circle" | "text"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Figma: {
        payload: Prisma.$FigmaPayload<ExtArgs>
        fields: Prisma.FigmaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FigmaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FigmaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FigmaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FigmaPayload>
          }
          findFirst: {
            args: Prisma.FigmaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FigmaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FigmaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FigmaPayload>
          }
          findMany: {
            args: Prisma.FigmaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FigmaPayload>[]
          }
          create: {
            args: Prisma.FigmaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FigmaPayload>
          }
          createMany: {
            args: Prisma.FigmaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FigmaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FigmaPayload>[]
          }
          delete: {
            args: Prisma.FigmaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FigmaPayload>
          }
          update: {
            args: Prisma.FigmaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FigmaPayload>
          }
          deleteMany: {
            args: Prisma.FigmaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FigmaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FigmaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FigmaPayload>[]
          }
          upsert: {
            args: Prisma.FigmaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FigmaPayload>
          }
          aggregate: {
            args: Prisma.FigmaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFigma>
          }
          groupBy: {
            args: Prisma.FigmaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FigmaGroupByOutputType>[]
          }
          count: {
            args: Prisma.FigmaCountArgs<ExtArgs>
            result: $Utils.Optional<FigmaCountAggregateOutputType> | number
          }
        }
      }
      Rectangle: {
        payload: Prisma.$RectanglePayload<ExtArgs>
        fields: Prisma.RectangleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RectangleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RectanglePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RectangleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RectanglePayload>
          }
          findFirst: {
            args: Prisma.RectangleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RectanglePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RectangleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RectanglePayload>
          }
          findMany: {
            args: Prisma.RectangleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RectanglePayload>[]
          }
          create: {
            args: Prisma.RectangleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RectanglePayload>
          }
          createMany: {
            args: Prisma.RectangleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RectangleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RectanglePayload>[]
          }
          delete: {
            args: Prisma.RectangleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RectanglePayload>
          }
          update: {
            args: Prisma.RectangleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RectanglePayload>
          }
          deleteMany: {
            args: Prisma.RectangleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RectangleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RectangleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RectanglePayload>[]
          }
          upsert: {
            args: Prisma.RectangleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RectanglePayload>
          }
          aggregate: {
            args: Prisma.RectangleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRectangle>
          }
          groupBy: {
            args: Prisma.RectangleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RectangleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RectangleCountArgs<ExtArgs>
            result: $Utils.Optional<RectangleCountAggregateOutputType> | number
          }
        }
      }
      Circle: {
        payload: Prisma.$CirclePayload<ExtArgs>
        fields: Prisma.CircleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CircleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CircleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>
          }
          findFirst: {
            args: Prisma.CircleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CircleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>
          }
          findMany: {
            args: Prisma.CircleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>[]
          }
          create: {
            args: Prisma.CircleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>
          }
          createMany: {
            args: Prisma.CircleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CircleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>[]
          }
          delete: {
            args: Prisma.CircleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>
          }
          update: {
            args: Prisma.CircleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>
          }
          deleteMany: {
            args: Prisma.CircleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CircleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CircleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>[]
          }
          upsert: {
            args: Prisma.CircleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>
          }
          aggregate: {
            args: Prisma.CircleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCircle>
          }
          groupBy: {
            args: Prisma.CircleGroupByArgs<ExtArgs>
            result: $Utils.Optional<CircleGroupByOutputType>[]
          }
          count: {
            args: Prisma.CircleCountArgs<ExtArgs>
            result: $Utils.Optional<CircleCountAggregateOutputType> | number
          }
        }
      }
      Text: {
        payload: Prisma.$TextPayload<ExtArgs>
        fields: Prisma.TextFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TextFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TextFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextPayload>
          }
          findFirst: {
            args: Prisma.TextFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TextFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextPayload>
          }
          findMany: {
            args: Prisma.TextFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextPayload>[]
          }
          create: {
            args: Prisma.TextCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextPayload>
          }
          createMany: {
            args: Prisma.TextCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TextCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextPayload>[]
          }
          delete: {
            args: Prisma.TextDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextPayload>
          }
          update: {
            args: Prisma.TextUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextPayload>
          }
          deleteMany: {
            args: Prisma.TextDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TextUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TextUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextPayload>[]
          }
          upsert: {
            args: Prisma.TextUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextPayload>
          }
          aggregate: {
            args: Prisma.TextAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateText>
          }
          groupBy: {
            args: Prisma.TextGroupByArgs<ExtArgs>
            result: $Utils.Optional<TextGroupByOutputType>[]
          }
          count: {
            args: Prisma.TextCountArgs<ExtArgs>
            result: $Utils.Optional<TextCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    figma?: FigmaOmit
    rectangle?: RectangleOmit
    circle?: CircleOmit
    text?: TextOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type FigmaCountOutputType
   */

  export type FigmaCountOutputType = {
    rectangles: number
    circles: number
    texts: number
  }

  export type FigmaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rectangles?: boolean | FigmaCountOutputTypeCountRectanglesArgs
    circles?: boolean | FigmaCountOutputTypeCountCirclesArgs
    texts?: boolean | FigmaCountOutputTypeCountTextsArgs
  }

  // Custom InputTypes
  /**
   * FigmaCountOutputType without action
   */
  export type FigmaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FigmaCountOutputType
     */
    select?: FigmaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FigmaCountOutputType without action
   */
  export type FigmaCountOutputTypeCountRectanglesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RectangleWhereInput
  }

  /**
   * FigmaCountOutputType without action
   */
  export type FigmaCountOutputTypeCountCirclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CircleWhereInput
  }

  /**
   * FigmaCountOutputType without action
   */
  export type FigmaCountOutputTypeCountTextsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TextWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    password: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      password: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Figma
   */

  export type AggregateFigma = {
    _count: FigmaCountAggregateOutputType | null
    _min: FigmaMinAggregateOutputType | null
    _max: FigmaMaxAggregateOutputType | null
  }

  export type FigmaMinAggregateOutputType = {
    id: string | null
    hostEmail: string | null
    createdAt: Date | null
    updatedAt: Date | null
    nameFigma: string | null
    image: string | null
  }

  export type FigmaMaxAggregateOutputType = {
    id: string | null
    hostEmail: string | null
    createdAt: Date | null
    updatedAt: Date | null
    nameFigma: string | null
    image: string | null
  }

  export type FigmaCountAggregateOutputType = {
    id: number
    hostEmail: number
    whitelist: number
    createdAt: number
    updatedAt: number
    nameFigma: number
    image: number
    _all: number
  }


  export type FigmaMinAggregateInputType = {
    id?: true
    hostEmail?: true
    createdAt?: true
    updatedAt?: true
    nameFigma?: true
    image?: true
  }

  export type FigmaMaxAggregateInputType = {
    id?: true
    hostEmail?: true
    createdAt?: true
    updatedAt?: true
    nameFigma?: true
    image?: true
  }

  export type FigmaCountAggregateInputType = {
    id?: true
    hostEmail?: true
    whitelist?: true
    createdAt?: true
    updatedAt?: true
    nameFigma?: true
    image?: true
    _all?: true
  }

  export type FigmaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Figma to aggregate.
     */
    where?: FigmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Figmas to fetch.
     */
    orderBy?: FigmaOrderByWithRelationInput | FigmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FigmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Figmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Figmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Figmas
    **/
    _count?: true | FigmaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FigmaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FigmaMaxAggregateInputType
  }

  export type GetFigmaAggregateType<T extends FigmaAggregateArgs> = {
        [P in keyof T & keyof AggregateFigma]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFigma[P]>
      : GetScalarType<T[P], AggregateFigma[P]>
  }




  export type FigmaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FigmaWhereInput
    orderBy?: FigmaOrderByWithAggregationInput | FigmaOrderByWithAggregationInput[]
    by: FigmaScalarFieldEnum[] | FigmaScalarFieldEnum
    having?: FigmaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FigmaCountAggregateInputType | true
    _min?: FigmaMinAggregateInputType
    _max?: FigmaMaxAggregateInputType
  }

  export type FigmaGroupByOutputType = {
    id: string
    hostEmail: string
    whitelist: string[]
    createdAt: Date
    updatedAt: Date
    nameFigma: string | null
    image: string | null
    _count: FigmaCountAggregateOutputType | null
    _min: FigmaMinAggregateOutputType | null
    _max: FigmaMaxAggregateOutputType | null
  }

  type GetFigmaGroupByPayload<T extends FigmaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FigmaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FigmaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FigmaGroupByOutputType[P]>
            : GetScalarType<T[P], FigmaGroupByOutputType[P]>
        }
      >
    >


  export type FigmaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hostEmail?: boolean
    whitelist?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nameFigma?: boolean
    image?: boolean
    rectangles?: boolean | Figma$rectanglesArgs<ExtArgs>
    circles?: boolean | Figma$circlesArgs<ExtArgs>
    texts?: boolean | Figma$textsArgs<ExtArgs>
    _count?: boolean | FigmaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["figma"]>

  export type FigmaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hostEmail?: boolean
    whitelist?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nameFigma?: boolean
    image?: boolean
  }, ExtArgs["result"]["figma"]>

  export type FigmaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hostEmail?: boolean
    whitelist?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nameFigma?: boolean
    image?: boolean
  }, ExtArgs["result"]["figma"]>

  export type FigmaSelectScalar = {
    id?: boolean
    hostEmail?: boolean
    whitelist?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nameFigma?: boolean
    image?: boolean
  }

  export type FigmaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hostEmail" | "whitelist" | "createdAt" | "updatedAt" | "nameFigma" | "image", ExtArgs["result"]["figma"]>
  export type FigmaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rectangles?: boolean | Figma$rectanglesArgs<ExtArgs>
    circles?: boolean | Figma$circlesArgs<ExtArgs>
    texts?: boolean | Figma$textsArgs<ExtArgs>
    _count?: boolean | FigmaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FigmaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FigmaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FigmaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Figma"
    objects: {
      rectangles: Prisma.$RectanglePayload<ExtArgs>[]
      circles: Prisma.$CirclePayload<ExtArgs>[]
      texts: Prisma.$TextPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      hostEmail: string
      whitelist: string[]
      createdAt: Date
      updatedAt: Date
      nameFigma: string | null
      image: string | null
    }, ExtArgs["result"]["figma"]>
    composites: {}
  }

  type FigmaGetPayload<S extends boolean | null | undefined | FigmaDefaultArgs> = $Result.GetResult<Prisma.$FigmaPayload, S>

  type FigmaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FigmaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FigmaCountAggregateInputType | true
    }

  export interface FigmaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Figma'], meta: { name: 'Figma' } }
    /**
     * Find zero or one Figma that matches the filter.
     * @param {FigmaFindUniqueArgs} args - Arguments to find a Figma
     * @example
     * // Get one Figma
     * const figma = await prisma.figma.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FigmaFindUniqueArgs>(args: SelectSubset<T, FigmaFindUniqueArgs<ExtArgs>>): Prisma__FigmaClient<$Result.GetResult<Prisma.$FigmaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Figma that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FigmaFindUniqueOrThrowArgs} args - Arguments to find a Figma
     * @example
     * // Get one Figma
     * const figma = await prisma.figma.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FigmaFindUniqueOrThrowArgs>(args: SelectSubset<T, FigmaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FigmaClient<$Result.GetResult<Prisma.$FigmaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Figma that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FigmaFindFirstArgs} args - Arguments to find a Figma
     * @example
     * // Get one Figma
     * const figma = await prisma.figma.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FigmaFindFirstArgs>(args?: SelectSubset<T, FigmaFindFirstArgs<ExtArgs>>): Prisma__FigmaClient<$Result.GetResult<Prisma.$FigmaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Figma that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FigmaFindFirstOrThrowArgs} args - Arguments to find a Figma
     * @example
     * // Get one Figma
     * const figma = await prisma.figma.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FigmaFindFirstOrThrowArgs>(args?: SelectSubset<T, FigmaFindFirstOrThrowArgs<ExtArgs>>): Prisma__FigmaClient<$Result.GetResult<Prisma.$FigmaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Figmas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FigmaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Figmas
     * const figmas = await prisma.figma.findMany()
     * 
     * // Get first 10 Figmas
     * const figmas = await prisma.figma.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const figmaWithIdOnly = await prisma.figma.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FigmaFindManyArgs>(args?: SelectSubset<T, FigmaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FigmaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Figma.
     * @param {FigmaCreateArgs} args - Arguments to create a Figma.
     * @example
     * // Create one Figma
     * const Figma = await prisma.figma.create({
     *   data: {
     *     // ... data to create a Figma
     *   }
     * })
     * 
     */
    create<T extends FigmaCreateArgs>(args: SelectSubset<T, FigmaCreateArgs<ExtArgs>>): Prisma__FigmaClient<$Result.GetResult<Prisma.$FigmaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Figmas.
     * @param {FigmaCreateManyArgs} args - Arguments to create many Figmas.
     * @example
     * // Create many Figmas
     * const figma = await prisma.figma.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FigmaCreateManyArgs>(args?: SelectSubset<T, FigmaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Figmas and returns the data saved in the database.
     * @param {FigmaCreateManyAndReturnArgs} args - Arguments to create many Figmas.
     * @example
     * // Create many Figmas
     * const figma = await prisma.figma.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Figmas and only return the `id`
     * const figmaWithIdOnly = await prisma.figma.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FigmaCreateManyAndReturnArgs>(args?: SelectSubset<T, FigmaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FigmaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Figma.
     * @param {FigmaDeleteArgs} args - Arguments to delete one Figma.
     * @example
     * // Delete one Figma
     * const Figma = await prisma.figma.delete({
     *   where: {
     *     // ... filter to delete one Figma
     *   }
     * })
     * 
     */
    delete<T extends FigmaDeleteArgs>(args: SelectSubset<T, FigmaDeleteArgs<ExtArgs>>): Prisma__FigmaClient<$Result.GetResult<Prisma.$FigmaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Figma.
     * @param {FigmaUpdateArgs} args - Arguments to update one Figma.
     * @example
     * // Update one Figma
     * const figma = await prisma.figma.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FigmaUpdateArgs>(args: SelectSubset<T, FigmaUpdateArgs<ExtArgs>>): Prisma__FigmaClient<$Result.GetResult<Prisma.$FigmaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Figmas.
     * @param {FigmaDeleteManyArgs} args - Arguments to filter Figmas to delete.
     * @example
     * // Delete a few Figmas
     * const { count } = await prisma.figma.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FigmaDeleteManyArgs>(args?: SelectSubset<T, FigmaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Figmas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FigmaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Figmas
     * const figma = await prisma.figma.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FigmaUpdateManyArgs>(args: SelectSubset<T, FigmaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Figmas and returns the data updated in the database.
     * @param {FigmaUpdateManyAndReturnArgs} args - Arguments to update many Figmas.
     * @example
     * // Update many Figmas
     * const figma = await prisma.figma.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Figmas and only return the `id`
     * const figmaWithIdOnly = await prisma.figma.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FigmaUpdateManyAndReturnArgs>(args: SelectSubset<T, FigmaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FigmaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Figma.
     * @param {FigmaUpsertArgs} args - Arguments to update or create a Figma.
     * @example
     * // Update or create a Figma
     * const figma = await prisma.figma.upsert({
     *   create: {
     *     // ... data to create a Figma
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Figma we want to update
     *   }
     * })
     */
    upsert<T extends FigmaUpsertArgs>(args: SelectSubset<T, FigmaUpsertArgs<ExtArgs>>): Prisma__FigmaClient<$Result.GetResult<Prisma.$FigmaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Figmas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FigmaCountArgs} args - Arguments to filter Figmas to count.
     * @example
     * // Count the number of Figmas
     * const count = await prisma.figma.count({
     *   where: {
     *     // ... the filter for the Figmas we want to count
     *   }
     * })
    **/
    count<T extends FigmaCountArgs>(
      args?: Subset<T, FigmaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FigmaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Figma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FigmaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FigmaAggregateArgs>(args: Subset<T, FigmaAggregateArgs>): Prisma.PrismaPromise<GetFigmaAggregateType<T>>

    /**
     * Group by Figma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FigmaGroupByArgs} args - Group by arguments.
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
      T extends FigmaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FigmaGroupByArgs['orderBy'] }
        : { orderBy?: FigmaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FigmaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFigmaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Figma model
   */
  readonly fields: FigmaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Figma.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FigmaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rectangles<T extends Figma$rectanglesArgs<ExtArgs> = {}>(args?: Subset<T, Figma$rectanglesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RectanglePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    circles<T extends Figma$circlesArgs<ExtArgs> = {}>(args?: Subset<T, Figma$circlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    texts<T extends Figma$textsArgs<ExtArgs> = {}>(args?: Subset<T, Figma$textsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Figma model
   */
  interface FigmaFieldRefs {
    readonly id: FieldRef<"Figma", 'String'>
    readonly hostEmail: FieldRef<"Figma", 'String'>
    readonly whitelist: FieldRef<"Figma", 'String[]'>
    readonly createdAt: FieldRef<"Figma", 'DateTime'>
    readonly updatedAt: FieldRef<"Figma", 'DateTime'>
    readonly nameFigma: FieldRef<"Figma", 'String'>
    readonly image: FieldRef<"Figma", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Figma findUnique
   */
  export type FigmaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Figma
     */
    select?: FigmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Figma
     */
    omit?: FigmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FigmaInclude<ExtArgs> | null
    /**
     * Filter, which Figma to fetch.
     */
    where: FigmaWhereUniqueInput
  }

  /**
   * Figma findUniqueOrThrow
   */
  export type FigmaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Figma
     */
    select?: FigmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Figma
     */
    omit?: FigmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FigmaInclude<ExtArgs> | null
    /**
     * Filter, which Figma to fetch.
     */
    where: FigmaWhereUniqueInput
  }

  /**
   * Figma findFirst
   */
  export type FigmaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Figma
     */
    select?: FigmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Figma
     */
    omit?: FigmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FigmaInclude<ExtArgs> | null
    /**
     * Filter, which Figma to fetch.
     */
    where?: FigmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Figmas to fetch.
     */
    orderBy?: FigmaOrderByWithRelationInput | FigmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Figmas.
     */
    cursor?: FigmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Figmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Figmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Figmas.
     */
    distinct?: FigmaScalarFieldEnum | FigmaScalarFieldEnum[]
  }

  /**
   * Figma findFirstOrThrow
   */
  export type FigmaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Figma
     */
    select?: FigmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Figma
     */
    omit?: FigmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FigmaInclude<ExtArgs> | null
    /**
     * Filter, which Figma to fetch.
     */
    where?: FigmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Figmas to fetch.
     */
    orderBy?: FigmaOrderByWithRelationInput | FigmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Figmas.
     */
    cursor?: FigmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Figmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Figmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Figmas.
     */
    distinct?: FigmaScalarFieldEnum | FigmaScalarFieldEnum[]
  }

  /**
   * Figma findMany
   */
  export type FigmaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Figma
     */
    select?: FigmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Figma
     */
    omit?: FigmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FigmaInclude<ExtArgs> | null
    /**
     * Filter, which Figmas to fetch.
     */
    where?: FigmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Figmas to fetch.
     */
    orderBy?: FigmaOrderByWithRelationInput | FigmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Figmas.
     */
    cursor?: FigmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Figmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Figmas.
     */
    skip?: number
    distinct?: FigmaScalarFieldEnum | FigmaScalarFieldEnum[]
  }

  /**
   * Figma create
   */
  export type FigmaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Figma
     */
    select?: FigmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Figma
     */
    omit?: FigmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FigmaInclude<ExtArgs> | null
    /**
     * The data needed to create a Figma.
     */
    data: XOR<FigmaCreateInput, FigmaUncheckedCreateInput>
  }

  /**
   * Figma createMany
   */
  export type FigmaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Figmas.
     */
    data: FigmaCreateManyInput | FigmaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Figma createManyAndReturn
   */
  export type FigmaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Figma
     */
    select?: FigmaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Figma
     */
    omit?: FigmaOmit<ExtArgs> | null
    /**
     * The data used to create many Figmas.
     */
    data: FigmaCreateManyInput | FigmaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Figma update
   */
  export type FigmaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Figma
     */
    select?: FigmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Figma
     */
    omit?: FigmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FigmaInclude<ExtArgs> | null
    /**
     * The data needed to update a Figma.
     */
    data: XOR<FigmaUpdateInput, FigmaUncheckedUpdateInput>
    /**
     * Choose, which Figma to update.
     */
    where: FigmaWhereUniqueInput
  }

  /**
   * Figma updateMany
   */
  export type FigmaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Figmas.
     */
    data: XOR<FigmaUpdateManyMutationInput, FigmaUncheckedUpdateManyInput>
    /**
     * Filter which Figmas to update
     */
    where?: FigmaWhereInput
    /**
     * Limit how many Figmas to update.
     */
    limit?: number
  }

  /**
   * Figma updateManyAndReturn
   */
  export type FigmaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Figma
     */
    select?: FigmaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Figma
     */
    omit?: FigmaOmit<ExtArgs> | null
    /**
     * The data used to update Figmas.
     */
    data: XOR<FigmaUpdateManyMutationInput, FigmaUncheckedUpdateManyInput>
    /**
     * Filter which Figmas to update
     */
    where?: FigmaWhereInput
    /**
     * Limit how many Figmas to update.
     */
    limit?: number
  }

  /**
   * Figma upsert
   */
  export type FigmaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Figma
     */
    select?: FigmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Figma
     */
    omit?: FigmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FigmaInclude<ExtArgs> | null
    /**
     * The filter to search for the Figma to update in case it exists.
     */
    where: FigmaWhereUniqueInput
    /**
     * In case the Figma found by the `where` argument doesn't exist, create a new Figma with this data.
     */
    create: XOR<FigmaCreateInput, FigmaUncheckedCreateInput>
    /**
     * In case the Figma was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FigmaUpdateInput, FigmaUncheckedUpdateInput>
  }

  /**
   * Figma delete
   */
  export type FigmaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Figma
     */
    select?: FigmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Figma
     */
    omit?: FigmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FigmaInclude<ExtArgs> | null
    /**
     * Filter which Figma to delete.
     */
    where: FigmaWhereUniqueInput
  }

  /**
   * Figma deleteMany
   */
  export type FigmaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Figmas to delete
     */
    where?: FigmaWhereInput
    /**
     * Limit how many Figmas to delete.
     */
    limit?: number
  }

  /**
   * Figma.rectangles
   */
  export type Figma$rectanglesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rectangle
     */
    select?: RectangleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rectangle
     */
    omit?: RectangleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RectangleInclude<ExtArgs> | null
    where?: RectangleWhereInput
    orderBy?: RectangleOrderByWithRelationInput | RectangleOrderByWithRelationInput[]
    cursor?: RectangleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RectangleScalarFieldEnum | RectangleScalarFieldEnum[]
  }

  /**
   * Figma.circles
   */
  export type Figma$circlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    where?: CircleWhereInput
    orderBy?: CircleOrderByWithRelationInput | CircleOrderByWithRelationInput[]
    cursor?: CircleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CircleScalarFieldEnum | CircleScalarFieldEnum[]
  }

  /**
   * Figma.texts
   */
  export type Figma$textsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Text
     */
    omit?: TextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInclude<ExtArgs> | null
    where?: TextWhereInput
    orderBy?: TextOrderByWithRelationInput | TextOrderByWithRelationInput[]
    cursor?: TextWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TextScalarFieldEnum | TextScalarFieldEnum[]
  }

  /**
   * Figma without action
   */
  export type FigmaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Figma
     */
    select?: FigmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Figma
     */
    omit?: FigmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FigmaInclude<ExtArgs> | null
  }


  /**
   * Model Rectangle
   */

  export type AggregateRectangle = {
    _count: RectangleCountAggregateOutputType | null
    _avg: RectangleAvgAggregateOutputType | null
    _sum: RectangleSumAggregateOutputType | null
    _min: RectangleMinAggregateOutputType | null
    _max: RectangleMaxAggregateOutputType | null
  }

  export type RectangleAvgAggregateOutputType = {
    x: number | null
    y: number | null
    width: number | null
    height: number | null
    strokeWidth: number | null
    cornerRadius: number | null
    opacity: number | null
  }

  export type RectangleSumAggregateOutputType = {
    x: number | null
    y: number | null
    width: number | null
    height: number | null
    strokeWidth: number | null
    cornerRadius: number | null
    opacity: number | null
  }

  export type RectangleMinAggregateOutputType = {
    id: string | null
    x: number | null
    y: number | null
    width: number | null
    height: number | null
    fill: string | null
    stroke: string | null
    strokeWidth: number | null
    cornerRadius: number | null
    opacity: number | null
    figmaId: string | null
  }

  export type RectangleMaxAggregateOutputType = {
    id: string | null
    x: number | null
    y: number | null
    width: number | null
    height: number | null
    fill: string | null
    stroke: string | null
    strokeWidth: number | null
    cornerRadius: number | null
    opacity: number | null
    figmaId: string | null
  }

  export type RectangleCountAggregateOutputType = {
    id: number
    x: number
    y: number
    width: number
    height: number
    fill: number
    stroke: number
    strokeWidth: number
    cornerRadius: number
    opacity: number
    figmaId: number
    _all: number
  }


  export type RectangleAvgAggregateInputType = {
    x?: true
    y?: true
    width?: true
    height?: true
    strokeWidth?: true
    cornerRadius?: true
    opacity?: true
  }

  export type RectangleSumAggregateInputType = {
    x?: true
    y?: true
    width?: true
    height?: true
    strokeWidth?: true
    cornerRadius?: true
    opacity?: true
  }

  export type RectangleMinAggregateInputType = {
    id?: true
    x?: true
    y?: true
    width?: true
    height?: true
    fill?: true
    stroke?: true
    strokeWidth?: true
    cornerRadius?: true
    opacity?: true
    figmaId?: true
  }

  export type RectangleMaxAggregateInputType = {
    id?: true
    x?: true
    y?: true
    width?: true
    height?: true
    fill?: true
    stroke?: true
    strokeWidth?: true
    cornerRadius?: true
    opacity?: true
    figmaId?: true
  }

  export type RectangleCountAggregateInputType = {
    id?: true
    x?: true
    y?: true
    width?: true
    height?: true
    fill?: true
    stroke?: true
    strokeWidth?: true
    cornerRadius?: true
    opacity?: true
    figmaId?: true
    _all?: true
  }

  export type RectangleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rectangle to aggregate.
     */
    where?: RectangleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rectangles to fetch.
     */
    orderBy?: RectangleOrderByWithRelationInput | RectangleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RectangleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rectangles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rectangles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rectangles
    **/
    _count?: true | RectangleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RectangleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RectangleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RectangleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RectangleMaxAggregateInputType
  }

  export type GetRectangleAggregateType<T extends RectangleAggregateArgs> = {
        [P in keyof T & keyof AggregateRectangle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRectangle[P]>
      : GetScalarType<T[P], AggregateRectangle[P]>
  }




  export type RectangleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RectangleWhereInput
    orderBy?: RectangleOrderByWithAggregationInput | RectangleOrderByWithAggregationInput[]
    by: RectangleScalarFieldEnum[] | RectangleScalarFieldEnum
    having?: RectangleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RectangleCountAggregateInputType | true
    _avg?: RectangleAvgAggregateInputType
    _sum?: RectangleSumAggregateInputType
    _min?: RectangleMinAggregateInputType
    _max?: RectangleMaxAggregateInputType
  }

  export type RectangleGroupByOutputType = {
    id: string
    x: number
    y: number
    width: number
    height: number
    fill: string
    stroke: string | null
    strokeWidth: number | null
    cornerRadius: number | null
    opacity: number | null
    figmaId: string
    _count: RectangleCountAggregateOutputType | null
    _avg: RectangleAvgAggregateOutputType | null
    _sum: RectangleSumAggregateOutputType | null
    _min: RectangleMinAggregateOutputType | null
    _max: RectangleMaxAggregateOutputType | null
  }

  type GetRectangleGroupByPayload<T extends RectangleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RectangleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RectangleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RectangleGroupByOutputType[P]>
            : GetScalarType<T[P], RectangleGroupByOutputType[P]>
        }
      >
    >


  export type RectangleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    x?: boolean
    y?: boolean
    width?: boolean
    height?: boolean
    fill?: boolean
    stroke?: boolean
    strokeWidth?: boolean
    cornerRadius?: boolean
    opacity?: boolean
    figmaId?: boolean
    figma?: boolean | FigmaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rectangle"]>

  export type RectangleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    x?: boolean
    y?: boolean
    width?: boolean
    height?: boolean
    fill?: boolean
    stroke?: boolean
    strokeWidth?: boolean
    cornerRadius?: boolean
    opacity?: boolean
    figmaId?: boolean
    figma?: boolean | FigmaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rectangle"]>

  export type RectangleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    x?: boolean
    y?: boolean
    width?: boolean
    height?: boolean
    fill?: boolean
    stroke?: boolean
    strokeWidth?: boolean
    cornerRadius?: boolean
    opacity?: boolean
    figmaId?: boolean
    figma?: boolean | FigmaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rectangle"]>

  export type RectangleSelectScalar = {
    id?: boolean
    x?: boolean
    y?: boolean
    width?: boolean
    height?: boolean
    fill?: boolean
    stroke?: boolean
    strokeWidth?: boolean
    cornerRadius?: boolean
    opacity?: boolean
    figmaId?: boolean
  }

  export type RectangleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "x" | "y" | "width" | "height" | "fill" | "stroke" | "strokeWidth" | "cornerRadius" | "opacity" | "figmaId", ExtArgs["result"]["rectangle"]>
  export type RectangleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    figma?: boolean | FigmaDefaultArgs<ExtArgs>
  }
  export type RectangleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    figma?: boolean | FigmaDefaultArgs<ExtArgs>
  }
  export type RectangleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    figma?: boolean | FigmaDefaultArgs<ExtArgs>
  }

  export type $RectanglePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rectangle"
    objects: {
      figma: Prisma.$FigmaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      x: number
      y: number
      width: number
      height: number
      fill: string
      stroke: string | null
      strokeWidth: number | null
      cornerRadius: number | null
      opacity: number | null
      figmaId: string
    }, ExtArgs["result"]["rectangle"]>
    composites: {}
  }

  type RectangleGetPayload<S extends boolean | null | undefined | RectangleDefaultArgs> = $Result.GetResult<Prisma.$RectanglePayload, S>

  type RectangleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RectangleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RectangleCountAggregateInputType | true
    }

  export interface RectangleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rectangle'], meta: { name: 'Rectangle' } }
    /**
     * Find zero or one Rectangle that matches the filter.
     * @param {RectangleFindUniqueArgs} args - Arguments to find a Rectangle
     * @example
     * // Get one Rectangle
     * const rectangle = await prisma.rectangle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RectangleFindUniqueArgs>(args: SelectSubset<T, RectangleFindUniqueArgs<ExtArgs>>): Prisma__RectangleClient<$Result.GetResult<Prisma.$RectanglePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rectangle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RectangleFindUniqueOrThrowArgs} args - Arguments to find a Rectangle
     * @example
     * // Get one Rectangle
     * const rectangle = await prisma.rectangle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RectangleFindUniqueOrThrowArgs>(args: SelectSubset<T, RectangleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RectangleClient<$Result.GetResult<Prisma.$RectanglePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rectangle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RectangleFindFirstArgs} args - Arguments to find a Rectangle
     * @example
     * // Get one Rectangle
     * const rectangle = await prisma.rectangle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RectangleFindFirstArgs>(args?: SelectSubset<T, RectangleFindFirstArgs<ExtArgs>>): Prisma__RectangleClient<$Result.GetResult<Prisma.$RectanglePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rectangle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RectangleFindFirstOrThrowArgs} args - Arguments to find a Rectangle
     * @example
     * // Get one Rectangle
     * const rectangle = await prisma.rectangle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RectangleFindFirstOrThrowArgs>(args?: SelectSubset<T, RectangleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RectangleClient<$Result.GetResult<Prisma.$RectanglePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rectangles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RectangleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rectangles
     * const rectangles = await prisma.rectangle.findMany()
     * 
     * // Get first 10 Rectangles
     * const rectangles = await prisma.rectangle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rectangleWithIdOnly = await prisma.rectangle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RectangleFindManyArgs>(args?: SelectSubset<T, RectangleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RectanglePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rectangle.
     * @param {RectangleCreateArgs} args - Arguments to create a Rectangle.
     * @example
     * // Create one Rectangle
     * const Rectangle = await prisma.rectangle.create({
     *   data: {
     *     // ... data to create a Rectangle
     *   }
     * })
     * 
     */
    create<T extends RectangleCreateArgs>(args: SelectSubset<T, RectangleCreateArgs<ExtArgs>>): Prisma__RectangleClient<$Result.GetResult<Prisma.$RectanglePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rectangles.
     * @param {RectangleCreateManyArgs} args - Arguments to create many Rectangles.
     * @example
     * // Create many Rectangles
     * const rectangle = await prisma.rectangle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RectangleCreateManyArgs>(args?: SelectSubset<T, RectangleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rectangles and returns the data saved in the database.
     * @param {RectangleCreateManyAndReturnArgs} args - Arguments to create many Rectangles.
     * @example
     * // Create many Rectangles
     * const rectangle = await prisma.rectangle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rectangles and only return the `id`
     * const rectangleWithIdOnly = await prisma.rectangle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RectangleCreateManyAndReturnArgs>(args?: SelectSubset<T, RectangleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RectanglePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rectangle.
     * @param {RectangleDeleteArgs} args - Arguments to delete one Rectangle.
     * @example
     * // Delete one Rectangle
     * const Rectangle = await prisma.rectangle.delete({
     *   where: {
     *     // ... filter to delete one Rectangle
     *   }
     * })
     * 
     */
    delete<T extends RectangleDeleteArgs>(args: SelectSubset<T, RectangleDeleteArgs<ExtArgs>>): Prisma__RectangleClient<$Result.GetResult<Prisma.$RectanglePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rectangle.
     * @param {RectangleUpdateArgs} args - Arguments to update one Rectangle.
     * @example
     * // Update one Rectangle
     * const rectangle = await prisma.rectangle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RectangleUpdateArgs>(args: SelectSubset<T, RectangleUpdateArgs<ExtArgs>>): Prisma__RectangleClient<$Result.GetResult<Prisma.$RectanglePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rectangles.
     * @param {RectangleDeleteManyArgs} args - Arguments to filter Rectangles to delete.
     * @example
     * // Delete a few Rectangles
     * const { count } = await prisma.rectangle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RectangleDeleteManyArgs>(args?: SelectSubset<T, RectangleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rectangles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RectangleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rectangles
     * const rectangle = await prisma.rectangle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RectangleUpdateManyArgs>(args: SelectSubset<T, RectangleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rectangles and returns the data updated in the database.
     * @param {RectangleUpdateManyAndReturnArgs} args - Arguments to update many Rectangles.
     * @example
     * // Update many Rectangles
     * const rectangle = await prisma.rectangle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rectangles and only return the `id`
     * const rectangleWithIdOnly = await prisma.rectangle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RectangleUpdateManyAndReturnArgs>(args: SelectSubset<T, RectangleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RectanglePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rectangle.
     * @param {RectangleUpsertArgs} args - Arguments to update or create a Rectangle.
     * @example
     * // Update or create a Rectangle
     * const rectangle = await prisma.rectangle.upsert({
     *   create: {
     *     // ... data to create a Rectangle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rectangle we want to update
     *   }
     * })
     */
    upsert<T extends RectangleUpsertArgs>(args: SelectSubset<T, RectangleUpsertArgs<ExtArgs>>): Prisma__RectangleClient<$Result.GetResult<Prisma.$RectanglePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rectangles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RectangleCountArgs} args - Arguments to filter Rectangles to count.
     * @example
     * // Count the number of Rectangles
     * const count = await prisma.rectangle.count({
     *   where: {
     *     // ... the filter for the Rectangles we want to count
     *   }
     * })
    **/
    count<T extends RectangleCountArgs>(
      args?: Subset<T, RectangleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RectangleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rectangle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RectangleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RectangleAggregateArgs>(args: Subset<T, RectangleAggregateArgs>): Prisma.PrismaPromise<GetRectangleAggregateType<T>>

    /**
     * Group by Rectangle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RectangleGroupByArgs} args - Group by arguments.
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
      T extends RectangleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RectangleGroupByArgs['orderBy'] }
        : { orderBy?: RectangleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RectangleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRectangleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rectangle model
   */
  readonly fields: RectangleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rectangle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RectangleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    figma<T extends FigmaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FigmaDefaultArgs<ExtArgs>>): Prisma__FigmaClient<$Result.GetResult<Prisma.$FigmaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Rectangle model
   */
  interface RectangleFieldRefs {
    readonly id: FieldRef<"Rectangle", 'String'>
    readonly x: FieldRef<"Rectangle", 'Int'>
    readonly y: FieldRef<"Rectangle", 'Int'>
    readonly width: FieldRef<"Rectangle", 'Int'>
    readonly height: FieldRef<"Rectangle", 'Int'>
    readonly fill: FieldRef<"Rectangle", 'String'>
    readonly stroke: FieldRef<"Rectangle", 'String'>
    readonly strokeWidth: FieldRef<"Rectangle", 'Int'>
    readonly cornerRadius: FieldRef<"Rectangle", 'Int'>
    readonly opacity: FieldRef<"Rectangle", 'Int'>
    readonly figmaId: FieldRef<"Rectangle", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Rectangle findUnique
   */
  export type RectangleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rectangle
     */
    select?: RectangleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rectangle
     */
    omit?: RectangleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RectangleInclude<ExtArgs> | null
    /**
     * Filter, which Rectangle to fetch.
     */
    where: RectangleWhereUniqueInput
  }

  /**
   * Rectangle findUniqueOrThrow
   */
  export type RectangleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rectangle
     */
    select?: RectangleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rectangle
     */
    omit?: RectangleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RectangleInclude<ExtArgs> | null
    /**
     * Filter, which Rectangle to fetch.
     */
    where: RectangleWhereUniqueInput
  }

  /**
   * Rectangle findFirst
   */
  export type RectangleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rectangle
     */
    select?: RectangleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rectangle
     */
    omit?: RectangleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RectangleInclude<ExtArgs> | null
    /**
     * Filter, which Rectangle to fetch.
     */
    where?: RectangleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rectangles to fetch.
     */
    orderBy?: RectangleOrderByWithRelationInput | RectangleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rectangles.
     */
    cursor?: RectangleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rectangles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rectangles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rectangles.
     */
    distinct?: RectangleScalarFieldEnum | RectangleScalarFieldEnum[]
  }

  /**
   * Rectangle findFirstOrThrow
   */
  export type RectangleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rectangle
     */
    select?: RectangleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rectangle
     */
    omit?: RectangleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RectangleInclude<ExtArgs> | null
    /**
     * Filter, which Rectangle to fetch.
     */
    where?: RectangleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rectangles to fetch.
     */
    orderBy?: RectangleOrderByWithRelationInput | RectangleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rectangles.
     */
    cursor?: RectangleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rectangles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rectangles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rectangles.
     */
    distinct?: RectangleScalarFieldEnum | RectangleScalarFieldEnum[]
  }

  /**
   * Rectangle findMany
   */
  export type RectangleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rectangle
     */
    select?: RectangleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rectangle
     */
    omit?: RectangleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RectangleInclude<ExtArgs> | null
    /**
     * Filter, which Rectangles to fetch.
     */
    where?: RectangleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rectangles to fetch.
     */
    orderBy?: RectangleOrderByWithRelationInput | RectangleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rectangles.
     */
    cursor?: RectangleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rectangles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rectangles.
     */
    skip?: number
    distinct?: RectangleScalarFieldEnum | RectangleScalarFieldEnum[]
  }

  /**
   * Rectangle create
   */
  export type RectangleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rectangle
     */
    select?: RectangleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rectangle
     */
    omit?: RectangleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RectangleInclude<ExtArgs> | null
    /**
     * The data needed to create a Rectangle.
     */
    data: XOR<RectangleCreateInput, RectangleUncheckedCreateInput>
  }

  /**
   * Rectangle createMany
   */
  export type RectangleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rectangles.
     */
    data: RectangleCreateManyInput | RectangleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rectangle createManyAndReturn
   */
  export type RectangleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rectangle
     */
    select?: RectangleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rectangle
     */
    omit?: RectangleOmit<ExtArgs> | null
    /**
     * The data used to create many Rectangles.
     */
    data: RectangleCreateManyInput | RectangleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RectangleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rectangle update
   */
  export type RectangleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rectangle
     */
    select?: RectangleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rectangle
     */
    omit?: RectangleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RectangleInclude<ExtArgs> | null
    /**
     * The data needed to update a Rectangle.
     */
    data: XOR<RectangleUpdateInput, RectangleUncheckedUpdateInput>
    /**
     * Choose, which Rectangle to update.
     */
    where: RectangleWhereUniqueInput
  }

  /**
   * Rectangle updateMany
   */
  export type RectangleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rectangles.
     */
    data: XOR<RectangleUpdateManyMutationInput, RectangleUncheckedUpdateManyInput>
    /**
     * Filter which Rectangles to update
     */
    where?: RectangleWhereInput
    /**
     * Limit how many Rectangles to update.
     */
    limit?: number
  }

  /**
   * Rectangle updateManyAndReturn
   */
  export type RectangleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rectangle
     */
    select?: RectangleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rectangle
     */
    omit?: RectangleOmit<ExtArgs> | null
    /**
     * The data used to update Rectangles.
     */
    data: XOR<RectangleUpdateManyMutationInput, RectangleUncheckedUpdateManyInput>
    /**
     * Filter which Rectangles to update
     */
    where?: RectangleWhereInput
    /**
     * Limit how many Rectangles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RectangleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rectangle upsert
   */
  export type RectangleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rectangle
     */
    select?: RectangleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rectangle
     */
    omit?: RectangleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RectangleInclude<ExtArgs> | null
    /**
     * The filter to search for the Rectangle to update in case it exists.
     */
    where: RectangleWhereUniqueInput
    /**
     * In case the Rectangle found by the `where` argument doesn't exist, create a new Rectangle with this data.
     */
    create: XOR<RectangleCreateInput, RectangleUncheckedCreateInput>
    /**
     * In case the Rectangle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RectangleUpdateInput, RectangleUncheckedUpdateInput>
  }

  /**
   * Rectangle delete
   */
  export type RectangleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rectangle
     */
    select?: RectangleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rectangle
     */
    omit?: RectangleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RectangleInclude<ExtArgs> | null
    /**
     * Filter which Rectangle to delete.
     */
    where: RectangleWhereUniqueInput
  }

  /**
   * Rectangle deleteMany
   */
  export type RectangleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rectangles to delete
     */
    where?: RectangleWhereInput
    /**
     * Limit how many Rectangles to delete.
     */
    limit?: number
  }

  /**
   * Rectangle without action
   */
  export type RectangleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rectangle
     */
    select?: RectangleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rectangle
     */
    omit?: RectangleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RectangleInclude<ExtArgs> | null
  }


  /**
   * Model Circle
   */

  export type AggregateCircle = {
    _count: CircleCountAggregateOutputType | null
    _avg: CircleAvgAggregateOutputType | null
    _sum: CircleSumAggregateOutputType | null
    _min: CircleMinAggregateOutputType | null
    _max: CircleMaxAggregateOutputType | null
  }

  export type CircleAvgAggregateOutputType = {
    x: number | null
    y: number | null
    radius: number | null
  }

  export type CircleSumAggregateOutputType = {
    x: number | null
    y: number | null
    radius: number | null
  }

  export type CircleMinAggregateOutputType = {
    id: string | null
    x: number | null
    y: number | null
    radius: number | null
    fill: string | null
    figmaId: string | null
  }

  export type CircleMaxAggregateOutputType = {
    id: string | null
    x: number | null
    y: number | null
    radius: number | null
    fill: string | null
    figmaId: string | null
  }

  export type CircleCountAggregateOutputType = {
    id: number
    x: number
    y: number
    radius: number
    fill: number
    figmaId: number
    _all: number
  }


  export type CircleAvgAggregateInputType = {
    x?: true
    y?: true
    radius?: true
  }

  export type CircleSumAggregateInputType = {
    x?: true
    y?: true
    radius?: true
  }

  export type CircleMinAggregateInputType = {
    id?: true
    x?: true
    y?: true
    radius?: true
    fill?: true
    figmaId?: true
  }

  export type CircleMaxAggregateInputType = {
    id?: true
    x?: true
    y?: true
    radius?: true
    fill?: true
    figmaId?: true
  }

  export type CircleCountAggregateInputType = {
    id?: true
    x?: true
    y?: true
    radius?: true
    fill?: true
    figmaId?: true
    _all?: true
  }

  export type CircleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Circle to aggregate.
     */
    where?: CircleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Circles to fetch.
     */
    orderBy?: CircleOrderByWithRelationInput | CircleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CircleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Circles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Circles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Circles
    **/
    _count?: true | CircleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CircleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CircleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CircleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CircleMaxAggregateInputType
  }

  export type GetCircleAggregateType<T extends CircleAggregateArgs> = {
        [P in keyof T & keyof AggregateCircle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCircle[P]>
      : GetScalarType<T[P], AggregateCircle[P]>
  }




  export type CircleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CircleWhereInput
    orderBy?: CircleOrderByWithAggregationInput | CircleOrderByWithAggregationInput[]
    by: CircleScalarFieldEnum[] | CircleScalarFieldEnum
    having?: CircleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CircleCountAggregateInputType | true
    _avg?: CircleAvgAggregateInputType
    _sum?: CircleSumAggregateInputType
    _min?: CircleMinAggregateInputType
    _max?: CircleMaxAggregateInputType
  }

  export type CircleGroupByOutputType = {
    id: string
    x: number
    y: number
    radius: number
    fill: string
    figmaId: string
    _count: CircleCountAggregateOutputType | null
    _avg: CircleAvgAggregateOutputType | null
    _sum: CircleSumAggregateOutputType | null
    _min: CircleMinAggregateOutputType | null
    _max: CircleMaxAggregateOutputType | null
  }

  type GetCircleGroupByPayload<T extends CircleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CircleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CircleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CircleGroupByOutputType[P]>
            : GetScalarType<T[P], CircleGroupByOutputType[P]>
        }
      >
    >


  export type CircleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    x?: boolean
    y?: boolean
    radius?: boolean
    fill?: boolean
    figmaId?: boolean
    figma?: boolean | FigmaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["circle"]>

  export type CircleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    x?: boolean
    y?: boolean
    radius?: boolean
    fill?: boolean
    figmaId?: boolean
    figma?: boolean | FigmaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["circle"]>

  export type CircleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    x?: boolean
    y?: boolean
    radius?: boolean
    fill?: boolean
    figmaId?: boolean
    figma?: boolean | FigmaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["circle"]>

  export type CircleSelectScalar = {
    id?: boolean
    x?: boolean
    y?: boolean
    radius?: boolean
    fill?: boolean
    figmaId?: boolean
  }

  export type CircleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "x" | "y" | "radius" | "fill" | "figmaId", ExtArgs["result"]["circle"]>
  export type CircleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    figma?: boolean | FigmaDefaultArgs<ExtArgs>
  }
  export type CircleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    figma?: boolean | FigmaDefaultArgs<ExtArgs>
  }
  export type CircleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    figma?: boolean | FigmaDefaultArgs<ExtArgs>
  }

  export type $CirclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Circle"
    objects: {
      figma: Prisma.$FigmaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      x: number
      y: number
      radius: number
      fill: string
      figmaId: string
    }, ExtArgs["result"]["circle"]>
    composites: {}
  }

  type CircleGetPayload<S extends boolean | null | undefined | CircleDefaultArgs> = $Result.GetResult<Prisma.$CirclePayload, S>

  type CircleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CircleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CircleCountAggregateInputType | true
    }

  export interface CircleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Circle'], meta: { name: 'Circle' } }
    /**
     * Find zero or one Circle that matches the filter.
     * @param {CircleFindUniqueArgs} args - Arguments to find a Circle
     * @example
     * // Get one Circle
     * const circle = await prisma.circle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CircleFindUniqueArgs>(args: SelectSubset<T, CircleFindUniqueArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Circle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CircleFindUniqueOrThrowArgs} args - Arguments to find a Circle
     * @example
     * // Get one Circle
     * const circle = await prisma.circle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CircleFindUniqueOrThrowArgs>(args: SelectSubset<T, CircleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Circle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleFindFirstArgs} args - Arguments to find a Circle
     * @example
     * // Get one Circle
     * const circle = await prisma.circle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CircleFindFirstArgs>(args?: SelectSubset<T, CircleFindFirstArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Circle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleFindFirstOrThrowArgs} args - Arguments to find a Circle
     * @example
     * // Get one Circle
     * const circle = await prisma.circle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CircleFindFirstOrThrowArgs>(args?: SelectSubset<T, CircleFindFirstOrThrowArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Circles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Circles
     * const circles = await prisma.circle.findMany()
     * 
     * // Get first 10 Circles
     * const circles = await prisma.circle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const circleWithIdOnly = await prisma.circle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CircleFindManyArgs>(args?: SelectSubset<T, CircleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Circle.
     * @param {CircleCreateArgs} args - Arguments to create a Circle.
     * @example
     * // Create one Circle
     * const Circle = await prisma.circle.create({
     *   data: {
     *     // ... data to create a Circle
     *   }
     * })
     * 
     */
    create<T extends CircleCreateArgs>(args: SelectSubset<T, CircleCreateArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Circles.
     * @param {CircleCreateManyArgs} args - Arguments to create many Circles.
     * @example
     * // Create many Circles
     * const circle = await prisma.circle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CircleCreateManyArgs>(args?: SelectSubset<T, CircleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Circles and returns the data saved in the database.
     * @param {CircleCreateManyAndReturnArgs} args - Arguments to create many Circles.
     * @example
     * // Create many Circles
     * const circle = await prisma.circle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Circles and only return the `id`
     * const circleWithIdOnly = await prisma.circle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CircleCreateManyAndReturnArgs>(args?: SelectSubset<T, CircleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Circle.
     * @param {CircleDeleteArgs} args - Arguments to delete one Circle.
     * @example
     * // Delete one Circle
     * const Circle = await prisma.circle.delete({
     *   where: {
     *     // ... filter to delete one Circle
     *   }
     * })
     * 
     */
    delete<T extends CircleDeleteArgs>(args: SelectSubset<T, CircleDeleteArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Circle.
     * @param {CircleUpdateArgs} args - Arguments to update one Circle.
     * @example
     * // Update one Circle
     * const circle = await prisma.circle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CircleUpdateArgs>(args: SelectSubset<T, CircleUpdateArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Circles.
     * @param {CircleDeleteManyArgs} args - Arguments to filter Circles to delete.
     * @example
     * // Delete a few Circles
     * const { count } = await prisma.circle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CircleDeleteManyArgs>(args?: SelectSubset<T, CircleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Circles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Circles
     * const circle = await prisma.circle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CircleUpdateManyArgs>(args: SelectSubset<T, CircleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Circles and returns the data updated in the database.
     * @param {CircleUpdateManyAndReturnArgs} args - Arguments to update many Circles.
     * @example
     * // Update many Circles
     * const circle = await prisma.circle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Circles and only return the `id`
     * const circleWithIdOnly = await prisma.circle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CircleUpdateManyAndReturnArgs>(args: SelectSubset<T, CircleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Circle.
     * @param {CircleUpsertArgs} args - Arguments to update or create a Circle.
     * @example
     * // Update or create a Circle
     * const circle = await prisma.circle.upsert({
     *   create: {
     *     // ... data to create a Circle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Circle we want to update
     *   }
     * })
     */
    upsert<T extends CircleUpsertArgs>(args: SelectSubset<T, CircleUpsertArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Circles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleCountArgs} args - Arguments to filter Circles to count.
     * @example
     * // Count the number of Circles
     * const count = await prisma.circle.count({
     *   where: {
     *     // ... the filter for the Circles we want to count
     *   }
     * })
    **/
    count<T extends CircleCountArgs>(
      args?: Subset<T, CircleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CircleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Circle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CircleAggregateArgs>(args: Subset<T, CircleAggregateArgs>): Prisma.PrismaPromise<GetCircleAggregateType<T>>

    /**
     * Group by Circle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleGroupByArgs} args - Group by arguments.
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
      T extends CircleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CircleGroupByArgs['orderBy'] }
        : { orderBy?: CircleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CircleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCircleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Circle model
   */
  readonly fields: CircleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Circle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CircleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    figma<T extends FigmaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FigmaDefaultArgs<ExtArgs>>): Prisma__FigmaClient<$Result.GetResult<Prisma.$FigmaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Circle model
   */
  interface CircleFieldRefs {
    readonly id: FieldRef<"Circle", 'String'>
    readonly x: FieldRef<"Circle", 'Int'>
    readonly y: FieldRef<"Circle", 'Int'>
    readonly radius: FieldRef<"Circle", 'Int'>
    readonly fill: FieldRef<"Circle", 'String'>
    readonly figmaId: FieldRef<"Circle", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Circle findUnique
   */
  export type CircleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * Filter, which Circle to fetch.
     */
    where: CircleWhereUniqueInput
  }

  /**
   * Circle findUniqueOrThrow
   */
  export type CircleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * Filter, which Circle to fetch.
     */
    where: CircleWhereUniqueInput
  }

  /**
   * Circle findFirst
   */
  export type CircleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * Filter, which Circle to fetch.
     */
    where?: CircleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Circles to fetch.
     */
    orderBy?: CircleOrderByWithRelationInput | CircleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Circles.
     */
    cursor?: CircleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Circles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Circles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Circles.
     */
    distinct?: CircleScalarFieldEnum | CircleScalarFieldEnum[]
  }

  /**
   * Circle findFirstOrThrow
   */
  export type CircleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * Filter, which Circle to fetch.
     */
    where?: CircleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Circles to fetch.
     */
    orderBy?: CircleOrderByWithRelationInput | CircleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Circles.
     */
    cursor?: CircleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Circles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Circles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Circles.
     */
    distinct?: CircleScalarFieldEnum | CircleScalarFieldEnum[]
  }

  /**
   * Circle findMany
   */
  export type CircleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * Filter, which Circles to fetch.
     */
    where?: CircleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Circles to fetch.
     */
    orderBy?: CircleOrderByWithRelationInput | CircleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Circles.
     */
    cursor?: CircleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Circles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Circles.
     */
    skip?: number
    distinct?: CircleScalarFieldEnum | CircleScalarFieldEnum[]
  }

  /**
   * Circle create
   */
  export type CircleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * The data needed to create a Circle.
     */
    data: XOR<CircleCreateInput, CircleUncheckedCreateInput>
  }

  /**
   * Circle createMany
   */
  export type CircleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Circles.
     */
    data: CircleCreateManyInput | CircleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Circle createManyAndReturn
   */
  export type CircleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * The data used to create many Circles.
     */
    data: CircleCreateManyInput | CircleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Circle update
   */
  export type CircleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * The data needed to update a Circle.
     */
    data: XOR<CircleUpdateInput, CircleUncheckedUpdateInput>
    /**
     * Choose, which Circle to update.
     */
    where: CircleWhereUniqueInput
  }

  /**
   * Circle updateMany
   */
  export type CircleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Circles.
     */
    data: XOR<CircleUpdateManyMutationInput, CircleUncheckedUpdateManyInput>
    /**
     * Filter which Circles to update
     */
    where?: CircleWhereInput
    /**
     * Limit how many Circles to update.
     */
    limit?: number
  }

  /**
   * Circle updateManyAndReturn
   */
  export type CircleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * The data used to update Circles.
     */
    data: XOR<CircleUpdateManyMutationInput, CircleUncheckedUpdateManyInput>
    /**
     * Filter which Circles to update
     */
    where?: CircleWhereInput
    /**
     * Limit how many Circles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Circle upsert
   */
  export type CircleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * The filter to search for the Circle to update in case it exists.
     */
    where: CircleWhereUniqueInput
    /**
     * In case the Circle found by the `where` argument doesn't exist, create a new Circle with this data.
     */
    create: XOR<CircleCreateInput, CircleUncheckedCreateInput>
    /**
     * In case the Circle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CircleUpdateInput, CircleUncheckedUpdateInput>
  }

  /**
   * Circle delete
   */
  export type CircleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * Filter which Circle to delete.
     */
    where: CircleWhereUniqueInput
  }

  /**
   * Circle deleteMany
   */
  export type CircleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Circles to delete
     */
    where?: CircleWhereInput
    /**
     * Limit how many Circles to delete.
     */
    limit?: number
  }

  /**
   * Circle without action
   */
  export type CircleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
  }


  /**
   * Model Text
   */

  export type AggregateText = {
    _count: TextCountAggregateOutputType | null
    _avg: TextAvgAggregateOutputType | null
    _sum: TextSumAggregateOutputType | null
    _min: TextMinAggregateOutputType | null
    _max: TextMaxAggregateOutputType | null
  }

  export type TextAvgAggregateOutputType = {
    x: number | null
    y: number | null
    fontSize: number | null
  }

  export type TextSumAggregateOutputType = {
    x: number | null
    y: number | null
    fontSize: number | null
  }

  export type TextMinAggregateOutputType = {
    id: string | null
    x: number | null
    y: number | null
    fill: string | null
    text: string | null
    fontSize: number | null
    fontFamily: string | null
    figmaId: string | null
  }

  export type TextMaxAggregateOutputType = {
    id: string | null
    x: number | null
    y: number | null
    fill: string | null
    text: string | null
    fontSize: number | null
    fontFamily: string | null
    figmaId: string | null
  }

  export type TextCountAggregateOutputType = {
    id: number
    x: number
    y: number
    fill: number
    text: number
    fontSize: number
    fontFamily: number
    figmaId: number
    _all: number
  }


  export type TextAvgAggregateInputType = {
    x?: true
    y?: true
    fontSize?: true
  }

  export type TextSumAggregateInputType = {
    x?: true
    y?: true
    fontSize?: true
  }

  export type TextMinAggregateInputType = {
    id?: true
    x?: true
    y?: true
    fill?: true
    text?: true
    fontSize?: true
    fontFamily?: true
    figmaId?: true
  }

  export type TextMaxAggregateInputType = {
    id?: true
    x?: true
    y?: true
    fill?: true
    text?: true
    fontSize?: true
    fontFamily?: true
    figmaId?: true
  }

  export type TextCountAggregateInputType = {
    id?: true
    x?: true
    y?: true
    fill?: true
    text?: true
    fontSize?: true
    fontFamily?: true
    figmaId?: true
    _all?: true
  }

  export type TextAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Text to aggregate.
     */
    where?: TextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Texts to fetch.
     */
    orderBy?: TextOrderByWithRelationInput | TextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Texts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Texts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Texts
    **/
    _count?: true | TextCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TextAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TextSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TextMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TextMaxAggregateInputType
  }

  export type GetTextAggregateType<T extends TextAggregateArgs> = {
        [P in keyof T & keyof AggregateText]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateText[P]>
      : GetScalarType<T[P], AggregateText[P]>
  }




  export type TextGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TextWhereInput
    orderBy?: TextOrderByWithAggregationInput | TextOrderByWithAggregationInput[]
    by: TextScalarFieldEnum[] | TextScalarFieldEnum
    having?: TextScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TextCountAggregateInputType | true
    _avg?: TextAvgAggregateInputType
    _sum?: TextSumAggregateInputType
    _min?: TextMinAggregateInputType
    _max?: TextMaxAggregateInputType
  }

  export type TextGroupByOutputType = {
    id: string
    x: number
    y: number
    fill: string
    text: string
    fontSize: number
    fontFamily: string | null
    figmaId: string
    _count: TextCountAggregateOutputType | null
    _avg: TextAvgAggregateOutputType | null
    _sum: TextSumAggregateOutputType | null
    _min: TextMinAggregateOutputType | null
    _max: TextMaxAggregateOutputType | null
  }

  type GetTextGroupByPayload<T extends TextGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TextGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TextGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TextGroupByOutputType[P]>
            : GetScalarType<T[P], TextGroupByOutputType[P]>
        }
      >
    >


  export type TextSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    x?: boolean
    y?: boolean
    fill?: boolean
    text?: boolean
    fontSize?: boolean
    fontFamily?: boolean
    figmaId?: boolean
    figma?: boolean | FigmaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["text"]>

  export type TextSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    x?: boolean
    y?: boolean
    fill?: boolean
    text?: boolean
    fontSize?: boolean
    fontFamily?: boolean
    figmaId?: boolean
    figma?: boolean | FigmaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["text"]>

  export type TextSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    x?: boolean
    y?: boolean
    fill?: boolean
    text?: boolean
    fontSize?: boolean
    fontFamily?: boolean
    figmaId?: boolean
    figma?: boolean | FigmaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["text"]>

  export type TextSelectScalar = {
    id?: boolean
    x?: boolean
    y?: boolean
    fill?: boolean
    text?: boolean
    fontSize?: boolean
    fontFamily?: boolean
    figmaId?: boolean
  }

  export type TextOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "x" | "y" | "fill" | "text" | "fontSize" | "fontFamily" | "figmaId", ExtArgs["result"]["text"]>
  export type TextInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    figma?: boolean | FigmaDefaultArgs<ExtArgs>
  }
  export type TextIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    figma?: boolean | FigmaDefaultArgs<ExtArgs>
  }
  export type TextIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    figma?: boolean | FigmaDefaultArgs<ExtArgs>
  }

  export type $TextPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Text"
    objects: {
      figma: Prisma.$FigmaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      x: number
      y: number
      fill: string
      text: string
      fontSize: number
      fontFamily: string | null
      figmaId: string
    }, ExtArgs["result"]["text"]>
    composites: {}
  }

  type TextGetPayload<S extends boolean | null | undefined | TextDefaultArgs> = $Result.GetResult<Prisma.$TextPayload, S>

  type TextCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TextFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TextCountAggregateInputType | true
    }

  export interface TextDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Text'], meta: { name: 'Text' } }
    /**
     * Find zero or one Text that matches the filter.
     * @param {TextFindUniqueArgs} args - Arguments to find a Text
     * @example
     * // Get one Text
     * const text = await prisma.text.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TextFindUniqueArgs>(args: SelectSubset<T, TextFindUniqueArgs<ExtArgs>>): Prisma__TextClient<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Text that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TextFindUniqueOrThrowArgs} args - Arguments to find a Text
     * @example
     * // Get one Text
     * const text = await prisma.text.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TextFindUniqueOrThrowArgs>(args: SelectSubset<T, TextFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TextClient<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Text that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextFindFirstArgs} args - Arguments to find a Text
     * @example
     * // Get one Text
     * const text = await prisma.text.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TextFindFirstArgs>(args?: SelectSubset<T, TextFindFirstArgs<ExtArgs>>): Prisma__TextClient<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Text that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextFindFirstOrThrowArgs} args - Arguments to find a Text
     * @example
     * // Get one Text
     * const text = await prisma.text.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TextFindFirstOrThrowArgs>(args?: SelectSubset<T, TextFindFirstOrThrowArgs<ExtArgs>>): Prisma__TextClient<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Texts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Texts
     * const texts = await prisma.text.findMany()
     * 
     * // Get first 10 Texts
     * const texts = await prisma.text.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const textWithIdOnly = await prisma.text.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TextFindManyArgs>(args?: SelectSubset<T, TextFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Text.
     * @param {TextCreateArgs} args - Arguments to create a Text.
     * @example
     * // Create one Text
     * const Text = await prisma.text.create({
     *   data: {
     *     // ... data to create a Text
     *   }
     * })
     * 
     */
    create<T extends TextCreateArgs>(args: SelectSubset<T, TextCreateArgs<ExtArgs>>): Prisma__TextClient<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Texts.
     * @param {TextCreateManyArgs} args - Arguments to create many Texts.
     * @example
     * // Create many Texts
     * const text = await prisma.text.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TextCreateManyArgs>(args?: SelectSubset<T, TextCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Texts and returns the data saved in the database.
     * @param {TextCreateManyAndReturnArgs} args - Arguments to create many Texts.
     * @example
     * // Create many Texts
     * const text = await prisma.text.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Texts and only return the `id`
     * const textWithIdOnly = await prisma.text.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TextCreateManyAndReturnArgs>(args?: SelectSubset<T, TextCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Text.
     * @param {TextDeleteArgs} args - Arguments to delete one Text.
     * @example
     * // Delete one Text
     * const Text = await prisma.text.delete({
     *   where: {
     *     // ... filter to delete one Text
     *   }
     * })
     * 
     */
    delete<T extends TextDeleteArgs>(args: SelectSubset<T, TextDeleteArgs<ExtArgs>>): Prisma__TextClient<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Text.
     * @param {TextUpdateArgs} args - Arguments to update one Text.
     * @example
     * // Update one Text
     * const text = await prisma.text.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TextUpdateArgs>(args: SelectSubset<T, TextUpdateArgs<ExtArgs>>): Prisma__TextClient<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Texts.
     * @param {TextDeleteManyArgs} args - Arguments to filter Texts to delete.
     * @example
     * // Delete a few Texts
     * const { count } = await prisma.text.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TextDeleteManyArgs>(args?: SelectSubset<T, TextDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Texts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Texts
     * const text = await prisma.text.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TextUpdateManyArgs>(args: SelectSubset<T, TextUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Texts and returns the data updated in the database.
     * @param {TextUpdateManyAndReturnArgs} args - Arguments to update many Texts.
     * @example
     * // Update many Texts
     * const text = await prisma.text.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Texts and only return the `id`
     * const textWithIdOnly = await prisma.text.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TextUpdateManyAndReturnArgs>(args: SelectSubset<T, TextUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Text.
     * @param {TextUpsertArgs} args - Arguments to update or create a Text.
     * @example
     * // Update or create a Text
     * const text = await prisma.text.upsert({
     *   create: {
     *     // ... data to create a Text
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Text we want to update
     *   }
     * })
     */
    upsert<T extends TextUpsertArgs>(args: SelectSubset<T, TextUpsertArgs<ExtArgs>>): Prisma__TextClient<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Texts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextCountArgs} args - Arguments to filter Texts to count.
     * @example
     * // Count the number of Texts
     * const count = await prisma.text.count({
     *   where: {
     *     // ... the filter for the Texts we want to count
     *   }
     * })
    **/
    count<T extends TextCountArgs>(
      args?: Subset<T, TextCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TextCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Text.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TextAggregateArgs>(args: Subset<T, TextAggregateArgs>): Prisma.PrismaPromise<GetTextAggregateType<T>>

    /**
     * Group by Text.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextGroupByArgs} args - Group by arguments.
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
      T extends TextGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TextGroupByArgs['orderBy'] }
        : { orderBy?: TextGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TextGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTextGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Text model
   */
  readonly fields: TextFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Text.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TextClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    figma<T extends FigmaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FigmaDefaultArgs<ExtArgs>>): Prisma__FigmaClient<$Result.GetResult<Prisma.$FigmaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Text model
   */
  interface TextFieldRefs {
    readonly id: FieldRef<"Text", 'String'>
    readonly x: FieldRef<"Text", 'Int'>
    readonly y: FieldRef<"Text", 'Int'>
    readonly fill: FieldRef<"Text", 'String'>
    readonly text: FieldRef<"Text", 'String'>
    readonly fontSize: FieldRef<"Text", 'Int'>
    readonly fontFamily: FieldRef<"Text", 'String'>
    readonly figmaId: FieldRef<"Text", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Text findUnique
   */
  export type TextFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Text
     */
    omit?: TextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInclude<ExtArgs> | null
    /**
     * Filter, which Text to fetch.
     */
    where: TextWhereUniqueInput
  }

  /**
   * Text findUniqueOrThrow
   */
  export type TextFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Text
     */
    omit?: TextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInclude<ExtArgs> | null
    /**
     * Filter, which Text to fetch.
     */
    where: TextWhereUniqueInput
  }

  /**
   * Text findFirst
   */
  export type TextFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Text
     */
    omit?: TextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInclude<ExtArgs> | null
    /**
     * Filter, which Text to fetch.
     */
    where?: TextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Texts to fetch.
     */
    orderBy?: TextOrderByWithRelationInput | TextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Texts.
     */
    cursor?: TextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Texts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Texts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Texts.
     */
    distinct?: TextScalarFieldEnum | TextScalarFieldEnum[]
  }

  /**
   * Text findFirstOrThrow
   */
  export type TextFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Text
     */
    omit?: TextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInclude<ExtArgs> | null
    /**
     * Filter, which Text to fetch.
     */
    where?: TextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Texts to fetch.
     */
    orderBy?: TextOrderByWithRelationInput | TextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Texts.
     */
    cursor?: TextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Texts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Texts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Texts.
     */
    distinct?: TextScalarFieldEnum | TextScalarFieldEnum[]
  }

  /**
   * Text findMany
   */
  export type TextFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Text
     */
    omit?: TextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInclude<ExtArgs> | null
    /**
     * Filter, which Texts to fetch.
     */
    where?: TextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Texts to fetch.
     */
    orderBy?: TextOrderByWithRelationInput | TextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Texts.
     */
    cursor?: TextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Texts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Texts.
     */
    skip?: number
    distinct?: TextScalarFieldEnum | TextScalarFieldEnum[]
  }

  /**
   * Text create
   */
  export type TextCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Text
     */
    omit?: TextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInclude<ExtArgs> | null
    /**
     * The data needed to create a Text.
     */
    data: XOR<TextCreateInput, TextUncheckedCreateInput>
  }

  /**
   * Text createMany
   */
  export type TextCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Texts.
     */
    data: TextCreateManyInput | TextCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Text createManyAndReturn
   */
  export type TextCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Text
     */
    omit?: TextOmit<ExtArgs> | null
    /**
     * The data used to create many Texts.
     */
    data: TextCreateManyInput | TextCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Text update
   */
  export type TextUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Text
     */
    omit?: TextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInclude<ExtArgs> | null
    /**
     * The data needed to update a Text.
     */
    data: XOR<TextUpdateInput, TextUncheckedUpdateInput>
    /**
     * Choose, which Text to update.
     */
    where: TextWhereUniqueInput
  }

  /**
   * Text updateMany
   */
  export type TextUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Texts.
     */
    data: XOR<TextUpdateManyMutationInput, TextUncheckedUpdateManyInput>
    /**
     * Filter which Texts to update
     */
    where?: TextWhereInput
    /**
     * Limit how many Texts to update.
     */
    limit?: number
  }

  /**
   * Text updateManyAndReturn
   */
  export type TextUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Text
     */
    omit?: TextOmit<ExtArgs> | null
    /**
     * The data used to update Texts.
     */
    data: XOR<TextUpdateManyMutationInput, TextUncheckedUpdateManyInput>
    /**
     * Filter which Texts to update
     */
    where?: TextWhereInput
    /**
     * Limit how many Texts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Text upsert
   */
  export type TextUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Text
     */
    omit?: TextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInclude<ExtArgs> | null
    /**
     * The filter to search for the Text to update in case it exists.
     */
    where: TextWhereUniqueInput
    /**
     * In case the Text found by the `where` argument doesn't exist, create a new Text with this data.
     */
    create: XOR<TextCreateInput, TextUncheckedCreateInput>
    /**
     * In case the Text was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TextUpdateInput, TextUncheckedUpdateInput>
  }

  /**
   * Text delete
   */
  export type TextDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Text
     */
    omit?: TextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInclude<ExtArgs> | null
    /**
     * Filter which Text to delete.
     */
    where: TextWhereUniqueInput
  }

  /**
   * Text deleteMany
   */
  export type TextDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Texts to delete
     */
    where?: TextWhereInput
    /**
     * Limit how many Texts to delete.
     */
    limit?: number
  }

  /**
   * Text without action
   */
  export type TextDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Text
     */
    omit?: TextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FigmaScalarFieldEnum: {
    id: 'id',
    hostEmail: 'hostEmail',
    whitelist: 'whitelist',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    nameFigma: 'nameFigma',
    image: 'image'
  };

  export type FigmaScalarFieldEnum = (typeof FigmaScalarFieldEnum)[keyof typeof FigmaScalarFieldEnum]


  export const RectangleScalarFieldEnum: {
    id: 'id',
    x: 'x',
    y: 'y',
    width: 'width',
    height: 'height',
    fill: 'fill',
    stroke: 'stroke',
    strokeWidth: 'strokeWidth',
    cornerRadius: 'cornerRadius',
    opacity: 'opacity',
    figmaId: 'figmaId'
  };

  export type RectangleScalarFieldEnum = (typeof RectangleScalarFieldEnum)[keyof typeof RectangleScalarFieldEnum]


  export const CircleScalarFieldEnum: {
    id: 'id',
    x: 'x',
    y: 'y',
    radius: 'radius',
    fill: 'fill',
    figmaId: 'figmaId'
  };

  export type CircleScalarFieldEnum = (typeof CircleScalarFieldEnum)[keyof typeof CircleScalarFieldEnum]


  export const TextScalarFieldEnum: {
    id: 'id',
    x: 'x',
    y: 'y',
    fill: 'fill',
    text: 'text',
    fontSize: 'fontSize',
    fontFamily: 'fontFamily',
    figmaId: 'figmaId'
  };

  export type TextScalarFieldEnum = (typeof TextScalarFieldEnum)[keyof typeof TextScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type FigmaWhereInput = {
    AND?: FigmaWhereInput | FigmaWhereInput[]
    OR?: FigmaWhereInput[]
    NOT?: FigmaWhereInput | FigmaWhereInput[]
    id?: StringFilter<"Figma"> | string
    hostEmail?: StringFilter<"Figma"> | string
    whitelist?: StringNullableListFilter<"Figma">
    createdAt?: DateTimeFilter<"Figma"> | Date | string
    updatedAt?: DateTimeFilter<"Figma"> | Date | string
    nameFigma?: StringNullableFilter<"Figma"> | string | null
    image?: StringNullableFilter<"Figma"> | string | null
    rectangles?: RectangleListRelationFilter
    circles?: CircleListRelationFilter
    texts?: TextListRelationFilter
  }

  export type FigmaOrderByWithRelationInput = {
    id?: SortOrder
    hostEmail?: SortOrder
    whitelist?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nameFigma?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    rectangles?: RectangleOrderByRelationAggregateInput
    circles?: CircleOrderByRelationAggregateInput
    texts?: TextOrderByRelationAggregateInput
  }

  export type FigmaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FigmaWhereInput | FigmaWhereInput[]
    OR?: FigmaWhereInput[]
    NOT?: FigmaWhereInput | FigmaWhereInput[]
    hostEmail?: StringFilter<"Figma"> | string
    whitelist?: StringNullableListFilter<"Figma">
    createdAt?: DateTimeFilter<"Figma"> | Date | string
    updatedAt?: DateTimeFilter<"Figma"> | Date | string
    nameFigma?: StringNullableFilter<"Figma"> | string | null
    image?: StringNullableFilter<"Figma"> | string | null
    rectangles?: RectangleListRelationFilter
    circles?: CircleListRelationFilter
    texts?: TextListRelationFilter
  }, "id">

  export type FigmaOrderByWithAggregationInput = {
    id?: SortOrder
    hostEmail?: SortOrder
    whitelist?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nameFigma?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    _count?: FigmaCountOrderByAggregateInput
    _max?: FigmaMaxOrderByAggregateInput
    _min?: FigmaMinOrderByAggregateInput
  }

  export type FigmaScalarWhereWithAggregatesInput = {
    AND?: FigmaScalarWhereWithAggregatesInput | FigmaScalarWhereWithAggregatesInput[]
    OR?: FigmaScalarWhereWithAggregatesInput[]
    NOT?: FigmaScalarWhereWithAggregatesInput | FigmaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Figma"> | string
    hostEmail?: StringWithAggregatesFilter<"Figma"> | string
    whitelist?: StringNullableListFilter<"Figma">
    createdAt?: DateTimeWithAggregatesFilter<"Figma"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Figma"> | Date | string
    nameFigma?: StringNullableWithAggregatesFilter<"Figma"> | string | null
    image?: StringNullableWithAggregatesFilter<"Figma"> | string | null
  }

  export type RectangleWhereInput = {
    AND?: RectangleWhereInput | RectangleWhereInput[]
    OR?: RectangleWhereInput[]
    NOT?: RectangleWhereInput | RectangleWhereInput[]
    id?: StringFilter<"Rectangle"> | string
    x?: IntFilter<"Rectangle"> | number
    y?: IntFilter<"Rectangle"> | number
    width?: IntFilter<"Rectangle"> | number
    height?: IntFilter<"Rectangle"> | number
    fill?: StringFilter<"Rectangle"> | string
    stroke?: StringNullableFilter<"Rectangle"> | string | null
    strokeWidth?: IntNullableFilter<"Rectangle"> | number | null
    cornerRadius?: IntNullableFilter<"Rectangle"> | number | null
    opacity?: IntNullableFilter<"Rectangle"> | number | null
    figmaId?: StringFilter<"Rectangle"> | string
    figma?: XOR<FigmaScalarRelationFilter, FigmaWhereInput>
  }

  export type RectangleOrderByWithRelationInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
    fill?: SortOrder
    stroke?: SortOrderInput | SortOrder
    strokeWidth?: SortOrderInput | SortOrder
    cornerRadius?: SortOrderInput | SortOrder
    opacity?: SortOrderInput | SortOrder
    figmaId?: SortOrder
    figma?: FigmaOrderByWithRelationInput
  }

  export type RectangleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RectangleWhereInput | RectangleWhereInput[]
    OR?: RectangleWhereInput[]
    NOT?: RectangleWhereInput | RectangleWhereInput[]
    x?: IntFilter<"Rectangle"> | number
    y?: IntFilter<"Rectangle"> | number
    width?: IntFilter<"Rectangle"> | number
    height?: IntFilter<"Rectangle"> | number
    fill?: StringFilter<"Rectangle"> | string
    stroke?: StringNullableFilter<"Rectangle"> | string | null
    strokeWidth?: IntNullableFilter<"Rectangle"> | number | null
    cornerRadius?: IntNullableFilter<"Rectangle"> | number | null
    opacity?: IntNullableFilter<"Rectangle"> | number | null
    figmaId?: StringFilter<"Rectangle"> | string
    figma?: XOR<FigmaScalarRelationFilter, FigmaWhereInput>
  }, "id">

  export type RectangleOrderByWithAggregationInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
    fill?: SortOrder
    stroke?: SortOrderInput | SortOrder
    strokeWidth?: SortOrderInput | SortOrder
    cornerRadius?: SortOrderInput | SortOrder
    opacity?: SortOrderInput | SortOrder
    figmaId?: SortOrder
    _count?: RectangleCountOrderByAggregateInput
    _avg?: RectangleAvgOrderByAggregateInput
    _max?: RectangleMaxOrderByAggregateInput
    _min?: RectangleMinOrderByAggregateInput
    _sum?: RectangleSumOrderByAggregateInput
  }

  export type RectangleScalarWhereWithAggregatesInput = {
    AND?: RectangleScalarWhereWithAggregatesInput | RectangleScalarWhereWithAggregatesInput[]
    OR?: RectangleScalarWhereWithAggregatesInput[]
    NOT?: RectangleScalarWhereWithAggregatesInput | RectangleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Rectangle"> | string
    x?: IntWithAggregatesFilter<"Rectangle"> | number
    y?: IntWithAggregatesFilter<"Rectangle"> | number
    width?: IntWithAggregatesFilter<"Rectangle"> | number
    height?: IntWithAggregatesFilter<"Rectangle"> | number
    fill?: StringWithAggregatesFilter<"Rectangle"> | string
    stroke?: StringNullableWithAggregatesFilter<"Rectangle"> | string | null
    strokeWidth?: IntNullableWithAggregatesFilter<"Rectangle"> | number | null
    cornerRadius?: IntNullableWithAggregatesFilter<"Rectangle"> | number | null
    opacity?: IntNullableWithAggregatesFilter<"Rectangle"> | number | null
    figmaId?: StringWithAggregatesFilter<"Rectangle"> | string
  }

  export type CircleWhereInput = {
    AND?: CircleWhereInput | CircleWhereInput[]
    OR?: CircleWhereInput[]
    NOT?: CircleWhereInput | CircleWhereInput[]
    id?: StringFilter<"Circle"> | string
    x?: IntFilter<"Circle"> | number
    y?: IntFilter<"Circle"> | number
    radius?: IntFilter<"Circle"> | number
    fill?: StringFilter<"Circle"> | string
    figmaId?: StringFilter<"Circle"> | string
    figma?: XOR<FigmaScalarRelationFilter, FigmaWhereInput>
  }

  export type CircleOrderByWithRelationInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    radius?: SortOrder
    fill?: SortOrder
    figmaId?: SortOrder
    figma?: FigmaOrderByWithRelationInput
  }

  export type CircleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CircleWhereInput | CircleWhereInput[]
    OR?: CircleWhereInput[]
    NOT?: CircleWhereInput | CircleWhereInput[]
    x?: IntFilter<"Circle"> | number
    y?: IntFilter<"Circle"> | number
    radius?: IntFilter<"Circle"> | number
    fill?: StringFilter<"Circle"> | string
    figmaId?: StringFilter<"Circle"> | string
    figma?: XOR<FigmaScalarRelationFilter, FigmaWhereInput>
  }, "id">

  export type CircleOrderByWithAggregationInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    radius?: SortOrder
    fill?: SortOrder
    figmaId?: SortOrder
    _count?: CircleCountOrderByAggregateInput
    _avg?: CircleAvgOrderByAggregateInput
    _max?: CircleMaxOrderByAggregateInput
    _min?: CircleMinOrderByAggregateInput
    _sum?: CircleSumOrderByAggregateInput
  }

  export type CircleScalarWhereWithAggregatesInput = {
    AND?: CircleScalarWhereWithAggregatesInput | CircleScalarWhereWithAggregatesInput[]
    OR?: CircleScalarWhereWithAggregatesInput[]
    NOT?: CircleScalarWhereWithAggregatesInput | CircleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Circle"> | string
    x?: IntWithAggregatesFilter<"Circle"> | number
    y?: IntWithAggregatesFilter<"Circle"> | number
    radius?: IntWithAggregatesFilter<"Circle"> | number
    fill?: StringWithAggregatesFilter<"Circle"> | string
    figmaId?: StringWithAggregatesFilter<"Circle"> | string
  }

  export type TextWhereInput = {
    AND?: TextWhereInput | TextWhereInput[]
    OR?: TextWhereInput[]
    NOT?: TextWhereInput | TextWhereInput[]
    id?: StringFilter<"Text"> | string
    x?: IntFilter<"Text"> | number
    y?: IntFilter<"Text"> | number
    fill?: StringFilter<"Text"> | string
    text?: StringFilter<"Text"> | string
    fontSize?: IntFilter<"Text"> | number
    fontFamily?: StringNullableFilter<"Text"> | string | null
    figmaId?: StringFilter<"Text"> | string
    figma?: XOR<FigmaScalarRelationFilter, FigmaWhereInput>
  }

  export type TextOrderByWithRelationInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    fill?: SortOrder
    text?: SortOrder
    fontSize?: SortOrder
    fontFamily?: SortOrderInput | SortOrder
    figmaId?: SortOrder
    figma?: FigmaOrderByWithRelationInput
  }

  export type TextWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TextWhereInput | TextWhereInput[]
    OR?: TextWhereInput[]
    NOT?: TextWhereInput | TextWhereInput[]
    x?: IntFilter<"Text"> | number
    y?: IntFilter<"Text"> | number
    fill?: StringFilter<"Text"> | string
    text?: StringFilter<"Text"> | string
    fontSize?: IntFilter<"Text"> | number
    fontFamily?: StringNullableFilter<"Text"> | string | null
    figmaId?: StringFilter<"Text"> | string
    figma?: XOR<FigmaScalarRelationFilter, FigmaWhereInput>
  }, "id">

  export type TextOrderByWithAggregationInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    fill?: SortOrder
    text?: SortOrder
    fontSize?: SortOrder
    fontFamily?: SortOrderInput | SortOrder
    figmaId?: SortOrder
    _count?: TextCountOrderByAggregateInput
    _avg?: TextAvgOrderByAggregateInput
    _max?: TextMaxOrderByAggregateInput
    _min?: TextMinOrderByAggregateInput
    _sum?: TextSumOrderByAggregateInput
  }

  export type TextScalarWhereWithAggregatesInput = {
    AND?: TextScalarWhereWithAggregatesInput | TextScalarWhereWithAggregatesInput[]
    OR?: TextScalarWhereWithAggregatesInput[]
    NOT?: TextScalarWhereWithAggregatesInput | TextScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Text"> | string
    x?: IntWithAggregatesFilter<"Text"> | number
    y?: IntWithAggregatesFilter<"Text"> | number
    fill?: StringWithAggregatesFilter<"Text"> | string
    text?: StringWithAggregatesFilter<"Text"> | string
    fontSize?: IntWithAggregatesFilter<"Text"> | number
    fontFamily?: StringNullableWithAggregatesFilter<"Text"> | string | null
    figmaId?: StringWithAggregatesFilter<"Text"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FigmaCreateInput = {
    id?: string
    hostEmail: string
    whitelist?: FigmaCreatewhitelistInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    nameFigma?: string | null
    image?: string | null
    rectangles?: RectangleCreateNestedManyWithoutFigmaInput
    circles?: CircleCreateNestedManyWithoutFigmaInput
    texts?: TextCreateNestedManyWithoutFigmaInput
  }

  export type FigmaUncheckedCreateInput = {
    id?: string
    hostEmail: string
    whitelist?: FigmaCreatewhitelistInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    nameFigma?: string | null
    image?: string | null
    rectangles?: RectangleUncheckedCreateNestedManyWithoutFigmaInput
    circles?: CircleUncheckedCreateNestedManyWithoutFigmaInput
    texts?: TextUncheckedCreateNestedManyWithoutFigmaInput
  }

  export type FigmaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hostEmail?: StringFieldUpdateOperationsInput | string
    whitelist?: FigmaUpdatewhitelistInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nameFigma?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    rectangles?: RectangleUpdateManyWithoutFigmaNestedInput
    circles?: CircleUpdateManyWithoutFigmaNestedInput
    texts?: TextUpdateManyWithoutFigmaNestedInput
  }

  export type FigmaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hostEmail?: StringFieldUpdateOperationsInput | string
    whitelist?: FigmaUpdatewhitelistInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nameFigma?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    rectangles?: RectangleUncheckedUpdateManyWithoutFigmaNestedInput
    circles?: CircleUncheckedUpdateManyWithoutFigmaNestedInput
    texts?: TextUncheckedUpdateManyWithoutFigmaNestedInput
  }

  export type FigmaCreateManyInput = {
    id?: string
    hostEmail: string
    whitelist?: FigmaCreatewhitelistInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    nameFigma?: string | null
    image?: string | null
  }

  export type FigmaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    hostEmail?: StringFieldUpdateOperationsInput | string
    whitelist?: FigmaUpdatewhitelistInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nameFigma?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FigmaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    hostEmail?: StringFieldUpdateOperationsInput | string
    whitelist?: FigmaUpdatewhitelistInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nameFigma?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RectangleCreateInput = {
    id?: string
    x: number
    y: number
    width: number
    height: number
    fill: string
    stroke?: string | null
    strokeWidth?: number | null
    cornerRadius?: number | null
    opacity?: number | null
    figma: FigmaCreateNestedOneWithoutRectanglesInput
  }

  export type RectangleUncheckedCreateInput = {
    id?: string
    x: number
    y: number
    width: number
    height: number
    fill: string
    stroke?: string | null
    strokeWidth?: number | null
    cornerRadius?: number | null
    opacity?: number | null
    figmaId: string
  }

  export type RectangleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    fill?: StringFieldUpdateOperationsInput | string
    stroke?: NullableStringFieldUpdateOperationsInput | string | null
    strokeWidth?: NullableIntFieldUpdateOperationsInput | number | null
    cornerRadius?: NullableIntFieldUpdateOperationsInput | number | null
    opacity?: NullableIntFieldUpdateOperationsInput | number | null
    figma?: FigmaUpdateOneRequiredWithoutRectanglesNestedInput
  }

  export type RectangleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    fill?: StringFieldUpdateOperationsInput | string
    stroke?: NullableStringFieldUpdateOperationsInput | string | null
    strokeWidth?: NullableIntFieldUpdateOperationsInput | number | null
    cornerRadius?: NullableIntFieldUpdateOperationsInput | number | null
    opacity?: NullableIntFieldUpdateOperationsInput | number | null
    figmaId?: StringFieldUpdateOperationsInput | string
  }

  export type RectangleCreateManyInput = {
    id?: string
    x: number
    y: number
    width: number
    height: number
    fill: string
    stroke?: string | null
    strokeWidth?: number | null
    cornerRadius?: number | null
    opacity?: number | null
    figmaId: string
  }

  export type RectangleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    fill?: StringFieldUpdateOperationsInput | string
    stroke?: NullableStringFieldUpdateOperationsInput | string | null
    strokeWidth?: NullableIntFieldUpdateOperationsInput | number | null
    cornerRadius?: NullableIntFieldUpdateOperationsInput | number | null
    opacity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RectangleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    fill?: StringFieldUpdateOperationsInput | string
    stroke?: NullableStringFieldUpdateOperationsInput | string | null
    strokeWidth?: NullableIntFieldUpdateOperationsInput | number | null
    cornerRadius?: NullableIntFieldUpdateOperationsInput | number | null
    opacity?: NullableIntFieldUpdateOperationsInput | number | null
    figmaId?: StringFieldUpdateOperationsInput | string
  }

  export type CircleCreateInput = {
    id?: string
    x: number
    y: number
    radius: number
    fill: string
    figma: FigmaCreateNestedOneWithoutCirclesInput
  }

  export type CircleUncheckedCreateInput = {
    id?: string
    x: number
    y: number
    radius: number
    fill: string
    figmaId: string
  }

  export type CircleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    radius?: IntFieldUpdateOperationsInput | number
    fill?: StringFieldUpdateOperationsInput | string
    figma?: FigmaUpdateOneRequiredWithoutCirclesNestedInput
  }

  export type CircleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    radius?: IntFieldUpdateOperationsInput | number
    fill?: StringFieldUpdateOperationsInput | string
    figmaId?: StringFieldUpdateOperationsInput | string
  }

  export type CircleCreateManyInput = {
    id?: string
    x: number
    y: number
    radius: number
    fill: string
    figmaId: string
  }

  export type CircleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    radius?: IntFieldUpdateOperationsInput | number
    fill?: StringFieldUpdateOperationsInput | string
  }

  export type CircleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    radius?: IntFieldUpdateOperationsInput | number
    fill?: StringFieldUpdateOperationsInput | string
    figmaId?: StringFieldUpdateOperationsInput | string
  }

  export type TextCreateInput = {
    id?: string
    x: number
    y: number
    fill: string
    text: string
    fontSize: number
    fontFamily?: string | null
    figma: FigmaCreateNestedOneWithoutTextsInput
  }

  export type TextUncheckedCreateInput = {
    id?: string
    x: number
    y: number
    fill: string
    text: string
    fontSize: number
    fontFamily?: string | null
    figmaId: string
  }

  export type TextUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    fill?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    fontSize?: IntFieldUpdateOperationsInput | number
    fontFamily?: NullableStringFieldUpdateOperationsInput | string | null
    figma?: FigmaUpdateOneRequiredWithoutTextsNestedInput
  }

  export type TextUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    fill?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    fontSize?: IntFieldUpdateOperationsInput | number
    fontFamily?: NullableStringFieldUpdateOperationsInput | string | null
    figmaId?: StringFieldUpdateOperationsInput | string
  }

  export type TextCreateManyInput = {
    id?: string
    x: number
    y: number
    fill: string
    text: string
    fontSize: number
    fontFamily?: string | null
    figmaId: string
  }

  export type TextUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    fill?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    fontSize?: IntFieldUpdateOperationsInput | number
    fontFamily?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TextUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    fill?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    fontSize?: IntFieldUpdateOperationsInput | number
    fontFamily?: NullableStringFieldUpdateOperationsInput | string | null
    figmaId?: StringFieldUpdateOperationsInput | string
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RectangleListRelationFilter = {
    every?: RectangleWhereInput
    some?: RectangleWhereInput
    none?: RectangleWhereInput
  }

  export type CircleListRelationFilter = {
    every?: CircleWhereInput
    some?: CircleWhereInput
    none?: CircleWhereInput
  }

  export type TextListRelationFilter = {
    every?: TextWhereInput
    some?: TextWhereInput
    none?: TextWhereInput
  }

  export type RectangleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CircleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TextOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FigmaCountOrderByAggregateInput = {
    id?: SortOrder
    hostEmail?: SortOrder
    whitelist?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nameFigma?: SortOrder
    image?: SortOrder
  }

  export type FigmaMaxOrderByAggregateInput = {
    id?: SortOrder
    hostEmail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nameFigma?: SortOrder
    image?: SortOrder
  }

  export type FigmaMinOrderByAggregateInput = {
    id?: SortOrder
    hostEmail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nameFigma?: SortOrder
    image?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type FigmaScalarRelationFilter = {
    is?: FigmaWhereInput
    isNot?: FigmaWhereInput
  }

  export type RectangleCountOrderByAggregateInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
    fill?: SortOrder
    stroke?: SortOrder
    strokeWidth?: SortOrder
    cornerRadius?: SortOrder
    opacity?: SortOrder
    figmaId?: SortOrder
  }

  export type RectangleAvgOrderByAggregateInput = {
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
    strokeWidth?: SortOrder
    cornerRadius?: SortOrder
    opacity?: SortOrder
  }

  export type RectangleMaxOrderByAggregateInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
    fill?: SortOrder
    stroke?: SortOrder
    strokeWidth?: SortOrder
    cornerRadius?: SortOrder
    opacity?: SortOrder
    figmaId?: SortOrder
  }

  export type RectangleMinOrderByAggregateInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
    fill?: SortOrder
    stroke?: SortOrder
    strokeWidth?: SortOrder
    cornerRadius?: SortOrder
    opacity?: SortOrder
    figmaId?: SortOrder
  }

  export type RectangleSumOrderByAggregateInput = {
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
    strokeWidth?: SortOrder
    cornerRadius?: SortOrder
    opacity?: SortOrder
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

  export type CircleCountOrderByAggregateInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    radius?: SortOrder
    fill?: SortOrder
    figmaId?: SortOrder
  }

  export type CircleAvgOrderByAggregateInput = {
    x?: SortOrder
    y?: SortOrder
    radius?: SortOrder
  }

  export type CircleMaxOrderByAggregateInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    radius?: SortOrder
    fill?: SortOrder
    figmaId?: SortOrder
  }

  export type CircleMinOrderByAggregateInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    radius?: SortOrder
    fill?: SortOrder
    figmaId?: SortOrder
  }

  export type CircleSumOrderByAggregateInput = {
    x?: SortOrder
    y?: SortOrder
    radius?: SortOrder
  }

  export type TextCountOrderByAggregateInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    fill?: SortOrder
    text?: SortOrder
    fontSize?: SortOrder
    fontFamily?: SortOrder
    figmaId?: SortOrder
  }

  export type TextAvgOrderByAggregateInput = {
    x?: SortOrder
    y?: SortOrder
    fontSize?: SortOrder
  }

  export type TextMaxOrderByAggregateInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    fill?: SortOrder
    text?: SortOrder
    fontSize?: SortOrder
    fontFamily?: SortOrder
    figmaId?: SortOrder
  }

  export type TextMinOrderByAggregateInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    fill?: SortOrder
    text?: SortOrder
    fontSize?: SortOrder
    fontFamily?: SortOrder
    figmaId?: SortOrder
  }

  export type TextSumOrderByAggregateInput = {
    x?: SortOrder
    y?: SortOrder
    fontSize?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FigmaCreatewhitelistInput = {
    set: string[]
  }

  export type RectangleCreateNestedManyWithoutFigmaInput = {
    create?: XOR<RectangleCreateWithoutFigmaInput, RectangleUncheckedCreateWithoutFigmaInput> | RectangleCreateWithoutFigmaInput[] | RectangleUncheckedCreateWithoutFigmaInput[]
    connectOrCreate?: RectangleCreateOrConnectWithoutFigmaInput | RectangleCreateOrConnectWithoutFigmaInput[]
    createMany?: RectangleCreateManyFigmaInputEnvelope
    connect?: RectangleWhereUniqueInput | RectangleWhereUniqueInput[]
  }

  export type CircleCreateNestedManyWithoutFigmaInput = {
    create?: XOR<CircleCreateWithoutFigmaInput, CircleUncheckedCreateWithoutFigmaInput> | CircleCreateWithoutFigmaInput[] | CircleUncheckedCreateWithoutFigmaInput[]
    connectOrCreate?: CircleCreateOrConnectWithoutFigmaInput | CircleCreateOrConnectWithoutFigmaInput[]
    createMany?: CircleCreateManyFigmaInputEnvelope
    connect?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
  }

  export type TextCreateNestedManyWithoutFigmaInput = {
    create?: XOR<TextCreateWithoutFigmaInput, TextUncheckedCreateWithoutFigmaInput> | TextCreateWithoutFigmaInput[] | TextUncheckedCreateWithoutFigmaInput[]
    connectOrCreate?: TextCreateOrConnectWithoutFigmaInput | TextCreateOrConnectWithoutFigmaInput[]
    createMany?: TextCreateManyFigmaInputEnvelope
    connect?: TextWhereUniqueInput | TextWhereUniqueInput[]
  }

  export type RectangleUncheckedCreateNestedManyWithoutFigmaInput = {
    create?: XOR<RectangleCreateWithoutFigmaInput, RectangleUncheckedCreateWithoutFigmaInput> | RectangleCreateWithoutFigmaInput[] | RectangleUncheckedCreateWithoutFigmaInput[]
    connectOrCreate?: RectangleCreateOrConnectWithoutFigmaInput | RectangleCreateOrConnectWithoutFigmaInput[]
    createMany?: RectangleCreateManyFigmaInputEnvelope
    connect?: RectangleWhereUniqueInput | RectangleWhereUniqueInput[]
  }

  export type CircleUncheckedCreateNestedManyWithoutFigmaInput = {
    create?: XOR<CircleCreateWithoutFigmaInput, CircleUncheckedCreateWithoutFigmaInput> | CircleCreateWithoutFigmaInput[] | CircleUncheckedCreateWithoutFigmaInput[]
    connectOrCreate?: CircleCreateOrConnectWithoutFigmaInput | CircleCreateOrConnectWithoutFigmaInput[]
    createMany?: CircleCreateManyFigmaInputEnvelope
    connect?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
  }

  export type TextUncheckedCreateNestedManyWithoutFigmaInput = {
    create?: XOR<TextCreateWithoutFigmaInput, TextUncheckedCreateWithoutFigmaInput> | TextCreateWithoutFigmaInput[] | TextUncheckedCreateWithoutFigmaInput[]
    connectOrCreate?: TextCreateOrConnectWithoutFigmaInput | TextCreateOrConnectWithoutFigmaInput[]
    createMany?: TextCreateManyFigmaInputEnvelope
    connect?: TextWhereUniqueInput | TextWhereUniqueInput[]
  }

  export type FigmaUpdatewhitelistInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RectangleUpdateManyWithoutFigmaNestedInput = {
    create?: XOR<RectangleCreateWithoutFigmaInput, RectangleUncheckedCreateWithoutFigmaInput> | RectangleCreateWithoutFigmaInput[] | RectangleUncheckedCreateWithoutFigmaInput[]
    connectOrCreate?: RectangleCreateOrConnectWithoutFigmaInput | RectangleCreateOrConnectWithoutFigmaInput[]
    upsert?: RectangleUpsertWithWhereUniqueWithoutFigmaInput | RectangleUpsertWithWhereUniqueWithoutFigmaInput[]
    createMany?: RectangleCreateManyFigmaInputEnvelope
    set?: RectangleWhereUniqueInput | RectangleWhereUniqueInput[]
    disconnect?: RectangleWhereUniqueInput | RectangleWhereUniqueInput[]
    delete?: RectangleWhereUniqueInput | RectangleWhereUniqueInput[]
    connect?: RectangleWhereUniqueInput | RectangleWhereUniqueInput[]
    update?: RectangleUpdateWithWhereUniqueWithoutFigmaInput | RectangleUpdateWithWhereUniqueWithoutFigmaInput[]
    updateMany?: RectangleUpdateManyWithWhereWithoutFigmaInput | RectangleUpdateManyWithWhereWithoutFigmaInput[]
    deleteMany?: RectangleScalarWhereInput | RectangleScalarWhereInput[]
  }

  export type CircleUpdateManyWithoutFigmaNestedInput = {
    create?: XOR<CircleCreateWithoutFigmaInput, CircleUncheckedCreateWithoutFigmaInput> | CircleCreateWithoutFigmaInput[] | CircleUncheckedCreateWithoutFigmaInput[]
    connectOrCreate?: CircleCreateOrConnectWithoutFigmaInput | CircleCreateOrConnectWithoutFigmaInput[]
    upsert?: CircleUpsertWithWhereUniqueWithoutFigmaInput | CircleUpsertWithWhereUniqueWithoutFigmaInput[]
    createMany?: CircleCreateManyFigmaInputEnvelope
    set?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
    disconnect?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
    delete?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
    connect?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
    update?: CircleUpdateWithWhereUniqueWithoutFigmaInput | CircleUpdateWithWhereUniqueWithoutFigmaInput[]
    updateMany?: CircleUpdateManyWithWhereWithoutFigmaInput | CircleUpdateManyWithWhereWithoutFigmaInput[]
    deleteMany?: CircleScalarWhereInput | CircleScalarWhereInput[]
  }

  export type TextUpdateManyWithoutFigmaNestedInput = {
    create?: XOR<TextCreateWithoutFigmaInput, TextUncheckedCreateWithoutFigmaInput> | TextCreateWithoutFigmaInput[] | TextUncheckedCreateWithoutFigmaInput[]
    connectOrCreate?: TextCreateOrConnectWithoutFigmaInput | TextCreateOrConnectWithoutFigmaInput[]
    upsert?: TextUpsertWithWhereUniqueWithoutFigmaInput | TextUpsertWithWhereUniqueWithoutFigmaInput[]
    createMany?: TextCreateManyFigmaInputEnvelope
    set?: TextWhereUniqueInput | TextWhereUniqueInput[]
    disconnect?: TextWhereUniqueInput | TextWhereUniqueInput[]
    delete?: TextWhereUniqueInput | TextWhereUniqueInput[]
    connect?: TextWhereUniqueInput | TextWhereUniqueInput[]
    update?: TextUpdateWithWhereUniqueWithoutFigmaInput | TextUpdateWithWhereUniqueWithoutFigmaInput[]
    updateMany?: TextUpdateManyWithWhereWithoutFigmaInput | TextUpdateManyWithWhereWithoutFigmaInput[]
    deleteMany?: TextScalarWhereInput | TextScalarWhereInput[]
  }

  export type RectangleUncheckedUpdateManyWithoutFigmaNestedInput = {
    create?: XOR<RectangleCreateWithoutFigmaInput, RectangleUncheckedCreateWithoutFigmaInput> | RectangleCreateWithoutFigmaInput[] | RectangleUncheckedCreateWithoutFigmaInput[]
    connectOrCreate?: RectangleCreateOrConnectWithoutFigmaInput | RectangleCreateOrConnectWithoutFigmaInput[]
    upsert?: RectangleUpsertWithWhereUniqueWithoutFigmaInput | RectangleUpsertWithWhereUniqueWithoutFigmaInput[]
    createMany?: RectangleCreateManyFigmaInputEnvelope
    set?: RectangleWhereUniqueInput | RectangleWhereUniqueInput[]
    disconnect?: RectangleWhereUniqueInput | RectangleWhereUniqueInput[]
    delete?: RectangleWhereUniqueInput | RectangleWhereUniqueInput[]
    connect?: RectangleWhereUniqueInput | RectangleWhereUniqueInput[]
    update?: RectangleUpdateWithWhereUniqueWithoutFigmaInput | RectangleUpdateWithWhereUniqueWithoutFigmaInput[]
    updateMany?: RectangleUpdateManyWithWhereWithoutFigmaInput | RectangleUpdateManyWithWhereWithoutFigmaInput[]
    deleteMany?: RectangleScalarWhereInput | RectangleScalarWhereInput[]
  }

  export type CircleUncheckedUpdateManyWithoutFigmaNestedInput = {
    create?: XOR<CircleCreateWithoutFigmaInput, CircleUncheckedCreateWithoutFigmaInput> | CircleCreateWithoutFigmaInput[] | CircleUncheckedCreateWithoutFigmaInput[]
    connectOrCreate?: CircleCreateOrConnectWithoutFigmaInput | CircleCreateOrConnectWithoutFigmaInput[]
    upsert?: CircleUpsertWithWhereUniqueWithoutFigmaInput | CircleUpsertWithWhereUniqueWithoutFigmaInput[]
    createMany?: CircleCreateManyFigmaInputEnvelope
    set?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
    disconnect?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
    delete?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
    connect?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
    update?: CircleUpdateWithWhereUniqueWithoutFigmaInput | CircleUpdateWithWhereUniqueWithoutFigmaInput[]
    updateMany?: CircleUpdateManyWithWhereWithoutFigmaInput | CircleUpdateManyWithWhereWithoutFigmaInput[]
    deleteMany?: CircleScalarWhereInput | CircleScalarWhereInput[]
  }

  export type TextUncheckedUpdateManyWithoutFigmaNestedInput = {
    create?: XOR<TextCreateWithoutFigmaInput, TextUncheckedCreateWithoutFigmaInput> | TextCreateWithoutFigmaInput[] | TextUncheckedCreateWithoutFigmaInput[]
    connectOrCreate?: TextCreateOrConnectWithoutFigmaInput | TextCreateOrConnectWithoutFigmaInput[]
    upsert?: TextUpsertWithWhereUniqueWithoutFigmaInput | TextUpsertWithWhereUniqueWithoutFigmaInput[]
    createMany?: TextCreateManyFigmaInputEnvelope
    set?: TextWhereUniqueInput | TextWhereUniqueInput[]
    disconnect?: TextWhereUniqueInput | TextWhereUniqueInput[]
    delete?: TextWhereUniqueInput | TextWhereUniqueInput[]
    connect?: TextWhereUniqueInput | TextWhereUniqueInput[]
    update?: TextUpdateWithWhereUniqueWithoutFigmaInput | TextUpdateWithWhereUniqueWithoutFigmaInput[]
    updateMany?: TextUpdateManyWithWhereWithoutFigmaInput | TextUpdateManyWithWhereWithoutFigmaInput[]
    deleteMany?: TextScalarWhereInput | TextScalarWhereInput[]
  }

  export type FigmaCreateNestedOneWithoutRectanglesInput = {
    create?: XOR<FigmaCreateWithoutRectanglesInput, FigmaUncheckedCreateWithoutRectanglesInput>
    connectOrCreate?: FigmaCreateOrConnectWithoutRectanglesInput
    connect?: FigmaWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FigmaUpdateOneRequiredWithoutRectanglesNestedInput = {
    create?: XOR<FigmaCreateWithoutRectanglesInput, FigmaUncheckedCreateWithoutRectanglesInput>
    connectOrCreate?: FigmaCreateOrConnectWithoutRectanglesInput
    upsert?: FigmaUpsertWithoutRectanglesInput
    connect?: FigmaWhereUniqueInput
    update?: XOR<XOR<FigmaUpdateToOneWithWhereWithoutRectanglesInput, FigmaUpdateWithoutRectanglesInput>, FigmaUncheckedUpdateWithoutRectanglesInput>
  }

  export type FigmaCreateNestedOneWithoutCirclesInput = {
    create?: XOR<FigmaCreateWithoutCirclesInput, FigmaUncheckedCreateWithoutCirclesInput>
    connectOrCreate?: FigmaCreateOrConnectWithoutCirclesInput
    connect?: FigmaWhereUniqueInput
  }

  export type FigmaUpdateOneRequiredWithoutCirclesNestedInput = {
    create?: XOR<FigmaCreateWithoutCirclesInput, FigmaUncheckedCreateWithoutCirclesInput>
    connectOrCreate?: FigmaCreateOrConnectWithoutCirclesInput
    upsert?: FigmaUpsertWithoutCirclesInput
    connect?: FigmaWhereUniqueInput
    update?: XOR<XOR<FigmaUpdateToOneWithWhereWithoutCirclesInput, FigmaUpdateWithoutCirclesInput>, FigmaUncheckedUpdateWithoutCirclesInput>
  }

  export type FigmaCreateNestedOneWithoutTextsInput = {
    create?: XOR<FigmaCreateWithoutTextsInput, FigmaUncheckedCreateWithoutTextsInput>
    connectOrCreate?: FigmaCreateOrConnectWithoutTextsInput
    connect?: FigmaWhereUniqueInput
  }

  export type FigmaUpdateOneRequiredWithoutTextsNestedInput = {
    create?: XOR<FigmaCreateWithoutTextsInput, FigmaUncheckedCreateWithoutTextsInput>
    connectOrCreate?: FigmaCreateOrConnectWithoutTextsInput
    upsert?: FigmaUpsertWithoutTextsInput
    connect?: FigmaWhereUniqueInput
    update?: XOR<XOR<FigmaUpdateToOneWithWhereWithoutTextsInput, FigmaUpdateWithoutTextsInput>, FigmaUncheckedUpdateWithoutTextsInput>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type RectangleCreateWithoutFigmaInput = {
    id?: string
    x: number
    y: number
    width: number
    height: number
    fill: string
    stroke?: string | null
    strokeWidth?: number | null
    cornerRadius?: number | null
    opacity?: number | null
  }

  export type RectangleUncheckedCreateWithoutFigmaInput = {
    id?: string
    x: number
    y: number
    width: number
    height: number
    fill: string
    stroke?: string | null
    strokeWidth?: number | null
    cornerRadius?: number | null
    opacity?: number | null
  }

  export type RectangleCreateOrConnectWithoutFigmaInput = {
    where: RectangleWhereUniqueInput
    create: XOR<RectangleCreateWithoutFigmaInput, RectangleUncheckedCreateWithoutFigmaInput>
  }

  export type RectangleCreateManyFigmaInputEnvelope = {
    data: RectangleCreateManyFigmaInput | RectangleCreateManyFigmaInput[]
    skipDuplicates?: boolean
  }

  export type CircleCreateWithoutFigmaInput = {
    id?: string
    x: number
    y: number
    radius: number
    fill: string
  }

  export type CircleUncheckedCreateWithoutFigmaInput = {
    id?: string
    x: number
    y: number
    radius: number
    fill: string
  }

  export type CircleCreateOrConnectWithoutFigmaInput = {
    where: CircleWhereUniqueInput
    create: XOR<CircleCreateWithoutFigmaInput, CircleUncheckedCreateWithoutFigmaInput>
  }

  export type CircleCreateManyFigmaInputEnvelope = {
    data: CircleCreateManyFigmaInput | CircleCreateManyFigmaInput[]
    skipDuplicates?: boolean
  }

  export type TextCreateWithoutFigmaInput = {
    id?: string
    x: number
    y: number
    fill: string
    text: string
    fontSize: number
    fontFamily?: string | null
  }

  export type TextUncheckedCreateWithoutFigmaInput = {
    id?: string
    x: number
    y: number
    fill: string
    text: string
    fontSize: number
    fontFamily?: string | null
  }

  export type TextCreateOrConnectWithoutFigmaInput = {
    where: TextWhereUniqueInput
    create: XOR<TextCreateWithoutFigmaInput, TextUncheckedCreateWithoutFigmaInput>
  }

  export type TextCreateManyFigmaInputEnvelope = {
    data: TextCreateManyFigmaInput | TextCreateManyFigmaInput[]
    skipDuplicates?: boolean
  }

  export type RectangleUpsertWithWhereUniqueWithoutFigmaInput = {
    where: RectangleWhereUniqueInput
    update: XOR<RectangleUpdateWithoutFigmaInput, RectangleUncheckedUpdateWithoutFigmaInput>
    create: XOR<RectangleCreateWithoutFigmaInput, RectangleUncheckedCreateWithoutFigmaInput>
  }

  export type RectangleUpdateWithWhereUniqueWithoutFigmaInput = {
    where: RectangleWhereUniqueInput
    data: XOR<RectangleUpdateWithoutFigmaInput, RectangleUncheckedUpdateWithoutFigmaInput>
  }

  export type RectangleUpdateManyWithWhereWithoutFigmaInput = {
    where: RectangleScalarWhereInput
    data: XOR<RectangleUpdateManyMutationInput, RectangleUncheckedUpdateManyWithoutFigmaInput>
  }

  export type RectangleScalarWhereInput = {
    AND?: RectangleScalarWhereInput | RectangleScalarWhereInput[]
    OR?: RectangleScalarWhereInput[]
    NOT?: RectangleScalarWhereInput | RectangleScalarWhereInput[]
    id?: StringFilter<"Rectangle"> | string
    x?: IntFilter<"Rectangle"> | number
    y?: IntFilter<"Rectangle"> | number
    width?: IntFilter<"Rectangle"> | number
    height?: IntFilter<"Rectangle"> | number
    fill?: StringFilter<"Rectangle"> | string
    stroke?: StringNullableFilter<"Rectangle"> | string | null
    strokeWidth?: IntNullableFilter<"Rectangle"> | number | null
    cornerRadius?: IntNullableFilter<"Rectangle"> | number | null
    opacity?: IntNullableFilter<"Rectangle"> | number | null
    figmaId?: StringFilter<"Rectangle"> | string
  }

  export type CircleUpsertWithWhereUniqueWithoutFigmaInput = {
    where: CircleWhereUniqueInput
    update: XOR<CircleUpdateWithoutFigmaInput, CircleUncheckedUpdateWithoutFigmaInput>
    create: XOR<CircleCreateWithoutFigmaInput, CircleUncheckedCreateWithoutFigmaInput>
  }

  export type CircleUpdateWithWhereUniqueWithoutFigmaInput = {
    where: CircleWhereUniqueInput
    data: XOR<CircleUpdateWithoutFigmaInput, CircleUncheckedUpdateWithoutFigmaInput>
  }

  export type CircleUpdateManyWithWhereWithoutFigmaInput = {
    where: CircleScalarWhereInput
    data: XOR<CircleUpdateManyMutationInput, CircleUncheckedUpdateManyWithoutFigmaInput>
  }

  export type CircleScalarWhereInput = {
    AND?: CircleScalarWhereInput | CircleScalarWhereInput[]
    OR?: CircleScalarWhereInput[]
    NOT?: CircleScalarWhereInput | CircleScalarWhereInput[]
    id?: StringFilter<"Circle"> | string
    x?: IntFilter<"Circle"> | number
    y?: IntFilter<"Circle"> | number
    radius?: IntFilter<"Circle"> | number
    fill?: StringFilter<"Circle"> | string
    figmaId?: StringFilter<"Circle"> | string
  }

  export type TextUpsertWithWhereUniqueWithoutFigmaInput = {
    where: TextWhereUniqueInput
    update: XOR<TextUpdateWithoutFigmaInput, TextUncheckedUpdateWithoutFigmaInput>
    create: XOR<TextCreateWithoutFigmaInput, TextUncheckedCreateWithoutFigmaInput>
  }

  export type TextUpdateWithWhereUniqueWithoutFigmaInput = {
    where: TextWhereUniqueInput
    data: XOR<TextUpdateWithoutFigmaInput, TextUncheckedUpdateWithoutFigmaInput>
  }

  export type TextUpdateManyWithWhereWithoutFigmaInput = {
    where: TextScalarWhereInput
    data: XOR<TextUpdateManyMutationInput, TextUncheckedUpdateManyWithoutFigmaInput>
  }

  export type TextScalarWhereInput = {
    AND?: TextScalarWhereInput | TextScalarWhereInput[]
    OR?: TextScalarWhereInput[]
    NOT?: TextScalarWhereInput | TextScalarWhereInput[]
    id?: StringFilter<"Text"> | string
    x?: IntFilter<"Text"> | number
    y?: IntFilter<"Text"> | number
    fill?: StringFilter<"Text"> | string
    text?: StringFilter<"Text"> | string
    fontSize?: IntFilter<"Text"> | number
    fontFamily?: StringNullableFilter<"Text"> | string | null
    figmaId?: StringFilter<"Text"> | string
  }

  export type FigmaCreateWithoutRectanglesInput = {
    id?: string
    hostEmail: string
    whitelist?: FigmaCreatewhitelistInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    nameFigma?: string | null
    image?: string | null
    circles?: CircleCreateNestedManyWithoutFigmaInput
    texts?: TextCreateNestedManyWithoutFigmaInput
  }

  export type FigmaUncheckedCreateWithoutRectanglesInput = {
    id?: string
    hostEmail: string
    whitelist?: FigmaCreatewhitelistInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    nameFigma?: string | null
    image?: string | null
    circles?: CircleUncheckedCreateNestedManyWithoutFigmaInput
    texts?: TextUncheckedCreateNestedManyWithoutFigmaInput
  }

  export type FigmaCreateOrConnectWithoutRectanglesInput = {
    where: FigmaWhereUniqueInput
    create: XOR<FigmaCreateWithoutRectanglesInput, FigmaUncheckedCreateWithoutRectanglesInput>
  }

  export type FigmaUpsertWithoutRectanglesInput = {
    update: XOR<FigmaUpdateWithoutRectanglesInput, FigmaUncheckedUpdateWithoutRectanglesInput>
    create: XOR<FigmaCreateWithoutRectanglesInput, FigmaUncheckedCreateWithoutRectanglesInput>
    where?: FigmaWhereInput
  }

  export type FigmaUpdateToOneWithWhereWithoutRectanglesInput = {
    where?: FigmaWhereInput
    data: XOR<FigmaUpdateWithoutRectanglesInput, FigmaUncheckedUpdateWithoutRectanglesInput>
  }

  export type FigmaUpdateWithoutRectanglesInput = {
    id?: StringFieldUpdateOperationsInput | string
    hostEmail?: StringFieldUpdateOperationsInput | string
    whitelist?: FigmaUpdatewhitelistInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nameFigma?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    circles?: CircleUpdateManyWithoutFigmaNestedInput
    texts?: TextUpdateManyWithoutFigmaNestedInput
  }

  export type FigmaUncheckedUpdateWithoutRectanglesInput = {
    id?: StringFieldUpdateOperationsInput | string
    hostEmail?: StringFieldUpdateOperationsInput | string
    whitelist?: FigmaUpdatewhitelistInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nameFigma?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    circles?: CircleUncheckedUpdateManyWithoutFigmaNestedInput
    texts?: TextUncheckedUpdateManyWithoutFigmaNestedInput
  }

  export type FigmaCreateWithoutCirclesInput = {
    id?: string
    hostEmail: string
    whitelist?: FigmaCreatewhitelistInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    nameFigma?: string | null
    image?: string | null
    rectangles?: RectangleCreateNestedManyWithoutFigmaInput
    texts?: TextCreateNestedManyWithoutFigmaInput
  }

  export type FigmaUncheckedCreateWithoutCirclesInput = {
    id?: string
    hostEmail: string
    whitelist?: FigmaCreatewhitelistInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    nameFigma?: string | null
    image?: string | null
    rectangles?: RectangleUncheckedCreateNestedManyWithoutFigmaInput
    texts?: TextUncheckedCreateNestedManyWithoutFigmaInput
  }

  export type FigmaCreateOrConnectWithoutCirclesInput = {
    where: FigmaWhereUniqueInput
    create: XOR<FigmaCreateWithoutCirclesInput, FigmaUncheckedCreateWithoutCirclesInput>
  }

  export type FigmaUpsertWithoutCirclesInput = {
    update: XOR<FigmaUpdateWithoutCirclesInput, FigmaUncheckedUpdateWithoutCirclesInput>
    create: XOR<FigmaCreateWithoutCirclesInput, FigmaUncheckedCreateWithoutCirclesInput>
    where?: FigmaWhereInput
  }

  export type FigmaUpdateToOneWithWhereWithoutCirclesInput = {
    where?: FigmaWhereInput
    data: XOR<FigmaUpdateWithoutCirclesInput, FigmaUncheckedUpdateWithoutCirclesInput>
  }

  export type FigmaUpdateWithoutCirclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    hostEmail?: StringFieldUpdateOperationsInput | string
    whitelist?: FigmaUpdatewhitelistInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nameFigma?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    rectangles?: RectangleUpdateManyWithoutFigmaNestedInput
    texts?: TextUpdateManyWithoutFigmaNestedInput
  }

  export type FigmaUncheckedUpdateWithoutCirclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    hostEmail?: StringFieldUpdateOperationsInput | string
    whitelist?: FigmaUpdatewhitelistInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nameFigma?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    rectangles?: RectangleUncheckedUpdateManyWithoutFigmaNestedInput
    texts?: TextUncheckedUpdateManyWithoutFigmaNestedInput
  }

  export type FigmaCreateWithoutTextsInput = {
    id?: string
    hostEmail: string
    whitelist?: FigmaCreatewhitelistInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    nameFigma?: string | null
    image?: string | null
    rectangles?: RectangleCreateNestedManyWithoutFigmaInput
    circles?: CircleCreateNestedManyWithoutFigmaInput
  }

  export type FigmaUncheckedCreateWithoutTextsInput = {
    id?: string
    hostEmail: string
    whitelist?: FigmaCreatewhitelistInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    nameFigma?: string | null
    image?: string | null
    rectangles?: RectangleUncheckedCreateNestedManyWithoutFigmaInput
    circles?: CircleUncheckedCreateNestedManyWithoutFigmaInput
  }

  export type FigmaCreateOrConnectWithoutTextsInput = {
    where: FigmaWhereUniqueInput
    create: XOR<FigmaCreateWithoutTextsInput, FigmaUncheckedCreateWithoutTextsInput>
  }

  export type FigmaUpsertWithoutTextsInput = {
    update: XOR<FigmaUpdateWithoutTextsInput, FigmaUncheckedUpdateWithoutTextsInput>
    create: XOR<FigmaCreateWithoutTextsInput, FigmaUncheckedCreateWithoutTextsInput>
    where?: FigmaWhereInput
  }

  export type FigmaUpdateToOneWithWhereWithoutTextsInput = {
    where?: FigmaWhereInput
    data: XOR<FigmaUpdateWithoutTextsInput, FigmaUncheckedUpdateWithoutTextsInput>
  }

  export type FigmaUpdateWithoutTextsInput = {
    id?: StringFieldUpdateOperationsInput | string
    hostEmail?: StringFieldUpdateOperationsInput | string
    whitelist?: FigmaUpdatewhitelistInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nameFigma?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    rectangles?: RectangleUpdateManyWithoutFigmaNestedInput
    circles?: CircleUpdateManyWithoutFigmaNestedInput
  }

  export type FigmaUncheckedUpdateWithoutTextsInput = {
    id?: StringFieldUpdateOperationsInput | string
    hostEmail?: StringFieldUpdateOperationsInput | string
    whitelist?: FigmaUpdatewhitelistInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nameFigma?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    rectangles?: RectangleUncheckedUpdateManyWithoutFigmaNestedInput
    circles?: CircleUncheckedUpdateManyWithoutFigmaNestedInput
  }

  export type RectangleCreateManyFigmaInput = {
    id?: string
    x: number
    y: number
    width: number
    height: number
    fill: string
    stroke?: string | null
    strokeWidth?: number | null
    cornerRadius?: number | null
    opacity?: number | null
  }

  export type CircleCreateManyFigmaInput = {
    id?: string
    x: number
    y: number
    radius: number
    fill: string
  }

  export type TextCreateManyFigmaInput = {
    id?: string
    x: number
    y: number
    fill: string
    text: string
    fontSize: number
    fontFamily?: string | null
  }

  export type RectangleUpdateWithoutFigmaInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    fill?: StringFieldUpdateOperationsInput | string
    stroke?: NullableStringFieldUpdateOperationsInput | string | null
    strokeWidth?: NullableIntFieldUpdateOperationsInput | number | null
    cornerRadius?: NullableIntFieldUpdateOperationsInput | number | null
    opacity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RectangleUncheckedUpdateWithoutFigmaInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    fill?: StringFieldUpdateOperationsInput | string
    stroke?: NullableStringFieldUpdateOperationsInput | string | null
    strokeWidth?: NullableIntFieldUpdateOperationsInput | number | null
    cornerRadius?: NullableIntFieldUpdateOperationsInput | number | null
    opacity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RectangleUncheckedUpdateManyWithoutFigmaInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    fill?: StringFieldUpdateOperationsInput | string
    stroke?: NullableStringFieldUpdateOperationsInput | string | null
    strokeWidth?: NullableIntFieldUpdateOperationsInput | number | null
    cornerRadius?: NullableIntFieldUpdateOperationsInput | number | null
    opacity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CircleUpdateWithoutFigmaInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    radius?: IntFieldUpdateOperationsInput | number
    fill?: StringFieldUpdateOperationsInput | string
  }

  export type CircleUncheckedUpdateWithoutFigmaInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    radius?: IntFieldUpdateOperationsInput | number
    fill?: StringFieldUpdateOperationsInput | string
  }

  export type CircleUncheckedUpdateManyWithoutFigmaInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    radius?: IntFieldUpdateOperationsInput | number
    fill?: StringFieldUpdateOperationsInput | string
  }

  export type TextUpdateWithoutFigmaInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    fill?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    fontSize?: IntFieldUpdateOperationsInput | number
    fontFamily?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TextUncheckedUpdateWithoutFigmaInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    fill?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    fontSize?: IntFieldUpdateOperationsInput | number
    fontFamily?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TextUncheckedUpdateManyWithoutFigmaInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    fill?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    fontSize?: IntFieldUpdateOperationsInput | number
    fontFamily?: NullableStringFieldUpdateOperationsInput | string | null
  }



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