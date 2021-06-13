import React from 'react';
import {useEffect, useState} from 'react'
import { StyleSheet, Text, View, Button, TextInput, FlatList, SafeAreaView, StatusBar, Platform, Modal } from 'react-native';
import MyList from './components/MyList'
import MyAdd from './components/MyAdd';

export default function App() {

  const [taskList, setTaskList] = useState([])

  const [isShowAdd, setIsShowAdd] = useState(false)

  //なぜ入力ごとにこいつがでてくる
  // console.log('taskList', taskList)
  // console.log('PlatForm.os', Platform.OS)
  // console.log('StatusBar', StatusBar.currentHeight)

  const add = (input) => {
    if(input){
      setTaskList([...taskList, input])
    }
  }

  const showAddModal = () => {
    setIsShowAdd(!isShowAdd)
  }

  const deleteTask = (deleteIndex) => {
    const afterDelete = taskList.filter((item,index) => index !== deleteIndex)
    setTaskList(afterDelete)
  }

  return (
    <SafeAreaView style={[styles.container], {marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0}}>
      <Button title="Add" onPress={() => showAddModal()}></Button>

      <MyAdd isShowAdd={isShowAdd} add={add} showAddModal={showAddModal}></MyAdd>

      <Text style={styles.textTaskListTitle}>タスクリスト一覧</Text>

      <FlatList 
        keyExtractor={(item, index) => String(index)}
        data={taskList} 
        renderItem={({item,index}) => {return (<MyList item={item} index={index} deleteTask={deleteTask}></MyList>)}}></FlatList>

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
  textInput:{
    borderWidth: 1,
    borderColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: '80%',
  },  
  textTaskListTitle:{
    textAlign:'center',
    fontWeight:'500',
    fontSize:20,
    margin:10,
    borderBottomWidth:5,
    borderColor:'gray'
  }
});
