import { ComponentProps, FC } from 'react';
import CompanyView from '../home/company/CompanyView';

type CompanyDetailviewProps = Pick<
  ComponentProps<typeof CompanyView>,
  'entries' | 'futureGoals'
>;

const CompanyDetailview: FC<CompanyDetailviewProps> = ({
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

export default CompanyDetailview;
