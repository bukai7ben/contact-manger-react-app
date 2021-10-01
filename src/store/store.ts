import {applyMiddleware, combineReducers, createStore} from "redux";
import ContactsReducer from "./contacts/reducer";
import {ContactsState} from "./contacts/types";
import logger from 'redux-logger'


export type StoreState = {
    ContactsReducer: ContactsState;

};

const appReducer = combineReducers<StoreState>({
    ContactsReducer,
});

const store = createStore(appReducer, applyMiddleware(logger));

export default store;
