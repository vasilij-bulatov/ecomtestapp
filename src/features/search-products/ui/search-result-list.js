import React from 'react';
import {FlashList} from '@shopify/flash-list';

import {SearchCard} from './search-item';


export function SearchResultList({products, toggle}) {
  
  const renderItem = ({item}) => (
    <SearchCard product={item} toggle={toggle}/>
  );

  return (
    <FlashList
      estimatedItemSize={120}
      data={products}
      renderItem={renderItem}
    />
  );
}