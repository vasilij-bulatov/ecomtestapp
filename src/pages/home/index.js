import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from '../../widgets/header';
import {ProductsListWidget} from '../../widgets/products-list';

export function HomeScreen() {
  const STRINGS = {
    title: 'Главная',
  };
  return (
    <>
      <Header title={STRINGS.title} />
      <SafeAreaView style={styles.container}>
        <ProductsListWidget />
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
});
