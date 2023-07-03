import { ComponentProps } from 'react';
import ProfileView from '../features/home/profile/ProfileView';
import { IProfileFields } from '../../@types/generated/contentful';
import { GetStaticProps, NextPage, GetStaticPropsResult } from 'next';
import { getEntries } from '@/utils/cmsUtils';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { isNull } from 'lodash';

type ProfileDetailPageP = {
  profile: ComponentProps<typeof ProfileView>['fields'] | null;
};

const ProfileDetailPage: NextPage<ProfileDetailPageP> = ({
  profile,
}: ProfileDetailPageP) => {
  return !isNull(profile) ? <ProfileView fields={profile} /> : null;
};

export default ProfileDetailPage;

export const getStaticProps: GetStaticProps = async (
  context
): Promise<GetStaticPropsResult<ProfileDetailPageP>> => {
  const profile = await getEntries<IProfileFields>('profile');

  return {
    props: {
      profile: profile ? profile[0] : null,
      ...(await serverSideTranslations(context.locale ?? 'ja', [
        'common',
        'home',
      ])),
    },
  };
};
