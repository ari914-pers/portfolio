import { FC } from 'react';
import {
  IBusiessContent,
  IResponsiblePhase,
} from '../../../../../../../../@types/generated/contentful';
import { Typography } from '@mui/material';

type CollectionEntryProps = {
  entry: IResponsiblePhase | IBusiessContent;
};

const CollectionEntry: FC<CollectionEntryProps> = ({ entry }) => {
  return entry?.fields?.title ? (
    <>
      <Typography variant='spanHeading'>{entry?.fields?.title}</Typography>
      {entry?.fields?.title && (
        <Typography variant='body2'>
          &mdash;&mdash;&mdash;{entry?.fields?.title}
        </Typography>
      )}
    </>
  ) : null;
};

export default CollectionEntry;
