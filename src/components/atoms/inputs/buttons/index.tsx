import React, { FC, MouseEventHandler, PropsWithChildren } from 'react';
import MUIButton, { ButtonProps as MUIButtonProps } from '@mui/material/Button';

type ButtonProps = {
  MUIButtonProps?: MUIButtonProps;
  variant?: MUIButtonProps['variant'];
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  MUIButtonProps,
  variant,
  onClick,
  children,
}) => (
  <MUIButton
    variant={variant ?? 'contained'}
    sx={{
      borderRadius: (theme) => theme.shape.borderRadius,
    }}
    type='button'
    onClick={onClick}
    {...MUIButtonProps}
  >
    {children}
  </MUIButton>
);

export default Button;
