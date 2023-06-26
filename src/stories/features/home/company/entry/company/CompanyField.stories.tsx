import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@mui/material';
import CompanyField from '@/features/home/company/entry/company/CompanyField';
import { ICompanyFields } from '../../../../../../../@types/generated/contentful';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Features/Home/Company/entry/Company/CompanyField',
  component: CompanyField,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  // variant: { control: 'select', options: ['text', 'outlined', 'contained'] },
  // },
} as ComponentMeta<typeof CompanyField>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CompanyField> = (args) => (
  <Box width={600}>
    <CompanyField {...args} />
  </Box>
);

export const Normal = Template.bind({});

Normal.args = {
  company: {
    description: 'ソフトハウス的な会社',
  } as ICompanyFields,
};

export const withoutDescription = Template.bind({});

withoutDescription.args = {
  company: {
    description: '',
  } as ICompanyFields,
};
