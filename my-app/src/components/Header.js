import React, { Component } from 'react';

import '../css/Header.css';
import Menu from './Menu';


class Header extends Component {
  render() {
    return  (
      <nav className="navbar-header flex-container">
        <h3 className="logo">LOGO</h3>
        <div className="slogan">Rastreador de pacotes e encomendas</div>
      	<div className=""><Menu /></div>
      </nav>
    );
  }
}

export default Header;