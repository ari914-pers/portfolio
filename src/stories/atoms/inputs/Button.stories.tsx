import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '@/components/atoms/inputs/buttons';
import { Typography } from '@mui/material';
import { genTwoSidesSpacingCssProperty } from '@/utils/style.util';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atom/Inputs/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: { control: 'select', options: ['text', 'outlined', 'contained'] },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
  onClick: () => alert('clicked!'),
  children: <Typography variant='spanRegular'>ボタン</Typography>,
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  onClick: () => alert('clicked!'),
  children: <Typography variant='spanRegular'>ボタン</Typography>,
};

export const SxOverridden = Template.bind({});
SxOverridden.args = {
  onClick: () => alert('clicked!'),
  children: <Typography variant='spanRegular'>ボタン</Typography>,
  MUIButtonProps: { sx: { p: genTwoSidesSpacingCssProperty('lg-xl') } },
};
