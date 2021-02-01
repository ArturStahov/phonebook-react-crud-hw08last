import { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import AppBar from './components/AppBar';
import AuthorizationView from './view/AuthView/AuthorizationView';
import RegistrationView from './view/AuthView/RegistrationView';
import Footer from './components/Footer';
import ContactsView from './view/ContactsView';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';

export default function App() {
  return (
    <>
      <Header>
        <AppBar />
      </Header>
      <Suspense fallback={<h2>...loading</h2>}>
        <Switch>
          <PublicRoute exact path="/" redirectTo="/contacts" restricted>
            <AuthorizationView />
          </PublicRoute>

          <PublicRoute exact path="/signup" restricted>
            <RegistrationView />
          </PublicRoute>

          <PrivateRoute path="/contacts" redirectTo="/">
            <ContactsView />
          </PrivateRoute>

          <Route>
            <h2>404</h2>
          </Route>
        </Switch>
      </Suspense>
      <Footer />
    </>
  );
}
