import {
  genSizingPropertyVal,
  genTwoSidesSpacingCssProperty,
} from '@/utils/style.util';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { ExpandMore } from '@mui/icons-material';
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from '@mui/material';
import { DefaultTFuncReturn } from 'i18next';
import { isString, isUndefined } from 'lodash';
import { Document } from '@contentful/rich-text-types';
import React, { FC, PropsWithChildren } from 'react';

type DocumentEntryProps = {
  fieldName: DefaultTFuncReturn;
  fieldVal?: Document | string;
};

const DocumentEntry: FC<PropsWithChildren<DocumentEntryProps>> = ({
  fieldName,
  fieldVal,
}) => {
  return !isUndefined(fieldVal) ? (
    <Accordion sx={{ minWidth: genSizingPropertyVal(100, '%') }}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography variant='spanHeading'>{fieldName}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ p: genTwoSidesSpacingCssProperty('md-md') }}>
        {isString(fieldVal) ? (
          <span>{fieldVal}</span>
        ) : (
          documentToReactComponents(fieldVal)
        )}
      </AccordionDetails>
    </Accordion>
  ) : null;
};

export default DocumentEntry;
