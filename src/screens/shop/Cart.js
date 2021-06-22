import React, { useLayoutEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Colors from '../../constants/Colors';
import CartItem from '../../components/shop/CartItem';
import Card from '../../components/UI/Card';
import * as cartActions from '../../store/actions/cartActions';
import * as orderActions from '../../store/actions/orderActions';

// Shows items that you added to the cart
const Cart = ({ navigation }) => {
  let cartTotal = useSelector(state => state.cart.totalAmount);
  let cartItems = useSelector(state => {
    let items = [];

    for (const key in state.cart.items) {
      items.push({
        id: key,
        title: state.cart.items[key].title,
        price: state.cart.items[key].price,
        quantity: state.cart.items[key].quantity,
        total: state.cart.items[key].total,
      });
    }

    return items.sort((a, b) => (a.id > b.id ? 1 : -1));
  });

  let dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Your Cart',
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Card style={styles.summary}>
        <Text style={styles.summaryText}>
          Total: <Text style={styles.amount}>${cartTotal.toFixed(2)}</Text>
        </Text>
        <Button
          color={Colors.accent}
          title="Order Now"
          disabled={cartItems.length === 0}
          onPress={() => {
            dispatch(orderActions.addOrder(cartItems, cartTotal));
          }}
        />
      </Card>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id}
        renderItem={itemData => (
          <CartItem
            data={itemData.item}
            deleteable
            remove={() => {
              dispatch(cartActions.removeFromCart(itemData.item.id));
            }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 10,
  },
  summaryText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
  },
  amount: {
    color: Colors.primary,
  },
});

export default Cart;
