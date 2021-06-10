import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { screenOptions } from './DefaultNavigationSettings';
import AdminNavigator from './AdminNavigator';
import ShopNavigator from './ShopNavigator';
import Orders from '../screens/shop/Orders';
import Colors from '../constants/Colors';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Orders Screen" component={Orders} />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        ...screenOptions,
        drawerActiveTintColor: Colors.primary,
        drawerActiveBackgroundColor: 'white',
      }}>
      <Drawer.Screen
        name="Shop"
        component={ShopNavigator}
        options={{
          headerShown: false,
          drawerIcon: config => (
            <Icon
              name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
              size={23}
              color={config.color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Orders"
        component={StackNavigator}
        options={{
          headerShown: false,
          drawerIcon: config => (
            <Icon
              name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
              size={23}
              color={config.color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Admin"
        component={AdminNavigator}
        options={{
          headerShown: false,
          drawerIcon: config => (
            <Icon
              name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
              size={23}
              color={config.color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
