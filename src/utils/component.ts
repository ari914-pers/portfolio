import { objSxProps } from '@/types/components/common.type';
import { chain, get, identity } from 'lodash';
import { ReactElement } from 'react';

export const getSxPropsByVariants = <T extends string>(
  objSxProps: objSxProps<T>,
  variant: T
) => {
  return get<objSxProps<T>, T>(objSxProps, variant);
};

export const renderCollection = <T>(
  collection: T[],
  iteratee: (entry: T, index?: number) => ReactElement | null,
  processEntries: (entries: T[]) => T[] = identity
) => {
  return chain(collection).thru(processEntries).map(iteratee).value();
};
