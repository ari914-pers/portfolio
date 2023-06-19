import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PersonalDevelopmentView from '@/features/home/personal_development/PersonalDevelopmentView';
import { IPersonalDevelopmentFields } from '../../../../../@types/generated/contentful';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Features/Home/PersonalDevelopment/PersonalDevelopmentView',
  component: PersonalDevelopmentView,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  // variant: { control: 'select', options: ['text', 'outlined', 'contained'] },
  // },
} as ComponentMeta<typeof PersonalDevelopmentView>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PersonalDevelopmentView> = (args) => (
  <PersonalDevelopmentView {...args} />
);

export const Normal = Template.bind({});

const contents = [
  {
    title: 'テストテストテスト',
    thumbnail: {
      fields: {
        file: {
          url: 'https://images.ctfassets.net/3uttjuewzfml/h23mxYg3DmhuZ3eXihvfi/019de84907641e80f346f65b1275e07f/____________________________2023-03-10_192433.png?h=250',
        },
      },
    },
    url_link:
      'https://zenn.dev/morinokami/books/learning-patterns-1/viewer/hoc-pattern#hoc-%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3',
    summary: {
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
    },
  },
  {
    title: 'テストテストテスト',
    thumbnail: {
      fields: {
        file: {
          url: 'https://images.ctfassets.net/3uttjuewzfml/h23mxYg3DmhuZ3eXihvfi/019de84907641e80f346f65b1275e07f/____________________________2023-03-10_192433.png?h=250',
        },
      },
    },
    url_link:
      'https://zenn.dev/morinokami/books/learning-patterns-1/viewer/hoc-pattern#hoc-%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3',
    summary: {
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
    },
  },
  {
    title: 'テストテストテスト',
    thumbnail: {
      fields: {
        file: {
          url: 'https://images.ctfassets.net/3uttjuewzfml/h23mxYg3DmhuZ3eXihvfi/019de84907641e80f346f65b1275e07f/____________________________2023-03-10_192433.png?h=250',
        },
      },
    },
    url_link:
      'https://zenn.dev/morinokami/books/learning-patterns-1/viewer/hoc-pattern#hoc-%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3',
    summary: {
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
    },
  },
  {
    title: 'テストテストテスト',
    thumbnail: {
      fields: {
        file: {
          url: 'https://images.ctfassets.net/3uttjuewzfml/h23mxYg3DmhuZ3eXihvfi/019de84907641e80f346f65b1275e07f/____________________________2023-03-10_192433.png?h=250',
        },
      },
    },
    url_link:
      'https://zenn.dev/morinokami/books/learning-patterns-1/viewer/hoc-pattern#hoc-%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3',
    summary: {
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
    },
  },
];

Normal.args = {
  personalDevelopment: contents as IPersonalDevelopmentFields[],
};
