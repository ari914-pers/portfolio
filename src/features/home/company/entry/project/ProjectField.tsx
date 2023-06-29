import Stack from '@/components/atoms/wrappers/Stack';
import { Typography } from '@mui/material';
import { FC, useContext } from 'react';
import { IWorkProjects } from '../../../../../../@types/generated/contentful';
import { useTranslation } from 'react-i18next';
import BaseRendererForCollectionContents from '@/features/home/common/BaseRendererForCollectionContents';
import ProjectEntry from './ProjectEntry';
import { isUndefined, random } from 'lodash';
import { CompanyContext } from '../../CompanyView';
import Renderer from '@/components/atoms/display/Renderer';

type ProjectFieldProps = {
  projects?: IWorkProjects[];
};

const ProjectField: FC<ProjectFieldProps> = ({ projects }) => {
  const { t } = useTranslation('home');

  const { isUsedOnHome } = useContext(CompanyContext);

  return !isUndefined(projects) ? (
    <Stack designProps={{}} spacing='md'>
      <Typography variant='spanRegular'>
        {t('home.work_projects.title')}
      </Typography>
      {isUsedOnHome ? (
        <BaseRendererForCollectionContents<IWorkProjects, false>
          collection={projects}
          isRenderedWithCard={false}
          itemSpacing='md'
          EntryRenderer={ProjectEntry}
        />
      ) : (
        <Renderer
          entries={projects}
          iteratee={(entry) => (
            <ProjectEntry entry={entry} key={Math.floor(random(true) * 100)} />
          )}
        />
      )}
    </Stack>
  ) : null;
};

export default ProjectField;
