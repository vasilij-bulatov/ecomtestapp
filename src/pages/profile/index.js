import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from '../../widgets/header';
import {ListItem, Button} from '@rneui/themed';
import { useChangeAuthState } from '../../features/change-auth-state';

export function ProfileScreen() {
  const STRINGS = {
    exit: 'Выйти',
  };
  const {logOut} = useChangeAuthState();
  return (
    <SafeAreaView>
      <Header />
      <View>
        <Text>Profile</Text>
        <Button title={STRINGS.exit} type='clear' onPress={logOut}/>
      </View>
    </SafeAreaView>
  );
}
