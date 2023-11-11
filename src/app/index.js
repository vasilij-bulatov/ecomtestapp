import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './store';
import {Routing} from './routes';
import {theme} from './styles';
import {ThemeProvider} from '@rneui/themed';

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <GestureHandlerRootView style={{flex: 1}}>
            <NavigationContainer>
              <Routing />
            </NavigationContainer>
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  );
}
