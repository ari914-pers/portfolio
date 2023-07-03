import LabeledButton from '@/components/atoms/inputs/buttons/LabeledButton';
import useModalControl from '@/hooks/useModalControl';
import { CloseRounded } from '@mui/icons-material';
import { SxProps, Theme } from '@mui/material';
import { FC } from 'react';

type PBtnClose = Pick<ReturnType<typeof useModalControl>, 'handleClose'> & {
  btnStyle: SxProps<Theme>;
};

const BtnClose: FC<PBtnClose> = ({ handleClose, btnStyle }) => {
  return (
    <LabeledButton
      buttonProps={{
        onClick: handleClose,
        MUIButtonProps: {
          sx: { ...btnStyle, position: 'absolute', top: 10, right: 10 },
        },
      }}
    >
      <CloseRounded />
    </LabeledButton>
  );
};

export default BtnClose;
