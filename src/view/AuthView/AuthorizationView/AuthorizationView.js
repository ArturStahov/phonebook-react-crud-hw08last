import Section from 'components/Section';
import AuthorizationForm from 'components/Auth/AuthorizationForm';
import { Wrapper, Title, SelectElem } from './StyledComponent';

export default function AuthorizationView() {
  return (
    <Wrapper>
      <Title>
        <SelectElem>phonebook</SelectElem>помогает держать контакты в
        безопасности.
      </Title>
      <Section>
        <AuthorizationForm />
      </Section>
    </Wrapper>
  );
}
