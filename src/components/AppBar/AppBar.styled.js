import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MenuLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  color: #0d6efd;
  &:hover,
  &:focus {
    color: #0a58ca;
  }
`;

export const AppBarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
