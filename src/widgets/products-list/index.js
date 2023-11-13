import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import {
  FilterProducts,
  useFilterCategories,
} from '../../features/filter-products';

import {
  useGetProductsEffect,
  useProductsState,
} from '../../entities/products';
import {useUserState} from '../../entities/user';

import {ProductsList} from './ui/products-list';

export function ProductsListWidget() {
  const {data, isLoad} = useProductsState();
  const {data: filteredData, isFilterApply} = useFilterCategories();
  const {token} = useUserState();

  useGetProductsEffect(isLoad, token);

  if (!isLoad) {
    return <ActivityIndicator />;
  }

  if (isFilterApply) {
    return (
      <View flex={1}>
        <ProductsList products={filteredData} header={FilterProducts} />
      </View>
    );
  }

  return (
    <View flex={1}>
      <ProductsList products={data} header={FilterProducts} />
    </View>
  );
}
