import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { FontAwesome5 } from '@expo/vector-icons';

//dummy data
const list = [
  {
    id: 1,
    title: 'dummy title1',
    flag: 1,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 2,
    title: 'dummy title2',
    flag: 1,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 3,
    title: 'dummy title3',
    flag: 1,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 4,
    title: 'dummy title4',
    flag: 1,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 5,
    title: 'dummy title5',
    flag: 2,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 6,
    title: 'dummy title6',
    flag: 1,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 7,
    title: 'dummy title7',
    flag: 2,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 8,
    title: 'dummy title8',
    flag: 1,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 9,
    title: 'dummy title9',
    flag: 2,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 10,
    title: 'dummy title10',
    flag: 2,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 11,
    title: 'dummy title11',
    flag: 2,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 12,
    title: 'dummy title12',
    flag: 2,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 13,
    title: 'dummy title13',
    flag: 2,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 14,
    title: 'dummy title14',
    flag: 2,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 15,
    title: 'dummy title15',
    flag: 1,
    image: 'https://picsum.photos/200/300',
  },
];

export default function AllNews(props) {

  const [sort, setSort] = useState(true);

  const doSort = () => {
    setSort(!sort);
    list.reverse();
  };
  //
  return (
    <SafeAreaView
      style={
        ([styles.container],
        { marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0 })
      }>
      <ScrollView>
        <View style={styles.count}>
          <Text>{list.length}件</Text>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center' }}
            onPress={doSort}>
            {sort ? (
              <FontAwesome5 name="sort-alpha-up" size={24} color="black" />
            ) : (
              <FontAwesome5
                name="sort-alpha-down-alt"
                size={24}
                color="black"
              />
            )}
            <Text>時間順</Text>
          </TouchableOpacity>
        </View>
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
  count: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
});
