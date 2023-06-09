import { BoxShadows } from '@/consts/themeConstant';
import { Card, CardActions, CardContent, CardHeader } from '@mui/material';
import React, { FC, PropsWithChildren } from 'react';
import {
  genOneSideSpacingCssProperty,
  genTwoSidesSpacingCssProperty,
} from '@/utils/style.util';
import { BaseCardProps } from '@/types/components/common.type';
import { usePathname } from 'next/navigation';

// item spacing: LG
// padding
//shadow

const BaseCard: FC<PropsWithChildren<BaseCardProps>> = ({
  title,
  description,
  children,
  btnAction,
  id,
}) => {
  const path = usePathname();
  return (
    <Card
      sx={{
        bgcolor: (theme) => theme.palette.background.paper,
        boxShadow: BoxShadows.default,
        maxWidth: '550px',
        p: genTwoSidesSpacingCssProperty('sm-md'),
      }}
      id={id}
    >
      <CardHeader
        title={title}
        titleTypographyProps={{
          variant: 'h2',
          sx: { mb: genOneSideSpacingCssProperty('sm') },
        }}
        subheader={description}
        subheaderTypographyProps={{
          variant: 'body2',
          // sx: { color: (theme) => theme.palette.primary.main, opacity: 0.6 },
        }}
      />
      <CardContent>{children}</CardContent>
      {path === '/' ? (
        <CardActions sx={{ justifyContent: 'center' }}>{btnAction}</CardActions>
      ) : null}
    </Card>
  );
};

export default BaseCard;
