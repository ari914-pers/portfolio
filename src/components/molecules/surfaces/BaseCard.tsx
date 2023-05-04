import { BoxShadows } from '@/consts/themeConstant';
import { Card, CardActions, CardContent, CardHeader } from '@mui/material';
import React, { FC, PropsWithChildren, ReactNode } from 'react';
import {
  genOneSideSpacingCssProperty,
  genTwoSidesSpacingCssProperty,
} from '@/utils/style.util';

// item spacing: LG
// padding
//shadow

type BaseCardProps = {
  title: string;
  description: string;
  btnAction: ReactNode;
};

const BaseCard: FC<PropsWithChildren<BaseCardProps>> = ({
  title,
  description,
  children,
  btnAction,
}) => {
  return (
    <>
      <Card
        sx={{
          bgcolor: (theme) => theme.palette.background.paper,
          boxShadow: BoxShadows.default,
          maxWidth: '550px',
          p: genTwoSidesSpacingCssProperty('md-lg'),
        }}
      >
        <CardHeader
          title={title}
          titleTypographyProps={{
            variant: 'h2',
            sx: { mb: genOneSideSpacingCssProperty('sm') },
          }}
          subheader={description}
          subheaderTypographyProps={{
            variant: 'body1',
            sx: { color: (theme) => theme.palette.primary.main, opacity: 0.6 },
          }}
        />
        <CardContent>{children}</CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>{btnAction}</CardActions>
      </Card>
    </>
  );
};

export default BaseCard;
