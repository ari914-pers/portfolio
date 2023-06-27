import { FC } from 'react';
import {
  IBusiessContent,
  IResponsiblePhase,
} from '../../../../../../../../@types/generated/contentful';
import { Typography } from '@mui/material';

type CollectionEntryProps = {
  entry: IResponsiblePhase | IBusiessContent;
};

const CollectionEntry: FC<CollectionEntryProps> = ({
  entry: {
    fields: { title, note },
  },
}) => {
  return title ? (
    <>
      <Typography variant='spanHeading'>{title}</Typography>
      {note && (
        <Typography variant='body2'>&mdash;&mdash;&mdash;{note}</Typography>
      )}
    </>
  ) : null;
};

export default CollectionEntry;
