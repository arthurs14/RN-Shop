import { ADD_TO_CART } from '../actions/cartActions';
import CartItem from '../../models/cart-item';

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

      if (state.items[addProduct.id]) {
        // already exists
      } else {
        const newCartItem = new CartItem(1, price, title, price);
        return {
          ...state,
          items: {
            ...state.items,
            [addProduct.id]: newCartItem,
          },
        };
      }
      break;
  }
  return state;
};

export default cartReducer;
