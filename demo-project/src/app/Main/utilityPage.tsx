import React, { useEffect, useState } from 'react';
import ClickableTable from '../components/ClickableTable';
import FilterComp from './filter';
import search from '../assests/search.svg'


function UtilityPage() {

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

    const [filteredTableData, setFilteredTableData] = useState<any>({})
    function searchFunction(event: any) {
        console.log(data);
        debugger
        let tempTableDta: any = { ...data }
        tempTableDta.tableContent = data.tableContent.filter((el: any) => el.templateName.includes(event.target.value))
        setFilteredTableData(tempTableDta)
    }

    useEffect(() => {
        setFilteredTableData(data)
    }, [0])


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
