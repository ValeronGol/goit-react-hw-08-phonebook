import React from 'react';
import MoodIcon from '@mui/icons-material/Mood';
import { Container, Typography } from '@mui/material';

const HomeView = () => (
  <Container maxWidth="xl" fixed>
    <Typography align="center" variant="h1">
      Welcome to the Phonebook, Please registration or login{' '}
      <MoodIcon color="primary" fontSize="inherit" aria-label="icon" />
    </Typography>
  </Container>
);

export default HomeView;
