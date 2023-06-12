import React, { FC, ReactNode } from 'react';
import { Container as MUIContainer } from '@mui/material';
import { WrapperCompProps } from '@/types/components/common.type';
import {
  checkTypePassedToOneSideSpacingProperty,
  genOneSideSpacingCssProperty,
  genSizingPropertyVal,
  genTwoSidesSpacingCssProperty,
} from '@/utils/style.util';
import { Breakpoint } from '@mui/system';

type ContainerProps = {
  children: ReactNode;
  designProps: WrapperCompProps;
  maxWidth?: Breakpoint;
  disableGutters?: boolean;
  fixed?: boolean;
};

// TODO storybookのstoriesを整備する
const Container: FC<ContainerProps> = ({
  children,
  maxWidth,
  disableGutters,
  fixed,
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
    <>
      <MUIContainer
        maxWidth={maxWidth}
        disableGutters={disableGutters}
        fixed={fixed}
        sx={{
          color,
          bgcolor: backgroundColor,
          display,
          overflow,
          height: sizing?.height && genSizingPropertyVal(...sizing.height),
          maxHeight:
            sizing?.maxHeight && genSizingPropertyVal(...sizing.maxHeight),
          minWidth:
            sizing?.minWidth && genSizingPropertyVal(...sizing.minWidth),
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
      </MUIContainer>
    </>
  );
};

export default Container;
