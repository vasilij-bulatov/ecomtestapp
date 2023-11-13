import React from 'react';
import {CounterButton} from './ui/counter';
import {useCartActions} from './model/hooks';

export function Counter({product, start}) {
  const {addProduct, removeProduct} = useCartActions();

  const onPlus = () => {
    addProduct(product);
  };
  const onMinus = () => {
    removeProduct(product);
  };
  return (
    <>
      <CounterButton start={start} onPlus={onPlus} onMinus={onMinus} />
    </>
  );
}

export {useCartActions, useProductQuantity} from './model/hooks';
