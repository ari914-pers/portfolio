import Stack from '@/components/atoms/wrappers/Stack';
import { Divider, Typography } from '@mui/material';
import { ComponentProps, FC } from 'react';
import { ICompanyFields } from '../../../../../../@types/generated/contentful';
import LabeledButton from '@/components/atoms/inputs/buttons/LabeledButton';
import { useTranslation } from 'react-i18next';
import { genSizingPropertyVal } from '@/utils/style.util';
import CompanyModal from './CompanyModal';
import useModalControl from '@/hooks/useModalControl';

type CompanyFieldProps = {
  company: ICompanyFields;
};

const CompanyField: FC<CompanyFieldProps> = ({ company }) => {
  const { t } = useTranslation('home');

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

  return company.description ? (
    <>
      <Stack designProps={{}} spacing='md'>
        <Typography variant='h5'>{company.description}</Typography>
        <Stack designProps={{}} alignItems='flex-end'>
          <LabeledButton {...btnProps}>
            {t('home.company.description')}
          </LabeledButton>
        </Stack>
        <Divider />
      </Stack>
      <CompanyModal entry={company} isOpen={isOpen} handleClose={handleClose} />
    </>
  ) : null;
};

export default CompanyField;
