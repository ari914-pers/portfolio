import React, { FC, PropsWithChildren } from 'react';
import { IFaqFields } from '../../../../@types/generated/contentful';
import { useTranslation } from 'next-i18next';
import FaqEntry from './entry/FaqEntry';
import BaseRendererForCollectionContents from '../common/BaseRendererForCollectionContents';
import Renderer from '@/components/atoms/display/Renderer';
import usePageTransition from '@/hooks/usePageTransition';
import { random } from 'lodash';

type FaqViewProps = {
  faqs: IFaqFields[];
  isUsedOnHome: boolean;
};

const FaqView: FC<PropsWithChildren<FaqViewProps>> = ({
  faqs,
  isUsedOnHome = true,
}) => {
  const { t } = useTranslation(['home', 'common']);
  const [handleClick] = usePageTransition('/faq');

  return isUsedOnHome ? (
    <BaseRendererForCollectionContents
      collection={faqs}
      isRenderedWithCard
      cardTitle={t('home.faq.title')}
      cardDescription={t('home.faq.description')}
      cardBtnActionClickHandler={handleClick}
      EntryRenderer={FaqEntry}
      id='#faq'
    />
  ) : (
    <Renderer
      entries={faqs}
      iteratee={(entry) => (
        <FaqEntry entry={entry} key={Math.floor(random(true) * 100)} />
      )}
    />
  );
};

export default FaqView;
