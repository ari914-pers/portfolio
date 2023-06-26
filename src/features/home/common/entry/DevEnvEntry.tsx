import React, { FC } from 'react';
import {
  IDevelopEnvFields,
  ISkillset,
} from '../../../../../@types/generated/contentful';
import { isUndefined } from 'lodash';
import {
  genSizingPropertyVal,
  genTwoSidesSpacingCssProperty,
} from '@/utils/style.util';
import { ExpandMore } from '@mui/icons-material';
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from '@mui/material';
import { DefaultTFuncReturn } from 'i18next';
import { toOrderGuaranteed } from '@/utils/cmsEntry.util';
import { personalDevelopmentModalDevEnvEntries } from '@/consts/features/home.const';
import Renderer from '@/components/atoms/display/Renderer';
import { useTranslation } from 'react-i18next';
import DocumentEntry from './DocumentEntry';
import SkillSetEntries from './collection/SkillSetEntries';

type DevEnvEntryProps = {
  fieldName: DefaultTFuncReturn;
  entry?: IDevelopEnvFields;
};

const DevEnvEntry: FC<DevEnvEntryProps> = ({ fieldName, entry }) => {
  const { t } = useTranslation(['home']);

  const entriesOrdered = entry
    ? toOrderGuaranteed<ISkillset[]>(
        personalDevelopmentModalDevEnvEntries,
        entry
      )
    : undefined;

  return !isUndefined(entriesOrdered) || isUndefined(entry) ? (
    <Accordion sx={{ minWidth: genSizingPropertyVal(100, '%') }}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography variant='spanHeading'>{fieldName}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ p: genTwoSidesSpacingCssProperty('md-md') }}>
        {!isUndefined(entriesOrdered) && (
          <Renderer
            entries={entriesOrdered}
            iteratee={([entryName, val]) => (
              <SkillSetEntries
                fieldName={t(`home.development_environment.${entryName}`)}
                entries={val}
              />
            )}
          />
        )}
        {!isUndefined(entry) && (
          <DocumentEntry
            fieldName={t('home.development_environment.os')}
            fieldVal={entry.os}
          />
        )}
      </AccordionDetails>
    </Accordion>
  ) : null;
};

export default DevEnvEntry;
