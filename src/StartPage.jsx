import React from "react";
import { Link } from "react-router-dom";
import EmployeeButton from "./components/EmployeeButton";

const StartPage = () => {
  return (
    <>
    <EmployeeButton />
      <h1 className="greeting span-8">
        Здравствуйте! <br /> Данный сервис является информационным помощником
      </h1>
      <video autoPlay muted className="greeting-video span-8" src={"https://storage.yandexcloud.net/akhidov-ivr/1.mp4"} alt="" />
      <div className="btn-area flex">
        <Link className="btn-reset span-4 btn-red" to="/choose">
          Начать
        </Link>
      </div>
    </>
  );
};

export default StartPage;
