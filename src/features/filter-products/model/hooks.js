import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getFiltersCategories, filterActions, applyFilter as _applyFilter } from './store';

export function useFilterCategories() {
  const filterState = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const setSelectedIndex = (value) => {
    dispatch(filterActions.setSelectedIndex(value));
  };

  const applyFilter = (filter) => {
    if (+filter.minPrice >= 0) {
      dispatch(filterActions.setMinPrice(+filter.minPrice));
    }
    if (+filter.maxPrice > 0) {
      dispatch(filterActions.setMaxPrice(+filter.maxPrice));
    } else {
      dispatch(filterActions.setMaxPrice(Infinity))
    }
    dispatch(filterActions.setApplyFilter(filter.applyFilter));
    dispatch(_applyFilter());
  };

  const resetFilter = () => {
    dispatch(filterActions.resetFilter());
  };

  return {...filterState, setSelectedIndex, applyFilter, resetFilter};
}

export function useGetProductsEffect(isLoad) {
  const dispatch = useDispatch();
  return useEffect(() => {
    if (!isLoad) {
      dispatch(getFiltersCategories());
    }
    return () => {};
  }, [isLoad]);
}