import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  View,
  Button
} from 'react-native';
import { Input } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/actions/item';

export default function Login(props) {
  const [inputMail, setInputMail] = useState('')
  const [inputPassword, setInputPassword] = useState('')
  const [mailErrorMsg, setMailErrorMsg] = useState('')
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('')
  const [loginDisableCtrl, setLoginDisableCtrl] = useState(false)


  const dispatch = useDispatch();

  const changeMail = (text) => {
    setMailErrorMsg(text ? '' : '必須入力です');
    setInputMail(text);
    setLoginDisableCtrl(text && inputPassword)
  }

  const changePassword = (text) => {
    setPasswordErrorMsg(text ? '' : '必須入力です');
    setInputPassword(text)
    setLoginDisableCtrl(text && inputMail)
  }

  const checkMail = () => {
    setMailErrorMsg(inputMail ? '' : '必須入力です');
  }

  const checkPassword = () => {
    setPasswordErrorMsg(inputPassword ? '' : '必須入力です');
  }

  const doLogin = () => {
    dispatch(addItem({ inputMail, inputPassword }));
    props.navigation.navigate('HomeNavi');
  };
  
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
      }}>
      <View style={styles.input}>
        <Input
          style={styles.textInput}
          placeholder="abc@temple.com"
          label="メールアドレス"
          errorStyle={{ color: 'red' }}
          errorMessage={mailErrorMsg}
          onBlur={checkMail}
          value={inputMail}
          onChangeText={(text) => changeMail(text)}
        />
        <Input
          style={styles.textInput}
          placeholder="your password"
          secureTextEntry={true}
          label="パスワード"
          errorStyle={{ color: 'red' }}
          errorMessage={passwordErrorMsg}
          onBlur={checkPassword}
          value={inputPassword}
          onChangeText={(text) => changePassword(text)}
        />
      </View>

      <View style={styles.bottom}>
        <Button
          style={styles.loginButton}
          title="ログイン"
          onPress={doLogin}
          disabled={!loginDisableCtrl}
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
    paddingTop:50,
    width:'80%'
  },
  bottom:{
    flex:1,
    justifyContent:'flex-end',
    width:'100%',
    height:36,
    padding:5
  },
  loginButton: {
    position:'absolute',
    justifyContent:'center',
    alignItems:'center'
  }
});
