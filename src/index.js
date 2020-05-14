import React from 'react';
import './config/ReactotronConfig';

import { StatusBar, View } from 'react-native';

import Routes from './routes';

const App = () => (
  <View style={{ backgroundColor: '#FAFAFA', flex: 1 }}>
    <StatusBar barStyle="light-content" backgroundColor="#522E92" />
    <Routes />
  </View>
);

export default App;
