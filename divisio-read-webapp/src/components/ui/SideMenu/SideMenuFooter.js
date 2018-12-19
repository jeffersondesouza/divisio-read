import React from 'react';

const SideMenuFooter = ({onLogout}) => (
  <footer className="side-menu__footer">
    <button onClick={onLogout} type="button" className="btn">Log Out</button>
  </footer>
);

export default SideMenuFooter;