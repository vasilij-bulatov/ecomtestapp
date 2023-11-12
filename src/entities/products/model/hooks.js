import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from './store';

export function useProductsState() {
  const dispatch = useDispatch();
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