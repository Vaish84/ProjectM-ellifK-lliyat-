import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


// Define a type for the slice state
interface utilityPageState {
  tableData: any,
  status: 'loading' | 'succeeded' | 'failed' | '',
  error: string | undefined,
}

// Define the initial state using that type
const initialState: utilityPageState = {
  tableData: {},
  status: "",
  error: "", 
}

/****************************************************** Code of dynamic Actions definition *********************************************** */

export const fetchTableData = createAsyncThunk('utilityPage/fetchTableData', async () => {
    try {
      const response = await axios.get('https://api.restful-api.dev/objects');
      return response.data; // Assuming the response data is what you want to store in the state
    } catch (error) {
      throw error;
    }
  });
  
export const utilityPageSlice = createSlice({
  name: 'utilityPage',
  initialState,
  reducers: {},
  extraReducers: (builder:any) => {
    /****************************************************** Code of dynamic Actions *********************************************** */
    builder
      .addCase(fetchTableData.pending, (state:any) => {
        state.status = 'loading';
      })
      .addCase(fetchTableData.fulfilled, (state:any, action:any) => {
        state.status = 'succeeded';
        state.tableData = {
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
      })
      .addCase(fetchTableData.rejected, (state:any, action:any) => {
        state.status = 'failed';
        state.error = action.error?.message;
      });
  },

})


export const getTableData = (state:any) => state.utilityPage.tableData

export default utilityPageSlice.reducer