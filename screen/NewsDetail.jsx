import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import { Card } from 'react-native-elements';

export default function NewsDetail(props) {
  //
  return (
    <SafeAreaView
      style={
        ([styles.container],
        { marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0 })
      }>
      <Card>
        <Card.Title>dummy title (id:{props.route.params?.id})</Card.Title>
        <Card.Divider />
        <Card.Image
          source={{ uri: 'https://picsum.photos/200/300' }}></Card.Image>
        <Text>this is dummy content</Text>
        <Text>this is dummy content</Text>
        <Text>this is dummy content</Text>
        <Text>this is dummy content</Text>
      </Card>
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
