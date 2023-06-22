import BaseModal from '@/components/molecules/surfaces/modal/BaseModal';
import { useTranslation } from 'next-i18next';
import React, { FC, useContext } from 'react';
import { Grid } from '@mui/material';
import LeftColumnPersonalDevelopmentModal from './component/LeftColumnPersonalDevelopmentModal';
import RightColumnPersonalDevelopmentModal from './component/RightColumnPersonalDevelopmentModal';
import { PersonalDevelopmentEntryContext } from '../entry/PersonalDevelopmentEntry';

const PersonalDevelopmentModal: FC = () => {
  const { t } = useTranslation(['home']);

  const { isOpen, handleClose } = useContext(PersonalDevelopmentEntryContext);

  return (
    <BaseModal
      isOpen={isOpen}
      handleClose={handleClose}
      modalTitle={t('home.personal_development.title')}
    >
      <Grid container rowSpacing={{ xs: 2, md: 0 }}>
        <Grid
          container
          item
          sm={12}
          md={6}
          direction='column'
          wrap='nowrap'
          rowSpacing={{ xs: 2 }}
        >
          <LeftColumnPersonalDevelopmentModal />
        </Grid>
        <Grid
          container
          item
          sm={12}
          md={6}
          direction='column'
          wrap='nowrap'
          rowSpacing={{ xs: 2, md: 0 }}
        >
          <RightColumnPersonalDevelopmentModal />
        </Grid>
      </Grid>
    </BaseModal>
  );
};

export default PersonalDevelopmentModal;
