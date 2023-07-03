import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AccessAlarm } from '@mui/icons-material';
import LabeledLink from '@/components/atoms/navs/links/LabeledLink';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atom/Navs/LabeledLink',
  component: LabeledLink,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // variant: { control: 'select', options: ['text', 'outlined', 'contained'] },
  },
} as ComponentMeta<typeof LabeledLink>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LabeledLink> = (args) => (
  <LabeledLink {...args} />
);

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
  linkProps: {
    href: '#',
    variant: 'buttonLikeOutline',
  },
  stackProps: {
    designProps: {},
  },
  label: 'リンクのラベル',
};

export const WithPrependedIcon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithPrependedIcon.args = {
  linkProps: {
    href: '#',
  },
  label: 'ボタンのラベル',
  stackProps: {
    designProps: { color: 'red' },
  },
  iconPrepended: <AccessAlarm />,
};

export const WithAppendedIcon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithAppendedIcon.args = {
  linkProps: {
    href: '#',
    variant: 'buttonLike',
  },
  label: 'ボタンのラベル',
  stackProps: {
    designProps: {},
  },
  iconAppended: <AccessAlarm />,
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
