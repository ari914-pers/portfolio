import React, { FC } from 'react';
import { ISkillsetFields } from '../../../../../../../@types/generated/contentful';
import { Typography } from '@mui/material';
import Stack from '@/components/atoms/wrappers/Stack';

type DevEnvEntrySkillSetEntriesTooltipProps = {
  name: ISkillsetFields['name'];
  memo: ISkillsetFields['memo'];
};

const SkillSetEntriesTooltip: FC<DevEnvEntrySkillSetEntriesTooltipProps> = ({
  name,
  memo,
}) => {
  return name || memo ? (
    <Stack
      designProps={{ twoSidesSpacing: { p: ['xs-xs'] } }}
      direction='column'
    >
      {name && (
        <Typography variant='spanHeading' sx={{ textAlign: 'center' }}>
          {name}
        </Typography>
      )}
      {memo && <Typography variant='spanRegular'>{memo}</Typography>}
    </Stack>
  ) : null;
};

export default SkillSetEntriesTooltip;
