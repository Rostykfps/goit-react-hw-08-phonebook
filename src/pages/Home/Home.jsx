import { Container, ImageWrapper, Title, TitleWrapper } from './Home.styled';
import imagePhonebook from '../../images/phone-book.png';

export default function Home() {
  return (
    <Container>
      <TitleWrapper>
        <Title>Phonebook welcome page</Title>
      </TitleWrapper>
      <ImageWrapper>
        <img src={imagePhonebook} alt="Phonebook" width={450} />
      </ImageWrapper>
    </Container>
  );
}
