import React from 'react'
import { Link } from 'react-router-dom';
import IcoMoon from 'react-icomoon';

const ToogleMenu = ({ onClick, showMainMenuReturn, showMainMenuSandwish }) => (
    <div>
        {
            showMainMenuSandwish
                ? (
                    <button onClick={onClick} className="header__menu-button">
                        <span className="header__menu-icon">&nbsp;</span>
                    </button>
                )
                : (
                    <Link to={'/books'} className="header__back-link">
                        <IcoMoon icon="arrow-left2" />
                    </Link>
                )
        }

    </div>
);


export default ToogleMenu;