# react-native-swipable-carousel

Vertical carousel component for React Native with performant animations running on the native thread

## Installation

This library is using a few other libraries in order to run animations in a performant way on the native thread.
If you don't use them already, install them as your first step.

```sh

npm install react-native-gesture-handler react-native-reanimated react-native-redash

npm install react-native-swipable-carousel

cd ios
pod install

```

## Usage

You can use any fixed height views, images and similar as items of the carousel.

<img width="300" height="600" src="https://github.com/nechmads/demo_images/blob/master/fflabs_react_native_swipable_carousel/SwipableCarousel.gif?raw=true">

```js
import { SwipableCarousel } from 'react-native-swipable-carousel';

export default function App() {
  return (
    <SwipableCarousel itemHeight={100}>
      <View style={{ height: 200, width: 300, backgroundColor: 'red' }} />
      <View style={{ height: 200, width: 300, backgroundColor: 'blue' }} />
      <View style={{ height: 200, width: 300, backgroundColor: 'green' }} />
      <View style={{ height: 200, width: 300, backgroundColor: 'black' }} />
      <View style={{ height: 200, width: 300, backgroundColor: 'yellow' }} />
      <View style={{ height: 200, width: 300, backgroundColor: 'brown' }} />
    </SwipableCarousel>
  );
}
```

## License

MIT
