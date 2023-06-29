import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FaqView from '@/features/home/faq/FaqView';
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

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Features/Home/Faq/FaqView',
  component: FaqView,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  // variant: { control: 'select', options: ['text', 'outlined', 'contained'] },
  // },
} as ComponentMeta<typeof FaqView>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FaqView> = (args) => (
  <FaqView {...args} isUsedOnHome />
);

export const Normal = Template.bind({});

Normal.args = {
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

export const withNoFaq = Template.bind({});

withNoFaq.args = { faqs: [] };
