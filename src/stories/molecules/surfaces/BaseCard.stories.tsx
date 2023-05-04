import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BaseCard from '@/components/molecules/surfaces/BaseCard';
import { Paper } from '@mui/material';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Surfaces/BaseCard',
  component: BaseCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof BaseCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BaseCard> = (args) => (
  <BaseCard {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: 'タイトル',
  description:
    '説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。',
  children: (
    <Paper>
      <p>ああああ</p>
      <p>ああああ</p>
      <p>ああああ</p>
      <p>ああああ</p>
    </Paper>
  ),
  btnAction: (
    <button type='button' onClick={(e) => alert(e.timeStamp)}>
      ボタンクリック
    </button>
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
