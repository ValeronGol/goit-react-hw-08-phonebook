import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/auth-operations';
import { Form } from './LoginView.styled';
import { TextField, Button, Box } from '@mui/material';

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Box sx={{ p: 3, display: 'flex', justifyContent: 'center' }}>
      <Form onSubmit={handleSubmit} autoComplete="off">
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
          Войти
        </Button>
      </Form>
    </Box>
  );
}
