import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/config/styles/theme';
import { addDecorator } from '@storybook/react';
import GlobalStyleProvider from '../src/config/styles/GlobalStyleProvider';
import 'modern-css-reset/dist/reset.min.css';
import i18n from './i18next.js';
import * as NextImage from "next/image";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    {GlobalStyleProvider}
    {story()}
  </ThemeProvider>
))