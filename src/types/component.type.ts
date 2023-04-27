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
};
