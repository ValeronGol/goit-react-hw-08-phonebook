import React from 'react';
import MoodIcon from '@mui/icons-material/Mood';
import { Box, Typography } from '@mui/material';
import { StyledNavLink } from './HomeView.styled ';

const HomeView = () => (
  <Box sx={{ p: 5, width: 800, mx: 'auto' }}>
    <Typography variant="h3" align="center">
      Welcome to the Phonebook!!!
      <MoodIcon color="primary" fontSize="inherit" aria-label="icon" />
      Please
      <StyledNavLink to="/register" exact>
        registration
      </StyledNavLink>
      or
      <StyledNavLink to="/login" exact>
        login
      </StyledNavLink>
    </Typography>
  </Box>
);

export default HomeView;
