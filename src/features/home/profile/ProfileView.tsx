import LabeledButton from '@/components/atoms/inputs/buttons/LabeledButton';
import Stack from '@/components/atoms/wrappers/Stack';
import BaseCard from '@/components/molecules/surfaces/BaseCard';
import { Avatar } from '@mui/material';
import { identity } from 'lodash';
import { useTranslation } from 'next-i18next';
import React, { FC } from 'react';
import {
  ILanguageAbility,
  IProfileFields,
  IQualification,
} from '../../../../@types/generated/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {
  ProfileTextContents,
  profileContentsWithChildren,
} from '@/consts/features/home.const';
import { toOrderGuaranteed } from '@/utils/cmsEntry.util';
import Renderer from '@/components/atoms/display/Renderer';
import StringEntry from '../common/entry/StringEntry';
import ServiceLinkEntry from './entry/ServiceLinkEntry';
import CollectionEntry from './entry/collections/CollectionEntry';
import CollectionEntryRenderer from './entry/collections/CollectionEntryRenderer';
import Container from '@/components/atoms/wrappers/Container';
import { PROFILE_CONTENT_WITH_CHILDREN } from '@/types/features/home.type';

type ProfileViewProps = {
  fields: IProfileFields;
};

const ProfileView: FC<ProfileViewProps> = ({ fields }) => {
  const { t } = useTranslation(['common', 'home']);

  const profileTextFields = toOrderGuaranteed<string>(
    ProfileTextContents,
    fields
  );

  type T = IQualification[] | ILanguageAbility[];
  const contentsWithChildren = toOrderGuaranteed<T>(
    profileContentsWithChildren,
    fields
  );

  return (
    <BaseCard
      title={fields?.heading_content}
      description={
        fields?.desc_content && documentToReactComponents(fields?.desc_content)
      }
      btnAction={
        <LabeledButton buttonProps={{ onClick: () => identity() }}>
          {t('common.label.btnDetail')}
        </LabeledButton>
      }
    >
      <Stack
        designProps={{ twoSidesSpacing: { p: ['md-0'] } }}
        direction='column'
        spacing='lg'
        justifyContent='center'
        alignItems='center'
      >
        <Avatar
          src={fields?.avatar_image?.fields.file.url}
          sx={{ width: '215px', height: '215px' }}
        />
        <ServiceLinkEntry fieldVal={fields.external_service_links} />
        <Container designProps={{ sizing: { width: [100, '%'] } }}>
          <Renderer
            entries={profileTextFields}
            iteratee={([key, val]) => (
              <StringEntry
                fieldName={t(`home.profile.${key}`, {
                  ns: 'home',
                })}
                fieldVal={val}
              />
            )}
          />
        </Container>
        <Container designProps={{}}>
          <Renderer
            entries={contentsWithChildren}
            iteratee={([key, val]) => (
              <CollectionEntry
                fieldName={t(`home.profile.${key}.title`, {
                  ns: 'home',
                })}
                fieldVal={val}
                content_name={key as PROFILE_CONTENT_WITH_CHILDREN}
                FieldRenderer={CollectionEntryRenderer}
              />
            )}
          />
        </Container>
      </Stack>
    </BaseCard>
  );
};

export default ProfileView;
