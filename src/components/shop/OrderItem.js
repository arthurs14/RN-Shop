import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Colors from '../../constants/Colors';

const OrderItem = ({ itemData }) => {
  const { totalAmount, readableDate } = itemData;

  return (
    <View style={styles.orderItem}>
      <View style={styles.summary}>
        <Text style={styles.totalAmount}>{`$${totalAmount.toFixed(2)}`}</Text>
        <Text style={styles.date}>{readableDate}</Text>
      </View>
      <Button color={Colors.primary} title="Order Details" />
    </View>
  );
};

const styles = StyleSheet.create({
  orderItem: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    margin: 20,
    padding: 10,
    alignItems: 'center',
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
  totalAmount: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
  },
  date: {
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
    color: '#888',
  },
});

export default OrderItem;
