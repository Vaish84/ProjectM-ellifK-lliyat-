import * as actionTypes from "./actionTypes"

const initialState: TableDataState = {
    table: [
        {
            tableHeader: [
                { name: "", id: "expand", sortable: false, extraProperty: "" },
                { name: "ID", id: "id", sortable: true, style: { fontWeight: "bold" }, extraProperty: "" },
                { name: "Template Name", id: "templateName", sortable: true, extraProperty: "" },
                { name: "Model Type", id: "modalType", sortable: true, extraProperty: "" },
                { name: "Date/Time", id: "date", style: { fontWeight: "bold" }, sortable: true, extraProperty: "" },
                { name: "Actions", id: "actions", sortable: false, extraProperty: "" },
            ], tableContent: [
                { id: 'RRM0001', templateName: "Akaryakpt İstasyonu Kira Sözleşmesi", modalType: "Share Purchase Contract", date: "27.10.2014 | 12:30", actions: ["view", "play", "info", "link"], additionalInfo: 'Some additional info for John.' },
                { id: 'RRM0002', expand: 'active', templateName: "Akaryakpt İstasyonu Kira Sözleşmesi", modalType: "Share Purchase Contract", date: "27.10.2014 | 12:30", actions: ["view", "play", "info", "link"], additionalInfo: 'Some additional info for John.' },
                { id: 'RRM0003', templateName: "Akaryakpt İstasyonu Kira Sözleşmesi", modalType: "Share Purchase Contract", date: "27.10.2014 | 12:30", actions: ["view", "play", "info", "link"], additionalInfo: 'Some additional info for John.' },
                { id: 'RRM0004', templateName: "Akaryakpt İstasyonu Kira Sözleşmesi", modalType: "Share Purchase Contract", date: "27.10.2014 | 12:30", actions: ["view", "play", "info", "link"], additionalInfo: 'Some additional info for John.' },
                { id: 'RRM0005', templateName: "Akaryakpt İstasyonu Kira Sözleşmesi", modalType: "Share Purchase Contract", date: "27.10.2014 | 12:30", actions: ["view", "play", "info", "link"], additionalInfo: 'Some additional info for John.' },
                { id: 'RRM0006', templateName: "Akaryakpt İstasyonu Kira Sözleşmesi", modalType: "Share Purchase Contract", date: "27.10.2014 | 12:30", actions: ["view", "play", "info", "link"], additionalInfo: 'Some additional info for John.' },
                { id: 'RRM0007', templateName: "Akaryakpt İstasyonu Kira Sözleşmesi", modalType: "Share Purchase Contract", date: "27.10.2014 | 12:30", actions: ["view", "play", "info", "link"], additionalInfo: 'Some additional info for John.' },

            ]
        }
    ]
}
const reducer = (
    state: TableDataState = initialState,
    action: TableAction
): TableDataState => {
    switch (action.type) {
        case actionTypes.SHOW_TABLE:
            const newTable: ITableData = {
                tableHeader: action.table.tableHeader,
                tableContent: action.table.tableContent,
            }
            return {
                ...state,
                table: state.table,
            }
    }
    return state
}

export default reducer