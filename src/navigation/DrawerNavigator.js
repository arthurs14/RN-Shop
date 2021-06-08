import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import { screenOptions } from './DefaultNavigationSettings';
import ShopNavigator from './ShopNavigator';
import Orders from '../screens/shop/Orders';
import Colors from '../constants/Colors';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Orders" component={Orders} />
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
      <Drawer.Screen name="Shop" component={ShopNavigator} />
      <Drawer.Screen name="Orders" component={StackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
