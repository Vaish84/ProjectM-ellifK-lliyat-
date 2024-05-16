import React from 'react';

function RowExpendedView(props: any) {
    return (
        <>
            <div className="row">
                <div className="col-1">
                    <svg onClick={props.handleClick} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E9EFF8" className="bi bi-star-fill mx-2" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                </div>


                <div className="col-11 p-0">
                    <div className="rowExpendedHeading text-start">
                        {props.rowData.id}
                    </div>
                    <div className="row pl10px">
                        <div className="col-5 p-0">
                            <div className="mt-3 expendedSubHeading">
                                Model Contract Name
                            </div>
                            <div className="fw-semibold">
                                {props.rowData.templateName}
                            </div>
                            <div className="mt-3 expendedSubHeading">
                                Contract Type
                            </div>
                            <div className="fw-semibold">
                                Hisse Alpm Sözleşmesi
                            </div>
                            <div className="mt-3 expendedSubHeading">
                                Date/Time
                            </div>
                            <div className="fw-semibold">
                                {props.rowData.date}
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="mt-3 expendedSubHeading">
                                About Model
                            </div>
                            <div className="fw-semibold">
                                Çalpşanpn işverene bağlp olarak iş görmesine, işverenin ise sözleşmede kararlaştprplan ücreti sözleşmenin hüküm ve koşullarpna uygun olarak çalpşana ödemesine yönelik taraflarpn hak ve yükümlülüklerinin belirlenmesidir.
                            </div>
                            <div className="mt-4 expendedSubHeading">
                                Model Usage Preferences
                            </div>
                            <div className="fw-semibold">
                                İşveren Lehine | Belirsiz Süreli | Beyaz Yaka | Tam Zamanlı
                            </div>
                            <div className="my-4 d-flex justify-content-end">
                                <div className="mybutton mx-2">
                                View Model
                                </div>
                                <div className="mybutton2 mx-2">
                                Model Details
                                </div>
                                <div className="mybutton2 mx-2">
                                Select and Continue
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RowExpendedView;