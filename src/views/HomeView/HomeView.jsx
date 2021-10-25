import React from 'react';
import { Container, Title } from './HomeView.styled';

const HomeView = () => (
  <Container>
    <Title>
      Добро пожаловать в телефонную книгу, пожалуйста зарегистрируйтесь или
      войдите{' '}
      <span role="img" aria-label="Иконка приветствия">
        💁‍♀️
      </span>
    </Title>
  </Container>
);

export default HomeView;
