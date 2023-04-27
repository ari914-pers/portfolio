import React, { FC, ReactNode } from 'react';
import { Stack as MUIStack } from '@mui/material';
import { WrapperCompProps } from '@/types/component.type';
import {
  checkTypePassedToOneSideSpacingProperty,
  genOneSideSpacingCssProperty,
  genSizingPropertyVal,
  genTwoSidesSpacingCssProperty,
} from '@/utils/style.util';
import {
  AlignItems,
  DimensionKey,
  FlexDirection,
  JustifyContent,
} from '@/types/style.type';

type StackProps = {
  children: ReactNode;
  designProps: WrapperCompProps;
  divider?: ReactNode;
  direction?: FlexDirection;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  spacing?: DimensionKey;
};

// TODO storybookのstoriesを整備する
const Stack: FC<StackProps> = ({
  direction,
  justifyContent,
  alignItems,
  divider,
  children,
  spacing,
  designProps: {
    color,
    backgroundColor,
    overflow,
    sizing,
    oneSideSpacing,
    twoSidesSpacing,
  },
}) => {
  return (
    <>
      <MUIStack
        direction={direction}
        justifyContent={justifyContent}
        alignItems={alignItems}
        divider={divider}
        spacing={spacing && genOneSideSpacingCssProperty(spacing)}
        sx={{
          color,
          bgcolor: backgroundColor,
          overflow,
          width: sizing?.width && genSizingPropertyVal(...sizing.width),
          height: sizing?.height && genSizingPropertyVal(...sizing.height),
          maxWidth:
            sizing?.maxWidth && genSizingPropertyVal(...sizing.maxWidth),
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
      </MUIStack>
    </>
  );
};

export default Stack;
