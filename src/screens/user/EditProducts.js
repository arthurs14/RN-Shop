import React, {
  useLayoutEffect,
  useState,
  useEffect,
  useCallback,
} from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  LogBox,
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import HeaderButton from '../../components/UI/HeaderButton';

// edit products saved from that user
const EditProducts = ({ navigation, route }) => {
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);
  const { productId } = route.params;

  const editProduct = useSelector(state =>
    state.products.userProducts.find(product => productId === product.id),
  );

  const [title, setTitle] = useState(editProduct ? editProduct.title : '');
  const [imageUrl, setImageUrl] = useState(
    editProduct ? editProduct.imageUrl : '',
  );
  const [price, setPrice] = useState(editProduct ? editProduct.price : '');
  const [description, setDescription] = useState(
    editProduct ? editProduct.description : '',
  );

  // not recreated everytime component re-renders
  const submitHandler = useCallback(() => {
    console.log('Submitting');
  }, []);

  useEffect(() => {
    navigation.setParams({ submit: submitHandler });
  }, [navigation, submitHandler]);

  useLayoutEffect(() => {
    const submitFn = route.params?.submit;
    navigation.setOptions({
      title: productId ? 'Edit Product' : 'Add Product',
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Save"
            iconName={
              Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'
            }
            onPress={submitFn}
          />
        </HeaderButtons>
      ),
    });
  });

  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={text => setTitle(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Image URL</Text>
          <TextInput
            style={styles.input}
            value={imageUrl}
            onChangeText={url => setImageUrl(url)}
          />
        </View>
        {editProduct ? null : (
          <View style={styles.formControl}>
            <Text style={styles.label}>Price</Text>
            <TextInput
              style={styles.input}
              value={price}
              onChangeText={total => setPrice(total)}
            />
          </View>
        )}
        <View style={styles.formControl}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={details => setDescription(details)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 20,
  },
  formControl: {
    width: '100%',
  },
  label: {
    fontFamily: 'OpenSans-Bold',
    marginVertical: 8,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});

export default EditProducts;
