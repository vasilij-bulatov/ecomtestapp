import React, {useEffect} from 'react';
import {useNavigation, useFocusEffect, useIsFocused} from '@react-navigation/native';
import {Card, Text, Image, Button, Chip} from '@rneui/themed';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  useCartActions,
  Counter,
  useProductQuantity,
} from '../../../features/cart-actions';

export function ProductCard({product}) {
  const navigation = useNavigation();
  const {addProduct, isProductInCart, getProductQuantity} = useCartActions();
  const showCounter = isProductInCart(product);
  const onPress = () => {
    addProduct(product);
  };
  const [quantity, setQuantity] = React.useState(useProductQuantity(product));
  const isFocused = useIsFocused();
  const [crutch, setCrutch] = React.useState(true);

  useEffect(()  => {
    if (isFocused) {
      setQuantity(getProductQuantity(product));
      setCrutch(true);
    }
  }, [isFocused]);
  
  return (
    <TouchableOpacity
      onPress={() => {
        setCrutch(false);
        navigation.navigate('Product', {product: product});}}>
      <Card>
        <Image source={{uri: product.thumbnail}} style={styles.image} />
        <View style={styles.viewContainer}>
          <Text style={styles.textPrice} h3>
            {product?.price + '$'}
          </Text>
          <Chip type="outline">
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
          <View style={{height: 50, justifyContent: 'center'}}>
            {crutch && (showCounter ?  (
              <Counter product={product} start={quantity} />
            ) : (
              <Button size="lg" title={'В корзину'} onPress={onPress} />
            ))}
          </View>
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
