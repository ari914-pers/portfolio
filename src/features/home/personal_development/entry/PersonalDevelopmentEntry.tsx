import { EntryRendererCompProps } from '@/types/features/home.type';
import React, { FC, PropsWithChildren } from 'react';
import { IPersonalDevelopmentFields } from '../../../../../@types/generated/contentful';
import Stack from '@/components/atoms/wrappers/Stack';
import Link from '@/components/atoms/navs/links/Link';
import { Box, Typography } from '@mui/material';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useTranslation } from 'next-i18next';
import LabeledButton from '@/components/atoms/inputs/buttons/LabeledButton';
import { identity } from 'lodash';
import ImageCustomized from '@/components/atoms/display/ImageCustomized';

const PersonalDevelopmentEntry: FC<
  PropsWithChildren<EntryRendererCompProps<IPersonalDevelopmentFields>>
> = ({ entry }) => {
  const { t } = useTranslation(['common']);

  return (
    <Stack
      direction='column'
      designProps={{}}
      spacing='md'
      justifyContent='center'
      alignItems='center'
    >
      <ImageCustomized
        width={[300]}
        height={[168.9]}
        imgAsset={entry.thumbnail}
      />
      {entry.url_link ? (
        <Link href={entry.url_link}>
          <Typography variant='linkHeading'>{entry.title}</Typography>
        </Link>
      ) : (
        <Typography variant='linkHeadingBroken'>{entry.title}</Typography>
      )}
      {entry?.summary && (
        <Stack designProps={{}} direction='row' alignItems='flex-end'>
          <Box sx={{ height: '3rem', overflow: 'hidden' }}>
            {documentToReactComponents(entry.summary)}
          </Box>
          <Box>
            <span>...</span>
          </Box>
        </Stack>
      )}
      <Stack
        designProps={{ sizing: { width: [100, '%'] } }}
        direction='row'
        justifyContent='flex-end'
      >
        <LabeledButton
          buttonProps={{
            onClick: identity,
            variant: 'outlined',
            MUIButtonProps: {
              sx: { backgroundColor: (theme) => theme.palette.common.white },
            },
          }}
        >
          {t('common.label.btnDetail', { ns: 'common' })}
        </LabeledButton>
      </Stack>
    </Stack>
  );
};

export default PersonalDevelopmentEntry;
