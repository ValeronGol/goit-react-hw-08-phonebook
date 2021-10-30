import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addContact } from 'redux/contacts/contacts-operations';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { ConteinerForm } from './ContactForm.styled';
import { TextField, InputAdornment, Button } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const contact = { name, number };
  const dispatch = useDispatch();

  const handleChangeName = event => {
    setName(event.currentTarget.value);
  };

  const handleChangeNumber = event => {
    setNumber(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const duplicateContact = contacts.find(contact => {
      return contact.name === name;
    });
    if (duplicateContact) {
      toast.warn(`${name} is in the phonebook!!!`);
      resetState();
      return [...contacts];
    }
    dispatch(addContact(contact));
    resetState();
  };

  const resetState = () => {
    setName('');
    setNumber('');
  };

  return (
    <ConteinerForm>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          margin="dense"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChangeName}
          value={name}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <TextField
          label="Number"
          margin="dense"
          type="tel"
          name="number"
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
          onChange={handleChangeNumber}
          value={number}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocalPhoneIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />

        <Button type="submit" variant="contained" endIcon={<AddCircleIcon />}>
          Add contact
        </Button>
      </form>
    </ConteinerForm>
  );
}
