import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartActions';
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
      }

      return {
        ...state,
        items: { ...state.items, [addProduct.id]: cartItem },
        totalAmount: state.totalAmount + price,
      };
    case REMOVE_FROM_CART:
      // gets product information
      const selectedCartItem = state.items[action.id];
      let currentCart = selectedCartItem.quantity;
      let updateCartItems;

      if (currentCart > 1) {
        // reduce quantity by 1 and subtract from price
        let updatedCartItem = new CartItem(
          selectedCartItem.quantity - 1,
          selectedCartItem.price,
          selectedCartItem.title,
          selectedCartItem.total - selectedCartItem.price,
        );

        updateCartItems = { ...state.items, [action.id]: updatedCartItem };
      } else {
        // update cart and deletes from object
        updateCartItems = { ...state.items };
        delete updateCartItems[action.id];
      }

      return {
        ...state,
        items: updateCartItems,
        totalAmount: Math.abs(state.totalAmount - selectedCartItem.price),
      };
  }
  return state;
};

export default cartReducer;
