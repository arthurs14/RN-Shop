import React, {
  useLayoutEffect,
  useEffect,
  useCallback,
  useReducer,
} from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  LogBox,
  Alert,
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import HeaderButton from '../../components/UI/HeaderButton';
import * as productActions from '../../store/actions/productsActions';

const FORM_UPDATE = 'FORM_UPDATE';

const formReducer = (state, action) => {
  if (action.type === FORM_UPDATE) {

  }
};

// edit products saved from that user
const EditProducts = ({ navigation, route }) => {
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);
  const { productId } = route.params;

  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      title: editProduct ? editProduct.title : '',
      imageUrl: editProduct ? editProduct.imageUrl : '',
      description: editProduct ? editProduct.description : '',
      price: '',
    },
    inputValidities: {
      title: editProduct ? true : false,
      imageUrl: editProduct ? true : false,
      description: editProduct ? true : false,
      price: editProduct ? true : false,
    },
    formIsValid: editProduct ? true : false,
  });

  const editProduct = useSelector(state =>
    state.products.userProducts.find(product => productId === product.id),
  );

  // not recreated everytime component re-renders unless values exist to
  // re-render
  const submitHandler = useCallback(() => {
    if (!titleIsValid) {
      Alert.alert('Wrong Input.', 'Please check the errors in the form.', [
        { text: 'Okay' },
      ]);
      return;
    }
    if (editProduct) {
      // edit product
      dispatch(
        productActions.updateProduct(productId, title, description, imageUrl),
      );
      console.log('Producted Edited Saved');
    } else {
      // add
      dispatch(
        productActions.createProduct(title, description, imageUrl, +price),
      );
      console.log('Product Created Saved');
    }

    navigation.goBack();
  }, [
    dispatch,
    editProduct,
    productId,
    title,
    description,
    imageUrl,
    price,
    navigation,
    titleIsValid,
  ]);

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

  const changeTitle = text => {
    let isValid = false;
    if (text.trim().length > 0) {
      isValid = true;
    }

    dispatchFormState({
      type: FORM_UPDATE,
      value: text,
      isValid: isValid,
      input: 'title',
    });
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={changeTitle}
            keyboardType="default"
            autoCapitalize="sentences"
            autoCorrect
            returnKeyType="next"
            onEndEditing={() => console.log('onEndEditing')}
            onSubmitEditing={() => console.log('onSubmitEditing')}
          />
          {!titleIsValid && <Text>Please Enter a Valid Title!</Text>}
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
              keyboardType="decimal-pad"
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
