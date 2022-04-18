import React, { useState, useEffect } from 'react'
import classNames from 'classnames';
import { getplatforms, getgenres, getpublishers } from '../../../../services/server';

import { ReactComponent as Arrow } from '../../../assets/media/arrowdrop.svg';
import { ReactComponent as Search } from '../../../assets/media/search.svg';
import { ReactComponent as Donwload } from '../../../assets/media/download.svg';

import useFilter from '../../hooks/useFilter';
import html2canvas from 'html2canvas';
import './styles.scss';

export default function Sidenav() {

  const { updateFilterOptions, clearFilterOptions } = useFilter()  
  const [value, setValue] = useState("")
  const [isShow, setIsShow] = useState({
    platform: true,
    genre: true,
    publisher: true
  });
  
  const handleClickOptions = ({ target }) => {
    const { name, value } = target
    updateFilterOptions(name, value);
  };
  
  const handleClickDrop = (type) => {
    setIsShow({
      ...isShow,
      [type]: !isShow[type]
    });
  };

  const handlechangeValue = ({ target: { value } }) => {
    setValue(value)
  };

  const handleClearFiltersCheckeBox = () => {
    const getInput = document.querySelectorAll('input[type="checkbox"]:checked');
    console.log(getInput);
    getInput.forEach((e) => {e.checked = false})
    clearFilterOptions();
  }

  const printScreen = () => {
    const screenshotTarget = document.body;

    html2canvas(screenshotTarget).then((canvas) => {
      const base64image = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      if (typeof link.download === 'string') {
        link.href = base64image;
        link.download = 'willNaGlobo ;)';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    });
  }

  return (
    <div className="container_side_nav">
      <div className='drop_options'>
        <div className="platform">
          <div onClick={() => handleClickDrop('platform')} className="drop_title">
            <h1>Plataforma</h1>
            <Arrow className={classNames('arrow_icon', { rotate: !isShow.platform })} />
          </div>
          <div className={classNames('drop_down', { hidden: isShow.platform })}>
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
            <Arrow className={classNames('arrow_icon', { rotate: !isShow.genre })} />
          </div>
          <div className={classNames('drop_down', { hidden: isShow.genre })}>
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
            <Arrow className={classNames('arrow_icon', { rotate: !isShow.publisher })} />
          </div>
          <div className={classNames('drop_down', { hidden: isShow.publisher })}>
            <div className="search">
              <input type="text" onChange={handlechangeValue} className="input_search" />
              <Search className='search_icon' />
            </div>

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
      </div>
      <div className="buttons_sidenav">
        <button
          onClick={handleClearFiltersCheckeBox}
        >
          Desfazer Filtros
        </button>
        <button
          onClick={() => printScreen()}
        >
          <Donwload className='icon_donwload'/>
          Download IMG
        </button>
      </div>
    </div>
  )
}