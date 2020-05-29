import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { SwipableCarousel } from 'react-native-swipable-carousel';

export default function App() {
  return (
    <View style={styles.container}>
      <ShowSwipableCarouselWithImages />
    </View>
  );
}

const ShowSwipableCarouselWithViews = () => {
  return (
    <SwipableCarousel itemHeight={200}>
      <View style={{ height: 200, width: 300, backgroundColor: 'red' }} />
      <View style={{ height: 200, width: 300, backgroundColor: 'blue' }} />
      <View style={{ height: 200, width: 300, backgroundColor: 'green' }} />
      <View style={{ height: 200, width: 300, backgroundColor: 'black' }} />
      <View style={{ height: 200, width: 300, backgroundColor: 'yellow' }} />
      <View style={{ height: 200, width: 300, backgroundColor: 'brown' }} />
    </SwipableCarousel>
  );
};

const ShowSwipableCarouselWithImages = () => {
  return (
    <SwipableCarousel itemHeight={200}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://source.unsplash.com/collection/446755/200x300',
        }}
      />
      <Image
        style={styles.image}
        source={{
          uri: 'https://source.unsplash.com/collection/1758353/200x300?',
        }}
      />
      <Image
        style={styles.image}
        source={{
          uri: 'https://source.unsplash.com/collection/219941/200x300',
        }}
      />
      <Image
        style={styles.image}
        source={{
          uri: 'https://source.unsplash.com/collection/762960/200x300',
        }}
      />
      <Image
        style={styles.image}
        source={{
          uri: 'https://source.unsplash.com/collection/3178572/200x300',
        }}
      />
      <Image
        style={styles.image}
        source={{
          uri: 'https://source.unsplash.com/collection/162326/200x300',
        }}
      />
      <Image
        style={styles.image}
        source={{
          uri: 'https://source.unsplash.com/collection/1248080/200x300',
        }}
      />
      <Image
        style={styles.image}
        source={{
          uri: 'https://source.unsplash.com/collection/1227291/200x300',
        }}
      />
      <Image
        style={styles.image}
        source={{
          uri: 'https://source.unsplash.com/collection/531563/200x300',
        }}
      />
      <Image
        style={styles.image}
        source={{
          uri: 'https://source.unsplash.com/collection/1118894/200x300',
        }}
      />
      <Image
        style={styles.image}
        source={{
          uri: 'https://source.unsplash.com/collection/388793/200x300',
        }}
      />
    </SwipableCarousel>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
    backgroundColor: 'black',
  },
  image: {
    width: 300,
    height: 200,
    borderWidth: 1,
    borderColor: 'white',
  },
});
