import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../src/css/regpage.css";

const TEST_LOGIN = "test";
const TEST_PASSWORD = "test";

const RegPage = () => {
  const navigation = useNavigate();
  const [authItems, setAuthItems] = useState({
    login: "",
    password: "",
  });

  const updateAuthItems = (name, value) => {
    setAuthItems({ ...authItems, [name]: value });
  };

  const register = () => {
    if (authItems.login == TEST_LOGIN && authItems.password == TEST_PASSWORD) {
      navigation("/dev-list");
    } else {
      alert("Неверные данные для входа");
    }
  };

  return (
    <div className="login__window flex">
      <h2 className="login__title">Вход для сотрудника</h2>
      <input className="login__input"
        type="text"
        placeholder="Логин"
        onChange={e => updateAuthItems("login", e.target.value)}
      />
      <input className="login__input"
        type="password"
        placeholder="Пароль"
        onChange={e => updateAuthItems("password", e.target.value)}
      />
      {/* <input onClick={() => register()} type="submit" value="Войти" /> */}
      <button className="btn-reset btn-red" onClick={() => register()} type="submit">Войти</button>
    </div>
  );
};

export default RegPage;
