import React from 'react';

import './styles/header.scss';

import ToogleMenu from './ToogleMenu';
import HeaderLogo from './HeaderLogo';


const Header = ({ onToogleShowSidemenu, showMainMenuReturn, showMainMenuSandwish }) => (
  <header className="header">
    <ToogleMenu
      showMainMenuReturn={showMainMenuReturn}
      showMainMenuSandwish={showMainMenuSandwish}
      onClick={() => onToogleShowSidemenu()} />

    <HeaderLogo imgUrl="../src/assets/logo.png" />
  </header>
);

export default Header;