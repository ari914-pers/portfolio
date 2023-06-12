import {
  AnnotationContentKey,
  LanguageAbilityContentKey,
  PROFILE_CONTENT_WITH_CHILDREN,
  ProfileTextContentKey,
  QualificationContentKey,
} from '@/types/features/home.type';

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
