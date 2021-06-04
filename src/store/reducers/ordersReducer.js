import { ADD_ORDER } from '../actions/orderActions';

const initialState = {
  orders: [],
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return state;
  }
  return state;
};

export default ordersReducer;
