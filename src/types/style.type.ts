export type FontFamily =
  | 'Sawarabi Gothic'
  | 'Kaisei Opti'
  | 'sans-serif'
  | 'serif';

export type FontWeight = 400 | 500 | 700;

export type FontWeightKey = 'regular' | 'medium' | 'bold';

export type LineHeight = '110%' | '140%';

export type LineHeightKey = 'heading' | 'body';

export type LetterSpacing = '-5%' | '0' | '120%';

export type LetterSpacingKey = 'default' | 'decreased' | 'increased';

export type FontSize =
  | '16px'
  | '48.329px'
  | '39.063px'
  | '31.25px'
  | '25px'
  | '20px'
  | '13.6px'
  | '10.4px';

export type FontSizeKey =
  | 'body'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'sm'
  | 'xs';

export type TextTransform = 'uppercase' | 'none';

export type TextDecoration = 'underline' | 'none';

export type Dimension = 4 | 8 | 16 | 32 | 64 | 0;

export type DimensionKey = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'zero';

export type SpacingKey =
  | 'xs-xs'
  | 'xs-sm'
  | 'xs-md'
  | 'xs-lg'
  | 'xs-xl'
  | 'sm-sm'
  | 'sm-md'
  | 'sm-lg'
  | 'sm-xl'
  | 'md-md'
  | 'md-lg'
  | 'md-xl'
  | 'lg-lg'
  | 'lg-xl'
  | 'xl-xl'
  | 'md-0';

export type BorderType = 'solid' | 'none';

export type Overflow = 'hidden' | 'visible';

export type Display = 'block' | 'none';

export type DimensionUnit = 'px' | '%' | 'rem';

export type SizingCssPropertyKey =
  | 'width'
  | 'height'
  | 'minWidth'
  | 'minHeight'
  | 'maxWidth'
  | 'maxHeight';

export type SpacingType = 'margin' | 'padding';

export type SpacingMuiPropsKey = 'm' | 'mt' | 'ml' | 'mb' | 'mr' | 'p';

export type TwoSidesSpacingMuiPropsKey = 'm' | 'p';

export type OneSideSpacingMuiPropsKey = Exclude<
  SpacingMuiPropsKey,
  TwoSidesSpacingMuiPropsKey
>;

export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type JustifyContent =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-around'
  | 'space-between';
export type AlignItems =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'stretch'
  | 'baseline';

export type BorderRadiusKey = 'xl';
export type BorderRadius = '16px';
