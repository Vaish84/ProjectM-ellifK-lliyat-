import React, { useState } from 'react';
import ClickableTable from '../components/ClickableTable';
import FilterComp from './filter';
import filter from '../assests/filter.svg'
import MultiSelectList from './multiSelectlist';


function UtilityPage() {

    const IdList: any = [
        { label: 'Legal', id: 1 },
        { label: 'Penalty', id: 2 },
        { label: 'Executive', id: 3 },
        { label: 'Conciliation', id: 4 },
    ]
    const [filterOpen, setFilterOpen] = useState(false)
    const openFilter = () => {
        if (filterOpen) {
            setFilterOpen(false)
        } else {
            setFilterOpen(true)
        }
    }

    const data: any = {
        tableHeader: [
            { name: "", id: "expand", sortable: false, extraProperty: "" },
            { name: "ID", id: "id", sortable: true, style: { fontWeight: "bold" }, extraProperty: "" },
            { name: "Template Name", id: "templateName", sortable: true, extraProperty: "" },
            { name: "Model Type", id: "modalType", sortable: true, extraProperty: "" },
            { name: "Date/Time", id: "date", style: { fontWeight: "bold" }, sortable: true, extraProperty: "" },
            { name: "Actions", id: "actions", sortable: false, extraProperty: "" },
        ],
        tableContent: [
            { id: 'RRM0001', templateName: "Akaryakpt İstasyonu Kira Sözleşmesi", modalType: "Share Purchase Contract", date: "27.10.2014 | 12:30", actions: ["view", "play", "info", "link"], additionalInfo: 'Some additional info for John.' },
            { id: 'RRM0002', expand: 'active', templateName: "Akaryakpt İstasyonu Kira Sözleşmesi", modalType: "Share Purchase Contract", date: "27.10.2014 | 12:30", actions: ["view", "play", "info", "link"], additionalInfo: 'Some additional info for John.' },
            { id: 'RRM0003', templateName: "Akaryakpt İstasyonu Kira Sözleşmesi", modalType: "Share Purchase Contract", date: "27.10.2014 | 12:30", actions: ["view", "play", "info", "link"], additionalInfo: 'Some additional info for John.' },
            { id: 'RRM0004', templateName: "Akaryakpt İstasyonu Kira Sözleşmesi", modalType: "Share Purchase Contract", date: "27.10.2014 | 12:30", actions: ["view", "play", "info", "link"], additionalInfo: 'Some additional info for John.' },
            { id: 'RRM0005', templateName: "Akaryakpt İstasyonu Kira Sözleşmesi", modalType: "Share Purchase Contract", date: "27.10.2014 | 12:30", actions: ["view", "play", "info", "link"], additionalInfo: 'Some additional info for John.' },
            { id: 'RRM0006', templateName: "Akaryakpt İstasyonu Kira Sözleşmesi", modalType: "Share Purchase Contract", date: "27.10.2014 | 12:30", actions: ["view", "play", "info", "link"], additionalInfo: 'Some additional info for John.' },
            { id: 'RRM0007', templateName: "Akaryakpt İstasyonu Kira Sözleşmesi", modalType: "Share Purchase Contract", date: "27.10.2014 | 12:30", actions: ["view", "play", "info", "link"], additionalInfo: 'Some additional info for John.' },
        ]
    };

    return (
        <div>
            <div className='d-flex justify-content-between'>
                <div>
                    <input className='form-control' type='search' ></input>
                </div>
                <div>
                    <div className='d-flex position-relative'>
                        {filterOpen && (<>

                            <div className='shadow-lg bg-white z-1 container ' >
                                <div className='d-flex justify-content-between border-bottom py-3'>
                                    <div>
                                        <img src={filter} width={20} height={20} /><span className='fw-bold mx-1'>Filters</span>
                                    </div>
                                    <button type="button" className="btn-close" onClick={() => setFilterOpen(false)}>
                                    </button>
                                </div>
                                <div>
                                    <div className='row'>
                                        <div className="col-6">
                                            <MultiSelectList labelName={'ID'} listItem={IdList}></MultiSelectList>
                                        </div>
                                        <div className="col-6">
                                            <MultiSelectList labelName={'Template Name'} listItem={IdList}></MultiSelectList>
                                        </div>
                                    </div>
                                    <div className='row mt-2 border-bottom pb-3'>
                                        <div className="col-12">
                                            <MultiSelectList labelName={'Model Type'} listItem={IdList}></MultiSelectList>
                                        </div>
                                    </div>

                                    <div className='row pt-2 secondary-bgcolor pb-4 border-bottom'>
                                        <div className="col-6">
                                            <MultiSelectList labelName={'Model Usage Preferences'} listItem={IdList}></MultiSelectList>
                                        </div>
                                        <div className="col-6">
                                            <MultiSelectList labelName={'Sectoral Theme'} listItem={IdList}></MultiSelectList>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className='d-flex justify-content-between'>
                                        <div>
                                            <button type="button" className="btn btn-secondary text-dark border-0" data-bs-dismiss="modal">Clear Filters</button>
                                        </div>
                                        <div>
                                            <button type="button" className="btn btn-light text-dark mx-3 border px-3" data-bs-dismiss="modal">Cancel</button>
                                            <button type="button" className="btn btn-dark text-light px-3">Apply</button>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </>)
                        }
                        <div>
                            <button type="button" className="btn btn-secondary  border-0 position-absolute" onClick={openFilter}>
                                <img src={filter} width={20} height={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ClickableTable tableData={data} />
        </div>
    );
}

export default UtilityPage;
