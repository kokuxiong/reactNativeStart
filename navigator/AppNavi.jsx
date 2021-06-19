import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import HomeNavi from '../navigator/HomeNavi';
import Login from '../screen/Login';
import Welcome from '../screen/Welcome';
import NewDetail from '../screen/NewDetail';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function AppNavi(props) {
  //
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="HomeNavi" component={HomeNavi} />
      <Stack.Screen name="NewDetail" component={NewDetail} />
    </Stack.Navigator>
  );
}
