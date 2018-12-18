import React from 'react';

import './styles/header.scss';

import ToogleMenu from './ToogleMenu';
import HeaderLogo from './HeaderLogo';


const Header = ({ onToogleShowSidemenu, showMainMenuReturn, showMainMenuSandwish }) => (
  <header className="header">
    <ToogleMenu
      showMainMenuReturn={showMainMenuReturn}
      showMainMenuSandwish={showMainMenuSandwish}
      onClick={() => onToogleShowSidemenu()}
    />
    <h1 className="header__title">Divisio Read</h1>

    <HeaderLogo imgUrl="../src/assets/logo.png" />
  </header>
);

export default Header;