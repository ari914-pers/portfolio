import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Box from '../../../components/atoms/wrappers/Box';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atom/Wrappers/Box',
  component: Box,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    //designProps['backgroundColor']: { control: 'color' },
  },
} as ComponentMeta<typeof Box>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  // primary: true,
  // label: 'Button',
  designProps: {
    color: 'red',
    backgroundColor: 'green',
    sizing: {
      width: [200, 'px'],
    },
  },
  children: <button type='button'>momomomo</button>,
};

export const Secondary = Template.bind({});
Secondary.args = {
  // label: 'Button',
  designProps: {
    color: 'red',
    backgroundColor: 'green',
    sizing: {
      width: [200, 'px'],
    },
  },
  children: <button type='button'>momomomo</button>,
};

export const Large = Template.bind({});
Large.args = {
  // size: 'large',
  // label: 'Button',
  designProps: {
    color: 'red',
    backgroundColor: 'green',
    sizing: {
      width: [200, 'px'],
    },
  },
  children: <button type='button'>momomomo</button>,
};

export const Small = Template.bind({});
Small.args = {
  // size: 'small',
  // label: 'Button',
  designProps: {
    color: 'red',
    backgroundColor: 'green',
    sizing: {
      width: [200, 'px'],
    },
    objectFit: 'fill',
  },
  children: <button type='button'>momomomo</button>,
};
