import { useState, MouseEventHandler } from 'react';

const useMenuControl = () => {
  const [anchorEl, setAnchorEl] = useState<null | (EventTarget & Element)>(
    null
  );
  const open = Boolean(anchorEl);
  const handleClick: MouseEventHandler = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return [open, anchorEl, handleClick, handleClose] as [
    typeof open,
    typeof anchorEl,
    typeof handleClick,
    typeof handleClose
  ];
};

export default useMenuControl;
