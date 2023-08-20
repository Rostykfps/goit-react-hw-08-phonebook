import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addNewContact } from 'redux/contacts/contactsOperations';

import {
  Button,
  Form,
  FormInput,
  FormLabel,
  InputWrapper,
  StyledInputMask,
  Title,
} from './AddContactForm.styled';
import { useContacts } from 'hooks';
import { BsPersonVcard } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { TbPhone } from 'react-icons/tb';

const ContactForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const { contacts } = useContacts();

  const handleSubmit = event => {
    event.preventDefault();

    const newContact = { id: nanoid(), name, number };

    const findContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (findContact) {
      return toast.info(`${name} is already in contacts.`);
    }

    dispatch(addNewContact(newContact));

    setName('');
    setNumber('');

    onClose();
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const mask = [
    '+',
    /\d/,
    /\d/,
    ' ',
    '(',
    /\d/,
    /\d/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
  ];
  return (
    <IconContext.Provider value={{ color: '#0d6efd' }}>
      <Title>Add new contact</Title>
      <Form onSubmit={handleSubmit}>
        <FormLabel>
          Name
          <InputWrapper>
            <FormInput
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={handleChange}
            />
            <BsPersonVcard size="1.5em" className="react-icon" />
          </InputWrapper>
        </FormLabel>
        <FormLabel>
          Number
          <InputWrapper>
            <StyledInputMask
              mask={mask}
              placeholder="+__ (___) ___-__-__"
              type="tel"
              name="number"
              value={number}
              pattern="\+\d{2} \(\d{3}\) \d{3}-\d{2}-\d{2}"
              title="Phone number must be digits and format '+99 (999) 999-99-99'"
              required
              onChange={handleChange}
            />
            <TbPhone size="1.5em" className="react-icon" />
          </InputWrapper>
        </FormLabel>
        <Button type="submit">Add contact</Button>
      </Form>
    </IconContext.Provider>
  );
};

export default ContactForm;
