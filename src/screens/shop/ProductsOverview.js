import React from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';

// Shows the list of all products that will be in our application
const ProductsOverview = () => {
  const products = useSelector(state => state.products.availableProducts);

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={itemData => <Text>{itemData.item.title}</Text>}
    />
  );
};

export default ProductsOverview;
