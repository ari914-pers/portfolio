import { ComponentProps } from 'react';
import {
  ICompanyFields,
  IFutureGoalFields,
} from '../../@types/generated/contentful';
import { GetStaticProps, NextPage, GetStaticPropsResult } from 'next';
import { getEntries } from '@/utils/cmsUtils';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { isNull } from 'lodash';
import CompanyDetailview from '@/features/company/CompanyDetailview';

type CareerPageP = {
  companies: ComponentProps<typeof CompanyDetailview>['entries'] | null;
  futureGoals: ComponentProps<typeof CompanyDetailview>['futureGoals'] | null;
};

const CareerPage: NextPage<CareerPageP> = ({
  companies,
  futureGoals,
}: CareerPageP) => {
  return !isNull(companies) && !isNull(futureGoals) ? (
    <CompanyDetailview entries={companies} futureGoals={futureGoals} />
  ) : null;
};

export default CareerPage;

export const getStaticProps: GetStaticProps = async (
  context
): Promise<GetStaticPropsResult<CareerPageP>> => {
  const companies = await getEntries<ICompanyFields>('faq');
  const futureGoals = await getEntries<IFutureGoalFields>('future_goal');

  return {
    props: {
      companies,
      futureGoals,
      ...(await serverSideTranslations(context.locale ?? 'ja', [
        'common',
        'home',
      ])),
    },
  };
};
