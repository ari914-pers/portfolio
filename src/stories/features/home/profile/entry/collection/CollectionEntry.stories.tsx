import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  ILanguageAbility,
  IQualificationFields,
} from '../../../../../../../@types/generated/contentful';
import CollectionEntry from '@/features/home/profile/entry/collections/CollectionEntry';
import CollectionEntryRenderer from '@/features/home/profile/entry/collections/CollectionEntryRenderer';
import {
  LanguageAbilityContents,
  QualificationContents,
} from '@/consts/features/home.const';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Features/Home/Profile/entry/Collection/CollectionEntry',
  component: CollectionEntry,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  // variant: { control: 'select', options: ['text', 'outlined', 'contained'] },
  // },
} as ComponentMeta<typeof CollectionEntry>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CollectionEntry> = (args) => (
  <CollectionEntry {...args} />
);

export const WithLanguageAbilities = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithLanguageAbilities.args = {
  fieldName: '言語',
  fieldVal: [
    {
      fields: {
        name: '日本語',
        level: '日常生活くらい',
        comment:
          'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
      },
    } as ILanguageAbility,
    {
      fields: {
        name: '日本語',
        level: '日常生活くらい',
        comment:
          'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
      },
    } as ILanguageAbility,
    {
      fields: {
        name: '日本語',
        level: '日常生活くらい',
        comment:
          'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
      },
    } as ILanguageAbility,
  ],
  FieldRenderer: CollectionEntryRenderer,
  content_name: 'home.profile.language_abilities',
  content_order_key: LanguageAbilityContents,
};

export const WithQualifications = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithQualifications.args = {
  fieldName: '保持している資格',
  fieldVal: [
    {
      fields: {
        name: 'TOEIC',
        score: 855,
        obtained_at: '2017年12月',
        description:
          'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
      },
    } as IQualificationFields,
    {
      fields: {
        name: 'TOEIC',
        score: 855,
        obtained_at: '2017年12月',
        description:
          'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
      },
    },
    {
      fields: {
        name: 'TOEIC',
        score: 855,
        obtained_at: '2017年12月',
        description:
          'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
      },
    },
    {
      fields: {
        name: 'TOEIC',
        score: 855,
        obtained_at: '2017年12月',
        description:
          'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
      },
    },
  ] as IQualificationFields[],
  FieldRenderer: CollectionEntryRenderer,
  content_name: 'home.profile.qualifications',
  content_order_key: QualificationContents,
};

export const WithUndefinedFieldVal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithUndefinedFieldVal.args = {
  fieldName: '言語',
  fieldVal: undefined,
  FieldRenderer: CollectionEntryRenderer,
  content_name: 'home.profile.language_abilities',
};

export const WithEmptyFieldVal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithEmptyFieldVal.args = {
  fieldName: '言語',
  fieldVal: [],
  FieldRenderer: CollectionEntryRenderer,
  content_name: 'home.profile.language_abilities',
};
