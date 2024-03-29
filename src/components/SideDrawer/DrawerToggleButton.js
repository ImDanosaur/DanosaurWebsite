import React from 'react';

import './DrawerToggle.css';



const DrawerToggleButton = props => (
  <button className="toggle-button" onClick={props.click}>
    <div className="toggle-button-line"/>
    <div className="toggle-button-line"/>
    <div className="toggle-button-line"/>
  </button>
);

export default DrawerToggleButton;