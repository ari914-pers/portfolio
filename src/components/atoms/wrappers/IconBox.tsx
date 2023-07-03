import React, { FC, ReactNode } from 'react';
import Box from './Box';
import { WrapperCompProps } from '@/types/components/common.type';
import { DimensionKey } from '@/types/style.type';
import { Dimensions } from '@/consts/themeConstant';
import Image from 'next/image';
import { isString } from 'lodash';
import { Fade, Tooltip, Typography } from '@mui/material';
import { INTERNAL_LINK_PATH_ASSET_IMAGE } from '@/types/app.type';
import Stack from './Stack';

type IconBoxProps = {
  objectFit?: WrapperCompProps['objectFit'];
  objectPosition?: WrapperCompProps['objectPosition'];
  overflow?: WrapperCompProps['overflow'];
  size: DimensionKey;
  srcURL: URL | INTERNAL_LINK_PATH_ASSET_IMAGE;
  tooltipTitle?: null | ReactNode;
  label?: string;
};

const IconBox: FC<IconBoxProps> = ({
  size,
  objectFit,
  objectPosition,
  overflow,
  srcURL,
  tooltipTitle,
  label,
}) => {
  if (tooltipTitle) {
    return label ? (
      <Stack
        designProps={{ display: 'inline-flex' }}
        direction='column'
        spacing='sm'
        alignItems='center'
      >
        <Box
          designProps={{
            objectFit,
            objectPosition,
            overflow,
            position: 'relative',
            sizing: { width: [Dimensions[size]], height: [Dimensions[size]] },
          }}
        >
          <Tooltip
            title={tooltipTitle}
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 500 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={isString(srcURL) ? srcURL : srcURL.toString()}
              alt='icon'
            />
          </Tooltip>
        </Box>
        <Tooltip
          title={tooltipTitle}
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 500 }}
        >
          <Typography variant='spanRegular'>{label}</Typography>
        </Tooltip>
      </Stack>
    ) : (
      <Box
        designProps={{
          objectFit,
          objectPosition,
          overflow,
          position: 'relative',
          sizing: { width: [Dimensions[size]], height: [Dimensions[size]] },
        }}
      >
        <Tooltip
          title={tooltipTitle}
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 500 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={isString(srcURL) ? srcURL : srcURL.toString()} alt='icon' />
        </Tooltip>
      </Box>
    );
  }

  return !label ? (
    <Box
      designProps={{
        objectFit,
        objectPosition,
        overflow,
        position: 'relative',
        sizing: { width: [Dimensions[size]], height: [Dimensions[size]] },
      }}
    >
      <Image
        src={isString(srcURL) ? srcURL : srcURL.toString()}
        alt='icons'
        fill
      />
    </Box>
  ) : (
    <Stack
      designProps={{
        display: 'inline-flex',
      }}
      direction='column'
      spacing='sm'
      alignItems='center'
    >
      <Box
        designProps={{
          objectFit,
          objectPosition,
          overflow,
          position: 'relative',
          sizing: { width: [Dimensions[size]], height: [Dimensions[size]] },
        }}
      >
        <Image
          src={isString(srcURL) ? srcURL : srcURL.toString()}
          alt='icons'
          fill
        />
      </Box>
      <Typography variant='spanRegular'>{label}</Typography>
    </Stack>
  );
};

export default IconBox;
