export type AnyObject<T= void>  = Record<PropertyKey, T extends {} ? T : unknown>;
