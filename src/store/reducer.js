import { createReducer } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { addToCard, removeFromCard } from "./actions";

export const cardReducer = createReducer(initialState, {
    [addToCard]: (state, action) => {
        if(!state.cardItems.find((item)=>item.id === action.payload.id)){
            state.cardItems = [...state.cardItems, action.payload]
        }
    },
    [removeFromCard]: (state, action) => {
        state.cardItems.filter(item => item.id !== action.payload)
    }
})