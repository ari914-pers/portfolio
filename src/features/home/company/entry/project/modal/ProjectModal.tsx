import useModalControl from '@/hooks/useModalControl';
import { FC } from 'react';
import { IWorkProjectsFields } from '../../../../../../../@types/generated/contentful';
import BaseModal from '@/components/molecules/surfaces/modal/BaseModal';
import { useTranslation } from 'react-i18next';
import Stack from '@/components/atoms/wrappers/Stack';
import StringEntry from '@/features/home/common/entry/StringEntry';
import DurationEntry from '@/features/home/common/entry/DurationEntry';
import { isEmpty, isUndefined } from 'lodash';
import DocumentEntry from '@/features/home/common/entry/DocumentEntry';
import DevEnvEntry from '@/features/home/common/entry/DevEnvEntry';
import AccordionWrapper from '@/components/atoms/wrappers/AccordionWrapper';
import CollectionEntry from './entry/CollectionEntry';
import Renderer from '@/components/atoms/display/Renderer';
import useAccordionExpansionControl from '@/hooks/useAccordionExpansionControl';
import FeedbackEntry from './entry/FeedbackEntry';
import { Typography } from '@mui/material';

type ProjectModalProps = Pick<
  ReturnType<typeof useModalControl>,
  'isOpen' | 'handleClose'
> & {
  entry: IWorkProjectsFields;
};

const ProjectModal: FC<ProjectModalProps> = ({
  isOpen,
  handleClose,
  entry,
}) => {
  const { t } = useTranslation('home');

  const [current, handleExpansionChange] = useAccordionExpansionControl();

  return (
    <BaseModal
      modalTitle={t('home.work_projects.modal.title')}
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <Stack designProps={{}} spacing='md'>
        <StringEntry
          fieldName={t('home.work_projects.modal.title')}
          fieldVal={entry.title}
        />
        {entry.joined_at && (
          <DurationEntry
            fieldName={t('home.work_projects.modal.appointment_period')}
            from={new Date(entry.joined_at)}
            to={entry.left_at ? new Date(entry.left_at) : new Date()}
          />
        )}
        {!isEmpty(entry.summary) && (
          <DocumentEntry
            fieldName={t('home.work_projects.modal.summary')}
            fieldVal={entry.summary}
          />
        )}
        {!isUndefined(entry.responsible_phases) &&
          !isEmpty(entry.responsible_phases) && (
            <AccordionWrapper
              fieldName={
                <Typography variant='spanHeading'>
                  {t('home.work_projects.modal.responsible_phases.title')}
                </Typography>
              }
              currentlyExpanded={current}
              handleExpansionChange={handleExpansionChange}
              panelName='panel1'
            >
              <Renderer
                entries={entry.responsible_phases}
                iteratee={(entry) => <CollectionEntry entry={entry} />}
              />
            </AccordionWrapper>
          )}
        {!isUndefined(entry.business_contents) &&
          !isEmpty(entry.business_contents) && (
            <AccordionWrapper
              fieldName={
                <Typography variant='spanHeading'>
                  {t('home.work_projects.modal.business_contents.title')}
                </Typography>
              }
              currentlyExpanded={current}
              handleExpansionChange={handleExpansionChange}
              panelName='panel2'
            >
              <Renderer
                entries={entry.business_contents}
                iteratee={(entry) => <CollectionEntry entry={entry} />}
              />
            </AccordionWrapper>
          )}
        {!isUndefined(entry.feedbacks) && !isEmpty(entry.feedbacks) && (
          <AccordionWrapper
            fieldName={
              <Typography variant='spanHeading'>
                {t('home.work_projects.modal.feedback')}
              </Typography>
            }
            currentlyExpanded={current}
            handleExpansionChange={handleExpansionChange}
            panelName='panel3'
          >
            <Renderer
              entries={entry.feedbacks}
              iteratee={(entry) => <FeedbackEntry entry={entry} />}
            />
          </AccordionWrapper>
        )}
        {!isEmpty(entry.develop_envs) && (
          <DevEnvEntry
            fieldName={t('home.work_projects.modal.develop_env')}
            entry={entry.develop_envs.fields}
          />
        )}
      </Stack>
    </BaseModal>
  );
};

export default ProjectModal;
