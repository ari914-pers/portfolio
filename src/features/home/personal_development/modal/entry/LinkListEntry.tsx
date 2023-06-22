import Link from '@/components/atoms/navs/links/Link';
import IconBox from '@/components/atoms/wrappers/IconBox';
import Stack from '@/components/atoms/wrappers/Stack';
import { DIR_PATH_TO_ASSET_IMAGE_LOGOS } from '@/consts/app.const';
import React, { FC, PropsWithChildren } from 'react';
import { IPersonalDevelopmentFields } from '../../../../../../@types/generated/contentful';
import { useTranslation } from 'next-i18next';
import LinkIcon from '@mui/icons-material/Link';
import { Tooltip } from '@mui/material';

type LinkListEntryProps = {
  linkGithub?: IPersonalDevelopmentFields['link_github'];
  linkZenn?: IPersonalDevelopmentFields['link_zenn'];
  linkCite?: IPersonalDevelopmentFields['url_link'];
};

const LinkListEntry: FC<PropsWithChildren<LinkListEntryProps>> = ({
  linkGithub,
  linkZenn,
  linkCite,
}) => {
  const { t } = useTranslation(['home']);
  return (
    <Stack
      designProps={{}}
      direction='row'
      spacing='md'
      justifyContent='center'
      alignItems='center'
    >
      {linkGithub && (
        <Link href={linkGithub}>
          <IconBox
            size='md'
            srcURL={`${DIR_PATH_TO_ASSET_IMAGE_LOGOS}/github-mark.svg`}
            tooltipTitle={t(
              'home.personal_development.modal.tooltip_title.github'
            )}
          />
        </Link>
      )}
      {linkZenn && (
        <Link href={linkZenn}>
          <IconBox
            size='md'
            srcURL={`${DIR_PATH_TO_ASSET_IMAGE_LOGOS}/logo_zenn.dev.svg`}
            tooltipTitle={t(
              'home.personal_development.modal.tooltip_title.zenn'
            )}
          />
        </Link>
      )}
      {linkCite && (
        <Link href={linkCite}>
          <Tooltip
            title={t('home.personal_development.modal.tooltip_title.cite')}
          >
            <span>
              <LinkIcon fontSize='medium' />
            </span>
          </Tooltip>
        </Link>
      )}
    </Stack>
  );
};

export default LinkListEntry;
