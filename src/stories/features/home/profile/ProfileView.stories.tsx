import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProfileView from '@/features/home/profile/ProfileView';
import {
  ILanguageAbility,
  IQualification,
} from '../../../../../@types/generated/contentful';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Features/Home/Profile/ProfileView',
  component: ProfileView,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  // variant: { control: 'select', options: ['text', 'outlined', 'contained'] },
  // },
} as ComponentMeta<typeof ProfileView>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProfileView> = (args) => (
  <ProfileView {...args} />
);

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
  fields: {
    heading_content: 'プロフィール',
    full_name: '野村啓司',
    avatar_image: {
      fields: {
        file: {
          url: 'https://images.ctfassets.net/3uttjuewzfml/2ceQLRiZnMHkzEM09y2fPh/ae9c2c783ae47408a83116bde7227366/Avatar-Maker.png?h=250',
        },
      },
    },
    external_service_links: [
      {
        fields: {
          url_link: 'https://zenn.dev/ari914_pers',
          image_logo: {
            fields: {
              file: {
                url: 'https://images.ctfassets.net/3uttjuewzfml/3J8strFHPG3gZpadhR2MDT/5efbb38037acd4116b10fd1a81258c19/logo-only.svg',
              },
            },
          },
        },
      },
      {
        fields: {
          url_link: 'https://zenn.dev/ari914_pers',
          image_logo: {
            fields: {
              file: {
                url: 'https://images.ctfassets.net/3uttjuewzfml/3J8strFHPG3gZpadhR2MDT/5efbb38037acd4116b10fd1a81258c19/logo-only.svg',
              },
            },
          },
        },
      },
      {
        fields: {
          url_link: 'https://zenn.dev/ari914_pers',
          image_logo: {
            fields: {
              file: {
                url: 'https://images.ctfassets.net/3uttjuewzfml/3J8strFHPG3gZpadhR2MDT/5efbb38037acd4116b10fd1a81258c19/logo-only.svg',
              },
            },
          },
        },
      },
    ],
    handle_name: 'ハンドルネームテスト',
    residence: '東京都',
    language_abilities: [
      {
        fields: {
          name: '日本語',
          level: '日常生活くらい',
          comment: 'テキストテキストテキストテキスト',
        },
      },
      {
        fields: {
          name: '日本語',
          level: '日常生活くらい',
          comment: 'テキストテキストテキストテキスト',
        },
      },
      {
        fields: {
          name: '日本語',
          level: '日常生活くらい',
          comment: 'テキストテキストテキストテキスト',
        },
      },
    ] as ILanguageAbility[],
    qualifications: [
      {
        fields: {
          name: 'TOEIC',
          score: 855,
          obtained_at: '2017年12月',
          description:
            'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
        },
      },
      {
        fields: {
          name: 'TOEIC',
          score: 855,
          obtained_at: '2017年12月',
          description:
            'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
        },
      },
      {
        fields: {
          name: 'TOEIC',
          score: 855,
          obtained_at: '2017年12月',
          description:
            'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
        },
      },
      {
        fields: {
          name: 'TOEIC',
          score: 855,
          obtained_at: '2017年12月',
          description:
            'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
        },
      },
    ] as unknown as IQualification[],
  },
};
