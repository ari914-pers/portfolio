import { objSxProps } from '@/types/components/common.type';
import { get } from 'lodash';

export const getSxPropsByVariants = <T extends string>(
  objSxProps: objSxProps<T>,
  variant: T
) => {
  return get<objSxProps<T>, T>(objSxProps, variant);
};
