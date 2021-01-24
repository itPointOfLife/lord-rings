import { combineReducers } from 'redux';
import { tableReducer as table } from './tableReducer';
import { ringReducer as ring } from './ringReducer';

export const rootReducer = combineReducers({ table, ring });
