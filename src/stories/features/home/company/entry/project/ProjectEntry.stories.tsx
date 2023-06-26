import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@mui/material';
import { IWorkProjects } from '../../../../../../../@types/generated/contentful';
import ProjectEntry from '@/features/home/company/entry/project/ProjectEntry';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Features/Home/Company/entry/Project/ProjectEntry',
  component: ProjectEntry,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  // variant: { control: 'select', options: ['text', 'outlined', 'contained'] },
  // },
} as ComponentMeta<typeof ProjectEntry>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProjectEntry> = (args) => (
  <Box width={600}>
    <ProjectEntry {...args} />
  </Box>
);

export const Normal = Template.bind({});

Normal.args = {
  entry: {
    fields: {
      title: '精神を病んだ案件',
      joined_at: '2022-06-14T08:28:19.934Z',
    },
  } as IWorkProjects,
};

export const withoutTitle = Template.bind({});

withoutTitle.args = {
  entry: {
    fields: {
      // title: '精神を病んだ案件',
      joined_at: '2022-06-14T08:28:19.934Z',
    },
  } as IWorkProjects,
};
