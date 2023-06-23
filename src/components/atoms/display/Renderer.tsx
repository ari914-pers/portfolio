import { chain, identity } from 'lodash';
import React, { ReactElement } from 'react';

type RendererProps<T> = {
  entries: T[];
  iteratee: (entry: T, index?: number) => ReactElement | null;
  processEntries?: (entries: T[]) => T[];
};

const Renderer = <U,>({
  iteratee,
  entries,
  processEntries,
}: RendererProps<U>) => {
  return (
    <>
      {chain(entries)
        .thru(processEntries ?? identity)
        .map(iteratee)
        .value()}
    </>
  );
};

export default Renderer;
