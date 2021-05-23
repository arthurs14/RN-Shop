import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import productsReducer from './src/store/reducers/productsReducer';

const rootReducer = combineReducers({
  products: productsReducer,
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <Text>Hello World!</Text>
      </View>
    </Provider>
  );
};

export default App;
