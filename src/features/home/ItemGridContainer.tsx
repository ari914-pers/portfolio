import { Grid } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

const ItemGridContainer: FC<PropsWithChildren> = ({ children }) => (
  <Grid
    item
    container
    alignItems='flex-start'
    justifyContent='center'
    xs={12}
    md={6}
  >
    {children}
  </Grid>
);

export default ItemGridContainer;
