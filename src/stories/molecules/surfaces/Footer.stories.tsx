import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@mui/material';
import Footer from '@/components/molecules/surfaces/Footer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Surfaces/Footer',
  component: Footer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Footer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Footer> = (args) => (
  <Box width='100vw' height='100vh'>
    <Footer {...args} />
  </Box>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};

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
