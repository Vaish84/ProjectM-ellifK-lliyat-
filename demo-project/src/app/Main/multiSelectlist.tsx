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
        if (value === "selectAll") {
            setSelectAll(checked);
            setSelectedItems(checked ? options : []);
        } else {
            setSelectedItems((prevSelectedItems: any) => {
                if (checked && !prevSelectedItems.includes(value)) {
                    return [...prevSelectedItems, value];
                } else if (!checked) {
                    return prevSelectedItems.filter((item: any) => item !== value);
                }
                return prevSelectedItems;
            });
        }
    };

    const handleClearSelection = (itemToRemove: any) => {
        setSelectedItems((prevSelectedItems: any) =>
            prevSelectedItems.filter((item: any) => item !== itemToRemove)
        );

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
                                <div> <img  src={downArrow} width={10} height={10} />
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
                                    <input type="checkbox" className='mx-3 my-2' value={res.label} onChange={handleCheckboxChange} />
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
