import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  View,
  Button,
  Modal,
} from 'react-native';
import { Text } from 'react-native-elements';

export default function MyPage(props) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={
      { flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0 
      }
      }>
      <View style={styles.input}>
        <Text>MyPage</Text>
        <Text>MyPage</Text>
        <Text>MyPage</Text>
      </View>
      
      <View style={styles.bottom}>
        <Button
          style={styles.loginButton}
          title="ログアウト"
          onPress={() => setModalVisible(!modalVisible)}
        />
      </View>
      <Modal 
        animationType="slide" 
        transparent={false} 
        visible={modalVisible} 
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.modalView}>
          <Text h1>ログアウト</Text>
          <Text h4>ログアウトします。</Text>
          <Text h4 style={{marginBottom:50}}>よろしいでしょうか？</Text>
          <Button 
            title="キャンセル" 
            onPress={() => setModalVisible(!modalVisible)}
          />
          <Button 
            title="ログアウト" 
            onPress={() => props.navigation.navigate('Login')}
          />
        </View>
      </Modal>
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
  modalView:{
    marginTop:'70%',
    marginBottom:'60%',
    marginLeft:'20%',
    marginRight:'20%',
    padding: 5,
    paddingTop:20,
    backgroundColor:'orange',
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'center'
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
