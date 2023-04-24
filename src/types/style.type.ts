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

export type FontSize = 16 | 48.329 | 39.063 | 31.25 | 25 | 20 | 13.6 | 10.4;

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

export type PaddingKey =
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
