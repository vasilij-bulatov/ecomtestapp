import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Card, Text, Image, Button, Chip, useTheme} from '@rneui/themed';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

export function SearchCard({product, toggle}) {
  const navigation = useNavigation();
  const {theme} = useTheme();
  return (
    <TouchableOpacity
      onPress={() => {
        toggle();
        navigation.navigate('Product', {product: product});
      }}>
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
              }}
              h5>
              {product?.price + '$'}
            </Text>
          </View>
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
    height: 70,
    width: 70,
  },
  textPrice: {
    color: '#317873',
  },
  textDiscount: {
    color: '#f72414',
  },
  textTitle: {
    ///width: '60%',
  },
});
