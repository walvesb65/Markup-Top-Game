import React from 'react';
import Logo from '../../../assets/media/globo_logo.png';
import './styles.css'

export default function Header() {
  return (
    <div className="container_header">
        <img src={Logo} alt="Logo da rede Globo" />
        <h1>INFOGames</h1>
    </div>
  )
}
