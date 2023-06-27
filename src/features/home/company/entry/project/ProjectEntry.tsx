import LabeledButton from '@/components/atoms/inputs/buttons/LabeledButton';
import { genSizingPropertyVal } from '@/utils/style.util';
import { Typography, useTheme } from '@mui/material';
import dayjs from 'dayjs';
import { IWorkProjects } from '../../../../../../@types/generated/contentful';
import Stack from '@/components/atoms/wrappers/Stack';
import { ComponentProps, FC } from 'react';
import { useTranslation } from 'react-i18next';
import ProjectModal from './modal/ProjectModal';
import useModalControl from '@/hooks/useModalControl';

type ProjectEntryProps = {
  entry: IWorkProjects;
};

const ProjectEntry: FC<ProjectEntryProps> = ({ entry: { fields } }) => {
  const { t } = useTranslation('home');
  const theme = useTheme();

  const { isOpen, handleOpen, handleClose } = useModalControl();

  const btnProps: ComponentProps<typeof LabeledButton> = {
    buttonProps: {
      onClick: handleOpen,
      variant: 'outlined',
      MUIButtonProps: {
        sx: {
          bgcolor: (theme) => theme.palette.common.white,
          borderRadius: genSizingPropertyVal(16, 'px'),
        },
      },
    },
  };

  return fields.title ? (
    <>
      <Stack
        designProps={{
          twoSidesSpacing: { p: ['sm-md'] },
          backgroundColor: theme.palette.common.white,
          borderRadius: genSizingPropertyVal(4, 'px'),
        }}
        spacing='sm'
      >
        <Typography variant='h6'>{fields.title}</Typography>
        <Typography variant='spanRegular'>
          {`${dayjs(fields.joined_at).format('YYYY年MM')} ～`}
        </Typography>
        <Stack designProps={{}} alignItems='flex-end'>
          <LabeledButton {...btnProps}>
            {t('home.work_projects.label_btn')}
          </LabeledButton>
        </Stack>
      </Stack>
      <ProjectModal isOpen={isOpen} handleClose={handleClose} entry={fields} />
    </>
  ) : null;
};

export default ProjectEntry;
