import React from 'react';
import { FlatList } from 'react-native';
import {FlashList} from '@shopify/flash-list';
import { CartItem } from './cart-item';
import { CartListHeader } from './cart-list-header';

const renderItem = ({item}) => (
  <CartItem key={item.id} product={item}/>
);

export function CartList({products}) {

  return (
    <FlatList 
      data={products}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      ListHeaderComponent={CartListHeader}
    />
  );
  
  /*return (
    <FlashList
      estimatedItemSize={120}
      data={products}
      renderItem={renderItem}
      ListHeaderComponent={CartListHeader}
    />
  );*/
}