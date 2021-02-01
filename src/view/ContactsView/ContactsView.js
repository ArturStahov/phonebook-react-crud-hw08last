import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import ContactsCreateForm from 'components/ContactsCreateForm/';
import FilterContacts from 'components/FilterContacts';
import ContactsList from 'components/ContactList';
import Container from 'components/Container';
import { Wrapper, ContentBlock } from './StyledComponent';
import { getAllItem } from '../../redux/contacts/contacts-operation';

export default function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllItem());
  }, [dispatch]);

  return (
    <Container>
      <Wrapper>
        <ContactsCreateForm />
        <ContentBlock>
          <FilterContacts />
          <ContactsList />
        </ContentBlock>
      </Wrapper>
    </Container>
  );
}
