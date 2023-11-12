import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FAB} from '@rneui/themed';

import {Header} from '../../widgets/header';
import { CartList } from '../../widgets/cart-list';

import { useCartState } from '../../entities/cart';

export function CartScreen() {
  const STRINGS = {
    title: 'Корзина',
    goToPay: 'Купить',
  };

  const {products} = useCartState();

  return (
    <>
      <Header arrowBackEnable={true} title={STRINGS.title} />
      <SafeAreaView style={styles.container}>
        <CartList products={products}/>
        <FAB style={styles.buttonAddToCart} title={STRINGS.goToPay} />
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
