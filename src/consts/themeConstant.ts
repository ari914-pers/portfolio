import {
  FontFamily,
  FontSize,
  FontSizeKey,
  FontWeight,
  FontWeightKey,
  LetterSpacing,
  LetterSpacingKey,
  LineHeight,
  LineHeightKey,
  TextDecoration,
  TextTransform,
  Dimension,
  DimensionKey,
  SpacingKey,
  BorderRadiusKey,
  BorderRadius,
  BoxShadowKey,
  Opacities as OpacityVal,
  OpacityKey,
} from '@/types/style.type';

export const themeValues = {
  palette: {
    black: '#000B00',
    white: '#F7EFE3',
    gray: 'BBBCBF',
    primary: {
      main: '#003149',
      light: '#A2D7DD',
    },
    secondary: '#491800',
    semantics: {
      error: '#B7282E',
      warning: '#F8B400',
      success: '#86B81B',
      info: '#745399',
      paper: '#FFFFFC',
      link: '#005baa',
    },
  },
  spacing: 8,
};

export const fontFamilies: Record<FontFamily, FontFamily> = {
  'Sawarabi Gothic': 'Sawarabi Gothic',
  'Kaisei Opti': 'Kaisei Opti',
  serif: 'serif',
  'sans-serif': 'sans-serif',
};

export const fontWeights: Record<FontWeightKey, FontWeight> = {
  regular: 400,
  medium: 500,
  bold: 700,
};

export const LineHeights: Record<LineHeightKey, LineHeight> = {
  heading: '110%',
  body: '140%',
};

export const letterSpacings: Record<LetterSpacingKey, LetterSpacing> = {
  default: '0',
  decreased: '-5%',
  increased: '120%',
};

export const fontSizes: Record<FontSizeKey, FontSize> = {
  body: '16px',
  h1: '48.329px',
  h2: '39.063px',
  h3: '31.25px',
  h4: '25px',
  h5: '20px',
  h6: '20px',
  sm: '13.6px',
  xs: '10.4px',
};

export const textTransforms: Record<TextTransform, TextTransform> = {
  uppercase: 'uppercase',
  none: 'none',
};

export const textDecorations: Record<TextDecoration, TextDecoration> = {
  underline: 'underline',
  none: 'none',
};

export const Dimensions: Record<DimensionKey, Dimension> = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 32,
  xl: 64,
  zero: 0,
};

export const Spacings: Record<SpacingKey, [Dimension, Dimension]> = {
  'xs-xs': [Dimensions.xs, Dimensions.xs],
  'xs-sm': [Dimensions.xs, Dimensions.sm],
  'xs-md': [Dimensions.xs, Dimensions.md],
  'xs-lg': [Dimensions.xs, Dimensions.lg],
  'xs-xl': [Dimensions.xs, Dimensions.xl],
  'sm-sm': [Dimensions.sm, Dimensions.sm],
  'sm-md': [Dimensions.sm, Dimensions.md],
  'sm-lg': [Dimensions.sm, Dimensions.lg],
  'sm-xl': [Dimensions.sm, Dimensions.xl],
  'md-md': [Dimensions.md, Dimensions.md],
  'md-lg': [Dimensions.md, Dimensions.lg],
  'md-xl': [Dimensions.md, Dimensions.xl],
  'lg-lg': [Dimensions.lg, Dimensions.lg],
  'lg-xl': [Dimensions.lg, Dimensions.xl],
  'xl-xl': [Dimensions.xl, Dimensions.xl],
  'md-0': [Dimensions.md, Dimensions.zero],
};

export const BorderRadiuses: Record<BorderRadiusKey, BorderRadius> = {
  xl: '16px',
};

export const BoxShadows: Record<BoxShadowKey, string> = {
  default: `5px 5px 5px 3px ${themeValues.palette.primary.light}, 4px 4px 5px 6px ${themeValues.palette.primary.light}`,
};

export const Opacities: Record<OpacityKey, OpacityVal> = {
  thin: 0.7,
};
