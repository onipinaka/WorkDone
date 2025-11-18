import { configureStore } from "@reduxjs/toolkit";
import sidebarReducers from './SiderbarSlice'
import reducer from "./SiderbarSlice";

const store = configureStore({
    reducer: {
        sidebar: sidebarReducers,
    }
})

export default store;