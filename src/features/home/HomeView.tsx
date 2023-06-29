import { ComponentProps, FC } from 'react';
import CompanyView from './company/CompanyView';
import FaqView from './faq/FaqView';
import PersonalDevelopmentView from './personal_development/PersonalDevelopmentView';
import ProfileView from './profile/ProfileView';
import SkillSetView from './skill_set/SkillSetView';
import { genOneSideSpacingCssProperty } from '@/utils/style.util';
import { Grid } from '@mui/material';
import { isNull } from 'lodash';
import SkillSetTab from './skill_set/component/SkillSetTab';

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
            futureGoals={futureGoals}
            isUsedOnHome
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
          <FaqView faqs={faqs} isUsedOnHome />
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
          <SkillSetView entries={skillSets}>
            <SkillSetTab isUsedOnHome />
          </SkillSetView>
        </Grid>
      )}
    </Grid>
  );
};

export default HomeView;
