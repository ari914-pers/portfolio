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
import { DEPTH_REF_BY_COMPANY } from '@/consts/cms';
import { ContentGetQueryParam } from '@/types/cms.type';

type HomePageProps = HomeViewProps;

const HomePage: NextPage<HomePageProps> = (props) => {
  return <HomeView {...props} />;
};

export const getStaticProps: GetStaticProps = async (
  context
): Promise<GetStaticPropsResult<HomePageProps>> => {
  const profile = await getEntries<IProfileFields>('profile');
  const companies = await getEntries<ICompanyFields, ContentGetQueryParam>(
    'company',
    { include: DEPTH_REF_BY_COMPANY }
  );
  const faqs = await getEntries<IFaqFields>('faq');
  const personalDevelopments = await getEntries<
    IPersonalDevelopmentFields,
    ContentGetQueryParam
  >('personal_development', { include: 2 });
  const skillSets = await getEntries<ISkillsetFields>('skillset');
  const futureGoals = await getEntries<IFutureGoalFields>('future_goal');

  console.log(
    'PERS DEV > Dev env >',
    personalDevelopments?.[0].development_env?.fields.languages
  );

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
