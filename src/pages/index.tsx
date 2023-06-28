import { GetStaticProps, GetStaticPropsResult, NextPage } from 'next';
import {
  ICompanyFields,
  IFaqFields,
  IFutureGoalFields,
  IPersonalDevelopmentFields,
  IProfileFields,
  ISkillsetFields,
} from '../../@types/generated/contentful';
import { getEntries } from '@/utils/cmsUtils';
// import { Entry } from 'contentful';
import HomeView, { HomeViewProps } from '@/features/home/HomeView';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

type HomePageProps = HomeViewProps;

const HomePage: NextPage<HomePageProps> = (props) => {
  return <HomeView {...props} />;
};

export const getStaticProps: GetStaticProps = async (
  context
): Promise<GetStaticPropsResult<HomePageProps>> => {
  const profile = await getEntries<IProfileFields>('profile');
  const companies = await getEntries<ICompanyFields>('company');
  const faqs = await getEntries<IFaqFields>('faq');
  const personalDevelopments = await getEntries<IPersonalDevelopmentFields>(
    'personal_development'
  );
  const skillSets = await getEntries<ISkillsetFields>('skillset');
  const futureGoals = await getEntries<IFutureGoalFields>('future_goal');

  return {
    props: {
      profile: profile ? profile[0] : null,
      companies,
      faqs,
      personalDevelopments,
      skillSets,
      futureGoals,
      ...(await serverSideTranslations(context.locale ?? 'ja', [
        'common',
        'home',
      ])),
    },
  };
};

export default HomePage;
