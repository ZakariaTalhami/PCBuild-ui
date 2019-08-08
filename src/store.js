import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import rootRoducer from './reducer';


const initialState = {};


const middleware = [thunk];

const store = createStore(
    rootRoducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;