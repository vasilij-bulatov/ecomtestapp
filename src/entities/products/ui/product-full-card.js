import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Card, Text, Image, Button, Chip} from '@rneui/themed';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

export function ProductFullCard({product}) {
  return (
    <Card>
      <View style={styles.viewContainer}>
        <Text style={styles.textPrice} h3>
          {product?.price + '$'}
        </Text>
        <Chip type="outline">
          <Text
            style={styles.textDiscount}
            h6>{`Скидка ${product?.discountPercentage}%`}</Text>
        </Chip>
        <Text h6>{`Осталось ${product?.stock} шт`}</Text>
      </View>

      <View style={styles.viewContainer}>
        <Text style={styles.textTitle} h2>
          {product?.title}
        </Text>
        <Chip
          type="outline"
          icon={<AntDesign name='star' size={20} color={'orange'}/>}
          containerStyle={{ marginVertical: 15 }}
          title={<Text h5>{product?.rating}</Text>}/>
      </View>
      <View>
        <Text>{product?.description}</Text>
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
