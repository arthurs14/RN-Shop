import PRODUCTS from '../../data/dummy-data';
import Product from '../../models/product';
import {
  DELETE_PRODUCT,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
} from '../actions/productsActions';

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter(product => product.ownerId === 'u1'),
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      const newProduct = new Product(
        new Date().toString(),
        'u1',
        action.productData.title,
        action.productData.imageUrl,
        action.productData.description,
        action.productData.price,
      );

      return {
        ...state,
        availableProducts: state.availableProducts.concat(newProduct),
        userProducts: state.userProducts.concat(newProduct),
      };
    case UPDATE_PRODUCT:
      const { productId } = action;
      const productIndex = state.userProducts.findIndex(
        item => item.id === productId,
      );
      const availableProductIndex = state.availableProducts.findIndex(
        item => item.id === productId,
      );

      const updateProduct = new Product(
        productId,
        state.userProducts[productIndex].ownerId,
        action.productData.title,
        action.productData.imageUrl,
        action.productData.description,
        state.userProducts[productIndex].price,
      );

      let updateUserProducts = [...state.userProducts];
      updateUserProducts[productIndex] = updateProduct;

      let updateAvailableProducts = [...state.availableProducts];
      updateAvailableProducts[availableProductIndex] = updateProduct;

      return {
        ...state,
        availableProducts: updateAvailableProducts,
        userProducts: updateUserProducts,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        userProducts: state.userProducts.filter(
          product => product.id !== action.pid,
        ),
        availableProducts: state.availableProducts.filter(
          product => product.id !== action.pid,
        ),
      };
  }
  return state;
};

export default productsReducer;
