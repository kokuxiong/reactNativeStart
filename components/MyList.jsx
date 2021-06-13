import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

export default function MyList(props) {
  //
  const deleteCurrent = (curIndex) => {
    props.deleteTask(curIndex);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textNo}>No.{props.index}</Text>
      <Text style={styles.text} onPress={() => deleteCurrent(props.index)}>
        {props.item}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  textNo: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'blue',
    padding: 5,
    margin: 5,
  },
  text: {
    backgroundColor: 'orange',
    borderWidth: 1,
    borderColor: 'blue',
    padding: 5,
    margin: 5,
  },
});
