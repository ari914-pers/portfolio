import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@mui/material';
import CollectionEntry from '@/features/home/company/entry/project/modal/entry/CollectionEntry';
import { IResponsiblePhase } from '../../../../../../../../../@types/generated/contentful';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Features/Home/Company/entry/Project/Modal/Entry/CollectionEntry',
  component: CollectionEntry,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  // variant: { control: 'select', options: ['text', 'outlined', 'contained'] },
  // },
} as ComponentMeta<typeof CollectionEntry>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CollectionEntry> = (args) => (
  <Box width={600}>
    <CollectionEntry {...args} />
  </Box>
);

export const Normal = Template.bind({});

Normal.args = {
  entry: {
    fields: {
      title: 'テストテスト',
      note: 'テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト',
    },
  } as IResponsiblePhase,
};

export const withoutTitle = Template.bind({});

withoutTitle.args = {
  entry: {
    fields: {
      note: 'テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト',
    },
  } as IResponsiblePhase,
};

export const withUndefined = Template.bind({});

withUndefined.args = {
  entry: undefined,
};
