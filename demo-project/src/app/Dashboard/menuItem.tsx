import React, { useState } from 'react';
import downArrow from '../assests/down-arrow.svg'
import upArrow from '../assests/up-arrow.svg'
import allTemp from '../assests/all-templates.svg'
import contract from '../assests/contract-templates.svg'
import document from '../assests/document-templates.svg'
import petition from '../assests/petition-templates.svg'

function ManuItem() {
    let List = [
        {
            heading: 'Firm Collection',
            children: [
                { label: 'All Templates', icon: allTemp, link: '/allTemp' },
                { label: 'Contract Templates', icon: contract, link: '/contract' },
                { label: 'Document Templates', icon: document, link: '/document' },
                { label: 'Petition Templates', icon: petition, link: '/petition' },
            ]
        },
        {
            heading: 'Müellif Collection',
            children: [
                { label: 'All Templates', icon: allTemp, link: '/allTempMu' },
                { label: 'Contract Templates', icon: contract, link: '/contractMu' },
                { label: 'Document Templates', icon: document, link: '/documentMu' },
                { label: 'Petition Templates', icon: petition, link: '/petitionMu' },
            ]
        }
    ];

    const [openStates, setOpenStates] = useState(List.map(() => false));
    const [selectedTabs, setSelectedTabs] = useState(List.map(() => '/allTemp'));

    const toggleOpenOne = (index:any) => {
        const newOpenStates = [...openStates];
        newOpenStates[index] = !openStates[index];
        setOpenStates(newOpenStates);
    };

    const handleTabClick = (index:any, link:any) => {
        const newSelectedTabs = [...selectedTabs];
        newSelectedTabs[index] = link;
        setSelectedTabs(newSelectedTabs);
    };

    return (
        <div className='bg-white shadow vh-100 pt-3 px-3 position-relative'>
            <span className='text-center px-3'>
                <span className='fw-bold fs-4'>Collections</span>
            </span>
            {List.map((res, index) => (
                <div key={index}>
                    <div onClick={() => toggleOpenOne(index)} className={`d-flex justify-content-between py-3`}>
                        <a className="flex items-center text-black fw-bold fs-7 nav-link">{res.heading}</a>
                        {openStates[index] ? (
                            <div>
                                <img src={upArrow} width={10} height={10} />
                            </div>
                        ) : (
                            <div>
                                <img src={downArrow} width={10} height={10} />
                            </div>
                        )}
                    </div>
                    {openStates[index] && (
                        <div>
                            {res.children.map((ele, childIndex) => (
                                <div className={`py-2 pe-4 ${selectedTabs[index] === ele.link ? 'selected-menu' : ''}`} key={childIndex}>
                                    <a href={ele.link} className='nav-link' onClick={() => handleTabClick(index, ele.link)}>
                                        <img src={ele.icon} alt='' width={25} height={25} />
                                        <span className='small px-3'>{ele.label}</span>
                                    </a>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default ManuItem;

