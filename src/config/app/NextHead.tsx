import theme from '../styles/theme';
import { APP_META_DESC, APP_TITLE } from '@/consts/app.const';

const NextHead = () => {
  return (
    <>
      <title>{APP_TITLE}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width,initial-scale=1' />
      <meta name='description' content={APP_META_DESC} />
      <link rel='icon' href='/app_favicon.ico' />
      {/* PWA primary color */}
      <meta name='theme-color' content={theme.palette.primary.main} />
    </>
  );
};

export default NextHead;
