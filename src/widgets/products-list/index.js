import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import { useGetProductsEffect, useProductsState} from '../../entities/products';
import { useUserState } from '../../entities/user';

import { ProductsList } from './ui/products-list';


export function ProductsListWidget() {

  const {data, isLoad} = useProductsState();
  const {token} = useUserState();
  
  useGetProductsEffect(isLoad, token);
  
  if (!isLoad) {
    return <ActivityIndicator/>
  }
 
  return (
    <View flex={1}>
      <ProductsList products={data}/>
    </View>
  );
}
