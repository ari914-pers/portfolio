import { ComponentProps } from 'react';
import { IPersonalDevelopmentFields } from '../../@types/generated/contentful';
import { GetStaticProps, NextPage, GetStaticPropsResult } from 'next';
import { getEntries } from '@/utils/cmsUtils';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { isNull } from 'lodash';
import PersonalDevelopmentListView from '@/features/personal_development/PersonalDevelopmentListView';
import { DEPTH_REF_BY_PERSONAL_DEVELOPMENT } from '@/consts/cms';
import { ContentGetQueryParam } from '@/types/cms.type';

type PersonalDevelopmentPageP = {
  personalDevelopments:
    | ComponentProps<typeof PersonalDevelopmentListView>['entries']
    | null;
};

const PersonalDevelopmentPage: NextPage<PersonalDevelopmentPageP> = ({
  personalDevelopments,
}: PersonalDevelopmentPageP) => {
  return !isNull(personalDevelopments) ? (
    <PersonalDevelopmentListView entries={personalDevelopments} />
  ) : null;
};

export default PersonalDevelopmentPage;

export const getStaticProps: GetStaticProps = async (
  context
): Promise<GetStaticPropsResult<PersonalDevelopmentPageP>> => {
  const personalDevelopments = await getEntries<
    IPersonalDevelopmentFields,
    ContentGetQueryParam
  >('personal_development', { include: DEPTH_REF_BY_PERSONAL_DEVELOPMENT });

  return {
    props: {
      personalDevelopments,
      ...(await serverSideTranslations(context.locale ?? 'ja', [
        'home',
        'common',
      ])),
    },
  };
};
