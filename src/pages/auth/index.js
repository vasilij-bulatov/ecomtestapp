import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image} from '@rneui/themed';
import { LoginForm } from '../../widgets/login-form';

export function AuthScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <Image
          source={{
            uri: 'https://png2.cleanpng.com/sh/de9c1151a02d7ae9c71f49fbb2ae6edd/L0KzQYm3VMI3N513fZH0aYP2gLBuTfNwdaF6jNd7LXnmf7B6TgNpd6F1gdDwLXPkgsW0kBhweKFuhtk2Y3H1hH7rhfNwepJ5gdH3LUXkdYLrVBI5PZJoT9cDLka7QoG8UMgyOWY3TKkAMEK5RISAUckveJ9s/kisspng-computer-icons-shopping-cart-shopping-cart-decoration-5ae1d7b85ac7e8.6820508115247502643719.png',
          }}
          containerStyle={styles.imageLogo}
        />
        <LoginForm />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    //backgroundColor: 'red',
    //justifyContent: 'center',
    alignItems: 'center',
  },
  viewContainer: {
    width: '100%',
    alignItems: 'center',
  },
  imageLogo: {
    width: 200,
    height: 200,
    //flex: 1,
    //resizeMode: 'contain',
    //backgroundColor: 'green'
  }, 
});
