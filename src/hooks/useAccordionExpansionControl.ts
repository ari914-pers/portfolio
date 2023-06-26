import { useState } from 'react';

const useAccordionExpansionControl = () => {
  const [currentlyExpanded, setCurrentlyExpanded] = useState<string | boolean>(
    false
  );

  const handleChange = (panelName: string) => {
    setCurrentlyExpanded((current) =>
      current === panelName ? false : panelName
    );
  };

  return [currentlyExpanded, handleChange] as [
    typeof currentlyExpanded,
    typeof handleChange
  ];
};

export default useAccordionExpansionControl;
