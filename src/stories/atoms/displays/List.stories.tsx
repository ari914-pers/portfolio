import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import List from '@/components/atoms/display/List';
import { ICategoryGoalFields } from '../../../../@types/generated/contentful';
import { entries } from 'lodash';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atom/Displays/List',
  component: List,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof List>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof List<ICategoryGoalFields>> = (args) => (
  <List {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  listProps: {
    dense: false,
    sx: { bgcolor: (theme) => theme.palette.error.main },
  },
  entries: [
    { title: '項目1', number_sort: 5 },
    { title: '項目1', number_sort: 7 },
    { title: '項目1', number_sort: 9 },
  ],
  iteratee: (entry, index) => (
    <div style={{ border: '1px solid black' }}>
      <p>
        {entry.number_sort} : {entry.title} : {index}
      </p>
    </div>
  ),
};

export const DenseAndPaddingLess = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DenseAndPaddingLess.args = {
  listProps: {
    dense: false,
    sx: {
      bgcolor: (theme) => theme.palette.success.main,
      color: (theme) => theme.palette.common.white,
    },
  },
  entries: [
    { title: '項目1', number_sort: 5 },
    { title: '項目1', number_sort: 7 },
    { title: '項目1', number_sort: 9 },
  ],
  iteratee: (entry, index) => (
    <div style={{ border: '1px solid black' }}>
      <p>
        {entry.number_sort} : {entry.title} : {index}
      </p>
    </div>
  ),
};

export const WithProcessFunc = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithProcessFunc.args = {
  listProps: {
    dense: false,
    sx: {
      bgcolor: (theme) => theme.palette.primary.main,
      color: (theme) => theme.palette.common.white,
    },
  },
  entries: [
    { title: '項目1', number_sort: 5 },
    { title: '項目1', number_sort: 7 },
    { title: '項目1', number_sort: 9 },
  ],
  iteratee: (entry, index) => (
    <div style={{ border: '1px solid black' }}>
      <p>
        {entry.number_sort} : {entry.title} : {index}
      </p>
    </div>
  ),
  processEntries: (entries) =>
    entries.filter((entry) =>
      entry.number_sort ? entry.number_sort > 6 : false
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
