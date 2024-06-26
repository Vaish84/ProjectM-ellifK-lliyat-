import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './app/Dashboard/sidebar';
import MenuItem from './app/Dashboard/menuItem';
import TopBar from './app/Dashboard/topBar';
import FilterComp from './app/Main/filter';
import UtilityPage from './app/Main/utilityPage';

function App() {
  return (
    <>

      <div className='row p-0 secondary-bgcolor'>
        <div className='col-1 position-fixed'>
          <Sidebar></Sidebar>
        </div>
        <div className='col-3 p-0 position-fixed offset-1'>
          <MenuItem></MenuItem>
        </div>
        <div className='col-8 p-0 offset-4'>
          <div className='m-2 position-sticky top-0 z-1 shadow'>
            <TopBar></TopBar>
          </div>
          <div className='m-3'>
            <UtilityPage />
          </div>
        </div>
      </div>

    </>

  );
}

export default App;
