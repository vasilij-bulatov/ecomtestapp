import {useDispatch, useSelector} from 'react-redux';

import { cartActions } from "../../../entities/cart";


export function useCartActions() {
  const dispatch = useDispatch();

  const addProduct = (product) => {
    const addedItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
      total: product.price * 1,
      discountPercentage: product.discountPercentage,
      discountedPrice: product.price - (product.price/100) * +product.discountPercentage,
      thumbnail: product.thumbnail, 
    };
    dispatch(cartActions.addItem(addedItem));
  };

  const removeProduct = (product) => {
    dispatch(cartActions.removeItem(product));
  };

  const isProductInCart = (product) => {
    const {products} = useSelector(state => state.cart);
    return products.filter(item => item.id == product.id).length > 0;
  }

  const removeAllProducts = () => {
    dispatch(cartActions.clearCart());
  };

  return {addProduct, removeProduct, isProductInCart, removeAllProducts};
}

export function useCounter() {

}