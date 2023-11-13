import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '../../../shared';

export const searchProducts = createAsyncThunk(
  'searchProducts',
  async query => {
    const response = await api.searchProducts(query);
    response.metaData = query;
    return response;
  },
);

const initialState = {
  searchQuery: '',
  data: [],
  isLoad: false,
  isPending: false,
  error: null,
};

const searchSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setIsLoad(state, action) {
      state.isLoad = action.payload;
    },
    setQuery(state, action) {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(searchProducts.pending, state => {
      state.isPending = true;
    });
    builder.addCase(searchProducts.rejected, state => {
      state.data = [];
      state.error = 'Failed search';
      state.isLoad = true;
      state.isPending = false;
    });
    builder.addCase(searchProducts.fulfilled, (state, action) => {
      if (action.payload.products.length > 0) {
        if (action.payload.metaData == state.searchQuery) {
          state.data = action.payload.products;
          state.isLoad = true;
          state.errorCode = null;
          state.isPending = false;
        }
      } else {
        state.data = [];
        state.error = 'No search results getted';
        state.isLoad = true;
        state.isPending = false;
      }
    });
  },
});

export const searchActions = searchSlice.actions;

export const searchReducer = searchSlice.reducer;
