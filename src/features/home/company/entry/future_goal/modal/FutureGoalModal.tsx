import BaseModal from '@/components/molecules/surfaces/modal/BaseModal';
import useModalControl from '@/hooks/useModalControl';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Stack from '@/components/atoms/wrappers/Stack';
import { IFutureGoal } from '../../../../../../../@types/generated/contentful';
import Renderer from '@/components/atoms/display/Renderer';
import FutureGoalEntry from './FutureGoalEntry';
import { isNumber, sortBy, toString } from 'lodash';
import { Divider } from '@mui/material';

type FutureGoalModalProps = Pick<
  ReturnType<typeof useModalControl>,
  'isOpen' | 'handleClose'
> & { entries: IFutureGoal[] };

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
            <>
              <FutureGoalEntry
                entry={entry}
                rank={isNumber(index) ? index + 1 : undefined}
                key={toString(entry.fields.title)}
              />
              <Divider />
            </>
          )}
          processEntries={(entries) =>
            sortBy(entries, (entry1) => entry1.fields.priority)
          }
          key={toString(Math.floor(Math.random() * 100))}
        />
      </Stack>
    </BaseModal>
  );
};

export default FutureGoalModal;
