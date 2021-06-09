import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import CartItem from './CartItem';
import Colors from '../../constants/Colors';

const OrderItem = ({ amount, date }) => {
  return (
    <View style={styles.orderItem}>
      <View style={styles.summary}>
        <Text style={styles.totalAmount}>{`$${amount.toFixed(2)}`}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Button color={Colors.primary} title="Show Order Details" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default OrderItem;
