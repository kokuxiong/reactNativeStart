import React, { useState } from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  Modal,
  TextInput,
  SafeAreaView,
} from 'react-native';

export default function Login(props) {
  //
  return (
    <SafeAreaView>
      <Text>This is Login page</Text>
      <Button
        title="ログイン"
        onPress={() => props.navigation.navigate('HomeNavi')}
      />
    </SafeAreaView>
  );
}
