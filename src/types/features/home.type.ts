import { FC, PropsWithChildren } from 'react';
import {
  ILanguageAbility,
  IQualification,
} from '../../../@types/generated/contentful';
import { EntityORFieldOrUndefined } from '../cms.type';

export type ProfileChildEntry = IQualification | ILanguageAbility | undefined;

export type ProfileChildEntriesCompProps = {
  entry: ProfileChildEntry;
  content_name: PROFILE_CONTENT_WITH_CHILDREN;
};

export type ProfileChildEntriesComp = FC<
  PropsWithChildren<ProfileChildEntriesCompProps>
>;

export type ProfileTextContentKey =
  | 'handle_name'
  | 'full_name'
  | 'mail_address'
  | 'born_at'
  | 'gender'
  | 'residence'
  | 'birthplace';

export type LanguageAbilityContentKey = 'name' | 'level' | 'comment';
export type QualificationContentKey =
  | 'name'
  | 'score'
  | 'obtained_at'
  | 'description';

export type AnnotationContentKey = 'メモ' | 'コメント' | '説明';

export type PROFILE_CONTENT_WITH_CHILDREN =
  | 'language_abilities'
  | 'qualifications';

export type EntryRendererCompProps<T extends EntityORFieldOrUndefined> = {
  entry: T;
};

export type EntryRendererComp<U extends EntityORFieldOrUndefined> = FC<
  PropsWithChildren<EntryRendererCompProps<U>>
>;

export type PersonalDevelopmentEntryFields = 'thumbnail' | 'title' | 'summary';
