import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';
import { Container, Name } from './UserMenu,styled';
import { Avatar, Button } from '@mui/material';

export default function UserMenu() {
  const name = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();

  return (
    <Container>
      <Avatar src="/broken-image.jpg" sx={{ mr: 1 }} />
      <Name>Добро пожаловать, {name}</Name>
      <Button
        color="secondary"
        variant="contained"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Выйти
      </Button>
    </Container>
  );
}
