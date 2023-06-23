import { SyntheticEvent, useState } from 'react';

const useTabsControl = <T extends string>(initTabVal: T) => {
  const [currentTab, setCurrentTab] = useState<T>(initTabVal);

  const handleChangeTab = (event: SyntheticEvent, newValue: T) => {
    setCurrentTab(newValue);
  };

  return [currentTab, handleChangeTab] as [T, typeof handleChangeTab];
};

export default useTabsControl;
