import React from 'react';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { StyledNavLink } from './Navigation.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <StyledNavLink to="/" exact>
        Главная
      </StyledNavLink>
      {isLoggedIn && (
        <>
          <StyledNavLink to="/contacts" exact>
            Контакты
          </StyledNavLink>
        </>
      )}
    </nav>
  );
};

export default Navigation;
