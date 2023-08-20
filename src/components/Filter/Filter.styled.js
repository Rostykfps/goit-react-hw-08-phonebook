import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 50px;
`;

export const LabelFilter = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 24px;
  font-weight: 600;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const InputFilter = styled.input`
  width: 300px;
  padding-left: 35px;
  font-size: 22px;
  border-radius: 4px;
  outline-color: #0a58ca;
`;
