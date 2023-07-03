import { isArray, isNull, isUndefined, map, size } from 'lodash';
import {
  IBusiessContentFields,
  IExternalServiceLink,
  IFeedbackFields,
  ILanguageAbility,
  IQualification,
  IResponsiblePhaseFields,
} from '../../@types/generated/contentful';
import { EntryField } from '@/types/cms.type';
import { NO_SIZE_CONTENT_COLLECTION } from '@/consts/features/home.const';

// type guards
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

export const isResponsiblePhaseFieldsORBusinessContentFields = (
  fields: EntryField | undefined
): fields is IResponsiblePhaseFields | IBusiessContentFields => {
  if (isUndefined(fields)) return false;

  return 'title' in fields && 'note' in fields;
};

export const isFeedbackFields = (
  fields: EntryField | undefined
): fields is IFeedbackFields => {
  if (isUndefined(fields)) return false;

  return 'title' in fields && ('description' in fields || 'category' in fields);
};

// othere utilities
export const toOrderGuaranteed = <T, U extends EntryField>(
  keys: string[],
  content: U
) => {
  const ArrForMapConstructor = map(
    keys,
    (elm) => [elm, content[elm as keyof U]] as [keyof U, T | undefined]
  );
  const profileTextFieldMap = new Map<keyof U, T | undefined>(
    ArrForMapConstructor
  );

  return Array.from(profileTextFieldMap);
};

export const checkEntriesToBeShown = (
  entries: EntryField | EntryField[] | null
): entries is Exclude<typeof entries, null> => {
  return (
    !isNull(entries) &&
    (isArray(entries) ? size(entries) > NO_SIZE_CONTENT_COLLECTION : true)
  );
};
