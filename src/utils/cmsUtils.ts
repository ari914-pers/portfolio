import cmsClient from '@/config/cms/cmsClient';
import { CONTENT_TYPE } from '../../@types/generated/contentful';
import { Entry } from 'contentful';
import { map } from 'lodash';
import { ICmsError, processFunc, processFuncArgs } from '@/types/cms.type';

export const getEntry = async <T, U = unknown>(
  entryID: string,
  processFunc?: processFunc<T, U>,
  processFuncArgs?: processFuncArgs<U>
) => {
  const result = await cmsClient
    .getEntry<T>(entryID)
    .then((entry) => {
      return processFunc
        ? processFuncArgs
          ? processFunc(entry?.fields, ...processFuncArgs)
          : processFunc(entry?.fields)
        : entry?.fields;
    })
    .catch((e: ICmsError) => {
      // TODO 例外処理を書く・error boundary
      console.error(e);
    });

  return result;
};

export const getEntries = async <
  T,
  U extends Record<string | symbol, string | number>,
  V = unknown
>(
  contentType: CONTENT_TYPE,
  query?: U,
  processFunc?: processFunc<T, V>,
  processFuncArgs?: processFuncArgs<V>
) => {
  const results = await cmsClient
    .getEntries<T>({
      contentType,
      ...query,
    })
    .then((entries) => {
      return map(entries, (entry: Entry<T>) => {
        return processFunc
          ? processFuncArgs
            ? processFunc(entry?.fields, ...processFuncArgs)
            : processFunc(entry?.fields)
          : entry?.fields;
      });
    })
    .catch((e: ICmsError) => {
      // TODO 例外処理を書く・error boundary
      console.error(e);
    });

  return results;
};
