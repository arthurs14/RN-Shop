import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';

// Shows items that you added to the cart
const Cart = () => {
  return (
    <View>
      <View>
        <Text>
          Total: <Text>${19.99}</Text>
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

const styles = StyleSheet.create({});

export default Cart;
