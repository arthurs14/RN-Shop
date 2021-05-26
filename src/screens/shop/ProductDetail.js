import React, { useLayoutEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Button,
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
    <ScrollView>
      <Image source={{ uri: product.imageUrl }} />
      <Button title="Add to Cart" onPress={() => {}} />
      <Text>{`$${product.price.toFixed(2)}`}</Text>
      <Text>{product.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default ProductDetail;
