import { ADD_TO_CART } from '../actions/cartActions';

const initialState = {
  items: {},
  totalAmount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addProduct = action.product;
      const price = addProduct.price;
      const title = addProduct.title;
      break;
  }
  return state;
};

export default cartReducer;
