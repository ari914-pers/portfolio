import { FC, createContext } from 'react';
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
import { sortBy } from 'lodash';
import Renderer from '@/components/atoms/display/Renderer';

type CompanyViewProps = {
  entries: ICompanyFields[];
  futureGoals: IFutureGoalFields[];
  isUsedOnHome: boolean;
};

export const CompanyContext = createContext({ isUsedOnHome: false })

const CompanyView: FC<CompanyViewProps> = ({
  entries,
  futureGoals,
  isUsedOnHome,
}) => {
  const { t } = useTranslation(['home']);

  return (
    <CompanyContext.Provider value={{ isUsedOnHome }}>
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
          {isUsedOnHome ? (
            <BaseRendererForCollectionContents
              collection={entries}
              isRenderedWithCard={false}
              EntryRenderer={CompanyEntry}
              processFunc={(entries) =>
                sortBy(entries, (entry) => entry.joined_at)
              }
            />
          ) : (
            <Renderer
              entries={entries}
              iteratee={(entry) => <CompanyEntry entry={entry} />}
            />
          )}
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
              <FutureGoalField entries={futureGoals} />
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </BaseCard>
    </CompanyContext.Provider>
  );
};

export default CompanyView;
