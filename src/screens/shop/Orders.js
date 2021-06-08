import React, { useLayoutEffect } from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';

// Shows the list of orders
const Orders = ({ navigation }) => {
  let orders = useSelector(state => state.orders.orders);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Your Orders',
    });
  }, [navigation]);

  return (
    <FlatList
      data={orders}
      keyExtractor={item => item.id}
      renderItem={itemData => <Text>{itemData.item.totalAmount}</Text>}
    />
  );
};

export default Orders;
