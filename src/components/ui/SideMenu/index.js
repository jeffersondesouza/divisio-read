import React, { Component } from 'react';


import './side-menu.scss'

class SideMenu extends Component {

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside = (event) => {

        if (this.wrapperRef && !this.wrapperRef.contains(event.target) && this.props.showSidbarMenu) {
            this.props.onToogleShowSidemenu();
        }

    }

    setWrapperRef = (node) => {
        this.wrapperRef = node;
    }

    render() {
        const classes = (this.props.showSidbarMenu)
        ? 'side-menu'
        : 'side-menu side-menu--hidden';
        

        return (
            <div ref={this.setWrapperRef} className={classes} >
                <header>
                    perfil
                </header>
                <div>Logout</div>
            </div>
        );
    }
}

export default SideMenu;