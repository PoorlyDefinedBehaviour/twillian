import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import api from './services/api';
import { isAuthenticated, getUser } from './services/auth';

import Register from './pages/Register';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import Profile from './pages/Profile';

export default function Routes() {
  const dispatch = useDispatch();

  async function refreshUser() {
    const user = getUser();
    if (!user) return;

    try {
      const response = await api.get(`user/${user._id}`);

      dispatch({
        type: 'SET_USER',
        user: response.data.user,
        token: user.token
      });
    } catch (ex) {
      console.log(ex);
    }
  }

  refreshUser();

  function PrivateRoute({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated() ? (
            <Component {...props} />
          ) : (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
          )
        }
      />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/timeline" component={Timeline} />
        <PrivateRoute path="/profile/:user_id" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}
