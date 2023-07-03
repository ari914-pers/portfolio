import { AnnotationContent } from '@/consts/features/home.const';
import { includes } from 'lodash';

export const isAnnotationContent = (fieldKey: string) =>
  includes(AnnotationContent, fieldKey);
