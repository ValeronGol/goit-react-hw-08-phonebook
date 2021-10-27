import React from 'react';
import MoodIcon from '@mui/icons-material/Mood';
import { Box, Typography } from '@mui/material';

const HomeView = () => (
  <Box p={5}>
    <Typography align="center" variant="h3">
      Welcome to the Phonebook, Please registration or login{' '}
      <MoodIcon color="primary" fontSize="inherit" aria-label="icon" />
    </Typography>
  </Box>
);

export default HomeView;
