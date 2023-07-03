import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SkillSetEntries from '@/features/home/common/entry/collection/SkillSetEntries';
import { ISkillset } from '../../../../../../../@types/generated/contentful';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title:
    'Features/Home/PersonalDevelopment/Modal/Entry/Collection/SkillSetEntries',
  component: SkillSetEntries,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  // variant: { control: 'select', options: ['text', 'outlined', 'contained'] },
  // },
} as ComponentMeta<typeof SkillSetEntries>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SkillSetEntries> = (args) => (
  <SkillSetEntries {...args} />
);

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
  fieldName: '言語',
  entries: [
    {
      fields: {
        img_icon: {
          fields: {
            file: {
              url: 'https://images.ctfassets.net/3uttjuewzfml/3J8strFHPG3gZpadhR2MDT/5efbb38037acd4116b10fd1a81258c19/logo-only.svg',
            },
          },
        },
        name: 'Zenn.dev',
        memo: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
      },
    },
    {
      fields: {
        img_icon: {
          fields: {
            file: {
              url: 'https://images.ctfassets.net/3uttjuewzfml/3J8strFHPG3gZpadhR2MDT/5efbb38037acd4116b10fd1a81258c19/logo-only.svg',
            },
          },
        },
        name: 'Zenn.dev',
        memo: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
      },
    },
    {
      fields: {
        img_icon: {
          fields: {
            file: {
              url: 'https://images.ctfassets.net/3uttjuewzfml/3J8strFHPG3gZpadhR2MDT/5efbb38037acd4116b10fd1a81258c19/logo-only.svg',
            },
          },
        },
        // name: 'Zenn.dev', without skill name
        memo: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
      },
    },
    {
      fields: {
        img_icon: {
          fields: {
            file: {
              url: 'https://images.ctfassets.net/3uttjuewzfml/3J8strFHPG3gZpadhR2MDT/5efbb38037acd4116b10fd1a81258c19/logo-only.svg',
            },
          },
        },
        name: 'Zenn.dev',
        //without skill memo  memo: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
      },
    },
    {
      fields: {
        img_icon: {
          fields: {
            file: {
              url: 'https://images.ctfassets.net/3uttjuewzfml/3J8strFHPG3gZpadhR2MDT/5efbb38037acd4116b10fd1a81258c19/logo-only.svg',
            },
          },
        },
        // name: 'Zenn.dev',
        //without skill memo  memo: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
      },
    },
  ] as ISkillset[],
};

export const WithNoEntries = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithNoEntries.args = {
  fieldName: 'メモ',
  entries: [],
};

export const WithUndefined = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithNoEntries.args = {
  fieldName: 'メモ',
  entries: undefined,
};
