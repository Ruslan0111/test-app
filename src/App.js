import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense } from 'react';

import './assets/styles/index.scss';

import Loader from './components/Loader';

const Login = React.lazy(() => import('./pages/Login'));
const Register = React.lazy(() => import('./pages/Register'));
const Main = React.lazy(() => import('./pages/Main'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
