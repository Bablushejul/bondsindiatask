import { createSlice } from "@reduxjs/toolkit";

const initialState = { tablelist: [] };

const tableDataSaveSlice = createSlice({
  name: "tablelist",
  initialState,
  reducers: {
    addNewTableData(state, action) {
      state.tablelist = [...state.tablelist, action.payload];
    },
  },
});

const tableDataSaveReducer = tableDataSaveSlice.reducer;
export const { addNewTableData } = tableDataSaveSlice.actions;
export default tableDataSaveReducer;
