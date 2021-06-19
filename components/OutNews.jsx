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

export default function OutNews(props) {
  //
  return (
    <SafeAreaView>
      <Text>This is OutNews page</Text>
      <Button
        title="GO TO NewsDetail"
        onPress={() => props.navigation.navigate('NewDetail')}
      />
    </SafeAreaView>
  );
}
