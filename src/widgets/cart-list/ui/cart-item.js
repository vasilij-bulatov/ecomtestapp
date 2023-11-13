import React from 'react';
import {Card, Text, Image, Chip, useTheme} from '@rneui/themed';
import {View, StyleSheet} from 'react-native';

import {Counter} from '../../../features/cart-actions';

export function CartItem({product}) {
  const {theme} = useTheme();
  const discountPrice = (
    product.price -
    (product?.price / 100) * product.discountPercentage
  ).toFixed(2);
  const totalPrice = (discountPrice * product.quantity).toFixed(2);
  console.log(product);
  return (
    <Card>
      <View style={styles.viewContainer}>
        <Image source={{uri: product.thumbnail}} style={styles.image} />
        <View style={{width: '70%'}}>
          <View
            style={styles.viewTopLine}>
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
            style={styles.viewMiddleLine}>
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
            style={styles.viewBottomLine}>
            <Counter product={product} start={product.quantity} />
            <View style={{justifyContent: 'flex-end'}}>
              <Text h6 style={{textAlign: 'right'}}>
                Всего
              </Text>
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
    alignItems: 'center',
  },
  viewContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 2,
  },
  viewTopLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  viewMiddleLine: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  viewBottomLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
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
