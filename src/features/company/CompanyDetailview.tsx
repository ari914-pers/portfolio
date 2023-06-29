import { ComponentProps, FC } from 'react';
import CompanyView from '../home/company/CompanyView';

type CompanyDetailViewProps = Pick<
  ComponentProps<typeof CompanyView>,
  'entries' | 'futureGoals'
>;

const CompanyDetailView: FC<CompanyDetailViewProps> = ({
  entries,
  futureGoals,
}) => {
  return (
    <CompanyView
      entries={entries}
      futureGoals={futureGoals}
      isUsedOnHome={false}
    />
  );
};

export default CompanyDetailView;
