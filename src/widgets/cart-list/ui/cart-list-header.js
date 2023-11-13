import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Card, Text, useTheme} from '@rneui/themed';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {useCartActions} from '../../../features/cart-actions';
import {useCartState} from '../../../entities/cart';

export function CartListHeader() {
  const {theme} = useTheme();
  const STRINGS = {
    total: 'Итого ',
    quantity: 'Всего товаров ',
  };
  const {quantity, total} = useCartState();
  const {removeAllProducts} = useCartActions();
  return (
    <Card>
      <View flexDirection={'row'}>
        <View style={{width: !!total ? '90%' : '100%', marginEnd: 8}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text h4>{STRINGS.total}</Text>
            <Text h4>{total.toFixed(2) + '$'}</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text h5>{STRINGS.quantity}</Text>
            <Text h5>{quantity + ' шт'}</Text>
          </View>
        </View>
        {!!total && (
          <TouchableOpacity onPress={removeAllProducts}>
            <FontAwesome name={'trash'} size={40} color={theme.colors.error} />
          </TouchableOpacity>
        )}
      </View>
    </Card>
  );
}
