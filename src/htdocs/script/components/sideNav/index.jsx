import React from 'react'
import './styles.css';
import { getPlatforms } from '../../../../services/server';

export default function Sidenav() {

  return (
    <div className="container_side_nav">
      <div className="drop_Down">
        <fieldset className="select_platform">
          {getPlatforms().map((data) => (
            <label htmlFor={data} key={data}>
              {data}
              <input type="checkbox" name={data} id={data} />
            </label>
          ))}
        </fieldset>
        {/* <fieldset className="select_gender">
          {getPlatforms().map((data) => (
            <label htmlFor={data} key={data}>
              {data}
              <input type="checkbox" name={data} id={data} />
            </label>
          ))}
        </fieldset>
        <fieldset className="select_developer">
          {getPlatforms().map((data) => (
            <label htmlFor={data} key={data}>
              {data}
              <input type="checkbox" name={data} id={data} />
            </label>
          ))}
        </fieldset> */}
      </div>
      <div className="buttons_sideNav">
        <button>Desfazer Filtros</button>
        <button>Download IMG</button> 
      </div>
    </div>
  )
}