import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProductsOverview from '../screens/shop/ProductsOverview';
import ProductDetail from '../screens/shop/ProductDetail';
import Cart from '../screens/shop/Cart';
import { screenOptions } from './DefaultNavigationSettings';

const Stack = createStackNavigator();

const ProductsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Products Overview" component={ProductsOverview} />
      <Stack.Screen name="Product Detail" component={ProductDetail} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default ProductsNavigator;
