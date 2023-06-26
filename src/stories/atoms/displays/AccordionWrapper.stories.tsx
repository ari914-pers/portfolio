import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AccordionWrapper from '@/components/atoms/wrappers/AccordionWrapper';
import useAccordionExpansionControl from '@/hooks/useAccordionExpansionControl';
import { map, toString } from 'lodash';
import { Typography } from '@mui/material';
import { genTwoSidesSpacingCssProperty } from '@/utils/style.util';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atom/Displays/AccordionWrapper',
  component: AccordionWrapper,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AccordionWrapper>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AccordionWrapper> = (args) => {
  const [current, handleChange] = useAccordionExpansionControl();
  return (
    <>
      {map(new Array(4), (_elm, index) => (
        <AccordionWrapper
          {...args}
          currentlyExpanded={current}
          handleExpansionChange={handleChange}
          panelName={toString(index)}
        />
      ))}
    </>
  );
};

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
  fieldName: 'テスト',
  children: 'テストテストテストテストテスト',
};

export const WithElmChild = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithElmChild.args = {
  fieldName: <Typography variant='h4'>テスト</Typography>,
  children: (
    <Typography variant='h6'>テストテストテストテストテスト</Typography>
  ),
};

export const WithStyleProps = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithStyleProps.args = {
  fieldName: 'テスト',
  children: 'テストテストテストテストテスト',
  accordionStyle: {
    accordion: { width: '100px' },
    summary: { bgcolor: (theme) => theme.palette.info.main },
    detail: { p: genTwoSidesSpacingCssProperty('lg-lg') },
  },
};
