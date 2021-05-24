import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const ProductItem = () => {
  return (
    <View>
      <Image />
      <Text>Title</Text>
      <Text>Price</Text>
      <View>
        <Button title="View Details" />
        <Button title="To Cart" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProductItem;
