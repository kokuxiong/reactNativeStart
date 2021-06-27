import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  View,
  Alert ,
} from 'react-native';
import { Text, Chip,ListItem, Divider } from 'react-native-elements';
import { useSelector } from 'react-redux';

export default function MyPage(props) {
  
  const itemList = useSelector((state) => state.item.itemList);

  const account = itemList[itemList.length - 1].account;

  const doAlert = () => {
    Alert.alert(
      "ログアウトします。",
      "よろしいでしょうか？",
      [
        {
          text: "キャンセル",
          style: "cancel"
        },
        { text: "ログアウト", onPress: () => props.navigation.navigate('Login') }
      ]
    );
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
      }}>
      <View style={styles.account}>
        <Chip title="アカウント管理" type="outline" />
        <View style={styles.input}>
          <Text style={styles.mail} h4>登録メールアドレス</Text>
          <Text h5>{account.inputMail}</Text>
          <Divider
            style={{ width: "100%"}}
            color="#2089dc"
            insetType="left"
            width={1}
            orientation="horizontal"
          />
          <Text style={styles.password} h4>パスワード</Text>
          <Text h5>{account.inputPassword}</Text>
          <Divider
            style={{ width: "100%"}}
            color="#2089dc"
            insetType="left"
            width={1}
            orientation="horizontal"
          />
        </View>
      </View>
      
      <Chip title="その他" type="outline" />
      <View style={styles.other}>
        <ListItem onPress={() => {props.navigation.navigate('Webview')}}>
          <ListItem.Content>
            <ListItem.Title>
              会社情報
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem onPress={doAlert}>
          <ListItem.Content>
            <ListItem.Title>
              ログアウト
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
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
  account:{
    width:'100%',
    height:260,
    marginTop:20,
  },
  input: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#42f5f5',
    padding: 10,
    margin:20,
    borderRadius:25,
  },
  other: {
    flex: 1,
  },
  chip: {
    marginBottom: 5,
    marginTop: 5,
  },
  mail: {
    marginBottom: 5,
    marginTop: 10,
  },
  password: {
    marginBottom: 5,
    marginTop: 30,
  },
  modalView: {
    marginTop: '70%',
    marginBottom: '60%',
    marginLeft: '20%',
    marginRight: '20%',
    padding: 5,
    paddingTop: 20,
    backgroundColor: 'orange',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    height: 36,
    padding: 5,
  },
  loginButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
