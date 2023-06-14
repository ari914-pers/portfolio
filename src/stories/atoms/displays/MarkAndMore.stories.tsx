import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MarkAndMore from '@/components/atoms/display/MarkAndMore';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atom/Displays/MarkAndMore',
  component: MarkAndMore,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MarkAndMore>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MarkAndMore> = (args) => (
  <MarkAndMore {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
