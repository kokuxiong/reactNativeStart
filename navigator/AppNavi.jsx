import React from 'react';
import { TouchableOpacity } from 'react-native';
import HomeNavi from '../navigator/HomeNavi';
import Login from '../screen/Login';
import Welcome from '../screen/Welcome';
import NewsDetail from '../screen/NewsDetail';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';

const Stack = createStackNavigator();

export default function AppNavi(props) {
  //
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={({ route, navigation }) => ({
          title: '',
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={({ route, navigation }) => ({
          title: 'ログイン',
          headerLeft: () => (
            <TouchableOpacity style={{ marginLeft: 10 }}>
              <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="HomeNavi"
        component={HomeNavi}
        options={({ route, navigation }) => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="NewsDetail"
        component={NewsDetail}
        options={({ route, navigation }) => ({
          title: '',
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 10 }}
              onPress={() => {
                navigation.goBack();
              }}>
              <AntDesign name="left" size={24} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
}
