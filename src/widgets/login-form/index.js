import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useFormik} from 'formik';
import {Input, Button} from '@rneui/themed';
import {useChangeAuthState} from '../../features/change-auth-state';

export function LoginForm() {
  const STRINGS = {
    submit: 'Войти',
    loginPlaceholder: 'Логин',
    passwordPlaceholder: 'Пароль',
  };

  const {logIn, isLogInPending} = useChangeAuthState();

  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    onSubmit: values => {
      console.log(values);
      logIn(values.login, values.password);
    },
  });
  return (
    <View style={styles.container}>
      <Input
        style={styles.textInput}
        placeholder={STRINGS.loginPlaceholder}
        onChangeText={formik.handleChange('login')}
        value={formik.values.login}
      />
      <Input
        style={styles.textInput}
        secureTextEntry={true}
        placeholder={STRINGS.passwordPlaceholder}
        onChangeText={formik.handleChange('password')}
        value={formik.values.password}
      />
      <Button
        title={STRINGS.submit}
        onPress={formik.handleSubmit}
        radius={15}
        loading={isLogInPending}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  textInput: {
    height: 30,
  },
});
