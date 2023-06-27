import { FC, PropsWithChildren, ReactNode } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  SxProps,
  Theme,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import {
  genSizingPropertyVal,
  genTwoSidesSpacingCssProperty,
} from '@/utils/style.util';
import { isNull } from 'lodash';

type AccordionWrapperProps = {
  panelName?: string;
  currentlyExpanded?: boolean | string;
  handleExpansionChange?: (panelName: string) => void;
  fieldName: ReactNode;
  accordionStyle?: {
    accordion?: SxProps<Theme>;
    summary?: SxProps<Theme>;
    detail?: SxProps<Theme>;
  };
};

const AccordionWrapper: FC<PropsWithChildren<AccordionWrapperProps>> = ({
  fieldName,
  panelName,
  handleExpansionChange,
  currentlyExpanded,
  children,
  accordionStyle,
}) => {
  return !isNull(fieldName) ? (
    <Accordion
      disableGutters
      expanded={
        panelName && currentlyExpanded
          ? panelName === currentlyExpanded
          : undefined
      }
      onChange={(_e, expanded) => {
        handleExpansionChange
          ? handleExpansionChange(panelName ?? '')
          : (expanded = !expanded);
      }}
      sx={
        accordionStyle
          ? {
              width: genSizingPropertyVal(100, '%'),
              ...accordionStyle.accordion,
            }
          : { width: genSizingPropertyVal(100, '%') }
      }
    >
      <AccordionSummary
        expandIcon={<ExpandMore />}
        sx={accordionStyle && { ...accordionStyle.summary }}
      >
        {fieldName}
      </AccordionSummary>
      <AccordionDetails
        sx={
          accordionStyle
            ? {
                p: genTwoSidesSpacingCssProperty('md-md'),
                ...accordionStyle.detail,
              }
            : { p: genTwoSidesSpacingCssProperty('md-md') }
        }
      >
        {children}
      </AccordionDetails>
    </Accordion>
  ) : null;
};

export default AccordionWrapper;
