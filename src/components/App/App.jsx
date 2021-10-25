import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import { authOperations } from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';
import AppBar from 'components/AppBar/AppBar';
import PrivateRoute from 'components/Route/PrivateRoute';
import PublicRoute from 'components/Route/PublicRoute';
import { LoaderMore } from 'components/Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from './App.styled';

const HomeView = lazy(() => import('views/HomeView/HomeView'));
const RegisterView = lazy(() => import('views/RegisterView/RegisterView'));
const LoginView = lazy(() => import('views/LoginView/LoginView'));
const ContactsView = lazy(() => import('views/ContactsView'));

export default function App() {
  const dispatch = useDispatch();
  const isError = useSelector(authSelectors.getError);

  const Msg = () => (
    <div>
      Error, please try again... <br />
      <br /> May be incorrect Login or Password...
    </div>
  );

  useEffect(() => {
    if (isError) {
      toast.error(<Msg />, {
        theme: 'colored',
        icon: '😵',
        position: 'top-right',
        autoClose: 3000,
      });
    }
  }, [isError]);

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
