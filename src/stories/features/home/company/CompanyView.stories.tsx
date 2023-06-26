import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@mui/material';
import {
  IWorkProjects,
  ICompanyFields,
  IFutureGoalFields,
} from '../../../../../@types/generated/contentful';
import CompanyView from '@/features/home/company/CompanyView';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Features/Home/Company/CompanyView',
  component: CompanyView,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  // variant: { control: 'select', options: ['text', 'outlined', 'contained'] },
  // },
} as ComponentMeta<typeof CompanyView>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CompanyView> = (args) => (
  <Box width={600}>
    <CompanyView {...args} />
  </Box>
);

const dummyEntry = {
  fields: {
    title: '精神を病んだ案件',
    joined_at: '2022-06-14T08:28:19.934Z',
  },
} as IWorkProjects;

const dummyCompany = {
  description: 'ソフトハウス的な会社',
  joined_at: '2021-06-14T08:28:19.934Z',
  work_projects: [dummyEntry, dummyEntry],
} as ICompanyFields;

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

const dummyFutureGoal = {
  description: dummyDoc,
} as IFutureGoalFields;

export const Normal = Template.bind({});

Normal.args = {
  entries: [dummyCompany, dummyCompany, dummyCompany],
  futureGoal: dummyFutureGoal,
};

export const withMore3Projects = Template.bind({});

withMore3Projects.args = {
  entries: [
    dummyCompany,
    dummyCompany,
    dummyCompany,
    dummyCompany,
    dummyCompany,
  ],
  futureGoal: dummyFutureGoal,
};
