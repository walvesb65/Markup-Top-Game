import React from 'react'
import dbJson from '../../../data.json'

export default function Sidenav() {

  const { platform, gender, developer } = dbJson;
  console.log(platform);
  return (
    <div className="container_side_nav">
      <fieldset className="select_platform">
        {platform.map((data) => (
          <label htmlFor={data}>
            {data}
            <input type="checkbox" name={data} id={data} />
          </label>
        ))}
      </fieldset>
      <fieldset className="select_gender">
        {gender.map((data) => (
          <label htmlFor={data}>
            {data}
            <input type="checkbox" name={data} id={data} />
          </label>
        ))}
      </fieldset>
      <fieldset className="select_developer">
        {developer.map((data) => (
          <label htmlFor={data}>
            {data}
            <input type="checkbox" name={data} id={data} />
          </label>
        ))}
      </fieldset>
      <div className="buttons">
        <button>Desfazer Filtros</button>
        <button>Download IMG</button> 
      </div>
    </div>
  )
}