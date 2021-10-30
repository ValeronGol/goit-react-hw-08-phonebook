import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { getVisibleContacts } from 'redux/contacts/contacts-selectors';
import Contact from 'components/Contact/Contact';
import { List } from './ContactList.styled';
import ListItem from '@mui/material/ListItem';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

export const ContactList = () => {
  const visibleContacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <ListItem key={id} disablePadding>
            <ContactPhoneIcon sx={{ m: 1 }} />
            <Contact
              id={id}
              name={name}
              number={number}
              onDelete={() => dispatch(deleteContact(id))}
            />
          </ListItem>
        );
      })}
    </List>
  );
};
