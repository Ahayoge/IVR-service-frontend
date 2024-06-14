import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      alert("Неверные данные для входа")
    }
  };

  return (
    <div>
      <h2>Вход для сотрудника</h2>
      <input
        type="text"
        placeholder="Логин"
        onChange={(e) => updateAuthItems("login", e.target.value)}
      />
      <input
        type="password"
        placeholder="Пароль"
        onChange={(e) => updateAuthItems("password", e.target.value)}
      />
      <input onClick={() => register()} type="submit" value="Войти" />
    </div>
  );
};

export default RegPage;
