import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Details from '../pages/Details';

const App = createStackNavigator();

const AppRoutes = () => (
  <App.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: true,
      headerStyle: {
        backgroundColor: '#673AB7',
      },
      headerTintColor: '#fff',
    }}
  >
    <App.Screen
      name="Home"
      component={Home}
      options={{ headerShown: true, title: 'Movies' }}
    />
    <App.Screen
      name="Details"
      component={Details}
      options={{ headerShown: true }}
    />
  </App.Navigator>
);

export default AppRoutes;
