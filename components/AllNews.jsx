import React, { useState } from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  Modal,
  TextInput,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';

export default function AllNews(props) {
  //
  return (
    <SafeAreaView
      style={
        ([styles.container],
        { marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0 })
      }>
      <Text>This is AllNews page</Text>
      <Text>This is AllNews page</Text>
      <Text>This is AllNews page</Text>
      <Text>This is AllNews page</Text>
      <Text>This is AllNews page</Text>
      <Text>This is AllNews page</Text>
      <Text>This is AllNews page</Text>
      <Text>This is AllNews page</Text>
      <Text>This is AllNews page</Text>
      <Text>This is AllNews page</Text>
      <Text>This is AllNews page</Text>
      <Button
        title="GO TO NewsDetail"
        onPress={() => props.navigation.navigate('NewDetail')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: '80%',
  },
  textTaskListTitle: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 20,
    margin: 10,
    borderBottomWidth: 5,
    borderColor: 'gray',
  },
});
