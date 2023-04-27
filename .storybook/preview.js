import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/config/styles/theme';
import { addDecorator } from '@storybook/react';
import GlobalStyleProvider from '@/config/styles/GlobalStyleProvider';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    {GlobalStyleProvider}
    {story()}
  </ThemeProvider>
))