import React, { ComponentProps, FC, PropsWithChildren } from 'react';
import Button from '.';
import { Typography } from '@mui/material';

type LabeledButtonProps = {
  buttonProps: ComponentProps<typeof Button>;
  // children?: string | number;
};

const LabeledButton: FC<PropsWithChildren<LabeledButtonProps>> = ({
  buttonProps,
  children,
}) => {
  return (
    <Button {...buttonProps}>
      <Typography variant='spanRegular'>{children}</Typography>
    </Button>
  );
};

export default LabeledButton;
