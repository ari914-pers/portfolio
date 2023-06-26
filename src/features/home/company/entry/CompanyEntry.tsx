import { FC } from 'react';
import { ICompanyFields } from '../../../../../@types/generated/contentful';
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
import { Typography } from '@mui/material';
import dayjs from 'dayjs';
import Stack from '@/components/atoms/wrappers/Stack';
import CompanyField from './company/CompanyField';
import ProjectField from './project/ProjectField';

type CompanyEntryProps = {
  entry: ICompanyFields;
};

const CompanyEntry: FC<CompanyEntryProps> = ({ entry }) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent>
        <Typography variant='spanRegular'>
          {dayjs(entry.joined_at).format('YYYY年MM月')}
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot sx={{ bgcolor: (theme) => theme.palette.primary.light }} />
        <TimelineConnector
          sx={{ bgcolor: (theme) => theme.palette.primary.light }}
        />
      </TimelineSeparator>
      <TimelineContent>
        <Stack designProps={{}} spacing='md'>
          <CompanyField company={entry} />
          <ProjectField projects={entry.work_projects} />
        </Stack>
      </TimelineContent>
    </TimelineItem>
  );
};

export default CompanyEntry;
