import React from 'react';

import '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';



const Toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar-nav">
      <div>
        <DrawerToggleButton />
      </div>
      <div className="toolbar-logo"><a href="/">Home</a></div>
      <div className="spacer" />
      <div className="toolbar-nav-items">
        <ul>
          <li><a href="/">About Me</a></li>
          <li><a href="/">Projects</a></li>
          <li><a href="/">Resume</a></li>
          <li><a href="/">LinkedIn </a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Toolbar;