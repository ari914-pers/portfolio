import { FC } from 'react';
import { IPersonalDevelopmentFields } from '../../../@types/generated/contentful';
import { Grid, Paper, Typography } from '@mui/material';
import Renderer from '@/components/atoms/display/Renderer';
import PersonalDevelopmentEntry from '../home/personal_development/entry/PersonalDevelopmentEntry';
import {
  genOneSideSpacingCssProperty,
  genTwoSidesSpacingCssProperty,
} from '@/utils/style.util';
import BaseCard from '@/components/molecules/surfaces/BaseCard';
import Stack from '@/components/atoms/wrappers/Stack';
import { useTranslation } from 'react-i18next';
import { floor, random } from 'lodash';

type PersonalDevelopmentListView = {
  entries: IPersonalDevelopmentFields[];
};

const PersonalDevelopmentListView: FC<PersonalDevelopmentListView> = ({
  entries,
}) => {
  const { t } = useTranslation('home');

  return (
    <Stack designProps={{}} spacing='lg'>
      <Paper
        sx={{ p: genTwoSidesSpacingCssProperty('md-md'), textAlign: 'center' }}
      >
        <Typography variant='h3'>
          {t('home.personal_development.title')}
        </Typography>
      </Paper>
      <Grid container spacing={genOneSideSpacingCssProperty('lg')}>
        <Renderer
          entries={entries}
          iteratee={(entry) => (
            <Grid
              item
              container
              xs={12}
              md={6}
              justifyContent='center'
              alignContent='center'
              key={floor(random(), 3)}
            >
              <BaseCard>
                <PersonalDevelopmentEntry entry={entry} />
              </BaseCard>
            </Grid>
          )}
        />
      </Grid>
    </Stack>
  );
};

export default PersonalDevelopmentListView;
