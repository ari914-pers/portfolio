import BaseModal from '@/components/molecules/surfaces/modal/BaseModal';
import useModalControl from '@/hooks/useModalControl';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Stack from '@/components/atoms/wrappers/Stack';
import { IFutureGoal } from '../../../../../../../@types/generated/contentful';
import Renderer from '@/components/atoms/display/Renderer';
import FutureGoalEntry from './FutureGoalEntry';
import { isNumber, sortBy } from 'lodash';
import { Divider } from '@mui/material';

type CompanyModalProps = Pick<
  ReturnType<typeof useModalControl>,
  'isOpen' | 'handleClose'
> & { entries: IFutureGoal[] };

const CompanyModal: FC<CompanyModalProps> = ({
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
              />
              <Divider />
            </>
          )}
          processEntries={(entries) =>
            sortBy(entries, (entry1) => entry1.fields.priority)
          }
        />
      </Stack>
    </BaseModal>
  );
};

export default CompanyModal;
