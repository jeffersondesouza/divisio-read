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

    console.log('this.props.showSidbarMenu', this.props.showSidbarMenu);
    const classes = (this.props.showSidbarMenu)
      ? 'side-menu side-menu--show'
      : 'side-menu side-menu--hidden';

    return (
      <div ref={this.setWrapperRef} className={classes} >

        <header>perfil</header>
        <div>
          <footer>
            <button onClick={this.props.onLogout} type="button">Log Out</button>
          </footer>
        </div>

      </div>
    );
  }
}


SideMenu.propTypes = {
  onHideSideMenu: PropTypes.func
}


export default SideMenu;
