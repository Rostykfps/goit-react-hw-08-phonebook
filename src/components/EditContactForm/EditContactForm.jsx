import { useState } from 'react';
import { IconContext } from 'react-icons';
import { BsPersonVcard } from 'react-icons/bs';
import { TbPhone } from 'react-icons/tb';
import { useDispatch } from 'react-redux';
import { editContact } from 'redux/contacts/contactsOperations';
import {
  Button,
  Form,
  FormInput,
  FormLabel,
  InputWrapper,
  StyledInputMask,
  Title,
} from './EditContactForm.styled';

export const EditContactForm = ({ onClose, contact }) => {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  const dispatch = useDispatch();

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

  const handleSubmit = event => {
    event.preventDefault();
    const data = { name, number };
    dispatch(editContact({ id: [contact.id], data }));
    setName('');
    setNumber('');
    onClose();
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
      <Title>Update contact</Title>
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

        <Button type="submit">Update contact</Button>
      </Form>
    </IconContext.Provider>
  );
};
