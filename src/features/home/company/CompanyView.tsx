import { FC } from 'react';
import {
  ICompanyFields,
  IFutureGoalFields,
} from '../../../../@types/generated/contentful';
import BaseCard from '@/components/molecules/surfaces/BaseCard';
import { useTranslation } from 'next-i18next';
import { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
import BaseRendererForCollectionContents from '../common/BaseRendererForCollectionContents';
import CompanyEntry from './entry/CompanyEntry';
import { Typography } from '@mui/material';
import dayjs from 'dayjs';
import FutureGoalField from './entry/future_goal/FutureGoalField';

type CompanyViewProps = {
  entries: ICompanyFields[];
  futureGoal: IFutureGoalFields;
};

const CompanyView: FC<CompanyViewProps> = ({ entries, futureGoal }) => {
  const { t } = useTranslation(['home']);

  return (
    <BaseCard
      title={t('home.company.title')}
      description={t('home.company.card_description')}
    >
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
        }}
      >
        <BaseRendererForCollectionContents
          collection={entries}
          isRenderedWithCard={false}
          EntryRenderer={CompanyEntry}
        />
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant='spanRegular'>
              {dayjs(new Date()).format('YYYY年MM月')}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              sx={{ bgcolor: (theme) => theme.palette.primary.light }}
            />
            <TimelineConnector
              sx={{ bgcolor: (theme) => theme.palette.primary.light }}
            />
          </TimelineSeparator>
          <TimelineContent>
            <FutureGoalField entry={futureGoal} />
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </BaseCard>
  );
};

export default CompanyView;
