import { useTranslation } from 'next-i18next';
import React, { FC, useContext } from 'react';
import ImageCustomized from '@/components/atoms/display/ImageCustomized';
import LinkListEntry from '../entry/LinkListEntry';
import StringEntry from '../../../common/entry/StringEntry';
import { Grid } from '@mui/material';
import { PersonalDevelopmentEntryContext } from '../../entry/PersonalDevelopmentEntry';

const LeftColumnPersonalDevelopmentModal: FC = () => {
  const { t } = useTranslation(['home']);

  const {
    entry: { title, thumbnail, link_github, link_zenn, url_link },
  } = useContext(PersonalDevelopmentEntryContext);

  return (
    <>
      <Grid item xs={'auto'} md={1} justifyContent='stretch'>
        <StringEntry
          fieldName={t('home.personal_development.modal.title')}
          fieldVal={title}
        />
      </Grid>
      <Grid item md={6}>
        <ImageCustomized imgAsset={thumbnail} width={[200]} height={[100]} />
      </Grid>
      <Grid item md={5}>
        <LinkListEntry
          linkGithub={link_github}
          linkZenn={link_zenn}
          linkCite={url_link}
        />
      </Grid>
    </>
  );
};

export default LeftColumnPersonalDevelopmentModal;
