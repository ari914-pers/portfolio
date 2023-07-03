import Renderer from '@/components/atoms/display/Renderer';
import Link from '@/components/atoms/navs/links/Link';
import { APP_NAV } from '@/consts/app.const';
import useMenuControl from '@/hooks/useMenuControl';
import {
  genOneSideSpacingCssProperty,
  genTwoSidesSpacingCssProperty,
} from '@/utils/style.util';
import { IconButton, Menu as MUIMenu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { FC } from 'react';
import { usePathname } from 'next/navigation';
import { Link as Scroll } from 'react-scroll';
import { themeValues } from '@/consts/themeConstant';

const Menu: FC = () => {
  const [open, anchorEl, handleClick, handleClose] = useMenuControl();
  const path = usePathname();

  return (
    <>
      <IconButton
        size='large'
        edge='start'
        color='inherit'
        aria-label='menu'
        sx={{ mr: genOneSideSpacingCssProperty('md') }}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <MUIMenu
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Renderer
          entries={APP_NAV}
          iteratee={(entry) =>
            path === '/' ? (
              <Scroll to={entry.id} offset={-200} key={entry.id}>
                <MenuItem
                  sx={{
                    p: genTwoSidesSpacingCssProperty('sm-md'),
                    bgcolor:
                      entry.path === path
                        ? themeValues.palette.semantics.link
                        : 'inherit',
                    color:
                      entry.path === path
                        ? (theme) => theme.palette.common.white
                        : themeValues.palette.semantics.link,
                    '&:hover': {
                      color: themeValues.palette.semantics.link,
                    },
                  }}
                  onClick={handleClose}
                >
                  {entry.label}
                </MenuItem>
              </Scroll>
            ) : (
              <Link href={entry.path} key={entry.id}>
                <MenuItem
                  sx={{
                    p: genTwoSidesSpacingCssProperty('sm-md'),
                    bgcolor:
                      entry.path === path
                        ? themeValues.palette.semantics.link
                        : 'inherit',
                    color:
                      entry.path === path
                        ? (theme) => theme.palette.common.white
                        : 'inherit',
                    '&:hover': {
                      color: themeValues.palette.semantics.link,
                    },
                  }}
                  onClick={handleClose}
                >
                  {entry.label}
                </MenuItem>
              </Link>
            )
          }
        />
      </MUIMenu>
    </>
  );
};

export default Menu;
