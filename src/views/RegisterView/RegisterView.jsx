import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/auth-operations';
import { Form } from './RegisterView.styled';
import { TextField, Button, Container } from '@mui/material';

export default function RegisterView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container maxWidth="xs" fixed>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <TextField
          fullWidth
          helperText="Please enter your name"
          margin="dense"
          label="Name"
          size="string"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          helperText="Please enter your email"
          margin="dense"
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          helperText="Please enter your password"
          margin="dense"
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          autoComplete="off"
          minLength="7"
          title="Пароль должен быть не менее 7 символов"
        />

        <Button variant="contained" type="submit">
          Registration
        </Button>
      </Form>
    </Container>
  );
}
