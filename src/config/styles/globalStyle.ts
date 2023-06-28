import {
  LineHeights,
  fontFamilies,
  fontWeights,
  themeValues,
} from '@/consts/themeConstant';
import { genOneSideSpacingCssProperty } from '@/utils/style.util';
import { GlobalStylesProps } from '@mui/material/GlobalStyles/GlobalStyles';

export const globalStyle: GlobalStylesProps['styles'] = {
  body: {
    color: themeValues.palette.black,
    backgroundColor: themeValues.palette.white,
    fontFamily: `'${fontFamilies['Sawarabi Gothic']}', '${fontFamilies['sans-serif']}'`,
    fontWeight: fontWeights.medium,
    boxSizing: 'border-box',
    minHeight: '100vh',
  },
  main: {
    padding: `3rem ${genOneSideSpacingCssProperty('md')}`,
    minHeight: '80vh',
  },
  p: {
    lineHeight: LineHeights.body,
  },
  a: {
    textDecoration: 'none',
    '&:active': {
      textDecoration: 'none',
      color: themeValues.palette.black,
    },
    '&:visited': {
      textDecoration: 'none',
      color: themeValues.palette.black,
    },
  },
};
