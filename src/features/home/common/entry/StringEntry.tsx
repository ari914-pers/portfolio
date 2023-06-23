import React, { FC, PropsWithChildren } from 'react';
import { toString } from 'lodash';
import { DefaultTFuncReturn } from 'i18next';
import { Grid, Typography } from '@mui/material';
import { isAnnotationContent } from '@/utils/feaures/home.util';
import { genTwoSidesSpacingCssProperty } from '@/utils/style.util';
import { Primitive } from '@/types/common.type';

type ProfileEntryProp = {
  fieldName: DefaultTFuncReturn;
  fieldVal: Primitive;
};

const StringEntry: FC<PropsWithChildren<ProfileEntryProp>> = ({
  fieldName,
  fieldVal,
}) => {
  return toString(fieldVal) && fieldName ? (
    <>
      <Grid container>
        <Grid item xs={3}>
          <Typography variant='spanHeading'>{fieldName}&#058;</Typography>
        </Grid>
        <Grid item xs={9} sx={{ display: 'flex', alignItems: 'center' }}>
          {!isAnnotationContent(fieldName) ? (
            <Typography sx={{ m: genTwoSidesSpacingCssProperty('0-auto') }}>
              {fieldVal}
            </Typography>
          ) : (
            <Typography variant='body2'>{fieldVal}</Typography>
          )}
        </Grid>
      </Grid>
    </>
  ) : null;
};

export default StringEntry;
