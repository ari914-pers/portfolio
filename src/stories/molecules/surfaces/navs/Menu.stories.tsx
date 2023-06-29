import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box, IconButton } from '@mui/material';
import Menu from '@/components/molecules/nav/Menu';
import useMenuControl from '@/hooks/useMenuControl';
import { MenuBook } from '@mui/icons-material';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Navs/Menu',
  component: Menu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Menu>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Menu> = (args) => {
  const menuProps = useMenuControl();

  return (
    <Box width='100vw' height='100vh'>
      <Menu {...args} {...menuProps} />
    </Box>
  );
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {};

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
