import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ModalWin, Overlay } from './ModalWindow.styled';

export const ModalWindow = ({ onClose, children }) => {
  useEffect(() => {
    const handlePresESC = ({ code }) => {
      if (code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handlePresESC);
    return () => {
      window.removeEventListener('keydown', handlePresESC);
    };
  }, [onClose]);

  const handleCloseOverlay = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleCloseOverlay}>
      <ModalWin>{children}</ModalWin>
    </Overlay>,
    document.querySelector('#modal-root')
  );
};

ModalWindow.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
