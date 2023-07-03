import React, { ReactNode } from 'react';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import 'modern-css-reset/dist/reset.min.css';

const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
