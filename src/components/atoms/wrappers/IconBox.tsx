import React, { FC, ReactNode } from 'react';
import Box from './Box';
import { WrapperCompProps } from '@/types/components/common.type';
import { DimensionKey } from '@/types/style.type';
import { Dimensions } from '@/consts/themeConstant';
import Image from 'next/image';
import { isNull, isString, isUndefined } from 'lodash';
import { Fade, Tooltip } from '@mui/material';
import { INTERNAL_LINK_PATH_ASSET_IMAGE } from '@/types/app.type';

type IconBoxProps = {
  objectFit?: WrapperCompProps['objectFit'];
  objectPosition?: WrapperCompProps['objectPosition'];
  overflow?: WrapperCompProps['overflow'];
  size: DimensionKey;
  srcURL: URL | INTERNAL_LINK_PATH_ASSET_IMAGE;
  tooltipTitle?: null | ReactNode;
};

const IconBox: FC<IconBoxProps> = ({
  size,
  objectFit,
  objectPosition,
  overflow,
  srcURL,
  tooltipTitle,
}) => {
  return isUndefined(tooltipTitle) || isNull(tooltipTitle) ? (
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
};

export default IconBox;
