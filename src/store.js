import { configureStore } from "@reduxjs/toolkit";
import tableDataSaveReducer from './tableDataSave'




const store = configureStore({
    reducer:{tableData: tableDataSaveReducer }
})

export default store ;