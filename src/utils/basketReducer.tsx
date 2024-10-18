import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type BasketItem = {
    id: string
    value: number
}

const initialState = [] as BasketItem[]

export type AppInitialStateType = typeof initialState;

const slice = createSlice({
    name: 'basket',
    initialState: initialState,
    reducers: {setBasketItems: (state, action: PayloadAction< BasketItem[] >) => {
            state = action.payload;
            console.log(state)
        },}
})

export const basketReducer = slice.reducer
export const basketActions = slice.actions