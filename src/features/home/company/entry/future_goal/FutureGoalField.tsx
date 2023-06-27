import { ComponentProps, FC } from 'react';
import { IFutureGoal } from '../../../../../../@types/generated/contentful';
import Stack from '@/components/atoms/wrappers/Stack';
import { Box, Divider, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import LabeledButton from '@/components/atoms/inputs/buttons/LabeledButton';
import { isEmpty, sortBy } from 'lodash';
import { genSizingPropertyVal } from '@/utils/style.util';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import FutureGoalModal from './modal/FutureGoalModal';
import useModalControl from '@/hooks/useModalControl';

type FutureGoalFieldProps = { entries: IFutureGoal[] };

const FutureGoalField: FC<FutureGoalFieldProps> = ({ entries }) => {
  const { t } = useTranslation(['home', 'common']);
  const theme = useTheme();

  const { isOpen, handleOpen, handleClose } = useModalControl();

  const entryPrioritized = sortBy(entries, (entry) => entry.fields.priority)[0];

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

  return !isEmpty(entryPrioritized.fields.description) ? (
    <>
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
                {documentToReactComponents(entryPrioritized.fields.description)}
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
      <FutureGoalModal
        isOpen={isOpen}
        handleClose={handleClose}
        entries={entries}
      />
    </>
  ) : null;
};

export default FutureGoalField;
