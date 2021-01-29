import Section from 'components/Section';
import RegistrationForm from 'components/Auth/RegistrationForm';
import { Wrapper, Title, SelectElem } from './StyledComponent';

export default function RegistrationView() {
  return (
    <Wrapper>
      <Title>
        <SelectElem>phonebook</SelectElem>почуствуй себя защищенным уже сегодня.
        Легкий старт!
      </Title>
      <Section>
        <RegistrationForm />
      </Section>
    </Wrapper>
  );
}
