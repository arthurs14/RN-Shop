import React, { useLayoutEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Button,
} from 'react-native';
import { useSelector } from 'react-redux';

import Colors from '../../constants/Colors';

// Shows information about one product when selected
const ProductDetail = ({ navigation, route }) => {
  const { productId } = route.params;
  const product = useSelector(state =>
    state.products.availableProducts.find(item => item.id === productId),
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: product.title,
    });
  });

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: product.imageUrl }} />
      <View style={styles.actions}>
        <Button color={Colors.primary} title="Add to Cart" onPress={() => {}} />
      </View>
      <Text style={styles.price}>{`$${product.price.toFixed(2)}`}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  actions: {
    marginVertical: 10,
    alignItems: 'center',
  },
  price: {
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default ProductDetail;
