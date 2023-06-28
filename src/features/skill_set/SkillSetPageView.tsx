import { ComponentProps, FC } from 'react';
import SkillSetView from '../home/skill_set/SkillSetView';
import SkillSetTab from '../home/skill_set/component/SkillSetTab';

type SkillSetPVProps = {
  skillSets: ComponentProps<typeof SkillSetView>['entries'];
};

const SkillSetPV: FC<SkillSetPVProps> = ({ skillSets }) => {
  return (
    <SkillSetView entries={skillSets}>
      <SkillSetTab isUsedOnHome={false} />
    </SkillSetView>
  );
};

export default SkillSetPV;
