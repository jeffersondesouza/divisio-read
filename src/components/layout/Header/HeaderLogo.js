import React from 'react';

const HeaderLogo = ({imgUrl}) => (
    <figure className="header__logo-fig">
        <img className="header__logo-img" src={imgUrl}></img>
    </figure>
);

export default HeaderLogo;
