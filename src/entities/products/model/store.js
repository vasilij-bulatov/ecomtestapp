import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '../../../shared';

export const getProducts = createAsyncThunk('getProducts', async (token) => {
  const response = await api.getProducts(token);
  //response.metaData = groupCode;
  return response;
});

const initialState = {
  data: [],
  isLoad: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    /*setSelectedTasksGroup(state, action) {
      state.selectedTasksGroup = action.payload;
    },*/
    setIsLoad(state, action) {
      state.isLoad = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getProducts.rejected, state => {
      state.data = [];
      state.error = 'Failed get products';
      state.isLoad = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      //console.log('store fullfill get pr ', action);
      if (action.payload?.products) {
        //if (action.payload.metaData === state.selectedTasksGroup) {
        state.data = action.payload.products;
        state.isLoad = true;
        state.errorCode = null;
        //}
      } else {
        state.data = [];
        state.error = "No products getted";
        state.isLoad = true;
      }
    });
  },
});

export const productsActions = productsSlice.actions;

export const productsReducer = productsSlice.reducer;