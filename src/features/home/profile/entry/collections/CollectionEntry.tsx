import React, { FC, PropsWithChildren } from 'react';
import { isArray } from 'lodash';
import { DefaultTFuncReturn } from 'i18next';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import List from '@/components/atoms/display/List';
import {
  PROFILE_CONTENT_WITH_CHILDREN,
  ProfileChildEntriesComp,
  ProfileChildEntry,
} from '@/types/features/home.type';
import {
  ILanguageAbility,
  IQualification,
} from '../../../../../../@types/generated/contentful';
import { genSizingPropertyVal } from '@/utils/style.util';

type CollectionEntryProp = {
  fieldName: DefaultTFuncReturn;
  fieldVal: ILanguageAbility[] | IQualification[] | undefined;
  FieldRenderer?: ProfileChildEntriesComp;
  content_name?: PROFILE_CONTENT_WITH_CHILDREN;
};

const CollectionEntry: FC<PropsWithChildren<CollectionEntryProp>> = ({
  fieldName,
  fieldVal,
  FieldRenderer,
  content_name,
}) => {
  if (isArray(fieldVal)) {
    return (
      <Accordion sx={{ minWidth: genSizingPropertyVal(100, '%') }}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography variant='spanHeading'>{fieldName}&#058;</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List<ProfileChildEntry>
            entries={fieldVal}
            iteratee={(entry) =>
              FieldRenderer && content_name ? (
                <FieldRenderer entry={entry} content_name={content_name} />
              ) : null
            }
          />
        </AccordionDetails>
      </Accordion>
    );
  }

  return null;
};

export default CollectionEntry;
