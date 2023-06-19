import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IPersonalDevelopmentFields } from '../../../../../../@types/generated/contentful';
import PersonalDevelopmentEntry from '@/features/home/personal_development/entry/PersonalDevelopmentEntry';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Features/Home/PersonalDevelopment/Entry/PersonalDevelopmentEntry',
  component: PersonalDevelopmentEntry,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  // variant: { control: 'select', options: ['text', 'outlined', 'contained'] },
  // },
} as ComponentMeta<typeof PersonalDevelopmentEntry>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PersonalDevelopmentEntry> = (args) => (
  <PersonalDevelopmentEntry {...args} />
);

export const Normal = Template.bind({});

Normal.args = {
  entry: {
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
  } as IPersonalDevelopmentFields,
};

export const withBrokenLink = Template.bind({});

withBrokenLink.args = {
  entry: {
    title: 'テストテストテスト',
    thumbnail: {
      fields: {
        file: {
          url: 'https://images.ctfassets.net/3uttjuewzfml/h23mxYg3DmhuZ3eXihvfi/019de84907641e80f346f65b1275e07f/____________________________2023-03-10_192433.png?h=250',
        },
      },
    },
    url_link: '',
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
  } as IPersonalDevelopmentFields,
};

export const withoutDescription = Template.bind({});

withoutDescription.args = {
  entry: {
    title: 'テストテストテスト',
    thumbnail: {
      fields: {
        file: {
          url: 'https://images.ctfassets.net/3uttjuewzfml/h23mxYg3DmhuZ3eXihvfi/019de84907641e80f346f65b1275e07f/____________________________2023-03-10_192433.png?h=250',
        },
      },
    },
    url_link:
      'https://images.ctfassets.net/3uttjuewzfml/h23mxYg3DmhuZ3eXihvfi/019de84907641e80f346f65b1275e07f/____________________________2023-03-10_192433.png?h=250',
  } as IPersonalDevelopmentFields,
};
