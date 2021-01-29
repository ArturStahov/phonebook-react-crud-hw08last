import {
  Wrapper,
  Title,
  ContactsBlock,
  Text,
  ContactLink,
} from './StyledComponent';
import Container from '../Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <Wrapper>
      <Container>
        <Title>Artur Stakhov &copy; 2021</Title>
        <ContactsBlock>
          <Text>contacts:</Text>
          <ContactLink href="https://github.com/ArturStahov" target="_blank">
            <FontAwesomeIcon icon={faGithub} size="2x" color="#512DA8" />
          </ContactLink>
          <ContactLink
            href="https://www.linkedin.com/in/artur-stakhov/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" color="#512DA8" />
          </ContactLink>
        </ContactsBlock>
      </Container>
    </Wrapper>
  );
}
