import React, { FC, PropsWithChildren } from 'react';
import { IFaqFields } from '../../../../@types/generated/contentful';
import { useTranslation } from 'next-i18next';
import FaqEntry from './entry/FaqEntry';
import { identity } from 'lodash';
import BaseRendererForCollectionContents from '../common/BaseRendererForCollectionContents';
import Renderer from '@/components/atoms/display/Renderer';

type FaqViewProps = {
  faqs: IFaqFields[];
  isUsedOnHome: boolean;
};

const FaqView: FC<PropsWithChildren<FaqViewProps>> = ({
  faqs,
  isUsedOnHome = true,
}) => {
  const { t } = useTranslation(['home', 'common']);

  return isUsedOnHome ? (
    <BaseRendererForCollectionContents
      collection={faqs}
      isRenderedWithCard
      cardTitle={t('home.faq.title')}
      cardDescription={t('home.faq.description')}
      cardBtnActionClickHandler={identity}
      EntryRenderer={FaqEntry}
    />
  ) : (
    <Renderer entries={faqs} iteratee={(entry) => <FaqEntry entry={entry} />} />
  );
};

export default FaqView;
