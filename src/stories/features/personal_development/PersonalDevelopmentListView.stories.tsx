import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LayoutRegular from '@/components/layout/LayoutRegular';
import {
  IDevelopEnv,
  IPersonalDevelopmentFields,
} from '../../../../@types/generated/contentful';
import PersonalDevelopmentListView from '@/features/personal_development/PersonalDevelopmentListView';
import { Asset } from 'contentful';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Features/PersonalDevelopment/PersonalDevelopmentListView',
  component: PersonalDevelopmentListView,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  // variant: { control: 'select', options: ['text', 'outlined', 'contained'] },
  // },
} as ComponentMeta<typeof PersonalDevelopmentListView>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PersonalDevelopmentListView> = (args) => (
  <LayoutRegular>
    <PersonalDevelopmentListView {...args} />
  </LayoutRegular>
);

const dummyFields = {
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
};

const dummyEntry = {
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
      languages: [dummyFields, dummyFields, dummyFields],
      frameworks: [dummyFields, dummyFields],
      tools: [dummyFields],
    },
  } as IDevelopEnv,
  summary: dummyDoc,
  thought: dummyDoc,
} as IPersonalDevelopmentFields;

const dummyEntry1: IPersonalDevelopmentFields = {
  ...dummyEntry,
  title: '1番目',
};

const dummyEntry2: IPersonalDevelopmentFields = {
  ...dummyEntry,
  title: '2番目',
};

const dummyEntry3: IPersonalDevelopmentFields = {
  ...dummyEntry,
  title: '3番目',
};

const contents = [
  dummyEntry1,
  dummyEntry2,
  dummyEntry3,
  dummyEntry1,
  dummyEntry2,
  dummyEntry3,
];

export const Normal = Template.bind({});

Normal.args = {
  entries: contents,
};

// export const withMore3Projects = Template.bind({});

// withMore3Projects.args = {
// entries: [
// dummyCompany,
// dummyCompany,
// dummyCompany,
// dummyCompany,
// dummyCompany,
// ],
// futureGoals: [dummyFutureGoal, dummyFutureGoal],
// };
