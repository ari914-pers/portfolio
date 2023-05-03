import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LabeledButton from '@/components/atoms/inputs/buttons/LabeledButton';
import { AccessAlarm } from '@mui/icons-material';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atom/Inputs/LabeledButton',
  component: LabeledButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // variant: { control: 'select', options: ['text', 'outlined', 'contained'] },
  },
} as ComponentMeta<typeof LabeledButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LabeledButton> = (args) => (
  <LabeledButton {...args} />
);

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
  buttonProps: {
    onClick: () => alert('Clicked!'),
  },
  label: 'Labeled Button',
};

export const WithPrependedIcon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithPrependedIcon.args = {
  buttonProps: {
    onClick: () => alert('Clicked!'),
    MUIButtonProps: {
      startIcon: <AccessAlarm />,
    },
  },
  label: 'ボタンのラベル',
};

export const WithAppendedIcon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithAppendedIcon.args = {
  buttonProps: {
    onClick: () => alert('Clicked!'),
    MUIButtonProps: {
      endIcon: <AccessAlarm />,
    },
  },
  label: 'ボタンのラベル',
};

// export const Outlined = Template.bind({});
// Outlined.args = {
// variant: 'outlined',
// onClick: () => alert('clicked!'),
// children: <Typography variant='spanRegular'>ボタン</Typography>,
// };
//
// export const SxOverridden = Template.bind({});
// SxOverridden.args = {
// onClick: () => alert('clicked!'),
// children: <Typography variant='spanRegular'>ボタン</Typography>,
// MUIButtonProps: { sx: { p: genTwoSidesSpacingCssProperty('lg-xl') } },
// };
