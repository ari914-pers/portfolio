import React, { FC, PropsWithChildren } from 'react';
import { IFaqFields } from '../../../../@types/generated/contentful';
import { useTranslation } from 'next-i18next';
import FaqEntry from './entry/FaqEntry';
import { identity } from 'lodash';
import BaseRendererForCollectionContents from '../common/BaseRendererForCollectionContents';

type FaqViewProps = {
  faqs: IFaqFields[];
};

const FaqView: FC<PropsWithChildren<FaqViewProps>> = ({ faqs }) => {
  const { t } = useTranslation(['home', 'common']);

  return (
    <BaseRendererForCollectionContents
      collection={faqs}
      isRenderedWithCard
      cardTitle={t('home.faq.title')}
      cardDescription={t('home.faq.description')}
      cardBtnActionClickHandler={identity}
      EntryRenderer={FaqEntry}
    />
  );
};

export default FaqView;
