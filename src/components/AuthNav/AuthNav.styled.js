import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AuthNavWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  width: 100%;
`;

export const AuthLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  min-width: auto;
  padding: 4px 12px;
  border-radius: 4px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #0a58ca;
  }
`;
