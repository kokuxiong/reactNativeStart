import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, Modal, TextInput } from 'react-native';

export default function MyAdd(props) {
  //
  const [inputTask, setInputTask] = useState('');

  const doAdd = () => {
    props.add(inputTask);
    props.showAddModal();
    setInputTask('');
  };

  const cancel = () => {
    props.showAddModal();
    setInputTask('');
  };

  const close = () => {
    props.showAddModal();
    setInputTask('');
  };

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={props.isShowAdd}
      onRequestClose={close}>
      <View style={styles.modal}>
        <TextInput
          style={styles.text}
          onChangeText={(text) => {
            setInputTask(text);
          }}
          value={inputTask}
          placeholder="please enter the task..."></TextInput>
        <Button title="cancel" onPress={cancel} />
        <Button title="add" onPress={doAdd} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    marginTop: '50%',
    marginBottom: '50%',
    marginLeft: '10%',
    marginRight: '10%',
    borderWidth: 3,
    backgroundColor: 'orange',
    borderWidth: 5,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  text: {
    margin: 10,
    marginBottom: 20,
    padding: 5,
    width: 200,
    height: 50,
  },
});
