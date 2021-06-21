import React, { useLayoutEffect } from 'react';
import { FlatList, Platform, Button, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import ProductItem from '../../components/shop/ProductItem';
import HeaderButton from '../../components/UI/HeaderButton';
import Colors from '../../constants/Colors';
import * as productActions from '../../store/actions/productsActions';

// shows products saved from that user
const UserProducts = ({ navigation }) => {
  const userProducts = useSelector(state => state.products.userProducts);
  const dispatch = useDispatch();

  const deleteProduct = id => {
    Alert.alert('Are you sure?', 'Do you really want to delete this item?', [
      { text: 'No', style: 'default' },
      {
        text: 'Yes',
        style: 'destructive',
        onPress: () => dispatch(productActions.deleteProduct(id)),
      },
    ]);
  };

  const editProduct = id => {
    navigation.navigate('Edit Product', { productId: id });
  };

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
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Add"
            iconName={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
            onPress={() =>
              navigation.navigate('Edit Product', { productId: null })
            }
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
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onSelect={() => editProduct(itemData.item.id)}>
          <Button
            color={Colors.primary}
            title="Edit"
            onPress={() => editProduct(itemData.item.id)}
          />
          <Button
            color={Colors.primary}
            title="Delete"
            onPress={() => deleteProduct(itemData.item.id)}
          />
        </ProductItem>
      )}
    />
  );
};

export default UserProducts;
