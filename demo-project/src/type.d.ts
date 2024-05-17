interface ITableData {
    tableHeader: any[],
    tableContent: any[]
}

type TableDataState = {
    table: ITableData[]
}

type TableAction = {
    type: string
    table: ITableData
}

type DispatchType = (args: TableAction) => TableAction