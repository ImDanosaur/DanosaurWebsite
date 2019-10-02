import React from 'react';

import './SideDrawer.css';



const SideDrawer = props => (
  <nav>
    <ul className="side-drawer">
      <li><a href="/">About me</a></li>
      <li><a href="/">Projects</a></li>
      <li><a href="/">Resume</a></li>
      <li><a href="/">LinkedIn </a></li>
    </ul>
  </nav>
);

export default SideDrawer;