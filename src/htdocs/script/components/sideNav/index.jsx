import React, { useState, useEffect } from 'react'
import classNames from 'classnames';
import { getplatforms, getgenres, getpublishers } from '../../../../services/server';
import { ReactComponent as Arrow } from '../../../assets/media/arrowdrop.svg'
import useFilter from '../../hooks/useFilter';
import './styles.scss';

export default function Sidenav() {

  const { updateFilterOptions, clearFilterOptions } = useFilter()
  const handleClickOptions = ({ target }) => {
    const { name, value } = target
    updateFilterOptions(name, value);
  }
  const [isShow, setIsShow] = useState({
    platform: false,
    genre: false,
    publisher: false
  });
  // const [showGenre, setShowGenre] = useState(false);
  // const [showDeveloper, setShowDeveloper] = useState(false);
  const [value, setValue] = useState("")
  useEffect(() => {
  }, [value])

const handleClickDrop = (type) => {
  setIsShow({
    ...isShow,
    [type]: !isShow[type]
  });
} 

  const handlechange = ({ target: { value } }) => {
    setValue(
      value
    )
  }

  return (
    <div className="container_side_nav">
      <div className="platform">
        <div onClick={() => handleClickDrop('platform')} className="drop_title">
          <h1>Plataforma</h1>
          <Arrow className="arrow_icon" />
        </div>
        <div className={classNames('drop_Down',{hidden: isShow.platform})}>
          <ul className="select_platform">
            {getplatforms().map((data) => (
              <li key={data.platform}>
                <label>
                  <input
                    type="checkbox"
                    name="platform"
                    id={data.platform}
                    value={data.platform}
                    onChange={handleClickOptions}
                  />
                  <p>{data.platform}</p>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="genre">
        <div onClick={() => handleClickDrop('genre')} className="drop_title">
          <h1>Gênero</h1>
          <Arrow className="arrow_icon" />
        </div>
        <div className={classNames('drop_Down',{hidden: isShow.genre})}>
          <ul className="select_gender">
            {getgenres().map((data) => (
              <li key={data.genre}>
                <label>
                  <input
                    type="checkbox"
                    name="genre"
                    id={data.genre}
                    value={data.genre}
                    onChange={handleClickOptions}
                  />
                  <p>{data.genre}</p>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="developer">
        <div onClick={() => handleClickDrop('publisher')} className="drop_title">
          <h1>Desenvolvedora</h1>
          <Arrow className="arrow_icon" />
        </div>
        <div className={classNames('drop_Down',{hidden: isShow.publisher})}>
          <input type="text" onChange={handlechange} />
          <ul className="select_developer">
            {getpublishers(value).map((data) => (
              <li key={data.publisher}>
                <label>
                  <input
                    type="checkbox"
                    name="publisher"
                    id={data.publisher}
                    value={data.publisher}
                    onChange={handleClickOptions}
                  />
                  <p>{data.publisher}</p>
                </label>
              </li>
            ))}
          </ul>
        </div>
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