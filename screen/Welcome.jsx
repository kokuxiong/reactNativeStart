import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  View,
  Text,
  Button
} from 'react-native';

export default function Welcome(props) {
  
  return (
    <SafeAreaView style={
      { flex:1,alignItems:'center',marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0 }
      }>
      <View style={styles.input}>
        <Text>ようこそ</Text>
        <Text>ようこそ</Text>
        <Text>ようこそ</Text>
      </View>
      
      <View style={styles.bottom}>
        <Button
          style={styles.loginButton}
          title="次へ"
          onPress={() => props.navigation.navigate('Login')}
        />
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex:  1,
    // flexDirection:  'row',
    // justifyContent: 'space-between'
  },
  input: {
    flex:1,
    alignItems:'center',
    marginTop:'50%',
    width:'80%'
  },
  bottom:{
    flex:1,
    justifyContent:'flex-end',
    width:'100%',
    height:36,
    padding:5,
  },
  loginButton: {
    position:'absolute',
    justifyContent:'center',
    alignItems:'center',
  }
});
