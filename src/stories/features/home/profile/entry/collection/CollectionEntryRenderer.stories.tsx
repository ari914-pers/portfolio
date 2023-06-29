import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CollectionEntryRenderer from '@/features/home/profile/entry/collections/CollectionEntryRenderer';
import {
  ILanguageAbility,
  IQualification,
} from '../../../../../../../@types/generated/contentful';
import {
  LanguageAbilityContents,
  QualificationContents,
} from '@/consts/features/home.const';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Features/Home/Profile/entry/Collection/CollectionEntryRenderer',
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
  collection: {
    fields: {
      name: '日本語',
      level: '日常生活くらい',
      comment:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
    },
  } as ILanguageAbility,
  content_name_rendered: 'home.profile.language_abilities',
  content_order_keys: LanguageAbilityContents,
};

export const WithQualifications = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithQualifications.args = {
  collection: {
    fields: {
      name: 'TOEIC',
      score: 855,
      obtained_at: '2017年12月',
      description:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
    },
  } as unknown as IQualification,
  content_name_rendered: 'home.profile.qualifications',
  content_order_keys: QualificationContents,
};

export const WithUndefinedFieldVal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithUndefinedFieldVal.args = {
  collection: undefined,
  content_name_rendered: 'home.profile.language_abilities',
};
