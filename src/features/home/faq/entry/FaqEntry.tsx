import React, { FC, PropsWithChildren } from 'react';
import { IFaqFields } from '../../../../../@types/generated/contentful';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import { genSizingPropertyVal } from '@/utils/style.util';
import { ExpandMore } from '@mui/icons-material';
import Stack from '@/components/atoms/wrappers/Stack';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { EntryRendererCompProps } from '@/types/features/home.type';

const FaqEntry: FC<PropsWithChildren<EntryRendererCompProps<IFaqFields>>> = ({
  entry,
}) => {
  return (
    <Accordion sx={{ minWidth: genSizingPropertyVal(100, '%') }}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography variant='h6'>{entry?.title_question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack designProps={{ twoSidesSpacing: { p: ['xs-md'] } }} spacing='sm'>
          <Typography variant='h6'>{entry?.title_answer}</Typography>
          {entry?.answer_description && (
            // <Typography variant='body2'>
            // {documentToReactComponents(entry.answer_description)}
            // </Typography>
            <Typography variant='body2'>
              {entry?.answer_description as unknown as string}
            </Typography>
          )}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};

export default FaqEntry;
