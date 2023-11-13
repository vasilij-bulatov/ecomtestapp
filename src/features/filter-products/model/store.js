import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '../../../shared';
import { getSelectedCategoriesList, filterByPriceRange } from './lib';

export const getFiltersCategories = createAsyncThunk(
  'getFiltersCategories ',
  async () => {
    const response = await api.getCategories();
    //response.metaData = groupCode;
    return response;
  },
);

export const applyFilter = createAsyncThunk(
  'applyFilter',
  async (_, thunkAPI) => {
    const cat = thunkAPI.getState().filter.categories;
    const selIndx = thunkAPI.getState().filter.selectedIndex;
    const selectedCategories = getSelectedCategoriesList(cat, selIndx);
    const response = await api.getProductsByCategories(selectedCategories);
    return response;
  },
);

const initialState = {
  categories: [],
  selectedIndex: [],
  isFilterApply: false,
  minPrice: 0,
  maxPrice: Infinity,
  data: [],
  isLoad: false,
  error: null,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setIsLoad(state, action) {
      state.isLoad = action.payload;
    },
    setApplyFilter(state, action) {
      state.isFilterApply = action.payload;
    },
    setMinPrice(state, action) {
      state.minPrice = action.payload;
    },
    setMaxPrice(state, action) {
      state.maxPrice = action.payload;
    },
    setSelectedIndex(state, action) {
      state.selectedIndex = action.payload;
    },
    resetFilter(state) {
      state.categories = [];
      state.selectedIndex = [];
      state.isLoad = false;
      state.errorCode = null;
      state.minPrice = 0;
      state.maxPrice = Infinity;
      state.isFilterApply = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(getFiltersCategories.rejected, state => {
      state.categories = [];
      state.error = 'Failed get categories';
      state.isLoad = true;
    });
    builder.addCase(getFiltersCategories.fulfilled, (state, action) => {
      if (action.payload.length > 0) {
        state.categories = action.payload;
        state.isLoad = true;
        state.errorCode = null;
      } else {
        state.categories = [];
        state.error = 'No categories getted';
        state.isLoad = false;
      }
    });
    builder.addCase(applyFilter.rejected, state => {
      state.data = [];
      state.error = 'Failed get filtered products';
      state.isLoad = true;
    });
    builder.addCase(applyFilter.fulfilled, (state, action) => {
      if (action.payload) {
        console.log(filterByPriceRange(state.minPrice, state.maxPrice, action.payload));
        state.data = filterByPriceRange(state.minPrice, state.maxPrice, action.payload);
        state.isLoad = true;
        state.errorCode = null;
      } else {
        state.data = [];
        state.error = 'No filtered products';
        state.isLoad = false;
      }
    });
  },
});

export const filterActions = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
