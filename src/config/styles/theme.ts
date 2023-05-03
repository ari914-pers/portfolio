import { createTheme } from '@mui/material/styles';
import {
  BorderRadiuses,
  LineHeights,
  fontFamilies,
  fontSizes,
  fontWeights,
  letterSpacings,
  textDecorations,
  textTransforms,
  themeValues,
} from '../../consts/themeConstant';

// Create a theme instance.
const theme = createTheme({
  palette: {
    common: {
      black: themeValues.palette.black,
      white: themeValues.palette.white,
    },
    primary: {
      main: themeValues.palette.primary.main,
      light: themeValues.palette.primary.light,
      contrastText: themeValues.palette.white,
    },
    secondary: {
      main: themeValues.palette.secondary,
      contrastText: themeValues.palette.white,
    },
    error: {
      main: themeValues.palette.semantics.error,
      contrastText: themeValues.palette.white,
    },
    warning: {
      main: themeValues.palette.semantics.warning,
      contrastText: themeValues.palette.white,
    },
    success: {
      main: themeValues.palette.semantics.success,
      contrastText: themeValues.palette.white,
    },
    info: {
      main: themeValues.palette.semantics.info,
      contrastText: themeValues.palette.white,
    },
    text: {
      primary: themeValues.palette.black,
    },
    background: {
      default: themeValues.palette.white,
      paper: themeValues.palette.semantics.paper,
    },
  },
  spacing: themeValues.spacing,
  shape: {
    borderRadius: BorderRadiuses.xl,
  },
  typography: {
    fontFamily: `${fontFamilies['Sawarabi Gothic']} ${fontFamilies['sans-serif']}`,
    h1: {
      fontFamily: fontFamilies['Kaisei Opti'],
      fontSize: fontSizes.h1,
      fontWeight: fontWeights.bold,
      lineHeight: LineHeights.heading,
      letterSpacing: letterSpacings.decreased,
      textTransform: textTransforms.uppercase,
    },
    h2: {
      fontFamily: fontFamilies['Kaisei Opti'],
      fontSize: fontSizes.h2,
      fontWeight: fontWeights.bold,
      lineHeight: LineHeights.heading,
      letterSpacing: letterSpacings.decreased,
    },
    h3: {
      fontFamily: fontFamilies['Kaisei Opti'],
      fontSize: fontSizes.h3,
      fontWeight: fontWeights.bold,
      lineHeight: LineHeights.heading,
      letterSpacing: letterSpacings.decreased,
    },
    h4: {
      fontFamily: fontFamilies['Kaisei Opti'],
      fontSize: fontSizes.h4,
      fontWeight: fontWeights.medium,
      lineHeight: LineHeights.heading,
      letterSpacing: letterSpacings.decreased,
    },
    h5: {
      fontFamily: fontFamilies['Kaisei Opti'],
      fontSize: fontSizes.h5,
      fontWeight: fontWeights.medium,
      lineHeight: LineHeights.heading,
      letterSpacing: letterSpacings.decreased,
    },
    h6: {
      fontFamily: fontFamilies['Kaisei Opti'],
      fontSize: fontSizes.h6,
      fontWeight: fontWeights.medium,
      lineHeight: LineHeights.heading,
      letterSpacing: letterSpacings.decreased,
    },
    body1: {
      fontFamily: fontFamilies['Sawarabi Gothic'],
      fontSize: fontSizes.body,
      fontWeight: fontWeights.medium,
      lineHeight: LineHeights.body,
      letterSpacing: letterSpacings.default,
    },
    poster: {
      fontFamily: fontFamilies['Kaisei Opti'],
      fontSize: fontSizes.h1,
      color: themeValues.palette.semantics.success,
    },
    linkBody: {
      fontFamily: fontFamilies['Sawarabi Gothic'],
      fontSize: fontSizes.body,
      fontWeight: fontWeights.bold,
      lineHeight: LineHeights.body,
      letterSpacing: letterSpacings.default,
      textDecoration: textDecorations.underline,
      color: themeValues.palette.semantics.link,
    },
    linkHeading: {
      fontFamily: fontFamilies['Kaisei Opti'],
      fontSize: fontSizes.body,
      fontWeight: fontWeights.bold,
      lineHeight: LineHeights.heading,
      letterSpacing: letterSpacings.default,
      textDecoration: textDecorations.underline,
      color: themeValues.palette.semantics.link,
    },
    spanRegular: {
      fontFamily: fontFamilies['Sawarabi Gothic'],
      fontSize: fontSizes.sm,
      fontWeight: fontWeights.regular,
      lineHeight: LineHeights.body,
      letterSpacing: letterSpacings.default,
    },
    spanHeading: {
      fontFamily: fontFamilies['Kaisei Opti'],
      fontSize: fontSizes.sm,
      fontWeight: fontWeights.bold,
      lineHeight: LineHeights.body,
      letterSpacing: letterSpacings.default,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          poster: 'h4',
          linkBody: 'span',
          linkHeading: 'span',
          spanRegular: 'span',
          spanHeading: 'span',
        },
      },
    },
  },
});

export default theme;
