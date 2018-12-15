import React from 'react'

const ToogleMenu = ({onClick}) => (
    <button onClick={onClick} className="header__menu-button">
        <span className="header__menu-icon">&nbsp;</span>
    </button>
);


export default ToogleMenu;