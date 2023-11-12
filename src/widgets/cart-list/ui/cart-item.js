import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Card, Text, Image, Button, Chip, useTheme} from '@rneui/themed';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import {useCartActions, Counter} from '../../../features/cart-actions';

export function CartItem({product}) {
  const {theme} = useTheme();
  const discountPrice = (
    product.price -
    (product?.price / 100) * product.discountPercentage
  ).toFixed(2);
  const totalPrice = (discountPrice * product.quantity).toFixed(2);
  return (
    <Card>
      <View style={styles.viewContainer}>
        <Image source={{uri: product.thumbnail}} style={styles.image} />
        <View style={{width: '70%'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}>
            <Text style={styles.textTitle} h4>
              {product?.title}
            </Text>
            <Chip type="outline" containerStyle={{justifyContent: 'center'}}>
              <Text
                style={
                  styles.textDiscount
                }>{`Скидка ${product?.discountPercentage}%`}</Text>
            </Chip>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: theme.colors.grey2,
                textDecorationLine: 'line-through',
              }}
              h5>
              {product?.price + '$'}
            </Text>
            <Text style={{color: theme.colors.success}} h5>
              {discountPrice + '$'}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Counter product={product} />
            <View style={{justifyContent: 'flex-end'}}>
              <Text h6 style={{textAlign: 'right'}}>Всего</Text>
              <Text h4>{totalPrice + '$'}</Text>
            </View>
          </View>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding: 20,
    //backgroundColor: 'red',
    //justifyContent: 'center',
    alignItems: 'center',
  },
  viewContainer: {
    width: '100%',
    //height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 2,
  },
  image: {
    //width: '100%',
    width: 70,
    height: 70,
  },
  textPrice: {
    color: '#317873',
  },
  textDiscount: {
    color: '#f72414',
    fontSize: 12,
  },
  textTitle: {
    width: '50%',
  },
});
