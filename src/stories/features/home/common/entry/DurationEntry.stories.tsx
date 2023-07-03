import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DevDurationEntry from '@/features/home/common/entry/DurationEntry';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Features/Home/Common/Entry/DevDurationEntry',
  component: DevDurationEntry,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    from: { control: 'date' },
    to: { control: 'date' },
  },
} as ComponentMeta<typeof DevDurationEntry>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DevDurationEntry> = (args) => (
  <DevDurationEntry {...args} />
);

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
  // from: '2023-02-14T08:28:19.934Z',
  from: new Date('2023-02-14T08:28:19.934Z'),
  to: new Date('2023-06-14T08:28:19.934Z'),
  fieldName: '開発期間',
};

export const withMoreThanAYear = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
withMoreThanAYear.args = {
  // from: '2023-02-14T08:28:19.934Z',
  from: new Date('2023-02-14T08:28:19.934Z'),
  to: new Date('2024-10-14T08:28:19.934Z'),
  fieldName: '開発期間',
};

export const withCurrentTo = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
withCurrentTo.args = {
  // from: '2023-02-14T08:28:19.934Z',
  from: new Date('2023-02-14T08:28:19.934Z'),
  to: new Date(),
  fieldName: '開発期間',
};
