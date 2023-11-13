import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '../../../shared';

export const getProducts = createAsyncThunk('getProducts', async (token) => {
  const response = await api.getProducts(token);
  return response;
});

const initialState = {
  data: [],
  isLoad: false,
  isPending: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    setIsLoad(state, action) {
      state.isLoad = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getProducts.pending, state => {
      state.isPending = true;
    });
    builder.addCase(getProducts.rejected, state => {
      //state.data = [];
      state.error = 'Failed get products';
      state.isLoad = true;
      state.isPending = false;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      if (action.payload?.products) {
        state.data = action.payload.products;
        state.isLoad = true;
        state.errorCode = null;
        state.isPending = false;
      } else {
        state.data = [];
        state.error = "No products getted";
        state.isLoad = false;
        state.isPending = false;
      }
    });
  },
});

export const productsActions = productsSlice.actions;

export const productsReducer = productsSlice.reducer;