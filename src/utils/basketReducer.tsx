import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type BasketItem = {
    id: string
    value: number
}

const initialState = [] as BasketItem[]

const slice = createSlice({
    name: 'basket',
    initialState: initialState,
    reducers: {
        setBasketItems: (state, action: PayloadAction<BasketItem[]>) => {
            localStorage.setItem('ids', JSON.stringify(action.payload));
            return action.payload;
        },
        addItemToBasket(state, action: PayloadAction<BasketItem>) {
            localStorage.setItem('ids', JSON.stringify([...state, action.payload]));
            return ([...state, action.payload])
        },
        removeItemFromBasket(state, action: PayloadAction<string>) {
            let finalState = state.filter((item) => item.id !== action.payload)
            localStorage.setItem('ids', JSON.stringify(finalState));
            return finalState
        }
    }
})

export const basketReducer = slice.reducer
export const basketActions = slice.actions