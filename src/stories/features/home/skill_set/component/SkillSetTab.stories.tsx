import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  ICategorySkill,
  ISkillsetFields,
} from '../../../../../../@types/generated/contentful';
import SkillSetTab from '@/features/home/skill_set/component/SkillSetTab';
import { SkillSetContext } from '@/features/home/skill_set/SkillSetView';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Features/Home/SkillSet/Component/SkillSetTab',
  component: SkillSetTab,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  // variant: { control: 'select', options: ['text', 'outlined', 'contained'] },
  // },
} as ComponentMeta<typeof SkillSetTab>;

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

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SkillSetTab> = (args) => (
  <SkillSetContext.Provider
    value={{
      entries: [
        dummyEntryLang,
        dummyEntryLang,
        dummyEntryLib,
        dummyEntryLang,
        dummyEntryLib,
      ] as ISkillsetFields[],
    }}
  >
    <SkillSetTab {...args} />
  </SkillSetContext.Provider>
);

export const Normal = Template.bind({});

export const withMoreThan3Entries = Template.bind({});

withMoreThan3Entries.args = {
  entries: [
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
