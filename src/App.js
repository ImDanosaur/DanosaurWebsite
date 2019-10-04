import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';



export default class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  };

  backDropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  };

  render(){
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backDropClickHandler}/>
    }


    return (
      <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{marginTop: '64px'}}>
        </main>
      </div>
    );
  }
}

