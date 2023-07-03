import BaseCard from '@/components/molecules/surfaces/BaseCard';
import { ComponentProps, FC } from 'react';
import FaqView from '../home/faq/FaqView';
import { useTranslation } from 'next-i18next';

type FaqListViewProps = { faqs: ComponentProps<typeof FaqView>['faqs'] | null };

const FaqListView: FC<FaqListViewProps> = ({ faqs }) => {
  const { t } = useTranslation('home');

  return faqs ? (
    <BaseCard
      title={t('home.faq.title')}
      description={t('home.faq.description')}
      id='#faq'
    >
      <FaqView faqs={faqs} isUsedOnHome={false} />
    </BaseCard>
  ) : null;
};

export default FaqListView;
