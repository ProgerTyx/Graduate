import React, { useState, useContext, useEffect } from "react";
import { useHttp } from "../../hooks/http.hook";
import { AuthContext } from "../../context/AuthContext";
import { useMessage } from "../../hooks/message.hook";
import classNames from "classnames";
import "./authpage.scss";

const AuthPage = () => {
  const auth = useContext(AuthContext);
  const message = useMessage();
  const { loading, request, error, clearError } = useHttp();
  const [form, setForm] = useState({
    login: "",
    password: "",
  });

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const loginHandler = async () => {
    try {
      const data = await request("/api/auth/", "POST", { ...form });
      auth.login(data.token, data.userId);
    } catch (e) {}
  };

  return (
    <div className="auth-page">
      <div className="card grey darken-4 z-depth-4">
        <div className="card-content white-text">
          <h3 className="center-align title">Вход</h3>
          <div className="input-wrapper row">
            <div className={classNames("input-field", "col", "s12")}>
              <input
                placeholder="Введите логин"
                id="login"
                type="text"
                className="validate white-text"
                value={form.login}
                name="login"
                onChange={changeHandler}
              />
            </div>
          </div>

          <div className="row">
            <div className={classNames("input-field", "col", "s12")}>
              <input
                placeholder="Введите пароль"
                id="password"
                value={form.password}
                type="password"
                className="validate white-text"
                name="password"
                onChange={changeHandler}
              />
            </div>
          </div>

          <div className="btn-wrapper row">
            <button
              className="waves-effect waves-light btn col s6 offset-s3 amber darken-4"
              onClick={loginHandler}
              disabled={loading}
            >
              Войти
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
