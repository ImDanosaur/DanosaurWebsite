import React from 'react';

import './SideDrawer.css';



const SideDrawer = props => {
  let drawerClasses = 'side-drawer'
  if (props.show) {
    drawerClasses = 'side-drawer open'
  }
  return(
  <nav className={drawerClasses}>
    <ul>
      <li><a href="/">About me</a></li>
      <li><a href="/">Projects</a></li>
      <li><a href="/">Resume</a></li>
      <li><a href="/">LinkedIn </a></li>
    </ul>
  </nav>
  );
};

export default SideDrawer;