import { PREFIX_URL } from '@/consts/common.const';
import { endsWith, partial, startsWith } from 'lodash';

export const processStrWithAffix = <T extends string, U extends T>(
  pattern: T,
  prefixOrSuffix: U,
  position: 'prefix' | 'sufix',
  strInputted: string
) => {
  if (position === 'prefix') {
    return startsWith(strInputted, pattern)
      ? strInputted
      : `${prefixOrSuffix}${strInputted}`;
  } else {
    return endsWith(strInputted, pattern)
      ? strInputted
      : `${strInputted}${prefixOrSuffix}`;
  }
};

export const processStrIntoURLFormat = partial(
  processStrWithAffix,
  PREFIX_URL,
  'https:',
  'prefix'
);
