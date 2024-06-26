import React, { useState } from 'react';
import close from '../assests/close.svg'
import filter from '../assests/filter.svg'
import MultiSelectList from './multiSelectlist';


function FilterComp() {
    const IdList: any = [
        { label: 'Legal', id: 1 , checked :false},
        { label: 'Penalty', id: 2,checked :false} ,
        { label: 'Executive', id: 3,checked :false} ,
        { label: 'Conciliation', id: 4 ,checked :false},
    ]
    const [filterOpen, setFilterOpen] = useState(false)
    const openFilter = () => {
        if (filterOpen) {
            setFilterOpen(false)
        } else {
            setFilterOpen(true)
        }
    }
    return (<>

        <div style={{ position: "relative" }}>
            <button type="button" className="btn btn-secondary  border-0" onClick={openFilter}>
                <img src={filter} width={20} height={20} />
            </button>
            {filterOpen && (<>

                <div className='shadow bg-white z-1 container position-absolute' style={{ right: '100%', top: '0%', width: '1300% ' }} >
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
        </div>

    </>)
}

export default FilterComp;
