import { EntryField } from '@/types/cms.type';
import { List as MUIList, ListProps } from '@mui/material';
import { chain, identity } from 'lodash';
import React, { ReactElement } from 'react';

type ListCompProps<T extends EntryField> = {
  listProps?: ListProps;
  /**
   * entries fetched from cms
   */
  entries: T[];
  iteratee: (entry: T, index?: number) => ReactElement;
  /**
   * function to process entries
   * & return the same type as passed one (entry field type)
   */
  processEntries?: (entries: T[]) => T[];
};

const List = <U extends EntryField>({
  listProps,
  entries,
  iteratee,
  processEntries = identity,
}: ListCompProps<U>) => {
  return (
    <MUIList {...listProps}>
      {chain(entries).thru(processEntries).map(iteratee).value()}
    </MUIList>
  );
};

export default List;
