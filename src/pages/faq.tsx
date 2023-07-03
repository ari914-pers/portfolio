import { ComponentProps } from 'react';
import { IFaqFields } from '../../@types/generated/contentful';
import { GetStaticProps, NextPage, GetStaticPropsResult } from 'next';
import { getEntries } from '@/utils/cmsUtils';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { isNull } from 'lodash';
import FaqListView from '@/features/faq/FaqListView';

type FaqListPageP = {
  faqs: ComponentProps<typeof FaqListView>['faqs'] | null;
};

const FaqListPage: NextPage<FaqListPageP> = ({ faqs }: FaqListPageP) => {
  return !isNull(faqs) ? <FaqListView faqs={faqs} /> : null;
};

export default FaqListPage;

export const getStaticProps: GetStaticProps = async (
  context
): Promise<GetStaticPropsResult<FaqListPageP>> => {
  const faqs = await getEntries<IFaqFields>('faq');

  return {
    props: {
      faqs,
      ...(await serverSideTranslations(context.locale ?? 'ja', [
        'home',
        'common',
      ])),
    },
  };
};
