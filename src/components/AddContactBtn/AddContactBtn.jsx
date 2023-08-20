import TransitionsModal from 'components/TransitionsModal/TransitionsModal';
import { Button } from './AdContactBtn.styled';
import ContactForm from 'components/AddContactForm/AddContactForm';
import { useState } from 'react';

export const AddContactBtn = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const toggleShowModal = () => {
    setIsShowModal(!isShowModal);
  };
  return (
    <>
      <Button type="button" onClick={() => toggleShowModal()}>
        Add new contact
      </Button>
      {isShowModal && (
        <TransitionsModal isShowModal={isShowModal} onClose={toggleShowModal}>
          <ContactForm onClose={toggleShowModal} />
        </TransitionsModal>
      )}
    </>
  );
};
