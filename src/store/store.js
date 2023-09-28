import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { cardReducer } from "./reducer";
import { logger } from "../middleware/logger";

export const store = configureStore({
    reducer: cardReducer,
    preloadedState: initialState
}, applyMiddleware(logger ))