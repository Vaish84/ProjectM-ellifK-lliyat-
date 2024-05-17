import React, { useState } from 'react';
import home from '../assests/home.svg'
import arrow from '../assests/right-arrow.svg'



function TopBar() {

    const List = [
        { label: '', link: '#', icon: home },
        { label: 'home', link: '#' },
        { label: 'Category', link: '#' },
        { label: 'Current Page', link: '#' }
    ]
    return (<>
        <div className='bg-white mx-2'>
            <div className="breadcrumbs align-items-center p-3">
                {List.map((res: any) => (<>
                    <a href="#">{res.label}</a>
                    {res.icon && (<>
                        <img src={res.icon} width={17} height={17} />
                    </>)}
                    <img src={arrow} width={13} height={13} className='mx-2' />
                </>))}
            </div>
        </div>
    </>)
}

export default TopBar;
