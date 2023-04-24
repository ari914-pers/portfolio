declare module '@mui/material/styles' {
  interface TypographyVariants {
    poster: React.CSSProperties;
    linkBody: React.CSSProperties;
    linkHeading: React.CSSProperties;
    spanRegular: React.CSSProperties;
    spanHeading: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    poster?: React.CSSProperties;
    linkBody?: React.CSSProperties;
    linkHeading?: React.CSSProperties;
    spanRegular?: React.CSSProperties;
    spanHeading?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    poster: true;
    linkBody: true;
    linkHeading: true;
    spanRegular: true;
    spanHeading: true;
  }
}
