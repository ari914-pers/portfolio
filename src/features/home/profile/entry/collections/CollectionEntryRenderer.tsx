import React from 'react';
import { isUndefined, toString } from 'lodash';
import Container from '@/components/atoms/wrappers/Container';
import StringEntry from '../StringEntry';
import { toOrderGuaranteed } from '@/utils/cmsEntry.util';
import {
  LanguageAbilityContents,
  QualificationContents,
} from '@/consts/features/home.const';
import Renderer from '@/components/atoms/display/Renderer';
import { useTranslation } from 'next-i18next';
import {
  ProfileChildEntriesComp,
  ProfileChildEntriesCompProps,
} from '@/types/features/home.type';
import { Divider } from '@mui/material';
import { genTwoSidesSpacingCssProperty } from '@/utils/style.util';

const CollectionEntryRenderer: ProfileChildEntriesComp = ({
  entry,
  content_name,
}: ProfileChildEntriesCompProps) => {
  const { t } = useTranslation(['home']);

  if (isUndefined(entry)) return null;

  const contentFields = toOrderGuaranteed(
    content_name === 'language_abilities'
      ? LanguageAbilityContents
      : QualificationContents,
    entry?.fields
  );

  return (
    <Container designProps={{}}>
      <Divider light sx={{ m: genTwoSidesSpacingCssProperty('md-0') }} />
      <Renderer
        entries={contentFields}
        iteratee={([key, val]) => (
          <StringEntry
            fieldName={t(`home.profile.${content_name}.${key}`)}
            fieldVal={toString(val)}
          />
        )}
      />
    </Container>
  );
};

export default CollectionEntryRenderer;
