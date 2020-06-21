import React from "react";
import Loader from "./Components/Loader";
import { BrowserRouter as Router } from "react-router-dom";
import { userRoutes } from "./routes";
import { useAuth } from "./hooks/auth.hook";
import { AuthContext } from "./context/AuthContext";
import "materialize-css";

function App() {
  console.log("App");
  const { token, login, userId, ready } = useAuth();
  const isAuth = !!token;
  const routes = userRoutes(isAuth);

  if (!ready) {
    return <Loader />;
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        userId,
        isAuth,
      }}
    >
      <Router>
        <div>{routes}</div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
