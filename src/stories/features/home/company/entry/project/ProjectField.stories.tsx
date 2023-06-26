import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@mui/material';
import { IWorkProjects } from '../../../../../../../@types/generated/contentful';
import ProjectField from '@/features/home/company/entry/project/ProjectField';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Features/Home/Company/entry/Project/ProjectField',
  component: ProjectField,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  // variant: { control: 'select', options: ['text', 'outlined', 'contained'] },
  // },
} as ComponentMeta<typeof ProjectField>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProjectField> = (args) => (
  <Box width={600}>
    <ProjectField {...args} />
  </Box>
);

const dummyEntry = {
  fields: {
    title: '精神を病んだ案件',
    joined_at: '2022-06-14T08:28:19.934Z',
  },
} as IWorkProjects;

export const Normal = Template.bind({});

Normal.args = {
  projects: [dummyEntry, dummyEntry] as IWorkProjects[],
};

export const withMoreThan3Entries = Template.bind({});

withMoreThan3Entries.args = {
  projects: [
    dummyEntry,
    dummyEntry,
    dummyEntry,
    dummyEntry,
    dummyEntry,
  ] as IWorkProjects[],
};

export const withEmptyEntry = Template.bind({});

withEmptyEntry.args = { projects: [] };
