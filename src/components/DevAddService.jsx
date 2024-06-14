import React from 'react'
import { Link } from 'react-router-dom'
const DevAddService = (props) => {
    const {parent} = props
  return (
    <Link className="service-item flex" to={"/addservice"} state={{parent: parent}} >
      <div className="service-text">
        <h3 className="service-title">Добавить услугу</h3>
      </div>
    </Link>
  )
}

export default DevAddService