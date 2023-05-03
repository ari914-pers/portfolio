import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Typography } from '@mui/material';
import { genTwoSidesSpacingCssProperty } from '@/utils/style.util';
import Link from '@/components/atoms/navs/links/Link';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atom/Navs/Link',
  component: Link,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      control: 'select',
      options: ['normal', 'buttonLike', 'buttonLikeOutline'],
    },
  },
} as ComponentMeta<typeof Link>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
  href: '#',
  children: <Typography variant='spanRegular'>ボタン</Typography>,
};

export const Outlined = Template.bind({});
Outlined.args = {
  href: '#',
  variant: 'buttonLikeOutline',
  children: <Typography variant='spanRegular'>ボタン</Typography>,
};

export const ButtonLike = Template.bind({});
ButtonLike.args = {
  href: '#',
  variant: 'buttonLike',
  children: <Typography variant='spanRegular'>ボタン</Typography>,
};

export const SxOverridden = Template.bind({});
SxOverridden.args = {
  href: '#',
  children: (
    <Typography variant='spanRegular' sx={{ textDecoration: 'none' }}>
      ボタン
    </Typography>
  ),
  MUILinkProps: {
    sx: { p: genTwoSidesSpacingCssProperty('lg-xl'), textDecoration: 'none' },
    underline: 'none',
  },
};

export const NextLinkPropsOverridden = Template.bind({});
NextLinkPropsOverridden.args = {
  href: '#',
  children: <Typography variant='spanRegular'>ボタン</Typography>,
  linkProps: { scroll: false },
};
