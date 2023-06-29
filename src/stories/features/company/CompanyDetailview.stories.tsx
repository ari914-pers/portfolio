import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LayoutRegular from '@/components/layout/LayoutRegular';
import {
  IWorkProjects,
  ICompanyFields,
  IFutureGoalFields,
} from '../../../../@types/generated/contentful';
import CompanyDetailView from '@/features/company/CompanyDetailview';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Features/Company/CompanyDetailview',
  component: CompanyDetailView,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  // variant: { control: 'select', options: ['text', 'outlined', 'contained'] },
  // },
} as ComponentMeta<typeof CompanyDetailView>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CompanyDetailView> = (args) => (
  <LayoutRegular>
    <CompanyDetailView {...args} />
  </LayoutRegular>
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
  work_projects: [dummyEntry, dummyEntry, dummyEntry, dummyEntry],
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
  title: 'testtesttest',
} as IFutureGoalFields;

export const Normal = Template.bind({});

Normal.args = {
  entries: [dummyCompany, dummyCompany, dummyCompany],
  futureGoals: [dummyFutureGoal, dummyFutureGoal],
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
  futureGoals: [dummyFutureGoal, dummyFutureGoal],
};
