import React from 'react'
import { Link } from 'react-router-dom'

const DevAddServiceCategory = (props) => {
  const {parent} = props;
  return (
    <Link className="service-item flex" to={"/addservice"} state={{parent: parent}} >
      
      <div className="service-text">
        <h3 className="service-title">Добавить категорию услуг</h3>
      </div>
    </Link>
  )
}

export default DevAddServiceCategory