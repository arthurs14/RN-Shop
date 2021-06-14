import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { screenOptions } from './DefaultNavigationSettings';
import UserProducts from '../screens/user/UserProducts';
import EditProducts from '../screens/user/EditProducts';

const Stack = createStackNavigator();

const AdminNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="User Products" component={UserProducts} />
      <Stack.Screen name="Edit Product" component={EditProducts} />
    </Stack.Navigator>
  );
};

export default AdminNavigator;
