import Stack from '@/components/atoms/wrappers/Stack';
import { Theme, Typography, useMediaQuery, useTheme } from '@mui/material';
import dayjs from 'dayjs';
import { useTranslation } from 'next-i18next';
import { FC } from 'react';

const Footer: FC = () => {
  const { t } = useTranslation('common');
  const theme = useTheme();
  const matchesSmartphoneWidth = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.up('sm')
  );

  return (
    <footer>
      <Stack
        designProps={{
          sizing: { width: [100, '%'] },
          twoSidesSpacing: {
            p: matchesSmartphoneWidth ? ['lg-lg'] : ['md-md'],
          },
          backgroundColor: theme.palette.grey.A700,
        }}
        alignItems='center'
      >
        <Typography>
          &copy;&emsp;{t('common.footer')}&emsp;{dayjs().format('YYYY/MM')}
        </Typography>
      </Stack>
    </footer>
  );
};

export default Footer;
