import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import HomeView from '@/features/home/HomeView';
import LayoutRegular from '@/components/layout/LayoutRegular';
import {
  ICompanyFields,
  IDevelopEnv,
  IFutureGoalFields,
  ILanguageAbility,
  IPersonalDevelopmentFields,
  IProfileFields,
  IQualification,
  ISkillsetFields,
} from '../../../../@types/generated/contentful';
import { Asset } from 'contentful';
import { Document } from '@contentful/rich-text-types';

const dummyDoc = {
  nodeType: 'document',
  data: {},
  content: [
    {
      nodeType: 'paragraph',
      data: {},
      content: [
        {
          nodeType: 'text',
          value: 'テストテストテストテスト',
          marks: [
            {
              type: 'bold',
            },
          ],
          data: {},
        },
        {
          nodeType: 'text',
          value: 'テスト',
          marks: [],
          data: {},
        },
        {
          nodeType: 'text',
          value: 'テスト',
          marks: [
            {
              type: 'underline',
            },
          ],
          data: {},
        },
        {
          nodeType: 'text',
          value:
            'テスト　テストテスト　テストテストテスト　テストテストテスト　テストテストテストテストテストテストテストテスト　テストテストテストテストテストテストテストテスト　テストテストテストテストテストテストテストテスト　テストテストテストテストテストテストテストテスト　テストテストテストテストテストテストテストテスト　テストテストテストテストテストテストテストテスト　テストテストテストテストテストテスト',
          marks: [],
          data: {},
        },
      ],
    },
  ],
} as Document;

const dummyProfile = {
  heading_content: 'プロフィール',
  full_name: '野村啓司',
  avatar_image: {
    fields: {
      file: {
        url: 'https://images.ctfassets.net/3uttjuewzfml/2ceQLRiZnMHkzEM09y2fPh/ae9c2c783ae47408a83116bde7227366/Avatar-Maker.png?h=250',
      },
    },
  } as Asset,
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
};

const dummyPJ = {
  fields: {
    title: '精神を病んだ案件',
    joined_at: '2022-06-14T08:28:19.934Z',
  },
};

const dummyCompany = {
  description: 'ソフトハウス的な会社',
  joined_at: '2021-06-14T08:28:19.934Z',
  work_projects: [dummyPJ, dummyPJ],
};

const dummyFutureGoal = {
  description: dummyDoc,
} as IFutureGoalFields;

const dummyIcon = {
  fields: {
    img_icon: {
      fields: {
        file: {
          url: 'https://images.ctfassets.net/3uttjuewzfml/3J8strFHPG3gZpadhR2MDT/5efbb38037acd4116b10fd1a81258c19/logo-only.svg',
        },
      },
    },
    name: 'Zenn.dev',
    memo: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  },
};

const dummyPD = {
  title: 'テストテストテスト',
  thumbnail: {
    fields: {
      file: {
        url: 'https://images.ctfassets.net/3uttjuewzfml/h23mxYg3DmhuZ3eXihvfi/019de84907641e80f346f65b1275e07f/____________________________2023-03-10_192433.png?h=250',
      },
    },
  } as Asset,
  started_at: '2023-02-14T08:28:19.934Z',
  finished_at: '2023-06-14T08:28:19.934Z',
  url_link: 'https://github.com/ari914-pers/portfolio',
  link_github: 'https://github.com/ari914-pers/portfolio',
  link_zenn:
    'https://zenn.dev/morinokami/books/learning-patterns-1/viewer/forward',
  os: 'AWS',
  development_env: {
    fields: {
      languages: [dummyIcon, dummyIcon],
      frameworks: [dummyIcon, dummyIcon, dummyIcon],
      tools: [dummyIcon],
    },
  } as IDevelopEnv,
  summary: dummyDoc,
  thought: dummyDoc,
} as IPersonalDevelopmentFields;

const dummyFaqs = [
  {
    title_question: 'あなたは誰ですか？',
    title_answer: '私は一般市民です。',
    answer_description: dummyDoc,
  },
  {
    title_question: 'あなたは誰ですか？',
    title_answer: '私は一般市民です。',
    answer_description: dummyDoc,
  },
];

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Features/Home/HomeView',
  component: HomeView,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  // variant: { control: 'select', options: ['text', 'outlined', 'contained'] },
  // },
} as ComponentMeta<typeof HomeView>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HomeView> = (args) => (
  <LayoutRegular>
    <HomeView {...args} />
  </LayoutRegular>
);

export const Normal = Template.bind({});

Normal.args = {
  profile: {},
  faqs: [
    {
      title_question: 'あなたは誰ですか？',
      title_answer: '私は一般市民です。',
      answer_description: dummyDoc,
    },
    {
      title_question: 'あなたは誰ですか？',
      title_answer: '私は一般市民です。',
      answer_description: dummyDoc,
    },
  ],
};

export const withMoreThan3Faqs = Template.bind({});

withMoreThan3Faqs.args = {
  faqs: [
    {
      title_question: 'あなたは誰ですか？ 1',
      title_answer: '私は一般市民です。',
      answer_description: dummyDoc,
    },
    {
      title_question: 'あなたは誰ですか？ 2',
      title_answer: '私は一般市民です。',
      answer_description: dummyDoc,
    },
    {
      title_question: 'あなたは誰ですか？ 3',
      title_answer: '私は一般市民です。',
      answer_description: dummyDoc,
    },
    {
      title_question: 'あなたは誰ですか？ 4',
      title_answer: '私は一般市民です。',
      answer_description: dummyDoc,
    },
    {
      title_question: 'あなたは誰ですか？ 5',
      title_answer: '私は一般市民です。',
      answer_description: dummyDoc,
    },
    {
      title_question: 'あなたは誰ですか？ 6',
      title_answer: '私は一般市民です。',
      answer_description: dummyDoc,
    },
  ],
};

const dummySkillSet = {
  name: 'JavaScript',
  memo: 'Webアプリを中心に世界を支配する言語',
  period_work_experience: '2年3か月',
  proficiency_percentage: 40,
  period_develop_experience: '2年3か月',
  degree_interest: '中',
  category: {
    fields: {
      title: '言語',
    },
  },
  img_icon: {
    fields: {
      file: {
        url: 'https://camo.qiitausercontent.com/61a10cee96e1d66a4d7c5304ddce840b15e88200/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313032323030312f35313338643231372d393938372d393430362d616662382d3562306131346563393862352e706e67',
      },
    },
  },
} as ISkillsetFields;

export const SoTiring = Template.bind({});

SoTiring.args = {
  profile: dummyProfile as IProfileFields,
  companies: [dummyCompany, dummyCompany] as ICompanyFields[],
  futureGoals: [
    dummyFutureGoal,
    dummyFutureGoal,
    dummyFutureGoal,
    dummyFutureGoal,
    dummyFutureGoal,
  ],
  faqs: dummyFaqs,
  personalDevelopments: [dummyPD, dummyPD],
  skillSets: [
    dummySkillSet,
    dummySkillSet,
    dummySkillSet,
    dummySkillSet,
    dummySkillSet,
  ],
};
