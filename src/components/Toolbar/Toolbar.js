import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import App from '../../App';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Modals/Contact';

const Toolbar = props => (
  <Router>
  <header className="toolbar">
    <nav className="toolbar-nav">
      <div className="toolbar-toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler}/>
      </div>
      <div className="toolbar-container">
        <div className="toolbar-logo"><Link to="/">ImDanosaur</Link></div>
        <div className="toolbar-nav-items">
          <ul>
            <li><Link to="/about">About Me</Link></li>
            <li><a href="https://github.com/ImDanosaur?tab=repositories">Projects</a></li>
            <li><a href="/contact">Resume</a></li>
            <li><a href="https://www.linkedin.com/in/daniel-sanchez-9810a9b1/">Contact me</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <Route path='/home' component={App} />
  <Route path='/about' component={AboutMe} />
  <Route path='/contact' component={Contact} />
  </Router>
);

export default Toolbar;