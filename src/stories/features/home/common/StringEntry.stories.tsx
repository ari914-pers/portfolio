import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import StringEntry from '@/features/home/common/entry/StringEntry';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Features/Home/common/StringEntry',
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

export const withNotStringVal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
withNotStringVal.args = {
  fieldName: '氏名',
  fieldVal: 666,
};

export const withEmptyString = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
withEmptyString.args = {
  fieldName: '氏名',
  fieldVal: '',
};

export const withLink = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
withLink.args = {
  fieldName: 'あがががあああああああああ',
  fieldVal: 'ons14september@gmail.com',
  withLink: 'mailto:ons14september@gmail.com',
};

export const withUndefined = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
withUndefined.args = {
  fieldName: '氏名',
  fieldVal: undefined,
};

export const withNull = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
withNull.args = {
  fieldName: '氏名',
  fieldVal: null,
};
