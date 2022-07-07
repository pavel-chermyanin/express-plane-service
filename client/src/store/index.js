import { configureStore } from "@reduxjs/toolkit";
import planesSlice from "./planes/planesSlice";
import planeSlice from "./planes/planeSlice";



export const store = configureStore({
    reducer: {
        planes: planesSlice,
        plane: planeSlice,
    }
});