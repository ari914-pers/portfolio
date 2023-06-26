import Stack from '@/components/atoms/wrappers/Stack';
import { Typography } from '@mui/material';
import { FC } from 'react';
import { IWorkProjects } from '../../../../../../@types/generated/contentful';
import { useTranslation } from 'react-i18next';
import BaseRendererForCollectionContents from '@/features/home/common/BaseRendererForCollectionContents';
import ProjectEntry from './ProjectEntry';
import { isUndefined } from 'lodash';

type ProjectFieldProps = {
  projects?: IWorkProjects[];
};

const ProjectField: FC<ProjectFieldProps> = ({ projects }) => {
  const { t } = useTranslation('home');

  return !isUndefined(projects) ? (
    <Stack designProps={{}} spacing='md'>
      <Typography variant='spanRegular'>
        {t('home.work_projects.title')}
      </Typography>
      <BaseRendererForCollectionContents<IWorkProjects, false>
        collection={projects}
        isRenderedWithCard={false}
        itemSpacing='md'
        EntryRenderer={ProjectEntry}
      />
    </Stack>
  ) : null;
};

export default ProjectField;
