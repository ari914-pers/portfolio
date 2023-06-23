import { FC, createContext } from 'react';
import { ISkillsetFields } from '../../../../@types/generated/contentful';
import BaseCard from '@/components/molecules/surfaces/BaseCard';
import { useTranslation } from 'next-i18next';
import SkillSetTab from './component/SkillSetTab';

type SkillSetViewProps = { entries: ISkillsetFields[] };

export const SkillSetContext = createContext<{ entries: ISkillsetFields[] }>({
  entries: [],
});

const SkillSetView: FC<SkillSetViewProps> = ({ entries }) => {
  const { t } = useTranslation(['home']);

  return (
    <SkillSetContext.Provider value={{ entries }}>
      <BaseCard
        title={t('home.skill_set.title')}
        description={t('home.skill_set.title')}
      >
        <SkillSetTab />
      </BaseCard>
    </SkillSetContext.Provider>
  );
};

export default SkillSetView;
