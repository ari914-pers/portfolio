import * as React from 'react';
import { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '@/config/styles/createEmotionCache';
import CustomThemeProvider from '@/config/styles/CustomThemeProvider';
import '@fontsource/sawarabi-gothic/japanese-400.css';
import '@fontsource/kaisei-opti/japanese-500.css';
import '@fontsource/kaisei-opti/japanese-700.css';
import { fontFamilies } from '@/consts/themeConstant';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  // eslint-disable-next-line react/require-default-props
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <CustomThemeProvider>
        <main style={{ fontFamily: fontFamilies['Sawarabi Gothic'] }}>
          <Component {...pageProps} />
        </main>
      </CustomThemeProvider>
    </CacheProvider>
  );
}
