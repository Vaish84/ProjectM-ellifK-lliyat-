import React, { useEffect, useState } from 'react';
import close from '../assests/closeFilter.svg'
import downArrow from '../assests/down-arrow.svg'


function MultiSelectList(props: any) {
    const [selectedItems, setSelectedItems] = useState<any>([]);
    const [listItems, setListItems] = useState<any>(props.listItem);
    const [selectAll, setSelectAll] = useState(false);
    const options = listItems.map((option: any) => option.label);

    useEffect(() => {
        setListItems(props.listItem)
    }, [props.listItem])

    const handleCheckboxChange = (event: any) => {
        const { value, checked } = event.target;
        if (value === "selectAll" && checked) {
            setSelectAll(checked);
            let tempSelected: any[] = [];
            setListItems(listItems.map((el: any) => {
                tempSelected.push(el.label)
                return { ...el, checked: true }
            }))
            setSelectedItems(tempSelected);
        }
        else {
            if (!checked) {
                setSelectAll(false)
            }
                let tempSelected: any[] = [];
            setListItems(listItems.map((el: any) => {
                if (value == el.label) {
                    if (checked) {
                        tempSelected.push(value)
                    }
                    return { ...el, checked: checked }
                } else {
                    if (el.checked) {
                        tempSelected.push(el.label)
                    }
                    return el
                }
            }))
            setSelectedItems(tempSelected);
        }
    };

    const handleClearSelection = (itemToRemove: any) => {
        setSelectedItems((prevSelectedItems: any) =>
            prevSelectedItems.filter((item: any) => item !== itemToRemove)
        );
        setListItems(listItems.map((el: any) => {
            if (itemToRemove == el.label) {
                return { ...el, checked: false }
            } else {
                return el
            }
        }))
    };

    return (
        <div className="container">
            <label className='fw-medium my-2'>{props.labelName}</label>
            <div className="dropdown border rounded-3">
                <button
                    className="btn  w-100 d-dlex"
                    type="button"
                    id="multiSelectDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <div className=''>
                        {selectedItems.length > 0 ? (
                            selectedItems.map((item: any, index: any) => (
                                <span key={item} className='multiSelect mx-1 text-white'>
                                    {index > 0 && ' '}
                                    {item}
                                    <span>
                                        <img className="bg-white rounded-circle mx-2" src={close} width={10} height={10} onClick={() => handleClearSelection(item)} />
                                    </span>
                                </span>
                            ))
                        ) : (
                            <div className=' d-flex justify-content-between'>
                                <div className='text-secondary'> Choose</div>
                                <div> <img src={downArrow} width={10} height={10} />
                                </div>
                            </div>

                        )}

                    </div>

                </button>
                <ul className="dropdown-menu w-100" aria-labelledby="multiSelectDropdown">
                    <li className='border-bottom '>
                        <label>
                            <input
                                type="checkbox"
                                value="selectAll"
                                className='mx-3'
                                checked={selectAll}
                                onChange={handleCheckboxChange}
                            />
                            Choose All
                        </label>
                    </li>
                    {
                        listItems?.map((res: any) => (<>
                            <li key={res.id} className='border-bottom'>
                                <label>
                                    <input type="checkbox" className='mx-3 my-2' checked={res.checked || selectAll} value={res.label} onChange={handleCheckboxChange} />
                                    {res.label}
                                </label>
                            </li>
                        </>))

                    }
                </ul>

            </div>
        </div>
    );
}

export default MultiSelectList;
