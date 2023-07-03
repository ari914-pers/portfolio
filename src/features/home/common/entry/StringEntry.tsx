import React, { FC, PropsWithChildren } from 'react';
import { toString } from 'lodash';
import { DefaultTFuncReturn } from 'i18next';
import { Grid, Typography } from '@mui/material';
import { isAnnotationContent } from '@/utils/feaures/home.util';
import { genTwoSidesSpacingCssProperty } from '@/utils/style.util';
import { Primitive } from '@/types/common.type';
import Link from '@/components/atoms/navs/links/Link';

type ProfileEntryProp = {
  fieldName: DefaultTFuncReturn;
  fieldVal: Primitive;
  withLink?: string;
};

const StringEntry: FC<PropsWithChildren<ProfileEntryProp>> = ({
  fieldName,
  fieldVal,
  withLink,
}) => {
  const rendererRegularString = withLink ? (
    <Link href={withLink}>
      <Typography sx={{ m: genTwoSidesSpacingCssProperty('0-auto') }}>
        {fieldVal}
      </Typography>
    </Link>
  ) : (
    <Typography sx={{ m: genTwoSidesSpacingCssProperty('0-auto') }}>
      {fieldVal}
    </Typography>
  );

  return toString(fieldVal) && fieldName ? (
    <>
      <Grid container>
        <Grid item xs={3}>
          <Typography variant='spanHeading'>{fieldName}&#058;</Typography>
        </Grid>
        <Grid item container xs={9} justifyContent='center' alignItems='center'>
          {!isAnnotationContent(fieldName) ? (
            rendererRegularString
          ) : (
            <Typography variant='body2'>{fieldVal}</Typography>
          )}
        </Grid>
      </Grid>
    </>
  ) : null;
};

export default StringEntry;
