import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@mui/material';
import { IFutureGoal } from '../../../../../../../@types/generated/contentful';
import FutureGoalField from '@/features/home/company/entry/future_goal/FutureGoalField';
import { Document } from '@contentful/rich-text-types';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Features/Home/Company/entry/FutureGoal/FutureGoalField',
  component: FutureGoalField,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  // variant: { control: 'select', options: ['text', 'outlined', 'contained'] },
  // },
} as ComponentMeta<typeof FutureGoalField>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FutureGoalField> = (args) => (
  <Box width={600}>
    <FutureGoalField {...args} />
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
  entries: [
    {
      fields: {
        description: dummyDoc as Document,
        occupation: {
          fields: 'フロントエンド',
        },
        priority: 1,
        title: '頑張ります',
        span_goal: {
          fields: {
            title: '夏まで',
          },
        },
      },
    } as IFutureGoal,
    {
      fields: {
        description: dummyDoc as Document,
        occupation: {
          fields: 'フロントエンド',
        },
        priority: 5,
        title: '頑張ります2',
        span_goal: {
          fields: {
            title: '夏まで',
          },
        },
      },
    } as IFutureGoal,
  ] as IFutureGoal[],
};

export const withoutDescription = Template.bind({});

withoutDescription.args = {
  entries: [] as IFutureGoal[],
};
