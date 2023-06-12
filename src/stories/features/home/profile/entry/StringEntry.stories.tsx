import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import StringEntry from '@/features/home/profile/entry/StringEntry';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Features/Home/Profile/entry/StringEntry',
  component: StringEntry,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  // variant: { control: 'select', options: ['text', 'outlined', 'contained'] },
  // },
} as ComponentMeta<typeof StringEntry>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StringEntry> = (args) => (
  <StringEntry {...args} />
);

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
  fieldName: '氏名',
  fieldVal: '川端康成',
};

export const WithCaptionText = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithCaptionText.args = {
  fieldName: 'メモ',
  fieldVal:
    'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
};
