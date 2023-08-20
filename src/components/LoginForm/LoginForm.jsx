import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logInThunk } from 'redux/auth/authOperations';
import { IconContext } from 'react-icons';
import { GrMail } from 'react-icons/gr';
import { AiFillLock } from 'react-icons/ai';
import {
  Button,
  Form,
  FormInput,
  FormLabel,
  InputWrapper,
} from './LoginForm.styled';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(logInThunk({ email, password }));
    form.reset();
  };

  return (
    <IconContext.Provider value={{ color: '#0d6efd' }}>
      <Form onSubmit={handleSubmit}>
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
        <Button type="submit">Log In</Button>
      </Form>
    </IconContext.Provider>
  );
};
