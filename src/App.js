import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Landing from './components/Landing/Landing';

export default class App extends Component {
  state = {
    sideDrawerOpen: false,
    show: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  };

  backDropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render(){
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backDropClickHandler}/>
    }

    return (
      <div style={{height: '100%'}}>
        <main style={{marginTop: '64px'}}>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <Landing />
        </main>
      </div>
    );
  }
}

