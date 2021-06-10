import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { screenOptions } from './DefaultNavigationSettings';
import UserProducts from '../screens/user/UserProducts';

const Stack = createStackNavigator();

const AdminNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="User Products" component={UserProducts} />
    </Stack.Navigator>
  );
};

export default AdminNavigator;
