import Stack from '@/components/atoms/wrappers/Stack';
import { Typography } from '@mui/material';
import dayjs from 'dayjs';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Footer: FC = () => {
  const { t } = useTranslation('common');
  return (
    <Stack designProps={{ sizing: { width: [100, '%'] } }} alignItems='center'>
      <Typography>
        &copy;&emsp;{t('common.footer')}&emsp;{dayjs().format('YYYY/MM')}
      </Typography>
    </Stack>
  );
};

export default Footer;
