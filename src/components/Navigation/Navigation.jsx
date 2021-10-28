import React from 'react';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { StyledNavLink } from './Navigation.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      {!isLoggedIn && (
        <StyledNavLink to="/" exact>
          Home
        </StyledNavLink>
      )}

      {isLoggedIn && (
        <StyledNavLink to="/contacts" exact>
          Phonebook
        </StyledNavLink>
      )}
    </nav>
  );
};

export default Navigation;
