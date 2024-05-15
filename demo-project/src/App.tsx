import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './app/Dashboard/sidebar';
import MenuItem from './app/Dashboard/menuItem';
import TopBar from './app/Dashboard/topBar';
import FilterComp from './app/Main/filter';

function App() {
  return (
    <>
      <div className='row container p-0'>
        <div className='d-flex col-3'>
          <div className='overflow-auto'>
            <Sidebar></Sidebar>
          </div>
          <div className='menuItem overflow-auto'>
            <MenuItem></MenuItem>
          </div>

        </div>
        <div className='col-9'>
          <div className='bg-color'>
            <FilterComp></FilterComp>
          </div>
        </div>
      </div>

    </>

  );
}

export default App;
