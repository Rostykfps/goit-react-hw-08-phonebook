import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(256, 256, 256, 0.8);
`;

export const ModalWin = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  background-color: #ff0000;
  padding: 30px;
`;
