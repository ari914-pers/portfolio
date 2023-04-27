import React, { FC, PropsWithChildren } from 'react';
import { Box as MUIBox } from '@mui/material';
import { WrapperCompProps } from '@/types/component.type';
import {
  checkTypePassedToOneSideSpacingProperty,
  genOneSideSpacingCssProperty,
  genSizingPropertyVal,
  genTwoSidesSpacingCssProperty,
} from '@/utils/style.util';

type BoxProps = {
  designProps: WrapperCompProps;
};

// TODO storybookのstoriesを整備する
const Box: FC<PropsWithChildren<BoxProps>> = ({
  children,
  designProps: {
    color,
    backgroundColor,
    display,
    overflow,
    sizing,
    oneSideSpacing,
    twoSidesSpacing,
  },
}) => {
  return (
    <MUIBox
      sx={{
        color,
        bgcolor: backgroundColor,
        display,
        overflow,
        width: sizing?.width && genSizingPropertyVal(...sizing.width),
        height: sizing?.height && genSizingPropertyVal(...sizing.height),
        maxWidth: sizing?.maxWidth && genSizingPropertyVal(...sizing.maxWidth),
        maxHeight:
          sizing?.maxHeight && genSizingPropertyVal(...sizing.maxHeight),
        minWidth: sizing?.minWidth && genSizingPropertyVal(...sizing.minWidth),
        minHeight:
          sizing?.minHeight && genSizingPropertyVal(...sizing.minHeight),
        m:
          twoSidesSpacing?.m &&
          genTwoSidesSpacingCssProperty(...twoSidesSpacing.m),
        p:
          twoSidesSpacing?.p &&
          genTwoSidesSpacingCssProperty(...twoSidesSpacing.p),
        mt:
          oneSideSpacing?.mt &&
          (checkTypePassedToOneSideSpacingProperty(oneSideSpacing.mt)
            ? genSizingPropertyVal(...oneSideSpacing.mt)
            : genOneSideSpacingCssProperty(...oneSideSpacing.mt)),
        ml:
          oneSideSpacing?.ml &&
          (checkTypePassedToOneSideSpacingProperty(oneSideSpacing.ml)
            ? genSizingPropertyVal(...oneSideSpacing.ml)
            : genOneSideSpacingCssProperty(...oneSideSpacing.ml)),
        mb:
          oneSideSpacing?.mb &&
          (checkTypePassedToOneSideSpacingProperty(oneSideSpacing.mb)
            ? genSizingPropertyVal(...oneSideSpacing.mb)
            : genOneSideSpacingCssProperty(...oneSideSpacing.mb)),
        mr:
          oneSideSpacing?.mr &&
          (checkTypePassedToOneSideSpacingProperty(oneSideSpacing.mr)
            ? genSizingPropertyVal(...oneSideSpacing.mr)
            : genOneSideSpacingCssProperty(...oneSideSpacing.mr)),
      }}
    >
      {children}
    </MUIBox>
  );
};

export default Box;
