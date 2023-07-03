import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Container from '@/components/atoms/wrappers/Container';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atom/Wrappers/Container',
  component: Container,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    //designProps['backgroundColor']: { control: 'color' },
  },
} as ComponentMeta<typeof Container>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
);

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
