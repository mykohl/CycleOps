export type MakeNullable<T, K extends keyof T> = Omit<T, K> & { [P in K]?: T[P] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [P in K]?: T[P] };
export type PrefixProperties<T, Prefix extends string> = {
    [K in keyof T as `${Prefix}${string & K}`]: T[K];
  };