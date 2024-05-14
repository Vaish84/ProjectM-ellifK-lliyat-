import React, { useState } from 'react';
import iconSvg from '../assests/mu¦êellif-logo.svg'
import dashboard from '../assests/dashboard.svg'
import collections from '../assests/collections.svg'
import templates from '../assests/templates.svg'
import works from '../assests/works.svg'
import report from '../assests/reports.svg'
import adminPanel from '../assests/admin-panel.svg'
import profile from '../assests/Profile.png'


function Sidebar() {

  const list: any = [
    { label: 'Dashboard', icon: dashboard, link: '/dashboard' },
    { label: 'Collections', icon: collections, link: '/collections' },
    { label: 'Templates', icon: templates, link: '/templates' },
    { label: 'Works', icon: works, link: '/workd' },
    { label: 'Reports', icon: report, link: '/reports' },
    { label: 'Admin Panel', icon: adminPanel, link: '/admin-panel' },
  ]

  const [selectedTab, setSelectedTab] = useState('/collections');

  return (<>
    <div className='bg-dark text-white vh-100 pt-3 col-1 position-relative' style={{width:'min-content'}}>
      <span className='text-center px-3'>
        <img src={iconSvg} alt='' width={50} height={50} />
        <span className='ps-3'>Müellif</span>
      </span>
      <div>
        {
          list.map((res: any) => (<>
            <div className={`py-2 pe-4 text-center ${selectedTab === res.link ? 'selected-sidebar' : ''}`} key={res.link}>
              <a href={res.link} className='nav-link' onClick={() => setSelectedTab(res.link)}>
                <div>
                <img src={res.icon} alt='' width={25} height={25} />
                </div>
                <span className='small'>{res.label}</span>
              </a>
            </div>
          </>
          ))
        }
      </div>
      <div className='position-absolute bottom-0 end-0'>
      <img src={profile} alt='' width={50} height={50}  className='mx-4 my-3'/>
        
      </div>
    </div>

  </>)
}

export default Sidebar;
