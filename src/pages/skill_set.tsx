import { ComponentProps } from 'react';
import { ISkillsetFields } from '../../@types/generated/contentful';
import { GetStaticProps, NextPage, GetStaticPropsResult } from 'next';
import { getEntries } from '@/utils/cmsUtils';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { isNull } from 'lodash';
import SkillSetPV from '@/features/skill_set/SkillSetPageView';

type SkillSetDetailPageP = {
  skillSets: ComponentProps<typeof SkillSetPV>['skillSets'] | null;
};

const SkillSetDetailPage: NextPage<SkillSetDetailPageP> = ({
  skillSets,
}: SkillSetDetailPageP) => {
  return !isNull(skillSets) ? <SkillSetPV skillSets={skillSets} /> : null;
};

export default SkillSetDetailPage;

export const getStaticProps: GetStaticProps = async (
  context
): Promise<GetStaticPropsResult<SkillSetDetailPageP>> => {
  const skillSets = await getEntries<ISkillsetFields>('skillset');

  return {
    props: {
      skillSets,
      ...(await serverSideTranslations(context.locale ?? 'ja', [
        'home',
        'common',
      ])),
    },
  };
};
