import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@mui/material';
import { IFutureGoalFields } from '../../../../../../../../@types/generated/contentful';
import FutureGoalEntry from '@/features/home/company/entry/future_goal/modal/FutureGoalEntry';
import { Document } from '@contentful/rich-text-types';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Features/Home/Company/entry/FutureGoal/Modal/FutureGoalEntry',
  component: FutureGoalEntry,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  // variant: { control: 'select', options: ['text', 'outlined', 'contained'] },
  // },
} as ComponentMeta<typeof FutureGoalEntry>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FutureGoalEntry> = (args) => (
  <Box width={600}>
    <FutureGoalEntry {...args} />
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

const dummyEntry = {
  title: 'テストテストテストテストテスト',
  description: dummyDoc,
  priority: 12,
  occupation: {
    fields: {
      title: 'フロントエンド',
    },
  },
  span_goal: {
    fields: {
      title: '来年の夏まで',
    },
  },
};

export const Normal = Template.bind({});

Normal.args = {
  entry: dummyEntry as IFutureGoalFields,
};

export const withoutDescription = Template.bind({});

const dummy2 = {
  ...dummyEntry,
  description: {} as Document,
};

withoutDescription.args = {
  entry: dummy2 as IFutureGoalFields,
};

export const withStyledPriority = Template.bind({});

const dummy3 = {
  ...dummyEntry,
  priority: 1,
};

withoutDescription.args = {
  entry: dummy3 as IFutureGoalFields,
};
