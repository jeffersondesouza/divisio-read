import React from 'react'
import './styles/header.scss';

const Header = props => (
    <header className="header">
        <input id="header-menu-check" className="header__menu-check" type="checkbox" />
        <label for="header-menu-check" className="header__menu-button">
            <span className="header__menu-icon">&nbsp;</span>
        </label>

        <figure className="header__logo-fig">
            <img className="header__logo-img" src="../src/assets/logo.png"></img>
        </figure>
    </header>
);

export default Header;