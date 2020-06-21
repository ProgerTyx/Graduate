import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import AuthPage from "./pages/AuthPage/AuthPage";

export const userRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/admin" exact>
          <AdminPage />
        </Route>
        <Redirect to="/admin" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/admin" exact>
        <AuthPage />
      </Route>
      <Route path="/" exact>
        <LandingPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
