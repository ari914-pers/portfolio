import {
  AnnotationContentKey,
  LanguageAbilityContentKey,
  PROFILE_CONTENT_WITH_CHILDREN,
  PersonalDevelopmentEntryFields,
  PersonalDevelopmentModalDevEnvEntry,
  ProfileTextContentKey,
  QualificationContentKey,
} from '@/types/features/home.type';
import {
  IBusiessContentFields,
  ICategorySkillFields,
  IResponsiblePhaseFields,
  ISkillsetFields,
} from '../../../@types/generated/contentful';

export const ProfileTextContents: ProfileTextContentKey[] = [
  'handle_name',
  'full_name',
  'mail_address',
  'born_at',
  'gender',
  'residence',
  'birthplace',
];

export const LanguageAbilityContents: LanguageAbilityContentKey[] = [
  'name',
  'level',
  'comment',
];

export const QualificationContents: QualificationContentKey[] = [
  'name',
  'score',
  'obtained_at',
  'description',
];

export const AnnotationContent: AnnotationContentKey[] = [
  'コメント',
  '説明',
  'メモ',
];

export const profileContentsWithChildren: PROFILE_CONTENT_WITH_CHILDREN[] = [
  'qualifications',
  'language_abilities',
];

export const NO_SIZE_CONTENT_COLLECTION = 0;

export const MAXIMUM_SIZE_CONTENT_SHOWN_ON_HOME = 3;

export const personalDevelopment: PersonalDevelopmentEntryFields[] = [
  'thumbnail',
  'title',
  'summary',
];

export const personalDevelopmentModalDevEnvEntries: PersonalDevelopmentModalDevEnvEntry[] =
  ['languages', 'frameworks', 'tools'];

export const categoriesSkillSet: Exclude<
  ICategorySkillFields['title'],
  undefined
>[] = ['言語', 'ライブラリ・フレームワーク', 'その他ツール'];

export const skillSetModalFields: Exclude<
  keyof ISkillsetFields,
  'img_icon' | 'memo' | 'category'
>[] = [
  'name',
  'period_work_experience',
  'period_develop_experience',
  'degree_interest',
  'proficiency_percentage',
];

export const projectModalResponsiblePhaseFields: (keyof IResponsiblePhaseFields)[] =
  ['title', 'description'];

export const projectModalBusinessContentFields: (keyof IBusiessContentFields)[] =
  ['title', 'note'];

export const PREFIX_ANCHOR_MAIL_ADDRESS = 'mailto:';
