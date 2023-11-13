import React, {useEffect, useState} from 'react';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {getProducts, productsActions} from './store';

export function useProductsState() {
  const productsState = useSelector(state => state.products);
  return productsState;
}

export function useGetProductsEffect(isLoad, token) {
  const dispatch = useDispatch();
  return useEffect(() => {
    if (!isLoad) {
      dispatch(getProducts(token));
    }
    return () => {};
  }, [isLoad, token]);
}

export function useUpdateProductsFocusEffect() {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  return useEffect(() => {
    if (isFocused) {
      dispatch(getProducts());
    }
  }, [isFocused]);
}
