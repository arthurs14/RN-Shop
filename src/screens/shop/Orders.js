import React, { useLayoutEffect } from 'react';
import { FlatList, Platform, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/UI/HeaderButton';
import OrderItem from '../../components/shop/OrderItem';

// Shows the list of orders
const Orders = ({ navigation }) => {
  let orders = useSelector(state => state.orders.orders);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Your Orders',
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
  }, [navigation]);

  return (
    <FlatList
      data={orders}
      keyExtractor={item => item.id}
      renderItem={itemData => <OrderItem itemData={itemData.item} />}
    />
  );
};

export default Orders;
