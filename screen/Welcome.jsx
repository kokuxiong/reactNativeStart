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

export default function Welcome(props) {
  //
  return (
    <SafeAreaView>
      <Text>This is welcom page</Text>
      <Button title="次へ" onPress={() => props.navigation.navigate('Login')} />
    </SafeAreaView>
  );
}
