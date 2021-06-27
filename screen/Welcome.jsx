import React, { useRef } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  View,
  Text,
  Button
} from 'react-native';
import Swiper from 'react-native-web-swiper';

export default function Welcome(props) {

  const swiperRef = useRef(null)
  
  const doNext = () => {

    const activeIndex = swiperRef.current.getActiveIndex()

    if(activeIndex === 0 || activeIndex === 1){
      swiperRef.current.goToNext();
    }

    if(activeIndex === 2){
      props.navigation.navigate('Login')
    }
  }

  return (
    <SafeAreaView style={[styles.container,{marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0}]}>
      <Swiper ref={swiperRef}>
          <View style={[styles.slideContainer,styles.slide1]}>
            <Text>Slide 1</Text>
          </View>
          <View style={[styles.slideContainer,styles.slide2]}>
            <Text>Slide 2</Text>
          </View>
          <View style={[styles.slideContainer,styles.slide3]}>
            <Text>Slide 3</Text>
          </View>
      </Swiper>
      <View>
        <Button title="次へ" onPress={doNext}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slideContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide1: {
    backgroundColor: 'rgba(20,20,200,0.3)',
  },
  slide2: {
    backgroundColor: 'rgba(20,200,20,0.3)',
  },
  slide3: {
    backgroundColor: 'rgba(200,20,20,0.3)',
  }
});
