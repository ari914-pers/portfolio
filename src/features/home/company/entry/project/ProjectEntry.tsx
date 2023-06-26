import LabeledButton from '@/components/atoms/inputs/buttons/LabeledButton';
import { genSizingPropertyVal } from '@/utils/style.util';
import { Typography, useTheme } from '@mui/material';
import dayjs from 'dayjs';
import { identity } from 'lodash';
import { IWorkProjects } from '../../../../../../@types/generated/contentful';
import Stack from '@/components/atoms/wrappers/Stack';
import { ComponentProps, FC } from 'react';
import { useTranslation } from 'react-i18next';

type ProjectEntryProps = {
  entry: IWorkProjects;
};

const btnProps: ComponentProps<typeof LabeledButton> = {
  buttonProps: {
    onClick: identity,
    variant: 'outlined',
    MUIButtonProps: {
      sx: {
        bgcolor: (theme) => theme.palette.common.white,
        borderRadius: genSizingPropertyVal(16, 'px'),
      },
    },
  },
};

const ProjectEntry: FC<ProjectEntryProps> = ({ entry: { fields } }) => {
  const { t } = useTranslation('home');
  const theme = useTheme();

  return fields.title ? (
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
  ) : null;
};

export default ProjectEntry;
