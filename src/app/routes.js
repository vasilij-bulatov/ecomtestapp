import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {useWindowDimensions, Platform, useColorScheme} from 'react-native';
import {useGetUserEffect, useUserState, } from '../entities/user';
import { theme } from './styles';

import { AuthScreen } from '../pages/auth';
import { HomeScreen } from '../pages/home';
import { CartScreen } from '../pages/cart';
import { ProfileScreen } from '../pages/profile';
import { ProductScreen } from '../pages/product';
import { PaymentScreen } from '../pages/payment';

const TabBar = createBottomTabNavigator();

const AuthStack = createStackNavigator();

function TabBarComponent() {
  const {height, fontScale} = useWindowDimensions();
  const mode = useColorScheme();
  return (
    <TabBar.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: mode == 'light' ? theme.lightColors.primary : theme.darkColors.primary,
          height: Platform.OS == 'ios' ? 70 : 48,
          paddingBottom: Platform.OS == 'ios' ? 12 : 2,
        },
        tabBarActiveTintColor: theme.lightColors.white,
        tabBarInactiveTintColor: mode == 'light' ? theme.lightColors.grey0 : theme.darkColors.grey0,
        tabBarLabelStyle: {fontSize: 12 / fontScale},
      }}>
      <TabBar.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Главная',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        }}
      />
      <TabBar.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Профиль',
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="user" color={color} size={size} />
          ),
        }}
      />
    </TabBar.Navigator>
  );
}

export function Routing() {
  const {isLogged, isLoad} = useUserState();
  useGetUserEffect(isLoad);

  return (
    <>
      <AuthStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {isLogged ? (
          <>
            <AuthStack.Screen name={'TabBar'} component={TabBarComponent} />
            <AuthStack.Screen name={'Cart'} component={CartScreen} />
            <AuthStack.Screen name={'Product'} component={ProductScreen} />
            <AuthStack.Screen name={'Payment'} component={PaymentScreen} />
          </>
        ) : (
          <>
            <AuthStack.Screen name={'Auth'} component={AuthScreen} />
          </>
        )}
      </AuthStack.Navigator>
    </>
  );
}