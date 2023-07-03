import { ComponentProps, FC } from 'react';
import CompanyView from './company/CompanyView';
import FaqView from './faq/FaqView';
import PersonalDevelopmentView from './personal_development/PersonalDevelopmentView';
import ProfileView from './profile/ProfileView';
import SkillSetView from './skill_set/SkillSetView';
import { genOneSideSpacingCssProperty } from '@/utils/style.util';
import { Grid } from '@mui/material';
import SkillSetTab from './skill_set/component/SkillSetTab';
import ItemGridContainer from './ItemGridContainer';
import { checkEntriesToBeShown } from '@/utils/cmsEntry.util';

export type HomeViewProps = {
  profile: ComponentProps<typeof ProfileView>['fields'] | null;
  companies: ComponentProps<typeof CompanyView>['entries'] | null;
  futureGoals: ComponentProps<typeof CompanyView>['futureGoals'] | null;
  faqs: ComponentProps<typeof FaqView>['faqs'] | null;
  personalDevelopments: // eslint-disable-next-line prettier/prettier
  | ComponentProps<typeof PersonalDevelopmentView>['personalDevelopment']
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
      {checkEntriesToBeShown(profile) ? (
        <ItemGridContainer>
          <ProfileView fields={profile} />
        </ItemGridContainer>
      ) : null}
      {checkEntriesToBeShown(companies) &&
      checkEntriesToBeShown(futureGoals) ? (
        <ItemGridContainer>
          <CompanyView
            entries={companies}
            futureGoals={futureGoals}
            isUsedOnHome
          />
        </ItemGridContainer>
      ) : null}
      {checkEntriesToBeShown(faqs) ? (
        <ItemGridContainer>
          <FaqView faqs={faqs} isUsedOnHome />
        </ItemGridContainer>
      ) : null}
      {checkEntriesToBeShown(personalDevelopments) ? (
        <ItemGridContainer>
          <PersonalDevelopmentView personalDevelopment={personalDevelopments} />
        </ItemGridContainer>
      ) : null}
      {checkEntriesToBeShown(skillSets) ? (
        <ItemGridContainer>
          <SkillSetView entries={skillSets}>
            <SkillSetTab isUsedOnHome />
          </SkillSetView>
        </ItemGridContainer>
      ) : null}
    </Grid>
  );
};

export default HomeView;
