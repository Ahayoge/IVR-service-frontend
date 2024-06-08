import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ErrorPage = () => {
    const nav = useNavigate()
  return (
    <>
    <h2>Упс... что-то пошло не так</h2>
    <button onClick={() => nav(-1)}>Назад</button>
    <Link to={"/"}>В главное меню</Link>
    </>
  )
}

export default ErrorPage