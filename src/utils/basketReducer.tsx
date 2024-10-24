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
            localStorage.setItem('basket', JSON.stringify(action.payload));
            return action.payload;
        },
        addItemToBasket(state, action: PayloadAction<BasketItem>) {
            let isInBasket = state.find((elem) => elem.id === action.payload.id);
            if (isInBasket) {
                let item = state.find((elem) => elem.id === action.payload.id);
                if (item) {
                    item.value = action.payload.value;
                }
            } else {
                localStorage.setItem('basket', JSON.stringify([...state, action.payload]));
                return ([...state, action.payload])
            }

            localStorage.setItem('basket', JSON.stringify(state));
        },
        removeItemFromBasket(state, action: PayloadAction<string>) {
            let finalState = state.filter((item) => item.id !== action.payload)
            localStorage.setItem('basket', JSON.stringify(finalState));
            return finalState
        }
    }
})

export const basketReducer = slice.reducer
export const basketActions = slice.actions