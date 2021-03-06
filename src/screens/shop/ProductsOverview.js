import React, { useLayoutEffect } from 'react';
import { FlatList, Platform, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cartActions';
import HeaderButton from '../../components/UI/HeaderButton';
import Colors from '../../constants/Colors';

// Shows the list of all products that will be in our application
const ProductsOverview = ({ navigation }) => {
  const products = useSelector(state => state.products.availableProducts);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Products',
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
            title="Cart"
            iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
            onPress={() => navigation.navigate('Cart')}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  const selectItem = (id, title) => {
    navigation.navigate(title, {
      productId: id,
    });
  };

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onSelect={() => selectItem(itemData.item.id, 'Product Detail')}>
          <Button
            color={Colors.primary}
            title="View Details"
            onPress={() => selectItem(itemData.item.id, 'Product Detail')}
          />
          <Button
            color={Colors.primary}
            title="Add to Cart"
            onPress={() => dispatch(cartActions.addToCart(itemData.item))}
          />
        </ProductItem>
      )}
    />
  );
};

export default ProductsOverview;
