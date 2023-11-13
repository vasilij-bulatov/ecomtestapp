import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {cartActions} from '../../../entities/cart';

export function useCartActions() {
  const dispatch = useDispatch();
  //const {products} = useSelector(state => state.cart);

  const addProduct = product => {
    const addedItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
      total: product.price * 1,
      discountPercentage: product.discountPercentage,
      discountedPrice:
        product.price - (product.price / 100) * +product.discountPercentage,
      thumbnail: product.thumbnail,
    };
    dispatch(cartActions.addItem(addedItem));
  };

  const removeProduct = product => {
    dispatch(cartActions.removeItem(product));
  };

  const isProductInCart = product => {
    const {products} = useSelector(state => state.cart);
    return products.filter(item => item.id == product.id).length > 0;
  };

  const removeAllProducts = () => {
    dispatch(cartActions.clearCart());
  };

  return {addProduct, removeProduct, isProductInCart, removeAllProducts};
}

export function useProductQuantity(product) {
  const {products} = useSelector(state => state.cart);
  const quantity =
    products.filter(item => item.id == product.id)[0]?.quantity > 0
      ? products.filter(item => item.id == product.id)[0]?.quantity
      : 1;
  //const quantity = products.filter(item => item.id == product.id)[0]?.quantity;
  //console.log('quan', quantity);
  return quantity;
}
