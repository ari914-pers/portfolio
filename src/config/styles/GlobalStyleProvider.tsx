import React from 'react';
import 'modern-css-reset/dist/reset.min.css';
import { GlobalStyles } from '@mui/material';
import { globalStyle } from './globalStyle';
import '@fontsource/sawarabi-gothic/japanese-400.css';
import '@fontsource/kaisei-opti/japanese-500.css';
import '@fontsource/kaisei-opti/japanese-700.css';

// It is a good practice to hoist the <GlobalStyles /> to a static constant, to avoid rerendering.
// This will ensure that the <style> tag generated would not recalculate on each render.
const GlobalStyleProvider = <GlobalStyles styles={globalStyle} />;

export default GlobalStyleProvider;
