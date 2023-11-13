import React from 'react';
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
    <Counter
      start={start}
      onChange={onChange}
      buttonStyle={{borderColor: theme.colors.secondary}}
      buttonTextStyle={{color: theme.colors.secondary}}
      countTextStyle={{color: theme.colors.secondary}}
    />
  );
}
