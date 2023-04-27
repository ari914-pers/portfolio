import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Stack from '@/components/atoms/wrappers/Stack';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atom/Wrappers/Stack',
  component: Stack,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    //designProps['backgroundColor']: { control: 'color' },
    designProps: {
      color: { control: 'color' },
    },
  },
} as ComponentMeta<typeof Stack>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Stack> = (args) => <Stack {...args} />;

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
  spacing: 'sm',
  direction: 'row',
  children: (
    <>
      <button type='button'>momomomo</button>
      <button type='button'>momomomo</button>
      <button type='button'>momomomo</button>
    </>
  ),
};
