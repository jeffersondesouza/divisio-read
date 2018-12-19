import React from 'react';
import './styles/public-header.scss';

const logo = '../src/assets/logo.png';


const PublicHeader = () => (
  <header className="public-header">
    <figure className="public-header__logo-fig">
      <img className="public-header__logo-img" src={logo}></img>
    </figure>
    <div className="public-header__headind">
      <h2 className="public-header__title">Divisio Read</h2>
      <h3 className="public-header__sub-title">Gerencie e mantenha sua leitura em dias</h3>
    </div>
  </header>
);

export default PublicHeader;