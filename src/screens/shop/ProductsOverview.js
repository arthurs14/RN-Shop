import React, { useLayoutEffect } from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';

// Shows the list of all products that will be in our application
const ProductsOverview = ({ navigation }) => {
  const products = useSelector(state => state.products.availableProducts);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Products',
    });
  }, [navigation]);

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <ProductItem
          product={itemData.item}
          viewDetail={() =>
            navigation.navigate('Product Detail', {
              productId: itemData.item.id,
            })
          }
          addToCart={() => {}}
        />
      )}
    />
  );
};

export default ProductsOverview;
