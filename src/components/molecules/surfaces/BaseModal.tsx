import LabeledButton from '@/components/atoms/inputs/buttons/LabeledButton';
import { BoxShadows } from '@/consts/themeConstant';
import useModalControl from '@/hooks/useModalControl';
import {
  genOneSideSpacingCssProperty,
  genTwoSidesSpacingCssProperty,
} from '@/utils/style.util';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Fade,
  Modal,
} from '@mui/material';
import { DefaultTFuncReturn } from 'i18next';
import React, { FC, PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';

type BaseModalProps = ReturnType<typeof useModalControl> & {
  modalTitle: DefaultTFuncReturn;
};

const BaseModal: FC<PropsWithChildren<BaseModalProps>> = ({
  isOpen,
  handleClose,
  modalTitle,
  children,
}) => {
  const { t } = useTranslation(['common']);

  return (
    <Fade in={isOpen}>
      <Modal open={isOpen} onClose={handleClose}>
        <Card
          sx={{
            p: genTwoSidesSpacingCssProperty('lg-xl'),
            bgcolor: (theme) => theme.palette.common.white,
            boxShadow: BoxShadows.default,
          }}
        >
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
                  sx: {
                    p: genTwoSidesSpacingCssProperty('sm-md'),
                    bgcolor: (theme) => theme.palette.secondary.main,
                  },
                },
              }}
            >
              {t('common.modal.label.closeBtn')}
            </LabeledButton>
          </CardActions>
        </Card>
      </Modal>
    </Fade>
  );
};

export default BaseModal;
