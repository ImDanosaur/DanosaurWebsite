import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from '../../App';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Modals/Contact'
import './SideDrawer.css';



const SideDrawer = props => {
  let drawerClasses = 'side-drawer'
  if (props.show) {
    drawerClasses = 'side-drawer open'
  }
  return(
  <Router>
  <nav className={drawerClasses}>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About me</Link></li>
      <li><a href="https://github.com/ImDanosaur?tab=repositories">Projects</a></li>
      <li><a href="/">Resume</a></li>
      <li><Link to="/contact">Contact me</Link></li>
    </ul>
  </nav>

  <Route path='/contact' component={Contact} />
  <Route path='/home' component={App} />
  <Route path='/about' component={AboutMe} />
  </Router>
  );
};

export default SideDrawer;