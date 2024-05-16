import React, { useState } from 'react';
import home from '../assests/home.svg'
import arrow from '../assests/right-arrow.svg'



function TopBar() {

    return (<>
        <div className='bg-white mx-2'>
            <div className="breadcrumbs align-items-center p-3">
                <img src={home} width={17} height={17} />
                <img src={arrow} width={13} height={13} className='mx-2'/>
                <a href="#">Home</a>
                <img src={arrow} width={13} height={13} className='mx-2'/>
                <a href="#">Category</a>
                <img src={arrow} width={13} height={13} className='mx-2'/>
                <span className="current-page">Current Page</span>
            </div>

        </div>
    </>)
}

export default TopBar;
