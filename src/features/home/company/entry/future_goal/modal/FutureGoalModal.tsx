import BaseModal from '@/components/molecules/surfaces/modal/BaseModal';
import useModalControl from '@/hooks/useModalControl';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Stack from '@/components/atoms/wrappers/Stack';
import { IFutureGoalFields } from '../../../../../../../@types/generated/contentful';
import Renderer from '@/components/atoms/display/Renderer';
import FutureGoalEntry from './FutureGoalEntry';
import { isNumber, random, sortBy, toString } from 'lodash';
import { Box, Divider } from '@mui/material';

type FutureGoalModalProps = Pick<
  ReturnType<typeof useModalControl>,
  'isOpen' | 'handleClose'
> & { entries: IFutureGoalFields[] };

const FutureGoalModal: FC<FutureGoalModalProps> = ({
  isOpen,
  handleClose,
  entries,
}) => {
  const { t } = useTranslation('home');

  return (
    <BaseModal
      modalTitle={t('home.future_goal.heading')}
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <Stack designProps={{}} spacing='md'>
        <Renderer
          entries={entries}
          iteratee={(entry, index) => (
            <Box key={Math.floor(random(true) * 100)}>
              <FutureGoalEntry
                entry={entry}
                rank={isNumber(index) ? index + 1 : undefined}
                key={toString(entry.title)}
              />
              <Divider />
            </Box>
          )}
          processEntries={(entries) =>
            sortBy(entries, (entry1) => entry1.priority)
          }
          key={toString(Math.floor(Math.random() * 100))}
        />
      </Stack>
    </BaseModal>
  );
};

export default FutureGoalModal;
