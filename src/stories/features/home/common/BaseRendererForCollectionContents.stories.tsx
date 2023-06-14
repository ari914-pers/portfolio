import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import BaseRendererForCollectionContents from '@/features/home/common/BaseRendererForCollectionContents';
import FaqEntry from '@/features/home/faq/entry/FaqEntry';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Features/Home/Common/BaseRendererForCollectionContents',
  component: BaseRendererForCollectionContents,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  // variant: { control: 'select', options: ['text', 'outlined', 'contained'] },
  // },
} as ComponentMeta<typeof BaseRendererForCollectionContents>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BaseRendererForCollectionContents> = (
  args
) => <BaseRendererForCollectionContents {...args} />;

export const WithCardAndLessThan3 = Template.bind({});

WithCardAndLessThan3.args = {
  isRenderedWithCard: true,
  collection: [
    {
      title_question: 'あなたは誰ですか？',
      title_answer: '私は一般市民です。',
      answer_description:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
    },
    {
      title_question: 'あなたは誰ですか？',
      title_answer: '私は一般市民です。',
      answer_description:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
    },
  ],
  cardTitle: 'FAQs',
  cardDescription: 'テキストテキストテキストテキスト',
  EntryRenderer: FaqEntry,
};

export const WithCardAndMoreThan3 = Template.bind({});

WithCardAndMoreThan3.args = {
  collection: [
    {
      title_question: 'あなたは誰ですか？ 1',
      title_answer: '私は一般市民です。',
      answer_description:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
    },
    {
      title_question: 'あなたは誰ですか？ 2',
      title_answer: '私は一般市民です。',
      answer_description:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
    },
    {
      title_question: 'あなたは誰ですか？ 3',
      title_answer: '私は一般市民です。',
      answer_description:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
    },
    {
      title_question: 'あなたは誰ですか？ 4',
      title_answer: '私は一般市民です。',
      answer_description:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
    },
    {
      title_question: 'あなたは誰ですか？ 5',
      title_answer: '私は一般市民です。',
      answer_description:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
    },
    {
      title_question: 'あなたは誰ですか？ 6',
      title_answer: '私は一般市民です。',
      answer_description:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
    },
  ],
  cardTitle: 'FAQs',
  cardDescription: 'テキストテキストテキストテキスト',
  EntryRenderer: FaqEntry,
  isRenderedWithCard: true,
};

export const withEmptyCollection = Template.bind({});

withEmptyCollection.args = { collection: [], isRenderedWithCard: true };

export const withUndefinedCollection = Template.bind({});

withUndefinedCollection.args = {
  collection: undefined,
  isRenderedWithCard: true,
};
