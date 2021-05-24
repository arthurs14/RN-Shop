import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const ProductItem = ({ product, viewDetail, addToCart }) => {
  return (
    <View style={styles.product}>
      <Image style={styles.image} source={{ uri: product.imageUrl }} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>{`$${product.price.toFixed(2)}`}</Text>
      <View style={styles.actions}>
        <Button title="View Details" onPress={viewDetail} />
        <Button title="Add To Cart" onPress={addToCart} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 300,
    margin: 20,
  },
  image: {
    width: '100%',
    height: '60%',
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default ProductItem;
