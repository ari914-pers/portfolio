import {
  IBusiessContentFields,
  ICategoryCharacteristicFields,
  ICategoryGoalFields,
  ICategoryOccupationFields,
  ICategorySkillFields,
  ICharacteristicFields,
  ICompanyFields,
  IDevelopEnvFields,
  IEntry,
  IExternalServiceLinkFields,
  IFaqFields,
  IFavoriteFields,
  IFeedbackFields,
  IFutureGoalFields,
  ILanguageAbilityFields,
  IPersonalDevelopmentFields,
  IProfileFields,
  IQualificationFields,
  IResponsiblePhaseFields,
  ISelfQualityFields,
  ISettingFields,
  ISkillsetFields,
  IWorkProjectsFields,
} from '../../@types/generated/contentful';

export type processFuncArgs<T> = T[];
export type processFunc<T extends EntryField, U> = (
  fields: T,
  ...args: processFuncArgs<U>
) => T;

export interface ICmsError extends Error {
  cause: undefined;
  sys?: {
    type?: string;
    id?: string;
  };
  details?: {
    type?: string;
    id?: string;
    environment?: string;
    space?: string;
  };
}

export type ErrorCause = {
  sys: {
    type: string;
    id: string;
  };
  details: {
    type: string;
    id: string;
    environment: string;
    space?: string;
  };
};

export type EntryField =
  | IBusiessContentFields
  | ICategoryCharacteristicFields
  | ICategoryGoalFields
  | ICategoryOccupationFields
  | ICategorySkillFields
  | ICharacteristicFields
  | ICompanyFields
  | IDevelopEnvFields
  | IExternalServiceLinkFields
  | IFaqFields
  | IFavoriteFields
  | IFeedbackFields
  | IFutureGoalFields
  | ILanguageAbilityFields
  | IPersonalDevelopmentFields
  | IProfileFields
  | IQualificationFields
  | IResponsiblePhaseFields
  | ISelfQualityFields
  | ISettingFields
  | ISkillsetFields
  | IWorkProjectsFields;

export type EntryFieldSignature = {
  [field: string | symbol]: unknown;
};

export type EntityORFieldOrUndefined = EntryField | IEntry | undefined;
