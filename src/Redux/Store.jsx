import { configureStore } from "@reduxjs/toolkit";
import { CrudSlice } from "./CrudSlice";

export const store = configureStore({
    reducer: {
        Crud: CrudSlice.reducer
    }
})