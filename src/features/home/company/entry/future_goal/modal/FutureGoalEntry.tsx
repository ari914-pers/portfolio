import { FC } from 'react';
import { IFutureGoalFields } from '../../../../../../../@types/generated/contentful';
import StringEntry from '@/features/home/common/entry/StringEntry';
import { isEmpty, isUndefined } from 'lodash';
import AccordionWrapper from '@/components/atoms/wrappers/AccordionWrapper';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Grid, Typography } from '@mui/material';
import { genOneSideSpacingCssProperty } from '@/utils/style.util';
import { useTranslation } from 'next-i18next';

type FutureGoalEntryProps = { entry: IFutureGoalFields; rank?: number };

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
          {entry.priority ?? '-'}
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
        {!isUndefined(entry.description) && !isEmpty(entry.description) ? (
          <AccordionWrapper
            fieldName={
              <Typography variant='spanHeading'>{entry.title}</Typography>
            }
          >
            {documentToReactComponents(entry.description)}
          </AccordionWrapper>
        ) : (
          <StringEntry
            fieldName={t('home.future_goal.title')}
            fieldVal={entry.title}
          />
        )}
        {!isEmpty(entry.occupation) && (
          <StringEntry
            fieldName={t('home.future_goal.occupation')}
            fieldVal={entry.occupation?.fields.title}
          />
        )}
        {!isEmpty(entry.span_goal) && (
          <StringEntry
            fieldName={t('home.future_goal.span_goal')}
            fieldVal={entry.span_goal.fields.title}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default FutureGoalEntry;
