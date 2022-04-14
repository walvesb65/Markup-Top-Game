import React, { useContext } from 'react'
import './styles.css';
import { getPlatforms, getGenres, getPublishers } from '../../../../services/server';
import { AuthContext } from '../../../../provider/context';

export default function Sidenav() {

  const { upDateFilter } = useContext(AuthContext)

  const handleClick = ({target}) => {
    const {name, value} = target
    upDateFilter(name, value);
  }

  return (
    <div className="container_side_nav">
      <div className="drop_Down">
        <fieldset className="select_platform">
          {getPlatforms().map((data) => (
            <label htmlFor={data.Platform} key={data.key}>
              {data.Platform}
              <input
                type="checkbox"
                name="Platform"
                id={data.Platform}
                defaultChecked={data.checked}
                value={data.Platform}
                onClick={handleClick}
              />
            </label>
          ))}
        </fieldset>
        <fieldset className="select_gender">
          {getGenres().map((data) => (
            <label htmlFor={data.Genre} key={data.key}>
              {data.Genre}
              <input
                type="checkbox"
                name="Genre"
                id={data.Genre}
                defaultChecked={data.checked}
                value={data.Genre}
                onClick={handleClick}
              />
            </label>
          ))}
        </fieldset>
        <fieldset className="select_developer">
          {getPublishers().map((data) => (
            <label htmlFor={data.Publisher} key={data.key}>
              {data.Publisher}
              <input
                type="checkbox"
                name="Publisher"
                id={data.Publisher}
                defaultChecked={data.checked}
                value={data.Publisher}
                onClick={handleClick}/>
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