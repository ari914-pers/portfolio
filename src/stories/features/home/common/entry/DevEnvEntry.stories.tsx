import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DevEnvEntry from '@/features/home/common/entry/DevEnvEntry';
import { IDevelopEnvFields } from '../../../../../../../@types/generated/contentful';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Features/Home/PersonalDevelopment/Modal/Entry/DevEnvEntry',
  component: DevEnvEntry,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  // variant: { control: 'select', options: ['text', 'outlined', 'contained'] },
  // },
} as ComponentMeta<typeof DevEnvEntry>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DevEnvEntry> = (args) => (
  <DevEnvEntry {...args} />
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

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
  fieldName: '開発環境',
  entry: {
    os: 'AWS',
    languages: [dummyFields, dummyFields, dummyFields],
    frameworks: [dummyFields, dummyFields],
    tools: [dummyFields],
  } as IDevelopEnvFields,
};

export const WithEmptyEntries = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithEmptyEntries.args = {
  fieldName: 'メモ',
  entry: {
    languages: [dummyFields, dummyFields, dummyFields],
    tools: [],
  } as IDevelopEnvFields,
};

// export const WithUndefined = Template.bind({});
// WithNoEntries.args = {
// fieldName: 'メモ',
// entries: undefined,
// };
