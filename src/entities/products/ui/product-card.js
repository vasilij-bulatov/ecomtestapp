import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Card, Text, Image, Button, Chip} from '@rneui/themed';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

export function ProductCard({product}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Product', {product: product})}>
      <Card>
        <Image source={{uri: product.thumbnail}} style={styles.image} />
        <View style={styles.viewContainer}>
          <Text style={styles.textPrice} h3>
            {product?.price + '$'}
          </Text>
          <Chip type='outline'>
            <Text
              style={styles.textDiscount}
              h5>{`Скидка ${product?.discountPercentage}%`}</Text>
          </Chip>

          <Text h6>{`Осталось ${product?.stock} шт`}</Text>
        </View>
        <View style={styles.viewContainer}>
          <Text style={styles.textTitle} h2>
            {product?.title}
          </Text>
          <Button size="lg" title={'В корзину'} />
        </View>
      </Card>
    </TouchableOpacity>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 2,
  },
  image: {
    //width: '100%',
    height: 120,
  },
  textPrice: {
    color: '#317873',
  },
  textDiscount: {
    color: '#f72414',
  },
  textTitle: {
    width: '60%',
  },
});
