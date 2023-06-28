import cmsClient from '@/config/cms/cmsClient';
import { Asset, Entry } from 'contentful';
import { flow, identity, isUndefined, map } from 'lodash';
import {
  EntryField,
  ICmsError,
  processFunc,
  processFuncArgs,
} from '@/types/cms.type';
import { CONTENT_TYPE } from '../../@types/generated/contentful';
import { AssetKeys } from '@/consts/cms';

export const getEntry = async <T extends EntryField, U = unknown>(
  entryID: string,
  processFunc?: processFunc<T, U>,
  processFuncArgs?: processFuncArgs<U>
) => {
  const result = await cmsClient
    .getEntry<T>(entryID)
    .then((entry) =>
      processFunc
        ? processFuncArgs
          ? processFunc(entry?.fields, ...processFuncArgs)
          : processFunc(entry?.fields)
        : entry?.fields
    )
    .catch((e: ICmsError) => {
      // TODO 例外処理を書く・error boundary
      console.error(e);
    });

  return result;
};

export const getEntries = async <
  T extends EntryField,
  U extends Record<string | symbol, string | number> = Record<string, never>>(
  content_type: CONTENT_TYPE,
  query?: U,
  processFunc?: (entry: T, args?: unknown[]) => T,
  processFuncArgs?: unknown[]
) => {
  const results = await cmsClient
    .getEntries<T>({
      content_type,
      ...query,
    })
    .then((entries) => {
      return map(entries.items, (entry) => {
        return processFunc
          ? processFunc(entry.fields, processFuncArgs)
          : entry.fields;
      });
    })
    .catch((e: ICmsError) => {
      // TODO 例外処理を書く・error boundary
      console.error(e);
      return null;
    });

  return results;
};

export const isAsset = (someField: object | undefined): someField is Asset => {
  if (isUndefined(someField)) {
    return false;
  }
  return 'fields' in someField && 'file' in (someField.fields as object);
};
