import { FC } from 'react';
import { IFeedback } from '../../../../../../../../@types/generated/contentful';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Chip,
  Typography,
} from '@mui/material';
import { genSizingPropertyVal } from '@/utils/style.util';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { ExpandMore } from '@mui/icons-material';
import Stack from '@/components/atoms/wrappers/Stack';

type FeedbackEntryProps = { entry: IFeedback };

const FeedbackEntry: FC<FeedbackEntryProps> = ({
  entry: {
    fields: { title, category, description },
  },
}) => {
  return title && description ? (
    <Accordion sx={{ minWidth: genSizingPropertyVal(100, '%') }}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Stack
          designProps={{}}
          direction='row'
          alignItems='center'
          spacing='sm'
        >
          <Typography variant='spanHeading'>{title}</Typography>
          {category && (
            <Chip
              label={<Typography variant='spanRegular'>{category}</Typography>}
              sx={{ bgcolor: (theme) => theme.palette.grey.A700 }}
            />
          )}
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        {documentToReactComponents(description)}
      </AccordionDetails>
    </Accordion>
  ) : null;
};

export default FeedbackEntry;
