import { template } from '@babel/core';
import React, { useLayoutEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ScrollView,
} from 'react-native';
import { useSelector } from 'react-redux';

// Shows information about one product when selected
const ProductDetail = ({ navigation, route }) => {
  const { productId } = route.params;
  const product = useSelector(state =>
    state.products.availableProducts.find(item => item.id === productId),
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: product.title,
    });
  });

  return (
    <View>
      <Text>Product Detail Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProductDetail;
