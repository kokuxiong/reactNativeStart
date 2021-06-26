import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavi from './navigator/AppNavi';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import itemReducer from './store/reducer/item';

const rootReducer = combineReducers({
  item: itemReducer
})

const store = createStore(rootReducer)

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavi />
      </NavigationContainer>
    </Provider>
    
    
  );
}
