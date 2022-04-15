import React from 'react'
import './styles.css';
import { getplatforms, getgenres, getpublishers } from '../../../../services/server';
import useFilter from '../../hooks/useFilter';

export default function Sidenav() {

  const { updateFilterOptions, clearFilterOptions, filterOptions } = useFilter()
  const handleClick = ({target}) => {
    const {name, value} = target
    updateFilterOptions(name, value);
  }

  return (
    <div className="container_side_nav">
      <div className="drop_Down">
        <fieldset className="select_platform">
          {getplatforms().map((data) => (
            <label htmlFor={data.platform} key={data.key}>
              {data.platform}
              <input
                type="checkbox"
                name="platform"
                id={data.platform}
                value={data.platform}
                onChange={handleClick}
              />
            </label>
          ))}
        </fieldset>
        <fieldset className="select_gender">
          {getgenres().map((data) => (
            <label htmlFor={data.genre} key={data.key}>
              {data.genre}
              <input
                type="checkbox"
                name="genre"
                id={data.genre}
                value={data.genre}
                onChange={handleClick}
              />
            </label>
          ))}
        </fieldset>
        <fieldset className="select_developer">
          {getpublishers().map((data) => (
            <label htmlFor={data.publisher} key={data.key}>
              {data.publisher}
              <input
                type="checkbox"
                name="publisher"
                id={data.publisher}
                value={data.publisher}
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