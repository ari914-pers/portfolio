import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CollectionEntryRenderer from '@/features/home/profile/entry/collections/CollectionEntryRenderer';
import {
  ILanguageAbility,
  IQualification,
} from '../../../../../../../@types/generated/contentful';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Features/Home/Profile/entry/CollectionEntryRenderer',
  component: CollectionEntryRenderer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  // variant: { control: 'select', options: ['text', 'outlined', 'contained'] },
  // },
} as ComponentMeta<typeof CollectionEntryRenderer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CollectionEntryRenderer> = (args) => (
  <CollectionEntryRenderer {...args} />
);

export const WithLanguageAbilities = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithLanguageAbilities.args = {
  entry: {
    fields: {
      name: '日本語',
      level: '日常生活くらい',
      comment:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
    },
  } as ILanguageAbility,
  content_name: 'language_abilities',
};

export const WithQualifications = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithQualifications.args = {
  entry: {
    fields: {
      name: 'TOEIC',
      score: 855,
      obtained_at: '2017年12月',
      description:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
    },
  } as IQualification,
  content_name: 'qualifications',
};

export const WithUndefinedFieldVal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithUndefinedFieldVal.args = {
  entry: undefined,
  content_name: 'language_abilities',
};
