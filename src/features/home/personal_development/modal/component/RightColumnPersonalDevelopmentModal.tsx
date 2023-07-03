import { useTranslation } from 'next-i18next';
import React, { FC, useContext } from 'react';
import { Grid, Theme, useMediaQuery } from '@mui/material';
import { PersonalDevelopmentEntryContext } from '../../entry/PersonalDevelopmentEntry';
import { genOneSideSpacingCssProperty } from '@/utils/style.util';
import DevDurationEntry from '../../../common/entry/DurationEntry';
import DevEnvEntry from '../../../common/entry/DevEnvEntry';
import DocumentEntry from '../../../common/entry/DocumentEntry';

const RightColumnPersonalDevelopmentModal: FC = () => {
  const { t } = useTranslation(['home']);

  const {
    entry: { started_at, finished_at, summary, development_env, thought },
  } = useContext(PersonalDevelopmentEntryContext);

  const matchWithDesktopWidth = useMediaQuery<Theme>((them) =>
    them.breakpoints.up('md')
  );

  return (
    <>
      <Grid
        item
        xs={3}
        rowGap='100px'
        marginBottom={
          matchWithDesktopWidth ? genOneSideSpacingCssProperty('md') : 0
        }
      >
        {started_at && finished_at && (
          <DevDurationEntry
            from={new Date(started_at)}
            to={new Date(finished_at)}
            fieldName={t('home.personal_development.modal.dev_duration')}
          />
        )}
      </Grid>
      <Grid item xs={3}>
        <DocumentEntry
          fieldName={t('home.personal_development.description')}
          fieldVal={summary}
        />
      </Grid>
      <Grid item xs={3}>
        <DevEnvEntry
          fieldName={t('home.development_environment.title')}
          entry={development_env?.fields}
        />
      </Grid>
      <Grid item xs={3}>
        <DocumentEntry
          fieldName={t('home.personal_development.modal.thought')}
          fieldVal={thought}
        />
      </Grid>
    </>
  );
};

export default RightColumnPersonalDevelopmentModal;
