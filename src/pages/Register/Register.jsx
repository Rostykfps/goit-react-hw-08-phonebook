import { Container, Title } from './Register.styled';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export default function Registration() {
  return (
    <Container>
      <Title>Registration new user</Title>
      <RegisterForm />
    </Container>
  );
}
