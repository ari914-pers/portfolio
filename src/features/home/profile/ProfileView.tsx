import LabeledButton from '@/components/atoms/inputs/buttons/LabeledButton';
import Stack from '@/components/atoms/wrappers/Stack';
import BaseCard from '@/components/molecules/surfaces/BaseCard';
import { Avatar } from '@mui/material';
import { identity } from 'lodash';
import { useTranslation } from 'next-i18next';
import React, { FC } from 'react';
import { IProfileFields } from '../../../../@types/generated/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {
  LanguageAbilityContents,
  PREFIX_ANCHOR_MAIL_ADDRESS,
  ProfileTextContents,
  QualificationContents,
} from '@/consts/features/home.const';
import { toOrderGuaranteed } from '@/utils/cmsEntry.util';
import Renderer from '@/components/atoms/display/Renderer';
import StringEntry from '../common/entry/StringEntry';
import ServiceLinkEntry from './entry/ServiceLinkEntry';
import CollectionEntry from './entry/collections/CollectionEntry';
import CollectionEntryRenderer from './entry/collections/CollectionEntryRenderer';
import Container from '@/components/atoms/wrappers/Container';
import dayjs from 'dayjs';

type ProfileViewProps = {
  fields: IProfileFields;
};

const ProfileView: FC<ProfileViewProps> = ({ fields }) => {
  const { t } = useTranslation(['common', 'home']);

  const profileTextFields = toOrderGuaranteed<string, IProfileFields>(
    ProfileTextContents,
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
                fieldVal={
                  key !== 'born_at' ? val : dayjs(val).format('YYYY/MM/DD')
                }
                withLink={
                  key === 'mail_address'
                    ? `${PREFIX_ANCHOR_MAIL_ADDRESS}${fields.mail_address}`
                    : undefined
                }
              />
            )}
          />
        </Container>
        <Container designProps={{}}>
          <CollectionEntry
            fieldName={t('home.profile.qualifications.title', { ns: 'home' })}
            fieldVal={fields.qualifications}
            FieldRenderer={CollectionEntryRenderer}
            content_name='home.profile.qualifications'
            content_order_key={QualificationContents}
          />
          <CollectionEntry
            fieldName={t('home.profile.language_abilities.title', {
              ns: 'home',
            })}
            fieldVal={fields.language_abilities}
            FieldRenderer={CollectionEntryRenderer}
            content_name='home.profile.language_abilities'
            content_order_key={LanguageAbilityContents}
          />
        </Container>
      </Stack>
    </BaseCard>
  );
};

export default ProfileView;
