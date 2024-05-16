import React from 'react';
import starEmpty from '../assests/star-empty.svg'
import starFilled from '../assests/star-filled.svg'
import info from '../assests/information.svg'
import play from '../assests/continue.svg'
import link from '../assests/copyurl.svg'
import view from '../assests/preview.svg'





import { useState } from "react";
import "./ClickableTable.css"
import RowExpendedView from './RowExpendedView';
import Tooltip from './Tooltip';

function TableRow(props: any) {
    const [expanded, setExpanded] = useState(false);
    const handleClick = () => {
        setExpanded(!expanded);
        props.onClick && props.onClick();
    };

    const actions: any = {
        view: { icon: <img src={view} width={15} height={15} /> },
        info: { icon: <img src={info} width={15} height={15} />, tooltip: "Template details" },
        play: { icon: <img src={play} width={15} height={15} />, tooltip: "Continue with template" },
        link: { icon: <img src={link} width={15} height={15} />, tooltip: "Copy url" }
    }


    return (
        <>
            {expanded ? (
                <tr>
                    <td colSpan={6} className="bg-white">
                        <RowExpendedView rowData={props.rowData} handleClick={handleClick} />
                    </td>
                </tr>

            ) : <>
                <tr style={{ cursor: 'pointer' }}>
                    {props.headerData.map((key: any, index: number) => (
                        <>
                            {key.id == "actions" ? <>
                                <td>
                                    <div className="d-flex">
                                        {props.rowData[key.id].map((actionValue: string, index: number) => (
                                            <Tooltip key={index} text={actions[actionValue].tooltip}>
                                                <div className="mx-1 action-box d-flex justify-content-center align-items-center">
                                                    {actions[actionValue].icon}
                                                </div>
                                            </Tooltip>
                                        ))}
                                    </div>
                                </td>
                            </> : key.id == "expand" ? <td>
                                <div className="d-flex justify-content-center align-items-center">
                                    <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                    </svg>
                                    {props.rowData[key.id] == 'active' ? <>
                                        <img src={starFilled} width={15} height={15} />
                                    </> :
                                        <>
                                            <img src={starEmpty} width={15} height={15} />
                                        </>
                                    }
                                </div>
                            </td> :
                                <td style={key.style}>{props.rowData[key.id]}</td>
                            }
                        </>
                    ))}
                </tr>
            </>}
        </>
    );
}

function ClickableTable(props: any) {
    const handleRowClick = () => {
        // Handle row click event here if needed
    };

    return (
        <table width={"100%"}>
            <thead>
                <tr>
                    {props.tableData.tableHeader.map((headerData: any, index: number) => (
                        <th key={index} className="p-1">
                            <span>
                                {headerData.name}
                            </span>
                            {headerData.sortable && <span> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg></span>}
                        </th>

                    ))}
                </tr>
            </thead>
            <tbody>
                {props.tableData.tableContent.map((rowData: any, index: number) => (
                    <TableRow key={index} rowData={rowData} headerData={props.tableData.tableHeader} onClick={handleRowClick} />
                ))}
            </tbody>
        </table>
    );
}
export default ClickableTable;