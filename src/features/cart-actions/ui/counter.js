import React from 'react';
import { View } from 'react-native';
import Counter from 'react-native-counters';
import {useTheme} from '@rneui/themed';

export function CounterButton({start, onPlus, onMinus}) {
  const {theme} = useTheme();
  const onChange = (number, type) => {
    switch (type) {
      case '+':
        onPlus();
        break;
      case '-':
        onMinus();
        break;
    }
  };
  return (
    <View style={{backgroundColor: theme.colors.secondary, borderRadius: 5}}>
      <Counter
        start={start}
        onChange={onChange}
        buttonStyle={{borderColor: theme.colors.white}}
        buttonTextStyle={{color: theme.colors.black}}
        countTextStyle={{color: theme.colors.black}}
      />
    </View>
  );
}
