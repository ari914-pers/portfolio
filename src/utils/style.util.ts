import { Dimensions, Spacings } from '@/consts/themeConstant';
import { SpacingCssProperty } from '@/types/components/common.type';
import {
  BorderType,
  DimensionKey,
  DimensionUnit,
  OneSideSpacingMuiPropsKey,
  SpacingKey,
} from '@/types/style.type';

export const genSizingPropertyVal = (
  val: number,
  unit: DimensionUnit = 'px'
) => {
  return (unit === 'px' || unit === 'rem') && val < 0
    ? `${-val}${unit}`
    : `${val}${unit}`;
};

export const genBorderPropertyVal = (
  color: string,
  type: BorderType,
  thickness: Parameters<typeof genSizingPropertyVal>
) => `${color} ${type} ${genSizingPropertyVal(...thickness)}`;

export const genTwoSidesSpacingCssProperty = (spacing: SpacingKey) => {
  if (spacing === '0-auto') return '0 auto';
  return `${Spacings[spacing][0]}px ${Spacings[spacing][1]}px`;
};

export const genOneSideSpacingCssProperty = (spacing: DimensionKey) => {
  return `${Dimensions[spacing]}px`;
};

export const checkTypePassedToOneSideSpacingProperty = (
  oneSideSpacing: SpacingCssProperty<OneSideSpacingMuiPropsKey>[OneSideSpacingMuiPropsKey]
): oneSideSpacing is Parameters<typeof genSizingPropertyVal> => {
  return oneSideSpacing ? typeof oneSideSpacing[0] === 'number' : false;
};
