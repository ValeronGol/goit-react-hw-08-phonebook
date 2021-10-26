import React from 'react';
import { Container, Title } from './HomeView.styled';
import MoodIcon from '@mui/icons-material/Mood';

const HomeView = () => (
  <Container>
    <Title>
      Добро пожаловать в телефонную книгу, пожалуйста зарегистрируйтесь или
      войдите{' '}
      <MoodIcon
        color="primary"
        fontSize="inherit"
        aria-label="Иконка приветствия"
      >
        💁‍♀️
      </MoodIcon>
    </Title>
  </Container>
);

export default HomeView;
