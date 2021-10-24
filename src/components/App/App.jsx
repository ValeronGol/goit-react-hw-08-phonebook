import { useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';
import { authOperations } from 'redux/auth/auth-operations';

import AppBar from 'components/AppBar/AppBar';
import PrivateRoute from 'components/Route/PrivateRoute';
import PublicRoute from 'components/Route/PublicRoute';
import { LoaderMore } from 'components/Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from './App.styled';

const HomeView = lazy(() => import('views/HomeView'));
const RegisterView = lazy(() => import('views/RegisterView'));
const LoginView = lazy(() => import('views/LoginView'));
const ContactsView = lazy(() => import('views/ContactsView'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <Switch>
        <Suspense fallback={<LoaderMore />}>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>
          <PublicRoute exact path="/register" restricted>
            <RegisterView />
          </PublicRoute>
          <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
            <LoginView />
          </PublicRoute>
          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>
        </Suspense>
      </Switch>
      <ToastContainer />
    </Container>
  );
}
