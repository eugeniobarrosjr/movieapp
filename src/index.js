import React from 'react';
import './config/ReactotronConfig';

import { StatusBar, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';

import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <View style={{ backgroundColor: '#FAFAFA', flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="#522E92" />
      <Routes />
    </View>
  </Provider>
);

export default App;
