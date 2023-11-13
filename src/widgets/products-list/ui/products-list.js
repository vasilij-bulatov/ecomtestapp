import React from 'react';
import {FlashList} from '@shopify/flash-list';
import {useFocusEffect} from '@react-navigation/native';

import {ProductCard} from './product-card';

const renderItem = ({item}) => (
  <ProductCard product={item}/>
);

export function ProductsList({products, header}) {
  
  return (
    <FlashList
      estimatedItemSize={120}
      data={products}
      renderItem={renderItem}
      ListHeaderComponent={header}
    />
  );
}
