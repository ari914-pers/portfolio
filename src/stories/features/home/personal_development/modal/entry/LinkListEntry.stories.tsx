import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LinkListEntry from '@/features/home/personal_development/modal/entry/LinkListEntry';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Features/Home/PersonalDevelopment/Modal/Entry/LinkListEntry',
  component: LinkListEntry,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof LinkListEntry>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LinkListEntry> = (args) => (
  <LinkListEntry {...args} />
);

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
  linkGithub: 'https://github.com/ari914-pers/portfolio',
  linkZenn:
    'https://zenn.dev/morinokami/books/learning-patterns-1/viewer/forward',
};

export const withEmptyEntry = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
withEmptyEntry.args = {
  linkGithub: 'https://github.com/ari914-pers/portfolio',
};
