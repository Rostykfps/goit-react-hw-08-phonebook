import { useState } from 'react';
import { IconContext } from 'react-icons';
import { useDispatch } from 'react-redux';
import { signUpThunk } from 'redux/auth/authOperations';
import { BiSolidUser } from 'react-icons/bi';
import { GrMail } from 'react-icons/gr';
import { AiFillLock } from 'react-icons/ai';
import {
  Button,
  Form,
  FormInput,
  FormLabel,
  InputWrapper,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(signUpThunk({ name, email, password }));
    form.reset();
  };

  return (
    <IconContext.Provider value={{ color: '#0d6efd' }}>
      <Form onSubmit={handleSubmit}>
        <FormLabel>
          Username
          <InputWrapper>
            <FormInput type="text" name="name" onChange={handleChange} />
            <BiSolidUser size="1.5em" className="react-icon" />
          </InputWrapper>
        </FormLabel>
        <FormLabel>
          Email
          <InputWrapper>
            <FormInput type="email" name="email" onChange={handleChange} />
            <GrMail size="1.5em" className="react-icon" />
          </InputWrapper>
        </FormLabel>
        <FormLabel>
          Password
          <InputWrapper>
            <FormInput
              type="password"
              name="password"
              onChange={handleChange}
            />
            <AiFillLock size="1.5em" className="react-icon" />
          </InputWrapper>
        </FormLabel>
        <Button type="submit">Sign up</Button>
      </Form>
    </IconContext.Provider>
  );
};
