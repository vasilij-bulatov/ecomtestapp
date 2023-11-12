import React from 'react';
import {FlashList} from '@shopify/flash-list';
import { CartItem } from './cart-item';
import { CartListHeader } from './cart-list-header';

export function CartList({products}) {
  const renderItem = ({item}) => (
    <CartItem product={item}/>
  );
  return (
    <FlashList
      estimatedItemSize={120}
      data={products}
      renderItem={renderItem}
      ListHeaderComponent={CartListHeader}
    />
  );
}