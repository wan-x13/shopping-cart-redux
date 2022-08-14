import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";


const persistConfig ={
    key: "root",
    storage,
}
const persistedReducer = persistReducer(persistConfig, cartReducer)




export const store = configureStore({
    reducer : {
        cart : persistedReducer
    }
})
export const persistor = persistStore(store)