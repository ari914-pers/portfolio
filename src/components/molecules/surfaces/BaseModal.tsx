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
import { useTranslation } from 'react-i18next';

type BaseModalProps = Pick<
  ReturnType<typeof useModalControl>,
  'isOpen' | 'handleClose'
> & {
  modalTitle: DefaultTFuncReturn;
};

const BaseModal: FC<PropsWithChildren<BaseModalProps>> = ({
  isOpen,
  handleClose,
  modalTitle,
  children,
}) => {
  const { t } = useTranslation(['common']);

  const cardProps: SxProps<Theme> = {
    p: genTwoSidesSpacingCssProperty('lg-xl'),
    bgcolor: (theme) => theme.palette.common.white,
    boxShadow: BoxShadows.default,
    position: 'absolute',
    top: genSizingPropertyVal(50, '%'),
    left: genSizingPropertyVal(50, '%'),
    transform: 'translate(-50%, -50%)',
  };
  const btnProps: SxProps<Theme> = {
    p: genTwoSidesSpacingCssProperty('sm-md'),
    bgcolor: (theme) => theme.palette.secondary.main,
    '&:hover': {
      bgcolor: (theme) => theme.palette.secondary.light,
    },
  };

  const RendererModal = forwardRef<HTMLDivElement>(function referred(props, ref) {
    return (
      <div ref={ref} {...props}>
        <Modal open={isOpen} onClose={handleClose} closeAfterTransition>
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
