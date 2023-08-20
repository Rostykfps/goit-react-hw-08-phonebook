import { useAuth } from 'hooks';
import { ContactsLink, HomeLink, Nav } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Nav>
      <HomeLink to="/">Phonebook</HomeLink>
      {isLoggedIn && <ContactsLink to="contacts">Contacts</ContactsLink>}
    </Nav>
  );
};
