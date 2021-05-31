import React, { useLayoutEffect } from 'react';
import { FlatList, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cartActions';
import HeaderButton from '../../components/UI/HeaderButton';

// Shows the list of all products that will be in our application
const ProductsOverview = ({ navigation }) => {
  const products = useSelector(state => state.products.availableProducts);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Products',
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Cart"
            iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
            onPress={() => {}}
          />
        </HeaderButtons>
      ),
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
          addToCart={() => {
            dispatch(cartActions.addToCart(itemData.item));
          }}
        />
      )}
    />
  );
};

export default ProductsOverview;
