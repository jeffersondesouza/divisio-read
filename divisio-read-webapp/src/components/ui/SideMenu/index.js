import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles/side-menu.scss'

import SideMenuHeader from './SideMenuHeader';
import SideMenuFooter from './SideMenuFooter';


class SideMenu extends Component {

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target) && this.props.showSidbarMenu) {
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
      <div ref={this.setWrapperRef} className={classes}>
        <SideMenuHeader />
        <SideMenuFooter onLogout={this.props.onLogout}/>
      </div>
    );
  }
}


SideMenu.propTypes = {
  onHideSideMenu: PropTypes.func,
  onLogout: PropTypes.func
}

export default SideMenu;
