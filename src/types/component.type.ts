import {
  genOneSideSpacingCssProperty,
  genSizingPropertyVal,
  genTwoSidesSpacingCssProperty,
} from '@/utils/style.util';
import {
  Display,
  OneSideSpacingMuiPropsKey,
  Overflow,
  SizingCssPropertyKey,
  SpacingMuiPropsKey,
  TwoSidesSpacingMuiPropsKey,
} from './style.type';
import { SxProps } from '@mui/material';
import { CSSProperties } from 'react';

export type SizingCssProperty = Partial<
  Record<SizingCssPropertyKey, Parameters<typeof genSizingPropertyVal>>
>;

export type SpacingCssProperty<T extends SpacingMuiPropsKey> = Partial<
  Record<
    T,
    T extends TwoSidesSpacingMuiPropsKey
      ? Parameters<typeof genTwoSidesSpacingCssProperty>
      :
          | Parameters<typeof genSizingPropertyVal>
          | Parameters<typeof genOneSideSpacingCssProperty>
  >
>;

export type WrapperCompProps = {
  color?: string;
  backgroundColor?: string;
  display?: Display;
  overflow?: Overflow;
  sizing?: SizingCssProperty;
  oneSideSpacing?: SpacingCssProperty<OneSideSpacingMuiPropsKey>;
  twoSidesSpacing?: SpacingCssProperty<TwoSidesSpacingMuiPropsKey>;
  objectFit?: CSSProperties['objectFit'];
  objectPosition?: CSSProperties['objectPosition'];
  position?: CSSProperties['position'];
};

export type objSxProps<T extends string> = Record<T, SxProps>;
