import { ComponentProps, FC } from 'react';
import { IFutureGoalFields } from '../../../../../../@types/generated/contentful';
import Stack from '@/components/atoms/wrappers/Stack';
import { Box, Divider, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import LabeledButton from '@/components/atoms/inputs/buttons/LabeledButton';
import { identity, isEmpty, isUndefined } from 'lodash';
import { genSizingPropertyVal } from '@/utils/style.util';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

type FutureGoalFieldProps = { entry: IFutureGoalFields };

const FutureGoalField: FC<FutureGoalFieldProps> = ({
  entry: { description },
}) => {
  const { t } = useTranslation(['home', 'common']);
  const theme = useTheme();

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

  return !isUndefined(description) || !isEmpty(description) ? (
    <Stack designProps={{ twoSidesSpacing: { p: ['md-0'] } }} spacing='md'>
      <Typography variant='h5'>{t('home.future_goal.heading')}</Typography>
      <Divider />
      <Stack
        designProps={{
          twoSidesSpacing: { p: ['sm-md'] },
          backgroundColor: theme.palette.common.white,
          borderRadius: genSizingPropertyVal(4, 'px'),
        }}
      >
        <Stack designProps={{}} alignItems='flex-end' spacing='md'>
          <Stack designProps={{}} direction='row'>
            <Box
              sx={{
                overflow: 'hidden',
                height: genSizingPropertyVal(4, 'rem'),
              }}
            >
              {documentToReactComponents(description)}
            </Box>
            <Stack designProps={{}} justifyContent='flex-end'>
              <span>...</span>
            </Stack>
          </Stack>
          <LabeledButton {...btnProps}>
            {t('common.label.btnDetail', { ns: 'common' })}
          </LabeledButton>
        </Stack>
      </Stack>
    </Stack>
  ) : null;
};

export default FutureGoalField;
