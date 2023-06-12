import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ServiceLinkEntry from '@/features/home/profile/entry/ServiceLinkEntry';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Features/Home/Profile/entry/ServiceLinkEntry',
  component: ServiceLinkEntry,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  // variant: { control: 'select', options: ['text', 'outlined', 'contained'] },
  // },
} as ComponentMeta<typeof ServiceLinkEntry>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ServiceLinkEntry> = (args) => (
  <ServiceLinkEntry {...args} />
);

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
  fieldVal: [
    {
      fields: {
        url_link: 'https://zenn.dev/ari914_pers',
        image_logo: {
          fields: {
            file: {
              url: 'https://images.ctfassets.net/3uttjuewzfml/3J8strFHPG3gZpadhR2MDT/5efbb38037acd4116b10fd1a81258c19/logo-only.svg',
            },
          },
        },
        name: 'Zenn.dev',
      },
    },
    {
      fields: {
        url_link: 'https://zenn.dev/ari914_pers',
        image_logo: {
          fields: {
            file: {
              url: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg',
            },
          },
        },
        name: 'Zenn.dev',
      },
    },
    {
      fields: {
        url_link: 'https://zenn.dev/ari914_pers',
        image_logo: {
          fields: {
            file: {
              url: 'https://www.vectorlogo.zone/logos/twilio/twilio-icon.svg',
            },
          },
        },
        name: 'Zenn.dev',
      },
    },
  ],
};

export const WithUndefinedFieldVal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithUndefinedFieldVal.args = {
  fieldVal: undefined,
};
