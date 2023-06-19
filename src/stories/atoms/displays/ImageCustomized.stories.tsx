import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ImageCustomized from '@/components/atoms/display/ImageCustomized';
import { Asset } from 'contentful';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atom/Displays/ImageCustomized',
  component: ImageCustomized,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ImageCustomized>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ImageCustomized> = (args) => (
  <ImageCustomized {...args} />
);

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
  width: [50, '%'],
  height: [200],
  imgAsset: {
    fields: {
      file: {
        url: 'https://images.ctfassets.net/3uttjuewzfml/h23mxYg3DmhuZ3eXihvfi/019de84907641e80f346f65b1275e07f/____________________________2023-03-10_192433.png?h=250',
      },
    },
  } as Asset,
  isBiggerNoImg: false,
};

export const withFailSafe = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
withFailSafe.args = {
  width: [50, '%'],
  height: [200],
  imgAsset: {
    fields: {
      file: {
        url: '',
      },
    },
  } as Asset,
  isBiggerNoImg: true,
};
