import React, { FC, PropsWithChildren } from 'react';
import Box from '../wrappers/Box';
import { Asset } from 'contentful';
import Image from 'next/image';
import { DimensionUnit } from '@/types/style.type';
import { DIR_PATH_TO_ASSET_IMAGE } from '@/consts/app.const';
// import noImgNormal from '/images/no_image.png'

type ImageCustomizedProps = {
  imgAsset?: Asset;
  width: [val: number, unit?: DimensionUnit];
  height: [val: number, unit?: DimensionUnit];
  isBiggerNoImg?: boolean;
};

const ImageCustomized: FC<PropsWithChildren<ImageCustomizedProps>> = ({
  imgAsset,
  width,
  height,
  isBiggerNoImg = false,
}) => {
  return (
    <Box
      designProps={{
        sizing: {
          width,
          height,
        },
        position: 'relative',
        twoSidesSpacing: {
          m: ['0-auto'],
        },
      }}
    >
      {imgAsset?.fields.file.url ? (
        <Image
          src={imgAsset?.fields.file.url}
          alt={imgAsset?.fields.title ?? ''}
          style={{
            objectFit: 'contain',
            objectPosition: 'center',
            overflow: 'hidden',
          }}
          fill
        />
      ) : (
        <Image
          src={
            isBiggerNoImg
              ? `${DIR_PATH_TO_ASSET_IMAGE}/no_img_bigger.png`
              : `${DIR_PATH_TO_ASSET_IMAGE}/no_image.png`
          }
          alt='NO IMAGE'
          style={{
            objectFit: 'contain',
            objectPosition: 'center',
            overflow: 'hidden',
          }}
          fill
        />
      )}
    </Box>
  );
};

export default ImageCustomized;
