import React from 'react';
import { AppBar, Toolbar, Menu, MenuItem, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const MenuBar: React.FC = () => {
  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [currentMenu, setCurrentMenu] = React.useState<string | null>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, menu: string) => {
    setAnchorEl(event.currentTarget);
    setCurrentMenu(menu);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setCurrentMenu(null);
  };

  const renderMenuItems = (menuItems: Record<string, string>) => {
    return Object.entries(menuItems).map(([key, value]) => (
      <MenuItem key={key} onClick={handleMenuClose}>
        {value}
      </MenuItem>
    ));
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" onClick={(e) => handleMenuOpen(e, 'file')}>
          {t('menu.file')}
        </Button>
        <Button color="inherit" onClick={(e) => handleMenuOpen(e, 'repo')}>
          {t('menu.repo')}
        </Button>
        <Button color="inherit" onClick={(e) => handleMenuOpen(e, 'help')}>
          {t('menu.help')}
        </Button>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          {currentMenu === 'file' &&
            renderMenuItems({
              file_new_repo: t('menu.file_new_repo'),
              file_add_local_repo: t('menu.file_add_local_repo'),
              file_clone_online_repo: t('menu.file_clone_online_repo'),
              file_settings: t('menu.file_settings'),
              file_exit: t('menu.file_exit'),
            })}
          {currentMenu === 'repo' &&
            renderMenuItems({
              repo_pull: t('menu.repo_pull'),
              repo_push: t('menu.repo_push'),
              repo_fetch: t('menu.repo_fetch'),
            })}
          {currentMenu === 'help' &&
            renderMenuItems({
              help_report_issue: t('menu.help_report_issue'),
              help_about: t('menu.help_about'),
            })}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default MenuBar;