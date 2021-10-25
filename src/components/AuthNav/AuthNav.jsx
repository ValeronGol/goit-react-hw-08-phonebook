import React from 'react';
import { StyledNavLink } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <div>
      <StyledNavLink to="/register" exact>
        Регистрация
      </StyledNavLink>
      <StyledNavLink to="/login" exact>
        Логин
      </StyledNavLink>
    </div>
  );
}
