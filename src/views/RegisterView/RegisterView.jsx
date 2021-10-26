import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/auth-operations';
import { Form } from './RegisterView.styled';
import { TextField, Button } from '@mui/material';

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
    <div>
      <h1>Страница регистрации</h1>

      <Form onSubmit={handleSubmit} autoComplete="off">
        <TextField
          fullWidth
          helperText="Please enter your name"
          id="demo-helper-text-aligned"
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
          id="demo-helper-text-aligned"
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          helperText="Please enter your password"
          id="demo-helper-text-aligned"
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
          Зарегистрироваться
        </Button>
      </Form>
    </div>
  );
}
