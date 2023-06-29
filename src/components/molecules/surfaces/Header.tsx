import { AppBar, Slide, Toolbar, useScrollTrigger } from '@mui/material';
import { FC, PropsWithChildren, ReactElement } from 'react';
import Image from 'next/image';
import { DIR_PATH_TO_ASSET_IMAGE } from '@/consts/app.const';
import Link from '@/components/atoms/navs/links/Link';
import Menu from '../nav/Menu';

const HideOnScroll: FC<PropsWithChildren> = ({ children }) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children as ReactElement}
    </Slide>
  );
};

const Header: FC = () => {
  return (
    // <Box sx={{ flexGrow: 1 }}>
    <HideOnScroll>
      <AppBar sx={{ flexGrow: 1 }} position='sticky'>
        <Toolbar>
          <Menu />
          <Link href='/' MUILinkProps={{ sx: { flexGrow: 1 } }}>
            <Image
              src={`${DIR_PATH_TO_ASSET_IMAGE}/logo_header.svg`}
              alt='HEADER_HEADING'
              width={600}
              height={80}
              priority
            />
          </Link>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
    // </Box>
  );
};

export default Header;
