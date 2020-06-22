import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import TestPage from "./pages/TestPage/TestPage";

export const userRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/admin-panel" exact>
          <AdminPage />
        </Route>
        <Route path="/test" exact>
          <TestPage />
        </Route>
        <Redirect to="/admin-panel" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/admin-panel" exact>
        <AuthPage />
      </Route>
      <Route path="/" exact>
        <LandingPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
