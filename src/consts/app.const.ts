import {
  APP_TRANSITION_ITEM,
  DIR_PATH_TO_ASSET_IMAGE as IMAGE_PATH,
  DIR_PATH_TO_ASSET_IMAGE_LOGOS as LOGO_PATH,
} from '@/types/app.type';

export const DIR_PATH_TO_ASSET_IMAGE: IMAGE_PATH = '/images';
export const DIR_PATH_TO_ASSET_IMAGE_LOGOS: LOGO_PATH = `${DIR_PATH_TO_ASSET_IMAGE}/logos`;

export const APP_TITLE = 'Ari914_persのポートフォリオ';
export const APP_META_DESC = '一個人のプログラマとしてのポートフォリオサイト';

export const APP_NAV: APP_TRANSITION_ITEM[] = [
  { path: '/', label: ' ホーム', id: '#' },
  { path: '/profile', label: ' プロフィール', id: '#profile' },
  { path: '/career', label: ' キャリア', id: '#career' },
  { path: '/faq', label: ' FAQ', id: '#faq' },
  { path: '/personal_development', label: ' 個人開発', id: '#PD' },
  { path: '/skill_set', label: ' スキルセット', id: '#skillSet' },
];
