import { useState } from 'react';

const useModalControl = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return { isOpen, handleOpen, handleClose } as const;
};

export default useModalControl;
