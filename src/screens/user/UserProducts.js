import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';

// shows products saved from that user
const UserProducts = () => {
  const userProducts = useSelector(state => state.products.userProducts);
  console.log(userProducts);
  return (
    <FlatList
      data={userProducts}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <ProductItem
          product={itemData.item}
          viewDetail={() => {}}
          addToCart={() => {}}
        />
      )}
    />
  );
};

export default UserProducts;
