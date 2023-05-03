import {
  LineHeights,
  fontFamilies,
  fontWeights,
  themeValues,
} from '@/consts/themeConstant';
import { GlobalStylesProps } from '@mui/material/GlobalStyles/GlobalStyles';

export const globalStyle: GlobalStylesProps['styles'] = {
  body: {
    color: themeValues.palette.black,
    backgroundColor: themeValues.palette.white,
    fontFamily: `'${fontFamilies['Sawarabi Gothic']}', '${fontFamilies['sans-serif']}'`,
    fontWeight: fontWeights.medium,
    boxSizing: 'border-box',
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
