import React from 'react';

import {CounterButton} from './ui/counter';
import {useCartActions} from './model/hooks';

export function Counter({product}) {
  const {addProduct, removeProduct} = useCartActions();

  const onPlus = () => {
    addProduct(product);
  };
  const onMinus = () => {
    removeProduct(product);
  };

  const start = product.quantity ? product.quantity : 1;

  return <CounterButton start={start} onPlus={onPlus} onMinus={onMinus} />;
}

export {useCartActions} from './model/hooks';

export {CounterButton} from './ui/counter';
