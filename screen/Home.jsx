import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, Modal, TextInput } from 'react-native';
import AllNews from '../components/AllNews';
import InNews from '../components/InNews';
import OutNews from '../components/OutNews';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const TopTab = createMaterialTopTabNavigator();

export default function Home(props) {
  //
  return (
    <TopTab.Navigator>
      <TopTab.Screen
        name="AllNews"
        component={AllNews}
        options={{
          tabBarLabel: 'すべて',
        }}
      />
      <TopTab.Screen
        name="InNews"
        component={InNews}
        options={{
          tabBarLabel: '社内',
        }}
      />
      <TopTab.Screen
        name="OutNews"
        component={OutNews}
        options={{
          tabBarLabel: '社外',
        }}
      />
    </TopTab.Navigator>
  );
}
