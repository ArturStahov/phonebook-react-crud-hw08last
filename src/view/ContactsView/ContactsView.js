import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import ContactsCreateForm from 'components/ContactsCreateForm/';
import FilterContacts from 'components/FilterContacts';
import ContactsList from 'components/ContactList';
import Container from 'components/Container';
import { Wrapper, ContentBlock, Info } from './StyledComponent';
import { getAllItem } from 'redux/contacts/contacts-operation';
import { itemsArray } from 'redux/selectors/contactList-selector';

export default function ContactsView() {
  const dispatch = useDispatch();
  const contactsArray = useSelector(itemsArray);

  useEffect(() => {
    dispatch(getAllItem());
  }, [dispatch]);

  return (
    <Container>
      <Wrapper>
        <ContactsCreateForm />
        <ContentBlock>
          {contactsArray.length > 0 ? (
            <FilterContacts />
          ) : (
            <Info>create you first contact note</Info>
          )}

          <ContactsList />
        </ContentBlock>
      </Wrapper>
    </Container>
  );
}
