import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ListItem, Button, Avatar, Text} from '@rneui/themed';

import {useUserState} from '../../entities/user';

import {useChangeAuthState} from '../../features/change-auth-state';

import {Header} from '../../widgets/header';
import { useCartState } from '../../entities/cart';
import { Card } from '@rneui/base';

export function PaymentScreen() {
  const STRINGS = {
    title: 'Оплата',
    total: 'Итого',
    pay: 'Оплатить',
  };
  const {total} = useCartState();
  return (
    <>
      <Header title={STRINGS.title} arrowBackEnable={true}/>
      <SafeAreaView style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text h4>{STRINGS.total}</Text>
            <Text h4>{total.toFixed(2) + '$'}</Text>
          </View>
        <Card containerStyle={{height: 160, marginBottom: 8,}}/>
        <Button title={STRINGS.pay} />
      </SafeAreaView>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  viewContainer: {
    width: '100%',
    alignItems: 'center',
    alignContent: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
});

