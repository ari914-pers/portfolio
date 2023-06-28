import { ComponentProps, FC } from 'react';
import CompanyView from './company/CompanyView';
import FaqView from './faq/FaqView';
import PersonalDevelopmentView from './personal_development/PersonalDevelopmentView';
import ProfileView from './profile/ProfileView';
import SkillSetView from './skill_set/SkillSetView';
import { genOneSideSpacingCssProperty } from '@/utils/style.util';
import { Grid } from '@mui/material';
import { isNull } from 'lodash';
import { IFutureGoal } from '../../../@types/generated/contentful';

export type HomeViewProps = {
  profile: ComponentProps<typeof ProfileView>['fields'] | null;
  companies: ComponentProps<typeof CompanyView>['entries'] | null;
  futureGoals: ComponentProps<typeof CompanyView>['futureGoals'] | null;
  faqs: ComponentProps<typeof FaqView>['faqs'] | null;
  personalDevelopments: // eslint-disable-next-line prettier/prettier
  | ComponentProps<typeof PersonalDevelopmentView>['personalDevelopment']
    // eslint-disable-next-line prettier/prettier
  | null;
  skillSets: ComponentProps<typeof SkillSetView>['entries'] | null;
};

const HomeView: FC<HomeViewProps> = ({
  profile,
  companies,
  futureGoals,
  faqs,
  personalDevelopments,
  skillSets,
}) => {
  console.log('PROFILE', profile);
  console.log('COMPANY', companies);
  console.log('FUTURE GOAL', futureGoals);
  console.log('FAQ', faqs);
  console.log('PERSONAL DEV', personalDevelopments);
  console.log('SKILL SET', skillSets);

  return (
    <Grid
      container
      spacing={{
        xs: genOneSideSpacingCssProperty('xl'),
        md: genOneSideSpacingCssProperty('lg'),
      }}
    >
      {!isNull(profile) && (
        <Grid
          item
          container
          alignItems='center'
          justifyContent='center'
          xs={12}
          md={6}
        >
          <ProfileView fields={profile} />
        </Grid>
      )}
      {!isNull(companies) && !isNull(futureGoals) && (
        <Grid
          item
          container
          alignItems='center'
          justifyContent='center'
          xs={12}
          md={6}
        >
          <CompanyView
            entries={companies}
            futureGoals={futureGoals as IFutureGoal[]}
          />
        </Grid>
      )}
      {!isNull(faqs) && (
        <Grid
          item
          container
          alignItems='center'
          justifyContent='center'
          xs={12}
          md={6}
        >
          <FaqView faqs={faqs} />
        </Grid>
      )}
      {!isNull(personalDevelopments) && (
        <Grid
          item
          container
          alignItems='center'
          justifyContent='center'
          xs={12}
          md={6}
        >
          <PersonalDevelopmentView personalDevelopment={personalDevelopments} />
        </Grid>
      )}
      {!isNull(skillSets) && (
        <Grid
          item
          container
          alignItems='center'
          justifyContent='center'
          xs={12}
          md={6}
        >
          <SkillSetView entries={skillSets} />
        </Grid>
      )}
    </Grid>
  );
};

export default HomeView;
