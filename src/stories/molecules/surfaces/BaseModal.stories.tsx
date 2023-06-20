import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Paper } from '@mui/material';
import BaseModal from '@/components/molecules/surfaces/BaseModal';
import useModalControl from '@/hooks/useModalControl';
import Container from '@/components/atoms/wrappers/Container';
import Button from '@/components/atoms/inputs/buttons';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Surfaces/BaseModal',
  component: BaseModal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof BaseModal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BaseModal> = (args) => {
  const { isOpen, handleOpen, handleClose } = useModalControl();

  return (
    <Container designProps={{}}>
      <Button onClick={handleOpen}>click here</Button>
      <BaseModal {...args} isOpen={isOpen} handleClose={handleClose} />
    </Container>
  );
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  modalTitle: '個人開発',
  children: (
    <Paper>
      <p>ああああ</p>
      <p>ああああ</p>
      <p>ああああ</p>
      <p>ああああ</p>
    </Paper>
  ),
};

export const withClosed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
withClosed.args = {
  modalTitle: '個人開発',
  children: (
    <Paper>
      <p>ああああ</p>
      <p>ああああ</p>
      <p>ああああ</p>
      <p>ああああ</p>
    </Paper>
  ),
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
