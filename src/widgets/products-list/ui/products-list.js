import React from 'react';
import {FlashList} from '@shopify/flash-list';
import {ProductCard} from './product-card';

export function ProductsList({products}) {
  const renderItem = ({item}) => (
    <ProductCard product={item}/>
  );
  return (
    <FlashList
      estimatedItemSize={120}
      data={products}
      renderItem={renderItem}
    />
  );
}
