import React, { FC, PropsWithChildren } from 'react';
import { IPersonalDevelopmentFields } from '../../../../@types/generated/contentful';
import BaseRendererForCollectionContents from '../common/BaseRendererForCollectionContents';
import PersonalDevelopmentEntry from './entry/PersonalDevelopmentEntry';
import { sortBy } from 'lodash';
import { useTranslation } from 'next-i18next';
import usePageTransition from '@/hooks/usePageTransition';

type PersonalDevelopmentViewProps = {
  personalDevelopment: IPersonalDevelopmentFields[];
};

const PersonalDevelopmentView: FC<
  PropsWithChildren<PersonalDevelopmentViewProps>
> = ({ personalDevelopment }) => {
  const { t } = useTranslation(['home']);
  const [handleClick] = usePageTransition('/personal_development');

  return (
    <BaseRendererForCollectionContents
      collection={personalDevelopment}
      isRenderedWithCard
      cardTitle={t('home.personal_development.title')}
      cardDescription={t('home.personal_development.description')}
      cardBtnActionClickHandler={handleClick}
      EntryRenderer={PersonalDevelopmentEntry}
      itemSpacing='md'
      processFunc={(entries) => sortBy(entries, (entry) => entry.started_at)}
      id='#PD'
    />
  );
};

export default PersonalDevelopmentView;
