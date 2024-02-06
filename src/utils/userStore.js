import cartSlice from "./cartSlice";
import { configureStore } from "@reduxjs/toolkit";


export const userStore = configureStore({
    reducer: {
        cart : cartSlice,
    },
});