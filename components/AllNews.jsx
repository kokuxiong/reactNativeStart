import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { useSelector } from 'react-redux';



//dummy data
const list = [
  {
    id: 1,
    title: 'dummy title1',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 2,
    title: 'dummy title2',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 3,
    title: 'dummy title3',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 3,
    title: 'dummy title3',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 3,
    title: 'dummy title3',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 3,
    title: 'dummy title3',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 3,
    title: 'dummy title3',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 3,
    title: 'dummy title3',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 3,
    title: 'dummy title3',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 3,
    title: 'dummy title3',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 3,
    title: 'dummy title3',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 3,
    title: 'dummy title3',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 3,
    title: 'dummy title3',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 3,
    title: 'dummy title3',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 3,
    title: 'dummy title3',
    image: 'https://picsum.photos/200/300',
  },
];

export default function AllNews(props) {
  // const items = useSelector((state) => state.item2.itemList);
  const state = useSelector((state) => state);
  // const items2 = useSelector((state) => state.itemList);
  // const items3 = useSelector((state) => state.itemList.itemList);

  console.log('test');
  // console.log(items);
  console.log(JSON.stringify(state));
  // console.log(JSON.stringify(items2));
  // console.log(JSON.stringify(items3));
  console.log('test');
  //
  return (
    <SafeAreaView
      style={
        ([styles.container],
        { marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0 })
      }>
      <ScrollView>
        {list.map((item, index) => (
          <ListItem
            key={index}
            bottomDivider
            onPress={() =>
              props.navigation.navigate('NewsDetail', { id: item.id })
            }>
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
            <Avatar source={{ uri: item.image }} />
          </ListItem>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
