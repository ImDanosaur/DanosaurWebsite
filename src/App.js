import React from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

function App() {
  return (
    <div style={{height: '100%'}}>
      <Toolbar />
      <SideDrawer />
      <Backdrop />
      <main style={{marginTop: '64px'}}>
        <p>Hello!</p>
      </main>
    </div>
  );
}

export default App;
