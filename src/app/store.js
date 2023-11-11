import {configureStore, combineReducers} from '@reduxjs/toolkit';
import { userReducer } from '../entities/user';

const combinedReducers = combineReducers({
  user: userReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'logout/fulfilled') {
    return combinedReducers(undefined, action);
  }
  return combinedReducers(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
});