import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { useSelector } from 'react-redux';

import Colors from '../../constants/Colors';

// Shows items that you added to the cart
const Cart = () => {
  let cartTotal = useSelector(state => state.cart.totalAmount);

  return (
    <View style={styles.container}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total: <Text style={styles.amount}>${cartTotal}</Text>
        </Text>
        <Button title="Order Now" />
      </View>
      <View>
        <Text>CART ITEMS</Text>
        {/* Will be FlatList in future */}
      </View>
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
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
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
