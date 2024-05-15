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
        },
    ];

    const [openStates, setOpenStates] = useState(List.map(() => false));
    const [selectedTabs, setSelectedTabs] = useState(List.map(() => '/allTemp'));
    const [hoverTabs, setHoverTabs] = useState(List.map(() => '/allTemp'));

    const toggleOpenOne = (index: any) => {
        const newOpenStates = [...openStates];
        newOpenStates[index] = !openStates[index];
        setOpenStates(newOpenStates);
    };

    const handleTabClick = (index: any, link: any) => {
        const newSelectedTabs = [...selectedTabs];
        newSelectedTabs[index] = link;
        setSelectedTabs(newSelectedTabs);
    };

    const handleTabHover = (index: any, link: any) => {
        const newSelectedTabs = [...hoverTabs];
        newSelectedTabs[index] = link;
        debugger
        setHoverTabs(newSelectedTabs);
    };
    const handleTableave = () => {
        setHoverTabs([]);
    };
    return (
        <div className='bg-white shadow vh-100 pt-3 position-relative'>
            <div className='text-center py-3 collection'>
                <span className='fw-bold fs-4 '>Collections</span>
            </div>
            {List.map((res, index) => (
                <div key={index} className='px-3 '>
                    <div onClick={() => toggleOpenOne(index)} className={`d-flex justify-content-between py-3 mt-4`}>
                        <a className="flex items-center text-black fw-bold fs-7 nav-link ">{res.heading}</a>
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
                                <div className={`my-2 py-2 pe-4 ${selectedTabs[index] === ele.link || hoverTabs[index] === ele.link ? 'selected-menu' : ''}`} key={childIndex}>
                                    <a href={ele.link} className='nav-link' onClick={() => handleTabClick(index, ele.link)} onMouseOver={() => handleTabHover(index, ele.link)} onMouseLeave={handleTableave}>
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

