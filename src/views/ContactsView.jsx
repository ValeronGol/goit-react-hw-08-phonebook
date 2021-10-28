import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { getIsLoading, getError } from 'redux/contacts/contacts-selectors';
import { fetchContact } from 'redux/contacts/contacts-operations';
import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { LoaderMore } from 'components/Loader/Loader';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import 'react-toastify/dist/ReactToastify.css';
import { Typography, Box } from '@mui/material';

export default function ContactsView() {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <Box sx={{ p: 3 }}>
      <ContactForm />
      <Box sx={{ p: 2 }}>
        <Typography variant="h4">Contacts </Typography>
      </Box>
      <Filter />
      {isLoading && <LoaderMore />}
      {error && <ErrorMessage error={error} />}
      <ContactList />
      <ToastContainer position="top-center" theme="colored" />
    </Box>
  );
}
