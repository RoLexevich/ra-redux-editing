import { createStore, combineReducers } from "redux";
import serviceListReducer from'../reducers/serviceListReducer';
import serviceAddReducer from'../reducers/serviceAddReducer'; 
import serviceEditReducer from "../reducers/serviceEditReducer";

const reducer = combineReducers({ 
    serviceList: serviceListReducer, 
    serviceEdit: serviceEditReducer, 
    serviceAdd: serviceAddReducer, 
}); 

const store = createStore(reducer);

export default store;