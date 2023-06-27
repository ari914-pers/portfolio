import { FC } from 'react';
import { IFutureGoal } from '../../../../../../../@types/generated/contentful';
import StringEntry from '@/features/home/common/entry/StringEntry';
import { useTranslation } from 'react-i18next';
import { isEmpty, isUndefined } from 'lodash';
import AccordionWrapper from '@/components/atoms/wrappers/AccordionWrapper';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Grid, Typography } from '@mui/material';
import { genOneSideSpacingCssProperty } from '@/utils/style.util';

type FutureGoalEntryProps = { entry: IFutureGoal; rank?: number };

const FutureGoalEntry: FC<FutureGoalEntryProps> = ({ entry, rank }) => {
  const { t } = useTranslation('home');

  let rendererPriority;
  switch (rank) {
    case 1:
      rendererPriority = (
        <Typography variant='h3' color={(theme) => theme.palette.warning.main}>
          {rank}
        </Typography>
      );
      break;
    case 2:
      rendererPriority = (
        <Typography variant='h3' color={(theme) => theme.palette.success.main}>
          {rank}
        </Typography>
      );
      break;
    case 3:
      rendererPriority = (
        <Typography variant='h3' color={(theme) => theme.palette.error.main}>
          {rank}
        </Typography>
      );
      break;
    case undefined:
      rendererPriority = (
        <Typography variant='h3' color={(theme) => theme.palette.error.main}>
          {entry.fields.priority ?? '-'}
        </Typography>
      );
      break;
    default:
      rendererPriority = <Typography variant='h3'>{rank}</Typography>;
      break;
  }

  return (
    <Grid container>
      <Grid item container xs={2} alignItems='center' justifyContent='center'>
        {rendererPriority}
      </Grid>
      <Grid
        item
        container
        xs={10}
        direction='column'
        alignItems='center'
        gap={genOneSideSpacingCssProperty('sm')}
      >
        {!isUndefined(entry.fields.description) &&
        !isEmpty(entry.fields.description) ? (
          <AccordionWrapper
            fieldName={
              <Typography variant='spanHeading'>
                {entry.fields.title}
              </Typography>
            }
          >
            {documentToReactComponents(entry.fields.description)}
          </AccordionWrapper>
        ) : (
          <StringEntry
            fieldName={t('home.future_goal.title')}
            fieldVal={entry.fields.title}
          />
        )}
        {!isEmpty(entry.fields.occupation) && (
          <StringEntry
            fieldName={t('home.future_goal.occupation')}
            fieldVal={entry.fields.occupation?.fields.title}
          />
        )}
        {!isEmpty(entry.fields.span_goal) && (
          <StringEntry
            fieldName={t('home.future_goal.span_goal')}
            fieldVal={entry.fields.span_goal.fields.title}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default FutureGoalEntry;
