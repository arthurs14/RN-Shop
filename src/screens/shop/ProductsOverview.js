import React, { useLayoutEffect } from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cartActions';

// Shows the list of all products that will be in our application
const ProductsOverview = ({ navigation }) => {
  const products = useSelector(state => state.products.availableProducts);
  const dispatch = useDispatch();

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
          addToCart={() => {
            dispatch(cartActions.addToCart(itemData.item));
          }}
        />
      )}
    />
  );
};

export default ProductsOverview;
