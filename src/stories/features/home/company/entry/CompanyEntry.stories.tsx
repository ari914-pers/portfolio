import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@mui/material';
import CompanyEntry from '@/features/home/company/entry/CompanyEntry';
import {
  ICompanyFields,
  IWorkProjects,
} from '../../../../../../@types/generated/contentful';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Features/Home/Company/entry/CompanyEntry',
  component: CompanyEntry,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  // variant: { control: 'select', options: ['text', 'outlined', 'contained'] },
  // },
} as ComponentMeta<typeof CompanyEntry>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CompanyEntry> = (args) => (
  // <Box width={600}>
  <CompanyEntry {...args} />
  // </Box>
);

const dummyEntry = {
  fields: {
    title: '精神を病んだ案件',
    joined_at: '2022-06-14T08:28:19.934Z',
  },
} as IWorkProjects;

export const Normal = Template.bind({});

Normal.args = {
  entry: {
    description: 'ソフトハウス的な会社',
    joined_at: '2021-06-14T08:28:19.934Z',
    work_projects: [dummyEntry, dummyEntry],
  } as ICompanyFields,
};

export const withMore3Projects = Template.bind({});

withMore3Projects.args = {
  entry: {
    description: 'ソフトハウス的な会社',
    joined_at: '2021-06-14T08:28:19.934Z',
    work_projects: [dummyEntry, dummyEntry, dummyEntry, dummyEntry, dummyEntry],
  } as ICompanyFields,
};
