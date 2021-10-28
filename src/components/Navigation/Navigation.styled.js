import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: rgb(246, 244, 245);
  &.active {
    color: #e84a5f;
  }
`;
