import React from 'react';
import { isEmpty, isUndefined, some } from 'lodash';
import Container from '@/components/atoms/wrappers/Container';
import StringEntry from '../../../common/entry/StringEntry';
import { toOrderGuaranteed } from '@/utils/cmsEntry.util';
import Renderer from '@/components/atoms/display/Renderer';
import { useTranslation } from 'next-i18next';
import {
  ProfileChildEntriesComp,
  ProfileChildEntriesCompProps,
} from '@/types/features/home.type';
import { Divider } from '@mui/material';
import { genTwoSidesSpacingCssProperty } from '@/utils/style.util';
import { Primitive } from '@/types/common.type';
import { EntryField } from '@/types/cms.type';

const CollectionEntryRenderer: ProfileChildEntriesComp = ({
  collection,
  content_name_rendered,
  content_order_keys,
}: ProfileChildEntriesCompProps) => {
  const { t } = useTranslation(['home']);

  if (isUndefined(collection)) return null;

  const contentFields = toOrderGuaranteed<Primitive, EntryField>(
    content_order_keys,
    collection.fields
  );

  const someFieldHasTruthyVal = some(contentFields, (field) => field[1]);

  return !isEmpty(contentFields) && someFieldHasTruthyVal ? (
    <Container designProps={{}}>
      <Divider sx={{ m: genTwoSidesSpacingCssProperty('md-0') }} />
      <Renderer
        entries={contentFields}
        iteratee={([key, val]) => (
          <StringEntry
            fieldName={t(`${content_name_rendered}.${key}`)}
            fieldVal={val}
          />
        )}
      />
    </Container>
  ) : null;
};

export default CollectionEntryRenderer;
