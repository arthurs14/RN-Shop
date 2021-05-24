import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import ProductsOverview from '../screens/shop/ProductsOverview';
import Colors from '../constants/Colors';

const Stack = createStackNavigator();

const ProductsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'andorid' ? Colors.primary : 'white',
          headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
        },
      }}>
      <Stack.Screen name="Products Overview" component={ProductsOverview} />
    </Stack.Navigator>
  );
};

export default ProductsNavigator;
