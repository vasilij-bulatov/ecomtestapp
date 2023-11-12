import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ListItem, Button, Avatar, Text} from '@rneui/themed';

import {useUserState} from '../../entities/user';

import {useChangeAuthState} from '../../features/change-auth-state';

import {Header} from '../../widgets/header';

export function ProfileScreen() {
  const STRINGS = {
    title: 'Профиль',
    exit: 'Выйти',
  };
  const {logOut} = useChangeAuthState();
  const {data, isLoad} = useUserState();
  return (
    <>
      <Header title={STRINGS.title}/>
      <SafeAreaView style={styles.container}>
        {isLoad && <View style={styles.viewContainer}>
          <Avatar
            rounded
            size={180}
            source={{uri: data.image}}
            containerStyle={{
              borderColor: 'grey',
              borderStyle: 'solid',
              borderWidth: 1,
            }}
          />
          <Text h3>{`${data.firstName} ${data.lastName}`}</Text>
          <Text h4>{data.email}</Text>
          <Button title={STRINGS.exit} type="clear" onPress={logOut} />
        </View>}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
