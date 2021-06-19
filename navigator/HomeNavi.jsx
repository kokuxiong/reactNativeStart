import React from 'react';
import Home from '../screen/Home';
import MyPage from '../screen/MyPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomTab = createBottomTabNavigator();

export default function HomeNavi(props) {
  //
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="MyPage" component={MyPage} />
    </BottomTab.Navigator>
  );
}
