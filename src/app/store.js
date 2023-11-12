import {configureStore, combineReducers} from '@reduxjs/toolkit';
import { userReducer } from '../entities/user';
import { productsReducer } from '../entities/products';
import { cartReducer } from '../entities/cart';

const combinedReducers = combineReducers({
  user: userReducer,
  products: productsReducer,
  cart: cartReducer,
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