import React, { Component } from 'react';
import './styles/header.scss';

import ToogleMenu from './ToogleMenu';
import HeaderLogo from './HeaderLogo';


const Header = ({ onToogleShowSidemenu }) => (
    <header className="header">
        <ToogleMenu onClick={() => onToogleShowSidemenu()} />
        <HeaderLogo imgUrl="../src/assets/logo.png" />
    </header>
);

export default Header;