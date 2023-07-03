import LabeledButton from '@/components/atoms/inputs/buttons/LabeledButton';
import { BoxShadows } from '@/consts/themeConstant';
import useModalControl from '@/hooks/useModalControl';
import {
  genOneSideSpacingCssProperty,
  genSizingPropertyVal,
  genTwoSidesSpacingCssProperty,
} from '@/utils/style.util';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Fade,
  Modal,
  SxProps,
  Theme,
} from '@mui/material';
import { DefaultTFuncReturn } from 'i18next';
import React, { FC, PropsWithChildren, forwardRef } from 'react';
import BtnClose from './BtnClose';
import { useTranslation } from 'next-i18next';

type BaseModalProps = Pick<
  ReturnType<typeof useModalControl>,
  'isOpen' | 'handleClose'
> & {
  modalTitle: DefaultTFuncReturn;
};

const cardProps: SxProps<Theme> = {
  bgcolor: (theme) => theme.palette.common.white,
  boxShadow: BoxShadows.default,
  position: 'absolute',
  top: genSizingPropertyVal(50, '%'),
  left: genSizingPropertyVal(50, '%'),
  transform: 'translate(-50%, -50%)',
  minWidth: genSizingPropertyVal(75, '%'),
  maxWidth: genSizingPropertyVal(90, '%'),
  maxHeight: genSizingPropertyVal(90, '%'),
  overflow: 'scroll',
};
const btnProps: SxProps<Theme> = {
  p: genTwoSidesSpacingCssProperty('sm-md'),
  bgcolor: (theme) => theme.palette.secondary.main,
  '&:hover': {
    bgcolor: (theme) => theme.palette.secondary.light,
  },
};

const BaseModal: FC<PropsWithChildren<BaseModalProps>> = ({
  isOpen,
  handleClose,
  modalTitle,
  children,
}) => {
  const { t } = useTranslation(['common']);

  const RendererModal = forwardRef<HTMLDivElement>(function referred(
    props,
    ref
  ) {
    return (
      <div ref={ref} {...props}>
        <Modal open={isOpen} onClose={handleClose} closeAfterTransition>
          <>
            <BtnClose handleClose={handleClose} btnStyle={btnProps} />
            <Card sx={cardProps}>
              <CardHeader
                title={`${modalTitle}\n${t('common.modal.title')}`}
                titleTypographyProps={{
                  variant: 'h3',
                  sx: { mb: genOneSideSpacingCssProperty('sm') },
                }}
              />
              <CardContent>{children}</CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <LabeledButton
                  buttonProps={{
                    onClick: handleClose,
                    MUIButtonProps: {
                      sx: btnProps,
                    },
                  }}
                >
                  {t('common.modal.label.closeBtn')}
                </LabeledButton>
              </CardActions>
            </Card>
          </>
        </Modal>
      </div>
    );
  });

  return (
    <Fade in={isOpen} exit>
      <RendererModal />
    </Fade>
  );
};

export default BaseModal;
