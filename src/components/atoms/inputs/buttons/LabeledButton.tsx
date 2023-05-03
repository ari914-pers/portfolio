import React, { ComponentProps, FC } from 'react';
import Button from '.';
import { Typography } from '@mui/material';

type LabeledButtonProps = {
  buttonProps: ComponentProps<typeof Button>;
  label: string | number;
};

const LabeledButton: FC<LabeledButtonProps> = ({ buttonProps, label }) => {
  return (
    <Button {...buttonProps}>
      <Typography variant='spanRegular'>{label}</Typography>
    </Button>
  );
};

export default LabeledButton;
