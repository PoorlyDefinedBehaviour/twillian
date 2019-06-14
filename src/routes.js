import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <h1>hello world</h1>} />
        <Route path="/register" component={() => <h1>register</h1>} />
        <Route path="/login" component={() => <h1>login</h1>} />
      </Switch>
    </BrowserRouter>
  );
}
