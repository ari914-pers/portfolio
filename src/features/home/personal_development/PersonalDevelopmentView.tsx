import React, { FC, PropsWithChildren } from 'react';
import { IPersonalDevelopmentFields } from '../../../../@types/generated/contentful';
import BaseRendererForCollectionContents from '../common/BaseRendererForCollectionContents';
import PersonalDevelopmentEntry from './entry/PersonalDevelopmentEntry';
import { identity } from 'lodash';
import { useTranslation } from 'next-i18next';

type PersonalDevelopmentViewProps = {
  personalDevelopment: IPersonalDevelopmentFields[];
};

const PersonalDevelopmentView: FC<
  PropsWithChildren<PersonalDevelopmentViewProps>
> = ({ personalDevelopment }) => {
  const { t } = useTranslation(['home']);

  return (
    <BaseRendererForCollectionContents
      collection={personalDevelopment}
      isRenderedWithCard
      cardTitle={t('home.personal_development.title')}
      cardDescription={t('home.personal_development.description')}
      cardBtnActionClickHandler={identity}
      EntryRenderer={PersonalDevelopmentEntry}
      itemSpacing='md'
    />
  );
};

export default PersonalDevelopmentView;
