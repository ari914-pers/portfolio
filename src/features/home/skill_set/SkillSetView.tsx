import { FC, PropsWithChildren, createContext } from 'react';
import { ISkillsetFields } from '../../../../@types/generated/contentful';
import BaseCard from '@/components/molecules/surfaces/BaseCard';
import { useTranslation } from 'next-i18next';
import LabeledButton from '@/components/atoms/inputs/buttons/LabeledButton';
import usePageTransition from '@/hooks/usePageTransition';

type SkillSetViewProps = { entries: ISkillsetFields[] };

export const SkillSetContext = createContext<{ entries: ISkillsetFields[] }>({
  entries: [],
});

const SkillSetView: FC<PropsWithChildren<SkillSetViewProps>> = ({
  entries,
  children,
}) => {
  const { t } = useTranslation(['home', 'common']);
  const [handleClick] = usePageTransition('/skill_set');

  return (
    <SkillSetContext.Provider value={{ entries }}>
      <BaseCard
        title={t('home.skill_set.title')}
        description={t('home.skill_set.title')}
        id='#skillSet'
        btnAction={
          <LabeledButton buttonProps={{ onClick: handleClick }}>
            {t('common.label.btnDetail', { ns: 'common' })}
          </LabeledButton>
        }
      >
        {children}
      </BaseCard>
    </SkillSetContext.Provider>
  );
};

export default SkillSetView;
