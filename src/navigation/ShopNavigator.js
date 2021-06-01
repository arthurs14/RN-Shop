import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import ProductsOverview from '../screens/shop/ProductsOverview';
import ProductDetail from '../screens/shop/ProductDetail';
import Cart from '../screens/shop/Cart';
import Colors from '../constants/Colors';

const Stack = createStackNavigator();

const ProductsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
        },
        headerTitleStyle: {
          fontFamily: 'OpenSans-Bold',
        },
        headerBackTitleStyle: {
          fontFamily: 'OpenSans-Regular',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
      }}>
      <Stack.Screen name="Products Overview" component={ProductsOverview} />
      <Stack.Screen name="Product Detail" component={ProductDetail} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default ProductsNavigator;
