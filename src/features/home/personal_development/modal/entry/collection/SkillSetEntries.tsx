import React, { FC } from 'react';
import { ISkillset } from '../../../../../../../@types/generated/contentful';
import { isUndefined, size } from 'lodash';
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
import Stack from '@/components/atoms/wrappers/Stack';
import Renderer from '@/components/atoms/display/Renderer';
import IconBox from '@/components/atoms/wrappers/IconBox';
import { NO_SIZE_CONTENT_COLLECTION } from '@/consts/features/home.const';
import SkillSetEntriesTooltip from './SkillSetEntriesTooltip';

type DevEnvEntryProps = {
  fieldName: DefaultTFuncReturn;
  entries?: ISkillset[];
};

const SkillSetEntries: FC<DevEnvEntryProps> = ({ fieldName, entries }) => {
  return !isUndefined(entries) && size(entries) > NO_SIZE_CONTENT_COLLECTION ? (
    <Accordion sx={{ minWidth: genSizingPropertyVal(100, '%') }}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography variant='spanHeading'>{fieldName}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ p: genTwoSidesSpacingCssProperty('md-md') }}>
        <Stack designProps={{}} direction='row' spacing='md' flexWrap='wrap'>
          <Renderer
            entries={entries}
            iteratee={(entry) =>
              entry.fields.img_icon?.fields.file.url ? (
                <IconBox
                  size='lg'
                  srcURL={new URL(entry.fields.img_icon?.fields.file.url)}
                  tooltipTitle={
                    entry.fields.name || entry.fields.memo ? (
                      <SkillSetEntriesTooltip
                        name={entry.fields.name}
                        memo={entry.fields.memo}
                      />
                    ) : null
                  }
                />
              ) : null
            }
          />
        </Stack>
      </AccordionDetails>
    </Accordion>
  ) : null;
};

export default SkillSetEntries;
