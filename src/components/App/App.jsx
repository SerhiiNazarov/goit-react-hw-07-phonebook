import FormPhonebook from '../FormPhonebook';
import Container from '../Container';
import Contacts from '../Contacts';
import Filter from '../Filter';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import { useEffect } from 'react';

export default function App() {
  const contacts = useSelector(contactsSelectors.getContacts);
  const loading = useSelector(contactsSelectors.getIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      {loading ? (
        <p style={{ color: 'green' }}>Loading ...</p>
      ) : (
        <>
          {' '}
          <h1>Phonebook</h1>
          <FormPhonebook />
          <h2>Contacts</h2>
          {contacts.length > 1 && <Filter />}
          {contacts.length > 0 ? (
            <Contacts />
          ) : (
            <p style={{ color: 'red' }}>
              Your phonebook is empty. Please add contact.
            </p>
          )}
        </>
      )}
    </Container>
  );
}
