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

export default function InNews(props) {
  //
  return (
    <SafeAreaView>
      <Text>This is InNews page</Text>
      <Button
        title="GO TO NewsDetail"
        onPress={() => props.navigation.navigate('NewDetail')}
      />
    </SafeAreaView>
  );
}
