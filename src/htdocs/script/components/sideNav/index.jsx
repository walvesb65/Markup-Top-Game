import React from 'react'
import dbJson from '../../../data.json'
import './styles.css';

export default function Sidenav() {

  const { platform, gender, developer } = dbJson;

  return (
    <div className="container_side_nav">
      <div className="dropDown">
        <fieldset className="select_platform">
          {platform.map((data) => (
            <label htmlFor={data} key={data}>
              {data}
              <input type="checkbox" name={data} id={data} />
            </label>
          ))}
        </fieldset>
        <fieldset className="select_gender">
          {gender.map((data) => (
            <label htmlFor={data} key={data}>
              {data}
              <input type="checkbox" name={data} id={data} />
            </label>
          ))}
        </fieldset>
        <fieldset className="select_developer">
          {developer.map((data) => (
            <label htmlFor={data} key={data}>
              {data}
              <input type="checkbox" name={data} id={data} />
            </label>
          ))}
        </fieldset>
      </div>
      <div className="buttons_sideNav">
        <button>Desfazer Filtros</button>
        <button>Download IMG</button> 
      </div>
    </div>
  )
}