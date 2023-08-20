import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOutThunk } from 'redux/auth/authOperations';
import { Greeting, MailWrapper, UserMenuWrapper } from './UserMenu.styled';
import { Button } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuWrapper>
      <Greeting>
        Welcome, <MailWrapper>{user.email}</MailWrapper>
      </Greeting>
      <Button
        className="custom-button"
        color="inherit"
        type="button"
        onClick={() => dispatch(logOutThunk())}
      >
        Logout
      </Button>
    </UserMenuWrapper>
  );
};
