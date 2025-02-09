import {applyMiddleware, combineReducers, createStore} from "redux";
import { thunk as thunkMiddleware } from "redux-thunk";
import mainReducer from "./main-reducer";
import cartReducer from "./cart-reducer";

let reducers = combineReducers({
    mainPage: mainReducer,
    cart: cartReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;