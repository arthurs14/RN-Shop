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

      let cartItem;

      if (state.items[addProduct.id]) {
        // already exists
        cartItem = new CartItem(
          state.items[addProduct.id].quantity + 1,
          price,
          title,
          state.items[addProduct.id].total + price,
        );
        return {
          ...state,
          items: { ...state.items, [addProduct.id]: cartItem },
          totalAmount: state.totalAmount + price,
        };
      } else {
        cartItem = new CartItem(1, price, title, price);
        return {
          ...state,
          items: { ...state.items, [addProduct.id]: cartItem },
          totalAmount: state.totalAmount + price,
        };
      }
  }
  return state;
};

export default cartReducer;
