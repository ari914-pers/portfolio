import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box, Typography } from '@mui/material';
import Header from '@/components/molecules/surfaces/Header';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Surfaces/Header',
  component: Header,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Header>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Header> = (args) => (
  <Box width={'100vw'} height={'100vh'}>
    <Header {...args} />
    <Box>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed incidunt ut
        labore et dolore magna aliqua.Ut enim ad veniam, quis nostrum
        exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
        commodi consequatur.Quis aute iure reprehenderit in in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur.Excepteur sint obcaecat
        cupiditat non proident, sunt sunt sunt sunt in culpa qui officia
        deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
        consectetur adipisci elit, sed incidunt ut labore et dolore magna
        aliqua.Ut enim ad veniam, quis nostrum exercitationem ullam corporis
        suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.Quis aute
        iure reprehenderit in in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur.Excepteur sint obcaecat cupiditat non proident, sunt sunt
        sunt sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed incidunt ut
        labore et dolore magna aliqua.Ut enim ad veniam, quis nostrum
        exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
        commodi consequatur.Quis aute iure reprehenderit in in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur.Excepteur sint obcaecat
        cupiditat non proident, sunt sunt sunt sunt in culpa qui officia
        deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
        consectetur adipisci elit, sed incidunt ut labore et dolore magna
        aliqua.Ut enim ad veniam, quis nostrum exercitationem ullam corporis
        suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.Quis aute
        iure reprehenderit in in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur.Excepteur sint obcaecat cupiditat non proident, sunt sunt
        sunt sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Typography>
    </Box>
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
