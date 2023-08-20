import ContactList from 'components/ContactsList/ContactList';
import Filter from 'components/Filter/Filter';
import { Container, TitleContacts } from './Contacts.styled';
import BackToTop from 'components/BackToTop/BackToTop';

export default function Contacts() {
  return (
    <Container>
      <TitleContacts>Contacts</TitleContacts>
      <Filter />

      <BackToTop>
        <ContactList />
      </BackToTop>
    </Container>
  );
}
