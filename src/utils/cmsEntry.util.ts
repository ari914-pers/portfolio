import { map } from 'lodash';
import {
  IExternalServiceLink,
  ILanguageAbility,
  IQualification,
} from '../../@types/generated/contentful';
import { EntryField } from '@/types/cms.type';

export const isExternalServiceLinks = (
  entries:
    | IExternalServiceLink[]
    | ILanguageAbility[]
    | IQualification[]
    | undefined
): entries is IExternalServiceLink[] => {
  if (entries === undefined) return false;

  const entry = entries[0].fields;
  return 'image_logo' in entry && 'url_link' in entry;
};

export const toOrderGuaranteed = <T>(keys: string[], content: EntryField) => {
  const ArrForMapConstructor = map(
    keys,
    (elm) => [elm, content[elm as keyof EntryField]] as [string, T | undefined]
  );
  const profileTextFieldMap = new Map<string, T | undefined>(
    ArrForMapConstructor
  );

  return Array.from(profileTextFieldMap);
};
