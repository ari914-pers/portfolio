import React, { FC } from 'react';
import Box from './Box';
import { WrapperCompProps } from '@/types/components/common.type';
import { DimensionKey } from '@/types/style.type';
import { Dimensions } from '@/consts/themeConstant';
import Image from 'next/image';

type IconBoxProps = {
  objectFit?: WrapperCompProps['objectFit'];
  objectPosition?: WrapperCompProps['objectPosition'];
  overflow?: WrapperCompProps['overflow'];
  size: DimensionKey;
  srcURL: URL;
};

const IconBox: FC<IconBoxProps> = ({
  size,
  objectFit,
  objectPosition,
  overflow,
  srcURL,
}) => {
  return (
    <Box
      designProps={{
        objectFit,
        objectPosition,
        overflow,
        position: 'relative',
        sizing: { width: [Dimensions[size]], height: [Dimensions[size]] },
      }}
    >
      <Image src={srcURL.toString()} alt='icons' fill />
    </Box>
  );
};

export default IconBox;
