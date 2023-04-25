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
  },
  p: {
    lineHeight: LineHeights.body,
  },
};
