import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FAB} from '@rneui/themed';

import {Header} from '../../widgets/header';
import {ImagesCarousel} from '../../widgets/image-carousel';

import {ProductFullCard} from '../../entities/products';

import {capitalizeFirstLetter} from '../../shared';

export function ProductScreen({route}) {
  const product = route.params?.product;
  return (
    <>
      <Header arrowBackEnable={true} title={capitalizeFirstLetter(product.category)} />
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={{flex: 1}}>
          <ImagesCarousel images={product.images} />
          <ProductFullCard product={product} />
        </ScrollView>
        <FAB style={styles.buttonAddToCart} title={'Добавить в корзину'} />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding: 20,
    //backgroundColor: 'red',
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  viewContainer: {
    width: '100%',
    alignItems: 'center',
    alignContent: 'center',
    flex: 1,
    justifyContent: 'space-between',
    //backgroundColor:'blue',
  },
  buttonAddToCart: {
    marginBottom: 15,
  },
});
