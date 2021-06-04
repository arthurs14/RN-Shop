import { ADD_ORDER } from '../actions/orderActions';
import Order from '../../models/order';

const initialState = {
  orders: [],
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      let newOrder = new Order(
        new Date().toString(),
        action.orderData.items,
        action.orderData.total,
        new Date(),
      );

      return {
        ...state,
        orders: state.orders.concat(newOrder),
      };
  }
  return state;
};

export default ordersReducer;
