export type processFunc<T, U> = (fields: T, ...args: U[]) => T;
export type processFuncArgs<T> = T[];

export interface ICmsError extends Error {
  cause: undefined;
  sys?: {
    type?: string;
    id?: string;
  };
  details?: {
    type?: string;
    id?: string;
    environment?: string;
    space?: string;
  };
}

export type ErrorCause = {
  sys: {
    type: string;
    id: string;
  };
  details: {
    type: string;
    id: string;
    environment: string;
    space?: string;
  };
};
