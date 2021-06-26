import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavi from './navigator/AppNavi';
import store from './store/store';
import { Provider } from 'react-redux';

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavi />
      </NavigationContainer>
    </Provider>
    
    
  );
}
