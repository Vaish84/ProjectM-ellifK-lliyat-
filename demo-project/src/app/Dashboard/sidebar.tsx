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
  const [hoverTab, setHoverTab] = useState('/collections');


  return (<>
    <div className='bg-dark text-white pt-3 parent-sidebar' style={{ maxWidth: 'max-content' }}>
      <div className='px-3  text-center'>

        <img className='sidebar-icon' src={iconSvg} alt='' width={50} height={50} />
        <span className='sidebar-heading'>Müellif</span>
      </div>
      <div className='smallScreen'>
        {
          list.map((res: any) => (<>
            <div className={`my-1 px-2 text-center ${selectedTab === res.link || hoverTab === res.link ? 'selected-sidebar' : ''}`} key={res.link}>
              <a href={res.link} className='nav-link' onClick={() => setSelectedTab(res.link)} onMouseOver={() => setHoverTab(res.link)} onMouseLeave={() => setHoverTab('')}>
                <div>
                  <img src={res.icon} alt='' width={15} height={15} />
                </div>
                <span className='sidebar-font'>{res.label}</span>
              </a>
            </div>
          </>
          ))
        }
      </div>
      <div className='position-absolute bottom-0 '>
        <div className='text-center'>
        <img src={profile} alt='' width={50} height={50} className='my-3 mx-4' />
        </div>
      </div>
    </div>

  </>)
}

export default Sidebar;
