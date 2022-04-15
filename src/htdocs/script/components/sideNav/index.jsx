import React, { useContext } from 'react'
import './styles.css';
import { getPlatforms, getGenres, getPublishers } from '../../../../services/server';
import { AuthContext } from '../../../../provider/context';

export default function Sidenav() {

  const { updateFilterOptions, clearFilterOptions } = useContext(AuthContext)

  const handleClick = ({target}) => {
    const {name, value} = target
    updateFilterOptions(name, value);
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
                value={data.Platform}
                onChange={handleClick}
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
                value={data.Genre}
                onChange={handleClick}
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
                value={data.Publisher}
                onChange={handleClick}/>
            </label>
          ))}
        </fieldset>
      </div>
      <div className="buttons_sideNav">
        <button
          onClick={clearFilterOptions}
        >
          Desfazer Filtros
        </button>
        <button
          onClick={() => (window.print())}
        >
          Download IMG
        </button> 
      </div>
    </div>
  )
}