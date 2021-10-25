import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';
import { Container, Name, Avatar } from './UserMenu,styled';

export default function UserMenu() {
  const name = useSelector(authSelectors.getUsername);
  const avatar =
    'https://www.disneyplusinformer.com/wp-content/uploads/2021/09/The-Simpsons-Profile-Icons-2.png';
  const dispatch = useDispatch();

  return (
    <Container>
      <Avatar src={avatar} alt="" width="32" />
      <Name>Добро пожаловать, {name}</Name>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Выйти
      </button>
    </Container>
  );
}
