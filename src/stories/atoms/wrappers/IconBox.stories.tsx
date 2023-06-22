import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import IconBox from '@/components/atoms/wrappers/IconBox';
import { Dimensions } from '@/consts/themeConstant';
import { keys } from 'lodash';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atom/Wrappers/IconBox',
  component: IconBox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: { control: 'select', options: keys(Dimensions) },
  },
} as ComponentMeta<typeof IconBox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IconBox> = (args) => (
  <IconBox {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  size: 'md',
  srcURL: new URL(
    'https://images.ctfassets.net/3uttjuewzfml/3J8strFHPG3gZpadhR2MDT/5efbb38037acd4116b10fd1a81258c19/logo-only.svg'
  ),
};

export const withToolTip = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
withToolTip.args = {
  size: 'md',
  srcURL: new URL(
    'https://images.ctfassets.net/3uttjuewzfml/3J8strFHPG3gZpadhR2MDT/5efbb38037acd4116b10fd1a81258c19/logo-only.svg'
  ),
  tooltipTitle: 'ツールチップタイトル',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
// label: 'Button',
// };
//
// export const Large = Template.bind({});
// Large.args = {
// size: 'large',
// label: 'Button',
// };
//
// export const Small = Template.bind({});
// Small.args = {
// size: 'small',
// label: 'Button',
// };
