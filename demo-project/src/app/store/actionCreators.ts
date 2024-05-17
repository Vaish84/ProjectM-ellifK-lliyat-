import * as actionTypes from "./actionTypes"


export function showTable(table: ITableData) {
    const action: TableAction = {
      type: actionTypes.SHOW_TABLE,
      table,
    }
  
    return getHttpRequest(action)
  }
  
  export function filterTable(table: ITableData) {
    const action: TableAction = {
      type: actionTypes.FILTER_TABLE,
      table,
    }
    return getHttpRequest(action)
  }


  export function getHttpRequest(action: TableAction) {
    return (dispatch: DispatchType) => {
      setTimeout(() => {
        dispatch(action)
      }, 500)
    }
  }