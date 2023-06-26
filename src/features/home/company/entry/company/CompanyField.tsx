import Stack from '@/components/atoms/wrappers/Stack';
import { Divider, Typography } from '@mui/material';
import { ComponentProps, FC } from 'react';
import { ICompanyFields } from '../../../../../../@types/generated/contentful';
import LabeledButton from '@/components/atoms/inputs/buttons/LabeledButton';
import { identity } from 'lodash';
import { useTranslation } from 'react-i18next';
import { genSizingPropertyVal } from '@/utils/style.util';

type CompanyFieldProps = {
  company: ICompanyFields;
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

const CompanyField: FC<CompanyFieldProps> = ({ company: { description } }) => {
  const { t } = useTranslation('home');

  return description ? (
    <Stack designProps={{}} spacing='md'>
      <Typography variant='h5'>{description}</Typography>
      <Stack designProps={{}} alignItems='flex-end'>
        <LabeledButton {...btnProps}>
          {t('home.company.description')}
        </LabeledButton>
      </Stack>
      <Divider />
    </Stack>
  ) : null;
};

export default CompanyField;
