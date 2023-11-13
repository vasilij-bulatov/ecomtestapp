import {configureStore, combineReducers} from '@reduxjs/toolkit';
import { userReducer } from '../entities/user';
import { productsReducer } from '../entities/products';
import { cartReducer } from '../entities/cart';
import { filterReducer } from '../features/filter-products';
import { searchReducer } from '../features/search-products';

const combinedReducers = combineReducers({
  user: userReducer,
  products: productsReducer,
  cart: cartReducer,
  filter: filterReducer,
  search: searchReducer,
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