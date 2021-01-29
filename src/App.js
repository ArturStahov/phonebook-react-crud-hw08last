import { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import AppBar from './components/AppBar';
import AuthorizationView from './view/AuthView/AuthorizationView';
import RegistrationView from './view/AuthView/RegistrationView';
import Footer from './components/Footer';
import ContactsView from './view/ContactsView';

export default function App() {
  return (
    <>
      <Header>
        <AppBar />
      </Header>
      <Suspense fallback={<h2>...loading</h2>}>
        <Switch>
          <Route exact path="/">
            <AuthorizationView />
          </Route>
          <Route path="/signup">
            <RegistrationView />
          </Route>
          <Route path="/contacts">
            <ContactsView />
          </Route>
          <Route>
            <h2>404</h2>
          </Route>
        </Switch>
      </Suspense>
      <Footer />
    </>
  );
}
