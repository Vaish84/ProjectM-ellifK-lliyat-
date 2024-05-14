import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './app/Dashboard/sidebar';
import MenuItem from './app/Dashboard/menuItem';

function App() {
  return (
    <>
      <div className='d-flex'>
        <div className=''>   
           <Sidebar></Sidebar>
        </div>
        <div className='col-2'>
          <MenuItem></MenuItem>
        </div>
      </div>
    </>

  );
}

export default App;
