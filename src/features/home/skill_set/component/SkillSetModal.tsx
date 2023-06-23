import BaseModal from '@/components/molecules/surfaces/modal/BaseModal';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ISkillsetFields } from '../../../../../@types/generated/contentful';
import { toOrderGuaranteed } from '@/utils/cmsEntry.util';
import { skillSetModalFields } from '@/consts/features/home.const';
import Renderer from '@/components/atoms/display/Renderer';
import StringEntry from '../../common/entry/StringEntry';
import Stack from '@/components/atoms/wrappers/Stack';

type SkillSetModalProps = {
  entry: ISkillsetFields;
  isOpen: boolean;
  handleClose: () => void;
};

const SkillSetModal: FC<SkillSetModalProps> = ({
  entry,
  isOpen,
  handleClose,
}) => {
  const { t } = useTranslation('home');

  const fields = toOrderGuaranteed<string>(skillSetModalFields, entry);

  return (
    <BaseModal
      isOpen={isOpen}
      handleClose={handleClose}
      modalTitle={t('home.skill_set.title')}
    >
      <Stack designProps={{}} spacing='sm'>
        <Renderer
          entries={fields}
          iteratee={([key, val]) => (
            <StringEntry
              fieldName={t(`home.skill_set.${key}`)}
              fieldVal={val}
              key={key}
            />
          )}
        />
      </Stack>
    </BaseModal>
  );
};

export default SkillSetModal;
