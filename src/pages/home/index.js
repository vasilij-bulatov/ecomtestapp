import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { Header } from '../../widgets/header';

export function HomeScreen() {
  return (
    <SafeAreaView>
      <Header />
      <View>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
}
