import React, { ComponentProps, FC, ReactNode } from 'react';
import Stack from '../../wrappers/Stack';
import { Typography } from '@mui/material';
import Link from './Link';

type LabeledLinkProps = {
  linkProps: ComponentProps<typeof Link>;
  stackProps: ComponentProps<typeof Stack>;
  label: string | number;
  iconPrepended?: ReactNode;
  iconAppended?: ReactNode;
};

const LabeledLink: FC<LabeledLinkProps> = ({
  linkProps,
  stackProps,
  label,
  iconPrepended,
  iconAppended,
}) => {
  return (
    <Link {...linkProps}>
      <Stack direction='row' alignItems='center' spacing='sm' {...stackProps}>
        <>
          {iconPrepended}
          <Typography variant='spanRegular'>{label}</Typography>
          {iconAppended}
        </>
      </Stack>
    </Link>
  );
};

export default LabeledLink;
