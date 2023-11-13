import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FAB} from '@rneui/themed';

import {Header} from '../../widgets/header';
import {CartList} from '../../widgets/cart-list';

import {useCartState} from '../../entities/cart';

export function CartScreen() {
  const STRINGS = {
    title: 'Корзина',
    goToPay: 'Купить',
  };
  const navigation = useNavigation();
  const {products, total} = useCartState();

  return (
    <>
      <Header arrowBackEnable={true} title={STRINGS.title} />
      <SafeAreaView style={styles.container}>
        <CartList products={products} />
        <View>
          {!!total && (
            <FAB
              containerStyle={styles.buttonAddToCart}
              //style={styles.buttonAddToCart}
              title={STRINGS.goToPay}
              onPress={() => navigation.navigate('Payment')}
            />
          )}
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContainer: {
    width: '100%',
    alignItems: 'center',
    alignContent: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
  buttonAddToCart: {
    marginTop: 8,
    marginBottom: 15,
    width: '70%',
    alignSelf: 'center',
  },
});
