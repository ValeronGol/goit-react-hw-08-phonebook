import { useSelector } from 'react-redux';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import authSelectors from 'redux/auth/auth-selectors';

import { AppBar, Box, Toolbar, Typography } from '@mui/material';

export default function AppBarNav() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Navigation />
          </Typography>
          {isLoggedIn ? (
            <Typography variant="h6">
              <UserMenu />
            </Typography>
          ) : (
            <Typography variant="h6">
              <AuthNav />
            </Typography>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
