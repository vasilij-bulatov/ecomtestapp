import {createSlice, createAsyncThunk, current} from '@reduxjs/toolkit';
import {api} from '../../../shared';
import {getTotal} from './lib';

const initialState = {
  products: [],
  quantity: 0,
  totalProducts: 0,
  total: 0,
  isLoad: false,
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    setIsLoad(state, action) {
      state.isLoad = action.payload;
    },
    addItem(state, action) {
      const productIsExist =
        current(state.products).filter(
          product => product.id == action.payload.id,
        ).length > 0;
      if (productIsExist) {
        const indexItem = state.products.findIndex(
          product => product.id == action.payload.id,
        );
        const oldItem = {...state.products[indexItem]};
        Object.assign(oldItem, {
          quantity: current(state.products)[indexItem].quantity + 1,
        });
        state.products.splice(indexItem, 1, oldItem);
        state.quantity = state.quantity + 1;
        state.total = getTotal(state.products);
      } else {
        state.products = [...state.products, action.payload];
        state.quantity = state.quantity + 1;
        state.totalProducts = state.totalProducts + 1;
        state.total = getTotal(state.products);
      }
    },
    removeItem(state, action) {
      const productIsExist =
        current(state.products).filter(
          product => product.id == action.payload.id,
        ).length > 0;

      if (productIsExist) {
        const indexItem = state.products.findIndex(
          product => product.id == action.payload.id,
        );

        if (current(state.products)[indexItem].quantity > 1) {
          const oldItem = {...state.products[indexItem]};
          Object.assign(oldItem, {
            quantity: current(state.products)[indexItem].quantity - 1,
          });
          state.products.splice(indexItem, 1, oldItem);
          state.quantity = state.quantity - 1;
          state.total = getTotal(state.products);
        } else {
          state.products.splice(indexItem, 1);
          state.quantity = state.quantity - 1;
          state.totalProducts = state.totalProducts - 1;
          state.total = getTotal(state.products);
        }
      }
    },
    clearCart(state) {
      state.products = [];
      state.quantity = 0;
      state.totalProducts = 0;
      state.total = 0;
    },
  },
});

export const cartActions = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
