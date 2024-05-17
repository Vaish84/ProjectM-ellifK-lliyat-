import React, { useEffect, useState } from 'react';
import FilterComp from './filter';
import search from '../assests/search.svg'
import { useAppDispatch, useAppSelector } from '../store/hooks';
import ClickableTable from '../components/ClickableTable';
import { fetchTableData } from '../store/reducers/utilityPageSlice';


function UtilityPage() {
    const dispatch = useAppDispatch();
    const tableData = useAppSelector((state: any) => state.utilityPage.tableData);
    const [data, setData] = useState<any>();

    const [filteredTableData, setFilteredTableData] = useState<any>({})

    function searchFunction(event: any) {
        
        let tempTableDta: any = { ...data }
        tempTableDta.tableContent = data.tableContent?.filter((el: any) => el.templateName.includes(event.target.value))
        setFilteredTableData(tempTableDta)
    }

    useEffect(() => {
        dispatch(fetchTableData())
    }, [0])

    useEffect(() => {
        setFilteredTableData(tableData)
        setData(tableData)
    }, [tableData])


    return (
        <div className='mainbody'>
            <div className='d-flex justify-content-between p-3'>
                <div className='w-50 position-relative'>
                    <img src={search} alt="Search" className="search-icon position-absolute m-2" width={15} height={20} />
                    <input
                        className='form-control px-4'
                        type='text'
                        onChange={searchFunction}
                        placeholder="Write something about template you want to find"
                    />
                </div>
                <div>
                    <div className='d-flex'>
                        <FilterComp></FilterComp>
                    </div>
                </div>
            </div>
            <div className=' p-3'>
                <span className='fw-bold'>125</span> <span>Records Found</span>
            </div>
            <ClickableTable tableData={filteredTableData} />
        </div>
    );
}

export default UtilityPage;