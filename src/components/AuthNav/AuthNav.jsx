import { AuthLink, AuthNavWrapper } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavWrapper>
      <AuthLink to="register">Register</AuthLink>
      <AuthLink to="login">Log In</AuthLink>
    </AuthNavWrapper>
  );
};
