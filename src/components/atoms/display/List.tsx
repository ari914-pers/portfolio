import { EntryField } from '@/types/cms.type';
import { List as MUIList, ListProps } from '@mui/material';
import { chain, identity, isUndefined } from 'lodash';
import React, { ReactElement } from 'react';
import { IEntry } from '../../../../@types/generated/contentful';

type ListCompProps<T extends EntryField | IEntry | undefined> = {
  listProps?: ListProps;
  /**
   * entries fetched from cms
   */
  entries: T[];
  iteratee: (entry: T, index?: number) => ReactElement | null;
  /**
   * function to process entries
   * & return the same type as passed one (entry field type)
   */
  processEntries?: (entries: T[]) => T[];
};

const List = <U extends EntryField | IEntry | undefined>({
  listProps,
  entries,
  iteratee,
  processEntries = identity,
}: ListCompProps<U>) => {
  return !isUndefined(entries) ? (
    <MUIList {...listProps}>
      {chain(entries).thru(processEntries).map(iteratee).value()}
    </MUIList>
  ) : null;
};

export default List;
