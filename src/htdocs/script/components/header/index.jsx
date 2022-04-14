import React from 'react';
import { AuthContext } from '../../../../provider/context';
import Logo from '../../../assets/media/globo_logo.png';
import './styles.css'

export default function Header() {

  const { user } = React.useContext(AuthContext)
  return (
    <div className="container_header">
      <div className="header_Left">
        <img src={Logo} alt="Logo da rede Globo" />
        <h1>{user.name}</h1>
      </div>
      <div className="header_Right">
        <p className="user_name">User Name</p>
      </div>
    </div>
  )
}
