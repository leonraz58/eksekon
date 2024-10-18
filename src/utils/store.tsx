import {configureStore} from "@reduxjs/toolkit";
import {basketReducer} from "./basketReducer";
import {appReducer} from "./appReducer";

export const store = configureStore({
    reducer: {basket: basketReducer, app: appReducer},
})

export type AppRootStateType = ReturnType<typeof store.getState>