import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SkillSetEntriesTooltip from '@/features/home/common/entry/collection/SkillSetEntriesTooltip';
import { Box, Tooltip } from '@mui/material';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title:
    'Features/Home/PersonalDevelopment/Modal/Entry/Collection/SkillSetEntriesTooltip',
  component: SkillSetEntriesTooltip,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  // variant: { control: 'select', options: ['text', 'outlined', 'contained'] },
  // },
} as ComponentMeta<typeof SkillSetEntriesTooltip>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SkillSetEntriesTooltip> = (args) => (
  <Tooltip title={<SkillSetEntriesTooltip {...args} />}>
    <Box sx={{ bgcolor: 'red' }}>TEST</Box>
  </Tooltip>
);

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
  name: 'Zenn.dev',
  memo: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
};

export const withoutName = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
withoutName.args = {
  name: 'Zenn.dev',
};

export const WithoutMemo = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithoutMemo.args = {
  name: 'メモ',
};

export const WithNothing = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithNothing.args = {};
