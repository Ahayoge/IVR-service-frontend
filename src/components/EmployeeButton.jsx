import React from 'react'
import { useNavigate } from 'react-router-dom'

const EmployeeButton = () => {
    const navigate = useNavigate()
  return (
    <button className='dev-btn' onClick={() => navigate("/registration")}>Сотрудник</button>
  )
}

export default EmployeeButton