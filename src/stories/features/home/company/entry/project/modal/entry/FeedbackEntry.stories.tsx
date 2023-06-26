import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@mui/material';
import { IFeedback } from '../../../../../../../../../@types/generated/contentful';
import FeedbackEntry from '@/features/home/company/entry/project/modal/entry/FeedbackEntry';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Features/Home/Company/entry/Project/Modal/Entry/FeedbackEntry',
  component: FeedbackEntry,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  // variant: { control: 'select', options: ['text', 'outlined', 'contained'] },
  // },
} as ComponentMeta<typeof FeedbackEntry>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FeedbackEntry> = (args) => (
  <Box width={600}>
    <FeedbackEntry {...args} />
  </Box>
);

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

export const Normal = Template.bind({});

Normal.args = {
  entry: {
    fields: {
      title: 'テストテスト',
      description: dummyDoc,
      category: '取り組み',
    },
  } as IFeedback,
};

export const withoutTitle = Template.bind({});

withoutTitle.args = {
  entry: {
    fields: {
      description: dummyDoc,
      category: '取り組み',
    },
  } as IFeedback,
};

export const withoutDescription = Template.bind({});

withoutDescription.args = {
  entry: {
    fields: {
      title: 'テストテストテスト',
      category: '取り組み',
    },
  } as IFeedback,
};

export const withoutCategory = Template.bind({});

withoutCategory.args = {
  entry: {
    fields: {
      title: 'テストテストテスト',
      description: dummyDoc,
    },
  } as IFeedback,
};

export const withUndefined = Template.bind({});

withUndefined.args = {
  entry: undefined,
};
