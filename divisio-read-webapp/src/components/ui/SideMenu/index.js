import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles/side-menu.scss'

class SideMenu extends Component {

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (event) => {

    if (this.wrapperRef && !this.wrapperRef.contains(event.target) && this.props.showSidbarMenu) {
      console.log('event', event);
      this.props.onHideSideMenu();
    }

  }

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  }

  render() {

    const classes = (this.props.showSidbarMenu)
      ? 'side-menu side-menu--show'
      : 'side-menu side-menu--hidden';


    return (
      <div ref={this.setWrapperRef} className={classes} >

        <header className="side-menu__header">
          <h2 className="side-menu__title">Bem vindo ao Divisio Read</h2>
          <p className="side-menu__text">Gerencie e controle seu hábito de leitura</p>
          <p className="side-menu__text">Você pode adicionar livros a sua lista e controlar seus progressos</p>
        </header>

        <footer className="side-menu__footer">
          <button onClick={this.props.onLogout} type="button" className="btn">Log Out</button>
        </footer>

      </div>
    );
  }
}


SideMenu.propTypes = {
  onHideSideMenu: PropTypes.func
}


export default SideMenu;
