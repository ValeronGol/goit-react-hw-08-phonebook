import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getIsLoading, getError } from 'redux/contacts/contacts-selectors';
import { fetchContact } from 'redux/contacts/contacts-operations';
import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { LoaderMore } from 'components/Loader/Loader';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { Typography, Container } from '@mui/material';

export default function ContactsView() {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <Container sx={{ p: 3 }} maxWidth="xl">
      <ContactForm />
      <Typography sx={{ p: 2 }} variant="h4">
        Contacts
      </Typography>
      <Filter />
      {isLoading && <LoaderMore />}
      {error && <ErrorMessage error={error} />}
      <ContactList />
    </Container>
  );
}
