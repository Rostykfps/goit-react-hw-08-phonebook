import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { IconContext } from 'react-icons';
import { BsPersonVcard } from 'react-icons/bs';
import { TbPhone } from 'react-icons/tb';
import {
  fetchContacts,
  removeContact,
} from 'redux/contacts/contactsOperations';
import { useContacts } from 'hooks';
import CircularProgress from '@mui/joy/CircularProgress';
import TransitionsModal from 'components/TransitionsModal/TransitionsModal';
import { EditContactForm } from 'components/EditContactForm/EditContactForm';

import {
  ContactsItem,
  ContactsList,
  DeleteBtn,
  IsLoading,
  UpdateBtn,
} from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const [isShowModal, setIsShowModal] = useState(false);
  const [editedContact, setEditedContact] = useState(null);
  const { contacts, filter, isLoading } = useContacts();

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return (
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      ) ?? []
    );
  };

  const toggleShowModal = () => {
    setIsShowModal(!isShowModal);
  };

  const contactsToRender = getFilteredContacts();

  return (
    <>
      <IconContext.Provider value={{ color: '#0d6efd', size: '1.5em' }}>
        {isLoading ? (
          <IsLoading>
            <CircularProgress size="lg" variant="solid" />
          </IsLoading>
        ) : (
          <ContactsList>
            {contactsToRender.map(({ id, name, number }) => (
              <ContactsItem key={id}>
                <BsPersonVcard size="1.2em" />
                {name}: <TbPhone size="1.2em" />
                {number}
                <UpdateBtn
                  type="button"
                  onClick={() => {
                    setEditedContact({ id, name, number });
                    toggleShowModal();
                  }}
                >
                  Update
                </UpdateBtn>
                <DeleteBtn
                  type="button"
                  onClick={() => dispatch(removeContact(id))}
                >
                  Delete
                </DeleteBtn>
              </ContactsItem>
            ))}

            {isShowModal && (
              <TransitionsModal
                isShowModal={isShowModal}
                onClose={toggleShowModal}
              >
                <EditContactForm
                  onClose={toggleShowModal}
                  contact={editedContact}
                />
              </TransitionsModal>
            )}
          </ContactsList>
        )}
      </IconContext.Provider>
    </>
  );
};

export default ContactList;
