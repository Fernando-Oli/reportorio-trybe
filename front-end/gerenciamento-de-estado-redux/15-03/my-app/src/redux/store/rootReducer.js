import { combineReducers } from 'redux';
import myReducer from '../reducers/reducer';
import myReducer1 from '../reducers/reducer1';

const rootReducer = combineReducers({ myReducer, myReducer1 });

export default rootReducer;