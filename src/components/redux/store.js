import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import homePageReducer from './homePageReducer';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({homePage: homePageReducer});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store;