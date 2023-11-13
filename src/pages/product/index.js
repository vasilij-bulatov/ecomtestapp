import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FAB} from '@rneui/themed';

import {Header} from '../../widgets/header';
import {ImagesCarousel} from '../../widgets/image-carousel';

import {Counter, useCartActions, useProductQuantity} from '../../features/cart-actions';

import {ProductFullCard} from '../../entities/products';

import {capitalizeFirstLetter} from '../../shared';

export function ProductScreen({route}) {
  const product = route.params?.product;
  const {addProduct, isProductInCart} = useCartActions();
  const quantity = useProductQuantity(product);
  const onAddToCartPress = () => {
    addProduct(product);
  };
  const showCounter = isProductInCart(product);

  return (
    <>
      <Header
        arrowBackEnable={true}
        title={capitalizeFirstLetter(product.category)}
      />
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={{flex: 1}}>
          <ImagesCarousel images={product.images} />
          <ProductFullCard product={product} />
        </ScrollView>
        <View style={styles.FAB}> 
          {showCounter ? (
            <Counter product={product} start={quantity}/>
          ) : (
            <FAB
              onPress={onAddToCartPress}
              title={'Добавить в корзину'}
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
  FAB: {
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 2,
  },
});
