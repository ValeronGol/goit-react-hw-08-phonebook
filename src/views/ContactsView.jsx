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

export default function ContactsView() {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && <LoaderMore />}
      {error && <ErrorMessage error={error} />}
      <ContactList />
      <ToastContainer position="top-center" theme="colored" />
    </div>
  );
}
