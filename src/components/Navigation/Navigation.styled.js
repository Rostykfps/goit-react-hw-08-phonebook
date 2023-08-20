import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50vw;
  margin-right: 30px;
`;

export const HomeLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-size: 36px;
  font-weight: 600;
`;

export const ContactsLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-size: 30px;
  font-weight: 600;
`;
