import styled from 'styled-components';

export const IsLoading = styled.div`
  text-align: center;
`;

export const ContactsList = styled.ul`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ContactsItem = styled.li`
  padding-bottom: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 22px;
  font-weight: 500;
  border-bottom: 1px solid #000000;
`;

export const UpdateBtn = styled.button`
  margin-left: auto;
  background-color: #0d6efd;
  border: 1px solid #d2d2d2;
  border-radius: 5px;
  font-size: 14px;
  color: #ffffff;
  padding: 5px 10px;
  font-weight: 600;
  outline: none;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #0a58ca;
  }
`;

export const DeleteBtn = styled.button`
  margin-left: 10px;
  background-color: #0d6efd;
  border: 1px solid #d2d2d2;
  border-radius: 5px;
  font-size: 14px;
  color: #ffffff;
  padding: 5px 10px;
  font-weight: 600;
  outline: none;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #0a58ca;
  }
`;
