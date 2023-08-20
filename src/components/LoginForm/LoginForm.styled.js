import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  gap: 20px;
  padding: 15px;
  border: 2px solid #000;
  background-color: #f8f9fa;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  font-size: 20px;
  font-weight: 500;
`;

export const InputWrapper = styled.div`
  position: relative;
`;
export const FormInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding-left: 38px;
  font-size: 22px;
  border-radius: 3px;
  outline-color: #0a58ca;
`;

export const Button = styled.button`
  color: #ffffff;
  background-color: #0d6efd;
  border: 1px solid #d2d2d2;
  border-radius: 5px;
  font-size: 16px;
  padding: 6px 10px;
  font-weight: 600;
  outline: none;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #0a58ca;
  }
`;
