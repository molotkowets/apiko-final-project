import { configureStore } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { cardReducer } from "./reducer";

export const store = configureStore({
    reducer: cardReducer,
    preloadedState: initialState
})