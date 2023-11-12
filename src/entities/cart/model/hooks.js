import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';


export function useCartState() {
  const cartState = useSelector(state => state.cart);
  return cartState;
}
