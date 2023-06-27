import * as React from 'react';
import { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '@/config/styles/createEmotionCache';
import CustomThemeProvider from '@/config/styles/CustomThemeProvider';
import GlobalStyleProvider from '@/config/styles/GlobalStyleProvider';
import { appWithTranslation } from 'next-i18next';
import LayoutRegular from '@/components/layout/LayoutRegular';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  // eslint-disable-next-line react/require-default-props
  emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <CustomThemeProvider>
        {GlobalStyleProvider}
        <LayoutRegular>
          <Component {...pageProps} />
        </LayoutRegular>
      </CustomThemeProvider>
    </CacheProvider>
  );
}

export default appWithTranslation(MyApp);
