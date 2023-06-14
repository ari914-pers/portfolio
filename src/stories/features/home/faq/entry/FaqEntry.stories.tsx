import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FaqEntry from '@/features/home/faq/entry/FaqEntry';
import { IFaqFields } from '../../../../../../@types/generated/contentful';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Features/Home/Faq/entry/FaqEntry',
  component: FaqEntry,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  // variant: { control: 'select', options: ['text', 'outlined', 'contained'] },
  // },
} as ComponentMeta<typeof FaqEntry>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FaqEntry> = (args) => (
  <FaqEntry {...args} />
);

export const Normal = Template.bind({});

Normal.args = {
  entry: {
    title_question: 'あなたは誰ですか？',
    title_answer: '私は一般市民です。',
    answer_description:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  } as IFaqFields,
};
