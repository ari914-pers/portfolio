import { isUndefined, map } from 'lodash';
import {
  IBusiessContentFields,
  IExternalServiceLink,
  IFeedbackFields,
  ILanguageAbility,
  IQualification,
  IResponsiblePhaseFields,
} from '../../@types/generated/contentful';
import { EntryField } from '@/types/cms.type';

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
