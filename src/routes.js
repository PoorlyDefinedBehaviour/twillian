import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from './pages/Register';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import Profile from './pages/Profile';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/timeline" component={Timeline} />
        <Route path="/profile/:user_id" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}
