import React, { FC } from 'react';
// eslint-disable-next-line import/no-unresolved
import Vectorandmore from '../../../../public/images/Vectorandmore.svg';
import Stack from '../wrappers/Stack';

const MarkAndMore: FC = () => {
  return (
    <Stack
      designProps={{ twoSidesSpacing: { m: ['md-0'] } }}
      direction='row'
      justifyContent='center'
    >
      <Vectorandmore />
    </Stack>
  );
};

export default MarkAndMore;
