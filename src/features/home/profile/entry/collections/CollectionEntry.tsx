import React, { FC, PropsWithChildren } from 'react';
import { isArray, isEmpty, toString } from 'lodash';
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
  ICareer,
  IEntry,
  ILanguageAbility,
  IQualification,
} from '../../../../../../@types/generated/contentful';
import { genSizingPropertyVal } from '@/utils/style.util';

type CollectionEnStryProp = {
  fieldName: DefaultTFuncReturn;
  fieldVal: Exclude<IEntry, ICareer>[] | undefined;
  FieldRenderer?: ProfileChildEntriesComp;
  content_name?: string;
  content_order_key: string[];
};

const CollectionEntry: FC<PropsWithChildren<CollectionEnStryProp>> = ({
  fieldName,
  fieldVal,
  FieldRenderer,
  content_name,
  content_order_key,
}) => {
  if (isArray(fieldVal) && !isEmpty(fieldVal)) {
    return (
      <Accordion sx={{ minWidth: genSizingPropertyVal(100, '%') }}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography variant='spanHeading'>{fieldName}&#058;</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List
            entries={fieldVal}
            iteratee={(entry) =>
              FieldRenderer && content_name ? (
                <FieldRenderer
                  collection={entry}
                  content_name_rendered={content_name}
                  content_order_keys={content_order_key}
                  key={toString(fieldName)}
                />
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
