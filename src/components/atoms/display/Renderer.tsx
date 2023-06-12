import { chain } from 'lodash';
import React, { ReactElement } from 'react';

type RendererProps<T> = {
  entries: T[];
  iteratee: (entry: T) => ReactElement;
};

const Renderer = <U,>({ iteratee, entries }: RendererProps<U>) => {
  return <>{chain(entries).map(iteratee).value()}</>;
};

export default Renderer;
