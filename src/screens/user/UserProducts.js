import React, { useLayoutEffect } from 'react';
import { FlatList, Platform } from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import ProductItem from '../../components/shop/ProductItem';
import HeaderButton from '../../components/UI/HeaderButton';

// shows products saved from that user
const UserProducts = ({ navigation }) => {
  const userProducts = useSelector(state => state.products.userProducts);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Your Products',
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
            onPress={() => navigation.toggleDrawer()}
          />
        </HeaderButtons>
      ),
    });
  });

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
