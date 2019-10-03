import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import App from '../../App';
import AboutMe from '../AboutMe/AboutMe';



const Toolbar = props => (
  <Router>
  <header className="toolbar">
    <nav className="toolbar-nav">
      <div className="toolbar-toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler}/>
      </div>
      <div className="toolbar-logo"><a href="/">ImDanosaur</a></div>
      <div className="spacer" />
      <div className="toolbar-nav-items">
        <ul>
          <li><Link to="/about">About Me</Link></li>
          <li><a href="/">Projects</a></li>
          <li><a href="/">Resume</a></li>
          <li><a href="/">LinkedIn </a></li>
        </ul>
      </div>
    </nav>
  </header>
  <Route path='/about' component={AboutMe} />
  </Router>
);

export default Toolbar;