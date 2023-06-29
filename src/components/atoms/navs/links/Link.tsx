import { objSxProps } from '@/types/components/common.type';
import { getSxPropsByVariants } from '@/utils/component';
import { genBorderPropertyVal, genSizingPropertyVal } from '@/utils/style.util';
import {
  Link as MUILink,
  LinkProps as MUILinkProps,
  SxProps,
  Theme,
  useTheme,
} from '@mui/material';
import NextLink, { LinkProps } from 'next/link';
import React, { FC, PropsWithChildren } from 'react';

type LinkCompProps = {
  href: string;
  linkProps?: Omit<LinkProps, 'href'>;
  MUILinkProps?: MUILinkProps;
  variant?: 'normal' | 'buttonLike' | 'buttonLikeOutline';
};

const Link: FC<PropsWithChildren<LinkCompProps>> = ({
  href,
  linkProps,
  MUILinkProps,
  variant,
  children,
}) => {
  const theme = useTheme();

  const linkVariants: objSxProps<Exclude<LinkCompProps['variant'], undefined>> =
    {
      normal: {
        color: theme.palette.common.white,
        bgcolor: theme.palette.primary.main,
        borderRadius: genSizingPropertyVal(16, 'px'),
      },
      buttonLike: {
        color: theme.palette.common.white,
        bgcolor: theme.palette.primary.main,
        borderRadius: genSizingPropertyVal(16, 'px'),
      },
      buttonLikeOutline: {
        color: theme.palette.primary.main,
        bgcolor: theme.palette.common.white,
        borderRadius: genSizingPropertyVal(16, 'px'),
        border: genBorderPropertyVal(theme.palette.primary.main, 'solid', [1]),
      },
    };

  return (
    <MUILink
      underline={
        variant === 'buttonLike' || variant === 'buttonLikeOutline'
          ? 'none'
          : 'always'
      }
      {...MUILinkProps}
      sx={
        variant
          ? ({
              ...getSxPropsByVariants(linkVariants, variant),
              ...MUILinkProps?.sx,
            } as SxProps<Theme>)
          : { ...MUILinkProps?.sx }
      }
      component='span'
    >
      <NextLink
        href={href}
        passHref
        {...linkProps}
        style={{
          color:
            variant === 'buttonLike'
              ? theme.palette.common.white
              : theme.palette.primary.main,
        }}
      >
        {children}
      </NextLink>
    </MUILink>
  );
};

export default Link;
