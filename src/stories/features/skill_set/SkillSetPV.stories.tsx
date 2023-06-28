import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SkillSetTab from '@/features/home/skill_set/component/SkillSetTab';
import SkillSetPV from '@/features/skill_set/SkillSetPageView';
import LayoutRegular from '@/components/layout/LayoutRegular';
import {
  ISkillsetFields,
  ICategorySkill,
} from '../../../../@types/generated/contentful';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Features/SkillSet/SkillSetPV',
  component: SkillSetPV,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  // variant: { control: 'select', options: ['text', 'outlined', 'contained'] },
  // },
} as ComponentMeta<typeof SkillSetPV>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SkillSetPV> = (args) => (
  <LayoutRegular>
    <SkillSetPV {...args}>
      <SkillSetTab isUsedOnHome={false} />
    </SkillSetPV>
  </LayoutRegular>
);

const dummyEntryLang = {
  name: 'JavaScript',
  memo: 'Webアプリを中心に世界を支配する言語',
  period_work_experience: '2年3か月',
  proficiency_percentage: 40,
  period_develop_experience: '2年3か月',
  degree_interest: '中',
  category: {
    fields: {
      title: '言語',
    },
  },
  img_icon: {
    fields: {
      file: {
        url: 'https://camo.qiitausercontent.com/61a10cee96e1d66a4d7c5304ddce840b15e88200/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313032323030312f35313338643231372d393938372d393430362d616662382d3562306131346563393862352e706e67',
      },
    },
  },
} as ISkillsetFields;

const dummyEntryLib: ISkillsetFields = {
  ...dummyEntryLang,
  category: {
    fields: { title: 'ライブラリ・フレームワーク' },
  } as ICategorySkill,
};

export const Normal = Template.bind({});

Normal.args = {
  skillSets: [
    dummyEntryLang,
    dummyEntryLang,
    dummyEntryLib,
    dummyEntryLang,
    dummyEntryLib,
  ] as ISkillsetFields[],
};

export const withMoreThan3Entries = Template.bind({});

withMoreThan3Entries.args = {
  skillSets: [
    dummyEntryLang,
    dummyEntryLang,
    dummyEntryLib,
    dummyEntryLang,
    dummyEntryLib,
    dummyEntryLang,
    dummyEntryLang,
    dummyEntryLang,
    dummyEntryLang,
  ] as ISkillsetFields[],
};
