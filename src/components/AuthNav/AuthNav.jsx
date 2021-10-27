import React from 'react';
import { StyledNavLink } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <div>
      <StyledNavLink to="/register" exact>
        Registration
      </StyledNavLink>
      <StyledNavLink to="/login" exact>
        Login
      </StyledNavLink>
    </div>
  );
}
