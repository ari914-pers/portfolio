import { createTheme } from '@mui/material/styles';
import { themeValues } from '../../consts/themeConstant';

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
});
export default theme;
